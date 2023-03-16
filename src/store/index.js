import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    // 검색 질문
    topic: "",
    // 질문을 토대로 나온 정보
    topicInfo: [],
    // 질문 답변
    boardInfo: [],
    // 결과물로 나온 Board
    resultBoards: [],
    // 내가 저장한 Board
    saveBoards: [],
    // 모달 on, off
    showModal: false,
    // 카드 플로팅 버튼 초기화
    toggle: false
  },
  getters: {
    getTopic: (state) => state.topic,
    getTopicInfo: (state) => state.topicInfo,
    getTopicCount: (state) => state.topicInfo.length,
    getBoardInfo: (state) => state.boardInfo,
    getResultBoards: (state) => state.resultBoards,
    getSaveBoards: (state) => state.saveBoards,
    getShowModal: (state) => state.showModal,
    getToggle: (state) => state.toggle
  },
  mutations,
  actions,
});
