const API_ENDPOINT =
  "https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev";

// const api = {
//   fetchCats: keyword => {
//     return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then(res =>
//       res.json()
//     );
//   }
// };

/**
 * 고양이 검색 결과 목록을 가져옴
 * @param {*} keyword 
 * @returns data
 */
async function fetchSearchResults(keyword) {
  const response = await fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  return response.json();
}

/**
 * 검색한 고양이 결과 목록 중 선택한 하나의 상세정보를 보여줌
 * @param {*} id 
 * @returns data
 */
async function fetchDetailResult(id) {
  const response = await fetch(`${API_ENDPOINT}/api/cats/${id}`);
  return response.json();
}

/**
 * 고양이 사진을 랜덤으로 50개씩 보여줌
 * @returns data
 */
async function fetchRandomList() {
  const response = await fetch(`${API_ENDPOINT}/api/cats/random50`);
  return response.json();
}