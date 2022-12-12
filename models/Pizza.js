const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const PizzaSchema = new Schema(
  {
    pizzaName: {
<<<<<<< HEAD
      type: String,
      required: true,
      trim: true
    },
    createdBy: {
      type: String,
      required: true,
      trim: true
=======
      type: String
    },
    createdBy: {
      type: String
>>>>>>> f3b0a678453fc33d4c9d29adf238982feac21750
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    size: {
      type: String,
<<<<<<< HEAD
      required: true,
      enum: ['Personal', 'Small', 'Medium', 'Large', 'Extra Large'],
=======
>>>>>>> f3b0a678453fc33d4c9d29adf238982feac21750
      default: 'Large'
    },
    toppings: [],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
<<<<<<< HEAD
  return this.comments.reduce(
    (total, comment) => total + comment.replies.length + 1,
    0
  );
=======
  return this.comments.length;
>>>>>>> f3b0a678453fc33d4c9d29adf238982feac21750
});

const Pizza = model('Pizza', PizzaSchema);

module.exports = Pizza;
