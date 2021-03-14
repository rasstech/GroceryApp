const mongoose = require('mongoose');

// creating database
mongoose.connect('mongodb+srv://rajesh:rajesh@cluster0.1dl8q.mongodb.net/grocery_item?retryWrites=true&w=majority',
{
   useCreateIndex:true, 
   useNewUrlParser:true,
   useUnifiedTopology:true,
   useFindAndModify:false
}).then(() => {
       console.log('Database connected');
}).catch((err) => {
   console.log("unable to connect")
});
module.exports = mongoose;
