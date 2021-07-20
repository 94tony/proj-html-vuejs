const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello world',
    },
    methods: {
      capitalize () {
        return this.message.toUpperCase()
      }
    },
    computed: {
      reversedMessage () {
        return this.message.split('').reverse().join('')
      }
    }
  })