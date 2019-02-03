/*global require, module, __dirname, process */
// ===================================================================================
//                                                                          Definition
//                                                                          ==========
const path = require('path');
const rendererConfig = {
	target:'electron-renderer',
	entry: {
		'renderer/start': './src/renderer/start'
	}
};
const mainConfig = {
	target:'electron-main',
	entry: {
		'main/index': './src/main/index'
	},
	devtool: 'source-map',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'site/')
	}
};
const commonConfig = {
	node: {
		__dirname: false,
		__filename: false,
	},
	devtool: 'source-map',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'site/')
	}
};

// ===================================================================================
//                                                                          Initialize
//                                                                          ==========
const concatCommonConfig = (config) => {
	Object.keys(commonConfig).forEach(key => {
		config[key] = commonConfig[key];
	});
};
concatCommonConfig(rendererConfig);
concatCommonConfig(mainConfig);
module.exports = [ rendererConfig, mainConfig ];
