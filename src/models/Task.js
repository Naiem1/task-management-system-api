const { Schema, model } = require('mongoose');

const taskSchema = Schema(
  {
    title: {
      type: String,
      require: true,
      minLength: [3, 'Task title is too short'],
    },
    description: {
      type: String,
      require: true,
      minLength: [5, 'description is too short'],
    },
    date: {
      type: Date,
      require: true,
    },
    status: {
      type: String,
      enum: ['PENDING', 'COMPLETED'],
      default: 'PENDING',
      require: true,
      priority: {
        type: String,
        enum: ['LOW', 'MEDIUM', 'HIGH'],
        default: 'LOW',
        require: true,
      },
    },
    board: {
      type: String,
      ref: 'Board',
      require: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: 'User',
    },
  },
  { timestamp: true }
);

const Task = model('Task', taskSchema);
