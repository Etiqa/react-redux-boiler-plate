(function () {
    var path = require('path'),
        webpack = require('webpack'),
        plugins = [new webpack.HotModuleReplacementPlugin()],
        DEV_SEVERITY = 1,
        entryDev = [
            'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
            'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
        ],
        entryMain = [
            __dirname + '/src/main.jsx'
        ],
        entry = null;


    if (process.env.NODE_ENV === 'production') {
        DEV_SEVERITY = 2;
        entry = entryMain;
        plugins.push(
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"'
            })
        );
    } else {

        entry = [].concat(entryMain, entryDev);
    }

    module.exports = {
        entry: entry,
        output: {
            path: __dirname + '/build',
            publicPath: '/public/',
            filename: 'bundle.js',
            sourceMapFilename: '[file].map'
        },
        devtool: "#source-map",
        module: {
            preLoaders: [
                //{ test: /calendar-widget\/.*\.jsx?$/, exclude: /node_modules/, loader: 'eslint-loader' }
            ],
            loaders: [
                { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
                { test: /\.woff(2|\?v=\d+\.\d+\.\d+)?$/,   loader: 'url?limit=10000&mimetype=application/font-woff' },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },

                {   test: /src\/.*\.jsx?$/,
                    exclude: /node_modules \.spec\./,
                    loaders: ['react-hot', 'babel-loader']
                },
                { test: /\.css$/, loader: "style-loader!css-loader" },
                { test: /\.png$/, loader: "url-loader?limit=100000" },
                { test: /\.jpg$/, loader: "file-loader" }
            ]
        },
        plugins: plugins,
        // Env depending rules
        eslint: {
            "rules": {
                "no-console": DEV_SEVERITY,
                "no-debugger": DEV_SEVERITY
            }
        }
    };
}());