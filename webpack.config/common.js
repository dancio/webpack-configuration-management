// All shared across different environment settings
// This file will be imported by production.js, development.js etc

export default {
  target: 'web',
  devtool: 'source-map',
  entry: {
    app: './index.js',
  },
  plugins: [
    // ...
  ],
};
