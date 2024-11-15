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

  function setupSearch(inputId: string, resultsId: string) {
    const searchInput = document.getElementById(inputId) as HTMLInputElement;
    const searchResults = document.getElementById(resultsId) as HTMLDivElement;

    if (!searchInput || !searchResults) return;

    searchInput.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement;
      const query = target.value.toLowerCase();
      
      if (query.length < 2) {
        searchResults.classList.add('hidden');
        return;
      }

      const matches = pages.filter(page => 
        page.title.toLowerCase().includes(query) || 
        page.content.toLowerCase().includes(query)
      );

      if (matches.length > 0) {
        searchResults.innerHTML = matches.map(page => `
          <a href="${page.url}" class="block px-4 py-3 hover:bg-grey-5 border-b border-grey-3 last:border-0">
            <div class="font-medium text-teal">${page.title}</div>
            <div class="text-sm text-grey-2">${page.content}</div>
          </a>
        `).join('');
        searchResults.classList.remove('hidden');
      } else {
        searchResults.innerHTML = `
          <div class="px-4 py-3 text-grey-2">No se encontraron resultados</div>
        `;
        searchResults.classList.remove('hidden');
      }
    });

    // Close results when clicking outside
    document.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!searchInput.contains(target) && !searchResults.contains(target)) {
        searchResults.classList.add('hidden');
      }
    });
  }

  // Setup search for both desktop and mobile
  setupSearch('navSearch', 'searchResults');
  setupSearch('mobileNavSearch', 'mobileSearchResults');

  function toggleMenu() {
    const isOpen = mobileMenu?.classList.contains('translate-x-0');
    mobileMenu?.classList.toggle('translate-x-0');
    mobileMenu?.classList.toggle('translate-x-full');
    if (body) {
      body.style.overflow = isOpen ? 'auto' : 'hidden';
    }
  }

  menuButton?.addEventListener('click', toggleMenu);
  closeButton?.addEventListener('click', toggleMenu);

  // Close menu when clicking outside
  document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      mobileMenu?.classList.contains('translate-x-0') &&
      !mobileMenu.contains(target) &&
      !menuButton?.contains(target)
    ) {
      toggleMenu();
    }
  });