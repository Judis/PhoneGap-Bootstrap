# README #

Simple bootstrap for Phonegap HTML5 Application with [Brunch](http://brunch.io), [Backbone.JS](http://backbonejs.org), [Ratchet](http://goratchet.com/)

## How to install? ##

* install [Node JS](http://nodejs.org/)
* install [NPM](https://github.com/npm/npm)
* clone this repository
* go to repository folder and run:

```
npm install
```

## How to use? ##

### Prepare ###
* Install needed PhoneGap platforms
* Change config.xml (/source/app/assets/config.xml) and config.json (.cordova/config.json)
* Upload your icons and splashscreens (/source/app/res)

### Workflow ###
You can run watcher (brunch w) or build app manualy (brunch b)

## Deploy and provision tool ##
You can use deploy.sh script for build your application on build.phonegap.com cloud and provide app for testers with testflightapp.com (iOS) and testfairy.com (Android)

### Dependencies ###
For correct work deploy scrip you need installed [jsontool](https://github.com/trentm/json)

### Prepare ###
Open deploy.sh and put your Adobe ID account data (email and password) and API keys for Testflightapp.com and testfairy.com

### Commands ###
* __./deploy.sh build__ - zip www folder and put it to the Phonegap Build cloud
* __./deploy.sh status__ - get status of your app on Phonegap Build cloud
* __./deploy.sh publish__ _(android|ios)_ - download app package and provide it to the provision service, use ios or android key for choose platform
* __./deploy.sh build_and_publish__ _(android|ios|both)_ - zip www folder, put it to the Phonegap Build Cloud, wait until app will be compiled, download app package and send it to the [testflightapp.com](http://testflightapp.com/) (iOS) / [testfairy.com](http://testfairy.com/) (Android) / both services 
* __./deploy.sh check_and_publish__ _(android|ios)_  _(android|ios)_ - wait until app will be compiled, download app package and send it to the [testflightapp.com](http://testflightapp.com/) (iOS) / [testfairy.com](http://testfairy.com/) (Android) using provided keys
