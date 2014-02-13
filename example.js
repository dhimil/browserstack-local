var options = {
  key: process.env.BROWSERSTACK_KEY,
  localConfig: process.env.BROWSERSTACK_CONFIG
};

var tunnel = require(__dirname + '/index.js').BrowserstackLocal(options);

tunnel.startTunnel();

