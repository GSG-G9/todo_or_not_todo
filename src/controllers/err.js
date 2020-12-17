const e404 = (req, res) => {
  res.send('<h1>404 sorry ,what you\'re looking for isn\'t here </h1>');
};

// eslint-disable-next-line no-unused-vars
const errHandler = (err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).json({
    error_det: {
      errTitle: 'something whent wrong',
      errStatus: err.status || 500,
      errMasseage: err.msg || err.masseage,
    },
  });
};

module.exports = {
  e404,
  errHandler,
};
