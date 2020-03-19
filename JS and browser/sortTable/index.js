document.querySelector('thead').addEventListener('click' , function (e) {
  const sortBy = e.target.dataset.type;
  let columnNumber = e.target.cellIndex;
  const tBody = document.querySelector('tbody');
  const bodyRows = [...tBody.rows];

  if (sortBy === 'number') {
    bodyRows.sort((row1, row2)=> {
      return  row1.cells[columnNumber].textContent - row2.cells[columnNumber].textContent;
    });
  }
  if (sortBy === 'string') {
    bodyRows.sort((row1, row2)=> {
      return  row1.cells[columnNumber].textContent < row2.cells[columnNumber].textContent ? -1 : 1;
    });
  }

  tBody.append(...bodyRows)
})