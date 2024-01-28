# 🐱CAT-MBTI
귀여운 고양이를 위한 MBTI 검사 *ฅ^•ﻌ•^ฅ*
# 🔗 TEST URL
https://joyful-syrniki-84389e.netlify.app
# 🛠️ SKILL
##### 1️⃣ 시작 화면/링크 공유
![image](https://github.com/blessYOO/cat-mbti/assets/157975172/8f991d26-f9e9-46c7-b0a4-02c3a27bab57)
![image](https://github.com/blessYOO/cat-mbti/assets/157975172/429181c8-4682-4056-a77d-6fb5fc1287e5)
##### 2️⃣ 스크립트 모듈
![image](https://github.com/blessYOO/cat-mbti/assets/157975172/508dfa68-463a-4f68-8a50-12e4a2cea9f4)
![image](https://github.com/blessYOO/cat-mbti/assets/157975172/74cda999-d54d-4934-b649-5dee368bc7cd)
##### 3️⃣ 진행 바 CSS
![image](https://github.com/blessYOO/cat-mbti/assets/157975172/9f9c8199-dd0f-4781-a79c-7e3a9a8402b2)
##### 4️⃣ const mbti = new URLSearchParams(location.search).get('mbti')
![image](https://github.com/blessYOO/cat-mbti/assets/157975172/8859cde6-f7be-46a8-9dae-f1ec167502e2)
##### 5️⃣ 결과 화면
![image](https://github.com/blessYOO/cat-mbti/assets/157975172/18826107-ee84-4ab2-a48b-0d64bfc0645d)
![image](https://github.com/blessYOO/cat-mbti/assets/157975172/14b59e78-cd06-4054-a1f1-dc83765c5254)


# netlify 배포 시 겪은 오류들 
- HTML, CSS, JS로만 이루어진 프로젝트는 toml 파일에 build 설정을 할 필요 없다.
- 경로가 잘 설정되었는지 확인하기 (프로젝트 밑에 바로 css, js, images 폴더를 두었다.)
- js에서 module 타입 사용 시 CORS 오류가 발생할 수 있다.

웹에서 로컬 파일에 접근하는 것을 막기 위해 발생하는 오류이므로,
로컬 서버 생성 후 로컬 서버에서 프로그램을 열면 된다. <br>
VSCODE 사용 중이라면 LIVE SERVER라는 PLUGIN을 깔아 해결할 수 있다 :)
