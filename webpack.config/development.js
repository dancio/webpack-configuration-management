import merge from 'webpack-merge';

import common from './common.js';

// A custom development settings
 const config = {
  devtool: "#cheap-module-eval-source-map",
  devServer: {
    hot: true,
    // ...
  },
  plugins: [
    // ...
  ],
};

export default merge(common, config);
