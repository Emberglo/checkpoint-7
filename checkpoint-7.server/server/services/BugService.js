import { dbContext } from '../db/DbContext'
// import { BadRequest } from '../utils/Errors'
// import { logger } from '../utils/Logger'

class BugService {
  async delete(bugId) {
    return await dbContext.Bugs.findByIdAndDelete(bugId)
  }

  async edit(bugId, body) {
    const res = await dbContext.Bugs.findOneAndUpdate({ _id: bugId, status: false }, body)
    return res
  }

  async create(body) {
    return await dbContext.Bugs.create(body)
  }

  async getActiveBug(bugId) {
    return await dbContext.Bugs.findById(bugId)
  }

  async getAllBugs() {
    return await dbContext.Bugs.find({})
  }
}

export const bugService = new BugService()
