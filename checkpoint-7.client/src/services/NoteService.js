import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class NoteService {
  async deleteNote(noteId, bugId) {
    try {
      await api.delete('/api/notes/' + noteId)
      this.getBugNotes(bugId)
    } catch (error) {
      logger.error(error)
    }
  }

  async addNote(bugId, body) {
    try {
      await api.post('/api/notes/' + bugId, body)
      this.getBugNotes(bugId)
    } catch (error) {
      logger.error(error)
    }
  }

  async getBugNotes(bugId) {
    try {
      const res = await api.get('/api/notes/' + bugId)
      AppState.notes = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const noteService = new NoteService()
