browserstack-local
==================

Wrapper for new command line tunnel for BrowserStack

### Usage:
* Dependencies: `npm install`
* set `ENV` vars
* run `node example.js`

### Environment variables for running `example.js`:
* `BROWSERSTACK_KEY`: BrowserStack local testing key. (http://www.browserstack.com/local-testing#command-line)
* `BROWSERSTACK_CONFIG`: Config for local ports. ex. `localhost,80,0,localhost,443,1`

### Example:
```js
var options = {
    key: process.env.BROWSERSTACK_KEY,
    localConfig: process.env.BROWSERSTACK_CONFIG
};

var tunnel = require(__dirname + '/bin/cli.js').BrowserstackLocal(options);

tunnel.startTunnel();
```
