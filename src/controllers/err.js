const e404 = (req, res) => {
  res.send('<h1>404 sorry ,what you\'re looking for isn\'t here </h1>');
};

const errCatcher = (msg, status) => {
  const err = new Error();
  err.msg = msg;
  err.status = status;
  return err;
};

const errHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    error_det: {
      errTitle: 'something whent wrong',
      errStatus: err.status,
      errMasseage: err.msg || err.masseage,
    },
  });
};

module.exports = {
  e404,
  errCatcher,
  errHandler,
};
