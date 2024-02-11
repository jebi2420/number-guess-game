// 랜덤 번호지정
// 유저가 번호를 입력 -> go 버튼 누름
// 랜덤 번호 < 유저 번호  -> Down
// 랜덤 번호 > 유저 번호 -> Up
// Reset 버튼을 누르면 게임이 Reset
// 5번의 기회를 다쓰면 게임이 끝난다 (더 이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깎지 않는다

let computerNum = 0;
let playBtn = document.getElementById("play-btn");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetBtn = document.getElementById("reset-btn")
let chances = 10;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");

playBtn.addEventListener("click", play)
resetBtn.addEventListener("click", reset)
userInput.addEventListener("focus", resetInput)

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 10)+1;
    console.log("정답", computerNum);
}

function play(){
   let userValue = userInput.value;
   // playBtn 누를 때마다 chances가 하나씩 까임
   chances--;
   chanceArea.textContent = `남은 기회: ${chances}번`;
   console.log("chance", chances);

   if(userValue < computerNum){
        resultArea.textContent = "Up"
   }else if(userValue > computerNum){
        resultArea.textContent = "Down"
   }else{
        resultArea.textContent = "정답!"
        // 숫자를 맞춘 후로는 더 이상 플레이 못하게
        // if(gameOver == true){
        //     playBtn.disabled = true;
        // }
   }

   if(chances < 1){
       gameOver = true
   }
   if(gameOver){
       playBtn.disabled = true;
   }
}

function reset(){
    // user input창이 깨끗하게 정리되고
    userInput.value = "";
    // 새로운 번호가 생성되고
    pickRandomNum();
    resultArea.textContent = "결과"
}

function resetInput(){
    userInput.value = "";
}

pickRandomNum();
