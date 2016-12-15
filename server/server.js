var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
})

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo ', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// })

var newTodo = new Todo({
  text: 'Go swimming'
});

newTodo.save().then((doc) => {
  console.log('Saved todo ', doc);
}, (e) => {
  console.log('Unable to save todo', e);
})

var newUser = new User({
  email: 'alb@alb.com'
});

newUser.save().then((user) => {
  console.log('Saved user ', user);
}, (e) => {
  console.log('Unable to save user');
})
