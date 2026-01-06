// ============================================
// iSQROLL - Main Application
// ============================================

// ============================================
// COMPONENTS (Header & Footer managed separately)
// ============================================

const Components = {
    header() {
        const user = App.currentUser;
        const initial = user ? (user.displayName || user.email)[0].toUpperCase() : '';
        
        return `
        <header class="header">
            <div class="container header-inner">
                <div class="logo" onclick="App.navigate('home')">
                    <div class="logo-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
                    </div>
                    i<span class="accent">SQROLL</span>
                </div>
                <div class="header-search">
                    <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <input type="text" placeholder="Search for anything..." id="headerSearch" onkeyup="if(event.key==='Enter'){App.searchQuery=this.value;App.navigate('browse');}">
                </div>
                <nav class="nav-main">
                    <span class="nav-link" onclick="App.navigate('browse')">Browse</span>
                    <span class="nav-link" onclick="App.navigate('categories')">Categories</span>
                    <span class="nav-link" onclick="App.navigate('how-it-works')">How it Works</span>
                    <span class="nav-link" onclick="App.navigate('about')">About</span>
                </nav>
                <div class="header-actions">
                    ${user ? `
                        <button class="btn btn-secondary" onclick="App.navigate('create')">+ Sell</button>
                        <div class="user-menu">
                            <div class="user-avatar" onclick="toggleDropdown()">${initial}</div>
                            <div class="user-dropdown" id="userDropdown">
                                <div class="dropdown-header">
                                    <div class="dropdown-name">${user.displayName || 'User'}</div>
                                    <div class="dropdown-email">${user.email}</div>
                                </div>
                                <div class="dropdown-item" onclick="App.navigate('profile')">👤 Profile</div>
                                <div class="dropdown-item" onclick="App.navigate('my-listings')">📦 My Listings</div>
                                <div class="dropdown-item" onclick="App.navigate('saved')">❤️ Saved</div>
                                <div class="dropdown-item danger" onclick="App.logout()">🚪 Log Out</div>
                            </div>
                        </div>
                    ` : `
                        <button class="btn btn-ghost" onclick="openModal('login')">Log in</button>
                        <button class="btn btn-primary" onclick="openModal('signup')">Sign up</button>
                    `}
                </div>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()"><span></span><span></span><span></span></button>
            </div>
            <nav class="mobile-nav" id="mobileNav">
                <span class="nav-link" onclick="App.navigate('browse');toggleMobileMenu();">Browse</span>
                <span class="nav-link" onclick="App.navigate('categories');toggleMobileMenu();">Categories</span>
                <span class="nav-link" onclick="App.navigate('how-it-works');toggleMobileMenu();">How it Works</span>
                <span class="nav-link" onclick="App.navigate('about');toggleMobileMenu();">About</span>
                <div class="mobile-nav-actions">
                    ${user ? `
                        <button class="btn btn-secondary" onclick="App.navigate('profile');toggleMobileMenu();">Profile</button>
                        <button class="btn btn-primary" onclick="App.navigate('create');toggleMobileMenu();">Sell</button>
                    ` : `
                        <button class="btn btn-secondary" onclick="openModal('login');toggleMobileMenu();">Log in</button>
                        <button class="btn btn-primary" onclick="openModal('signup');toggleMobileMenu();">Sign up</button>
                    `}
                </div>
            </nav>
        </header>`;
    },

    footer() {
        return `
        <footer class="footer">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand">
                        <div class="logo" onclick="App.navigate('home')">
                            <div class="logo-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg></div>
                            i<span class="accent">SQROLL</span>
                        </div>
                        <p>A marketplace for the people. Buy and sell with Kiwis you can trust. Safe, simple, and community-focused.</p>
                    </div>
                    <div>
                        <h4 class="footer-title">Marketplace</h4>
                        <ul class="footer-links">
                            <li><a onclick="App.navigate('browse')">Browse Listings</a></li>
                            <li><a onclick="App.navigate('categories')">Categories</a></li>
                            <li><a onclick="App.navigate('how-it-works')">How it Works</a></li>
                            <li><a onclick="App.navigate('seller-guide')">Seller Guide</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="footer-title">Categories</h4>
                        <ul class="footer-links">
                            <li><a onclick="App.searchCategory='electronics';App.navigate('browse')">Electronics</a></li>
                            <li><a onclick="App.searchCategory='clothing';App.navigate('browse')">Clothing</a></li>
                            <li><a onclick="App.searchCategory='home';App.navigate('browse')">Home & Living</a></li>
                            <li><a onclick="App.searchCategory='vehicles';App.navigate('browse')">Vehicles</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="footer-title">Company</h4>
                        <ul class="footer-links">
                            <li><a onclick="App.navigate('about')">About Us</a></li>
                            <li><a onclick="App.navigate('contact')">Contact</a></li>
                            <li><a onclick="App.navigate('privacy')">Privacy Policy</a></li>
                            <li><a onclick="App.navigate('terms')">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div>&copy; 2026 iSQROLL Limited. All rights reserved.</div>
                    <div class="powered-by">Powered by <a href="https://sidequestdigital.co.nz" target="_blank">Sidequest Digital</a></div>
                </div>
            </div>
        </footer>`;
    },

    modals() {
        return `
        <!-- Login Modal -->
        <div class="modal-overlay" id="loginModal" onclick="if(event.target===this)closeModal('login')">
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">Log in</h3>
                    <button class="modal-close" onclick="closeModal('login')">✕</button>
                </div>
                <div class="modal-body">
                    <div class="demo-box">
                        <div class="demo-box-title">🔑 Demo Account</div>
                        <p>Email: <code>demo@isqroll.co.nz</code></p>
                        <p>Password: <code>demo123</code></p>
                    </div>
                    <form onsubmit="handleLogin(event)">
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-input" id="loginEmail" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-input" id="loginPassword" required>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">Log in</button>
                    </form>
                    <div class="modal-footer-text">
                        Don't have an account? <a onclick="closeModal('login');setTimeout(()=>openModal('signup'),200)">Sign up</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Signup Modal -->
        <div class="modal-overlay" id="signupModal" onclick="if(event.target===this)closeModal('signup')">
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">Create account</h3>
                    <button class="modal-close" onclick="closeModal('signup')">✕</button>
                </div>
                <div class="modal-body">
                    <form onsubmit="handleSignup(event)">
                        <div class="form-group">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-input" id="signupName" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-input" id="signupEmail" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-input" id="signupPassword" required minlength="6">
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">Create account</button>
                    </form>
                    <div class="modal-footer-text">
                        Already have an account? <a onclick="closeModal('signup');setTimeout(()=>openModal('login'),200)">Log in</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Toast -->
        <div class="toast" id="toast"><span id="toastMsg"></span></div>`;
    }
};

