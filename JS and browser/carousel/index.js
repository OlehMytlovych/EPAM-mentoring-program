const [leftArrow, rightArrow] = document.querySelectorAll('.arrow');

function onRightArrowClick () {
  this.disabled = true;

  const items = document.getElementById('gallery').children;
  const lastItemLeft = items[items.length-1]['offsetLeft'];
  const thirdShownLeft = 260;
  const itemWidth = 130;

  if ( lastItemLeft <= thirdShownLeft) return;
  const availItemsNum = (lastItemLeft - thirdShownLeft)/itemWidth;
  const itemsShowNum = (availItemsNum >= 3) ? 3 : availItemsNum;

  for (let item = 0; item < items.length; item++) {
    const currentLeft = items[item]['style']['left'];
    const currentLeftNum = currentLeft.slice(0, currentLeft.length-2);
    const newLeft = currentLeftNum - itemWidth*itemsShowNum;
    items[item]['style']['left'] = newLeft + 'px';
  }
}

function onLeftArrowClick () {
  this.disabled = true;
  
  const items = document.getElementById('gallery').children;
  const firstItemLeft = items[0]['offsetLeft'];
  const firstShownLeft = 0;
  const itemWidth = 130;

  if ( firstItemLeft >= firstShownLeft) return;

  const availItemsNum = Math.abs(firstItemLeft/itemWidth);
  const itemsShowNum = (availItemsNum >= 3) ? 3 : availItemsNum;

  for (let item = 0; item < items.length; item++) {
    const currentLeft = items[item]['style']['left'];
    const currentLeftNum = currentLeft.slice(0, currentLeft.length-2);
    const newLeft = +currentLeftNum + itemWidth*itemsShowNum;
    items[item]['style']['left'] = newLeft + 'px';
  }
}

function onTransitionend () {
  const [btnLeft, btnRight] = document.querySelectorAll('.arrow');
  btnLeft.disabled = false;
  btnRight.disabled = false;
}

leftArrow.addEventListener('click', onLeftArrowClick);
rightArrow.addEventListener('click', onRightArrowClick);
document.querySelector('li').addEventListener('transitionend' , onTransitionend);