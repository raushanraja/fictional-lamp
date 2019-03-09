---
title: Hello, World!
date: 2019-03-08 21:03:43
tags: 
    - hello world 
    - c
    - c++
    - java
    - python
    - go
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

thumbnail: /images/post/hello-world.png 

---
- Printing hello world in different languages

## C :
```c
#include<stdio.h>
int main(){
    printf("%s\n","Hello, World!");
    return 0;
}
```
<!-- more --> 

## C++ :
```cpp
#include<iostream>
using namespace std;
int main(){
    cout<<"Hello, World!\n";
    return 0;
}
```

## java :
```java
public class hello{
    public static void main(String[] args){
        System.out.println("Hello, World!");
    }
}
```

## python :
```python
print("Hello, World!")
```

## C# :
```cs
using System;
class first{
    static void Main(){
        Console.WriteLine("Hello World");
    }
}

```

## GO:
```go   
package main
import "fmt"
func main(){
    fmt.Println("Hello, WOrld!")
}
```