// import { Promise } from 'mongoose';
// const Promise = require('bluebird');
const { News, ObjectId } = require('../db/db')
// const ObjectID = require('mongodb').ObjectID
module.exports = {
  /**
   * 获取新闻列表
   */
  getNewsList({ query={}, pageStart = 1, pageSize = 10, sortWay = 1 } = {}) {
    // const {query, pageStart, pageSize} = arg
    let sort = {'updateTime': -1}
    if (sortWay == 2) {
      sort = {'pv': -1}
    }
    pageStart = pageStart - 1
    return new Promise((resolve, reject) => {
      News.find(query)
      .sort(sort)
      .skip(pageStart * pageSize)
      .limit(pageSize)
      .exec((err, data) => {
        if (!err) {
          return resolve(data)
        } 
        return reject(err)
      })
    })
  },
  /**
   * 通过id 获取 资讯列表
   * @param { String } id 
   */
  getNewsDetailById(id) {
    return new Promise((resolve, reject) => {
      News.findById(id)
      .exec((err, data) => {
        if (!err) {
          return resolve(data)
        }
        return reject(err)
      })
    })
  },
  /**
   * 创建资讯
   * @param { Object } options 
   */
  addNews(options) {
    let news = new News(options)
    return new Promise((resolve, reject) => {
      news.save((err, result) => {
        if (!err) {
          return resolve(result)
        } 
        return reject(err)
      })
    })
  },
  /**
   * pv加1
   * @param {*} id 
   */
  incPv(id) {
    return new Promise((resolve, reject) => {
      News.where({ '_id':id })
      .update( { $inc: { pv: 1 } })
      .exec((err, data) => {
        if (!err) {
          return resolve(data)
        }
        return reject(err)
      })
    })
  },
  /** 
   * 获取总条数
   */
  getTotalCount() {
    return new Promise((resolve, reject) => {
      News.count()
      .exec((err, data) => {
        if (!err) {
          return resolve(data)
        }
        return reject(err)
      })
    })
  }
}