const mongoose = require('mongoose');

module.exports = {
  mongoose,
  connect: () => {
    mongoose.Promise = Promise;
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        auto_reconnect: true
      })
      .catch(err => {
        console.log(err);
      });
  },
  disconnect: done => {
    mongoose.disconnect(done).catch(err => {
      console.log(err);
    });
  }
};

mongoose.connection.on('open', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('close', () => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('error', err => {
  console.log('MongoDB Error:', err);
});
