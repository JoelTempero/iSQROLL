// ============================================
// iSQROLL - Comprehensive Data & Seed Functions
// ============================================

// Category Groups - matching iSQROLL's exact structure
const CATEGORY_GROUPS = [
    { id: 'market-hub', name: 'Market Hub', icon: '🏪' },
    { id: 'automotive', name: 'Automotive', icon: '🚗' },
    { id: 'farming-machinery', name: 'Farming & Machinery', icon: '🚜' },
    { id: 'property', name: 'Property', icon: '🏠' },
    { id: 'services', name: 'Services & Advertisements', icon: '📢' },
    { id: 'occupations', name: 'Occupations', icon: '💼' }
];
window.CATEGORY_GROUPS = CATEGORY_GROUPS;

// Full category list with parent groups
const CATEGORIES = [
    // MARKET HUB
    { id: 'dollar-reserve', name: '$1 Reserve', icon: '💵', group: 'market-hub', order: 1 },
    { id: 'art-antiques', name: 'Art, Antiques, Collectables', icon: '🏺', group: 'market-hub', order: 2 },
    { id: 'auto-parts', name: 'Automotive Parts', icon: '🔧', group: 'market-hub', order: 3 },
    { id: 'books-magazines', name: 'Books & Magazines', icon: '📚', group: 'market-hub', order: 4 },
    { id: 'building-renovation', name: 'Building & Renovation', icon: '🔨', group: 'market-hub', order: 5 },
    { id: 'electronics', name: 'Electronics', icon: '📱', group: 'market-hub', order: 6 },
    { id: 'health-beauty', name: 'Health & Beauty', icon: '💄', group: 'market-hub', order: 7 },
    { id: 'home-living', name: 'Home & Living', icon: '🛋️', group: 'market-hub', order: 8 },
    { id: 'hunting-fishing', name: 'Hunting & Fishing', icon: '🎣', group: 'market-hub', order: 9 },
    { id: 'music-instruments', name: 'Music & Instruments', icon: '🎸', group: 'market-hub', order: 10 },
    { id: 'jewellery-watches', name: 'Jewellery & Watches', icon: '💎', group: 'market-hub', order: 11 },
    { id: 'clothing', name: 'Clothing', icon: '👕', group: 'market-hub', order: 12 },
    { id: 'party-events', name: 'Party & Costume & Events', icon: '🎉', group: 'market-hub', order: 13 },
    { id: 'pets-animals', name: 'Pets & Animals', icon: '🐕', group: 'market-hub', order: 14 },
    { id: 'sports-outdoors', name: 'Sports & Outdoors', icon: '⚽', group: 'market-hub', order: 15 },

    // AUTOMOTIVE
    { id: 'vehicle', name: 'Vehicle', icon: '🚙', group: 'automotive', order: 16, listingType: 'vehicle' },
    { id: 'off-road-bike', name: 'Off-Road Bike', icon: '🏍️', group: 'automotive', order: 17, listingType: 'vehicle' },
    { id: 'motorcycle', name: 'Motorcycle', icon: '🏍️', group: 'automotive', order: 18, listingType: 'vehicle' },
    { id: 'marine', name: 'Marine', icon: '🚤', group: 'automotive', order: 19, listingType: 'vehicle' },
    { id: 'quad-atv', name: 'Quad & ATV', icon: '🏎️', group: 'automotive', order: 20, listingType: 'vehicle' },
    { id: 'auto-other', name: 'Other', icon: '🚗', group: 'automotive', order: 21 },

    // FARMING & MACHINERY
    { id: 'everything-machinery', name: 'Everything Machinery', icon: '⚙️', group: 'farming-machinery', order: 22, listingType: 'vehicle' },
    { id: 'farming', name: 'Farming', icon: '🌾', group: 'farming-machinery', order: 23 },
    { id: 'farm-bikes-vehicles', name: 'Farm Bikes & Vehicles', icon: '🚜', group: 'farming-machinery', order: 24, listingType: 'vehicle' },
    { id: 'farming-other', name: 'Other', icon: '🔩', group: 'farming-machinery', order: 25 },

    // PROPERTY
    { id: 'residential', name: 'Residential', icon: '🏡', group: 'property', order: 26, listingType: 'property' },
    { id: 'rural', name: 'Rural', icon: '🏞️', group: 'property', order: 27, listingType: 'property' },
    { id: 'section', name: 'Section', icon: '📐', group: 'property', order: 28, listingType: 'property' },
    { id: 'farm-land', name: 'Farm Land', icon: '🌻', group: 'property', order: 29, listingType: 'property' },
    { id: 'lifestyle-block', name: 'Life Style Block', icon: '🏕️', group: 'property', order: 30, listingType: 'property' },
    { id: 'apartment', name: 'Apartment', icon: '🏢', group: 'property', order: 31, listingType: 'property' },
    { id: 'room', name: 'Room', icon: '🚪', group: 'property', order: 32, listingType: 'property' },
    { id: 'shed', name: 'Shed', icon: '🏚️', group: 'property', order: 33, listingType: 'property' },
    { id: 'commercial', name: 'Commercial', icon: '🏬', group: 'property', order: 34, listingType: 'property' },
    { id: 'lease', name: 'Lease', icon: '📝', group: 'property', order: 35, listingType: 'property' },
    { id: 'rental', name: 'Rental', icon: '🔑', group: 'property', order: 36, listingType: 'property' },
    { id: 'property-other', name: 'Other', icon: '🏠', group: 'property', order: 37, listingType: 'property' },

    // SERVICES & ADVERTISEMENTS
    { id: 'business-advertising', name: 'Business Advertising', icon: '📣', group: 'services', order: 38 },
    { id: 'services-general', name: 'Services', icon: '🛠️', group: 'services', order: 39 },

    // OCCUPATIONS (Jobs)
    { id: 'job-accounting', name: 'Accounting', icon: '📊', group: 'occupations', order: 40, listingType: 'job' },
    { id: 'job-agriculture', name: 'Agriculture, Forestry', icon: '🌲', group: 'occupations', order: 41, listingType: 'job' },
    { id: 'job-fishing', name: 'Fishing', icon: '🐟', group: 'occupations', order: 42, listingType: 'job' },
    { id: 'job-mechanics', name: 'Mechanics & Automotive', icon: '🔧', group: 'occupations', order: 43, listingType: 'job' },
    { id: 'job-finance', name: 'Finance And Accounting', icon: '💰', group: 'occupations', order: 44, listingType: 'job' },
    { id: 'job-roadworks', name: 'Road Works', icon: '🚧', group: 'occupations', order: 45, listingType: 'job' },
    { id: 'job-construction', name: 'Construction', icon: '👷', group: 'occupations', order: 46, listingType: 'job' },
    { id: 'job-building', name: 'Building', icon: '🏗️', group: 'occupations', order: 47, listingType: 'job' },
    { id: 'job-trades', name: 'Trades & Services', icon: '⚡', group: 'occupations', order: 48, listingType: 'job' },
    { id: 'job-hospitality', name: 'Hospitality', icon: '🍽️', group: 'occupations', order: 49, listingType: 'job' },
    { id: 'job-property', name: 'Property', icon: '🏘️', group: 'occupations', order: 50, listingType: 'job' },
    { id: 'job-other', name: 'Other', icon: '💼', group: 'occupations', order: 51, listingType: 'job' }
];
window.CATEGORIES = CATEGORIES;

const NZ_REGIONS = [
    'Northland', 'Auckland', 'Waikato', 'Bay of Plenty', 'Gisborne',
    'Hawkes Bay', 'Taranaki', 'Manawatu-Whanganui', 'Wellington',
    'Tasman', 'Nelson', 'Marlborough', 'West Coast', 'Canterbury',
    'Otago', 'Southland'
];
window.NZ_REGIONS = NZ_REGIONS;

