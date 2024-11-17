  document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    const filterContainer = document.getElementById('filter-container');
    const filters = Array.from(filterContainer.children) as HTMLElement[];

    searchInput.addEventListener('input', () => {
      const searchValue = searchInput.value.toLowerCase();

      filters.forEach((filter) => {
        const title = filter.querySelector('h3')?.textContent?.toLowerCase() || '';
        const content = filter.textContent?.toLowerCase() || '';

        if (searchValue && (title.includes(searchValue) || content.includes(searchValue))) {
          (filter as HTMLElement).style.display = 'block';
        } else {
          (filter as HTMLElement).style.display = searchValue ? 'none' : 'block';
        }
      });
    });
  });
