// import { Promise } from 'mongoose';
// const Promise = require('bluebird');
const { Ips } = require('../db/db')
// const ObjectID = require('mongodb').ObjectID
module.exports = {
  /**
   * 创建资讯
   * @param { Object } options 
   */
  createIp(options) {
    let ips = new Ips(options)
    return new Promise((resolve, reject) => {
      ips.save((err, result) => {
        if (!err) {
          return resolve(result)
        } 
        return reject(err)
      })
    })
  },
  /**
   * 
   * @param { String } ip  192.168.1.11
   */
  findIp(options) {
    return new Promise((resolve, reject) => {
      Ips.findOne(options)
      .exec((err, data) => {
        if (!err) {
          return resolve(data)
        }
        return reject(err)
      })
    })
  }
}