// Demo credentials
const DEMO_CREDENTIALS = {
    email: 'demo@isqroll.co.nz',
    password: 'demo123'
};
window.DEMO_CREDENTIALS = DEMO_CREDENTIALS;

// ============================================
// COMPREHENSIVE SAMPLE LISTINGS
// ============================================

// MARKET HUB - $1 Reserve
const DOLLAR_RESERVE_LISTINGS = [
    {
        title: 'Vintage Record Collection - $1 Reserve!',
        price: 1,
        saleType: 'auction',
        currentBid: 45,
        category: 'dollar-reserve',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Grey Lynn',
        description: 'Collection of 50+ vinyl records from the 70s and 80s. Mixed genres including rock, jazz, and soul. Some rare pressings included. Starting at just $1!',
        images: ['https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=800'],
        condition: 'Good',
        views: 234,
        featured: true
    },
    {
        title: 'Box of Kitchen Appliances - $1 Start',
        price: 1,
        saleType: 'auction',
        currentBid: 28,
        category: 'dollar-reserve',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Newtown',
        description: 'Clearing out the cupboards! Includes toaster, blender, sandwich press, and more. All working. Great for a flat or bach.',
        images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800'],
        condition: 'Good',
        views: 156,
        featured: false
    },
    {
        title: 'Kids Toys Bundle - $1 Reserve',
        price: 1,
        saleType: 'auction',
        currentBid: 15,
        category: 'dollar-reserve',
        listingType: 'general',
        location: 'Christchurch',
        suburb: 'Riccarton',
        description: 'Large box of kids toys including Lego, Hot Wheels, puzzles and board games. Ages 5-10. Great condition, outgrown.',
        images: ['https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=800'],
        condition: 'Good',
        views: 89,
        featured: false
    }
];

// MARKET HUB - Art, Antiques, Collectables
const ART_ANTIQUES_LISTINGS = [
    {
        title: 'Original NZ Landscape Oil Painting',
        price: 1200,
        category: 'art-antiques',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Te Aro',
        description: 'Beautiful original oil painting of Milford Sound by local artist. Framed, 80cm x 60cm. Signed and dated 2019. Gallery quality.',
        images: ['https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800'],
        condition: 'New',
        views: 312,
        featured: true
    },
    {
        title: 'Antique Kauri Writing Desk c.1920',
        price: 2800,
        category: 'art-antiques',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Ponsonby',
        description: 'Stunning antique New Zealand kauri writing desk. Original brass hardware, leather writing surface. Some wear consistent with age. A beautiful piece of NZ history.',
        images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'],
        condition: 'Good',
        views: 456,
        featured: true
    },
    {
        title: 'Vintage Crown Lynn Swan Collection',
        price: 450,
        category: 'art-antiques',
        listingType: 'general',
        location: 'Hamilton',
        suburb: 'Hamilton East',
        description: 'Set of 3 Crown Lynn swans in graduating sizes. Classic white glaze. No chips or cracks. Iconic NZ collectables.',
        images: ['https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=800'],
        condition: 'Excellent',
        views: 278,
        featured: false
    },
    {
        title: 'Maori Carved Wooden Tiki - 1960s',
        price: 850,
        category: 'art-antiques',
        listingType: 'general',
        location: 'Rotorua',
        suburb: 'Rotorua',
        description: 'Authentic hand-carved wooden tiki from the 1960s. Approximately 30cm tall. Beautiful patina and detail. Provenance documentation available.',
        images: ['https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=800'],
        condition: 'Good',
        views: 189,
        featured: false
    }
];

// MARKET HUB - Automotive Parts
const AUTO_PARTS_LISTINGS = [
    {
        title: 'Toyota Hilux Bull Bar - Chrome',
        price: 450,
        category: 'auto-parts',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Penrose',
        description: 'Chrome bull bar to suit 2015-2020 Toyota Hilux. Includes mounting hardware. Minor scratches but in great condition overall.',
        images: ['https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800'],
        condition: 'Good',
        brand: 'Toyota',
        views: 234,
        featured: false
    },
    {
        title: 'Set of 4 Alloy Wheels 17" - Multi Fit',
        price: 800,
        category: 'auto-parts',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Lower Hutt',
        description: 'Set of 4 aftermarket alloy wheels. 17x7.5, 5x114.3 and 5x100 multi-fit. Good tyres included. Suit many Japanese vehicles.',
        images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'],
        condition: 'Good',
        brand: 'Generic',
        views: 567,
        featured: true
    },
    {
        title: 'Ford Ranger Canopy - Black',
        price: 1800,
        category: 'auto-parts',
        listingType: 'general',
        location: 'Hamilton',
        suburb: 'Te Rapa',
        description: 'Fibreglass canopy to suit Ford Ranger 2016-2022. Black finish, sliding side windows, central locking. Great condition.',
        images: ['https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800'],
        condition: 'Excellent',
        brand: 'Ford',
        views: 345,
        featured: false
    }
];

// MARKET HUB - Books & Magazines
const BOOKS_MAGAZINES_LISTINGS = [
    {
        title: 'Complete Harry Potter Box Set - Hardcover',
        price: 120,
        category: 'books-magazines',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Mt Eden',
        description: 'Complete set of all 7 Harry Potter books in hardcover. Adult editions with elegant covers. Like new condition, read once.',
        images: ['https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800'],
        condition: 'Excellent',
        views: 234,
        featured: true
    },
    {
        title: 'Vintage NZ Listener Collection 1970-1975',
        price: 80,
        category: 'books-magazines',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Karori',
        description: 'Collection of NZ Listener magazines from 1970-1975. Great historical resource. Some wear but all complete and readable.',
        images: ['https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800'],
        condition: 'Good',
        views: 89,
        featured: false
    },
    {
        title: 'Cookbook Collection - 20+ Books',
        price: 60,
        category: 'books-magazines',
        listingType: 'general',
        location: 'Christchurch',
        suburb: 'Merivale',
        description: 'Collection of cookbooks including Edmonds, Alison Holst, and various international cuisines. Take the lot!',
        images: ['https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800'],
        condition: 'Good',
        views: 67,
        featured: false
    }
];

// MARKET HUB - Building & Renovation
const BUILDING_RENOVATION_LISTINGS = [
    {
        title: 'Scaffolding Set - 6m Working Height',
        price: 1200,
        category: 'building-renovation',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Onehunga',
        description: 'Mobile scaffolding set with 6 metre working height. Includes outriggers and safety rails. WorkSafe compliant. Some surface rust but fully functional.',
        images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800'],
        condition: 'Good',
        views: 234,
        featured: true
    },
    {
        title: 'Bathroom Vanity - 900mm White',
        price: 350,
        category: 'building-renovation',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Porirua',
        description: 'New bathroom vanity unit 900mm wide. White gloss finish, soft-close drawers, stone top with undermount basin. Still in packaging.',
        images: ['https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800'],
        condition: 'New',
        views: 456,
        featured: true
    },
    {
        title: 'Kitchen Cabinets - Complete Set',
        price: 2500,
        category: 'building-renovation',
        listingType: 'general',
        location: 'Tauranga',
        suburb: 'Papamoa',
        description: 'Complete kitchen cabinet set from renovation. Includes uppers, lowers, pantry unit. White shaker style. Good condition, removed carefully.',
        images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800'],
        condition: 'Good',
        views: 312,
        featured: false
    },
    {
        title: 'Sliding Door - 2.4m Aluminium',
        price: 800,
        category: 'building-renovation',
        listingType: 'general',
        location: 'Hamilton',
        suburb: 'Flagstaff',
        description: 'Aluminium sliding door 2.4m wide x 2.1m high. Double glazed, black powdercoat. Excellent condition from renovation.',
        images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'],
        condition: 'Excellent',
        views: 189,
        featured: false
    }
];

