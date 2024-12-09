import './style.css';
import { content } from './content';
import { createAppList } from './components/AppList';
import { createCriteriaList } from './components/CriteriaList';
import { initSmoothScroll } from './utils/smoothScroll';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <h1>${content.title}</h1>
    <p>
      ${content.description}
    </p>
    <div class="criteria-link">
      <a href="#criteria">→ View criteria</a>
    </div>

    <ul class="app-list">
      ${createAppList(content.apps)}
    </ul>

    <h2 id="criteria">Criteria</h2>
    <ul>
      ${createCriteriaList(content.criteria)}
    </ul>
  </div>
`;

initSmoothScroll();