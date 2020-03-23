document.querySelector('#field').addEventListener('click', (e) => {
  const field = e.currentTarget;
  const border = (field.offsetWidth - field.clientWidth) / 2;
  const ball = document.querySelector('#ball');
  const ballR = ball.offsetWidth / 2;

  let ballTop = e.clientY - field.offsetTop + window.scrollY - border - ballR;
  let ballLeft = e.clientX - field.offsetLeft + window.scrollX - border - ballR;

  ballTop = ballTop < 0 ? 0 : ballTop;
  if ((ballTop + ballR * 2) > field.clientHeight) {
    ballTop = field.clientHeight - ballR * 2;
  }

  ballLeft = ballLeft < 0 ? 0 : ballLeft;
  if ((ballLeft + ballR * 2) > field.clientWidth) {
    ballLeft = field.clientWidth - ballR * 2;
  }

  ball.style.top = `${ballTop}px`;
  ball.style.left = `${ballLeft}px`;
});
