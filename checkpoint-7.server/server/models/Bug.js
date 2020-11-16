import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Bug = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: false },
    reportedBy: { type: String, required: true },
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

Bug.virtual('poster', {
  localField: 'reportedBy',
  ref: 'Profile',
  foreignField: 'name',
  justOne: true
})

export default Bug
