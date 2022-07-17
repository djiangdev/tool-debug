/* eslint-disable no-plusplus */
/* eslint-disable no-alert */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */
window.onload = () => {
  const timeout = 1000;
  let interval;

  if (onCurrentURL('bigsy.toolsurf.com')) {
    const elements = [
      document.getElementById('gray-mask'),
      document.getElementById('popup-content'),
    ];
    makeInterval(elements);
  }

  if (onCurrentURL('t10.toolsurf.com')) {
    const elements = [document.getElementById('srf-browser-unhappy')];
    makeInterval(elements);
  }

  function makeInterval(elements) {
    interval = setInterval(() => {
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
    if (stop === Object.keys(elements).length) {
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
