// const mongoose = require('mongoose');
// require('dotenv').config();
// // const URI = 'mongodb://localhost:27017/NSS-Attendance'
// // const URI = 'mongodb+srv://govind:govind@cluster0.hdrikh3.mongodb.net/blog';
// const URI=process.env.MONGOURI;

// const con = mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true});

// con.then(()=>{console.log(`Database Connected Successfully`)})
// .catch((err)=>{console.log(`Oh No Error ${err}`)});


const mongoose = require('mongoose');
require('dotenv').config();

const MONGOURI = process.env.MONGOURI;
const Connection = () => {
  mongoose.set('strictQuery', true);

  mongoose.connect(MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log('connection successfull ..'))
  .catch((err) => console.log('error is', err));
};
Connection();