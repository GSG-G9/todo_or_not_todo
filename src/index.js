const { app } = require('./app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is serving port ${port} with url http://localhost:${port}`);
});
