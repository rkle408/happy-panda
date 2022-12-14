const { AuthenticationError } = require('apollo-server-express');
const { User, Note } = require('../models');
const { signToken } = require('../utils/auth');

// will need to add more queries and mutations once we finalize models and schemas

const resolvers = {
    Query: {
        user: async (parent, { username }) => {
            return User.findOne({ username });
        },me: async (parent, args, context) => {
            if (context.user) {
              return User.findOne({ _id: context.user._id });
            }
            throw new AuthenticationError('You need to be logged in!');
          }
    },

    Mutation: {
        addUser: async (parent, { username, email, password}) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        updateUser: async(parent,{username, pandaEmotion})=>{
          return await User.findOneAndUpdate({username:username},{pandaEmotion:pandaEmotion},{new:true});
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
        },
        addThought: async (parent, { noteText }) => {
            return await Note.create({ noteText });
        }
    },
};

module.exports = resolvers;