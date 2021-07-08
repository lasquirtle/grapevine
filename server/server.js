const express = require("express");
const app = express();
const path = require("path");
const router = require("./routes/router");
const cookieParser = require("cookie-parser");
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(express.static('client'))
app.use('/api', router);

app.get('*', (req, res) => {
  // console.log(path.resolve(__dirname, "./index.html"))
  return res.sendFile(path.resolve(__dirname, "../index.html"));
})


// Any other request is caught here 
app.use((req, res) => res.status(400).send('Error 404: No content found'));

// Express global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});


module.exports = app;