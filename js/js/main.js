'use strict';

{
  const btn = document.getElementById('btn');
　
  btn.addEventListener('click', () => {
    const n = Math.floor(Math.random() * 3);

    switch (n) {
      case 0:
        btn.textContent = '休憩';
        break;
      case 1:
        btn.textContent = 'もう10分';
        break;
      case 2:
        btn.textContent = 'もう15分';
        break;
    }
  })
}