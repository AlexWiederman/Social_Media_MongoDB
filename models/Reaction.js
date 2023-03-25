const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // getter to format on the query
      get: (date) => {
        if (date) return date.toLocaleDateString()
      }
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
    timestamps: true,
  }
);

module.exports = reactionSchema;