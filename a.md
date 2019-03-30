---
title: How to configure bluetooth on Arch Linux
date: 2019-03-30 21:31:53
tags:
    - Arch Linux
    - kde
    - bluetooth
category: Linux
widgets:
    
    -
        # Widget name
        type: recent_posts
        # Where should the widget be placed, right or right
        position: right
    -
        # Widget name
        type: category
        # Where should the widget be placed, right or right
        position: right
    -
        # Widget name
        type: archive
        # Where should the widget be placed, right or right
        position: right
    -
        # Widget name
        type: tag
        # Where should the widget be placed, right or right
        position: right
    -
        # Widget name
        type: tagcloud
        # Where should the widget be placed, right or right
        position: right

thumbnail: /images/post/bluetooth_thumb.png
---
Configuring arch linux distro can be difficult and the bluettoth is one of the things you'll will need to configure by yourself. Once the bluetooth is configured correctly it is easier to scan, pair and remove the bluetooth devices.

### <strong><u>Errors I encountered: </u></strong>
- No adapters Found
- Bluetooth pairs but failed to connect: org.bluez.Error.Failed


************************

### <strong><u>steps to solve erros:</u></strong>
<!--  more -->
1. Installing Packages
    - `bluetoothctl`  package
    - frontend package `Bluedevil` package for kde
    - bluez-hid2hci` package
    - `pulseaudio-bluetooth` package

2. Enabling `bluetooth.service`
3. Restating system and connecting bluetooth device

***********************
***********************


#### <strong><u>1. Installing packages:</u></strong>
Before installing packages make sure to synchronize the pacman database as:
``` bash
         sudo pacman -Sy
```

Then we can install the packages mentioned above by single command as:
``` bash
        sudo pacman -S bluez-tools bluedevil bluez-hid2hci pulseaudio-bluetooth 
```


************************
#### <strong><u>2. Enabeling </u></strong>`bluetooth.service`:
``` bash
        sudo systemctl bluetooth.service
```


************************
#### <strong><u>3. Restating system and connecting bluetooth device</ul></strong>
Restart the system and try connection it throuch the Icon on the panel