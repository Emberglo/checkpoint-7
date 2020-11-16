import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class NoteService {
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
