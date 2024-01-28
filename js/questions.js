import { questions } from './data.js'

// 각각의 요소 찾기 
const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

// 현재 질문의 번호
let currentNumber = 0
// 사용자가 답변 완료 시 mbti 출력
let mbti = ''

function renderQuestion() {
  // 첫번째 객체 
  const question = questions[currentNumber]
  questionEl.innerHTML = question.question
  numberEl.innerHTML = question.number
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}
// 다음 질문으로 넘어가는 함수 
function nextQuestion(choiceNumber) {
  //더 이상 질문이 없다면, 결과 페이지 리턴 
  if (currentNumber === questions.length - 1) {
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  // mbti = ''+'e or i'+'s or n'+'f or t'+'p or j'
  currentNumber = currentNumber + 1
  // render = 출력
  renderQuestion()
}
//결과 페이지로 이동
function showResultPage() {
  location.href = "results.html?mbti=" + mbti //쿼리스트링
}
//답변1, 답변2 선택시 동작
choice1El.addEventListener('click', function () {
  nextQuestion(0)
})

choice2El.addEventListener('click', function () {
  nextQuestion(1)
})
//첫 번째 질문 렌더링 
renderQuestion()