// ============================================
// MAIN APP
// ============================================

const App = {
    currentUser: null,
    listings: [],
    categories: [],
    savedItems: [],
    currentPage: 'home',
    currentListingId: null,
    searchQuery: '',
    searchCategory: '',

    async init() {
        console.log('🚀 Initializing iSQROLL...');
        
        // Render shell (header, app container, footer, modals)
        this.renderShell();
        
        auth.onAuthStateChanged(user => {
            this.currentUser = user;
            this.renderShell();
            this.renderPage();
        });
        
        await this.loadCategories();
        await this.loadListings();
        this.handleRoute();
        window.addEventListener('popstate', () => this.handleRoute());
        
        console.log('✅ App ready');
    },

    renderShell() {
        document.body.innerHTML = `
            ${Components.header()}
            <main id="app"></main>
            ${Components.footer()}
            ${Components.modals()}
        `;
    },

    async loadCategories() {
        try {
            const snap = await db.collection('categories').orderBy('order').get();
            this.categories = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            if (!this.categories.length) this.categories = CATEGORIES;
        } catch (e) { this.categories = CATEGORIES; }
    },

    async loadListings() {
        try {
            const snap = await db.collection('listings').where('status', '==', 'active').limit(50).get();
            this.listings = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            this.listings.sort((a, b) => {
                const aTime = a.createdAt?.toDate?.() || new Date(0);
                const bTime = b.createdAt?.toDate?.() || new Date(0);
                return bTime - aTime;
            });
            console.log(`📦 Loaded ${this.listings.length} listings`);
        } catch (e) { console.error('Load error:', e); this.listings = []; }
    },

    navigate(page, param = null) {
        this.currentPage = page;
        if (param) this.currentListingId = param;
        history.pushState({}, '', param ? `#${page}/${param}` : `#${page}`);
        this.renderPage();
        window.scrollTo(0, 0);
    },

    handleRoute() {
        const hash = location.hash.slice(1) || 'home';
        const [page, param] = hash.split('/');
        this.currentPage = page;
        if (param) this.currentListingId = param;
        this.renderPage();
    },

    renderPage() {
        const app = document.getElementById('app');
        if (!app) return;
        
        const pages = {
            'home': () => this.renderHome(),
            'browse': () => this.renderBrowse(),
            'categories': () => this.renderCategories(),
            'listing': () => this.renderListingDetail(),
            'profile': () => this.renderProfile(),
            'my-listings': () => this.renderMyListings(),
            'saved': () => this.renderSaved(),
            'create': () => this.renderCreateListing(),
            'about': () => Pages.about(),
            'how-it-works': () => Pages.howItWorks(),
            'seller-guide': () => Pages.sellerGuide(),
            'contact': () => Pages.contact(),
            'privacy': () => Pages.privacy(),
            'terms': () => Pages.terms()
        };
        
        app.innerHTML = (pages[this.currentPage] || pages.home)();
    },

    async login(email, pw) {
        try { await auth.signInWithEmailAndPassword(email, pw); closeModal('login'); showToast('Welcome back!'); }
        catch (e) { showToast(e.message, 'error'); }
    },

    async signup(email, pw, name) {
        try {
            const c = await auth.createUserWithEmailAndPassword(email, pw);
            await c.user.updateProfile({ displayName: name });
            closeModal('signup'); showToast('Welcome to iSQROLL!');
        } catch (e) { showToast(e.message, 'error'); }
    },

    async logout() { await auth.signOut(); this.navigate('home'); showToast('Logged out'); },

    getFiltered() {
        let r = [...this.listings];
        if (this.searchCategory) r = r.filter(l => l.category === this.searchCategory);
        if (this.searchQuery) { const q = this.searchQuery.toLowerCase(); r = r.filter(l => l.title.toLowerCase().includes(q)); }
        return r;
    },

    timeAgo(ts) {
        if (!ts) return '';
        const d = ts.toDate ? ts.toDate() : new Date(ts);
        const s = Math.floor((Date.now() - d) / 1000);
        if (s < 60) return 'Just now';
        if (s < 3600) return Math.floor(s / 60) + 'm ago';
        if (s < 86400) return Math.floor(s / 3600) + 'h ago';
        return Math.floor(s / 86400) + 'd ago';
    },

    toggleSave(id) {
        if (!this.currentUser) { openModal('login'); return; }
        const i = this.savedItems.indexOf(id);
        if (i === -1) { this.savedItems.push(id); showToast('Saved!'); }
        else { this.savedItems.splice(i, 1); showToast('Removed'); }
        this.renderPage();
    },

    renderCard(l) {
        const s = this.savedItems.includes(l.id);
        return `<div class="listing-card" onclick="App.navigate('listing','${l.id}')">
            <div class="listing-image">
                <img src="${l.images?.[0] || 'https://via.placeholder.com/400x300'}" alt="${l.title}" loading="lazy">
                ${l.featured ? '<span class="listing-badge">Featured</span>' : ''}
                <button class="listing-save ${s ? 'saved' : ''}" onclick="event.stopPropagation();App.toggleSave('${l.id}')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${s ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
            </div>
            <div class="listing-content">
                <h3 class="listing-title">${l.title}</h3>
                <div class="listing-price">$${(l.price || 0).toLocaleString()}${l.wasPrice ? `<span class="was">$${l.wasPrice.toLocaleString()}</span>` : ''}</div>
                <div class="listing-meta"><span class="listing-location">📍 ${l.location || 'NZ'}</span><span>${l.shipping?.cost === 0 ? '🚚 Free shipping' : this.timeAgo(l.createdAt)}</span></div>
            </div>
        </div>`;
    },

    renderSearch() {
        return `<section class="search-section"><div class="container"><div class="search-bar">
            <div class="search-input-wrapper">
                <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <input type="text" class="search-input" id="searchInput" placeholder="Search..." value="${this.searchQuery}" onkeyup="if(event.key==='Enter')doSearch()">
            </div>
            <select class="category-select form-select" id="searchCat">
                <option value="">All Categories</option>
                ${this.categories.map(c => `<option value="${c.id}" ${this.searchCategory === c.id ? 'selected' : ''}>${c.name}</option>`).join('')}
            </select>
            <button class="btn btn-primary" onclick="doSearch()">Search</button>
        </div></div></section>`;
    },

    renderHome() {
        const feat = this.listings.filter(l => l.featured).slice(0, 8);
        const rec = this.listings.slice(0, 8);
        return `
        <section class="hero"><div class="container"><div class="hero-grid">
            <div class="hero-content">
                <h1>Buy & sell with<br><span class="gradient-text">Kiwis you trust</span></h1>
                <p class="lead">New Zealand's community marketplace. A safe buying and selling environment with easy communication between traders.</p>
                <div class="hero-actions">
                    <button class="btn btn-primary btn-lg" onclick="${this.currentUser ? "App.navigate('create')" : "openModal('signup')"}">+ Start Selling Free</button>
                    <button class="btn btn-secondary btn-lg" onclick="App.navigate('browse')">Explore</button>
                </div>
                <div class="hero-stats">
                    <div class="hero-stat"><h3>3K+</h3><p>Listings</p></div>
                    <div class="hero-stat"><h3>500+</h3><p>Sellers</p></div>
                    <div class="hero-stat"><h3>100%</h3><p>Kiwi Owned</p></div>
                </div>
            </div>
            <div class="hero-visual"><div class="hero-card">
                <div class="hero-card-image"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" alt="Product"></div>
                <h4>Premium Smart Watch</h4><div class="price">$299</div>
                <div class="meta"><span>📍 Auckland</span><span>⏰ 2h ago</span></div>
            </div></div>
        </div></div></section>
        ${this.renderSearch()}
        ${feat.length ? `<section class="section"><div class="container">
            <div class="section-header"><h2>Featured Listings</h2><button class="btn btn-ghost" onclick="App.navigate('browse')">View all →</button></div>
            <div class="listings-grid">${feat.map(l => this.renderCard(l)).join('')}</div>
        </div></section>` : ''}
        <section class="section" style="background:var(--white);"><div class="container">
            <div class="section-header"><h2>Browse Categories</h2><button class="btn btn-ghost" onclick="App.navigate('categories')">See all →</button></div>
            <div class="categories-grid">${this.categories.slice(0, 12).map(c => `<div class="category-card" onclick="App.searchCategory='${c.id}';App.navigate('browse');"><div class="category-icon">${c.icon}</div><h4>${c.name}</h4></div>`).join('')}</div>
        </div></section>
        ${rec.length ? `<section class="section"><div class="container">
            <div class="section-header"><h2>Just Listed</h2></div>
            <div class="listings-grid">${rec.map(l => this.renderCard(l)).join('')}</div>
        </div></section>` : `<section class="section"><div class="container">
            <div class="empty-state"><div class="empty-state-icon">📦</div><h3>No listings yet</h3><p>Seed the database with demo data!</p><button class="btn btn-primary" onclick="seedDatabase()">Seed Demo Data</button></div>
        </div></section>`}
        
        <!-- Trust Section -->
        <section class="section" style="background:var(--slate-900);color:var(--white);">
            <div class="container" style="text-align:center;">
                <h2 style="color:var(--white);margin-bottom:16px;">Why Kiwis Choose iSQROLL</h2>
                <p style="color:var(--slate-400);max-width:600px;margin:0 auto 48px;">We believe businesses and individual buyers and sellers are important contributors to the economic health of New Zealand.</p>
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:32px;">
                    <div><div style="font-size:40px;margin-bottom:12px;">🛡️</div><h4 style="color:var(--white);margin-bottom:8px;">Verified Users</h4><p style="color:var(--slate-400);font-size:14px;">Be verified at no cost. No scammers, no fake accounts.</p></div>
                    <div><div style="font-size:40px;margin-bottom:12px;">💬</div><h4 style="color:var(--white);margin-bottom:8px;">Easy Chat</h4><p style="color:var(--slate-400);font-size:14px;">Direct communication between buyers and sellers.</p></div>
                    <div><div style="font-size:40px;margin-bottom:12px;">🆓</div><h4 style="color:var(--white);margin-bottom:8px;">Free to List</h4><p style="color:var(--slate-400);font-size:14px;">Affordable memberships starting from $0.</p></div>
                    <div><div style="font-size:40px;margin-bottom:12px;">🇳🇿</div><h4 style="color:var(--white);margin-bottom:8px;">100% Kiwi</h4><p style="color:var(--slate-400);font-size:14px;">Designed for Kiwis, by Kiwis.</p></div>
                </div>
            </div>
        </section>`;
    },

    renderBrowse() {
        const l = this.getFiltered();
        const catName = this.searchCategory ? this.categories.find(c => c.id === this.searchCategory)?.name : '';
        return `${this.renderSearch()}<section class="section"><div class="container">
            <div class="section-header"><h2>${catName || 'All Listings'} <span class="text-muted">(${l.length})</span></h2>
            ${this.searchCategory ? `<button class="btn btn-ghost" onclick="App.searchCategory='';App.renderPage();">Clear filter ✕</button>` : ''}</div>
            ${l.length ? `<div class="listings-grid">${l.map(x => this.renderCard(x)).join('')}</div>` : `<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No listings found</h3><p>Try a different search or category</p></div>`}
        </div></section>`;
    },

    renderCategories() {
        return `<div class="page-header"><div class="container"><h1>All Categories</h1><p class="lead">Explore ${this.categories.length} categories of goods and services</p></div></div>
        <section class="section"><div class="container"><div class="categories-grid" style="grid-template-columns:repeat(4,1fr);">
            ${this.categories.map(c => {
                const count = this.listings.filter(l => l.category === c.id).length;
                return `<div class="category-card" onclick="App.searchCategory='${c.id}';App.navigate('browse');"><div class="category-icon">${c.icon}</div><h4>${c.name}</h4><p class="text-muted text-sm">${count} listings</p></div>`;
            }).join('')}
        </div></div></section>`;
    },

    renderListingDetail() {
        const l = this.listings.find(x => x.id === this.currentListingId);
        if (!l) return `<div class="container" style="padding:150px 0;text-align:center;"><h2>Listing not found</h2><button class="btn btn-primary" onclick="App.navigate('browse')">Browse</button></div>`;
        const cat = this.categories.find(c => c.id === l.category);
        const s = this.savedItems.includes(l.id);
        return `<div class="listing-detail"><div class="container">
            <div class="breadcrumb"><a onclick="App.navigate('home')">Home</a><span class="separator">›</span><a onclick="App.searchCategory='${l.category}';App.navigate('browse')">${cat?.name || l.category}</a><span class="separator">›</span><span>${l.title.substring(0, 30)}...</span></div>
            <div class="listing-detail-grid">
                <div class="listing-gallery">
                    <div class="gallery-main"><img src="${l.images?.[0] || ''}" alt="${l.title}"></div>
                    <div class="card" style="margin-top:24px;"><div class="card-header"><h3 class="card-title">Description</h3></div><div class="card-body"><div style="white-space:pre-line;color:var(--slate-600);">${l.description || 'No description provided.'}</div></div></div>
                </div>
                <div><div class="listing-info-card">
                    <div class="listing-info-header">
                        <div class="listing-info-price"><span class="current">$${(l.price || 0).toLocaleString()}</span>${l.wasPrice ? `<span class="was">$${l.wasPrice.toLocaleString()}</span>` : ''}</div>
                        <h1 class="listing-info-title">${l.title}</h1>
                        <div class="listing-info-meta">
                            <span class="listing-info-meta-item">📍 ${l.location}${l.suburb ? ', ' + l.suburb : ''}</span>
                            <span class="listing-info-meta-item">🕐 ${this.timeAgo(l.createdAt)}</span>
                            <span class="listing-info-meta-item">👁 ${l.views || 0} views</span>
                        </div>
                    </div>
                    <div class="listing-buying-options">
                        <div class="buying-option"><div class="buying-option-label"><strong>Buy Now</strong><br>Get it immediately</div><button class="btn btn-accent" onclick="${this.currentUser ? "showToast('Purchase simulated!')" : "openModal('login')"}">Buy Now</button></div>
                        ${l.acceptsOffers ? `<div class="buying-option"><div class="buying-option-label"><strong>Make Offer</strong><br>Seller accepts offers</div><button class="btn btn-secondary" onclick="${this.currentUser ? "makeOffer()" : "openModal('login')"}">Make Offer</button></div>` : ''}
                    </div>
                    <div class="listing-shipping-section">
                        <h4 style="font-size:14px;font-weight:600;margin-bottom:12px;">Shipping & Pick-up</h4>
                        ${l.shipping?.pickup ? `<div class="shipping-option"><div class="shipping-label"><div class="icon">📍</div>Pick up in ${l.location}</div><span class="shipping-price free">Free</span></div>` : ''}
                        ${l.shipping?.nationwide ? `<div class="shipping-option"><div class="shipping-label"><div class="icon">🚚</div>Nationwide</div><span class="shipping-price ${l.shipping.cost === 0 ? 'free' : ''}">${l.shipping.cost === 0 ? 'Free' : '$' + l.shipping.cost}</span></div>` : ''}
                        ${l.shipping?.note ? `<p class="text-sm text-muted" style="margin-top:8px;">${l.shipping.note}</p>` : ''}
                    </div>
                    <div class="seller-card">
                        <div class="seller-info">
                            <div class="seller-avatar">${(l.sellerName || 'S')[0]}</div>
                            <div class="seller-details"><h4>${l.sellerName || 'Seller'} ${l.sellerVerified ? '<span style="color:var(--primary);">✓</span>' : ''}</h4><p>${l.location}</p>
                                <div class="seller-stats"><span class="seller-rating">⭐ ${l.sellerRating || 0}</span><span class="seller-stat">(${l.sellerReviews || 0} reviews)</span></div>
                            </div>
                        </div>
                        <div class="seller-actions">
                            <button class="btn btn-primary" onclick="${this.currentUser ? "showToast('Message sent!')" : "openModal('login')"}">💬 Message</button>
                            <button class="btn btn-secondary" onclick="App.toggleSave('${l.id}')">${s ? '❤️ Saved' : '🤍 Save'}</button>
                        </div>
                    </div>
                </div>
                <div class="card" style="margin-top:16px;"><div class="card-body" style="padding:16px;">
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:14px;">
                        <div><span class="text-muted">Condition:</span> <strong>${l.condition || 'N/A'}</strong></div>
                        <div><span class="text-muted">Brand:</span> <strong>${l.brand || 'N/A'}</strong></div>
                    </div>
                </div></div>
            </div>
        </div></div></div>`;
    },

    renderProfile() {
        if (!this.currentUser) { openModal('login'); return ''; }
        return `<div class="page-header"><div class="container"><h1>My Profile</h1></div></div>
        <div class="container" style="padding:40px 0;"><div class="card" style="max-width:600px;"><div class="card-body" style="text-align:center;padding:40px;">
            <div class="profile-avatar" style="margin:0 auto 20px;">${(this.currentUser.displayName || this.currentUser.email)[0].toUpperCase()}</div>
            <h3>${this.currentUser.displayName || 'User'}</h3><p class="text-muted">${this.currentUser.email}</p>
            <div style="display:flex;gap:12px;justify-content:center;margin-top:24px;">
                <button class="btn btn-primary" onclick="App.navigate('create')">+ Create Listing</button>
                <button class="btn btn-secondary" onclick="App.logout()">Log Out</button>
            </div>
        </div></div></div>`;
    },

    renderMyListings() {
        if (!this.currentUser) { openModal('login'); return ''; }
        const my = this.listings.filter(l => l.sellerId === this.currentUser.uid);
        return `<div class="page-header"><div class="container"><h1>My Listings</h1></div></div>
        <div class="container section">${my.length ? `<div class="listings-grid">${my.map(l => this.renderCard(l)).join('')}</div>` : `<div class="empty-state"><div class="empty-state-icon">📦</div><h3>No listings yet</h3><p>Start selling today - it's free!</p><button class="btn btn-primary" onclick="App.navigate('create')">Create Listing</button></div>`}</div>`;
    },

    renderSaved() {
        if (!this.currentUser) { openModal('login'); return ''; }
        const sv = this.listings.filter(l => this.savedItems.includes(l.id));
        return `<div class="page-header"><div class="container"><h1>Saved Items</h1></div></div>
        <div class="container section">${sv.length ? `<div class="listings-grid">${sv.map(l => this.renderCard(l)).join('')}</div>` : `<div class="empty-state"><div class="empty-state-icon">❤️</div><h3>No saved items</h3><p>Click the heart on listings to save them for later</p><button class="btn btn-primary" onclick="App.navigate('browse')">Browse Listings</button></div>`}</div>`;
    },

    renderCreateListing() {
        if (!this.currentUser) { openModal('login'); return ''; }
        return `<div class="page-header"><div class="container"><h1>Create Listing</h1><p class="lead">List your item for free</p></div></div>
        <div class="container" style="max-width:700px;padding:40px 24px 80px;"><div class="card"><div class="card-body">
            <form onsubmit="createListing(event)">
                <div class="form-group"><label class="form-label">Title *</label><input type="text" class="form-input" id="listingTitle" placeholder="e.g. iPhone 15 Pro Max - Excellent Condition" required></div>
                <div class="form-row">
                    <div class="form-group"><label class="form-label">Category</label><select class="form-input form-select" id="listingCat">${this.categories.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select></div>
                    <div class="form-group"><label class="form-label">Price ($)</label><input type="number" class="form-input" id="listingPrice" placeholder="0" required></div>
                </div>
                <div class="form-group"><label class="form-label">Description</label><textarea class="form-input form-textarea" id="listingDesc" placeholder="Describe your item - condition, features, reason for selling..."></textarea></div>
                <div class="form-group"><label class="form-label">Location</label><select class="form-input form-select" id="listingLoc">${NZ_REGIONS.map(r => `<option>${r}</option>`).join('')}</select></div>
                <div class="form-group"><label class="form-label">Image URL</label><input type="url" class="form-input" id="listingImage" placeholder="https://..."></div>
                <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">Publish Listing</button>
            </form>
        </div></div></div>`;
    }
};

