var webpack = require('webpack');
var config = {
  devtool : 'eval-source-map',
  entry : __dirname + '/app/index.js',
  resolve: {
    root: __dirname,
    modulesDirectories: ["node_modules"]
  },
  output : {
    path : __dirname + '/public',
    filename : 'bundle.js',
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module : {
    loaders : [
      {
        test : /\.js$/,
        loader : 'babel',
        exclude : /node_modules/,
      },
      {
        test : /\.scss$/,
        loader : 'style!css!sass',
      },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    'child_process' : 'empty',
  },
  devServer : {
    contentBase : './public',
    color : true,
    historyApiFallback : true,
    inline : true,
    hot : true,
  }
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
    config.devtool = false;
    config.plugins = [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({comments: false}),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('production')}
        })
    ];
}
;

module.exports = config;
