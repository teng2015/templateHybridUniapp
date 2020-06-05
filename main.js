import Vue from 'vue'
import App from './App'
import $store from '@/store'
import $storage from '@/utils/uni_storage'
import $router, { $route } from '@/utils/uni_router.js'

Vue.prototype.$store = $store
Vue.prototype.$route = $route
Vue.prototype.$router = $router
Vue.prototype.$storage = $storage

Vue.prototype.$offset = function (selector) { // 获取元素宽高位置信息
	return new Promise((resolve, reject) => {
		uni.createSelectorQuery().in(this).select(selector).boundingClientRect(data => {
			data ? resolve(data) : reject('元素不存在')
		}).exec()
	})
}

Vue.prototype.$request = (req, cb) => {
	uni.loading()
	req.then(({ code, message, data }) => {
		if (code != 200) {
			uni.toast(message)
		} else {
			cb(data)
		}
	}).finally(() => uni.uloading())
}

Vue.prototype.$clone = obj => typeof obj === 'string' ? JSON.parse(obj) : JSON.parse(JSON.stringify(obj))

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