// ============================================
// HELPER FUNCTIONS
// ============================================

function openModal(id) { 
    document.getElementById(id + 'Modal')?.classList.add('active'); 
    document.body.style.overflow = 'hidden'; 
}

function closeModal(id) { 
    document.getElementById(id + 'Modal')?.classList.remove('active'); 
    document.body.style.overflow = ''; 
}

function toggleDropdown() { 
    document.getElementById('userDropdown')?.classList.toggle('active'); 
}

function toggleMobileMenu() { 
    document.getElementById('mobileNav')?.classList.toggle('active'); 
}

function showToast(msg, type = 'success') { 
    const t = document.getElementById('toast');
    const m = document.getElementById('toastMsg'); 
    if (t && m) { 
        m.textContent = msg; 
        t.className = 'toast show ' + type; 
        setTimeout(() => t.classList.remove('show'), 3000); 
    } 
}

function doSearch() { 
    App.searchQuery = document.getElementById('searchInput')?.value || ''; 
    App.searchCategory = document.getElementById('searchCat')?.value || ''; 
    App.navigate('browse'); 
}

function handleLogin(e) { 
    e.preventDefault(); 
    App.login(
        document.getElementById('loginEmail').value, 
        document.getElementById('loginPassword').value
    ); 
}

function handleSignup(e) { 
    e.preventDefault(); 
    App.signup(
        document.getElementById('signupEmail').value, 
        document.getElementById('signupPassword').value, 
        document.getElementById('signupName').value
    ); 
}

