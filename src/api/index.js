import axios from 'axios';
import { qData, boardMock } from './mock'

const $axios = axios.create({
  baseURL: 'http://localhost:8000',
})

// API 함수 예시
// async function fetchList(pageName) {
//   try {
//     const res = await axios.get(`${config.baseUrl}${pageName}/1.json`);
//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getTopicInfo(info) {
  try {
    const res = qData
    return res
  } catch (err) {
    console.error(err)
  }
}

async function getResultBoards(q) {
  try {
    const res = boardMock
    return res
  } catch (err) {
    console.error(err)
  }
}

export {
  getTopicInfo,
  getResultBoards
}