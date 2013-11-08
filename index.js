module.exports = process.env.T_COV
  ? require('./lib-cov')
  : require('./lib');
