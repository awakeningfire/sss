const saying = [
    "예수그리스는 하나님의 아들이십니다.",
    "기도의 분량이 찰때 역사합니다!!",
    "나를 방해하는 것을 적고, 버려라",
    "불광불급(不狂不及): 미치지 않으면 미치지 못한다",
    "공부를 열심히 하는 건 어렵지만, 공부를 방해하는 것을 안하는 것은 쉽다",
    "잡생각이 들고 나에 대해 의심이 드는 순간을 하루 이틀 30일 버텨야 공부가 시작된다",
  ];
  const messages = document.querySelector(".messages");
  
  const selectNum = Math.floor(Math.random() * saying.length);
  
  messages.innerHTML = saying[selectNum];
  