// MARKET HUB - Electronics
const ELECTRONICS_LISTINGS = [
    {
        title: 'iPhone 15 Pro 256GB - Natural Titanium',
        price: 1650,
        category: 'electronics',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'CBD',
        description: 'iPhone 15 Pro 256GB in Natural Titanium. Battery health 98%. AppleCare+ until March 2025. Includes original box, cable, and Apple leather case.',
        images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800'],
        condition: 'Excellent',
        brand: 'Apple',
        views: 567,
        featured: true
    },
    {
        title: 'Samsung 65" QLED 4K Smart TV',
        price: 1200,
        category: 'electronics',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Johnsonville',
        description: 'Samsung QN65Q80A QLED TV. 65 inch, 4K, smart features. 2 years old, perfect condition. Upgrading to larger size. Wall bracket included.',
        images: ['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800'],
        condition: 'Excellent',
        brand: 'Samsung',
        views: 423,
        featured: true
    },
    {
        title: 'MacBook Pro 14" M3 Pro - 512GB',
        price: 3200,
        category: 'electronics',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Newmarket',
        description: 'MacBook Pro 14 inch with M3 Pro chip. 18GB RAM, 512GB SSD. Space Black. Purchased 6 months ago, barely used. AppleCare+ included.',
        images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800'],
        condition: 'Excellent',
        brand: 'Apple',
        views: 789,
        featured: true
    },
    {
        title: 'Sony PlayStation 5 + Games Bundle',
        price: 750,
        category: 'electronics',
        listingType: 'general',
        location: 'Christchurch',
        suburb: 'Hornby',
        description: 'PS5 disc edition with 2 controllers and 8 games including Spider-Man 2, God of War Ragnarok, and more. All in excellent condition.',
        images: ['https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800'],
        condition: 'Excellent',
        brand: 'Sony',
        views: 345,
        featured: false
    }
];

// MARKET HUB - Health & Beauty
const HEALTH_BEAUTY_LISTINGS = [
    {
        title: 'Dyson Airwrap Complete - Like New',
        price: 550,
        category: 'health-beauty',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Parnell',
        description: 'Dyson Airwrap Complete with all attachments. Used only a handful of times. Includes case and all original accessories. RRP $899.',
        images: ['https://images.unsplash.com/photo-1522338242042-2d1c40f02aec?w=800'],
        condition: 'Excellent',
        brand: 'Dyson',
        views: 456,
        featured: true
    },
    {
        title: 'Premium Skincare Bundle - Various Brands',
        price: 180,
        category: 'health-beauty',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Kelburn',
        description: 'Collection of high-end skincare. Includes The Ordinary, CeraVe, and Paula\'s Choice products. All new or barely used. Moving overseas.',
        images: ['https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800'],
        condition: 'New',
        views: 234,
        featured: false
    },
    {
        title: 'Massage Table - Professional Grade',
        price: 350,
        category: 'health-beauty',
        listingType: 'general',
        location: 'Hamilton',
        suburb: 'Hamilton Central',
        description: 'Professional massage table with adjustable height. Includes face cradle and carry bag. Aluminium frame, very lightweight. Perfect for mobile therapists.',
        images: ['https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800'],
        condition: 'Good',
        views: 123,
        featured: false
    }
];

// MARKET HUB - Home & Living
const HOME_LIVING_LISTINGS = [
    {
        title: 'Leather 3-Seater Sofa - Tan',
        price: 1800,
        category: 'home-living',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Remuera',
        description: 'Beautiful tan leather sofa from Freedom Furniture. 3 years old, excellent condition. Minor patina adding to character. Very comfortable.',
        images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'],
        condition: 'Excellent',
        brand: 'Freedom',
        views: 567,
        featured: true
    },
    {
        title: 'Dining Table & 6 Chairs - Solid Oak',
        price: 1500,
        category: 'home-living',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Karori',
        description: 'Solid oak dining table 180cm x 90cm with 6 matching chairs. Modern farmhouse style. Excellent condition, minor surface marks.',
        images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800'],
        condition: 'Excellent',
        views: 423,
        featured: true
    },
    {
        title: 'Breville Barista Express Coffee Machine',
        price: 599,
        category: 'home-living',
        listingType: 'general',
        location: 'Christchurch',
        suburb: 'Merivale',
        description: 'Breville Barista Express. Makes excellent coffee! Includes all accessories and instruction manual. Selling due to upgrade.',
        images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800'],
        condition: 'Excellent',
        brand: 'Breville',
        views: 312,
        featured: false
    },
    {
        title: 'Weber Q2200 BBQ with Stand',
        price: 450,
        category: 'home-living',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Albany',
        description: 'Weber Q2200 BBQ with permanent cart. Excellent condition. Cast iron cooking grates. Cover included. Gas bottle not included.',
        images: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
        condition: 'Excellent',
        brand: 'Weber',
        views: 198,
        featured: false
    }
];

// MARKET HUB - Hunting & Fishing
const HUNTING_FISHING_LISTINGS = [
    {
        title: 'Shimano Spinning Combo - Stradic/Terez',
        price: 650,
        category: 'hunting-fishing',
        listingType: 'general',
        location: 'Tauranga',
        suburb: 'Mt Maunganui',
        description: 'Shimano Stradic 5000 FL reel paired with Terez 7ft medium-heavy rod. Perfect saltwater combo for kingfish and snapper. Excellent condition.',
        images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'],
        condition: 'Excellent',
        brand: 'Shimano',
        views: 345,
        featured: true
    },
    {
        title: 'Hunting Pack - Complete Setup',
        price: 800,
        category: 'hunting-fishing',
        listingType: 'general',
        location: 'Queenstown',
        suburb: 'Frankton',
        description: 'Complete hunting pack setup. Includes Alps Outdoorz pack, Sitka camo jacket and pants (size L), binos, and rangefinder. Moving overseas.',
        images: ['https://images.unsplash.com/photo-1541091567827-fe29c3387947?w=800'],
        condition: 'Good',
        views: 234,
        featured: true
    },
    {
        title: 'Kayak - 3.5m Fishing Setup',
        price: 1200,
        category: 'hunting-fishing',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Half Moon Bay',
        description: 'Viking Profish 400 fishing kayak. Includes seat, paddle, rod holders, and fish finder mount. Very stable platform. Great for harbours and estuaries.',
        images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'],
        condition: 'Good',
        views: 456,
        featured: false
    }
];

// MARKET HUB - Music & Instruments
const MUSIC_INSTRUMENTS_LISTINGS = [
    {
        title: 'Fender Stratocaster MIM - Sunburst',
        price: 950,
        category: 'music-instruments',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Grey Lynn',
        description: 'Fender Player Stratocaster made in Mexico. 3-tone sunburst with maple neck. Excellent condition, plays beautifully. Includes gig bag.',
        images: ['https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=800'],
        condition: 'Excellent',
        brand: 'Fender',
        views: 345,
        featured: true
    },
    {
        title: 'Roland Digital Piano - HP603',
        price: 1800,
        category: 'music-instruments',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Thorndon',
        description: 'Roland HP603 digital piano in rosewood finish. SuperNATURAL piano sound, PHA-50 keyboard. Perfect for serious players. Includes matching bench.',
        images: ['https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800'],
        condition: 'Excellent',
        brand: 'Roland',
        views: 234,
        featured: true
    },
    {
        title: 'Pearl Export Drum Kit - Complete',
        price: 1100,
        category: 'music-instruments',
        listingType: 'general',
        location: 'Christchurch',
        suburb: 'Addington',
        description: '5-piece Pearl Export drum kit with hardware and Sabian B8 cymbals. Jet Black finish. Some wear but plays great. Perfect for intermediate players.',
        images: ['https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800'],
        condition: 'Good',
        brand: 'Pearl',
        views: 189,
        featured: false
    }
];

