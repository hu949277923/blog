// import { Promise } from 'mongoose';
// const Promise = require('bluebird');
const { Users, ObjectId } = require('../db/db')
// const ObjectID = require('mongodb').ObjectID
module.exports = {
  getUserByUsername(userName) {
    return new Promise((resolve, reject) => {
      Users.findOne({"username": userName})
      .exec((err, data) => {
        if (!err) {
          return resolve(data)
        }
        return reject(err)
      })
    })
  },
  signUp(options) {
    let user = new User(options)
    return new Promise((resolve, reject) => {
      user.save((err, result) => {
        if (!err) {
          return resolve(result)
        } 
        return reject(err)
      })
    })
  }
}