async function createListing(e) {
    e.preventDefault();
    if (!App.currentUser) return;
    try {
        await db.collection('listings').add({
            title: document.getElementById('listingTitle').value,
            price: parseInt(document.getElementById('listingPrice').value),
            category: document.getElementById('listingCat').value,
            description: document.getElementById('listingDesc').value,
            location: document.getElementById('listingLoc').value,
            images: [document.getElementById('listingImage').value || 'https://via.placeholder.com/800x600'],
            sellerId: App.currentUser.uid,
            sellerName: App.currentUser.displayName || 'User',
            status: 'active',
            shipping: { pickup: true, nationwide: true, cost: 0 },
            acceptsOffers: true,
            views: 0,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        showToast('Listing created!');
        await App.loadListings();
        App.navigate('my-listings');
    } catch (e) { 
        showToast(e.message, 'error'); 
    }
}

function makeOffer() { 
    const o = prompt('Enter your offer amount ($):'); 
    if (o && !isNaN(o)) {
        showToast('Offer of $' + parseInt(o).toLocaleString() + ' sent to seller!'); 
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

document.addEventListener('click', e => {
    if (!e.target.closest('.user-menu')) {
        document.getElementById('userDropdown')?.classList.remove('active');
    }
    if (!e.target.closest('.mobile-menu-btn') && !e.target.closest('.mobile-nav')) {
        document.getElementById('mobileNav')?.classList.remove('active');
    }
});

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => App.init());