// MARKET HUB - Jewellery & Watches
const JEWELLERY_WATCHES_LISTINGS = [
    {
        title: 'Seiko Presage Cocktail Time - Blue Moon',
        price: 650,
        category: 'jewellery-watches',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Newmarket',
        description: 'Seiko Presage SRPB41J1 "Blue Moon". Beautiful sunburst blue dial. Automatic movement. Full set with box and papers. Barely worn.',
        images: ['https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800'],
        condition: 'Excellent',
        brand: 'Seiko',
        views: 345,
        featured: true
    },
    {
        title: 'NZ Greenstone Pendant - Sterling Silver',
        price: 180,
        category: 'jewellery-watches',
        listingType: 'general',
        location: 'Hokitika',
        suburb: 'Hokitika',
        description: 'Authentic NZ pounamu (greenstone) pendant on sterling silver chain. Hand carved locally. Beautiful deep green colour with natural patterns.',
        images: ['https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800'],
        condition: 'New',
        views: 234,
        featured: false
    },
    {
        title: 'Diamond Engagement Ring - 0.75ct',
        price: 3500,
        category: 'jewellery-watches',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'CBD',
        description: '18ct white gold engagement ring with 0.75ct round brilliant diamond. VS1 clarity, G colour. Includes valuation certificate. Size M.',
        images: ['https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800'],
        condition: 'Excellent',
        views: 567,
        featured: true
    }
];

// MARKET HUB - Clothing
const CLOTHING_LISTINGS = [
    {
        title: 'Canada Goose Expedition Parka - Size L',
        price: 950,
        category: 'clothing',
        listingType: 'general',
        location: 'Queenstown',
        suburb: 'Queenstown',
        description: 'Genuine Canada Goose Expedition Parka in black. Size Large. Worn one winter season. In excellent condition. RRP $1800+.',
        images: ['https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800'],
        condition: 'Excellent',
        brand: 'Canada Goose',
        views: 456,
        featured: true
    },
    {
        title: 'Designer Dress Bundle - Size 10-12',
        price: 200,
        category: 'clothing',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Ponsonby',
        description: '5 designer dresses from Karen Walker, Twenty-Seven Names, and Ruby. Size 10-12. All in excellent condition. Perfect for summer events.',
        images: ['https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=800'],
        condition: 'Excellent',
        views: 312,
        featured: false
    },
    {
        title: 'Swanndri Ranger Shirt - New with Tags',
        price: 85,
        category: 'clothing',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Petone',
        description: 'Classic Swanndri Ranger wool shirt, size XL. Navy and black check. Brand new with tags, wrong size gift. RRP $189.',
        images: ['https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800'],
        condition: 'New',
        brand: 'Swanndri',
        views: 189,
        featured: false
    }
];

// MARKET HUB - Party & Events
const PARTY_EVENTS_LISTINGS = [
    {
        title: 'Wedding Decorations Bundle - Rustic Theme',
        price: 350,
        category: 'party-events',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Takapuna',
        description: 'Complete rustic wedding decoration set. Includes hessian runners, mason jars, fairy lights, wooden signs, and more. Used once.',
        images: ['https://images.unsplash.com/photo-1519741497674-611481863552?w=800'],
        condition: 'Excellent',
        views: 234,
        featured: true
    },
    {
        title: 'DJ Equipment Package - Beginner/Intermediate',
        price: 800,
        category: 'party-events',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Newtown',
        description: 'Pioneer DDJ-400 controller, pair of Alto speakers, and microphone. Everything you need to DJ parties. Great condition.',
        images: ['https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800'],
        condition: 'Good',
        brand: 'Pioneer',
        views: 345,
        featured: true
    },
    {
        title: 'Halloween Costume Collection - Various',
        price: 150,
        category: 'party-events',
        listingType: 'general',
        location: 'Christchurch',
        suburb: 'Ilam',
        description: 'Collection of adult Halloween costumes. Includes vampire, zombie, witch, and superhero outfits. Most size M/L. Take the lot!',
        images: ['https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=800'],
        condition: 'Good',
        views: 167,
        featured: false
    }
];

// MARKET HUB - Pets & Animals
const PETS_ANIMALS_LISTINGS = [
    {
        title: 'Large Dog Crate - Airline Approved',
        price: 180,
        category: 'pets-animals',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Henderson',
        description: 'Large plastic dog crate suitable for dogs up to 40kg. IATA airline approved. Used once for international move. Excellent condition.',
        images: ['https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800'],
        condition: 'Excellent',
        views: 234,
        featured: false
    },
    {
        title: 'Aquarium Setup - 200L Complete',
        price: 450,
        category: 'pets-animals',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Island Bay',
        description: 'Complete 200L aquarium setup. Includes tank, stand, filter, heater, LED lights, and accessories. No fish. Moving house.',
        images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'],
        condition: 'Good',
        views: 189,
        featured: true
    },
    {
        title: 'Horse Saddle - Wintec 500 All Purpose',
        price: 650,
        category: 'pets-animals',
        listingType: 'general',
        location: 'Cambridge',
        suburb: 'Cambridge',
        description: 'Wintec 500 all-purpose saddle with CAIR panels. 17.5 inch seat, medium-wide tree. Well-maintained, comfortable saddle.',
        images: ['https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=800'],
        condition: 'Good',
        brand: 'Wintec',
        views: 156,
        featured: false
    }
];

// MARKET HUB - Sports & Outdoors
const SPORTS_OUTDOORS_LISTINGS = [
    {
        title: 'Mountain Bike - Giant Talon 29er',
        price: 850,
        category: 'sports-outdoors',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Karori',
        description: 'Giant Talon 2 hardtail mountain bike. 29" wheels, size Large. 2x9 drivetrain, hydraulic disc brakes. Well maintained, rides great.',
        images: ['https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800'],
        condition: 'Good',
        brand: 'Giant',
        views: 456,
        featured: true
    },
    {
        title: 'Camping Gear Bundle - 4 Person',
        price: 400,
        category: 'sports-outdoors',
        listingType: 'general',
        location: 'Christchurch',
        suburb: 'Cashmere',
        description: '4-person tent (Macpac), 2 sleeping bags, 2 roll mats, camp stove, and cooking set. Everything you need to start camping!',
        images: ['https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800'],
        condition: 'Good',
        views: 312,
        featured: true
    },
    {
        title: 'Golf Clubs - Callaway Complete Set',
        price: 600,
        category: 'sports-outdoors',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Howick',
        description: 'Callaway Strata complete golf set. Driver, 3-wood, 5-hybrid, 6-PW irons, putter, and bag. Right-handed. Ideal for beginners.',
        images: ['https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800'],
        condition: 'Good',
        brand: 'Callaway',
        views: 234,
        featured: false
    },
    {
        title: 'Surfboard - 6\'2" Shortboard',
        price: 380,
        category: 'sports-outdoors',
        listingType: 'general',
        location: 'Raglan',
        suburb: 'Raglan',
        description: 'JS Industries 6\'2" shortboard. Thruster setup, FCS II fins included. Some minor dings repaired. Great intermediate board.',
        images: ['https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800'],
        condition: 'Good',
        brand: 'JS Industries',
        views: 278,
        featured: false
    }
];

// ============================================
// AUTOMOTIVE LISTINGS
// ============================================

