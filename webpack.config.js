const path = require('path');

module.exports = {
    entry: './src/app',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react'],
                        plugins: ['transform-decorators-legacy']
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js']
    }
}