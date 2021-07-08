---
title: "Sublime Text 3 and Live Reload with Auto Saving features"
date: "2020-01-02"
---


Hot Module Replacement in Webpack is pretty vast concept, but what for small developers, who don’t use webpack. Here is what you can do to Live Reload everything in Sublime Text 3.

make some changes, save, refresh, check and then re-do all of it. It’s tedious task out there, there is something I will tell you in this article so that you don’t have to go from this tedious cycle again for basic HTML, CSS, JavaScript Websites.

## Live Reload Plugin for Sublime Text

1. Download Live Reload Plugin by opening `ctrl+shift+p `on widows then type package control to install package control.

1. type install package to install some package.

1. type livereload to download and install livereload plugin.

## Live Reload Chrome Extension
[**LiveReload**
*Provides Chrome browser integration for the official LiveReload apps (Mac & Windows) and third-parties like guard…*chrome.google.com](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

go to the above link to download and activate livereload chrome extension.

then go to chrome://extensions and click allow all URL to check it on fie:// url’s also.

## Activating the plugin

go to preferences &gt; package-settings &gt; LiveReload &gt; settings —Default Free and copy the following

```
{ 
           "enabled_plugins": [ 
               "SimpleReloadPlugin", 
               "SimpleRefresh" 
           ]
       }
```


now see it working, just a problem is this you have to save and watch live, read my guide to last to solve this problem also, live reloading as you type will become active.

## Using the plugin

open any file in your project and right click &gt; open in browser.

now in browser Enable LiveReload on that page by clicking the icon on the top right, which looks like a wheel, the livereload sign. and then you can watch your changes as you save them.

## Auto Save Plugin

go to package control &gt; install package &gt; type auto save

install the auto save plugin and to use it type `ctrl+shift+p `and type in auto save, do current file or directory.

now your changes would be saved automatically as you type.