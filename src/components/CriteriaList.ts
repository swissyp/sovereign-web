export function createCriteriaList(criteria: string[]): string {
  return criteria.map(criterion => `
    <li>${criterion}</li>
  `).join('');
}