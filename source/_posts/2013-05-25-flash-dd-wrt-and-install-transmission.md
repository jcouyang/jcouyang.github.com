---
layout: post
title: "flash dd-wrt and install transmission in WNR2200 router"
date: 2013-05-25 21:54
comments: true
categories: ["hack"]
---

# Prepaire #
- USB disk
格式化成ext2/3格式, with gparted in linux. 根据官方wiki, 最新的v24已经
不用jffs了, 目前的dd-wrt目录结构是这样的:

```
/tmp ## mounted on the RAM drive of dd-wrt
/jffs  ## builti-in flash, 已经disable
/mnt ## used for rw drive
```

因此根据需要格式化, 如果你的硬盘一直要与路由连, 或者需要在硬盘上装软件
, 就格成ext3,如果只是存储数据, whatever, fat也可用

> Use ONLY ext2/3 for partition/drives that you plan for permanent connection to your DD-WRT box, or for drives where you plan to install additional software packages onto (like optware, Samba, Torrent etc.). You can use any of the three mount points: /opt, /mnt, /jffs

>Use FAT32 on data partitions if you intend to connect this drive to other systems (MAC, Windows) to copy files from/to directly. You should use the mount point: /mnt 

wiki建议连路由专用的硬盘可用格式成这样
```
    one: for optware packages - make it 32MB - 2GB - use ext2/3 as the format
    two: for swap file - make it 16-256 MB - format it as linux swap file
    three: for data space - make it fit the rest of the disk - use ext2/3 or FAT32 as the format
    four: for jffs space - make it 32MB - 2GB - use ext2/3 as the format 
```

- Connection
你需要用ssh或者telnet连接router来安装软件
<!-- more -->
# Installation #
- mount your usb
  Under Services->USB:
       * Enable Core USB Support
       *  Disable USB Printer Support (enable it if you need printing support)
       * Enable USB Storage Support
       * Enable Automatic Drive Mount
       * Set Disk Mount Point to /mnt
       * Click Apply Settings 

- make sure mount it to `/mnt`
我的usb读卡器mount到了`/mnt/sda_part1`上, 需要再手动mount到mnt目录下

- mount some directions 
```sh
cd /mnt
mkdir etc opt root
touch optware.enable
chmod 755 etc opt root
mkdir opt/lib
chmod 755 opt/lib
cp -a /etc/* /mnt/etc/
mount -o bind /mnt/etc /etc
mount -o bind /mnt/opt /jffs 
```

- install opkg and libc

```sh
wget http://downloads.openwrt.org/backfire/10.03.1/ar71xx/packages/opkg_576-2_ar71xx.ipk
ipkg install libc_0.9.30.1-43.32_ar71xx.ipk 
wget http://downloads.openwrt.org/snapshots/trunk/ar71xx/packages/libc_0.9.33.2-1_ar71xx.ipk
opkg install libc_0.9.33.2-1_ar71xx.ipk
```

- Type the following lines to create the configuration file for opkg:

```sh
cat > /etc/opkg.conf << EOF
src/gz snapshots http://downloads.openwrt.org/snapshots/trunk/ar71xx/packages
dest root /opt
dest ram /opt/tmp
lists_dir ext /opt/tmp/var/opkg-lists
EOF 
```

- Make sure opkg is ok
```sh
umount /jffs
mount -o bind /mnt/root /tmp/root
mount -o bind /mnt/opt /opt
export LD_LIBRARY_PATH='/opt/lib:/opt/usr/lib:/lib:/usr/lib'
opkg update 
```

- now you can install transmission

`opkg install transmission-daemon transmission-web`

- Finally change the transmission-web PATH
transmission-web 的index.html文件都在
`/opt/usr/share/transmission/web/`下, 而默认transmission会到`/tmp/`下
找,  因此需要link下
      ln -s /opt/usr/share/transmission/web/ /tmp/root/.local/share/transmission/web


# Configure #
- start daemon first
`transmission-daemon -g /mnt/data/torrents/.config/transmission-daemon
killall transmission-daemon`

- edit `setting.json`
`vi /mnt/data/torrents/.config/transmission-daemon/settings.js`
编辑确保跟如下几行一样
```json
  {
     "blocklist-enabled": 1,
     "download-dir": "\/mnt\/data\/torrents",
     "download-limit": 100,
     "download-limit-enabled": 1,
     "encryption": 2,
     "max-peers-global": 35,
     "peer-port": 25000,
     "pex-enabled": 1,
     "port-forwarding-enabled": 1,
     "rpc-authentication-required": 0,
     "rpc-password": "",
     "rpc-port": 9091,
     "rpc-username": "",
     "rpc-whitelist": "192.168.1.*",
     "upload-limit": 200,
     "upload-limit-enabled": 1
     }
```

- Restart and rock
```sh
killall transmission-daemon
transmission-daemon -g /mnt/data/torrents/.config/transmission-daemon
```
and also, you can enable WAN
access

`iptables -I INPUT 1 -p tcp --dport 25000 -j logaccept`

这样就可以远程访问transmission了




