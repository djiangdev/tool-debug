/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
window.onload = () => {
  const timeout = 1000;
  let interval;

  if (onCurrentURL('bigsy.toolsurf.com')) {
    interval = setInterval(() => {
      const elements = [
        document.getElementById('gray-mask'),
        document.getElementById('popup-content'),
      ];
      toolCleaner(elements);
    }, timeout);
  }

  if (onCurrentURL('t10.toolsurf.com')) {
    interval = setInterval(() => {
      const elements = [document.getElementById('srf-browser-unhappy')];
      toolCleaner(elements);
    }, timeout);
  }

  function toolCleaner(elements) {
    let stop = 0;
    console.log('start check');
    elements.forEach((element) => {
      if (element) {
        element.remove();
        stop++;
      }
    });
    if (stop === elements.length) {
      clearInterval(interval);
      console.log('stop check');
    }
  }

  function onCurrentURL(domain) {
    if (window.location.href.includes(domain)) {
      return true;
    }
    return false;
  }
};
