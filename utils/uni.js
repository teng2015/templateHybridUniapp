uni.loading = title => {
	plus.nativeUI.closeWaiting()
	plus.nativeUI.showWaiting(title, { back: 'none' })
}

uni.uloading = () => plus.nativeUI.closeWaiting()

uni.toast = title => plus.nativeUI.toast(title, { verticalAlign: 'center' })