const VEHICLE_LISTINGS = [
    {
        title: '2019 Great Wall Steed 4x2',
        price: 13995,
        category: 'vehicle',
        listingType: 'vehicle',
        location: 'Whanganui',
        suburb: 'Whanganui',
        description: 'Great Wall Steed in excellent condition. Well maintained with full service history. Perfect for work or lifestyle use. NZ new vehicle.',
        images: ['https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800'],
        make: 'GREAT WALL',
        model: 'Steed',
        bodyType: 'Ute',
        doors: 5,
        previousOwners: 'NZ New',
        year: 2019,
        odometer: 69604,
        colour: 'White',
        condition: 'Used',
        engineCC: 2378,
        fuelType: 'Petrol',
        transmission: 'Manual',
        wofExpiry: '05/02/2026',
        regoExpiry: '15/03/2026',
        stolenCheck: 'Passed',
        damageCheck: 'Passed',
        views: 234,
        featured: true
    },
    {
        title: '2022 Mazda CX-5 GSX AWD',
        price: 42990,
        category: 'vehicle',
        listingType: 'vehicle',
        location: 'Auckland',
        suburb: 'Penrose',
        description: 'Low km Mazda CX-5 GSX in Soul Red. One owner, full dealer service history. Leather interior, heated seats, Apple CarPlay. Balance of factory warranty.',
        images: ['https://images.unsplash.com/photo-1606611013016-969c19ba27bb?w=800'],
        make: 'MAZDA',
        model: 'CX-5 GSX',
        bodyType: 'SUV',
        doors: 5,
        previousOwners: '1',
        year: 2022,
        odometer: 28500,
        colour: 'Soul Red',
        condition: 'Used',
        engineCC: 2488,
        fuelType: 'Petrol',
        transmission: 'Automatic',
        wofExpiry: '22/09/2026',
        stolenCheck: 'Passed',
        damageCheck: 'Passed',
        views: 567,
        featured: true
    },
    {
        title: '2018 Ford Ranger Wildtrak',
        price: 52995,
        category: 'vehicle',
        listingType: 'vehicle',
        location: 'Hamilton',
        suburb: 'Te Rapa',
        description: 'Ford Ranger Wildtrak 3.2L Turbo Diesel. Canopy, towbar, sports bar. One owner, full Ford service history. Ready for work or play.',
        images: ['https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800'],
        make: 'FORD',
        model: 'Ranger Wildtrak',
        bodyType: 'Ute',
        doors: 4,
        previousOwners: '1',
        year: 2018,
        odometer: 89000,
        colour: 'Shadow Black',
        condition: 'Used',
        engineCC: 3198,
        fuelType: 'Diesel',
        transmission: 'Automatic',
        wofExpiry: '18/04/2026',
        stolenCheck: 'Passed',
        damageCheck: 'Passed',
        views: 892,
        featured: false
    },
    {
        title: '2021 Tesla Model 3 Long Range',
        price: 58990,
        category: 'vehicle',
        listingType: 'vehicle',
        location: 'Auckland',
        suburb: 'Albany',
        description: 'Tesla Model 3 Long Range in Pearl White. Full Self-Driving capability. 20" wheels, premium interior. One owner, low km. Home charger included.',
        images: ['https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800'],
        make: 'TESLA',
        model: 'Model 3 Long Range',
        bodyType: 'Sedan',
        doors: 4,
        previousOwners: '1',
        year: 2021,
        odometer: 35000,
        colour: 'Pearl White',
        condition: 'Used',
        fuelType: 'Electric',
        transmission: 'Automatic',
        stolenCheck: 'Passed',
        damageCheck: 'Passed',
        views: 1234,
        featured: true
    }
];

const MOTORCYCLE_LISTINGS = [
    {
        title: '2020 Kawasaki Z900 - Low KMs',
        price: 12500,
        category: 'motorcycle',
        listingType: 'vehicle',
        location: 'Auckland',
        suburb: 'Onehunga',
        description: 'Kawasaki Z900 in candy lime green. Only 8,500km. Akrapovic exhaust, frame sliders. Always garaged. First to see will buy.',
        images: ['https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800'],
        make: 'KAWASAKI',
        model: 'Z900',
        year: 2020,
        odometer: 8500,
        colour: 'Candy Lime Green',
        condition: 'Used',
        engineCC: 948,
        transmission: 'Manual',
        views: 456,
        featured: true
    },
    {
        title: '2019 Harley-Davidson Iron 883',
        price: 14995,
        category: 'motorcycle',
        listingType: 'vehicle',
        location: 'Wellington',
        suburb: 'Petone',
        description: 'Classic Harley Iron 883 in black denim. Solo seat, drag bars, forward controls. 12,000km. Well maintained, sounds amazing.',
        images: ['https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=800'],
        make: 'HARLEY-DAVIDSON',
        model: 'Iron 883',
        year: 2019,
        odometer: 12000,
        colour: 'Black Denim',
        condition: 'Used',
        engineCC: 883,
        transmission: 'Manual',
        views: 345,
        featured: true
    },
    {
        title: '2022 Honda CB500F - LAMS Approved',
        price: 8995,
        category: 'motorcycle',
        listingType: 'vehicle',
        location: 'Christchurch',
        suburb: 'Papanui',
        description: 'Perfect LAMS bike for learners. Honda reliability, economical, and easy to ride. Only 5,000km. Includes Oxford panniers.',
        images: ['https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800'],
        make: 'HONDA',
        model: 'CB500F',
        year: 2022,
        odometer: 5000,
        colour: 'Grand Prix Red',
        condition: 'Used',
        engineCC: 471,
        transmission: 'Manual',
        views: 234,
        featured: false
    }
];

const OFF_ROAD_BIKE_LISTINGS = [
    {
        title: '2021 KTM 350 EXC-F Six Days',
        price: 15500,
        category: 'off-road-bike',
        listingType: 'vehicle',
        location: 'Queenstown',
        suburb: 'Frankton',
        description: 'KTM 350 EXC-F Six Days edition. Low hours, well maintained. FMF exhaust, handguards, skid plate. Ready to ride.',
        images: ['https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800'],
        make: 'KTM',
        model: '350 EXC-F Six Days',
        year: 2021,
        colour: 'Orange',
        condition: 'Used',
        engineCC: 350,
        transmission: 'Manual',
        views: 345,
        featured: true
    },
    {
        title: '2020 Yamaha YZ250F - Race Ready',
        price: 8500,
        category: 'off-road-bike',
        listingType: 'vehicle',
        location: 'Taupo',
        suburb: 'Taupo',
        description: 'Yamaha YZ250F motocross bike. Full Pro Circuit exhaust, suspension serviced. Approximately 80 hours. Great condition.',
        images: ['https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800'],
        make: 'YAMAHA',
        model: 'YZ250F',
        year: 2020,
        colour: 'Blue',
        condition: 'Used',
        engineCC: 250,
        transmission: 'Manual',
        views: 234,
        featured: false
    }
];

const MARINE_LISTINGS = [
    {
        title: 'Stabicraft 1850 Supercab - Yamaha 115hp',
        price: 75000,
        category: 'marine',
        listingType: 'vehicle',
        location: 'Tauranga',
        suburb: 'Mt Maunganui',
        description: 'Stabicraft 1850 Supercab with Yamaha 115hp 4-stroke. Lowrance HDS-9, VHF radio, live bait tank. On tandem trailer. Perfect fishing boat.',
        images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'],
        make: 'STABICRAFT',
        model: '1850 Supercab',
        year: 2019,
        colour: 'White',
        condition: 'Used',
        views: 567,
        featured: true
    },
    {
        title: 'Sea-Doo Spark Trixx - 90hp',
        price: 12500,
        category: 'marine',
        listingType: 'vehicle',
        location: 'Auckland',
        suburb: 'Half Moon Bay',
        description: 'Sea-Doo Spark Trixx jet ski. 90hp, 2-up seat. Only 50 hours. Includes trailer and cover. Great fun on the water!',
        images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'],
        make: 'SEA-DOO',
        model: 'Spark Trixx',
        year: 2021,
        colour: 'Mango',
        condition: 'Used',
        views: 345,
        featured: true
    },
    {
        title: 'Haines Hunter 565R - Mercury 150hp',
        price: 55000,
        category: 'marine',
        listingType: 'vehicle',
        location: 'Wellington',
        suburb: 'Porirua',
        description: 'Classic Haines Hunter 565R with Mercury 150hp 2-stroke. Solid reliable boat, well maintained. Lowrance GPS, VHF. Ready for summer.',
        images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'],
        make: 'HAINES HUNTER',
        model: '565R',
        year: 2010,
        colour: 'White',
        condition: 'Good',
        views: 234,
        featured: false
    }
];

