const quiz = [
  {
    question: 'ミヤの本名は？',
    answers: [
      '坂本月彦',
      '天堂貴文',
      '吉田さん',
      '宮沢雄一'
    ],
    correct: '宮沢雄一'
  },{
    question: 'つばきの苗字は？',
    answers: [
      '坂本',
      '宮沢',
      '才木',
      '谷'
    ],
    correct: '才木'
  },{
    question: 'カー坊の本名は？',
    answers: [
      'えんチョー',
      'ボンチュー',
      '馬場宏美',
      '村上勝也'
    ],
    correct: '村上勝也'
  },{
    question: 'マミーファミリーの中で、四天王の爪が長くて、チーター柄のパンツを履いている人は？',
    answers: [
      'ガイ',
      'ダムー',
      '黒豹',
      'ピース'
    ],
    correct: 'ダムー'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;



const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

const clickHandler = (e) => {
 if(quiz[quizIndex].correct === e.target.textContent){
   window.alert('正解！！');
   score++;
 }else{
   window.alert('残念！！')
 }
 quizIndex++;

 if(quizIndex < quizLength) {
   //問題数がまだあればこちらを実行
   setupQuiz();
 }else {
   //問題数がもうなければこちらを実行
   window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！')
 }
};
//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
 clickHandler(e);
});
  handlerIndex++;
}