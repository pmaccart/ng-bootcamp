# ng-bootcamp - Day 0

## Getting Started

First, make sure you have the necessary dependencies installed:
- NodeJS: http://nodejs.org/



### Install grunt-cli, bower, and yo as global dependencies (if not already installed)

```shell
npm install -g grunt-cli bower yo
```

### Install the client dependencies

```shell
cd ng-bootcamp/day-0/client
npm install
bower install
```

### Start the client app (from ng-bootcamp/day-0/client)

```shell
grunt serve
```

This should open a new browser window pointed at http://localhost:9000/.  To make sure the project is running, open up the `variables.less` file at `day-0/client/app/styles/variables.less`, and change one of the colors.  Your browser page should automatically refresh after a few seconds, and you should see the new button color immediately appear.

### Install the server app dependencies

Open up a new command prompt:
```shell
cd ng-bootcamp/day-0/server
npm install
node server.js
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

