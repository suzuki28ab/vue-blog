export const test = {
  namespaced: true,
  state: {
    message: 'Hello Vuex',
    count: 0,
    posts: [
      {
        id: 1, title: 'test1', content: 'testcontent1'
      },
      {
        id: 2, title: 'test2', content: 'testcontent2'
      },
      {
        id: 3, title: 'test3', content: 'testcontent3'
      }
    ]
  },
  mutations: {
    increment: function (state) {
      state.count++
    }
  },
  actions: {
  }
}
