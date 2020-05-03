const paintUI = (data: object) => {
  const vw: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  if (vw < 770) {
    import('./mobileView/mobileView')
      .then(({ default: displayMobileView }) => displayMobileView(data))
      .then();
  }
  
  if (vw > 770) {
    import('./desktopView/desktopView')
    .then(({ default: displayMobileView }) => displayMobileView(data));
  }
};



export default {
  paintUI,
};
