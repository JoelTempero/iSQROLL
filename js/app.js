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
        
        // Use local data if App data not loaded yet
        const groups = App.categoryGroups?.length > 0 ? App.categoryGroups : CATEGORY_GROUPS;
        const cats = App.categories?.length > 0 ? App.categories : CATEGORIES;
        
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
                    <div class="nav-link-dropdown">
                        <span class="nav-link">Categories ▾</span>
                        <div class="mega-menu">
                            <div class="mega-menu-inner">
                                ${groups.map(g => {
                                    const groupCats = cats.filter(c => c.group === g.id);
                                    return `
                                    <div class="mega-menu-column">
                                        <h4 class="mega-menu-title" onclick="App.searchGroup='${g.id}';App.searchCategory='';App.navigate('browse');">${g.name}</h4>
                                        <ul class="mega-menu-list">
                                            ${groupCats.slice(0, 8).map(c => `
                                                <li onclick="App.searchCategory='${c.id}';App.searchGroup='';App.navigate('browse');">${c.name}</li>
                                            `).join('')}
                                            ${groupCats.length > 8 ? `<li class="see-all" onclick="App.searchGroup='${g.id}';App.navigate('browse');">See All →</li>` : ''}
                                        </ul>
                                    </div>`;
                                }).join('')}
                            </div>
                        </div>
                    </div>
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
                                <div class="dropdown-item" onclick="App.navigate('profile')">Profile</div>
                                <div class="dropdown-item" onclick="App.navigate('my-listings')">My Listings</div>
                                <div class="dropdown-item" onclick="App.navigate('saved')">Saved</div>
                                <div class="dropdown-item" onclick="App.navigate('messages')">Messages</div>
                                ${App.isAdmin() ? '<div class="dropdown-item" onclick="App.navigate(\'admin\')">Admin Panel</div>' : ''}
                                <div class="dropdown-item danger" onclick="App.logout()">Log Out</div>
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
            <div class="modal" style="max-width:480px;">
                <div class="modal-header">
                    <h3 class="modal-title">Create Account</h3>
                    <button class="modal-close" onclick="closeModal('signup')">✕</button>
                </div>
                <div class="modal-body">
                    <form onsubmit="handleSignup(event)">
                        <!-- Account Type Selection -->
                        <div class="form-group">
                            <label class="form-label">Account Type</label>
                            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                                <label class="account-type-option" style="display:flex;align-items:center;gap:8px;padding:12px;border:2px solid var(--primary);border-radius:6px;cursor:pointer;transition:all 0.2s;">
                                    <input type="radio" name="accountType" value="buyer" checked style="accent-color:var(--primary);" onchange="toggleSubscriptionTier()">
                                    <div>
                                        <div style="font-weight:600;font-size:14px;">Buyer</div>
                                        <div style="font-size:12px;color:#6B7280;">Browse & purchase</div>
                                    </div>
                                </label>
                                <label class="account-type-option" style="display:flex;align-items:center;gap:8px;padding:12px;border:2px solid #e5e7eb;border-radius:6px;cursor:pointer;transition:all 0.2s;">
                                    <input type="radio" name="accountType" value="seller" style="accent-color:var(--primary);" onchange="toggleSubscriptionTier()">
                                    <div>
                                        <div style="font-weight:600;font-size:14px;">Seller</div>
                                        <div style="font-size:12px;color:#6B7280;">List & sell items</div>
                                    </div>
                                </label>
                            </div>
                            <p style="font-size:11px;color:#6B7280;margin-top:6px;">You can add the other account type later from your profile.</p>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" class="form-input" id="signupName" placeholder="Your full name" required>
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

                        <!-- Subscription Tier (for sellers) -->
                        <div class="form-group" id="subscriptionTierGroup" style="display:none;">
                            <label class="form-label">Subscription Plan</label>
                            <select class="form-input form-select" id="signupTier">
                                <option value="free">Free Membership - NZ$0/month</option>
                                <option value="realestate">Real Estate Gold - NZ$399/month</option>
                                <option value="business">Business - NZ$399/month</option>
                                <option value="dealership">Dealership Premium - NZ$499/month</option>
                            </select>
                            <p style="font-size:11px;color:#6B7280;margin-top:6px;">Free plan includes unlimited listings. <a onclick="closeModal('signup');App.navigate('pricing');" style="color:var(--primary);cursor:pointer;">Compare plans</a></p>
                        </div>

                        <div class="form-group" style="margin-top:16px;">
                            <label style="display:flex;align-items:flex-start;gap:8px;font-size:13px;color:#6B7280;cursor:pointer;">
                                <input type="checkbox" id="signupTerms" required style="margin-top:2px;accent-color:var(--primary);">
                                <span>I agree to the <a onclick="closeModal('signup');App.navigate('terms');" style="color:var(--primary);cursor:pointer;">Terms and Conditions</a> and <a onclick="closeModal('signup');App.navigate('privacy');" style="color:var(--primary);cursor:pointer;">Privacy Policy</a></span>
                            </label>
                        </div>

                        <button type="submit" class="btn btn-primary" style="width:100%;margin-top:16px;">Create Account</button>
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
            <div class="modal" style="max-width:500px;">
                <div class="modal-header">
                    <h3 class="modal-title">iChat - Send Message</h3>
                    <button class="modal-close" onclick="closeModal('message')">✕</button>
                </div>
                <div class="modal-body">
                    <div id="messageListingPreview" style="display:none;background:var(--slate-50);padding:12px;border-radius:6px;margin-bottom:16px;">
                        <div style="display:flex;gap:12px;align-items:center;">
                            <img id="messageListingImage" src="" alt="" style="width:60px;height:60px;object-fit:cover;border-radius:6px;">
                            <div style="flex:1;min-width:0;">
                                <h4 id="messageListingTitle" style="font-size:14px;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></h4>
                                <p id="messageListingPrice" style="font-size:14px;font-weight:600;color:var(--primary);margin:0;"></p>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" id="messageListingId">
                    <input type="hidden" id="messageSellerId">
                    <input type="hidden" id="messageSellerName">
                    <form onsubmit="sendMessage(event)">
                        <div class="form-group">
                            <label class="form-label">To: <span id="messageRecipient" style="font-weight:600;"></span></label>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Your Message</label>
                            <textarea class="form-input form-textarea" id="messageText" placeholder="Hi, I'm interested in this listing..." required style="min-height:120px;"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width:100%;">Send via iChat</button>
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

// Admin email addresses
const ADMIN_EMAILS = ['admin@isqroll.co.nz', 'joel@temperocreative.co.nz', 'demo@isqroll.co.nz'];

