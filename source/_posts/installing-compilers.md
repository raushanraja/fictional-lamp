---
title: Installing language compilers on Linux
date: 2019-03-09 10:12:39
tags:
    - programming
    - compilers
    - c
    - c++
    - java
    - python
    - c#
    - csharp
category: Programming
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

---
Programs witten in any programming language can be run in Linux easily from terminal. All you need is a terminal and a compiler to compile the programme file. How to compile and run c/c++ program in Linux [C/C++Compile](http://localhost:4000/2019/03/09/Hello-World/)

## C language:

<!-- more --> 

#### Compiler : GCC *developed by* [GNU](https://gcc.gnu.org/) Project


#### Installation:

- Ubuntu or any Debian System
    ``` bash
         sudo apt get update
         sudo apt install gcc 
    ```
- Arch Linux
    ``` bash
         sudo pacman -Sy
         sudo  pacman -S gcc
    ```

- Fedora 
    ``` bash
        sudo yum update
        sudo yum install gcc
    ```
 
