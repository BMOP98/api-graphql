const User = require('../models/User');

const resolvers = {
  Query: {
    users: async () => await User.find(),
  },
  Mutation: {
    addUser: async (_, { Nombre, Apellido, mail }) => {
      const user = new User({ Nombre, Apellido, mail });
      return await user.save();
    },
  },
};

module.exports = resolvers;
