// the topic was delegation, so used it

document.addEventListener('mouseover', (e) => {
  const tooltipBtn = e.target;
  const tooltipHtml = tooltipBtn.dataset.tooltip;
  if (tooltipHtml === undefined) return;

  const btnScreenX = tooltipBtn.offsetLeft - window.scrollX;
  const btnScreenY = tooltipBtn.offsetTop - window.scrollY;
  const tooltipMargin = 5;

  const tooltip = document.createElement('div');
  tooltip.innerHTML = tooltipHtml;
  tooltip.classList.add('tooltip');
  document.body.append(tooltip);

  const tooltipLeft = btnScreenX;
  const tooltipTop = (tooltip.offsetHeight > btnScreenY)
    ? (btnScreenY + tooltipBtn.offsetHeight + tooltipMargin)
    : (btnScreenY - tooltip.offsetHeight - tooltipMargin);

  tooltip.style.left = `${tooltipLeft}px`;
  tooltip.style.top = `${tooltipTop}px`;
});

document.addEventListener('mouseout', (e) => {
  const tooltipBtn = e.target;
  if (!tooltipBtn.dataset || tooltipBtn.dataset.tooltip === undefined) return;

  document.querySelector('.tooltip').remove();
});
