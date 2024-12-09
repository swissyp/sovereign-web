export function createAppList(apps: Array<{ 
  name: string; 
  description: string; 
  url: string;
  alternative: {
    name: string;
    color: string;
  };
}>): string {
  return apps.map(app => `
    <li>
      <a href="${app.url}" target="_blank" rel="noopener noreferrer" class="app-link">
        <div class="app-stamp">
          <span class="decentralized">decentralized</span>
          <span class="alternative" style="color: ${app.alternative.color}">${app.alternative.name}</span>
        </div>
        <span class="app-name">${app.name}</span>
        <span class="app-description">${app.description}</span>
      </a>
    </li>
  `).join('');
}