const { Schema, model } = require('mongoose');

// Schema to create a thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min:1,
      max: 280,
    },
    
    createdAt: {
      type: Date,
      default: Date.now,
      // getter to format on the query
      get: (date) => {
        if (date) return date.toLocaleDateString()
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'reactionSchema',
      },
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters:true
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the length of the thoughts reactions
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
