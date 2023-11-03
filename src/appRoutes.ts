export const appRoutes = {
  main: () => ({ path: '/' }),
  categories: (id?: any) => ({ path: `/categories/${id}` }),
  offers: (slug?: any) => ({ path: `/offers/${slug}` }),
  services: (slug?: any) => ({ path: `/services/${slug}` }),
  about: () => ({ path: '/about' }),
  contacts: () => ({ path: '/contacts' }),
  bonus: () => ({ path: '/bonus' }),
  // benefits: () => ({ path: '/#benefits' }),
  // searchCar: () => ({ path: '/search-car' }),
  // catalog: (query?: any) => ({ path: '/catalog/products/', query }),
  // catalogMain: (id: string) => ({ path: `/main-catalog/${id}` }),
  // catalogByVin: (id?: string | number, query?: any) => ({ path: `/catalog/search/${id}`, query }),
  // product: (id?: string | number, query?: any) => ({ path: `/catalog/products/${id}`, query }),
  // productCard: (id?: string | number) => `/product-card/${id}`,
  // distributors: () => ({ path: '/distributors' }),
  // privacyPolicy: () => ({ path: '/privacy-policy' }),
  // guarantee: () => ({ path: '/guarantee' }),
  // catalogPdg: () => ({ path: '/catalog-pdf' }),
  // newsList: () => ({ path: '/news' }),
  // newsItem: (id: string | number) => ({ path: `/news/${id}` }),
  // pdfList: () => ({ path: '/PDF-catalogs' }),
};
