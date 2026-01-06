// ============================================
// iSQROLL - Data & Seed Functions
// ============================================

const CATEGORIES = [
    { id: 'antiques', name: 'Antiques & Collectables', icon: '🏺', order: 1 },
    { id: 'art', name: 'Art', icon: '🎨', order: 2 },
    { id: 'baby', name: 'Baby Gear', icon: '🍼', order: 3 },
    { id: 'books', name: 'Books', icon: '📚', order: 4 },
    { id: 'building', name: 'Building & Renovation', icon: '🔨', order: 5 },
    { id: 'business', name: 'Business & Farming', icon: '🚜', order: 6 },
    { id: 'clothing', name: 'Clothing & Fashion', icon: '👗', order: 7 },
    { id: 'computers', name: 'Computers', icon: '💻', order: 8 },
    { id: 'crafts', name: 'Crafts', icon: '✂️', order: 9 },
    { id: 'electronics', name: 'Electronics & Photography', icon: '📷', order: 10 },
    { id: 'gaming', name: 'Gaming', icon: '🎮', order: 11 },
    { id: 'health', name: 'Health & Beauty', icon: '💄', order: 12 },
    { id: 'home', name: 'Home & Living', icon: '🏠', order: 13 },
    { id: 'jewellery', name: 'Jewellery & Watches', icon: '💎', order: 14 },
    { id: 'mobile', name: 'Mobile Phones', icon: '📱', order: 15 },
    { id: 'movies', name: 'Movies & TV', icon: '🎬', order: 16 },
    { id: 'music', name: 'Music & Instruments', icon: '🎸', order: 17 },
    { id: 'pets', name: 'Pets & Animals', icon: '🐕', order: 18 },
    { id: 'sports', name: 'Sports & Outdoors', icon: '⚽', order: 19 },
    { id: 'toys', name: 'Toys & Models', icon: '🧸', order: 20 },
    { id: 'vehicles', name: 'Vehicles & Parts', icon: '🚗', order: 21 },
    { id: 'services', name: 'Services', icon: '🛠️', order: 22 },
    { id: 'travel', name: 'Travel & Events', icon: '✈️', order: 23 },
    { id: 'other', name: 'Everything Else', icon: '📦', order: 24 }
];

const NZ_REGIONS = [
    'Northland', 'Auckland', 'Waikato', 'Bay of Plenty', 'Gisborne',
    'Hawkes Bay', 'Taranaki', 'Manawatu-Whanganui', 'Wellington',
    'Tasman', 'Nelson', 'Marlborough', 'West Coast', 'Canterbury',
    'Otago', 'Southland'
];