------------------
``` sh dd-wrt https://gist.github.com/geogeo/5649236
# From: http://www.dd-wrt.com/phpBB2/viewtopic.php?t=86912

# 1. Prepare the USB disk 
# Create an ext3 partition using GParted for instance 

#2. Configure DD-WRT 
#Under Services->Services->Secure Shell: 
#* Enable SSHd 
#* Click Apply Settings 
#
#Under Services->USB: 
#* Enable Core USB Support 
#* Disable USB Printer Support (enable it if you need printing support) 
#* Enable USB Storage Support 
#* Enable Automatic Drive Mount 
#* Set Disk Mount Point to /mnt 
#* Click Apply Settings 

#3. Plug the USB drive into the router and reboot it 
#* SSH into your box using user root and make sure, using mount, that your USB stick was mounted correctly (you can also check this on the web #interface under Services->USB). 

#4. Create and prepare necessary structure 
#* SSH into your box using user root if not already done at previous step: 
cd /mnt 
mkdir etc opt root 
touch optware.enable 
chmod 755 etc opt root 
mkdir opt/lib 
chmod 755 opt/lib 
cp -a /etc/* /mnt/etc/ 
mount -o bind /mnt/etc /etc 
mount -o bind /mnt/opt /jffs 

#5. Install the required libraries for the MIPS (big-endian) architecture and OpenWRT's opkg 
#cd /tmp 
wget http://downloads.openwrt.org/backfire/10.03.1/ar71xx/packages/opkg_576-2_ar71xx.ipk
ipkg install libc_0.9.30.1-43.32_ar71xx.ipk 
wget http://downloads.openwrt.org/snapshots/trunk/ar71xx/packages/libc_0.9.33.2-1_ar71xx.ipk
opkg install libc_0.9.33.2-1_ar71xx.ipk

#You will get the following output with error messages. You can't avoid it so don't worry about it. 
#
#ERROR: File not found: //usr/local/lib/ipkg/lists/whiterussian 
#You probably want to run `ipkg update' 
#ERROR: File not found: //usr/local/lib/ipkg/lists/non-free 
#You probably want to run `ipkg update' 
#ERROR: File not found: //usr/local/lib/ipkg/lists/backports 
#You probably want to run `ipkg update' 
#/bin/ipkg: line 1184: sort: not found 
#Unpacking libc...Done. 
#Configuring libc...Done. 
#ERROR: File not found: //usr/local/lib/ipkg/lists/whiterussian 
#You probably want to run `ipkg update' 
#ERROR: File not found: //usr/local/lib/ipkg/lists/non-free 
#You probably want to run `ipkg update' 
#ERROR: File not found: //usr/local/lib/ipkg/lists/backports 
#You probably want to run `ipkg update' 
#/bin/ipkg: line 1184: sort: not found 
#Unpacking opkg...Done. 
#Configuring opkg...Done. 

#Type the following lines to create the configuration file for opkg: 

cat > /etc/opkg.conf << EOF 
src/gz snapshots http://downloads.openwrt.org/snapshots/trunk/ar71xx/packages 
dest root /opt 
dest ram /opt/tmp 
lists_dir ext /opt/tmp/var/opkg-lists 
EOF 

#Let's make sure everything works properly: 

umount /jffs 
mount -o bind /mnt/root /tmp/root 
mount -o bind /mnt/opt /opt 
export LD_LIBRARY_PATH='/opt/lib:/opt/usr/lib:/lib:/usr/lib' 
opkg update 

#You should see: 

#Downloading http://downloads.openwrt.org/snapshots/trunk/ar71xx/packages/Packages.gz. 
#Inflating http://downloads.openwrt.org/snapshots/trunk/ar71xx/packages/Packages.gz. 
#Updated list of available packages in /opt/tmp/var/opkg-lists/snapshots. 
#
#6. Set the startup script to make the changes take effect each time upon reboot 

#Under DD-WRT’s web interface, Administration->Commands, input the following commands in the window then click "Save Startup": 

##!/bin/sh 

#sleep 10 
#if [ -f /mnt/optware.enable ]; then 
#mount -o bind /mnt/etc /etc 
#mount -o bind /mnt/root /tmp/root 
#mount -o bind /mnt/opt /opt 
#else 
#exit 
#fi 

#if [ -d /opt/usr ]; then 
#export LD_LIBRARY_PATH='/opt/lib:/opt/usr/lib:/lib:/usr/lib' 
#export PATH='/opt/bin:/opt/usr/bin:/opt/sbin:/opt/usr/sbin:/bin:/sbin:/usr/sbin:/usr/bin' 
#else 
#exit 
#fi 

# Note that some users have reported issues that they were able to fix by making the script sleep 10 seconds instead of 5. 
#
# 7. Modification of the profile file 
#
# SSH into your box then copy/paste the commands below to PuTTY window to create a script running each time when user root logins: 
#
#cat > /mnt/root/.profile << EOF 
#export LD_LIBRARY_PATH='/opt/lib:/opt/usr/lib:/lib:/usr/lib:/opt/usr/local/lib' 
#export PATH='/sbin:/opt/bin:/opt/usr/bin:/opt/sbin:/opt/usr/sbin:/bin:/usr/bin:/usr/sbin:/opt/usr/local/bin' 
#export PS1='\[\033[01;31m\]\u@\h \[\033[01;34m\]\W \$ \[\033[00m\]' 
#export TERMINFO='/opt/usr/share/terminfo' 
#EOF 

#The above script will set the variables for us and also provide a nice colored command line prompt. 
#
#8. Reboot and check 
#
#Reboot your device with reboot 
#When it's back on the track, SSH into your box. 
#Run opkg update 
#
#You can start installing all kind of wild things ! Yeeehhhaaa ! 
```

