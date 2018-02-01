const mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.1.72:27017/test')
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(" we're connected!")
  // we're connected!
});
const kittySchema = mongoose.Schema({
  name: String
});
// const Kitten = mongoose.model('Kitten', kittySchema);
// const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

var fluffy = new Kitten({ name: 'fluffy' });
fluffy.speak(); // "Meow name is fluffy"
fluffy.save(function (err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});