const App = {
    currentUser: null,
    listings: [],
    categories: [],
    categoryGroups: [],
    savedItems: [],
    messages: [],
    currentPage: 'home',
    currentListingId: null,
    currentConversationId: null,
    // Search & Filter State
    searchQuery: '',
    searchCategory: '',
    searchGroup: '',
    filters: {
        location: '',
        priceMin: '',
        priceMax: '',
        condition: '',
        saleType: '',
        shipping: '',
        sortBy: 'newest',
        // Vehicle specific
        make: '',
        model: '',
        yearMin: '',
        yearMax: '',
        transmission: '',
        // Property specific
        bedrooms: '',
        bathrooms: ''
    },

    // Check if current user is admin
    isAdmin() {
        return this.currentUser && ADMIN_EMAILS.includes(this.currentUser.email);
    },

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
        // Use local data for demo - more reliable and has full 51 categories
        this.categories = CATEGORIES;
        this.categoryGroups = CATEGORY_GROUPS;
        console.log(`📁 Using local data: ${this.categories.length} categories, ${this.categoryGroups.length} groups`);
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
            case 'admin': return this.renderAdmin();
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

    async signup(email, password, name, accountType, subscriptionTier) {
        try {
            const cred = await auth.createUserWithEmailAndPassword(email, password);
            await cred.user.updateProfile({ displayName: name });
            const location = document.getElementById('signupLocation')?.value || 'Auckland';

            // Build user profile based on account type
            const userProfile = {
                email,
                displayName: name,
                location,
                accountType: accountType || 'buyer',
                subscriptionTier: accountType === 'seller' ? (subscriptionTier || 'free') : null,
                verified: false,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            // Add seller-specific fields
            if (accountType === 'seller') {
                userProfile.listingCount = 0;
                userProfile.salesCount = 0;
                userProfile.rating = 0;
                userProfile.reviewCount = 0;
            }

            await db.collection('users').doc(cred.user.uid).set(userProfile);
            closeModal('signup');

            // Show appropriate welcome message
            if (accountType === 'seller') {
                showToast('Welcome to iSQROLL! Complete verification to start selling.');
            } else {
                showToast('Welcome to iSQROLL!');
            }
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
        const f = this.filters;

        // Category group filter
        if (this.searchGroup) {
            const groupCats = this.categories.filter(c => c.group === this.searchGroup).map(c => c.id);
            results = results.filter(l => groupCats.includes(l.category));
        }

        // Category filter
        if (this.searchCategory) {
            results = results.filter(l => l.category === this.searchCategory);
        }

        // Text search
        if (this.searchQuery) {
            const q = this.searchQuery.toLowerCase();
            results = results.filter(l =>
                l.title?.toLowerCase().includes(q) ||
                l.description?.toLowerCase().includes(q) ||
                l.make?.toLowerCase().includes(q) ||
                l.model?.toLowerCase().includes(q)
            );
        }

        // Location filter
        if (f.location) {
            results = results.filter(l => l.location === f.location);
        }

        // Price range
        if (f.priceMin) {
            results = results.filter(l => l.price && l.price >= parseInt(f.priceMin));
        }
        if (f.priceMax) {
            results = results.filter(l => l.price && l.price <= parseInt(f.priceMax));
        }

        // Condition filter
        if (f.condition) {
            results = results.filter(l => l.condition?.toLowerCase() === f.condition.toLowerCase());
        }

        // Sale type filter
        if (f.saleType) {
            results = results.filter(l => (l.saleType || 'buynow') === f.saleType);
        }

        // Shipping filter
        if (f.shipping) {
            if (f.shipping === 'pickup') {
                results = results.filter(l => !l.shipping || l.shipping.toLowerCase().includes('pickup'));
            } else if (f.shipping === 'delivery') {
                results = results.filter(l => l.shipping && l.shipping.toLowerCase().includes('deliver'));
            }
        }

        // Vehicle-specific filters
        if (f.make) {
            results = results.filter(l => l.make?.toLowerCase().includes(f.make.toLowerCase()));
        }
        if (f.model) {
            results = results.filter(l => l.model?.toLowerCase().includes(f.model.toLowerCase()));
        }
        if (f.yearMin) {
            results = results.filter(l => l.year && l.year >= parseInt(f.yearMin));
        }
        if (f.yearMax) {
            results = results.filter(l => l.year && l.year <= parseInt(f.yearMax));
        }
        if (f.transmission) {
            results = results.filter(l => l.transmission?.toLowerCase() === f.transmission.toLowerCase());
        }

        // Property-specific filters
        if (f.bedrooms) {
            const beds = parseInt(f.bedrooms);
            if (f.bedrooms === '5+') {
                results = results.filter(l => l.bedrooms && l.bedrooms >= 5);
            } else {
                results = results.filter(l => l.bedrooms && l.bedrooms >= beds);
            }
        }
        if (f.bathrooms) {
            const baths = parseInt(f.bathrooms);
            if (f.bathrooms === '3+') {
                results = results.filter(l => l.bathrooms && l.bathrooms >= 3);
            } else {
                results = results.filter(l => l.bathrooms && l.bathrooms >= baths);
            }
        }

        // Sorting
        switch (f.sortBy) {
            case 'newest':
                results.sort((a, b) => (b.createdAt?.toDate?.() || 0) - (a.createdAt?.toDate?.() || 0));
                break;
            case 'oldest':
                results.sort((a, b) => (a.createdAt?.toDate?.() || 0) - (b.createdAt?.toDate?.() || 0));
                break;
            case 'price-low':
                results.sort((a, b) => (a.price || 999999999) - (b.price || 999999999));
                break;
            case 'price-high':
                results.sort((a, b) => (b.price || 0) - (a.price || 0));
                break;
            case 'ending-soon':
                results.sort((a, b) => {
                    const aExp = a.expiresAt?.toDate?.() || new Date('2099-01-01');
                    const bExp = b.expiresAt?.toDate?.() || new Date('2099-01-01');
                    return aExp - bExp;
                });
                break;
        }

        return results;
    },

    clearFilters() {
        this.searchQuery = '';
        this.searchCategory = '';
        this.searchGroup = '';
        this.filters = {
            location: '',
            priceMin: '',
            priceMax: '',
            condition: '',
            saleType: '',
            shipping: '',
            sortBy: 'newest',
            make: '',
            model: '',
            yearMin: '',
            yearMax: '',
            transmission: '',
            bedrooms: '',
            bathrooms: ''
        };
        this.render();
    },

    hasActiveFilters() {
        const f = this.filters;
        return this.searchQuery || this.searchCategory || this.searchGroup ||
            f.location || f.priceMin || f.priceMax || f.condition || f.saleType ||
            f.shipping || f.make || f.model || f.yearMin || f.yearMax ||
            f.transmission || f.bedrooms || f.bathrooms;
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

    // Helper to render price/auction section for listing details
    renderPriceSection(l) {
        if (l.saleType === 'auction') {
            // Calculate time remaining
            let timeLeftText = '';
            let isEnded = false;
            if (l.expiresAt) {
                const expiryDate = l.expiresAt.toDate ? l.expiresAt.toDate() : new Date(l.expiresAt);
                const now = new Date();
                const diff = expiryDate - now;
                if (diff > 0) {
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                    timeLeftText = days > 0 ? `${days}d ${hours}h remaining` : `${hours}h ${mins}m remaining`;
                } else {
                    timeLeftText = 'Auction ended';
                    isEnded = true;
                }
            }

            const currentPrice = l.currentBid || l.startingBid || l.price || 0;
            const minBid = currentPrice + Math.max(1, Math.floor(currentPrice * 0.05)); // 5% increment or $1 min

            return `
                <div style="background:#7c3aed;color:white;padding:12px;border-radius:6px;margin-bottom:16px;text-align:center;">
                    <span style="font-size:12px;font-weight:600;text-transform:uppercase;">AUCTION</span>
                </div>
                <div class="listing-info-price" style="text-align:center;margin-bottom:16px;">
                    <div style="font-size:13px;color:var(--slate-500);margin-bottom:4px;">${l.currentBid ? 'Current Bid' : 'Starting Bid'}</div>
                    <span class="current" style="font-size:32px;">$${currentPrice.toLocaleString()}</span>
                    ${l.bidCount > 0 ? `<div style="font-size:13px;color:var(--slate-500);margin-top:4px;">${l.bidCount} bid${l.bidCount !== 1 ? 's' : ''}</div>` : '<div style="font-size:13px;color:var(--slate-500);margin-top:4px;">No bids yet</div>'}
                </div>
                <div style="background:var(--slate-100);padding:12px;border-radius:6px;text-align:center;margin-bottom:16px;">
                    <span style="font-weight:600;color:${isEnded ? '#ef4444' : '#7c3aed'};">${timeLeftText}</span>
                </div>
                ${!isEnded ? `
                <div class="listing-buying-options">
                    <div style="display:flex;gap:8px;margin-bottom:12px;">
                        <input type="number" id="bidAmount" class="form-input" placeholder="Enter bid" min="${minBid}" value="${minBid}" style="flex:1;">
                        <button class="btn btn-primary" onclick="${this.currentUser ? `placeBid('${l.id}', document.getElementById('bidAmount').value)` : "openModal('login')"}">Place Bid</button>
                    </div>
                    <p style="font-size:11px;color:var(--slate-500);text-align:center;">Min bid: $${minBid.toLocaleString()}</p>
                </div>
                ` : `
                <div style="text-align:center;padding:16px;background:var(--slate-50);border-radius:6px;">
                    <p style="color:var(--slate-600);">This auction has ended.</p>
                    ${l.currentBid ? `<p style="color:var(--primary);font-weight:600;">Winning bid: $${l.currentBid.toLocaleString()}</p>` : ''}
                </div>
                `}
                <button class="btn btn-ghost" style="width:100%;margin-top:12px;" onclick="${this.currentUser ? `openMessageModal('${l.id}')` : "openModal('login')"}">Ask Seller a Question</button>
            `;
        } else {
            // Buy Now listing
            return `
                <div class="listing-info-price">
                    <span class="current">${l.priceDisplay || '$' + (l.price || 0).toLocaleString()}</span>
                </div>
                <div class="listing-buying-options">
                    <button class="btn btn-accent btn-lg" style="width:100%;" onclick="${this.currentUser ? `openMessageModal('${l.id}')` : "openModal('login')"}">Contact Seller</button>
                    ${l.price ? `<button class="btn btn-primary btn-lg" style="width:100%;margin-top:12px;" onclick="${this.currentUser ? `openMessageModal('${l.id}')` : "openModal('login')"}">Buy for NZ$ ${l.price.toLocaleString()}</button>` : ''}
                </div>
            `;
        }
    },

    renderCard(l) {
        const saved = this.savedItems.includes(l.id);
        // Calculate auction time remaining
        let auctionTimeLeft = '';
        if (l.saleType === 'auction' && l.expiresAt) {
            const expiryDate = l.expiresAt.toDate ? l.expiresAt.toDate() : new Date(l.expiresAt);
            const now = new Date();
            const diff = expiryDate - now;
            if (diff > 0) {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                auctionTimeLeft = days > 0 ? `${days}d ${hours}h left` : `${hours}h left`;
            } else {
                auctionTimeLeft = 'Ended';
            }
        }

        const priceDisplay = l.saleType === 'auction'
            ? (l.currentBid ? `$${l.currentBid.toLocaleString()}` : (l.price ? `$${l.price.toLocaleString()}` : 'No bids'))
            : (l.priceDisplay || (l.price ? `$${l.price.toLocaleString()}` : 'Price on Application'));

        return `
        <div class="listing-card" onclick="App.navigate('listing','${l.id}')">
            <div class="listing-image">
                <img src="${l.images?.[0] || 'https://picsum.photos/400/300?grayscale'}" alt="${l.title}" loading="lazy">
                ${l.featured ? '<span class="listing-badge">Featured</span>' : ''}
                ${l.saleType === 'auction' ? '<span class="listing-badge" style="background:#7c3aed;">Auction</span>' : ''}
                ${l.listingType === 'vehicle' ? '<span class="listing-badge" style="background:var(--slate-800);">Vehicle</span>' : ''}
                ${l.listingType === 'property' ? '<span class="listing-badge" style="background:var(--primary);">Property</span>' : ''}
                <button class="listing-save ${saved ? 'saved' : ''}" onclick="event.stopPropagation();App.toggleSave('${l.id}')">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="${saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                </button>
            </div>
            <div class="listing-content">
                <h3 class="listing-title">${l.title}</h3>
                <div class="listing-price">
                    ${l.saleType === 'auction' ? '<span style="font-size:11px;color:#7c3aed;font-weight:500;">Current bid: </span>' : ''}
                    ${priceDisplay}
                    ${l.wasPrice ? `<span class="was">$${l.wasPrice.toLocaleString()}</span>` : ''}
                </div>
                <div class="listing-meta">
                    <span class="listing-location">📍 ${l.location || 'NZ'}</span>
                    ${l.saleType === 'auction' ? `<span style="color:#7c3aed;font-weight:500;">${auctionTimeLeft}</span>` : `<span>👁 ${l.views || 0}</span>`}
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
        const f = this.filters;
        const isVehicleSearch = this.searchGroup === 'automotive' || (this.searchCategory && this.categories.find(c => c.id === this.searchCategory)?.group === 'automotive');
        const isPropertySearch = this.searchGroup === 'property' || (this.searchCategory && this.categories.find(c => c.id === this.searchCategory)?.group === 'property');

        return `
        ${this.renderSearch()}
        <section class="section" style="padding-top:20px;"><div class="container">
            <div class="browse-layout" style="display:grid;grid-template-columns:280px 1fr;gap:24px;">
                <!-- Filter Sidebar -->
                <div class="filter-sidebar">
                    <div class="card" style="position:sticky;top:80px;">
                        <div class="card-header" style="display:flex;justify-content:space-between;align-items:center;">
                            <h3 class="card-title" style="margin:0;">Filters</h3>
                            ${this.hasActiveFilters() ? `<button class="btn btn-ghost btn-sm" onclick="App.clearFilters()">Clear all</button>` : ''}
                        </div>
                        <div class="card-body" style="padding:16px;">
                            <!-- Sort -->
                            <div class="filter-group" style="margin-bottom:20px;">
                                <label class="filter-label" style="font-weight:600;font-size:13px;display:block;margin-bottom:8px;">Sort by</label>
                                <select class="form-input form-select" id="filterSort" onchange="App.filters.sortBy=this.value;App.render();">
                                    <option value="newest" ${f.sortBy === 'newest' ? 'selected' : ''}>Newest first</option>
                                    <option value="oldest" ${f.sortBy === 'oldest' ? 'selected' : ''}>Oldest first</option>
                                    <option value="price-low" ${f.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
                                    <option value="price-high" ${f.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
                                    <option value="ending-soon" ${f.sortBy === 'ending-soon' ? 'selected' : ''}>Ending Soon</option>
                                </select>
                            </div>

                            <!-- Location -->
                            <div class="filter-group" style="margin-bottom:20px;">
                                <label class="filter-label" style="font-weight:600;font-size:13px;display:block;margin-bottom:8px;">Location</label>
                                <select class="form-input form-select" id="filterLocation" onchange="App.filters.location=this.value;App.render();">
                                    <option value="">All New Zealand</option>
                                    ${NZ_REGIONS.map(r => `<option value="${r}" ${f.location === r ? 'selected' : ''}>${r}</option>`).join('')}
                                </select>
                            </div>

                            <!-- Price Range -->
                            <div class="filter-group" style="margin-bottom:20px;">
                                <label class="filter-label" style="font-weight:600;font-size:13px;display:block;margin-bottom:8px;">Price Range</label>
                                <div style="display:flex;gap:8px;align-items:center;">
                                    <input type="number" class="form-input" placeholder="Min" id="filterPriceMin" value="${f.priceMin}" style="width:100%;">
                                    <span style="color:var(--slate-400);">-</span>
                                    <input type="number" class="form-input" placeholder="Max" id="filterPriceMax" value="${f.priceMax}" style="width:100%;">
                                </div>
                                <button class="btn btn-ghost btn-sm" style="width:100%;margin-top:8px;" onclick="App.filters.priceMin=document.getElementById('filterPriceMin').value;App.filters.priceMax=document.getElementById('filterPriceMax').value;App.render();">Apply Price</button>
                            </div>

                            <!-- Sale Type -->
                            <div class="filter-group" style="margin-bottom:20px;">
                                <label class="filter-label" style="font-weight:600;font-size:13px;display:block;margin-bottom:8px;">Sale Type</label>
                                <select class="form-input form-select" onchange="App.filters.saleType=this.value;App.render();">
                                    <option value="">All</option>
                                    <option value="buynow" ${f.saleType === 'buynow' ? 'selected' : ''}>Buy Now</option>
                                    <option value="auction" ${f.saleType === 'auction' ? 'selected' : ''}>Auction</option>
                                </select>
                            </div>

                            <!-- Condition -->
                            <div class="filter-group" style="margin-bottom:20px;">
                                <label class="filter-label" style="font-weight:600;font-size:13px;display:block;margin-bottom:8px;">Condition</label>
                                <select class="form-input form-select" onchange="App.filters.condition=this.value;App.render();">
                                    <option value="">Any Condition</option>
                                    <option value="new" ${f.condition === 'new' ? 'selected' : ''}>New</option>
                                    <option value="used" ${f.condition === 'used' ? 'selected' : ''}>Used</option>
                                    <option value="refurbished" ${f.condition === 'refurbished' ? 'selected' : ''}>Refurbished</option>
                                </select>
                            </div>

                            ${isVehicleSearch ? `
                            <!-- Vehicle Filters -->
                            <div style="border-top:1px solid var(--slate-200);padding-top:16px;margin-top:16px;">
                                <h4 style="font-size:14px;margin-bottom:16px;">Vehicle Filters</h4>
                                <div class="filter-group" style="margin-bottom:12px;">
                                    <input type="text" class="form-input" placeholder="Make (e.g. Toyota)" value="${f.make}" onchange="App.filters.make=this.value;App.render();">
                                </div>
                                <div class="filter-group" style="margin-bottom:12px;">
                                    <input type="text" class="form-input" placeholder="Model (e.g. Corolla)" value="${f.model}" onchange="App.filters.model=this.value;App.render();">
                                </div>
                                <div style="display:flex;gap:8px;margin-bottom:12px;">
                                    <input type="number" class="form-input" placeholder="Year from" value="${f.yearMin}" onchange="App.filters.yearMin=this.value;App.render();">
                                    <input type="number" class="form-input" placeholder="Year to" value="${f.yearMax}" onchange="App.filters.yearMax=this.value;App.render();">
                                </div>
                                <select class="form-input form-select" onchange="App.filters.transmission=this.value;App.render();">
                                    <option value="">Any Transmission</option>
                                    <option value="automatic" ${f.transmission === 'automatic' ? 'selected' : ''}>Automatic</option>
                                    <option value="manual" ${f.transmission === 'manual' ? 'selected' : ''}>Manual</option>
                                </select>
                            </div>
                            ` : ''}

                            ${isPropertySearch ? `
                            <!-- Property Filters -->
                            <div style="border-top:1px solid var(--slate-200);padding-top:16px;margin-top:16px;">
                                <h4 style="font-size:14px;margin-bottom:16px;">Property Filters</h4>
                                <div class="filter-group" style="margin-bottom:12px;">
                                    <label class="filter-label" style="font-size:12px;color:var(--slate-500);display:block;margin-bottom:4px;">Bedrooms</label>
                                    <select class="form-input form-select" onchange="App.filters.bedrooms=this.value;App.render();">
                                        <option value="">Any</option>
                                        <option value="1" ${f.bedrooms === '1' ? 'selected' : ''}>1+</option>
                                        <option value="2" ${f.bedrooms === '2' ? 'selected' : ''}>2+</option>
                                        <option value="3" ${f.bedrooms === '3' ? 'selected' : ''}>3+</option>
                                        <option value="4" ${f.bedrooms === '4' ? 'selected' : ''}>4+</option>
                                        <option value="5+" ${f.bedrooms === '5+' ? 'selected' : ''}>5+</option>
                                    </select>
                                </div>
                                <div class="filter-group">
                                    <label class="filter-label" style="font-size:12px;color:var(--slate-500);display:block;margin-bottom:4px;">Bathrooms</label>
                                    <select class="form-input form-select" onchange="App.filters.bathrooms=this.value;App.render();">
                                        <option value="">Any</option>
                                        <option value="1" ${f.bathrooms === '1' ? 'selected' : ''}>1+</option>
                                        <option value="2" ${f.bathrooms === '2' ? 'selected' : ''}>2+</option>
                                        <option value="3+" ${f.bathrooms === '3+' ? 'selected' : ''}>3+</option>
                                    </select>
                                </div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                </div>

                <!-- Listings Grid -->
                <div>
                    <div class="section-header" style="margin-bottom:20px;">
                        <h2 style="font-size:1.25rem;">${title} <span class="text-muted" style="font-weight:400;">(${listings.length} results)</span></h2>
                    </div>
                    ${listings.length ?
                        `<div class="listings-grid">${listings.map(l => this.renderCard(l)).join('')}</div>` :
                        `<div class="empty-state"><div class="empty-state-icon">🔍</div><h3>No listings found</h3><p>Try adjusting your filters</p><button class="btn btn-primary" onclick="App.clearFilters()">Clear Filters</button></div>`
                    }
                </div>
            </div>
        </div></section>

        <style>
            @media (max-width: 900px) {
                .browse-layout { grid-template-columns: 1fr !important; }
                .filter-sidebar { display: none; }
            }
        </style>`;
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
                        </div>

                        ${this.renderPriceSection(l)}
                        
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
                        </div>

                        ${this.renderPriceSection(l)}

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

                        ${this.renderPriceSection(l)}

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

        // Check if we're viewing a specific conversation
        if (this.currentConversationId) {
            return this.renderConversationDetail();
        }

        return `
        <div class="page-header"><div class="container"><h1>iChat Messages</h1><p class="lead">Your conversations</p></div></div>
        <div class="container section">
            <div id="conversationsList">
                <div style="text-align:center;padding:40px;">
                    <div class="loading-spinner"></div>
                    <p class="text-muted">Loading conversations...</p>
                </div>
            </div>
        </div>
        <script>
            (async () => {
                const conversations = await loadConversations();
                const container = document.getElementById('conversationsList');
                if (!container) return;

                if (conversations.length === 0) {
                    container.innerHTML = \`
                        <div class="empty-state">
                            <div class="empty-state-icon">💬</div>
                            <h3>No messages yet</h3>
                            <p>When you contact a seller or receive enquiries, they'll appear here</p>
                            <button class="btn btn-primary" onclick="App.navigate('browse')">Browse Listings</button>
                        </div>
                    \`;
                    return;
                }

                container.innerHTML = conversations.map(conv => {
                    const otherUserId = conv.participants.find(id => id !== App.currentUser.uid);
                    const otherUserName = conv.participantNames?.[otherUserId] || 'User';
                    const isUnread = conv.unreadBy === App.currentUser.uid;
                    const timeAgo = conv.lastMessageAt?.toDate ? App.timeAgo(conv.lastMessageAt.toDate()) : '';

                    return \`
                    <div class="card" style="margin-bottom:12px;cursor:pointer;\${isUnread ? 'border-left:4px solid var(--primary);' : ''}" onclick="App.currentConversationId='\${conv.id}';App.render();">
                        <div class="card-body" style="padding:16px;">
                            <div style="display:flex;gap:12px;align-items:center;">
                                <img src="\${conv.listingImage || 'https://picsum.photos/60/60?grayscale'}" alt="" style="width:50px;height:50px;object-fit:cover;border-radius:6px;">
                                <div style="flex:1;min-width:0;">
                                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                                        <h4 style="font-size:14px;margin:0;\${isUnread ? 'font-weight:700;' : ''}">\${otherUserName}</h4>
                                        <span style="font-size:12px;color:var(--slate-500);">\${timeAgo}</span>
                                    </div>
                                    <p style="font-size:13px;color:var(--slate-600);margin:0 0 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">\${conv.listingTitle}</p>
                                    <p style="font-size:13px;color:var(--slate-500);margin:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;\${isUnread ? 'font-weight:600;color:var(--slate-700);' : ''}">\${conv.lastMessage}</p>
                                </div>
                                \${isUnread ? '<div style="width:10px;height:10px;background:var(--primary);border-radius:50%;"></div>' : ''}
                            </div>
                        </div>
                    </div>
                    \`;
                }).join('');
            })();
        </script>`;
    },

    renderConversationDetail() {
        return `
        <div class="page-header">
            <div class="container">
                <button class="btn btn-ghost" onclick="App.currentConversationId=null;App.render();" style="margin-bottom:8px;">← Back to Messages</button>
                <h1>Conversation</h1>
            </div>
        </div>
        <div class="container section">
            <div id="conversationDetail">
                <div style="text-align:center;padding:40px;">
                    <div class="loading-spinner"></div>
                    <p class="text-muted">Loading messages...</p>
                </div>
            </div>
        </div>
        <script>
            (async () => {
                const conversationId = '${this.currentConversationId}';
                const conversationDoc = await db.collection('conversations').doc(conversationId).get();
                const conversation = conversationDoc.data();
                const messages = await loadMessages(conversationId);
                const container = document.getElementById('conversationDetail');
                if (!container) return;

                const otherUserId = conversation.participants.find(id => id !== App.currentUser.uid);
                const otherUserName = conversation.participantNames?.[otherUserId] || 'User';

                // Mark as read if we're the unread user
                if (conversation.unreadBy === App.currentUser.uid) {
                    await db.collection('conversations').doc(conversationId).update({ unreadBy: null });
                }

                container.innerHTML = \`
                    <!-- Listing Preview -->
                    <div class="card" style="margin-bottom:20px;">
                        <div class="card-body" style="padding:16px;">
                            <div style="display:flex;gap:12px;align-items:center;">
                                <img src="\${conversation.listingImage || 'https://picsum.photos/80/80?grayscale'}" alt="" style="width:70px;height:70px;object-fit:cover;border-radius:6px;">
                                <div style="flex:1;">
                                    <h4 style="font-size:15px;margin-bottom:4px;">\${conversation.listingTitle}</h4>
                                    <p style="font-size:15px;font-weight:600;color:var(--primary);margin:0;">\${conversation.listingPrice ? '$' + conversation.listingPrice.toLocaleString() : 'Price on Application'}</p>
                                </div>
                                <button class="btn btn-secondary btn-sm" onclick="App.navigate('listing','\${conversation.listingId}')">View Listing</button>
                            </div>
                        </div>
                    </div>

                    <!-- Messages -->
                    <div class="card">
                        <div class="card-header">
                            <h3 class="card-title">Conversation with \${otherUserName}</h3>
                        </div>
                        <div class="card-body" style="padding:0;max-height:400px;overflow-y:auto;">
                            \${messages.map(msg => {
                                const isMine = msg.senderId === App.currentUser.uid;
                                const time = msg.createdAt?.toDate ? App.timeAgo(msg.createdAt.toDate()) : '';
                                return \`
                                <div style="padding:16px;border-bottom:1px solid var(--slate-100);\${isMine ? 'background:var(--slate-50);' : ''}">
                                    <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                                        <span style="font-weight:600;font-size:13px;">\${isMine ? 'You' : msg.senderName}</span>
                                        <span style="font-size:12px;color:var(--slate-500);">\${time}</span>
                                    </div>
                                    <p style="margin:0;color:var(--slate-700);line-height:1.6;">\${msg.text}</p>
                                </div>
                                \`;
                            }).join('')}
                        </div>
                    </div>

                    <!-- Reply Form -->
                    <div class="card" style="margin-top:16px;">
                        <div class="card-body" style="padding:16px;">
                            <div style="display:flex;gap:12px;">
                                <textarea id="replyInput" class="form-input" placeholder="Type your reply..." style="flex:1;min-height:60px;resize:none;"></textarea>
                                <button class="btn btn-primary" onclick="sendReply('\${conversationId}')" style="align-self:flex-end;">Send</button>
                            </div>
                        </div>
                    </div>
                \`;
            })();
        </script>`;
    },

    renderPricing() {
        return `
        <div class="page-header"><div class="container"><h1>Monthly Subscription</h1><p class="lead">Choose the plan that's right for you</p></div></div>
        <section class="section"><div class="container">
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;max-width:1100px;margin:0 auto;">

                <!-- Free Membership -->
                <div class="card" style="text-align:center;position:relative;">
                    <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);">
                        <span style="font-size:24px;">⭐</span>
                    </div>
                    <div class="card-body" style="padding:32px 20px;">
                        <h3 style="margin:8px 0;font-size:16px;font-weight:700;">FREE MEMBERSHIP</h3>
                        <ul style="text-align:left;list-style:none;margin:20px 0;font-size:13px;">
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> Unlimited General listings</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> Unlimited Automotive listings</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> Unlimited Property listings</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> iChat</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> iRate</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> Sales report</li>
                        </ul>
                        <div style="font-size:32px;font-weight:700;margin:20px 0;">NZ$ 0.00</div>
                        <button class="btn btn-secondary" style="width:100%;" onclick="${this.currentUser ? "showToast('You are on the Free plan')" : "openModal('signup')"}">Select</button>
                    </div>
                </div>

                <!-- Real Estate Gold -->
                <div class="card" style="text-align:center;position:relative;border:2px solid #3b82f6;">
                    <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);">
                        <span style="font-size:24px;">⭐</span>
                    </div>
                    <div class="card-body" style="padding:32px 20px;">
                        <h3 style="margin:8px 0;font-size:16px;font-weight:700;">REAL ESTATE GOLD</h3>
                        <ul style="text-align:left;list-style:none;margin:20px 0;font-size:13px;">
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> 500 General listings</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> Unlimited Property listings</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> iChat</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> iRate</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> Sales report</li>
                        </ul>
                        <div style="font-size:32px;font-weight:700;margin:20px 0;">NZ$ 399</div>
                        <button class="btn btn-primary" style="width:100%;background:#3b82f6;" onclick="showToast('Contact us to subscribe')">Select</button>
                    </div>
                </div>

                <!-- Business -->
                <div class="card" style="text-align:center;position:relative;border:2px solid #ef4444;">
                    <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);">
                        <span style="font-size:24px;">⭐</span>
                    </div>
                    <div class="card-body" style="padding:32px 20px;">
                        <h3 style="margin:8px 0;font-size:16px;font-weight:700;">BUSINESS</h3>
                        <ul style="text-align:left;list-style:none;margin:20px 0;font-size:13px;">
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> 500 General listings</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> 100 Automotive listings</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> 100 Property listings</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> iChat</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> iRate</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> Motorcentral Data Import</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> Sales report</li>
                        </ul>
                        <div style="font-size:32px;font-weight:700;margin:20px 0;">NZ$ 399</div>
                        <button class="btn btn-primary" style="width:100%;background:#ef4444;" onclick="showToast('Contact us to subscribe')">Select</button>
                    </div>
                </div>

                <!-- Dealership Premium -->
                <div class="card" style="text-align:center;position:relative;border:2px solid var(--primary);">
                    <div style="position:absolute;top:-12px;left:50%;transform:translateX(-50%);">
                        <span style="font-size:24px;">⭐</span>
                    </div>
                    <div class="card-body" style="padding:32px 20px;">
                        <h3 style="margin:8px 0;font-size:16px;font-weight:700;color:var(--primary);">DEALERSHIP PREMIUM</h3>
                        <ul style="text-align:left;list-style:none;margin:20px 0;font-size:13px;">
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> 500 General listings</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> Unlimited Automotive listings</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> iRate</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> Motorcentral Data Import</li>
                            <li style="padding:6px 0;display:flex;align-items:center;gap:8px;"><span style="color:var(--primary);">✓</span> Sales report</li>
                        </ul>
                        <div style="font-size:32px;font-weight:700;color:var(--primary);margin:20px 0;">NZ$ 499</div>
                        <button class="btn btn-primary" style="width:100%;" onclick="showToast('Contact us to subscribe')">Select</button>
                    </div>
                </div>
            </div>

            <div style="text-align:center;margin-top:48px;">
                <p class="text-muted">All prices in NZD per month. Cancel anytime with 48 hours notice before billing cycle ends.</p>
                <p class="text-muted" style="margin-top:8px;">By subscribing, you agree to our <a href="#terms" onclick="App.navigate('terms')" style="color:var(--primary);">Terms and Conditions</a>.</p>
            </div>
        </div></section>`;
    },

    renderAdmin() {
        if (!this.isAdmin()) {
            return `<div class="page-header"><div class="container"><h1>Access Denied</h1><p>You don't have permission to view this page.</p></div></div>`;
        }

        return `
        <div class="page-header">
            <div class="container">
                <h1>Admin Panel</h1>
                <p class="lead">Manage listings and data</p>
            </div>
        </div>
        <div class="container" style="padding:32px 24px 80px;">
            <div class="admin-panel">
                <h3>Data Management</h3>
                <div class="admin-actions">
                    <button class="btn btn-secondary" onclick="App.adminClearListings()">Clear All Listings</button>
                    <button class="btn btn-primary" onclick="App.adminSeedData()">Seed Demo Data</button>
                    <button class="btn btn-secondary" onclick="App.adminExportData()">Export Data (JSON)</button>
                </div>
            </div>

            <div class="card" style="margin-bottom:20px;">
                <div class="card-header"><h3 class="card-title">Statistics</h3></div>
                <div class="card-body">
                    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center;">
                        <div>
                            <div style="font-size:32px;font-weight:700;color:var(--primary);">${this.listings.length}</div>
                            <div class="text-muted">Listings</div>
                        </div>
                        <div>
                            <div style="font-size:32px;font-weight:700;color:var(--primary);">${this.categories.length}</div>
                            <div class="text-muted">Categories</div>
                        </div>
                        <div>
                            <div style="font-size:32px;font-weight:700;color:var(--primary);">${this.categoryGroups.length}</div>
                            <div class="text-muted">Groups</div>
                        </div>
                        <div>
                            <div style="font-size:32px;font-weight:700;color:var(--primary);">${this.listings.filter(l => l.listingType === 'vehicle').length}</div>
                            <div class="text-muted">Vehicles</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header"><h3 class="card-title">All Listings (${this.listings.length})</h3></div>
                <div class="card-body" style="max-height:500px;overflow-y:auto;">
                    <table style="width:100%;border-collapse:collapse;font-size:13px;">
                        <thead>
                            <tr style="background:var(--slate-50);text-align:left;">
                                <th style="padding:10px;">Title</th>
                                <th style="padding:10px;">Type</th>
                                <th style="padding:10px;">Category</th>
                                <th style="padding:10px;">Price</th>
                                <th style="padding:10px;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${this.listings.map(l => `
                                <tr style="border-bottom:1px solid var(--slate-100);">
                                    <td style="padding:10px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${l.title}</td>
                                    <td style="padding:10px;">${l.listingType || 'general'}</td>
                                    <td style="padding:10px;">${l.category}</td>
                                    <td style="padding:10px;">${l.price ? '$' + l.price.toLocaleString() : 'POA'}</td>
                                    <td style="padding:10px;">
                                        <button class="btn btn-secondary" style="padding:4px 8px;font-size:12px;" onclick="App.navigate('listing','${l.id}')">View</button>
                                        <button class="btn btn-secondary" style="padding:4px 8px;font-size:12px;color:var(--error);" onclick="App.adminDeleteListing('${l.id}')">Delete</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>`;
    },

    async adminClearListings() {
        if (!this.isAdmin()) return;
        if (!confirm('Are you sure you want to delete ALL listings? This cannot be undone.')) return;

        showToast('Clearing listings...');
        try {
            const batch = db.batch();
            const snap = await db.collection('listings').get();
            snap.docs.forEach(doc => batch.delete(doc.ref));
            await batch.commit();
            this.listings = [];
            this.render();
            showToast('All listings cleared', 'success');
        } catch (e) {
            showToast('Error: ' + e.message, 'error');
        }
    },

    async adminDeleteListing(id) {
        if (!this.isAdmin()) return;
        if (!confirm('Delete this listing?')) return;

        try {
            await db.collection('listings').doc(id).delete();
            this.listings = this.listings.filter(l => l.id !== id);
            this.render();
            showToast('Listing deleted', 'success');
        } catch (e) {
            showToast('Error: ' + e.message, 'error');
        }
    },

    async adminSeedData() {
        if (!this.isAdmin()) return;
        if (!confirm('This will add demo listings to the database. Continue?')) return;

        showToast('Seeding data...');
        try {
            await seedDatabase();
            await this.loadListings();
            this.render();
            showToast('Demo data seeded successfully', 'success');
        } catch (e) {
            showToast('Error: ' + e.message, 'error');
        }
    },

    adminExportData() {
        if (!this.isAdmin()) return;
        const data = {
            listings: this.listings,
            exportedAt: new Date().toISOString()
        };
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'isqroll-listings-' + new Date().toISOString().split('T')[0] + '.json';
        a.click();
        URL.revokeObjectURL(url);
        showToast('Data exported');
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
                            <label class="form-label">Sale Type</label>
                            <select class="form-input form-select" id="listingSaleType" onchange="toggleAuctionFields()">
                                <option value="buynow">Buy Now (Fixed Price)</option>
                                <option value="auction">Auction</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label" id="priceLabel">Price ($)</label>
                            <input type="number" class="form-input" id="listingPrice" placeholder="0">
                        </div>
                        <div class="form-group" id="auctionReserveGroup" style="display:none;">
                            <label class="form-label">Reserve Price ($) <span style="color:#6B7280;font-weight:normal;">(optional)</span></label>
                            <input type="number" class="form-input" id="listingReserve" placeholder="Minimum acceptable price">
                        </div>
                    </div>

                    <div id="auctionDurationGroup" style="display:none;">
                        <div class="form-group">
                            <label class="form-label">Auction Duration</label>
                            <select class="form-input form-select" id="listingAuctionDuration">
                                <option value="3">3 days</option>
                                <option value="7" selected>7 days</option>
                                <option value="10">10 days</option>
                                <option value="14">14 days</option>
                            </select>
                        </div>
                    </div>

                    <p style="font-size:12px;color:#6B7280;margin:-8px 0 16px;padding:10px;background:#f9fafb;border-radius:6px;">
                        Listings are active for up to <strong>90 days</strong>. Auctions end after the selected duration.
                    </p>
                    
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

function toggleSubscriptionTier() {
    const accountType = document.querySelector('input[name="accountType"]:checked')?.value;
    const tierGroup = document.getElementById('subscriptionTierGroup');
    const options = document.querySelectorAll('.account-type-option');

    // Update styling on radio options
    options.forEach(opt => {
        const radio = opt.querySelector('input[type="radio"]');
        opt.style.borderColor = radio.checked ? 'var(--primary)' : '#e5e7eb';
    });

    // Show/hide subscription tier dropdown
    if (tierGroup) {
        tierGroup.style.display = accountType === 'seller' ? 'block' : 'none';
    }
}

// ============================================
// iChat MESSAGING SYSTEM
// ============================================

function openMessageModal(listingId) {
    const listing = App.listings.find(l => l.id === listingId);
    if (!listing) {
        showToast('Listing not found', 'error');
        return;
    }

    // Populate modal with listing info
    document.getElementById('messageListingId').value = listingId;
    document.getElementById('messageSellerId').value = listing.sellerId;
    document.getElementById('messageSellerName').value = listing.sellerName || 'Seller';
    document.getElementById('messageRecipient').textContent = listing.sellerName || 'Seller';

    // Show listing preview
    const preview = document.getElementById('messageListingPreview');
    document.getElementById('messageListingImage').src = listing.images?.[0] || 'https://picsum.photos/100/100?grayscale';
    document.getElementById('messageListingTitle').textContent = listing.title;
    document.getElementById('messageListingPrice').textContent = listing.price ? `$${listing.price.toLocaleString()}` : 'Price on Application';
    preview.style.display = 'block';

    // Clear previous message
    document.getElementById('messageText').value = '';

    openModal('message');
}

async function sendMessage(event) {
    event.preventDefault();

    if (!App.currentUser) {
        openModal('login');
        return;
    }

    const listingId = document.getElementById('messageListingId').value;
    const sellerId = document.getElementById('messageSellerId').value;
    const sellerName = document.getElementById('messageSellerName').value;
    const messageText = document.getElementById('messageText').value.trim();

    if (!messageText) {
        showToast('Please enter a message', 'error');
        return;
    }

    const listing = App.listings.find(l => l.id === listingId);

    try {
        // Create conversation ID (sorted user IDs for consistency)
        const participants = [App.currentUser.uid, sellerId].sort();
        const conversationId = `${participants[0]}_${participants[1]}_${listingId}`;

        // Create or update conversation
        const conversationRef = db.collection('conversations').doc(conversationId);
        const conversationDoc = await conversationRef.get();

        if (!conversationDoc.exists) {
            // Create new conversation
            await conversationRef.set({
                participants: participants,
                participantNames: {
                    [App.currentUser.uid]: App.currentUser.displayName || 'User',
                    [sellerId]: sellerName
                },
                listingId: listingId,
                listingTitle: listing?.title || 'Listing',
                listingImage: listing?.images?.[0] || '',
                listingPrice: listing?.price || null,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastMessage: messageText,
                lastMessageAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastMessageBy: App.currentUser.uid,
                unreadBy: sellerId
            });
        } else {
            // Update existing conversation
            await conversationRef.update({
                lastMessage: messageText,
                lastMessageAt: firebase.firestore.FieldValue.serverTimestamp(),
                lastMessageBy: App.currentUser.uid,
                unreadBy: sellerId
            });
        }

        // Add message to subcollection
        await conversationRef.collection('messages').add({
            senderId: App.currentUser.uid,
            senderName: App.currentUser.displayName || 'User',
            text: messageText,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            read: false
        });

        closeModal('message');
        showToast('Message sent via iChat!');

    } catch (e) {
        console.error('Send message error:', e);
        showToast('Failed to send message: ' + e.message, 'error');
    }
}

async function loadConversations() {
    if (!App.currentUser) return [];

    try {
        const snapshot = await db.collection('conversations')
            .where('participants', 'array-contains', App.currentUser.uid)
            .orderBy('lastMessageAt', 'desc')
            .limit(50)
            .get();

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (e) {
        console.error('Load conversations error:', e);
        return [];
    }
}

async function loadMessages(conversationId) {
    try {
        const snapshot = await db.collection('conversations')
            .doc(conversationId)
            .collection('messages')
            .orderBy('createdAt', 'asc')
            .get();

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (e) {
        console.error('Load messages error:', e);
        return [];
    }
}

async function sendReply(conversationId) {
    const input = document.getElementById('replyInput');
    const text = input?.value.trim();

    if (!text || !App.currentUser) return;

    try {
        const conversationRef = db.collection('conversations').doc(conversationId);
        const conversationDoc = await conversationRef.get();
        const conversation = conversationDoc.data();

        // Find the other participant
        const otherUserId = conversation.participants.find(id => id !== App.currentUser.uid);

        // Add message
        await conversationRef.collection('messages').add({
            senderId: App.currentUser.uid,
            senderName: App.currentUser.displayName || 'User',
            text: text,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            read: false
        });

        // Update conversation
        await conversationRef.update({
            lastMessage: text,
            lastMessageAt: firebase.firestore.FieldValue.serverTimestamp(),
            lastMessageBy: App.currentUser.uid,
            unreadBy: otherUserId
        });

        // Reload conversation view
        App.render();
        showToast('Reply sent!');

    } catch (e) {
        console.error('Send reply error:', e);
        showToast('Failed to send reply', 'error');
    }
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
    const accountType = document.querySelector('input[name="accountType"]:checked')?.value || 'buyer';
    const subscriptionTier = document.getElementById('signupTier')?.value || 'free';

    App.signup(
        document.getElementById('signupEmail').value,
        document.getElementById('signupPassword').value,
        document.getElementById('signupName').value,
        accountType,
        subscriptionTier
    );
}

function toggleListingFields() {
    const type = document.getElementById('listingType').value;
    document.getElementById('vehicleFields').style.display = type === 'vehicle' ? 'block' : 'none';
    document.getElementById('propertyFields').style.display = type === 'property' ? 'block' : 'none';
}

function toggleAuctionFields() {
    const saleType = document.getElementById('listingSaleType').value;
    const isAuction = saleType === 'auction';

    // Update price label
    const priceLabel = document.getElementById('priceLabel');
    if (priceLabel) {
        priceLabel.textContent = isAuction ? 'Starting Bid ($)' : 'Price ($)';
    }

    // Show/hide auction-specific fields
    const reserveGroup = document.getElementById('auctionReserveGroup');
    const durationGroup = document.getElementById('auctionDurationGroup');

    if (reserveGroup) reserveGroup.style.display = isAuction ? 'block' : 'none';
    if (durationGroup) durationGroup.style.display = isAuction ? 'block' : 'none';
}

async function placeBid(listingId, bidAmount) {
    if (!App.currentUser) {
        openModal('login');
        return;
    }

    bidAmount = parseInt(bidAmount);
    if (isNaN(bidAmount) || bidAmount <= 0) {
        showToast('Please enter a valid bid amount', 'error');
        return;
    }

    try {
        const listingRef = db.collection('listings').doc(listingId);
        const doc = await listingRef.get();

        if (!doc.exists) {
            showToast('Listing not found', 'error');
            return;
        }

        const listing = doc.data();

        // Check if auction has ended
        if (listing.expiresAt) {
            const expiryDate = listing.expiresAt.toDate();
            if (new Date() > expiryDate) {
                showToast('This auction has ended', 'error');
                return;
            }
        }

        // Check if bid is high enough
        const currentPrice = listing.currentBid || listing.startingBid || listing.price || 0;
        const minBid = currentPrice + Math.max(1, Math.floor(currentPrice * 0.05));

        if (bidAmount < minBid) {
            showToast(`Bid must be at least $${minBid.toLocaleString()}`, 'error');
            return;
        }

        // Check reserve price
        if (listing.reservePrice && bidAmount < listing.reservePrice) {
            showToast(`Bid placed! Reserve not yet met.`);
        } else {
            showToast(`Bid of $${bidAmount.toLocaleString()} placed successfully!`);
        }

        // Update listing with new bid
        await listingRef.update({
            currentBid: bidAmount,
            bidCount: firebase.firestore.FieldValue.increment(1),
            bidHistory: firebase.firestore.FieldValue.arrayUnion({
                userId: App.currentUser.uid,
                userName: App.currentUser.displayName || 'Anonymous',
                amount: bidAmount,
                timestamp: new Date().toISOString()
            })
        });

        // Reload listings and re-render
        await App.loadListings();
        App.render();

    } catch (e) {
        console.error('Bid error:', e);
        showToast('Failed to place bid: ' + e.message, 'error');
    }
}

async function createListing(e) {
    e.preventDefault();
    if (!App.currentUser) return;

    const type = document.getElementById('listingType').value;
    const saleType = document.getElementById('listingSaleType')?.value || 'buynow';

    // Calculate expiry date (90 days for Buy Now, auction duration for auctions)
    const now = new Date();
    let expiresAt;

    if (saleType === 'auction') {
        const auctionDays = parseInt(document.getElementById('listingAuctionDuration')?.value) || 7;
        expiresAt = new Date(now.getTime() + (auctionDays * 24 * 60 * 60 * 1000));
    } else {
        // 90 day max listing duration
        expiresAt = new Date(now.getTime() + (90 * 24 * 60 * 60 * 1000));
    }

    const listing = {
        title: document.getElementById('listingTitle').value,
        price: parseInt(document.getElementById('listingPrice').value) || null,
        category: document.getElementById('listingCat').value,
        description: document.getElementById('listingDesc').value,
        location: document.getElementById('listingLoc').value,
        images: [document.getElementById('listingImage').value || 'https://picsum.photos/800/600?grayscale'],
        listingType: type,
        saleType: saleType,
        sellerId: App.currentUser.uid,
        sellerName: App.currentUser.displayName || 'User',
        sellerVerified: true,
        status: 'active',
        views: 0,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        expiresAt: firebase.firestore.Timestamp.fromDate(expiresAt)
    };

    // Add auction-specific fields
    if (saleType === 'auction') {
        listing.reservePrice = parseInt(document.getElementById('listingReserve')?.value) || null;
        listing.startingBid = listing.price;
        listing.currentBid = null;
        listing.bidCount = 0;
        listing.bidHistory = [];
        listing.auctionEnded = false;
    }

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
        showToast(saleType === 'auction' ? 'Auction created!' : 'Listing created!');
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
