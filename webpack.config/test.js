import webpack from 'webpack';
import merge from 'webpack-merge';

import common from './common.js';

const config = {
  // ...
};

export default merge(common, config);
