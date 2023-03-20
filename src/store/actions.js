import { getTopicInfo, getResultBoards } from '@/api'

export default {
  async FETCH_TOPIC_INFO({ commit }, topic) {
    const { data } = await getTopicInfo(topic)
    commit('SET_TOPIC', data.topic)
    commit('SET_TOPIC_INFO', data.questions)

    return data
  },
  async FETCH_RESULT_SEARCH({ commit }, q) {
    const { data } = await getResultBoards(q)
    commit('SET_RESULT_BOARD', data)

    return data
  }
}