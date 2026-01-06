// ============================================
// iSQROLL - Main Application
// ============================================

// ============================================
// COMPONENTS (Header & Footer)
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
                                <div class="dropdown-item" onclick="App.navigate('messages')">💬 Messages</div>
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
                        <p>A marketplace for the people. Buy and sell with Kiwis you can trust.</p>
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
                        <h4 class="footer-title">Company</h4>
                        <ul class="footer-links">
                            <li><a onclick="App.navigate('about')">About Us</a></li>
                            <li><a onclick="App.navigate('faq')">FAQ</a></li>
                            <li><a onclick="App.navigate('contact')">Contact</a></li>
                            <li><a onclick="App.navigate('pricing')">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="footer-title">Legal</h4>
                        <ul class="footer-links">
                            <li><a onclick="App.navigate('privacy')">Privacy Policy</a></li>
                            <li><a onclick="App.navigate('terms')">Terms of Use</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>© 2024 iSQROLL Limited. All rights reserved. NZBN 9429051480974</p>
                    <p style="margin-top:8px;font-size:12px;">Powered by <a href="https://sidequestdigital.co.nz" target="_blank" style="color:var(--primary);">Sidequest Digital</a></p>
                </div>
            </div>
        </footer>`;
    },

    modals() {
        return `
        <!-- Login Modal -->
        <div class="modal-overlay" id="loginModal">
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">Welcome back</h3>
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
                            <input type="email" class="form-input" id="loginEmail" value="demo@isqroll.co.nz" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-input" id="loginPassword" value="demo123" required>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width:100%;">Log In</button>
                    </form>
                    <p class="modal-footer-text">Don't have an account? <a onclick="closeModal('login');openModal('signup');">Sign up</a></p>
                </div>
            </div>
        </div>

        <!-- Signup Modal -->
        <div class="modal-overlay" id="signupModal">
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">Create Account</h3>
                    <button class="modal-close" onclick="closeModal('signup')">✕</button>
                </div>
                <div class="modal-body">
                    <form onsubmit="handleSignup(event)">
                        <div class="form-group">
                            <label class="form-label">Name</label>
                            <input type="text" class="form-input" id="signupName" placeholder="Your name" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-input" id="signupEmail" placeholder="you@example.com" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-input" id="signupPassword" placeholder="At least 6 characters" required minlength="6">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Location</label>
                            <select class="form-input form-select" id="signupLocation">
                                ${NZ_REGIONS.map(r => `<option>${r}</option>`).join('')}
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width:100%;">Create Account</button>
                    </form>
                    <p class="modal-footer-text">Already have an account? <a onclick="closeModal('signup');openModal('login');">Log in</a></p>
                </div>
            </div>
        </div>

        <!-- Share Modal -->
        <div class="modal-overlay" id="shareModal">
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">Share this listing</h3>
                    <button class="modal-close" onclick="closeModal('share')">✕</button>
                </div>
                <div class="modal-body">
                    <div class="share-buttons">
                        <button class="btn btn-secondary" onclick="shareTo('facebook')" style="width:100%;margin-bottom:12px;">
                            📘 Share on Facebook
                        </button>
                        <button class="btn btn-secondary" onclick="shareTo('twitter')" style="width:100%;margin-bottom:12px;">
                            🐦 Share on Twitter
                        </button>
                        <button class="btn btn-secondary" onclick="shareTo('email')" style="width:100%;margin-bottom:12px;">
                            ✉️ Share via Email
                        </button>
                        <button class="btn btn-secondary" onclick="copyListingLink()" style="width:100%;">
                            🔗 Copy Link
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Message Modal -->
        <div class="modal-overlay" id="messageModal">
            <div class="modal">
                <div class="modal-header">
                    <h3 class="modal-title">Send Message</h3>
                    <button class="modal-close" onclick="closeModal('message')">✕</button>
                </div>
                <div class="modal-body">
                    <form onsubmit="sendMessage(event)">
                        <div class="form-group">
                            <label class="form-label">Your Message</label>
                            <textarea class="form-input form-textarea" id="messageText" placeholder="Hi, I'm interested in this listing..." required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width:100%;">Send Message</button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Toast -->
        <div class="toast" id="toast"><span id="toastMsg"></span></div>`;
    }
};

// ============================================
// MAIN APP OBJECT
// ============================================

const App = {
    currentUser: null,
    listings: [],
    categories: [],
    categoryGroups: [],
    savedItems: [],
    messages: [],
    currentPage: 'home',
    currentListingId: null,
    searchQuery: '',
    searchCategory: '',
    searchGroup: '',

    async init() {
        console.log('🚀 Initializing iSQROLL...');
        
        // Load data FIRST before any rendering
        await this.loadCategories();
        await this.loadListings();
        
        // Now set up auth listener
        auth.onAuthStateChanged(user => {
            this.currentUser = user;
            if (user) {
                this.loadUserData();
            }
            this.render();
        });

        this.handleRoute();
        window.addEventListener('popstate', () => this.handleRoute());
        
        console.log('✅ App initialized');
        console.log(`📁 ${this.categories.length} categories, ${this.categoryGroups.length} groups, ${this.listings.length} listings`);
    },

    async loadCategories() {
        try {
            const snap = await db.collection('categories').get();
            this.categories = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            // Sort client-side by order
            this.categories.sort((a, b) => (a.order || 0) - (b.order || 0));
            
            // Load category groups
            const groupSnap = await db.collection('categoryGroups').get();
            this.categoryGroups = groupSnap.docs.map(d => ({ id: d.id, ...d.data() }));
            
            // Fallback to local data if empty
            if (this.categories.length === 0) {
                console.log('No categories in Firestore, using local');
                this.categories = CATEGORIES;
            }
            if (this.categoryGroups.length === 0) {
                console.log('No category groups in Firestore, using local');
                this.categoryGroups = CATEGORY_GROUPS;
            }
            
            console.log(`📁 Loaded ${this.categories.length} categories, ${this.categoryGroups.length} groups`);
        } catch (e) {
            console.log('Using local categories:', e.message);
            this.categories = CATEGORIES;
            this.categoryGroups = CATEGORY_GROUPS;
        }
    },

    async loadListings() {
        try {
            const snap = await db.collection('listings')
                .where('status', '==', 'active')
                .get();
            this.listings = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            // Sort client-side
            this.listings.sort((a, b) => {
                const aTime = a.createdAt?.toDate?.() || new Date(0);
                const bTime = b.createdAt?.toDate?.() || new Date(0);
                return bTime - aTime;
            });
            console.log(`📦 Loaded ${this.listings.length} listings`);
        } catch (e) {
            console.log('Error loading listings:', e.message);
            this.listings = [];
        }
    },

    async loadUserData() {
        if (!this.currentUser) return;
        try {
            // Load saved items
            const savedSnap = await db.collection('users').doc(this.currentUser.uid)
                .collection('saved').get();
            this.savedItems = savedSnap.docs.map(d => d.id);
        } catch (e) {
            console.log('Error loading user data:', e.message);
        }
    },

    navigate(page, param = null) {
        this.currentPage = page;
        if (param) this.currentListingId = param;
        const url = param ? `#${page}/${param}` : `#${page}`;
        history.pushState({ page, param }, '', url);
        this.render();
        window.scrollTo(0, 0);
    },

    handleRoute() {
        const hash = window.location.hash.slice(1) || 'home';
        const [page, param] = hash.split('/');
        this.currentPage = page;
        if (param) this.currentListingId = param;
        this.render();
    },

    render() {
        document.body.innerHTML = Components.header() + 
            '<div id="app">' + this.renderPage() + '</div>' + 
            Components.footer() + 
            Components.modals();
    },

    renderPage() {
        switch (this.currentPage) {
            case 'home': return this.renderHome();
            case 'browse': return this.renderBrowse();
            case 'categories': return this.renderCategories();
            case 'listing': return this.renderListingDetail();
            case 'profile': return this.renderProfile();
            case 'edit-profile': return this.renderEditProfile();
            case 'my-listings': return this.renderMyListings();
            case 'saved': return this.renderSaved();
            case 'messages': return this.renderMessages();
            case 'create': return this.renderCreateListing();
            case 'pricing': return this.renderPricing();
            // Static pages from Pages object
            case 'about': return Pages.about();
            case 'how-it-works': return Pages.howItWorks();
            case 'seller-guide': return Pages.sellerGuide();
            case 'faq': return Pages.faq();
            case 'contact': return Pages.contact();
            case 'privacy': return Pages.privacy();
            case 'terms': return Pages.terms();
            default: return this.renderHome();
        }
    },

    async login(email, password) {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            closeModal('login');
            showToast('Welcome back!');
        } catch (e) {
            showToast(e.message, 'error');
        }
    },

    async signup(email, password, name) {
        try {
            const cred = await auth.createUserWithEmailAndPassword(email, password);
            await cred.user.updateProfile({ displayName: name });
            const location = document.getElementById('signupLocation')?.value || 'Auckland';
            await db.collection('users').doc(cred.user.uid).set({
                email, displayName: name, location,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            closeModal('signup');
            showToast('Welcome to iSQROLL!');
        } catch (e) {
            showToast(e.message, 'error');
        }
    },

    async logout() {
        await auth.signOut();
        this.savedItems = [];
        this.navigate('home');
        showToast('Logged out');
    },

    getFiltered() {
        let results = [...this.listings];
        if (this.searchGroup) {
            const groupCats = this.categories.filter(c => c.group === this.searchGroup).map(c => c.id);
            results = results.filter(l => groupCats.includes(l.category));
        }
        if (this.searchCategory) {
            results = results.filter(l => l.category === this.searchCategory);
        }
        if (this.searchQuery) {
            const q = this.searchQuery.toLowerCase();
            results = results.filter(l => 
                l.title?.toLowerCase().includes(q) || 
                l.description?.toLowerCase().includes(q) ||
                l.make?.toLowerCase().includes(q) ||
                l.model?.toLowerCase().includes(q)
            );
        }
        return results;
    },

    async toggleSave(id) {
        if (!this.currentUser) { openModal('login'); return; }
        const idx = this.savedItems.indexOf(id);
        if (idx === -1) {
            this.savedItems.push(id);
            await db.collection('users').doc(this.currentUser.uid)
                .collection('saved').doc(id).set({ savedAt: firebase.firestore.FieldValue.serverTimestamp() });
            showToast('Added to watchlist!');
        } else {
            this.savedItems.splice(idx, 1);
            await db.collection('users').doc(this.currentUser.uid)
                .collection('saved').doc(id).delete();
            showToast('Removed from watchlist');
        }
        this.render();
    },

    timeAgo(ts) {
        if (!ts) return '';
        const date = ts.toDate ? ts.toDate() : new Date(ts);
        const secs = Math.floor((Date.now() - date) / 1000);
        if (secs < 60) return 'Just now';
        if (secs < 3600) return Math.floor(secs / 60) + 'm ago';
        if (secs < 86400) return Math.floor(secs / 3600) + 'h ago';
        if (secs < 604800) return Math.floor(secs / 86400) + 'd ago';
        return date.toLocaleDateString('en-NZ');
    },

    // ============================================
    // RENDER HELPERS
    // ============================================

    renderCard(l) {
        const saved = this.savedItems.includes(l.id);
        const priceDisplay = l.priceDisplay || (l.price ? `$${l.price.toLocaleString()}` : 'Price on Application');
        return `
        <div class="listing-card" onclick="App.navigate('listing','${l.id}')">
            <div class="listing-image">
                <img src="${l.images?.[0] || 'https://placehold.co/400x300/e2e8f0/64748b?text=No+Image'}" alt="${l.title}" loading="lazy">
                ${l.featured ? '<span class="listing-badge">Featured</span>' : ''}
                ${l.listingType === 'vehicle' ? '<span class="listing-badge" style="background:var(--slate-800);">Vehicle</span>' : ''}
                ${l.listingType === 'property' ? '<span class="listing-badge" style="background:var(--primary);">Property</span>' : ''}
                <button class="listing-save ${saved ? 'saved' : ''}" onclick="event.stopPropagation();App.toggleSave('${l.id}')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
            </div>
            <div class="listing-content">
                <h3 class="listing-title">${l.title}</h3>
                <div class="listing-price">${priceDisplay}${l.wasPrice ? `<span class="was">$${l.wasPrice.toLocaleString()}</span>` : ''}</div>
                <div class="listing-meta">
                    <span class="listing-location">📍 ${l.location || 'NZ'}</span>
                    <span>👁 ${l.views || 0}</span>
                </div>
            </div>
        </div>`;
    },

    renderSearch() {
        return `
        <section class="search-section">
            <div class="container">
                <div class="search-bar">
                    <div class="search-input-wrapper">
                        <svg class="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                        <input type="text" class="search-input" id="searchInput" placeholder="Search listings..." value="${this.searchQuery}">
                    </div>
                    <select class="category-select form-select" id="searchCat">
                        <option value="">All Categories</option>
                        ${this.categoryGroups.map(g => `
                            <optgroup label="${g.name}">
                                ${this.categories.filter(c => c.group === g.id).map(c => 
                                    `<option value="${c.id}" ${this.searchCategory === c.id ? 'selected' : ''}>${c.name}</option>`
                                ).join('')}
                            </optgroup>
                        `).join('')}
                    </select>
                    <button class="btn btn-primary" onclick="doSearch()">Search</button>
                </div>
            </div>
        </section>`;
    },

    // ============================================
    // PAGE RENDERS
    // ============================================

    renderHome() {
        const featured = this.listings.filter(l => l.featured).slice(0, 8);
        const vehicles = this.listings.filter(l => l.listingType === 'vehicle').slice(0, 4);
        const property = this.listings.filter(l => l.listingType === 'property').slice(0, 4);
        const recent = this.listings.slice(0, 8);

        return `
        <section class="hero">
            <div class="container">
                <div class="hero-grid">
                    <div class="hero-content">
                        <h1>Buy & sell with<br><span class="gradient-text">Kiwis you trust</span></h1>
                        <p class="lead">New Zealand's community marketplace. Vehicles, property, farming equipment, and more.</p>
                        <div class="hero-actions">
                            <button class="btn btn-primary btn-lg" onclick="${this.currentUser ? "App.navigate('create')" : "openModal('signup')"}">+ Start Selling</button>
                            <button class="btn btn-secondary btn-lg" onclick="App.navigate('browse')">Explore</button>
                        </div>
                        <div class="hero-stats">
                            <div class="hero-stat"><h3>3K+</h3><p>Listings</p></div>
                            <div class="hero-stat"><h3>500+</h3><p>Users</p></div>
                            <div class="hero-stat"><h3>100%</h3><p>Kiwi</p></div>
                        </div>
                    </div>
                    <div class="hero-visual">
                        ${featured[0] ? `
                        <div class="hero-card" onclick="App.navigate('listing','${featured[0].id}')">
                            <div class="hero-card-image"><img src="${featured[0].images?.[0]}" alt="${featured[0].title}"></div>
                            <h4>${featured[0].title.substring(0, 30)}...</h4>
                            <div class="price">$${(featured[0].price || 0).toLocaleString()}</div>
                            <div class="meta"><span>📍 ${featured[0].location}</span></div>
                        </div>` : ''}
                    </div>
                </div>
            </div>
        </section>
        
        ${this.renderSearch()}
        
        <!-- Category Groups -->
        <section class="section" style="background:var(--white);">
            <div class="container">
                <div class="section-header"><h2>Browse by Category</h2><button class="btn btn-ghost" onclick="App.navigate('categories')">See all →</button></div>
                <div class="category-groups-grid">
                    ${this.categoryGroups.map(g => `
                        <div class="category-group-card" onclick="App.searchGroup='${g.id}';App.searchCategory='';App.navigate('browse');">
                            <div class="category-group-icon">${g.icon}</div>
                            <h4>${g.name}</h4>
                            <p class="text-muted text-sm">${this.categories.filter(c => c.group === g.id).length} categories</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        ${vehicles.length ? `
        <section class="section">
            <div class="container">
                <div class="section-header"><h2>🚗 Vehicles</h2><button class="btn btn-ghost" onclick="App.searchGroup='automotive';App.navigate('browse')">View all →</button></div>
                <div class="listings-grid">${vehicles.map(l => this.renderCard(l)).join('')}</div>
            </div>
        </section>` : ''}

        ${property.length ? `
        <section class="section" style="background:var(--white);">
            <div class="container">
                <div class="section-header"><h2>🏠 Property</h2><button class="btn btn-ghost" onclick="App.searchGroup='property';App.navigate('browse')">View all →</button></div>
                <div class="listings-grid">${property.map(l => this.renderCard(l)).join('')}</div>
            </div>
        </section>` : ''}

        ${recent.length ? `
        <section class="section">
            <div class="container">
                <div class="section-header"><h2>Just Listed</h2></div>
                <div class="listings-grid">${recent.map(l => this.renderCard(l)).join('')}</div>
            </div>
        </section>` : `
        <section class="section"><div class="container">
            <div class="empty-state"><div class="empty-state-icon">📦</div><h3>No listings yet</h3><p>Seed the database with demo data!</p><button class="btn btn-primary" onclick="seedDatabase()">Seed Demo Data</button></div>
        </div></section>`}
        
        <!-- Trust Section -->
        <section class="section" style="background:var(--slate-900);color:var(--white);">
            <div class="container" style="text-align:center;">
                <h2 style="color:var(--white);margin-bottom:16px;">Why Kiwis Choose iSQROLL</h2>
                <p style="color:var(--slate-400);max-width:600px;margin:0 auto 48px;">A marketplace designed for Kiwis, by Kiwis.</p>
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:32px;">
                    <div><div style="font-size:40px;margin-bottom:12px;">🛡️</div><h4 style="color:var(--white);margin-bottom:8px;">Verified Users</h4><p style="color:var(--slate-400);font-size:14px;">Free verification. No scammers.</p></div>
                    <div><div style="font-size:40px;margin-bottom:12px;">💬</div><h4 style="color:var(--white);margin-bottom:8px;">Easy Chat</h4><p style="color:var(--slate-400);font-size:14px;">Direct buyer-seller communication.</p></div>
                    <div><div style="font-size:40px;margin-bottom:12px;">🆓</div><h4 style="color:var(--white);margin-bottom:8px;">Free to Start</h4><p style="color:var(--slate-400);font-size:14px;">Memberships from $0.</p></div>
                    <div><div style="font-size:40px;margin-bottom:12px;">🇳🇿</div><h4 style="color:var(--white);margin-bottom:8px;">100% Kiwi</h4><p style="color:var(--slate-400);font-size:14px;">NZ owned and operated.</p></div>
                </div>
            </div>
        </section>`;
    },

    renderBrowse() {
        const listings = this.getFiltered();
        const groupName = this.searchGroup ? this.categoryGroups.find(g => g.id === this.searchGroup)?.name : '';
        const catName = this.searchCategory ? this.categories.find(c => c.id === this.searchCategory)?.name : '';
        const title = catName || groupName || 'All Listings';

        return `
        ${this.renderSearch()}
        <section class="section"><div class="container">
            <div class="section-header">
                <h2>${title} <span class="text-muted">(${listings.length})</span></h2>
                ${(this.searchCategory || this.searchGroup || this.searchQuery) ? 
                    `<button class="btn btn-ghost" onclick="App.searchCategory='';App.searchGroup='';App.searchQuery='';App.render();">Clear filters ✕</button>` : ''}
            </div>
            ${listings.length ? 
                `<div class="listings-grid">${listings.map(l => this.renderCard(l)).join('')}</div>` : 
                `<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No listings found</h3><p>Try a different search</p></div>`
            }
        </div></section>`;
    },

    renderCategories() {
        // Debug: log what we have
        console.log('Categories:', this.categories.length, 'Groups:', this.categoryGroups.length);
        
        // If categories haven't loaded yet, use local data
        const cats = this.categories.length > 0 ? this.categories : CATEGORIES;
        const groups = this.categoryGroups.length > 0 ? this.categoryGroups : CATEGORY_GROUPS;
        
        return `
        <div class="page-header"><div class="container"><h1>All Categories</h1><p class="lead">Browse ${cats.length} categories across ${groups.length} groups</p></div></div>
        <section class="section"><div class="container">
            ${groups.map(g => {
                const groupCats = cats.filter(c => c.group === g.id);
                return `
                <div style="margin-bottom:48px;">
                    <h2 style="margin-bottom:24px;">${g.icon} ${g.name}</h2>
                    <div class="categories-grid">
                        ${groupCats.map(c => {
                            const count = this.listings.filter(l => l.category === c.id).length;
                            return `<div class="category-card" onclick="App.searchCategory='${c.id}';App.searchGroup='';App.navigate('browse');">
                                <div class="category-icon">${c.icon}</div>
                                <h4>${c.name}</h4>
                                <p class="text-muted text-sm">${count} listings</p>
                            </div>`;
                        }).join('')}
                    </div>
                </div>`;
            }).join('')}
        </div></section>`;
    },

    renderListingDetail() {
        const l = this.listings.find(x => x.id === this.currentListingId);
        if (!l) return `<div class="container" style="padding:150px 0;text-align:center;"><h2>Listing not found</h2><button class="btn btn-primary" onclick="App.navigate('browse')">Browse</button></div>`;
        
        // Route to correct detail view based on listing type
        if (l.listingType === 'vehicle') return this.renderVehicleDetail(l);
        if (l.listingType === 'property') return this.renderPropertyDetail(l);
        return this.renderGeneralDetail(l);
    },

    renderVehicleDetail(l) {
        const cat = this.categories.find(c => c.id === l.category);
        const saved = this.savedItems.includes(l.id);
        
        return `
        <div class="listing-detail"><div class="container">
            <div class="breadcrumb">
                <a onclick="App.navigate('home')">Home</a><span class="separator">›</span>
                <a onclick="App.searchGroup='automotive';App.navigate('browse')">Automotive</a><span class="separator">›</span>
                <a onclick="App.searchCategory='${l.category}';App.navigate('browse')">${cat?.name || 'Vehicle'}</a><span class="separator">›</span>
                <span>${l.title.substring(0, 30)}...</span>
            </div>
            
            <div class="listing-detail-grid">
                <!-- Left Column - Gallery & Details -->
                <div>
                    <div class="listing-gallery">
                        <div class="gallery-main"><img src="${l.images?.[0] || ''}" alt="${l.title}"></div>
                        ${l.images?.length > 1 ? `
                        <div class="gallery-thumbs">
                            ${l.images.map((img, i) => `<div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="document.querySelector('.gallery-main img').src='${img}'"><img src="${img}" alt=""></div>`).join('')}
                        </div>` : ''}
                    </div>
                    <p class="text-muted text-sm" style="margin-top:8px;">👁 ${l.views || 0} views</p>
                    
                    <!-- Vehicle Information -->
                    <div class="card" style="margin-top:24px;">
                        <div class="card-header"><h3 class="card-title">Vehicle Information</h3></div>
                        <div class="card-body">
                            <div class="detail-grid">
                                ${l.make ? `<div class="detail-item"><span class="detail-label">Make</span><span class="detail-value">${l.make}</span></div>` : ''}
                                ${l.model ? `<div class="detail-item"><span class="detail-label">Model</span><span class="detail-value">${l.model}</span></div>` : ''}
                                ${l.bodyType ? `<div class="detail-item"><span class="detail-label">Body Style</span><span class="detail-value">${l.bodyType}</span></div>` : ''}
                                ${l.year ? `<div class="detail-item"><span class="detail-label">Year</span><span class="detail-value">${l.year}</span></div>` : ''}
                                ${l.odometer ? `<div class="detail-item"><span class="detail-label">Odometer</span><span class="detail-value">${l.odometer.toLocaleString()} km</span></div>` : ''}
                                ${l.colour ? `<div class="detail-item"><span class="detail-label">Colour</span><span class="detail-value">${l.colour}</span></div>` : ''}
                                ${l.condition ? `<div class="detail-item"><span class="detail-label">Condition</span><span class="detail-value">${l.condition}</span></div>` : ''}
                                ${l.doors ? `<div class="detail-item"><span class="detail-label">Doors</span><span class="detail-value">${l.doors}</span></div>` : ''}
                                ${l.previousOwners ? `<div class="detail-item"><span class="detail-label">Previous Owners</span><span class="detail-value">${l.previousOwners}</span></div>` : ''}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Features -->
                    <div class="card" style="margin-top:16px;">
                        <div class="card-header"><h3 class="card-title">Features</h3></div>
                        <div class="card-body">
                            <div class="detail-grid">
                                ${l.engineCC ? `<div class="detail-item"><span class="detail-label">Engine Size</span><span class="detail-value">${l.engineCC}cc</span></div>` : ''}
                                ${l.fuelType ? `<div class="detail-item"><span class="detail-label">Fuel Type</span><span class="detail-value">${l.fuelType}</span></div>` : ''}
                                ${l.transmission ? `<div class="detail-item"><span class="detail-label">Transmission</span><span class="detail-value">${l.transmission}</span></div>` : ''}
                                ${l.wofExpiry ? `<div class="detail-item"><span class="detail-label">WOF Expiry</span><span class="detail-value">${l.wofExpiry}</span></div>` : ''}
                                ${l.regoExpiry ? `<div class="detail-item"><span class="detail-label">Registration Expiry</span><span class="detail-value">${l.regoExpiry}</span></div>` : ''}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Background Check -->
                    ${(l.stolenCheck || l.damageCheck) ? `
                    <div class="card" style="margin-top:16px;">
                        <div class="card-header"><h3 class="card-title">Background Check</h3></div>
                        <div class="card-body">
                            ${l.stolenCheck ? `<div class="check-item ${l.stolenCheck === 'Passed' ? 'passed' : 'failed'}"><span>Stolen vehicle check</span><span class="check-status">✓ ${l.stolenCheck}</span></div>` : ''}
                            ${l.damageCheck ? `<div class="check-item ${l.damageCheck === 'Passed' ? 'passed' : 'failed'}"><span>Damaged import check</span><span class="check-status">✓ ${l.damageCheck}</span></div>` : ''}
                        </div>
                    </div>` : ''}
                    
                    <!-- Description -->
                    <div class="card" style="margin-top:16px;">
                        <div class="card-header"><h3 class="card-title">Description</h3></div>
                        <div class="card-body"><div style="white-space:pre-line;color:var(--slate-600);">${l.description || 'No description provided.'}</div></div>
                    </div>
                </div>
                
                <!-- Right Column - Price & Seller -->
                <div>
                    <div class="listing-info-card">
                        <div class="listing-detail-actions">
                            <button class="btn btn-ghost" onclick="openShareModal('${l.id}')">↗ Share</button>
                            <button class="btn btn-ghost" onclick="App.toggleSave('${l.id}')">${saved ? '❤️ Saved' : '🤍 Add to watchlist'}</button>
                        </div>
                        
                        <div class="listing-info-header">
                            <h1 class="listing-info-title">${l.title}</h1>
                            <div class="listing-info-price">
                                <span class="current">${l.priceDisplay || '$' + (l.price || 0).toLocaleString()}</span>
                            </div>
                        </div>
                        
                        <div class="listing-buying-options">
                            <button class="btn btn-accent btn-lg" style="width:100%;" onclick="${this.currentUser ? "openModal('message')" : "openModal('login')"}">Contact Seller</button>
                            ${l.price ? `<button class="btn btn-primary btn-lg" style="width:100%;margin-top:12px;" onclick="${this.currentUser ? `showToast('Purchase request sent!')` : "openModal('login')"}">Buy for NZ$ ${l.price.toLocaleString()}</button>` : ''}
                        </div>
                        
                        <div class="listing-shipping-section">
                            <h4>Shipping</h4>
                            <p class="text-muted">To be arranged</p>
                        </div>
                        
                        <div class="listing-shipping-section">
                            <h4>Payment Option</h4>
                            <p class="text-muted">To be arranged</p>
                        </div>
                        
                        <div class="listing-shipping-section">
                            <h4>Seller's Location</h4>
                            <div class="location-map">
                                <div style="background:var(--slate-100);height:150px;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;">
                                    <span class="text-muted">📍 ${l.location}${l.suburb ? ', ' + l.suburb : ''}, New Zealand</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Seller Card -->
                        <div class="seller-card">
                            <div class="seller-info">
                                ${l.sellerLogo ? `<img src="${l.sellerLogo}" alt="${l.sellerName}" class="seller-logo">` : `<div class="seller-avatar">${(l.sellerName || 'S')[0]}</div>`}
                                <div class="seller-details">
                                    <h4>${l.sellerName || 'Seller'} ${l.sellerVerified ? '<span style="color:var(--primary);">✓</span>' : ''}</h4>
                                    ${l.sellerRating ? `<div class="seller-rating">⭐⭐⭐⭐⭐ <span class="text-muted">${l.sellerRating}% Positive Feedback</span></div>` : ''}
                                    <p class="text-muted text-sm">${l.location}, New Zealand</p>
                                </div>
                            </div>
                            ${l.sellerWebsite ? `<a href="${l.sellerWebsite}" target="_blank" class="btn btn-ghost" style="width:100%;margin-top:12px;">Visit Website</a>` : ''}
                            <a onclick="viewSellerListings('${l.sellerId}')" class="btn btn-ghost" style="width:100%;margin-top:8px;">View seller's other listings</a>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>`;
    },

    renderPropertyDetail(l) {
        const cat = this.categories.find(c => c.id === l.category);
        const saved = this.savedItems.includes(l.id);
        
        return `
        <div class="listing-detail"><div class="container">
            <div class="breadcrumb">
                <a onclick="App.navigate('home')">Home</a><span class="separator">›</span>
                <a onclick="App.searchGroup='property';App.navigate('browse')">Property</a><span class="separator">›</span>
                <a onclick="App.searchCategory='${l.category}';App.navigate('browse')">${cat?.name || 'Property'}</a><span class="separator">›</span>
                <span>${l.title.substring(0, 30)}...</span>
            </div>
            
            <div class="listing-detail-grid">
                <!-- Left Column -->
                <div>
                    <div class="listing-gallery">
                        <div class="gallery-main"><img src="${l.images?.[0] || ''}" alt="${l.title}"></div>
                        ${l.images?.length > 1 ? `
                        <div class="gallery-thumbs">
                            ${l.images.map((img, i) => `<div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="document.querySelector('.gallery-main img').src='${img}'"><img src="${img}" alt=""></div>`).join('')}
                        </div>` : ''}
                    </div>
                    
                    ${l.agentLogo ? `<div style="margin-top:24px;"><img src="${l.agentLogo}" alt="${l.agentCompany}" style="max-height:60px;"></div>` : ''}
                    <p class="text-muted text-sm" style="margin-top:8px;">👁 ${l.views || 0} views</p>
                    
                    <!-- Property Information -->
                    <div class="card" style="margin-top:24px;">
                        <div class="card-header"><h3 class="card-title">Property Information</h3></div>
                        <div class="card-body">
                            <h4 style="margin-bottom:12px;">About this property</h4>
                            <div style="white-space:pre-line;color:var(--slate-600);">${l.description || 'No description provided.'}</div>
                        </div>
                    </div>
                    
                    <!-- Features -->
                    <div class="card" style="margin-top:16px;">
                        <div class="card-header"><h3 class="card-title">Features</h3></div>
                        <div class="card-body">
                            <div class="detail-grid">
                                ${l.bedrooms !== null && l.bedrooms !== undefined ? `<div class="detail-item"><span class="detail-label">Bedrooms</span><span class="detail-value">${l.bedrooms}</span></div>` : ''}
                                ${l.bathrooms ? `<div class="detail-item"><span class="detail-label">Bathrooms</span><span class="detail-value">${l.bathrooms}</span></div>` : ''}
                                ${l.livingAreas ? `<div class="detail-item"><span class="detail-label">Living areas / Lounges</span><span class="detail-value">${l.livingAreas}</span></div>` : ''}
                                ${l.landArea ? `<div class="detail-item"><span class="detail-label">Land Area</span><span class="detail-value">${l.landArea.toLocaleString()} m²</span></div>` : ''}
                                ${l.floorArea ? `<div class="detail-item"><span class="detail-label">Floor Area</span><span class="detail-value">${l.floorArea} m²</span></div>` : ''}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Parking -->
                    ${(l.garageParking !== undefined || l.offStreetParking !== undefined) ? `
                    <div class="card" style="margin-top:16px;">
                        <div class="card-header"><h3 class="card-title">Parking</h3></div>
                        <div class="card-body">
                            <div class="detail-grid">
                                ${l.garageParking !== undefined ? `<div class="detail-item"><span class="detail-label">Garage parking</span><span class="detail-value">${l.garageParking ? 'YES' : 'NO'}</span></div>` : ''}
                                ${l.offStreetParking !== undefined ? `<div class="detail-item"><span class="detail-label">Off street parking</span><span class="detail-value">${l.offStreetParking ? 'YES' : 'NO'}</span></div>` : ''}
                            </div>
                        </div>
                    </div>` : ''}
                </div>
                
                <!-- Right Column -->
                <div>
                    <div class="listing-info-card">
                        <div class="listing-detail-actions">
                            <button class="btn btn-ghost" onclick="openShareModal('${l.id}')">↗ Share</button>
                            <button class="btn btn-ghost" onclick="App.toggleSave('${l.id}')">${saved ? '❤️ Saved' : '🤍 Add to watchlist'}</button>
                        </div>
                        
                        <div class="listing-info-header">
                            <h1 class="listing-info-title">${l.title}</h1>
                            <div class="listing-info-price">
                                <span class="current">${l.priceDisplay || (l.price ? '$' + l.price.toLocaleString() : 'Price by Negotiation')}</span>
                            </div>
                        </div>
                        
                        <div class="listing-buying-options">
                            <button class="btn btn-accent btn-lg" style="width:100%;" onclick="${this.currentUser ? "openModal('message')" : "openModal('login')"}">Enquire</button>
                        </div>
                        
                        <!-- Agent Card -->
                        <div class="seller-card" style="margin-top:24px;">
                            ${l.agentLogo ? `<img src="${l.agentLogo}" alt="${l.agentCompany}" style="max-height:50px;margin-bottom:16px;">` : ''}
                            <div class="seller-info">
                                <div class="seller-avatar">${(l.agentName || 'A')[0]}</div>
                                <div class="seller-details">
                                    <h4>${l.agentName || 'Agent'}</h4>
                                    <p class="text-muted">${l.agentCompany || ''}</p>
                                </div>
                            </div>
                            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px;">
                                <button class="btn btn-primary" onclick="${this.currentUser ? "showToast('Call request sent!')" : "openModal('login')"}">Call</button>
                                <button class="btn btn-secondary" onclick="${this.currentUser ? "openModal('message')" : "openModal('login')"}">Email</button>
                            </div>
                            ${l.agentWebsite ? `<a href="${l.agentWebsite}" target="_blank" class="btn btn-ghost" style="width:100%;margin-top:12px;">Visit Website</a>` : ''}
                        </div>
                        
                        <div class="listing-shipping-section" style="margin-top:24px;">
                            <h4>Location</h4>
                            <div style="background:var(--slate-100);height:150px;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;margin-top:12px;">
                                <span class="text-muted">📍 ${l.suburb || l.location}, ${l.location}</span>
                            </div>
                            <p class="text-sm text-muted" style="margin-top:8px;">Location is approximate</p>
                        </div>
                        
                        <!-- Agent Rating -->
                        ${l.sellerRating ? `
                        <div class="seller-card" style="margin-top:16px;">
                            <div class="seller-info">
                                <div class="seller-avatar">${(l.agentCompany || 'A')[0]}</div>
                                <div class="seller-details">
                                    <h4>${l.agentCompany}</h4>
                                    <div class="seller-rating">⭐⭐⭐⭐⭐ <span class="text-muted">${l.sellerRating}% Positive Feedback</span></div>
                                    <p class="text-muted text-sm">${l.location}, New Zealand</p>
                                </div>
                            </div>
                            <a onclick="viewSellerListings('${l.sellerId}')" class="btn btn-ghost" style="width:100%;margin-top:12px;">View seller's other listings</a>
                        </div>` : ''}
                    </div>
                </div>
            </div>
        </div></div>`;
    },

    renderGeneralDetail(l) {
        const cat = this.categories.find(c => c.id === l.category);
        const saved = this.savedItems.includes(l.id);
        
        return `
        <div class="listing-detail"><div class="container">
            <div class="breadcrumb">
                <a onclick="App.navigate('home')">Home</a><span class="separator">›</span>
                <a onclick="App.searchCategory='${l.category}';App.navigate('browse')">${cat?.name || 'Listings'}</a><span class="separator">›</span>
                <span>${l.title.substring(0, 30)}...</span>
            </div>
            
            <div class="listing-detail-grid">
                <!-- Left Column -->
                <div>
                    <div class="listing-gallery">
                        <div class="gallery-main"><img src="${l.images?.[0] || ''}" alt="${l.title}"></div>
                        ${l.images?.length > 1 ? `
                        <div class="gallery-thumbs">
                            ${l.images.map((img, i) => `<div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="document.querySelector('.gallery-main img').src='${img}'"><img src="${img}" alt=""></div>`).join('')}
                        </div>` : ''}
                    </div>
                    <p class="text-muted text-sm" style="margin-top:8px;">👁 ${l.views || 0} views</p>
                    
                    <!-- Details -->
                    <div class="card" style="margin-top:24px;">
                        <div class="card-header"><h3 class="card-title">Detail</h3></div>
                        <div class="card-body">
                            <div class="detail-grid">
                                ${l.condition ? `<div class="detail-item"><span class="detail-label">Condition</span><span class="detail-value">${l.condition}</span></div>` : ''}
                                ${l.brand ? `<div class="detail-item"><span class="detail-label">Brand</span><span class="detail-value">${l.brand}</span></div>` : ''}
                            </div>
                        </div>
                    </div>
                    
                    <!-- Description -->
                    <div class="card" style="margin-top:16px;">
                        <div class="card-header"><h3 class="card-title">Description</h3></div>
                        <div class="card-body"><div style="white-space:pre-line;color:var(--slate-600);">${l.description || 'No description provided.'}</div></div>
                    </div>
                </div>
                
                <!-- Right Column -->
                <div>
                    <div class="listing-info-card">
                        <div class="listing-detail-actions">
                            <button class="btn btn-ghost" onclick="openShareModal('${l.id}')">↗ Share</button>
                            <button class="btn btn-ghost" onclick="App.toggleSave('${l.id}')">${saved ? '❤️ Saved' : '🤍 Add to watchlist'}</button>
                        </div>
                        
                        <div class="listing-info-header">
                            <h1 class="listing-info-title">${l.title}</h1>
                        </div>
                        
                        <div class="listing-buying-options">
                            ${l.price ? `<button class="btn btn-accent btn-lg" style="width:100%;" onclick="${this.currentUser ? "showToast('Purchase simulated!')" : "openModal('login')"}">Buy for NZ$ ${l.price.toLocaleString()}</button>` : ''}
                        </div>
                        
                        <div class="listing-shipping-section">
                            <h4>Shipping</h4>
                            <p>${l.shipping || 'Pickup'}</p>
                        </div>
                        
                        <div class="listing-shipping-section">
                            <h4>Payment Option</h4>
                            <p>${l.payment || 'Cash'}</p>
                        </div>
                        
                        <div class="listing-shipping-section">
                            <h4>Seller's Location</h4>
                            <div style="background:var(--slate-100);height:150px;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;">
                                <span class="text-muted">📍 ${l.suburb || l.location}, ${l.location}, New Zealand</span>
                            </div>
                        </div>
                        
                        <!-- Seller Card -->
                        <div class="seller-card">
                            <div class="seller-info">
                                <div class="seller-avatar">${(l.sellerName || 'S')[0]}</div>
                                <div class="seller-details">
                                    <h4>${l.sellerName || 'Seller'} ${l.sellerVerified ? '<span style="color:var(--primary);">✓</span>' : ''}</h4>
                                    ${l.sellerRating ? `<div class="seller-rating">⭐⭐⭐⭐⭐ <span class="text-muted">${l.sellerRating}% Positive Feedback</span></div>` : ''}
                                    <p class="text-muted text-sm">${l.location}, New Zealand</p>
                                </div>
                            </div>
                            <button class="btn btn-primary" style="width:100%;margin-top:16px;" onclick="${this.currentUser ? "openModal('message')" : "openModal('login')"}">💬 Contact</button>
                            <a onclick="viewSellerListings('${l.sellerId}')" class="btn btn-ghost" style="width:100%;margin-top:8px;">View seller's other listings</a>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>`;
    },

    renderProfile() {
        if (!this.currentUser) { openModal('login'); return ''; }
        return `
        <div class="page-header"><div class="container"><h1>My Profile</h1></div></div>
        <div class="container" style="padding:40px 0;max-width:600px;">
            <div class="card">
                <div class="card-body" style="padding:40px;text-align:center;">
                    <div class="profile-avatar" style="margin:0 auto 20px;">${(this.currentUser.displayName || this.currentUser.email)[0].toUpperCase()}</div>
                    <h3>${this.currentUser.displayName || 'User'}</h3>
                    <p class="text-muted">${this.currentUser.email}</p>
                    <div style="display:flex;gap:12px;justify-content:center;margin-top:24px;">
                        <button class="btn btn-secondary" onclick="App.navigate('edit-profile')">Edit Profile</button>
                    </div>
                </div>
            </div>
            
            <div class="card" style="margin-top:24px;">
                <div class="card-body">
                    <h4 style="margin-bottom:16px;">Quick Actions</h4>
                    <div style="display:grid;gap:12px;">
                        <button class="btn btn-secondary" style="justify-content:flex-start;" onclick="App.navigate('create')">📦 Create New Listing</button>
                        <button class="btn btn-secondary" style="justify-content:flex-start;" onclick="App.navigate('my-listings')">📋 My Listings</button>
                        <button class="btn btn-secondary" style="justify-content:flex-start;" onclick="App.navigate('saved')">❤️ Saved Items</button>
                        <button class="btn btn-secondary" style="justify-content:flex-start;" onclick="App.navigate('messages')">💬 Messages</button>
                    </div>
                </div>
            </div>
            
            <button class="btn btn-ghost" style="width:100%;margin-top:24px;color:var(--error);" onclick="App.logout()">Log Out</button>
        </div>`;
    },

    renderEditProfile() {
        if (!this.currentUser) { openModal('login'); return ''; }
        return `
        <div class="page-header"><div class="container"><h1>Edit Profile</h1></div></div>
        <div class="container" style="padding:40px 0;max-width:600px;">
            <div class="card">
                <div class="card-body" style="padding:32px;">
                    <form onsubmit="updateProfile(event)">
                        <div class="form-group">
                            <label class="form-label">Display Name</label>
                            <input type="text" class="form-input" id="profileName" value="${this.currentUser.displayName || ''}" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-input" value="${this.currentUser.email}" disabled>
                            <p class="text-sm text-muted" style="margin-top:4px;">Email cannot be changed</p>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Phone</label>
                            <input type="tel" class="form-input" id="profilePhone" placeholder="027 123 4567">
                        </div>
                        <div class="form-group">
                            <label class="form-label">Location</label>
                            <select class="form-input form-select" id="profileLocation">
                                ${NZ_REGIONS.map(r => `<option>${r}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Bio</label>
                            <textarea class="form-input form-textarea" id="profileBio" placeholder="Tell buyers a bit about yourself..."></textarea>
                        </div>
                        <div style="display:flex;gap:12px;">
                            <button type="submit" class="btn btn-primary" style="flex:1;">Save Changes</button>
                            <button type="button" class="btn btn-secondary" onclick="App.navigate('profile')">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>`;
    },

    renderMyListings() {
        if (!this.currentUser) { openModal('login'); return ''; }
        const my = this.listings.filter(l => l.sellerId === this.currentUser.uid);
        return `
        <div class="page-header"><div class="container"><h1>My Listings</h1><p class="lead">${my.length} active listings</p></div></div>
        <div class="container section">
            <button class="btn btn-primary" onclick="App.navigate('create')" style="margin-bottom:24px;">+ Create New Listing</button>
            ${my.length ? `<div class="listings-grid">${my.map(l => this.renderCard(l)).join('')}</div>` : 
            `<div class="empty-state"><div class="empty-state-icon">📦</div><h3>No listings yet</h3><p>Start selling today - it's free!</p><button class="btn btn-primary" onclick="App.navigate('create')">Create Listing</button></div>`}
        </div>`;
    },

    renderSaved() {
        if (!this.currentUser) { openModal('login'); return ''; }
        const saved = this.listings.filter(l => this.savedItems.includes(l.id));
        return `
        <div class="page-header"><div class="container"><h1>Watchlist</h1><p class="lead">${saved.length} saved items</p></div></div>
        <div class="container section">
            ${saved.length ? `<div class="listings-grid">${saved.map(l => this.renderCard(l)).join('')}</div>` : 
            `<div class="empty-state"><div class="empty-state-icon">❤️</div><h3>No saved items</h3><p>Click the heart on listings to save them</p><button class="btn btn-primary" onclick="App.navigate('browse')">Browse Listings</button></div>`}
        </div>`;
    },

    renderMessages() {
        if (!this.currentUser) { openModal('login'); return ''; }
        return `
        <div class="page-header"><div class="container"><h1>Messages</h1></div></div>
        <div class="container section">
            <div class="empty-state">
                <div class="empty-state-icon">💬</div>
                <h3>No messages yet</h3>
                <p>When you contact a seller or receive enquiries, they'll appear here</p>
                <button class="btn btn-primary" onclick="App.navigate('browse')">Browse Listings</button>
            </div>
        </div>`;
    },

    renderPricing() {
        return `
        <div class="page-header"><div class="container"><h1>Pricing</h1><p class="lead">Simple, affordable memberships</p></div></div>
        <section class="section"><div class="container">
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;max-width:900px;margin:0 auto;">
                <!-- Free Plan -->
                <div class="card" style="text-align:center;">
                    <div class="card-body" style="padding:40px;">
                        <h3 style="margin-bottom:8px;">Free</h3>
                        <div style="font-size:48px;font-weight:700;color:var(--primary);margin-bottom:24px;">$0</div>
                        <ul style="text-align:left;list-style:none;margin-bottom:32px;">
                            <li style="padding:8px 0;">✓ Browse all listings</li>
                            <li style="padding:8px 0;">✓ Save to watchlist</li>
                            <li style="padding:8px 0;">✓ Contact sellers</li>
                            <li style="padding:8px 0;">✓ 5 free listings/month</li>
                        </ul>
                        <button class="btn btn-secondary" style="width:100%;" onclick="${this.currentUser ? "showToast('You are on the Free plan')" : "openModal('signup')"}">Get Started</button>
                    </div>
                </div>
                
                <!-- Seller Plan -->
                <div class="card" style="text-align:center;border:2px solid var(--primary);">
                    <div class="card-body" style="padding:40px;">
                        <span style="background:var(--primary);color:white;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;">POPULAR</span>
                        <h3 style="margin:16px 0 8px;">Seller</h3>
                        <div style="font-size:48px;font-weight:700;color:var(--primary);margin-bottom:24px;">$9<span style="font-size:16px;color:var(--slate-500);">/mo</span></div>
                        <ul style="text-align:left;list-style:none;margin-bottom:32px;">
                            <li style="padding:8px 0;">✓ Everything in Free</li>
                            <li style="padding:8px 0;">✓ Unlimited listings</li>
                            <li style="padding:8px 0;">✓ Featured placement</li>
                            <li style="padding:8px 0;">✓ Analytics dashboard</li>
                        </ul>
                        <button class="btn btn-primary" style="width:100%;" onclick="showToast('Subscriptions coming soon!')">Subscribe</button>
                    </div>
                </div>
                
                <!-- Business Plan -->
                <div class="card" style="text-align:center;">
                    <div class="card-body" style="padding:40px;">
                        <h3 style="margin-bottom:8px;">Business</h3>
                        <div style="font-size:48px;font-weight:700;color:var(--primary);margin-bottom:24px;">$29<span style="font-size:16px;color:var(--slate-500);">/mo</span></div>
                        <ul style="text-align:left;list-style:none;margin-bottom:32px;">
                            <li style="padding:8px 0;">✓ Everything in Seller</li>
                            <li style="padding:8px 0;">✓ Business profile page</li>
                            <li style="padding:8px 0;">✓ Logo & branding</li>
                            <li style="padding:8px 0;">✓ Priority support</li>
                        </ul>
                        <button class="btn btn-secondary" style="width:100%;" onclick="showToast('Subscriptions coming soon!')">Contact Us</button>
                    </div>
                </div>
            </div>
            
            <div style="text-align:center;margin-top:48px;">
                <p class="text-muted">No lock-in contracts. Cancel anytime. All prices in NZD.</p>
            </div>
        </div></section>`;
    },

    renderCreateListing() {
        if (!this.currentUser) { openModal('login'); return ''; }
        return `
        <div class="page-header"><div class="container"><h1>Create Listing</h1><p class="lead">List your item for free</p></div></div>
        <div class="container" style="max-width:700px;padding:40px 24px 80px;">
            <div class="card"><div class="card-body">
                <form onsubmit="createListing(event)">
                    <div class="form-group">
                        <label class="form-label">Listing Type</label>
                        <select class="form-input form-select" id="listingType" onchange="toggleListingFields()">
                            <option value="general">General Item</option>
                            <option value="vehicle">Vehicle</option>
                            <option value="property">Property</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Title *</label>
                        <input type="text" class="form-input" id="listingTitle" placeholder="e.g. iPhone 15 Pro Max - Excellent Condition" required>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">Category</label>
                            <select class="form-input form-select" id="listingCat">
                                ${this.categoryGroups.map(g => `
                                    <optgroup label="${g.name}">
                                        ${this.categories.filter(c => c.group === g.id).map(c => 
                                            `<option value="${c.id}">${c.name}</option>`
                                        ).join('')}
                                    </optgroup>
                                `).join('')}
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Price ($)</label>
                            <input type="number" class="form-input" id="listingPrice" placeholder="0">
                        </div>
                    </div>
                    
                    <!-- Vehicle-specific fields -->
                    <div id="vehicleFields" style="display:none;">
                        <h4 style="margin:24px 0 16px;">Vehicle Details</h4>
                        <div class="form-row">
                            <div class="form-group"><label class="form-label">Make</label><input type="text" class="form-input" id="vehicleMake" placeholder="e.g. Toyota"></div>
                            <div class="form-group"><label class="form-label">Model</label><input type="text" class="form-input" id="vehicleModel" placeholder="e.g. Corolla"></div>
                        </div>
                        <div class="form-row">
                            <div class="form-group"><label class="form-label">Year</label><input type="number" class="form-input" id="vehicleYear" placeholder="2020"></div>
                            <div class="form-group"><label class="form-label">Odometer (km)</label><input type="number" class="form-input" id="vehicleOdo" placeholder="50000"></div>
                        </div>
                        <div class="form-row">
                            <div class="form-group"><label class="form-label">Colour</label><input type="text" class="form-input" id="vehicleColour" placeholder="White"></div>
                            <div class="form-group"><label class="form-label">Transmission</label>
                                <select class="form-input form-select" id="vehicleTrans"><option>Manual</option><option>Automatic</option></select>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Property-specific fields -->
                    <div id="propertyFields" style="display:none;">
                        <h4 style="margin:24px 0 16px;">Property Details</h4>
                        <div class="form-row">
                            <div class="form-group"><label class="form-label">Bedrooms</label><input type="number" class="form-input" id="propBeds" placeholder="3"></div>
                            <div class="form-group"><label class="form-label">Bathrooms</label><input type="number" class="form-input" id="propBaths" placeholder="1"></div>
                        </div>
                        <div class="form-row">
                            <div class="form-group"><label class="form-label">Land Area (m²)</label><input type="number" class="form-input" id="propLand" placeholder="650"></div>
                            <div class="form-group"><label class="form-label">Floor Area (m²)</label><input type="number" class="form-input" id="propFloor" placeholder="120"></div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Description</label>
                        <textarea class="form-input form-textarea" id="listingDesc" placeholder="Describe your item..."></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Location</label>
                        <select class="form-input form-select" id="listingLoc">${NZ_REGIONS.map(r => `<option>${r}</option>`).join('')}</select>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Image URL</label>
                        <input type="url" class="form-input" id="listingImage" placeholder="https://...">
                        <p class="text-sm text-muted" style="margin-top:4px;">Paste an image URL. Image upload coming soon!</p>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-lg" style="width:100%;">Publish Listing</button>
                </form>
            </div></div>
        </div>`;
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
    App.searchGroup = '';
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

function toggleListingFields() {
    const type = document.getElementById('listingType').value;
    document.getElementById('vehicleFields').style.display = type === 'vehicle' ? 'block' : 'none';
    document.getElementById('propertyFields').style.display = type === 'property' ? 'block' : 'none';
}

async function createListing(e) {
    e.preventDefault();
    if (!App.currentUser) return;
    
    const type = document.getElementById('listingType').value;
    const listing = {
        title: document.getElementById('listingTitle').value,
        price: parseInt(document.getElementById('listingPrice').value) || null,
        category: document.getElementById('listingCat').value,
        description: document.getElementById('listingDesc').value,
        location: document.getElementById('listingLoc').value,
        images: [document.getElementById('listingImage').value || 'https://placehold.co/800x600/e2e8f0/64748b?text=No+Image'],
        listingType: type,
        sellerId: App.currentUser.uid,
        sellerName: App.currentUser.displayName || 'User',
        sellerVerified: true,
        status: 'active',
        views: 0,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    // Add type-specific fields
    if (type === 'vehicle') {
        listing.make = document.getElementById('vehicleMake')?.value;
        listing.model = document.getElementById('vehicleModel')?.value;
        listing.year = parseInt(document.getElementById('vehicleYear')?.value);
        listing.odometer = parseInt(document.getElementById('vehicleOdo')?.value);
        listing.colour = document.getElementById('vehicleColour')?.value;
        listing.transmission = document.getElementById('vehicleTrans')?.value;
    }
    
    if (type === 'property') {
        listing.bedrooms = parseInt(document.getElementById('propBeds')?.value);
        listing.bathrooms = parseInt(document.getElementById('propBaths')?.value);
        listing.landArea = parseInt(document.getElementById('propLand')?.value);
        listing.floorArea = parseInt(document.getElementById('propFloor')?.value);
    }
    
    try {
        await db.collection('listings').add(listing);
        showToast('Listing created!');
        await App.loadListings();
        App.navigate('my-listings');
    } catch (e) { 
        showToast(e.message, 'error'); 
    }
}

async function updateProfile(e) {
    e.preventDefault();
    if (!App.currentUser) return;
    
    try {
        await App.currentUser.updateProfile({
            displayName: document.getElementById('profileName').value
        });
        await db.collection('users').doc(App.currentUser.uid).set({
            displayName: document.getElementById('profileName').value,
            phone: document.getElementById('profilePhone').value,
            location: document.getElementById('profileLocation').value,
            bio: document.getElementById('profileBio').value,
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
        showToast('Profile updated!');
        App.navigate('profile');
    } catch (e) {
        showToast(e.message, 'error');
    }
}

function openShareModal(listingId) {
    window.currentShareListingId = listingId;
    openModal('share');
}

function shareTo(platform) {
    const url = window.location.href;
    const listing = App.listings.find(l => l.id === window.currentShareListingId);
    const text = listing ? `Check out ${listing.title} on iSQROLL` : 'Check out this listing on iSQROLL';
    
    let shareUrl;
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'email':
            shareUrl = `mailto:?subject=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
            break;
    }
    if (shareUrl) window.open(shareUrl, '_blank');
    closeModal('share');
}

function copyListingLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('Link copied to clipboard!');
        closeModal('share');
    });
}

function sendMessage(e) {
    e.preventDefault();
    showToast('Message sent to seller!');
    closeModal('message');
}

function viewSellerListings(sellerId) {
    // Filter by seller
    App.listings = App.listings; // Reset
    showToast('Viewing seller listings');
}

function makeOffer() { 
    const o = prompt('Enter your offer amount ($):'); 
    if (o && !isNaN(o)) {
        showToast('Offer of $' + parseInt(o).toLocaleString() + ' sent!'); 
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
