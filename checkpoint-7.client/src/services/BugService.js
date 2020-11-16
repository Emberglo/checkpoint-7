import { AppState } from '../AppState'
import { api } from '../services/AxiosService'
import { logger } from '../utils/Logger'

class BugService {
  async deleteBug(bugId, body) {
    try {
      await api.put('/api/bugs/' + bugId, body)
      this.getActiveBug(bugId)
    } catch (error) {
      logger.error(error)
    }
  }

  async editBug(bugId, body) {
    try {
      if (body.status === false) {
        await api.put('/api/bugs/' + bugId, body)
        this.getActiveBug(bugId)
      }
    } catch (error) {
      logger.error(error)
    }
  }

  async getActiveBug(bugId) {
    try {
      const res = await api.get('/api/bugs/' + bugId)
      AppState.activeBug = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createBug(body) {
    try {
      await api.post('/api/bugs', body)
      this.getAllBugs()
    } catch (error) {
      logger.error(error)
    }
  }

  async getAllBugs() {
    try {
      const res = await api.get('/api/bugs')
      AppState.bugs = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const bugService = new BugService()
