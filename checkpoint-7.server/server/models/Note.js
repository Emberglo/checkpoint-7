import mongoose from 'mongoose'
const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId

const Note = new Schema(
  {
    body: { type: String, required: true },
    creatorId: { type: String, required: true },
    bug: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Note.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

Note.virtual('bugId', {
  localField: 'bug',
  ref: 'Bug',
  foreignField: '_id',
  justOne: true
})

export default Note
