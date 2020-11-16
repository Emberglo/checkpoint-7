import { dbContext } from '../db/DbContext'

class NoteService {
  async deleteNote(noteId) {
    return await dbContext.Notes.findByIdAndDelete(noteId)
  }

  async editNote(body) {
    return await dbContext.Notes.findOneAndUpdate(body.id, body, { new: true })
  }

  async createNote(body) {
    return await dbContext.Notes.create(body)
  }

  async getBugNotes(bugId) {
    return await dbContext.Notes.find({ bug: bugId })
  }
}

export const noteService = new NoteService()
