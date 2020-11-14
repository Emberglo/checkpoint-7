import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Bug = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    closed: { type: String, default: false },
    reportedBy: { type: String },
    closedDate: { type: Date },
    creatorId: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Bug.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

export default Bug
