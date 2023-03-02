const path = require('path');


module.exports = {
    entry : './script.js',
    output : {
        filename : 'build.js',
        path: path.resolve(__dirname, 'dist'),
    },

};