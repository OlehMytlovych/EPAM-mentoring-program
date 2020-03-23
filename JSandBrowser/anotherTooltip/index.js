function addTooltip(container, text) {
  const containerScreenX = container.offsetLeft - window.scrollX;
  const containerScreenY = container.offsetTop - window.scrollY;
  const tooltipMargin = 5;

  const tooltip = document.createElement('div');
  tooltip.innerHTML = text;
  tooltip.classList.add('tooltip');
  document.body.append(tooltip);

  const tooltipLeft = containerScreenX + container.offsetWidth / 2 - tooltip.offsetWidth / 2;
  const tooltipTop = (tooltip.offsetHeight > containerScreenY)
    ? (containerScreenY + container.offsetHeight + tooltipMargin)
    : (containerScreenY - tooltip.offsetHeight - tooltipMargin);

  tooltip.style.left = `${tooltipLeft}px`;
  tooltip.style.top = `${tooltipTop}px`;
}


document.querySelector('#house').addEventListener('mouseover', (e) => {
  const targetText = e.target.dataset.tooltip;

  if (document.querySelector('.tooltip')) return;

  if (targetText) {
    addTooltip(e.target, targetText);
    return;
  }

  addTooltip(e.currentTarget, e.currentTarget.dataset.tooltip);
});

document.querySelector('#house').addEventListener('mouseout', () => {
  const shownTooltip = document.querySelector('.tooltip');
  if (!shownTooltip) return;

  shownTooltip.remove();
});
