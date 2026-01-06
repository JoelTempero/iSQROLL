// ============================================
// iSQROLL - Data & Seed Functions
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
// SAMPLE LISTINGS - Vehicle Type
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
        // Vehicle-specific fields
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
        // Background checks
        stolenCheck: 'Passed',
        damageCheck: 'Passed',
        views: 234,
        featured: true
    },
    {
        title: '2015 Toyota Prius Hybrid - Taxi Business Opportunity',
        price: 15000,
        category: 'vehicle',
        listingType: 'vehicle',
        location: 'Whanganui',
        suburb: 'Whanganui',
        description: 'Business Opportunity for 2026 – Owner/Driver Taxi Business for Sale. What\'s Included: 2015 Toyota Prius Hatchback with Warrant of Fitness, Registration. Odometer: 386,XXX km. Automatic transmission. Petrol hybrid 1790cc engine. Vehicle is fully operational with all running gear. Contract with River City Cabs generates over $100,000 per year.',
        images: ['https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800'],
        make: 'TOYOTA',
        model: 'Prius',
        bodyType: 'Hatchback',
        doors: 5,
        previousOwners: '2',
        year: 2015,
        odometer: 386000,
        colour: 'White',
        condition: 'Used',
        engineCC: 1790,
        fuelType: 'Petrol Hybrid',
        transmission: 'Automatic',
        wofExpiry: '12/06/2026',
        stolenCheck: 'Passed',
        damageCheck: 'Passed',
        views: 1120,
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
        title: 'TH TH554-D Tractor 4WD 2019',
        price: 12500,
        category: 'everything-machinery',
        listingType: 'vehicle',
        location: 'Napier',
        suburb: 'Napier South',
        description: 'This Diesel tractor was imported by my Dad directly from China. He had a plan to use it for a specific job which never eventuated, so it has sat quietly in his shed ever since. It has a 55Hp Diesel engine and is 4 Wheel Drive which would make it very handy for various applications. It has Hydraulics and a PTO. Happy to accept trade in cars, utes, vans, SUV\'s.',
        images: ['https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?w=800'],
        make: 'TH',
        model: 'TH554-D',
        bodyType: 'Tractor 4WD',
        seats: -1,
        previousOwners: 'Ex-Overseas',
        year: 2019,
        colour: 'Blue',
        condition: 'Used',
        engineSize: -1,
        transmission: 'Manual',
        regoExpiry: '01/01/1900',
        stolenCheck: 'Passed',
        damageCheck: 'Passed',
        views: 9,
        featured: false
    },
    {
        title: '2020 Suzuki Swift Sport 1.4T',
        price: 26990,
        category: 'vehicle',
        listingType: 'vehicle',
        location: 'Wellington',
        suburb: 'Lower Hutt',
        description: 'Suzuki Swift Sport in Championship Yellow. 1.4L Turbo, 6-speed manual. Sports seats, climate control, reverse camera. Great fun daily driver!',
        images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800'],
        make: 'SUZUKI',
        model: 'Swift Sport',
        bodyType: 'Hatchback',
        doors: 5,
        previousOwners: '1',
        year: 2020,
        odometer: 45000,
        colour: 'Championship Yellow',
        condition: 'Used',
        engineCC: 1373,
        fuelType: 'Petrol',
        transmission: 'Manual',
        wofExpiry: '30/11/2026',
        stolenCheck: 'Passed',
        damageCheck: 'Passed',
        views: 423,
        featured: false
    }
];

