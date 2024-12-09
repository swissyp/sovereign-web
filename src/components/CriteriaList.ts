export function createCriteriaList(criteria: string[]): string {
  return criteria.map(criterion => {
    const [title, ...rest] = criterion.split(':');
    const description = rest.join(':'); // Handle any potential additional colons in the description
    return `
      <li><strong>${title}:</strong>${description}</li>
    `;
  }).join('');
}