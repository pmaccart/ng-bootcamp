# ng-bootcamp - Day 1

## Getting Started

### Install the client dependencies

```shell
cd ng-bootcamp/day-1
bower install
```

The app can then be run by opening the index.html file in a browser.

### Installing Karma

```shell
npm install -g karma-cli karma
```

### Running Karma

Karma will watch your JavaScript files for changes, and automatically re-run the tests for your.  

Start karma in a new tab from the day-1 directory:

```shell
karma start karma.conf.js
```

## Common issues

### NPM Global dependencies won't install
If global dependencies (grunt-cli, bower, yo) won't install, there are a couple things to try:
- Delete the global node_modules folder:  To see where the folder is, run `npm -g root`
- Run as sudo:  NPM needs write permissions to install the dependencies, so you may need to run npm as sudo to install to the global folder: `sudo npm -install -g bower grunt-cli yo`
  - on Windows, open a command prompt using 'Run as Administrator'

If the local dependencies fail to install
- Delete the local node_modules folder (sitting at the root client and server folders)
- re-run `npm install`