// ============================================
// SAMPLE LISTINGS - Property Type
// ============================================
const PROPERTY_LISTINGS = [
    {
        title: 'Old Soul, New Heart - Character Home',
        price: null, // Price by negotiation
        priceDisplay: 'Price by Negotiation',
        category: 'residential',
        listingType: 'property',
        location: 'Whanganui',
        suburb: 'Whanganui Central',
        description: 'On a flat section in a quiet street sits this Kiwi classic, an early 1900s home that blends timeless character with modern-day upgrades. Step inside and you\'ll find three generous double bedrooms and spacious living, with original features flowing from the polished floors through to the high ceilings. Recent upgrades to the wiring, kitchen, and bathroom ensure peace of mind and everyday comfort. The kitchen is truly the heart of this home, complete with a large stacker window that opens seamlessly to a covered outdoor entertaining area.',
        images: ['https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800'],
        // Property-specific fields
        bedrooms: 3,
        bathrooms: 1,
        livingAreas: 1,
        garageParking: true,
        offStreetParking: false,
        landArea: null,
        floorArea: null,
        propertyType: 'House',
        // Agent info
        agentName: 'Shannon Jury',
        agentCompany: 'Harcourts Whanganui',
        agentLogo: 'https://via.placeholder.com/200x60?text=Harcourts',
        agentWebsite: 'https://harcourts.net/nz/office/whanganui',
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
        description: 'Spacious modern family home in sought-after Hokowhitu. Open plan living flows to sunny north-facing deck. Master with ensuite and walk-in robe. Double garage with internal access. Heat pump and gas fire. Close to schools and river walkway.',
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
        title: 'Lifestyle Block - 4.5 Hectares',
        price: 895000,
        category: 'lifestyle-block',
        listingType: 'property',
        location: 'Waikato',
        suburb: 'Te Awamutu',
        description: '4.5 hectares of flat to rolling land with established 3 bedroom home. Large shed with power. Excellent water supply. Currently running sheep and cattle. Subdivision potential (STCA).',
        images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
        bedrooms: 3,
        bathrooms: 1,
        livingAreas: 1,
        garageParking: true,
        offStreetParking: true,
        landArea: 45000,
        propertyType: 'Lifestyle',
        agentName: 'Mike Thompson',
        agentCompany: 'PGG Wrightson Real Estate',
        views: 456,
        featured: false
    },
    {
        title: 'Investment Apartment - CBD Location',
        price: 385000,
        category: 'apartment',
        listingType: 'property',
        location: 'Wellington',
        suburb: 'Te Aro',
        description: '2 bedroom apartment in the heart of Wellington CBD. Currently tenanted at $550/week. Building has earthquake strengthening completed. Body corp $4,500 pa. Great investment or first home.',
        images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'],
        bedrooms: 2,
        bathrooms: 1,
        livingAreas: 1,
        garageParking: false,
        offStreetParking: false,
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
        description: '2500sqm flat section with rural outlook. Power and water at boundary. Building platform in place. Covenants apply. 15 mins to Whanganui, 25 mins to Palmerston North.',
        images: ['https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'],
        bedrooms: null,
        bathrooms: null,
        landArea: 2500,
        propertyType: 'Section',
        agentName: 'Rachel Brown',
        agentCompany: 'Bayleys',
        views: 178,
        featured: false
    },
    {
        title: 'Room for Rent - Shared House',
        price: 200,
        priceDisplay: '$200/week',
        category: 'room',
        listingType: 'property',
        location: 'Auckland',
        suburb: 'Mt Eden',
        description: 'Large sunny room in shared house. Fully furnished. Fibre internet included. 2 other professional flatmates. Close to train station and shops. Available now.',
        images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800'],
        bedrooms: 1,
        bathrooms: null,
        propertyType: 'Room',
        agentName: 'Direct from Owner',
        views: 89,
        featured: false
    }
];

// ============================================
// SAMPLE LISTINGS - General Items
// ============================================
const GENERAL_LISTINGS = [
    {
        title: 'Comfortable Rocking Chair - 360 Swivel',
        price: 50,
        category: 'home-living',
        listingType: 'general',
        location: 'Whanganui',
        suburb: 'Tawhero',
        description: 'Very comfortable rocking chair turns 360 degrees. Great condition.',
        images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'],
        condition: 'New',
        shipping: 'Pickup',
        payment: 'Cash',
        views: 80,
        featured: false
    },
    {
        title: 'Fishing Rod & Reel Combo - Shimano',
        price: 185,
        category: 'hunting-fishing',
        listingType: 'general',
        location: 'Tauranga',
        suburb: 'Mt Maunganui',
        description: 'Shimano Sienna spinning combo. 7ft medium rod with 2500 reel. Barely used, excellent condition. Perfect for surf or estuary fishing.',
        images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800'],
        condition: 'Excellent',
        brand: 'Shimano',
        shipping: 'Nationwide',
        shippingCost: 15,
        payment: 'Bank Transfer',
        views: 156,
        featured: false
    },
    {
        title: 'iPhone 14 Pro 256GB - Deep Purple',
        price: 1299,
        category: 'electronics',
        listingType: 'general',
        location: 'Auckland',
        suburb: 'Ponsonby',
        description: 'iPhone 14 Pro in Deep Purple. 256GB storage. Battery health 94%. No scratches, always had screen protector and case. Includes box and cable.',
        images: ['https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=800'],
        condition: 'Excellent',
        brand: 'Apple',
        shipping: 'Nationwide',
        shippingCost: 0,
        payment: 'Bank Transfer',
        views: 423,
        featured: true
    },
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
        shipping: 'Pickup',
        payment: 'Cash',
        views: 234,
        featured: false
    },
    {
        title: 'Kids Bike - 20" Apollo',
        price: 75,
        category: 'sports-outdoors',
        listingType: 'general',
        location: 'Christchurch',
        suburb: 'Riccarton',
        description: 'Apollo kids bike 20" wheels. Suit ages 6-9. Good condition, just outgrown. Some scratches but rides perfectly.',
        images: ['https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=800'],
        condition: 'Good',
        brand: 'Apollo',
        shipping: 'Pickup',
        payment: 'Cash',
        views: 67,
        featured: false
    },
    {
        title: 'Breville Barista Express Coffee Machine',
        price: 599,
        category: 'home-living',
        listingType: 'general',
        location: 'Wellington',
        suburb: 'Karori',
        description: 'Breville Barista Express. Makes excellent coffee! Includes all accessories and instruction manual. Selling due to upgrade.',
        images: ['https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800'],
        condition: 'Excellent',
        brand: 'Breville',
        shipping: 'Nationwide',
        shippingCost: 25,
        payment: 'Bank Transfer',
        views: 312,
        featured: true
    },
    {
        title: 'Husqvarna Ride-On Mower',
        price: 4500,
        category: 'everything-machinery',
        listingType: 'general',
        location: 'Hawkes Bay',
        suburb: 'Hastings',
        description: 'Husqvarna ride-on mower. 42" cut, hydrostatic drive. 200 hours. Serviced annually. Perfect for lifestyle block or large lawn.',
        images: ['https://images.unsplash.com/photo-1590682680695-43b964a3ae17?w=800'],
        condition: 'Excellent',
        brand: 'Husqvarna',
        shipping: 'Pickup',
        payment: 'Bank Transfer',
        views: 567,
        featured: true
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
        shipping: 'Pickup',
        payment: 'Cash',
        views: 198,
        featured: false
    }
];