const QUAD_ATV_LISTINGS = [
    {
        title: 'Polaris Sportsman 570 EPS - Low Hours',
        price: 12500,
        category: 'quad-atv',
        listingType: 'vehicle',
        location: 'Waikato',
        suburb: 'Morrinsville',
        description: 'Polaris Sportsman 570 with EPS power steering. Only 200 hours. Winch, bullbars, and tow hitch. Perfect farm bike.',
        images: ['https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800'],
        make: 'POLARIS',
        model: 'Sportsman 570 EPS',
        year: 2020,
        colour: 'Sage Green',
        condition: 'Used',
        views: 345,
        featured: true
    },
    {
        title: 'Honda TRX420 FourTrax',
        price: 8500,
        category: 'quad-atv',
        listingType: 'vehicle',
        location: 'Southland',
        suburb: 'Invercargill',
        description: 'Reliable Honda TRX420 farm quad. Auto transmission, 4WD. Regularly serviced. Some cosmetic wear but runs perfectly.',
        images: ['https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800'],
        make: 'HONDA',
        model: 'TRX420 FourTrax',
        year: 2018,
        colour: 'Red',
        condition: 'Good',
        views: 234,
        featured: false
    }
];

// ============================================
// FARMING & MACHINERY LISTINGS
// ============================================

const MACHINERY_LISTINGS = [
    {
        title: 'TH TH554-D Tractor 4WD 2019',
        price: 12500,
        category: 'everything-machinery',
        listingType: 'vehicle',
        location: 'Napier',
        suburb: 'Napier South',
        description: 'This Diesel tractor was imported directly from China. 55Hp Diesel engine and 4 Wheel Drive. Has Hydraulics and a PTO. Trade in considered.',
        images: ['https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800'],
        make: 'TH',
        model: 'TH554-D',
        bodyType: 'Tractor 4WD',
        year: 2019,
        colour: 'Blue',
        condition: 'Used',
        transmission: 'Manual',
        stolenCheck: 'Passed',
        damageCheck: 'Passed',
        views: 345,
        featured: true
    },
    {
        title: 'Kubota L3800 Compact Tractor',
        price: 28000,
        category: 'everything-machinery',
        listingType: 'vehicle',
        location: 'Canterbury',
        suburb: 'Ashburton',
        description: 'Kubota L3800 compact tractor with loader. 38hp, 4WD, hydrostatic transmission. Only 850 hours. Perfect lifestyle block tractor.',
        images: ['https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800'],
        make: 'KUBOTA',
        model: 'L3800',
        year: 2017,
        colour: 'Orange',
        condition: 'Excellent',
        views: 456,
        featured: true
    },
    {
        title: 'Husqvarna Ride-On Mower 42"',
        price: 4500,
        category: 'everything-machinery',
        listingType: 'general',
        location: 'Hawkes Bay',
        suburb: 'Hastings',
        description: 'Husqvarna ride-on mower. 42" cut, hydrostatic drive. 200 hours. Serviced annually. Perfect for lifestyle block or large lawn.',
        images: ['https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=800'],
        condition: 'Excellent',
        brand: 'Husqvarna',
        views: 312,
        featured: false
    }
];

const FARMING_LISTINGS = [
    {
        title: 'Stihl MS 251 Chainsaw',
        price: 650,
        category: 'farming',
        listingType: 'general',
        location: 'Rotorua',
        suburb: 'Rotorua',
        description: 'Stihl MS 251 chainsaw. 18" bar. Low hours, well maintained. Starts first pull. Great for firewood or property maintenance.',
        images: ['https://images.unsplash.com/photo-1611068120813-eca5a8cbf793?w=800'],
        condition: 'Good',
        brand: 'Stihl',
        views: 234,
        featured: false
    },
    {
        title: 'Electric Fence Unit - Gallagher M600',
        price: 450,
        category: 'farming',
        listingType: 'general',
        location: 'Waikato',
        suburb: 'Te Awamutu',
        description: 'Gallagher M600 mains powered fence energiser. Powers up to 60km of fence. Perfect working order.',
        images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
        condition: 'Good',
        brand: 'Gallagher',
        views: 156,
        featured: false
    },
    {
        title: 'Post Driver - Hydraulic',
        price: 2200,
        category: 'farming',
        listingType: 'general',
        location: 'Taranaki',
        suburb: 'Stratford',
        description: 'Hydraulic post driver for tractor 3-point linkage. Suits posts up to 150mm. Good working condition.',
        images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
        condition: 'Good',
        views: 189,
        featured: true
    }
];

const FARM_BIKES_LISTINGS = [
    {
        title: 'Honda XR250 Farm Bike',
        price: 3500,
        category: 'farm-bikes-vehicles',
        listingType: 'vehicle',
        location: 'Southland',
        suburb: 'Gore',
        description: 'Reliable Honda XR250 farm bike. Electric start, good tyres. Used daily, well maintained. Ideal farm run-about.',
        images: ['https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800'],
        make: 'HONDA',
        model: 'XR250',
        year: 2015,
        colour: 'Red',
        condition: 'Good',
        views: 234,
        featured: false
    },
    {
        title: 'Suzuki DR200 AG Bike',
        price: 4200,
        category: 'farm-bikes-vehicles',
        listingType: 'vehicle',
        location: 'Canterbury',
        suburb: 'Timaru',
        description: 'Suzuki DR200 agricultural spec. Low seat height, great for farm work. Carry racks front and rear. Recently serviced.',
        images: ['https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800'],
        make: 'SUZUKI',
        model: 'DR200',
        year: 2019,
        colour: 'White',
        condition: 'Good',
        views: 156,
        featured: true
    }
];

// ============================================
// PROPERTY LISTINGS
// ============================================

