import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'
// import { Logger } from '../utils/Logger'

class BugService {
  async getAllBugs(userId) {
    return await dbContext.Bugs.find(userId)
  }
}

export const bugService = new BugService()
