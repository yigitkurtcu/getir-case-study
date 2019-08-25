const app = require('./app');

// Starts app to listen to the selected port
app.listen(process.env.PORT || 3000, () => {
  console.log(`Getir-Study-Case app listening on port ${process.env.PORT || 3000}`);
});
