import { getLoginStatus } from './auth';
import { formatQueryStr } from './utils'

const whiteList = [
	"/pages/index/index",
	"/pages/login/index",
]

const loginPage = "/pages/login/index"

export default function interceptorPage () {
  const list = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
	list.forEach(item => { //用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
		uni.addInterceptor(item, {
			invoke(e) { // 调用前拦截
				console.log('拦截', e)
				//获取要跳转的页面路径（url去掉"?"和"?"后的参数）
				const url = e.url.split('?')[0];
				let notNeed = whiteList.includes(url)
				// 如果在whiteList里面就不需要登录
				if (notNeed) {
					return e
				} else {
					//需要登录
					if (!getLoginStatus()) {
						uni.showToast({
							title: '请先登录',
							icon: 'none'
						})
						uni.navigateTo({
							url: loginPage
						})
						return false
					} else {
						return e
					}
				}
			},
			fail(err) { // 失败回调拦截 
				console.log(err);
			}
		})
	})
}
