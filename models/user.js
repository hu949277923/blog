
const User = require('../db/db').User
const user = new User({
  username: 'bill2',
  nick: 'bill2',
  password: 'www000000',
  email: '15712892951@163.com',
  mobile: 15712892951,
  qq: 9492779231,
  wx: 'hbb52391'
})
module.exports = {
  /**
   * 创建用户
   */
  create: function(user) {
    return User.create(user).exec()
  },
  delete: function(user) {
    
  }
}