import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  //流れ
  // 最初userはnull
  // ログイン→actionsのsetUserの第二引数（user）にユーザ情報が入る
  //actionsがcontext.commitによってsetUserが実行されて
  // mutationsが実行され、userがnullから更新される
  // gettersのstateがtrueを返す→認証したことを意味する
  state: {
    user: null 
  },
  //ログイン時にstate.userを書き換える
  mutations: {
    setUser(state, user) {
      //引数で指定したuserでstate.userを更新する
      state.user = user
    }
  },
  actions: {
    setUser(context, user) {
      context.commit('setUser', user)
    }
  },
  //stateがログインしているかしていないか状態の管理
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    }
  }
})