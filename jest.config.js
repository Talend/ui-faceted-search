const talendScripts = require('@talend/scripts-config-jest/jest.config');

module.exports = {
	...talendScripts,
	reporters: ['default', 'jest-junit'],
};