const PROPERTY_LISTINGS = [
    {
        title: 'Old Soul, New Heart - Character Home',
        price: null,
        priceDisplay: 'Price by Negotiation',
        category: 'residential',
        listingType: 'property',
        location: 'Whanganui',
        suburb: 'Whanganui Central',
        description: 'On a flat section in a quiet street sits this Kiwi classic, an early 1900s home that blends timeless character with modern-day upgrades. Three generous double bedrooms and spacious living with original features.',
        images: ['https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800'],
        bedrooms: 3,
        bathrooms: 1,
        livingAreas: 1,
        garageParking: true,
        propertyType: 'House',
        agentName: 'Shannon Jury',
        agentCompany: 'Harcourts Whanganui',
        views: 541,
        featured: true
    },
    {
        title: 'Modern Family Home - 4 Bed 2 Bath',
        price: 679000,
        category: 'residential',
        listingType: 'property',
        location: 'Palmerston North',
        suburb: 'Hokowhitu',
        description: 'Spacious modern family home in sought-after Hokowhitu. Open plan living flows to sunny north-facing deck. Master with ensuite and walk-in robe. Double garage with internal access.',
        images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
        bedrooms: 4,
        bathrooms: 2,
        livingAreas: 2,
        garageParking: true,
        offStreetParking: true,
        landArea: 650,
        floorArea: 185,
        propertyType: 'House',
        agentName: 'Sarah Mitchell',
        agentCompany: 'Ray White Manawatu',
        views: 892,
        featured: true
    },
    {
        title: 'First Home Opportunity - Renovated Bungalow',
        price: 485000,
        category: 'residential',
        listingType: 'property',
        location: 'Christchurch',
        suburb: 'Hornby',
        description: 'Recently renovated 3 bedroom bungalow. New kitchen and bathroom, insulated and double glazed. Heat pump. Large section with garage. Perfect first home!',
        images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
        bedrooms: 3,
        bathrooms: 1,
        livingAreas: 1,
        garageParking: true,
        landArea: 800,
        floorArea: 110,
        propertyType: 'House',
        agentName: 'James Wilson',
        agentCompany: 'Harcourts Christchurch',
        views: 567,
        featured: false
    },
    {
        title: 'Lifestyle Block - 4.5 Hectares',
        price: 895000,
        category: 'lifestyle-block',
        listingType: 'property',
        location: 'Waikato',
        suburb: 'Te Awamutu',
        description: '4.5 hectares of flat to rolling land with established 3 bedroom home. Large shed with power. Excellent water supply. Currently running sheep and cattle.',
        images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
        bedrooms: 3,
        bathrooms: 1,
        livingAreas: 1,
        garageParking: true,
        landArea: 45000,
        propertyType: 'Lifestyle',
        agentName: 'Mike Thompson',
        agentCompany: 'PGG Wrightson Real Estate',
        views: 456,
        featured: true
    },
    {
        title: 'Investment Apartment - CBD Location',
        price: 385000,
        category: 'apartment',
        listingType: 'property',
        location: 'Wellington',
        suburb: 'Te Aro',
        description: '2 bedroom apartment in the heart of Wellington CBD. Currently tenanted at $550/week. Building has earthquake strengthening completed.',
        images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
        bedrooms: 2,
        bathrooms: 1,
        livingAreas: 1,
        floorArea: 68,
        propertyType: 'Apartment',
        agentName: 'James Chen',
        agentCompany: 'Tommy\'s Real Estate',
        views: 234,
        featured: false
    },
    {
        title: 'Rural Section - Ready to Build',
        price: 245000,
        category: 'section',
        listingType: 'property',
        location: 'Manawatu-Whanganui',
        suburb: 'Marton',
        description: '2500sqm flat section with rural outlook. Power and water at boundary. Building platform in place. 15 mins to Whanganui.',
        images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
        landArea: 2500,
        propertyType: 'Section',
        agentName: 'Rachel Brown',
        agentCompany: 'Bayleys',
        views: 178,
        featured: false
    },
    {
        title: 'Room for Rent - Sunny Flat',
        price: 220,
        priceDisplay: '$220/week',
        category: 'room',
        listingType: 'property',
        location: 'Auckland',
        suburb: 'Mt Eden',
        description: 'Large sunny room in shared house. Fully furnished. Fibre internet included. 2 other professional flatmates. Close to train station.',
        images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800'],
        bedrooms: 1,
        propertyType: 'Room',
        agentName: 'Direct from Owner',
        views: 89,
        featured: false
    },
    {
        title: 'Commercial Warehouse - 500sqm',
        price: null,
        priceDisplay: '$2,500/month + GST',
        category: 'commercial',
        listingType: 'property',
        location: 'Auckland',
        suburb: 'Onehunga',
        description: 'Industrial warehouse space 500sqm. High stud, roller door access. Small office and bathroom. Three-phase power. Lease terms negotiable.',
        images: ['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800'],
        floorArea: 500,
        propertyType: 'Commercial',
        agentName: 'Commercial Realty NZ',
        views: 234,
        featured: true
    },
    {
        title: 'Farm Land - 50 Hectares',
        price: 1200000,
        category: 'farm-land',
        listingType: 'property',
        location: 'Southland',
        suburb: 'Gore',
        description: '50 hectares of productive farm land. Currently dairy support. Good fencing and water supply. Some bush area. Subdivision potential.',
        images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
        landArea: 500000,
        propertyType: 'Farm',
        agentName: 'Rural Property Specialists',
        views: 345,
        featured: true
    },
    {
        title: '3 Bed Family Home - Long Term Rental',
        price: 550,
        priceDisplay: '$550/week',
        category: 'rental',
        listingType: 'property',
        location: 'Hamilton',
        suburb: 'Dinsdale',
        description: '3 bedroom family home available for long term rental. Heat pump, insulated. Single garage. Pets negotiable. References required.',
        images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
        bedrooms: 3,
        bathrooms: 1,
        garageParking: true,
        propertyType: 'Rental',
        agentName: 'Property Management Plus',
        views: 456,
        featured: false
    }
];

// ============================================
// SERVICES LISTINGS
// ============================================

const SERVICES_LISTINGS = [
    {
        title: 'Professional House Painting - Free Quotes',
        price: null,
        priceDisplay: 'Free Quote',
        category: 'services-general',
        listingType: 'service',
        location: 'Auckland',
        suburb: 'Auckland Wide',
        description: 'Experienced house painters offering interior and exterior painting services. Quality workmanship guaranteed. References available. Free no-obligation quotes.',
        images: ['https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800'],
        views: 234,
        featured: true
    },
    {
        title: 'Mobile Mechanic - We Come to You',
        price: 85,
        priceDisplay: '$85/hour',
        category: 'services-general',
        listingType: 'service',
        location: 'Wellington',
        suburb: 'Wellington Wide',
        description: 'Qualified mechanic offering mobile repair services. Servicing, WOF repairs, breakdowns. Competitive rates. Evening and weekend appointments available.',
        images: ['https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800'],
        views: 345,
        featured: true
    },
    {
        title: 'Garden Maintenance & Landscaping',
        price: 50,
        priceDisplay: 'From $50/hour',
        category: 'services-general',
        listingType: 'service',
        location: 'Christchurch',
        suburb: 'Christchurch Wide',
        description: 'Complete garden services including mowing, pruning, planting, and landscaping. Regular maintenance contracts or one-off jobs. Rubbish removal included.',
        images: ['https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800'],
        views: 189,
        featured: false
    },
    {
        title: 'Local Cafe For Sale - Established Business',
        price: 150000,
        priceDisplay: '$150,000 + SAV',
        category: 'business-advertising',
        listingType: 'service',
        location: 'Hamilton',
        suburb: 'Hamilton Central',
        description: 'Popular cafe in prime location. Established 5 years with loyal customer base. Full commercial kitchen. Current turnover $400k p.a. Training provided.',
        images: ['https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800'],
        views: 456,
        featured: true
    },
    {
        title: 'Online Store for Sale - E-commerce Business',
        price: 75000,
        category: 'business-advertising',
        listingType: 'service',
        location: 'Nationwide',
        suburb: 'Remote',
        description: 'Profitable online store selling outdoor gear. Shopify platform, automated fulfilment. Avg monthly revenue $15k. Full supplier relationships included.',
        images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800'],
        views: 312,
        featured: false
    }
];

// ============================================
// JOB LISTINGS
// ============================================

