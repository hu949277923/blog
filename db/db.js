const db = require('mongoose')
db.connect('mongodb://localhost:27017/blog')
const ObjectId = db.Schema.Types.ObjectId
/**
 * create User table
 */
const userSchema = db.Schema({
  username: { type: 'string', required: true },
  nick: { type: 'string', required: true },
  password: { type: 'string', required: true },
  email: { type: 'string', required: true },
  sex: { type: 'Number', enum: [1, 0], default: 1 },
  mobile: { type: 'Number', required: true },
  qq: { type: 'Number', required: true },
  wx: { type: 'string', required: true },
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now }
}); 
exports.User = db.model('User', userSchema)
/**
 * create news table
 */
const newsSchema = db.Schema({
  userId: { type: ObjectId, required: true },
  author: { type: 'string', required: false },
  source: { type: 'string', required: false },
  title: { type: 'string', required: true },
  desc: { type: 'string', required: true },
  category: { type: ObjectId, required: true },
  isPublish: { type: 'Boolean', default: true },
  isRecommend: { type: 'Boolean', default: true },
  createTime: { type: Date, default: Date.now },
  updateTime: { type: Date, default: Date.now },
  pv: { type: 'number', default: 0 },
  content:  { type: 'string', required: true },
}); 
exports.News = db.model('News', newsSchema)
