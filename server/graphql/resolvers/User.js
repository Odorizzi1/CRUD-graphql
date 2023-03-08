const User = require('../../models/User')

module.exports = {
  Query: {
    async getUser(parent, { id }) {
      return await User.findById(id)
    },

    async getUsers() {
      return await User.find()
    }
  },

  Mutation: {
    async createUser(parent, { input }) {
      const user = new User(input)
      await user.save()
      return user
    },

    async updateUser(parent, { id, input }) {
      return await User.findByIdAndUpdate(id, input, { new: true })
    },

    async deleteUser(parent, { id }) {
      return await User.findByIdAndDelete(id)
    }
  }
}