const JOB_LISTINGS = [
    {
        title: 'Farm Manager - Dairy Farm',
        price: null,
        priceDisplay: '$75,000 - $85,000 + House',
        category: 'job-agriculture',
        listingType: 'job',
        location: 'Waikato',
        suburb: 'Matamata',
        description: 'Experienced dairy farm manager wanted for 500-cow operation. Modern facilities. 3-bedroom house provided. Must have proven track record.',
        images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
        views: 234,
        featured: true
    },
    {
        title: 'Qualified Mechanic - Busy Workshop',
        price: null,
        priceDisplay: '$30 - $38/hour',
        category: 'job-mechanics',
        listingType: 'job',
        location: 'Auckland',
        suburb: 'Penrose',
        description: 'Qualified automotive mechanic needed for busy workshop. WOF certification preferred. Modern equipment, great team environment. Tool allowance provided.',
        images: ['https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800'],
        views: 345,
        featured: true
    },
    {
        title: 'Registered Electrician',
        price: null,
        priceDisplay: '$35 - $45/hour',
        category: 'job-trades',
        listingType: 'job',
        location: 'Wellington',
        suburb: 'Wellington Wide',
        description: 'Registered electrician wanted for domestic and commercial work. Company vehicle provided. Overtime available. Great working conditions.',
        images: ['https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800'],
        views: 278,
        featured: true
    },
    {
        title: 'Accountant - CA Qualified',
        price: null,
        priceDisplay: '$80,000 - $95,000',
        category: 'job-accounting',
        listingType: 'job',
        location: 'Auckland',
        suburb: 'CBD',
        description: 'Growing accounting firm seeking CA qualified accountant. Mix of business and personal clients. Flexible working arrangements. Career progression opportunities.',
        images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800'],
        views: 189,
        featured: false
    },
    {
        title: 'Chef de Partie - Fine Dining',
        price: null,
        priceDisplay: '$28 - $35/hour',
        category: 'job-hospitality',
        listingType: 'job',
        location: 'Queenstown',
        suburb: 'Queenstown',
        description: 'Chef de Partie required for award-winning restaurant. Minimum 3 years experience. Creative menu input. Staff meals and ski pass included.',
        images: ['https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800'],
        views: 234,
        featured: true
    },
    {
        title: 'Builder - Residential Construction',
        price: null,
        priceDisplay: '$32 - $42/hour',
        category: 'job-building',
        listingType: 'job',
        location: 'Canterbury',
        suburb: 'Christchurch',
        description: 'Experienced builder wanted for residential new builds and renovations. LBP preferred. Own transport required. Steady work with quality builder.',
        images: ['https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800'],
        views: 312,
        featured: false
    },
    {
        title: 'Traffic Controller - Immediate Start',
        price: null,
        priceDisplay: '$28 - $32/hour',
        category: 'job-roadworks',
        listingType: 'job',
        location: 'Auckland',
        suburb: 'Auckland Wide',
        description: 'STMS and TC certified traffic controllers needed. Full-time work available. Day and night shifts. PPE provided. Must have clean licence.',
        images: ['https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800'],
        views: 156,
        featured: false
    },
    {
        title: 'Property Manager - Real Estate',
        price: null,
        priceDisplay: '$60,000 - $75,000 + Vehicle',
        category: 'job-property',
        listingType: 'job',
        location: 'Wellington',
        suburb: 'Wellington',
        description: 'Property manager required for growing rental portfolio. Must have clean credit and police check. Vehicle provided. Flexible hours.',
        images: ['https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800'],
        views: 234,
        featured: false
    }
];

// ============================================
// SAMPLE SELLERS
// ============================================
const SAMPLE_SELLERS = [
    { name: 'Mike Baker Motors', location: 'Whanganui', rating: 100, reviews: 45, verified: true, business: true },
    { name: 'Kevin Murray', location: 'Whanganui', rating: 100, reviews: 12, verified: true, business: false },
    { name: 'Evolution Motors', location: 'Napier', rating: 100, reviews: 89, verified: true, business: true },
    { name: 'Harcourts Whanganui', location: 'Whanganui', rating: 100, reviews: 156, verified: true, business: true },
    { name: 'Tara-marie Butters', location: 'Whanganui', rating: 100, reviews: 8, verified: true, business: false },
    { name: 'Sarah Mitchell', location: 'Palmerston North', rating: 98, reviews: 67, verified: true, business: false },
    { name: 'Dean McMillan', location: 'Napier', rating: 100, reviews: 34, verified: true, business: false },
    { name: 'PGG Wrightson', location: 'Te Awamutu', rating: 100, reviews: 234, verified: true, business: true },
    { name: 'TradeMe Verified', location: 'Auckland', rating: 100, reviews: 523, verified: true, business: true },
    { name: 'Kiwi Trader', location: 'Wellington', rating: 98, reviews: 89, verified: true, business: false },
    { name: 'NZ Deals', location: 'Christchurch', rating: 99, reviews: 167, verified: true, business: true },
    { name: 'Local Seller', location: 'Hamilton', rating: 100, reviews: 23, verified: true, business: false }
];

// Combine all listings
const SAMPLE_LISTINGS = [
    ...DOLLAR_RESERVE_LISTINGS,
    ...ART_ANTIQUES_LISTINGS,
    ...AUTO_PARTS_LISTINGS,
    ...BOOKS_MAGAZINES_LISTINGS,
    ...BUILDING_RENOVATION_LISTINGS,
    ...ELECTRONICS_LISTINGS,
    ...HEALTH_BEAUTY_LISTINGS,
    ...HOME_LIVING_LISTINGS,
    ...HUNTING_FISHING_LISTINGS,
    ...MUSIC_INSTRUMENTS_LISTINGS,
    ...JEWELLERY_WATCHES_LISTINGS,
    ...CLOTHING_LISTINGS,
    ...PARTY_EVENTS_LISTINGS,
    ...PETS_ANIMALS_LISTINGS,
    ...SPORTS_OUTDOORS_LISTINGS,
    ...VEHICLE_LISTINGS,
    ...MOTORCYCLE_LISTINGS,
    ...OFF_ROAD_BIKE_LISTINGS,
    ...MARINE_LISTINGS,
    ...QUAD_ATV_LISTINGS,
    ...MACHINERY_LISTINGS,
    ...FARMING_LISTINGS,
    ...FARM_BIKES_LISTINGS,
    ...PROPERTY_LISTINGS,
    ...SERVICES_LISTINGS,
    ...JOB_LISTINGS
];

// ============================================
// SEED DATABASE FUNCTION
// ============================================
async function seedDatabase() {
    console.log('🌱 Starting database seed...');

    try {
        // 1. Seed categories
        console.log('📁 Seeding categories...');
        for (const cat of CATEGORIES) {
            await db.collection('categories').doc(cat.id).set(cat);
        }
        console.log('✅ Categories added');

        // 2. Seed category groups
        console.log('📁 Seeding category groups...');
        for (const group of CATEGORY_GROUPS) {
            await db.collection('categoryGroups').doc(group.id).set(group);
        }
        console.log('✅ Category groups added');

        // 3. Create demo user
        console.log('👤 Creating demo user...');
        try {
            await auth.createUserWithEmailAndPassword(DEMO_CREDENTIALS.email, DEMO_CREDENTIALS.password);
        } catch (e) {
            if (e.code !== 'auth/email-already-in-use') throw e;
            console.log('ℹ️ Demo user already exists');
        }

        await db.collection('users').doc('demo-user').set({
            email: DEMO_CREDENTIALS.email,
            displayName: 'Demo User',
            location: 'Whanganui',
            phone: '027 123 4567',
            bio: 'Demo account for testing iSQROLL!',
            rating: 100,
            reviews: 5,
            verified: true,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('✅ Demo user created');

        // 4. Seed listings
        console.log('📦 Seeding ' + SAMPLE_LISTINGS.length + ' listings...');
        for (let i = 0; i < SAMPLE_LISTINGS.length; i++) {
            const listing = SAMPLE_LISTINGS[i];
            const seller = SAMPLE_SELLERS[i % SAMPLE_SELLERS.length];

            await db.collection('listings').add({
                ...listing,
                sellerId: 'seller-' + (i + 1),
                sellerName: seller.name,
                sellerRating: seller.rating,
                sellerReviews: seller.reviews,
                sellerVerified: seller.verified,
                sellerBusiness: seller.business || false,
                status: 'active',
                createdAt: firebase.firestore.Timestamp.fromDate(
                    new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
                )
            });
        }
        console.log('✅ All listings added');

        console.log('🎉 Database seeding complete with ' + SAMPLE_LISTINGS.length + ' listings!');
        alert('Database seeded with ' + SAMPLE_LISTINGS.length + ' listings! Refresh the page to see them.');
        return true;
    } catch (error) {
        console.error('❌ Error:', error);
        alert('Error seeding: ' + error.message);
        return false;
    }
}

// ============================================
// HELPER FUNCTIONS
// ============================================

function getCategoriesByGroup(groupId) {
    return CATEGORIES.filter(c => c.group === groupId);
}

function getCategoryGroup(groupId) {
    return CATEGORY_GROUPS.find(g => g.id === groupId);
}

function getCategory(categoryId) {
    return CATEGORIES.find(c => c.id === categoryId);
}

// Export to window
window.seedDatabase = seedDatabase;
window.getCategoriesByGroup = getCategoriesByGroup;
window.getCategoryGroup = getCategoryGroup;
window.getCategory = getCategory;
window.SAMPLE_LISTINGS = SAMPLE_LISTINGS;