const SAMPLE_LISTINGS = [
    {
        title: 'iPhone 15 Pro Max 256GB - Natural Titanium',
        price: 1599, wasPrice: 1899, category: 'mobile',
        location: 'Auckland', suburb: 'Ponsonby',
        description: 'Selling my iPhone 15 Pro Max in Natural Titanium. Purchased October 2024. Battery health 98%. Includes box, cable, receipt. No trades.',
        images: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800'],
        condition: 'Like New', brand: 'Apple', featured: true,
        shipping: { pickup: true, nationwide: true, cost: 0, note: 'Free shipping' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 342, watchers: 28
    },
    {
        title: 'Mid-Century Leather Sofa - 3 Seater Tan',
        price: 1450, wasPrice: null, category: 'home',
        location: 'Wellington', suburb: 'Karori',
        description: 'Beautiful mid-century leather sofa. 210cm wide. Genuine top-grain leather, solid oak legs. Some natural patina. Pick up only.',
        images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800'],
        condition: 'Good', brand: null, featured: false,
        shipping: { pickup: true, nationwide: false, cost: null, note: 'Pick up only' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 189, watchers: 15
    },
    {
        title: 'Giant Talon 2 Mountain Bike - Large',
        price: 899, wasPrice: 1299, category: 'sports',
        location: 'Christchurch', suburb: 'Riccarton',
        description: 'Giant Talon 2 hardtail. Size Large. Shimano Deore 2x9. Recently serviced with new brake pads and chain. Great for trails!',
        images: ['https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=800'],
        condition: 'Excellent', brand: 'Giant', featured: true,
        shipping: { pickup: true, nationwide: true, cost: 65, note: 'BikeBox shipping' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 523, watchers: 42
    },
    {
        title: 'Nike Air Jordan 1 Chicago - US 10 - DS',
        price: 420, wasPrice: null, category: 'clothing',
        location: 'Hamilton', suburb: 'Central',
        description: 'Air Jordan 1 Retro High OG Chicago. Size US 10. Deadstock, never worn. 100% authentic from Nike SNKRS. Price firm.',
        images: ['https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800'],
        condition: 'New', brand: 'Nike', featured: true,
        shipping: { pickup: true, nationwide: true, cost: 12, note: 'Tracked shipping' },
        payment: ['bank'], acceptsOffers: false, views: 892, watchers: 67
    },
    {
        title: 'PS5 Disc + 2 Controllers + Spider-Man 2',
        price: 749, wasPrice: 899, category: 'gaming',
        location: 'Auckland', suburb: 'Mt Eden',
        description: 'PlayStation 5 Disc Edition bundle. 2x DualSense controllers. Spider-Man 2 included. All cables and box. No stick drift.',
        images: ['https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800'],
        condition: 'Excellent', brand: 'Sony', featured: true,
        shipping: { pickup: true, nationwide: true, cost: 25, note: 'Insured shipping' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 1234, watchers: 89
    },
    {
        title: 'Teak Outdoor Dining Set - 6 Seater',
        price: 1200, wasPrice: 2499, category: 'home',
        location: 'Tauranga', suburb: 'Mt Maunganui',
        description: 'Solid teak dining set with 6 chairs and Sunbrella cushions. Table 180x90cm. Regularly oiled. Originally $2,499 from Freedom.',
        images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800'],
        condition: 'Good', brand: 'Freedom', featured: false,
        shipping: { pickup: true, nationwide: false, cost: null, note: 'Pick up only' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 456, watchers: 34
    },
    {
        title: 'Canon EOS R5 Body - Low Shutter Count',
        price: 4299, wasPrice: null, category: 'electronics',
        location: 'Wellington', suburb: 'Newtown',
        description: 'Canon EOS R5. Only 4,892 actuations. 45MP sensor, 8K video, IBIS. Immaculate condition. Box, battery, charger included.',
        images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800'],
        condition: 'Like New', brand: 'Canon', featured: true,
        shipping: { pickup: true, nationwide: true, cost: 0, note: 'Free insured shipping' },
        payment: ['bank'], acceptsOffers: true, views: 678, watchers: 52
    },
    {
        title: 'DHD Surfboard 6\'2" Shortboard',
        price: 420, wasPrice: 650, category: 'sports',
        location: 'Raglan', suburb: 'Raglan',
        description: 'DHD shortboard. 6\'2" x 19" x 2.5". Squash tail, 5-fin FCS II setup. Fins included. Minor pressure dings. Great for Raglan!',
        images: ['https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800'],
        condition: 'Good', brand: 'DHD', featured: false,
        shipping: { pickup: true, nationwide: true, cost: 45, note: 'Board bag shipping' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 234, watchers: 18
    },
    {
        title: 'Louis Vuitton Neverfull MM - Authentic',
        price: 1899, wasPrice: null, category: 'clothing',
        location: 'Auckland', suburb: 'Remuera',
        description: 'Authentic LV Neverfull MM Damier Ebene. Date code AR3198 (France 2018). Excellent condition. Dust bag and receipt included.',
        images: ['https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800'],
        condition: 'Excellent', brand: 'Louis Vuitton', featured: true,
        shipping: { pickup: true, nationwide: true, cost: 0, note: 'Free insured shipping' },
        payment: ['bank'], acceptsOffers: false, views: 1456, watchers: 98
    },
    {
        title: 'LEGO UCS Millennium Falcon 75192',
        price: 1100, wasPrice: null, category: 'toys',
        location: 'Dunedin', suburb: 'Roslyn',
        description: 'UCS Millennium Falcon - 7,541 pieces! 100% complete with all 7 minifigures. Built once for display. Box and instructions included.',
        images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'],
        condition: 'Like New', brand: 'LEGO', featured: false,
        shipping: { pickup: true, nationwide: true, cost: 35, note: 'Careful packaging' },
        payment: ['bank'], acceptsOffers: true, views: 567, watchers: 43
    },
    {
        title: '2019 Toyota Corolla GLX - 42,000km',
        price: 23500, wasPrice: null, category: 'vehicles',
        location: 'Auckland', suburb: 'Greenlane',
        description: '2019 Corolla GLX Hatch. 42,000km. Full dealer history. Apple CarPlay, safety sense, reversing camera. One owner, always garaged.',
        images: ['https://images.unsplash.com/photo-1623869675781-80aa31012a5a?w=800'],
        condition: 'Excellent', brand: 'Toyota', featured: true,
        shipping: { pickup: true, nationwide: false, cost: null, note: 'Test drives welcome' },
        payment: ['bank'], acceptsOffers: true, views: 2341, watchers: 156
    },
    {
        title: 'MacBook Pro 14" M3 Pro - Space Black',
        price: 3199, wasPrice: 3699, category: 'computers',
        location: 'Wellington', suburb: 'Te Aro',
        description: 'MacBook Pro 14" M3 Pro, 18GB RAM, 512GB SSD. AppleCare+ until Nov 2027. Only 23 battery cycles. Zero scratches. Box included.',
        images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800'],
        condition: 'Like New', brand: 'Apple', featured: true,
        shipping: { pickup: true, nationwide: true, cost: 0, note: 'Free insured shipping' },
        payment: ['bank'], acceptsOffers: true, views: 892, watchers: 78
    },
    {
        title: 'Breville Barista Express Coffee Machine',
        price: 549, wasPrice: 799, category: 'home',
        location: 'Auckland', suburb: 'Grey Lynn',
        description: 'Breville Barista Express. Integrated grinder, 15 bar pump, steam wand. All accessories included. Great condition, excellent coffee.',
        images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800'],
        condition: 'Excellent', brand: 'Breville', featured: false,
        shipping: { pickup: true, nationwide: true, cost: 20, note: 'Carefully packed' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 445, watchers: 38
    },
    {
        title: 'Fender Player Stratocaster Sunburst',
        price: 1150, wasPrice: null, category: 'music',
        location: 'Auckland', suburb: 'Kingsland',
        description: 'Fender Player Strat MIM. 3-Color Sunburst. Alder body, maple neck. Minimal fret wear. Plays and sounds amazing. Gig bag included.',
        images: ['https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=800'],
        condition: 'Excellent', brand: 'Fender', featured: false,
        shipping: { pickup: true, nationwide: true, cost: 30, note: 'Hardcase shipping' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 312, watchers: 24
    },
    {
        title: 'Dyson V15 Detect Absolute Vacuum',
        price: 799, wasPrice: 1199, category: 'home',
        location: 'Christchurch', suburb: 'Merivale',
        description: 'Dyson V15 Detect. Laser reveals dust, piezo sensor, LCD screen. Up to 60 mins runtime. All attachments. Moving overseas.',
        images: ['https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800'],
        condition: 'Excellent', brand: 'Dyson', featured: false,
        shipping: { pickup: true, nationwide: true, cost: 15, note: 'Original box' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 534, watchers: 45
    },
    {
        title: 'Samsung 65" QN85B Neo QLED 4K TV',
        price: 1599, wasPrice: 2499, category: 'electronics',
        location: 'Auckland', suburb: 'Newmarket',
        description: 'Samsung 65" Neo QLED. Quantum Matrix, Object Tracking Sound, Gaming Hub 120Hz. No dead pixels. Wall mount included.',
        images: ['https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=800'],
        condition: 'Excellent', brand: 'Samsung', featured: true,
        shipping: { pickup: true, nationwide: false, cost: null, note: 'Pick up only' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 789, watchers: 56
    },
    {
        title: 'Weber Genesis II E-310 BBQ - 3 Burner',
        price: 899, wasPrice: 1399, category: 'home',
        location: 'Tauranga', suburb: 'Papamoa',
        description: 'Weber Genesis II E-310. 3 burners, 39,000 BTU. Cast iron grates, infinity ignition. Cover and gas bottle included. Moving to apartment.',
        images: ['https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800'],
        condition: 'Excellent', brand: 'Weber', featured: false,
        shipping: { pickup: true, nationwide: false, cost: null, note: 'Pick up only' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 423, watchers: 31
    },
    {
        title: 'DJI Mini 3 Pro - Fly More Combo',
        price: 1199, wasPrice: 1599, category: 'electronics',
        location: 'Wellington', suburb: 'Miramar',
        description: 'DJI Mini 3 Pro with RC controller. 3 batteries, charging hub, shoulder bag. Under 250g - no registration needed! Only 10 flights.',
        images: ['https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800'],
        condition: 'Like New', brand: 'DJI', featured: true,
        shipping: { pickup: true, nationwide: true, cost: 0, note: 'Free insured shipping' },
        payment: ['bank'], acceptsOffers: true, views: 667, watchers: 48
    },
    {
        title: 'Eames Style Lounge Chair & Ottoman',
        price: 1800, wasPrice: null, category: 'home',
        location: 'Auckland', suburb: 'Ponsonby',
        description: 'Eames-style lounge chair with ottoman. Black genuine leather, walnut veneer, polished aluminum. Very comfortable! Originally $3,200.',
        images: ['https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800'],
        condition: 'Excellent', brand: null, featured: false,
        shipping: { pickup: true, nationwide: false, cost: null, note: 'Pick up Ponsonby' },
        payment: ['bank', 'cash'], acceptsOffers: true, views: 398, watchers: 29
    },
    {
        title: 'Apple Watch Ultra 2 - Orange Alpine',
        price: 1099, wasPrice: 1399, category: 'electronics',
        location: 'Auckland', suburb: 'CBD',
        description: 'Apple Watch Ultra 2. 49mm titanium, 3000 nit display, dual GPS, 36hr battery. Orange Alpine Loop (M). Box and charger included.',
        images: ['https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800'],
        condition: 'Like New', brand: 'Apple', featured: true,
        shipping: { pickup: true, nationwide: true, cost: 0, note: 'Free shipping' },
        payment: ['bank'], acceptsOffers: true, views: 534, watchers: 41
    }
];

const SAMPLE_SELLERS = [
    { name: 'Mike Chen', location: 'Auckland', rating: 4.9, reviews: 156, verified: true },
    { name: 'Sarah Williams', location: 'Wellington', rating: 4.7, reviews: 43, verified: true },
    { name: 'James Taylor', location: 'Christchurch', rating: 4.8, reviews: 89, verified: true },
    { name: 'Lisa Park', location: 'Hamilton', rating: 5.0, reviews: 234, verified: true },
    { name: 'David Brown', location: 'Auckland', rating: 4.6, reviews: 67, verified: false },
    { name: 'Emma Wilson', location: 'Tauranga', rating: 4.9, reviews: 112, verified: true },
    { name: 'Tom Anderson', location: 'Wellington', rating: 5.0, reviews: 78, verified: true },
    { name: 'Jack Morrison', location: 'Raglan', rating: 4.7, reviews: 34, verified: false },
    { name: 'Sophie Lee', location: 'Auckland', rating: 4.9, reviews: 167, verified: true },
    { name: 'Ryan Hughes', location: 'Dunedin', rating: 5.0, reviews: 45, verified: true }
];

// Seed database function
async function seedDatabase() {
    console.log('🌱 Starting database seed...');
    
    try {
        // 1. Seed categories
        console.log('📁 Seeding categories...');
        for (const cat of CATEGORIES) {
            await db.collection('categories').doc(cat.id).set(cat);
        }
        console.log('✅ Categories added');
        
        // 2. Create demo user
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
            location: 'Auckland',
            phone: '021 123 4567',
            bio: 'Demo account for testing iSQROLL!',
            rating: 4.8,
            reviews: 24,
            verified: true,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('✅ Demo user created');
        
        // 3. Seed listings
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
                status: 'active',
                createdAt: firebase.firestore.Timestamp.fromDate(
                    new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000)
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

window.seedDatabase = seedDatabase;
window.CATEGORIES = CATEGORIES;
window.NZ_REGIONS = NZ_REGIONS;
