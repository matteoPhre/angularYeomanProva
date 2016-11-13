# angularYeomanProva
Try to build angular application with Yeoman on MAC OS X ( suitable for Windows).
This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Pre-req app installs
Download and install nodejs Lightweight web server that includes npm, which we will use a lot.
Download and install Git version control client.
Download and install mono Cross platform .NET framework, not really a pre-req for pure front end work, but you will need this if you open a Visual Studio project in Visual Studio Code on Mac OS X.

## First step
Run the following command to set the dev environment:

```
$sudo npm install -g bower grunt-cli yo karma jasmine typescript tsd@next generator-angular generator-karma
```

## Scaffold and install project packages:

```
$mkdir ~/Documents/{yourFolderName}
$cd ~/Documents/{yourFolderName}
$yo angular YourAppNameGoesHere
```
Make sure to have installed node and npm (if you are on OS X IMO is better to install Homebrew and install all requirements from there).
If you're enviroment are set, run 

```
npm install
bower install
```

Now you have to be ready to 'build'!

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.