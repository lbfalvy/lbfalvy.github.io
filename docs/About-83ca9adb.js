function ___$insertStylesToHeader(css) {
  if (!css) {
    return
  }
  if (typeof window === 'undefined') {
    return
  }

  const style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css
}

import { R as React } from './index.js';

function AboutPage() {
    return React.createElement("div", { className: "AboutPage" },
        React.createElement("p", null, "I make websites and web-based applications primarily with React. I love open source and mathematics, but I also like to see my work visually, which is why I do so much frontend."));
}

export { AboutPage as default };
