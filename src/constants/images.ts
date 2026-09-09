import heroImage from '../assets/heroimage.jpeg';
import marciPortrait from '../assets/marcimetzger.jpeg';
import topResidentialSales from '../assets/topresidentialsales.jpeg';
import dontJustListIt from '../assets/dontjustlistit.jpeg';
import guideToBuyers from '../assets/guidetobuyers.jpeg';
import realtorLogo from '../assets/realtor.jpeg';
import pahrumpValleyLogo from '../assets/pahrumpvalley.jpeg';
import galleryImage1 from '../assets/galleryimage1.jpg';
import galleryImage2 from '../assets/galleryimage2.jpg';
import galleryImage3 from '../assets/galleryimage3.jpg';
import galleryImage4 from '../assets/galleryimage4.jpg';
import galleryImage5 from '../assets/galleryimage5.jpg';
import galleryImage6 from '../assets/galleryimage6.jpg';
import galleryImage7 from '../assets/galleryimage7.jpg';

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
    {
      url: heroImage,
      alt: 'Pahrump desert community with mountain views',
    },
  ],

  // Real estate agent portrait
  marciPortrait,

  getItSold: {
    topResidentialSales,
    dontJustListIt,
    guideToBuyers,
  },

  partnerLogos: {
    realtor: realtorLogo,
    pahrumpValley: pahrumpValleyLogo,
  },

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
      image: galleryImage1,
      price: '$1,450,000',
      details: '4 Beds • 4.5 Baths • 4,820 Sq Ft',
    },
    {
      id: 'prop-2',
      title: 'Desert Sun Equestrian Ranch',
      category: 'ranches',
      categoryLabel: 'Desert Ranch',
      location: 'Calvada Valley, Pahrump, NV',
      image: galleryImage2,
      price: '$2,100,000',
      details: '5 Beds • 5 Baths • 10.5 Acres',
    },
    {
      id: 'prop-3',
      title: 'The Great Room Sanctuary',
      category: 'interiors',
      categoryLabel: 'Interior Design',
      location: 'Pahrump Valley, NV',
      image: galleryImage3,
      price: 'Custom Build',
      details: 'Vaulted Ceilings • Custom Fireplace',
    },
    {
      id: 'prop-4',
      title: 'Sunset Ridge Contemporary',
      category: 'estates',
      categoryLabel: 'Luxury Estate',
      location: 'Desert Haven, Pahrump, NV',
      image: galleryImage4,
      price: '$1,890,000',
      details: '4 Beds • 3.5 Baths • Pool & Spa',
    },
    {
      id: 'prop-5',
      title: 'Whispering Winds Acreage',
      category: 'ranches',
      categoryLabel: 'Desert Ranch',
      location: 'Crystal Basin, Pahrump, NV',
      image: galleryImage5,
      price: '$980,000',
      details: '3 Beds • 2 Baths • 5.0 Acres',
    },
    {
      id: 'prop-6',
      title: 'Chef’s Gourmet Kitchen Suite',
      category: 'interiors',
      categoryLabel: 'Interior Design',
      location: 'Mountain Falls Golf Club, NV',
      image: galleryImage6,
      price: 'Designer Interior',
      details: 'Marble Island • Sub-Zero Appliances',
    },
    {
      id: 'prop-7',
      title: 'Pahrump Valley Retreat',
      category: 'estates',
      categoryLabel: 'Valley Estate',
      location: 'Pahrump Valley, NV',
      image: galleryImage7,
      price: 'Private Listing',
      details: 'Desert Views • Mountain Setting',
    },
  ] as GalleryItem[],
};
