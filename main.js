var app = new Vue({
	el: '#app',
	data: {
		title: 'Задание 1',
		valueFirst: 0.1,
		valueSecond: 0.2,
		answer: null,
		formIsShow: true,
		answerIsShow: false,
		classForm: {
			'calculation-form': true
		},
		classResult: {
			'modal': true,
			'modal-result': true
		}
	},
	computed: {
	},
	methods: {
		getAnswer: function() {
			this.answer = +(parseFloat(this.valueFirst,10) + parseFloat(this.valueSecond,10)).toFixed(2)
			this.formIsShow = false
			this.answerIsShow = true
			return
		},
		okAnswer: function() {
			this.formIsShow = true
			this.answerIsShow = false
			return
		}
	}
})

// Vue.component('input-argument', {
// 	data: function() {
// 		return {
// 			value: null
// 		}
// 	},

// })