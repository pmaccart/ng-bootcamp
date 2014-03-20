# ng-bootcamp - Day 2

## Getting Started

### Install the client dependencies

```shell
cd ng-bootcamp/day-1
bower install
```

### Install the server dependencies
```shell
npm install -g karma-cli
npm install
```

### Start the server
```shell
node server.js
```

### Start the test runner
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

