const question = 'ゲーム史上、最も売れたゲーム機は次のうちどれ？';
const answers = [
  'スーパーファミコン',
  'プレステ２',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();
const clickHandler = (e) => {
  if(correct === e.target.textContent){
   window.alert('正解！');
 }else{
   window.alert('不正解！')
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