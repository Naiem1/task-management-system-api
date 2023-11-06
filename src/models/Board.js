const { Schema, model } = require('mongoose');

const boardSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      minLength: [2, 'Board name is too short'],
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    task: [
      {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Task',
      },
    ],
  },
  { timestamps: true }
);

const Board = model('Board', boardSchema);

module.exports = Board;
