document.querySelector('#field').addEventListener('click', function(e) {
  const border = (this.offsetWidth - this.clientWidth)/2;
  const ball = document.querySelector('#ball');
  const ballR = ball.offsetWidth/2;

  let ballTop = e.clientY - this.offsetTop + window.scrollY - border - ballR;
  let ballLeft = e.clientX - this.offsetLeft + window.scrollX - border - ballR;

  ballTop = ballTop < 0 ? 0 : ballTop;
  if ((ballTop + ballR*2) > this.clientHeight) {
    ballTop = this.clientHeight - ballR*2;
  } 

  ballLeft = ballLeft < 0 ? 0 : ballLeft;
  if ((ballLeft + ballR*2) > this.clientWidth) {
    ballLeft = this.clientWidth - ballR*2
  } ;

  ball.style.top = ballTop + 'px';
  ball.style.left = ballLeft + 'px';
})