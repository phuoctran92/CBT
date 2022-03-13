const mongoose = require('mongoose')

const TYPE_QUESTION = ['TOEIC', 'IELTS']

const questionSchema = new mongoose.Schema(
  {
    order: {
      type: Number,
      required: [true, 'Order must be required'],
    },
    score: {
      type: Number,
      required: [true, 'Score must be required'],
    },
    questionId: {
      type: String,
      required: [true, 'ID must be required'],
    },
    title: {
      type: String,
      required: [true, 'Title must be required'],
    },
    statusName: {
      type: String,
      required: [true, 'Status must be required'],
    },
    questionCategory: {
      type: String,
      required: [true, 'Category must be required'],
    },
    questionType: {
      type: String,
      enum: TYPE_QUESTION,
      default: 'TOEIC',
      required: [true, 'Type of question be required'],
    },
    workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace',
      },
  },
  { timestamps: true }
)

const Question = mongoose.model('Question', questionSchema)

module.exports = Question
