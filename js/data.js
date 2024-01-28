// 내보내주는 export
export const questions = [
  // 객체 데이터
  {
    number: '01',
    question: '집에 아무도 없을 때 어때?',
    choices: [
      { text: '와 ~ 드디어 나만의 시간이다. <br> 자유로워', value: 'i' },
      { text: '아무도 없다니, 다들 어디간거지? <br> 조금 외로워', value: 'e' }
    ]
  },
  {
    number: '02',
    question: 'tv에서 새 영상이 나올 때 반응은?',
    choices: [
      { text: '그냥 tv 소리네...잠이나 더 자야지', value: 's' },
      { text: '헉 새다!새다! <br> 화면 뒤쪽으로 갔나? (호다닥)', value: 'n' }
    ]
  },
  {
    number: '03',
    question: '집사가 늦잠을 자서<br>밥을 안줄 때 나는?',
    choices: [
      { text: '집사가 어제 많이 힘들었나? <br>나도 좀 더 자야지', value: 'f' },
      { text: '왜 아직까지 자는거야?<br>일어나! 냥냥펀지(퍽퍽)', value: 't' }
    ]
  },
  {
    number: '04',
    question: '집사가 평소보다 <br>늦게 돌아왔을때 나의 반응은?',
    choices: [
      { text: '으아아아!<br>감히 내 루틴을 망치다니', value: 'j' },
      { text: '하아암~집사왔냐옹 <br> 슬슬 움직여볼까~', value: 'p' }
    ]
  },
  {
    number: '05',
    question: '"안녕~난 집사친구야" <br> 모르는 사람이 집에 오면?',
    choices: [
      { text: '넌 누구냥!!!~<br>(하아악!!!다가오지마!)', value: '' },
      { text: '반갑다냥~ 넌 어디서 왔냥 <br> 친해져보자옹', value: '' }
    ]
  },
  {
    number: '06',
    question: '들으면 마음이 편해지는 노래는?',
    choices: [
      { text: '쾅쾅 지잉~ 시끄러운 락이 좋아!!', value: '' },
      { text: '피아노 음악처럼 조용한게 좋아...', value: '' }
    ]
  },
  {
    number: '07',
    question: '집사한테 혼날 때 나는?',
    choices: [
      { text: '더 열심히 해서 멋진 <br> 냐옹이란 걸 보여주자!', value: '' },
      { text: '난 이제 집사한테 쓸모가 없나봐 <br> 집땨...사랑이 식었어..', value: '' }
    ]
  },
  {
    number: '08',
    question: '소파 밑에 들어간 쥐돌이가 갇혔어.<br>어떻게 해결할래?',
    choices: [
      { text: '시간을 더 끌 순 없지.<br>집사!! 도움요청!!', value: '' },
      { text: '(열정과다) 밤을 새서라도<br>내가 꺼내고 말겠어!!! ', value: '' }
    ]
  },
  {
    number: '09',
    question: '부자인 집사 친구가<br>나를 데려가려고 할때<br>나의 선택은?',
    choices: [
      { text: '인생은 도전이야!<br>좋은 기회라고 생각하고 시작해볼래!', value: '' },
      { text: '지금 집도 좋은데..<br>거기가서도 잘 지낼 수 있을까', value: '' }
    ]
  },
  {
    number: '10',
    question: '같이 사는 고양이들이 싸운다. <br> 나의 반응은?',
    choices: [
      { text: '일단 진정해!! <br> 양쪽말을 다 들어준다.', value: '' },
      { text: '으아아아 나도 열받네! <br> 같이 싸운다.', value: '' }
    ]
  },
]
export const results = [
  {
    title: '궁금한건<br>못참아!',
    character: 'images/result_character1.png',
    results: [
      '혼자서 멘탈 케어가 가능해요!<br>집사가 없어도 할 일은 많아요!',
      '사냥에 대한 욕심이 많아요.<br>타고난 사냥꾼이라고 할 수 있어요!',
      '자유로운 환경에서 더 잘지내요!<br>하지만 누구보다 스스로 시간 관리가 철저해요:)',
      '리더십 있다는 소리를 자주 들어요.<br>추진력이 있는 편이죠~ (뿌듯)'
    ],
    jobs: ['도둑 고양이', '귀여운<br>사고뭉치'],
    lectureImg: 'images/result_job1.png'
  },
  {
    title: '프로직진러!<br>사교성 갑',
    character: 'images/result_character2.png',
    results: [
      '나는야 사람들 멘탈 지킴이!<br>언제나 차분하게 주위사람들을 챙기는 파워 인싸!',
      '여러 사람들과 같이 사는 공간이 찰떡!',
      '빨리빨리!<br>동시에 여러 가지 일을 해결할 수 있어요.',
      '냐옹이든 사람이든,<br>모든 정보를 알아야 직성이 풀려요'
    ],
    jobs: ['인싸 고양이', '대장<br>고양이'],
    lectureImg: 'images/result_job3.png'
   },
  {
    title: '우리 무기는<br>상상력!',
    character: 'images/result_character3.png',
    results: [
      '이것저것 관심이 많은 편이에요.<br>모든 게 궁금해요!',
      '섬세함이 장점으로<br>주변 사람들의 기분을 잘 알아차려요.',
      '착해보이지만!<br>예민한 부분을 건드리면 물어요!',
      '예민할 때도 있지만,<br>어쩌면 특별한 상황에선 장점이 될 지도 몰라요!'
    ],
    jobs: ['예술가<br>고양이', '아수라백작<br>고양이'],
    lectureImg: 'images/result_job5.png'
   },
  {
    title: '인생은<br>한방!',
    character: 'images/result_character4.png',
    results: [
      '전략적으로 계획을 세우는 걸 좋아해요!',
      '평소 집사의 행동, 말투에 관심이 매우 많아요.',
      '꿈이 커요!<br>언젠가 창밖에 있는 새들을 다 잡을거에요~',
      '일할 땐 일하고! 놀 땐 놀고!<br>뭐든 확실한 게 좋아요.'
    ],
    jobs: ['사냥꾼<br>고양이', '사업가<br>고양이'],
    lectureImg: 'images/result_job7.png'
    },
  {
    title: '한 번 집중하면<br>멈출 수 없지!',
    character: 'images/result_character5.png',
    results: [
      '저는 위선과 가식이 없어요.<br>진실만 말하죠. (진지)',
      '혼자 있을 때 편안해요.<br>솔로 최고!',
      '한 번 꽂히면 끝도 없이 깊어져요.<br>다만 이외에 모든 것엔 관심이 없어요.',
      '(이상) <<<<<< (현실)<br>가끔 차가워 보일 때가 있어요, 그게 아닌데...'
    ],
    jobs: ['쥐돌이전문가', '데이터분석가'],
    lectureImg: 'images/result_job9.png'
  }
]
export const mbtis = {
  entj: 0,
  entp: 0,
  estp: 0,
  esfp: 1,
  esfj: 1,
  enfj: 1,
  infp: 2,
  isfp: 2,
  isfj: 2,
  infj: 2,
  estj: 3,
  istp: 3,
  intj: 4,
  intp: 4,
  istj: 4,
  enfp: 5
}
