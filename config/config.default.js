/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};
	
	config.security = {
		csrf: {
			enable: false
		},
	}
	
	config.mongoose = {
		url: 'mongodb://127.0.0.1:27017/arcane-cli'
		// url: 'mongodb://127.0.0.1:27017/hello'
	}
	
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1649092403168_7539';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
