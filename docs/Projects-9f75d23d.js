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

___$insertStylesToHeader(".Project {\n  flex: 0 0 auto;\n  max-width: 30ch;\n  padding: 5px 10px;\n  text-decoration: none;\n  color: inherit;\n}\n.Project h3 {\n  margin-top: 5px;\n}\n.Project:hover {\n  background: #fff1;\n}");

function Project({ name, url, children }) {
    return React.createElement("a", { href: url, className: "Project" },
        React.createElement("article", null,
            React.createElement("h3", null, name),
            React.createElement("p", null, children)));
}

___$insertStylesToHeader(".ProjectsPage h2 {\n  margin: 20px 10px;\n}\n.ProjectsPage > div {\n  display: flex;\n  flex-wrap: wrap;\n}");

function ProjectsPage() {
    return React.createElement("div", { className: "ProjectsPage" },
        React.createElement("h2", null, "Projects"),
        React.createElement("div", null,
            React.createElement(Project, { name: "React Await", url: "https://www.npmjs.com/package/@lbfalvy/react-await" }, "A React component for lazy-loading and extracting data fetching logic from the parent component. It works with Promises so it doesn't require any further effort from either the fetching library or the child, unlike Suspense which requires everyone's special effort."),
            React.createElement(Project, { name: "React Context Menu", url: "https://www.npmjs.com/package/@lbfalvy/react-context-menu" }, "A multilevel custom context menu for React. The API relies on React context so that menus can be combined over nested containers"),
            React.createElement(Project, { name: "\u03BBf.engine", url: "https://lbfalvy.github.io/f.engine/" }, "An interactive lambda calculus engine combined with a tutorial. I wrote it to explain lambda calculus to a friend."),
            React.createElement(Project, { name: "R\u00E9sum\u00E9", url: "https://lbfalvy.github.io/cv/?lang=en" }, "My CV is written in React. It does not look pretty when viewed in a web browser, and the CSS file is massive, but I can conclude that React is perfectly suited to designing printouts with advanced features like internationalization."),
            React.createElement(Project, { name: "\u00C1rny\u00E9kegyetem", url: "https://arnyekegyetem.hu" }, "A complex SPA encompassing a simple blog engine, a wiki engine and a forum. It's designed with mobile users in mind and it has a sophisticated token-based auth system, so it really feels a lot like a mobile app that opens in a browser window.")));
}

export { ProjectsPage as default };
