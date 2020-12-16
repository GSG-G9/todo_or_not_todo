const { app } = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is serving port ${port} with url http://localhost:${port}`);
});
