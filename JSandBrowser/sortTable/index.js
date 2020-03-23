document.querySelector('thead').addEventListener('click', (e) => {
  const sortBy = e.target.dataset.type;
  const columnNumber = e.target.cellIndex;
  const tBody = document.querySelector('tbody');
  const bodyRows = [...tBody.rows];

  if (sortBy === 'number') {
    bodyRows.sort((row1, row2) => {
      const currVal1 = row1.cells[columnNumber].textContent;
      const currVal2 = row2.cells[columnNumber].textContent;
      return currVal1 - currVal2;
    });
  }
  if (sortBy === 'string') {
    bodyRows.sort((row1, row2) => {
      const currVal1 = row1.cells[columnNumber].textContent;
      const currVal2 = row2.cells[columnNumber].textContent;
      return (currVal1 < currVal2 ? -1 : 1);
    });
  }

  tBody.append(...bodyRows);
});
