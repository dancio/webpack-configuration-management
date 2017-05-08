import webpack from 'webpack';
import merge from 'webpack-merge';

import common from './common.js';

// A custom production settings which will minfy code
const config = {
  // ...
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true,
      },
      output: {
        comments: false,
      },
    }),
  ],
};

export default merge(common, config);
