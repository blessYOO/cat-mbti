import { results, mbtis } from './data.js'

//http://127.0.0.1:5500/assets/results.html?mbti=istj
// 쿼리스트링 정보를 알 수 있음, mbti에 어떤 값이 들었는지 
const mbti = new URLSearchParams(location.search).get('mbti')
const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')
const lectureImgs = document.querySelectorAll('.lectureImg')

titleEl.innerHTML = result.title
characterEl.src = result.character

boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})

jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index]
})

lectureImgs.forEach(function (lectureImg, index){
  lectureImg.innerHTML = result.lectureImg[index]
})
