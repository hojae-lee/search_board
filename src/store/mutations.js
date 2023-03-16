export default {
  SET_TOPIC(state, topic) {
    state.topic = topic
  },
  SET_TOPIC_INFO(state, topicInfo) {
    state.topicInfo = topicInfo
  },
  SET_BOARD_INFO(state, boardInfo) {
    state.boardInfo.push(boardInfo)
  },
  SET_RESULT_BOARD(state, resultBoards) {
    state.resultBoards = resultBoards
  },
  SET_SAVE_BOARD(state, saveBoards) {
    state.saveBoards.push(saveBoards)
  },
  SET_MODAL(state, showModal) {
    state.showModal = showModal
    window.modalState = showModal
  },
  SET_TOGGLE(state, toggle) {
    state.toggle = toggle
  },
  // 초기화 로직
  RESET(state) {
    state.topic = ""
    state.topicInfo = []
    state.boardInfo = []
    state.resultBoards = []
    state.saveBoards = []
    state.toggle = false
  }
}
