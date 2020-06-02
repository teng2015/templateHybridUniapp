export default {
	namespaced: true,
	state: {
		token: ''
	},
	mutations: {
		LOGIN(state, token) { // 登录 保存 token
			state.token = token
			uni.setStorage({ key: 'token', data: payload })
		},
		LOGOUT(state) { // 退出登录 删除 token
			state.token = ''
			token: uni.removeStorageSync('token')
		}
	}
}
