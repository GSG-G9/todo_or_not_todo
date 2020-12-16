const errCatcher = (msg, status) => {
  const err = new Error();
  err.msg = msg;
  err.status = status;
  return err;
};

module.exports = {
  errCatcher,
};