// ============================================
// SAMPLE SELLERS
// ============================================
const SAMPLE_SELLERS = [
    { 
        name: 'Mike Baker Motors', 
        location: 'Whanganui', 
        rating: 100, 
        reviews: 45, 
        verified: true,
        business: true,
        website: 'www.mikebakermotors.co.nz'
    },
    { 
        name: 'Kevin Murray', 
        location: 'Whanganui', 
        rating: 100, 
        reviews: 12, 
        verified: true,
        business: false
    },
    { 
        name: 'Evolution Motors', 
        location: 'Napier', 
        rating: 100, 
        reviews: 89, 
        verified: true,
        business: true,
        website: 'www.evolutionmotors.co.nz'
    },
    { 
        name: 'Harcourts Whanganui', 
        location: 'Whanganui', 
        rating: 100, 
        reviews: 156, 
        verified: true,
        business: true,
        website: 'https://harcourts.net/nz/office/whanganui'
    },
    { 
        name: 'Tara-marie Butters', 
        location: 'Whanganui', 
        rating: 100, 
        reviews: 8, 
        verified: true,
        business: false
    },
    { 
        name: 'Sarah Mitchell', 
        location: 'Palmerston North', 
        rating: 98, 
        reviews: 67, 
        verified: true,
        business: false
    },
    { 
        name: 'Dean McMillan', 
        location: 'Napier', 
        rating: 100, 
        reviews: 34, 
        verified: true,
        business: false
    },
    { 
        name: 'PGG Wrightson Real Estate', 
        location: 'Te Awamutu', 
        rating: 100, 
        reviews: 234, 
        verified: true,
        business: true
    }
];

// Combine all listings
const SAMPLE_LISTINGS = [...VEHICLE_LISTINGS, ...PROPERTY_LISTINGS, ...GENERAL_LISTINGS];

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
        console.log('📦 Seeding listings...');
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
                sellerWebsite: seller.website || null,
                status: 'active',
                createdAt: firebase.firestore.Timestamp.fromDate(
                    new Date(Date.now() - Math.random() * 14 * 24 * 60 * 60 * 1000)
                )
            });
        }
        console.log('✅ Listings added');
        
        console.log('🎉 Database seeding complete!');
        alert('Database seeded successfully! Refresh the page to see listings.');
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

// Get categories by group
function getCategoriesByGroup(groupId) {
    return CATEGORIES.filter(c => c.group === groupId);
}

// Get category group by ID
function getCategoryGroup(groupId) {
    return CATEGORY_GROUPS.find(g => g.id === groupId);
}

// Get category by ID
function getCategory(categoryId) {
    return CATEGORIES.find(c => c.id === categoryId);
}

// Export remaining functions to window
window.seedDatabase = seedDatabase;
window.getCategoriesByGroup = getCategoriesByGroup;
window.getCategoryGroup = getCategoryGroup;
window.getCategory = getCategory;
