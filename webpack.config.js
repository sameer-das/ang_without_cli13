const env = 'dev';
// const env = 'prod';

if (env === 'dev')
    module.exports = require('./config/webpack.dev.js');
else if(env === 'prod')
    module.exports = require('./config/webpack.prod.js');
