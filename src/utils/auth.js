import { getCurPage, formatQueryStr } from './utils'

const TOKEN_KEY = 'token'

const setToken = (token) => {
  uni.setStorageSync(TOKEN_KEY, token)
}

const getToken = () => {
  return uni.getStorageSync(TOKEN_KEY) || ''
}

const cleanUserInfo = () => {
  uni.removeStorageSync(TOKEN_KEY)
}

const getLoginStatus = () => {
  return !!getToken()
}

const gotoLogin = ({ target = '', type = 'navigateTo' } = {}) => {
  const { options = {}, route = '' } = getCurPage()
  const queryStr = formatQueryStr(options)
  const url = '/' + route + (queryStr ? '?' + queryStr : '')
  uni[type]({
    url: `/pages/login/index?target=${encodeURIComponent(target || url)}`
  })
}

const checkLogin = ({ target = '', type = 'navigateTo' } = {}) => {
  const loginStatus = getLoginStatus()
  if (loginStatus === false) {
    gotoLogin({
      target,
      type
    })
  }
  return loginStatus
}

export {
  getLoginStatus,
  setToken,
  getToken,
  cleanUserInfo,
  gotoLogin,
  checkLogin
}
