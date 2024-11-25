document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  const filterContainer = document.getElementById('filter-container');

  if (!searchInput || !filterContainer) {
    console.error('Missing search input or filter container element.');
    return;
  }

  const filters = Array.from(filterContainer.children);

  searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();

    filters.forEach((filter) => {
      if (!(filter instanceof HTMLElement)) return; // Ensure the filter is an HTMLElement

      const titleText = filter.querySelector('h3')?.textContent?.toLowerCase() || '';
      const contentText = filter.textContent?.toLowerCase() || '';

      if (searchValue && (titleText.includes(searchValue) || contentText.includes(searchValue))) {
        filter.style.display = 'block';
      } else {
        filter.style.display = searchValue ? 'none' : 'block';
      }
    });
  });
});

