  interface Page {
    title: string;
    url: string;
    content: string;
  }

  const menuButton = document.getElementById('menuButton');
  const closeButton = document.getElementById('closeButton');
  const mobileMenu = document.getElementById('mobileMenu');
  const body = document.body;

  // Search functionality
  const pages: Page[] = [
    { title: 'Inicio', url: '/', content: 'Página principal de MedVisionAR' },
    { title: 'Producto', url: '/producto', content: 'Información sobre nuestro producto de realidad aumentada' },
    { title: 'Características', url: '/caracteristicas', content: 'Características principales de MedVisionAR' },
    { title: 'FAQ', url: '/faq', content: 'Preguntas frecuentes sobre MedVisionAR' },
    { title: 'Términos de Servicio', url: '/terminos', content: 'Términos y condiciones de uso' },
    { title: 'Política de Privacidad', url: '/privacidad', content: 'Política de privacidad de MedVisionAR' },
    { title: 'Derechos Reservados', url: '/derechos', content: 'Información sobre derechos reservados' }
  ];

  // Add constants for repeated values
  const MINIMUM_SEARCH_LENGTH = 2;
  const TRANSLATION_CLASSES = {
    open: 'translate-x-0',
    closed: 'translate-x-full'
  } as const;

  function setupSearch(inputId: string, resultsId: string): void {
    const searchInput = document.getElementById(inputId) as HTMLInputElement | null;
    const searchResults = document.getElementById(resultsId) as HTMLDivElement | null;

    if (!searchInput || !searchResults) {
      console.warn(`Search elements not found: ${inputId} or ${resultsId}`);
      return;
    }

    const handleSearch = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const query = target.value.toLowerCase().trim();
      
      if (query.length < MINIMUM_SEARCH_LENGTH) {
        searchResults.classList.add('hidden');
        return;
      }

      const matches = pages.filter(page => 
        page.title.toLowerCase().includes(query) || 
        page.content.toLowerCase().includes(query)
      );

      searchResults.innerHTML = matches.length > 0
        ? matches.map(page => `
            <a href="${page.url}" class="block px-4 py-3 hover:bg-grey-5 border-b border-grey-3 last:border-0">
              <div class="font-medium text-teal">${page.title}</div>
              <div class="text-sm text-grey-2">${page.content}</div>
            </a>
          `).join('')
        : `<div class="px-4 py-3 text-grey-2">No se encontraron resultados</div>`;
      
      searchResults.classList.remove('hidden');
    };

    // Add keyboard support
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        searchResults.classList.add('hidden');
        searchInput.blur();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!searchInput.contains(target) && !searchResults.contains(target)) {
        searchResults.classList.add('hidden');
      }
    };

    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('keydown', handleKeydown);
    document.addEventListener('click', handleClickOutside);
    // Cleanup function (call this when component unmounts if using a framework)
    const cleanup = () => {
      searchInput.removeEventListener('input', handleSearch);
      searchInput.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('click', handleClickOutside);
    };
  }

  // Setup search for both desktop and mobile
  const cleanup1 = setupSearch('navSearch', 'searchResults');
  setupSearch('mobileNavSearch', 'mobileSearchResults');

  function toggleMenu(): void {
    if (!mobileMenu || !body) return;

    const isOpen = mobileMenu.classList.contains(TRANSLATION_CLASSES.open);
    
    mobileMenu.classList.toggle(TRANSLATION_CLASSES.open);
    mobileMenu.classList.toggle(TRANSLATION_CLASSES.closed);
    body.style.overflow = isOpen ? 'auto' : 'hidden';

    // Add ARIA attributes for accessibility
    mobileMenu.setAttribute('aria-expanded', (!isOpen).toString());
  }

  // Event listeners for menu
  if (menuButton && closeButton) {
    menuButton.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);
  } else {
    console.warn('Menu buttons not found');
  }

  // Improved click outside handler for menu
  const handleMenuClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      mobileMenu?.classList.contains(TRANSLATION_CLASSES.open) &&
      !mobileMenu.contains(target) &&
      !menuButton?.contains(target)
    ) {
      toggleMenu();
    }
  };

  document.addEventListener('click', handleMenuClickOutside);