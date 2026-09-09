// Curated high-resolution placeholders and assets matching the design mockup

export interface GalleryItem {
  id: string;
  title: string;
  category: 'estates' | 'ranches' | 'interiors';
  categoryLabel: string;
  location: string;
  image: string;
  price?: string;
  details?: string;
}

export const IMAGES = {
  // Hero Carousel Slides - Desert Estates & Mountain Retreats
  heroSlides: [
    {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
      alt: 'Luxury desert estate in Pahrump valley with mountain vista',
    },
    {
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
      alt: 'Modern custom desert residence with architectural landscape',
    },
    {
      url: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2000&q=85',
      alt: 'Expansive private desert estate with landscaped grounds',
    },
    {
      url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=85',
      alt: 'Luxury custom ranch home with panoramic mountain views',
    },
  ],

  // Real estate agent portrait resembling Marci Metzger (blonde, navy blazer, confident smile)
  marciPortrait: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=85',

  // Services 3 Cards
  serviceSell: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=85',
  serviceDream: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=85',
  serviceCommercial: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85',

  // Photo Gallery Properties
  galleryItems: [
    {
      id: 'prop-1',
      title: 'Spring Mountain Luxury Villa',
      category: 'estates',
      categoryLabel: 'Luxury Estate',
      location: 'Mountain Falls, Pahrump, NV',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      price: '$1,450,000',
      details: '4 Beds • 4.5 Baths • 4,820 Sq Ft',
    },
    {
      id: 'prop-2',
      title: 'Desert Sun Equestrian Ranch',
      category: 'ranches',
      categoryLabel: 'Desert Ranch',
      location: 'Calvada Valley, Pahrump, NV',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=85',
      price: '$2,100,000',
      details: '5 Beds • 5 Baths • 10.5 Acres',
    },
    {
      id: 'prop-3',
      title: 'The Great Room Sanctuary',
      category: 'interiors',
      categoryLabel: 'Interior Design',
      location: 'Pahrump Valley, NV',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      price: 'Custom Build',
      details: 'Vaulted Ceilings • Custom Fireplace',
    },
    {
      id: 'prop-4',
      title: 'Sunset Ridge Contemporary',
      category: 'estates',
      categoryLabel: 'Luxury Estate',
      location: 'Desert Haven, Pahrump, NV',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      price: '$1,890,000',
      details: '4 Beds • 3.5 Baths • Pool & Spa',
    },
    {
      id: 'prop-5',
      title: 'Whispering Winds Acreage',
      category: 'ranches',
      categoryLabel: 'Desert Ranch',
      location: 'Crystal Basin, Pahrump, NV',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85',
      price: '$980,000',
      details: '3 Beds • 2 Baths • 5.0 Acres',
    },
    {
      id: 'prop-6',
      title: 'Chef’s Gourmet Kitchen Suite',
      category: 'interiors',
      categoryLabel: 'Interior Design',
      location: 'Mountain Falls Golf Club, NV',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
      price: 'Designer Interior',
      details: 'Marble Island • Sub-Zero Appliances',
    },
  ] as GalleryItem[],
};
