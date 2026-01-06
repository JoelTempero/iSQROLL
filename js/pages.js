// ============================================
// iSQROLL - Static Pages
// ============================================

const Pages = {
    
    about() {
        return `
        <div class="page-header">
            <div class="container">
                <h1>About iSQROLL</h1>
                <p class="lead">A marketplace designed for Kiwis, by Kiwis</p>
            </div>
        </div>

        <section class="section" style="background:var(--white);">
            <div class="container" style="max-width:900px;">
                <!-- Welcome Section -->
                <div style="text-align:center;margin-bottom:48px;">
                    <p style="font-size:1.25rem;line-height:1.8;color:var(--slate-600);">
                        Welcome to iSQROLL, a marketplace designed for Kiwis, by Kiwis. Our mission is to create a
                        community driven platform that provides a safe buying and selling environment with easy
                        communication between traders.
                    </p>
                    <p style="font-size:1.1rem;line-height:1.8;color:var(--slate-600);margin-top:16px;">
                        We believe businesses and individual buyers and sellers are important contributors to the
                        economic health of New Zealand, and that buying and selling should be accessible with minimal cost.
                    </p>
                    <p style="font-size:1.1rem;line-height:1.8;color:var(--slate-600);margin-top:16px;">
                        As consumers ourselves, we believe that we know what New Zealanders are asking for when it comes
                        to an online marketplace and have committed to and pioneered an easy, inexpensive and modernized
                        buying and selling platform for Aotearoa, New Zealand.
                    </p>
                </div>

                <!-- Mission Statement -->
                <div class="card" style="margin-bottom:32px;border-left:4px solid var(--primary);">
                    <div class="card-body" style="padding:40px;">
                        <h3 style="margin-bottom:16px;color:var(--primary);">Our Mission</h3>
                        <p style="color:var(--slate-600);line-height:1.8;font-size:1.1rem;">
                            Our vision is to be New Zealand's most trusted and valued online marketplace. Our dedication
                            to this vision means we are here for the subscribers and users of iSQROLL, and so welcome
                            your feedback and ideas.
                        </p>
                        <p style="color:var(--slate-600);line-height:1.8;margin-top:16px;font-size:1.1rem;">
                            By providing the right platform for Kiwis with a very low-cost membership fee, we aim to
                            keep more money in your pocket. So you can buy and sell as much as you want.
                        </p>
                    </div>
                </div>

                <!-- Founders Section -->
                <div class="card" style="margin-bottom:32px;">
                    <div class="card-body" style="padding:40px;">
                        <h3 style="margin-bottom:24px;text-align:center;">Meet the Founders</h3>
                        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:32px;margin-bottom:24px;">
                            <div style="text-align:center;">
                                <div style="width:100px;height:100px;background:var(--primary);border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
                                    <span style="color:white;font-size:36px;font-weight:600;">R</span>
                                </div>
                                <h4 style="margin-bottom:4px;">Raymond</h4>
                                <p style="color:var(--slate-500);font-size:14px;">Co-Founder</p>
                            </div>
                            <div style="text-align:center;">
                                <div style="width:100px;height:100px;background:var(--accent);border-radius:50%;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;">
                                    <span style="color:white;font-size:36px;font-weight:600;">R</span>
                                </div>
                                <h4 style="margin-bottom:4px;">Robbie</h4>
                                <p style="color:var(--slate-500);font-size:14px;">Co-Founder</p>
                            </div>
                        </div>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            As regular buyers and sellers ourselves we started to notice an increase in the cost to sell
                            goods, and that they were becoming increasingly uncertain that profiles belonged to the people
                            they said they were. That's when we had a lightbulb moment.
                        </p>
                        <p style="color:var(--slate-600);line-height:1.8;margin-top:16px;">
                            Our kiwi ingenuity kicked in, and our mission to design a platform that was membership based
                            and safe to use was born. That means verifiable accounts and low-cost subscriptions which
                            equates to a safe and affordable platform for everyday kiwis.
                        </p>
                        <p style="color:var(--slate-600);line-height:1.8;margin-top:16px;">
                            After months of intensive research and designing the platform, we are proud to present
                            <strong>iSQROLL - the online marketplace of New Zealand</strong>.
                        </p>
                    </div>
                </div>

                <!-- Key Features -->
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-bottom:32px;">
                    <div class="card" style="text-align:center;">
                        <div class="card-body" style="padding:32px;">
                            <div style="font-size:48px;margin-bottom:12px;">$0</div>
                            <h4 style="margin-bottom:8px;">Free to Join</h4>
                            <p style="color:var(--slate-500);font-size:14px;">No joining fees, ever. Get started without spending a cent.</p>
                        </div>
                    </div>
                    <div class="card" style="text-align:center;">
                        <div class="card-body" style="padding:32px;">
                            <div style="font-size:48px;margin-bottom:12px;">0%</div>
                            <h4 style="margin-bottom:8px;">Success Fees</h4>
                            <p style="color:var(--slate-500);font-size:14px;">Keep 100% of your sale. No commissions taken.</p>
                        </div>
                    </div>
                    <div class="card" style="text-align:center;">
                        <div class="card-body" style="padding:32px;">
                            <div style="font-size:48px;margin-bottom:12px;">100%</div>
                            <h4 style="margin-bottom:8px;">Kiwi Owned</h4>
                            <p style="color:var(--slate-500);font-size:14px;">Proudly New Zealand owned and operated.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tagline Banner -->
        <section class="section" style="background:var(--slate-900);color:white;text-align:center;padding:60px 0;">
            <div class="container">
                <h2 style="font-size:2rem;color:white;margin-bottom:8px;">iSQROLL</h2>
                <p style="font-size:1.25rem;color:var(--slate-400);">The online marketplace of New Zealand</p>
            </div>
        </section>

        <section class="section">
            <div class="container">
                <div style="text-align:center;">
                    <h2 style="margin-bottom:16px;">Ready to get started?</h2>
                    <p class="text-muted" style="margin-bottom:32px;">Join thousands of Kiwis already buying and selling on iSQROLL</p>
                    <div style="display:flex;gap:16px;justify-content:center;">
                        <button class="btn btn-primary btn-lg" onclick="openModal('signup')">Create Free Account</button>
                        <button class="btn btn-secondary btn-lg" onclick="App.navigate('browse')">Browse Listings</button>
                    </div>
                </div>
            </div>
        </section>`;
    },

    howItWorks() {
        return `
        <div class="page-header">
            <div class="container">
                <h1>How It Works</h1>
                <p class="lead">Start buying or selling in minutes</p>
            </div>
        </div>
        
        <!-- For Buyers -->
        <section class="section" style="background:var(--white);">
            <div class="container">
                <h2 style="text-align:center;margin-bottom:48px;">🛒 For Buyers</h2>
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:32px;">
                    <div style="text-align:center;">
                        <div style="width:64px;height:64px;background:var(--primary-glow);border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px;">1</div>
                        <h4 style="margin-bottom:8px;">Browse</h4>
                        <p class="text-muted">Search through thousands of listings across New Zealand</p>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:64px;height:64px;background:var(--primary-glow);border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px;">2</div>
                        <h4 style="margin-bottom:8px;">Connect</h4>
                        <p class="text-muted">Message sellers directly to ask questions or make offers</p>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:64px;height:64px;background:var(--primary-glow);border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px;">3</div>
                        <h4 style="margin-bottom:8px;">Arrange</h4>
                        <p class="text-muted">Agree on price, pickup or delivery, and payment method</p>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:64px;height:64px;background:var(--primary-glow);border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px;">4</div>
                        <h4 style="margin-bottom:8px;">Complete</h4>
                        <p class="text-muted">Meet up or receive your item, then leave a review</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- For Sellers -->
        <section class="section">
            <div class="container">
                <h2 style="text-align:center;margin-bottom:48px;">💰 For Sellers</h2>
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:32px;">
                    <div style="text-align:center;">
                        <div style="width:64px;height:64px;background:var(--accent);background:linear-gradient(135deg,var(--accent),var(--accent-light));border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px;color:var(--slate-900);">1</div>
                        <h4 style="margin-bottom:8px;">List Free</h4>
                        <p class="text-muted">Create your listing with photos and description – no fees</p>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:64px;height:64px;background:var(--accent);background:linear-gradient(135deg,var(--accent),var(--accent-light));border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px;color:var(--slate-900);">2</div>
                        <h4 style="margin-bottom:8px;">Get Verified</h4>
                        <p class="text-muted">Build trust with buyers by getting verified at no cost</p>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:64px;height:64px;background:var(--accent);background:linear-gradient(135deg,var(--accent),var(--accent-light));border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px;color:var(--slate-900);">3</div>
                        <h4 style="margin-bottom:8px;">Chat & Negotiate</h4>
                        <p class="text-muted">Communicate with interested buyers through our platform</p>
                    </div>
                    <div style="text-align:center;">
                        <div style="width:64px;height:64px;background:var(--accent);background:linear-gradient(135deg,var(--accent),var(--accent-light));border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:28px;color:var(--slate-900);">4</div>
                        <h4 style="margin-bottom:8px;">Get Paid</h4>
                        <p class="text-muted">Complete the sale and receive payment directly</p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Features -->
        <section class="section" style="background:var(--slate-900);color:var(--white);">
            <div class="container">
                <h2 style="color:var(--white);text-align:center;margin-bottom:48px;">Why Choose iSQROLL?</h2>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;">
                    <div class="card" style="background:var(--slate-800);border-color:var(--slate-700);">
                        <div class="card-body" style="padding:32px;text-align:center;">
                            <div style="font-size:48px;margin-bottom:16px;">🆓</div>
                            <h4 style="color:var(--white);margin-bottom:8px;">Free to List</h4>
                            <p style="color:var(--slate-400);">No listing fees, no success fees. Keep 100% of your sale price.</p>
                        </div>
                    </div>
                    <div class="card" style="background:var(--slate-800);border-color:var(--slate-700);">
                        <div class="card-body" style="padding:32px;text-align:center;">
                            <div style="font-size:48px;margin-bottom:16px;">🛡️</div>
                            <h4 style="color:var(--white);margin-bottom:8px;">Safe & Secure</h4>
                            <p style="color:var(--slate-400);">Verified users, no scammers, no fake accounts. Trade with confidence.</p>
                        </div>
                    </div>
                    <div class="card" style="background:var(--slate-800);border-color:var(--slate-700);">
                        <div class="card-body" style="padding:32px;text-align:center;">
                            <div style="font-size:48px;margin-bottom:16px;">💬</div>
                            <h4 style="color:var(--white);margin-bottom:8px;">Easy Communication</h4>
                            <p style="color:var(--slate-400);">Built-in messaging makes it easy to chat with buyers and sellers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- CTA -->
        <section class="section">
            <div class="container" style="text-align:center;">
                <h2 style="margin-bottom:16px;">Ready to start?</h2>
                <p class="text-muted" style="margin-bottom:32px;">Explore the new world of trading goods. Scroll through to grab your new!</p>
                <div style="display:flex;gap:16px;justify-content:center;">
                    <button class="btn btn-primary btn-lg" onclick="openModal('signup')">Sign Up Free</button>
                    <button class="btn btn-secondary btn-lg" onclick="App.navigate('seller-guide')">Seller Guide →</button>
                </div>
            </div>
        </section>`;
    },

    sellerGuide() {
        return `
        <div class="page-header">
            <div class="container">
                <h1>Seller Guide</h1>
                <p class="lead">Tips to help you sell faster and get the best price</p>
            </div>
        </div>
        
        <section class="section" style="background:var(--white);">
            <div class="container" style="max-width:800px;">
                
                <div class="card" style="margin-bottom:24px;">
                    <div class="card-body" style="padding:32px;">
                        <h3 style="margin-bottom:16px;">📸 Take Great Photos</h3>
                        <ul style="color:var(--slate-600);line-height:2;margin-left:20px;">
                            <li>Use natural lighting – photograph near a window or outdoors</li>
                            <li>Take multiple angles – front, back, sides, and any details</li>
                            <li>Show any flaws honestly – buyers appreciate transparency</li>
                            <li>Clean your item before photographing</li>
                            <li>Use a plain background to make your item stand out</li>
                        </ul>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:24px;">
                    <div class="card-body" style="padding:32px;">
                        <h3 style="margin-bottom:16px;">✍️ Write a Great Description</h3>
                        <ul style="color:var(--slate-600);line-height:2;margin-left:20px;">
                            <li>Include brand, model, size, and colour</li>
                            <li>Describe the condition honestly</li>
                            <li>Mention any accessories included</li>
                            <li>State your reason for selling</li>
                            <li>Include measurements where relevant</li>
                            <li>Mention if original packaging/receipts are included</li>
                        </ul>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:24px;">
                    <div class="card-body" style="padding:32px;">
                        <h3 style="margin-bottom:16px;">💰 Price It Right</h3>
                        <ul style="color:var(--slate-600);line-height:2;margin-left:20px;">
                            <li>Research similar items on iSQROLL and other platforms</li>
                            <li>Consider the original price and current condition</li>
                            <li>Price slightly higher if you're open to offers</li>
                            <li>Be realistic – overpriced items sit unsold</li>
                            <li>Consider bundling related items for a better deal</li>
                        </ul>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:24px;">
                    <div class="card-body" style="padding:32px;">
                        <h3 style="margin-bottom:16px;">🚚 Shipping & Pickup</h3>
                        <ul style="color:var(--slate-600);line-height:2;margin-left:20px;">
                            <li>Offer both pickup and shipping if possible</li>
                            <li>Calculate shipping costs accurately before listing</li>
                            <li>Consider offering free shipping – it attracts buyers</li>
                            <li>Package items securely for shipping</li>
                            <li>Use tracked shipping for valuable items</li>
                        </ul>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:24px;">
                    <div class="card-body" style="padding:32px;">
                        <h3 style="margin-bottom:16px;">💬 Communication Tips</h3>
                        <ul style="color:var(--slate-600);line-height:2;margin-left:20px;">
                            <li>Respond to messages promptly</li>
                            <li>Be friendly and professional</li>
                            <li>Answer questions thoroughly</li>
                            <li>Be flexible with viewing times</li>
                            <li>Follow up if a buyer goes quiet</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </section>
        
        <section class="section">
            <div class="container" style="text-align:center;">
                <h2 style="margin-bottom:16px;">Ready to list your first item?</h2>
                <p class="text-muted" style="margin-bottom:32px;">It's free and takes less than 2 minutes</p>
                <button class="btn btn-primary btn-lg" onclick="${App.currentUser ? "App.navigate('create')" : "openModal('signup')"}">Create Listing</button>
            </div>
        </section>`;
    },

    faq() {
        const faqs = [
            {
                q: "What is iSQROLL?",
                a: "iSQROLL is an online platform where buyers and sellers can connect to purchase and sell a wide range of products, from cars and houses to electronics to clothing and everything in between."
            },
            {
                q: "How do I create a dealership premium membership?",
                a: "Simply contact the team on info@isqroll.co.nz or call Ray our Automotive accounts manager on 027 463 7463 to assist you in making an account and uploading your listings."
            },
            {
                q: "What is our Free membership pricing and details per month?",
                a: "Free each month with unlimited General Item listings (including automotive parts, accessories and pets), unlimited Automotive listings, unlimited Property listings, Sales report, iChat, and iRate - all for $0.00."
            },
            {
                q: "Is there any lock-in contract with iSQROLL memberships?",
                a: "No, there are no lock-in contracts with our memberships. You can simply opt out as you please! The freedom of our customers is important to us."
            },
            {
                q: "What payment methods are accepted?",
                a: "The payment methods for subscriptions are debit or credit cards, whereas between users is bank transfer or cash depending on the seller's listing requirement."
            },
            {
                q: "Is there a fee to join iSQROLL?",
                a: "It is free to join iSQROLL."
            },
            {
                q: "How do I create an account?",
                a: "To create an account, click on the 'Sign Up' button at the top right corner of the homepage and follow the instructions. iSQROLL does not store any personal verification details."
            },
            {
                q: "How do I find products?",
                a: "You can search for products using the search bar at the top of the page or browse through categories and featured items on the homepage."
            },
            {
                q: "How do I reset my password?",
                a: "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions."
            },
            {
                q: "How do I update my account information?",
                a: "You can update your account information by logging in and going to the 'Account Settings' section."
            },
            {
                q: "What should I do if I encounter a problem with a seller or buyer?",
                a: "If you have an issue with a transaction, please contact our customer support team. We have a dispute resolution process in place to help resolve any problems."
            },
            {
                q: "How do I report suspicious activity?",
                a: "If you notice any suspicious activity, please report it to us immediately through the 'Contact Us' page or email us at info@isqroll.co.nz"
            },
            {
                q: "How do I contact customer support?",
                a: "You can reach our customer support team via the 'Contact Us' page or email us at info@isqroll.co.nz"
            }
        ];

        return \`
        <div class="page-header">
            <div class="container">
                <h1>Frequently Asked Questions</h1>
                <p class="lead">Everything you need to know about iSQROLL</p>
            </div>
        </div>

        <section class="section" style="background:var(--white);">
            <div class="container" style="max-width:800px;">
                \${faqs.map(faq => \`
                <div class="card" style="margin-bottom:16px;">
                    <div class="card-body" style="padding:24px;">
                        <h3 style="margin-bottom:12px;">\${faq.q}</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">\${faq.a}</p>
                    </div>
                </div>
                \`).join('')}
            </div>
        </section>

        <section class="section">
            <div class="container" style="text-align:center;">
                <h2 style="margin-bottom:16px;">Still have questions?</h2>
                <p class="text-muted" style="margin-bottom:32px;">We're here to help</p>
                <div style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
                    <button class="btn btn-primary btn-lg" onclick="App.navigate('contact')">Contact Us</button>
                    <a href="mailto:info@isqroll.co.nz" class="btn btn-secondary btn-lg">Email info@isqroll.co.nz</a>
                </div>
            </div>
        </section>\`;
    },

    contact() {
        return `
        <div class="page-header">
            <div class="container">
                <h1>Contact Us</h1>
                <p class="lead">We'd love to hear from you</p>
            </div>
        </div>
        
        <section class="section" style="background:var(--white);">
            <div class="container" style="max-width:800px;">
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;">
                    <div>
                        <h3 style="margin-bottom:24px;">Get in Touch</h3>
                        <p style="color:var(--slate-600);line-height:1.8;margin-bottom:32px;">
                            Have a question, feedback, or need help with something? 
                            We're here to help. Fill out the form and we'll get back to you as soon as possible.
                        </p>
                        
                        <div style="margin-bottom:24px;">
                            <h4 style="font-size:16px;margin-bottom:8px;">📧 Email</h4>
                            <p style="color:var(--slate-600);">support@isqroll.co.nz</p>
                        </div>
                        
                        <div style="margin-bottom:24px;">
                            <h4 style="font-size:16px;margin-bottom:8px;">📞 Phone</h4>
                            <p style="color:var(--slate-600);">Ray: 027 463 7463</p>
                        </div>
                        
                        <div style="margin-bottom:24px;">
                            <h4 style="font-size:16px;margin-bottom:8px;">📍 Address</h4>
                            <p style="color:var(--slate-600);">56 Victoria Avenue<br>Whanganui 4500<br>New Zealand</p>
                        </div>
                        
                        <div>
                            <h4 style="font-size:16px;margin-bottom:8px;">🕐 Response Time</h4>
                            <p style="color:var(--slate-600);">We typically respond within 24 hours</p>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-body" style="padding:32px;">
                            <form onsubmit="event.preventDefault();showToast('Message sent! We\\'ll be in touch soon.');this.reset();">
                                <div class="form-group">
                                    <label class="form-label">Name</label>
                                    <input type="text" class="form-input" required>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-input" required>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Subject</label>
                                    <select class="form-input form-select">
                                        <option>General Enquiry</option>
                                        <option>Technical Support</option>
                                        <option>Report a Problem</option>
                                        <option>Feedback</option>
                                        <option>Business Enquiry</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label class="form-label">Message</label>
                                    <textarea class="form-input form-textarea" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary" style="width:100%;">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    },

    privacy() {
        return `
        <div class="page-header">
            <div class="container">
                <h1>Privacy Policy</h1>
                <p class="lead">iSQROLL Limited (NZCN 8829013)</p>
            </div>
        </div>
        
        <section class="section" style="background:var(--white);">
            <div class="container" style="max-width:800px;">
                <div class="card">
                    <div class="card-body" style="padding:40px;">
                        <p style="color:var(--slate-600);margin-bottom:32px;">
                            This Privacy Policy explains how iSQROLL Limited collects, uses, and protects your 
                            personal information in accordance with the Privacy Act 2020 (New Zealand).
                        </p>
                        <div style="color:var(--slate-600);line-height:1.9;">
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">1. Information We Collect</h3>
                            <p style="margin-bottom:24px;">
                                When you use iSQROLL, we collect information you provide directly, such as your name, 
                                email address, phone number, and location. We also collect information about your 
                                listings and transactions on our platform.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">2. How We Use Your Information</h3>
                            <p style="margin-bottom:24px;">
                                We use your information to provide and improve our services, facilitate transactions 
                                between buyers and sellers, communicate with you about your account, and ensure the 
                                safety and security of our platform.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">3. Information Sharing</h3>
                            <p style="margin-bottom:24px;">
                                We share your information with other users as necessary to facilitate transactions 
                                (e.g., sharing your contact details with a buyer). We do not sell your personal 
                                information to third parties.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">4. Data Security</h3>
                            <p style="margin-bottom:24px;">
                                We implement appropriate technical and organisational measures to protect your 
                                personal information against unauthorised access, alteration, disclosure, or destruction.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">5. Your Rights</h3>
                            <p style="margin-bottom:24px;">
                                You have the right to access, correct, or delete your personal information. 
                                You can manage your account settings or contact us to exercise these rights.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">6. Cookies</h3>
                            <p style="margin-bottom:24px;">
                                We use cookies and similar technologies to improve your experience, analyse usage, 
                                and deliver relevant content. You can manage cookie preferences through your browser settings.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">7. Contact Us</h3>
                            <p>
                                If you have questions about this Privacy Policy, please contact us at 
                                <a href="mailto:privacy@isqroll.co.nz" style="color:var(--primary);">privacy@isqroll.co.nz</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    },

    terms() {
        return `
        <div class="page-header">
            <div class="container">
                <h1>Terms and Conditions</h1>
                <p class="lead">iSQROLL Limited (NZCN 8829013)</p>
            </div>
        </div>

        <section class="section" style="background:var(--white);">
            <div class="container" style="max-width:900px;">

                <!-- Table of Contents -->
                <div class="card" style="margin-bottom:24px;">
                    <div class="card-body" style="padding:24px;">
                        <h3 style="margin-bottom:16px;">Contents</h3>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:14px;">
                            <a onclick="document.getElementById('intro').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">1. Introduction</a>
                            <a onclick="document.getElementById('membership').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">2. Membership Types</a>
                            <a onclick="document.getElementById('accounts').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">3. Account Registration</a>
                            <a onclick="document.getElementById('verification').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">4. Identity Verification</a>
                            <a onclick="document.getElementById('listings').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">5. Listings</a>
                            <a onclick="document.getElementById('buying').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">6. Buying on iSQROLL</a>
                            <a onclick="document.getElementById('ichat').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">7. iChat Messaging</a>
                            <a onclick="document.getElementById('irate').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">8. iRate Reviews</a>
                            <a onclick="document.getElementById('payments').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">9. Payments & Transactions</a>
                            <a onclick="document.getElementById('prohibited').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">10. Prohibited Items</a>
                            <a onclick="document.getElementById('fees').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">11. Fees & Subscriptions</a>
                            <a onclick="document.getElementById('liability').scrollIntoView({behavior:'smooth'})" style="color:var(--primary);text-decoration:none;cursor:pointer;">12. Liability</a>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body" style="padding:40px;">
                        <p style="color:var(--slate-600);margin-bottom:32px;font-style:italic;">
                            Last updated: January 2026. These Terms and Conditions ("Terms") govern your access to and use of
                            the iSQROLL platform, operated by iSQROLL Limited, a New Zealand registered company (NZCN 8829013),
                            with registered offices at 56 Victoria Avenue, Whanganui 4500, New Zealand.
                        </p>

                        <div style="color:var(--slate-600);line-height:1.9;">

                            <!-- 1. Introduction -->
                            <h3 id="intro" style="color:var(--slate-900);margin-bottom:16px;">1. Introduction</h3>
                            <p style="margin-bottom:16px;">
                                iSQROLL is a community platform that provides a safe buying and selling environment with easy
                                communication between traders. We believe businesses and individual buyers and sellers are
                                important contributors to the economic health of New Zealand.
                            </p>
                            <p style="margin-bottom:24px;">
                                By accessing or using iSQROLL, you agree to be bound by these Terms. If you do not agree to
                                these Terms, you must not access or use iSQROLL. These Terms constitute a legally binding
                                agreement between you and iSQROLL Limited.
                            </p>

                            <!-- 2. Membership Types -->
                            <h3 id="membership" style="color:var(--slate-900);margin-bottom:16px;">2. Membership Types</h3>
                            <p style="margin-bottom:16px;">
                                iSQROLL offers the following membership tiers:
                            </p>
                            <ul style="margin-bottom:16px;margin-left:20px;">
                                <li style="margin-bottom:8px;"><strong>Free Membership (NZ$0)</strong> - Unlimited general, automotive, and property listings. Access to iChat, iRate, and sales reports.</li>
                                <li style="margin-bottom:8px;"><strong>Real Estate Gold (NZ$399/month)</strong> - For real estate professionals. 500 general listings, unlimited property listings, full iChat and iRate access.</li>
                                <li style="margin-bottom:8px;"><strong>Business (NZ$399/month)</strong> - For general businesses. 500 automotive listings, unlimited general listings, enhanced visibility.</li>
                                <li style="margin-bottom:8px;"><strong>Dealership Premium (NZ$499/month)</strong> - For motor vehicle dealers. Unlimited automotive listings, priority placement, branded storefront.</li>
                            </ul>
                            <p style="margin-bottom:24px;">
                                Subscriptions are billed monthly with no lock-in contracts. You may cancel, upgrade, or downgrade
                                your subscription at any time. Changes take effect at the start of your next billing cycle.
                            </p>

                            <!-- 3. Account Registration -->
                            <h3 id="accounts" style="color:var(--slate-900);margin-bottom:16px;">3. Account Registration</h3>
                            <p style="margin-bottom:16px;">
                                To use iSQROLL, you must register for an account. iSQROLL offers two account types:
                            </p>
                            <ul style="margin-bottom:16px;margin-left:20px;">
                                <li style="margin-bottom:8px;"><strong>Buyer Account</strong> - Allows you to browse listings, contact sellers, save items, and make purchases.</li>
                                <li style="margin-bottom:8px;"><strong>Seller Account</strong> - Allows you to create listings and sell items. Requires identity verification.</li>
                            </ul>
                            <p style="margin-bottom:16px;">
                                You may hold one Buyer Account and one Seller Account. You must be at least 18 years old to
                                register. By registering, you confirm that all information provided is accurate and complete.
                            </p>
                            <p style="margin-bottom:24px;">
                                You are responsible for maintaining the confidentiality of your login credentials and for all
                                activities that occur under your account. You must notify us immediately of any unauthorised
                                access to your account.
                            </p>

                            <!-- 4. Identity Verification -->
                            <h3 id="verification" style="color:var(--slate-900);margin-bottom:16px;">4. Identity Verification</h3>
                            <p style="margin-bottom:16px;">
                                iSQROLL requires identity verification for all Seller Accounts. Verification is free and helps
                                eliminate scammers and fake accounts, building trust throughout our community.
                            </p>
                            <p style="margin-bottom:16px;">
                                To become verified, you must provide:
                            </p>
                            <ul style="margin-bottom:16px;margin-left:20px;">
                                <li style="margin-bottom:8px;">Valid New Zealand driver's licence or passport</li>
                                <li style="margin-bottom:8px;">Proof of address (utility bill or bank statement dated within 3 months)</li>
                                <li style="margin-bottom:8px;">A clear photo of yourself holding your identification</li>
                            </ul>
                            <p style="margin-bottom:24px;">
                                Verified users receive a verification badge visible on their profile and listings.
                                We encourage buyers to trade preferentially with verified sellers.
                            </p>

                            <!-- 5. Listings -->
                            <h3 id="listings" style="color:var(--slate-900);margin-bottom:16px;">5. Listings</h3>
                            <p style="margin-bottom:16px;">
                                Sellers may create listings in the following formats:
                            </p>
                            <ul style="margin-bottom:16px;margin-left:20px;">
                                <li style="margin-bottom:8px;"><strong>Buy Now</strong> - Fixed price listings where buyers can purchase immediately at the stated price.</li>
                                <li style="margin-bottom:8px;"><strong>Auction</strong> - Time-limited listings where buyers bid competitively. The highest bidder at auction close wins.</li>
                            </ul>
                            <p style="margin-bottom:16px;">
                                <strong>Listing Duration:</strong> All listings have a maximum duration of 90 days. After 90 days,
                                listings automatically expire and must be relisted if the item remains unsold.
                            </p>
                            <p style="margin-bottom:16px;">
                                Sellers must provide accurate, complete, and honest descriptions of items. All photos must be
                                of the actual item being sold (stock photos are not permitted except for new, sealed items).
                            </p>
                            <p style="margin-bottom:24px;">
                                iSQROLL reserves the right to remove any listing that violates these Terms, contains misleading
                                information, or is otherwise inappropriate at our sole discretion.
                            </p>

                            <!-- 6. Buying on iSQROLL -->
                            <h3 id="buying" style="color:var(--slate-900);margin-bottom:16px;">6. Buying on iSQROLL</h3>
                            <p style="margin-bottom:16px;">
                                When you purchase an item or win an auction on iSQROLL, you enter into a binding contract
                                with the seller. You are obligated to complete the purchase at the agreed price.
                            </p>
                            <p style="margin-bottom:16px;">
                                Buyers should:
                            </p>
                            <ul style="margin-bottom:16px;margin-left:20px;">
                                <li style="margin-bottom:8px;">Read listings carefully before purchasing</li>
                                <li style="margin-bottom:8px;">Ask questions via iChat before committing</li>
                                <li style="margin-bottom:8px;">Inspect items before completing payment where possible</li>
                                <li style="margin-bottom:8px;">Complete payment promptly after agreeing to purchase</li>
                                <li style="margin-bottom:8px;">Leave honest feedback via iRate after the transaction</li>
                            </ul>
                            <p style="margin-bottom:24px;">
                                iSQROLL is not a party to transactions between buyers and sellers. We provide the platform
                                but are not responsible for the quality, safety, legality, or delivery of items.
                            </p>

                            <!-- 7. iChat Messaging -->
                            <h3 id="ichat" style="color:var(--slate-900);margin-bottom:16px;">7. iChat Messaging</h3>
                            <p style="margin-bottom:16px;">
                                iChat is iSQROLL's built-in messaging system that enables communication between buyers and
                                sellers. iChat is available to all registered users.
                            </p>
                            <p style="margin-bottom:16px;">
                                When using iChat, you must:
                            </p>
                            <ul style="margin-bottom:16px;margin-left:20px;">
                                <li style="margin-bottom:8px;">Communicate respectfully and professionally</li>
                                <li style="margin-bottom:8px;">Not use abusive, threatening, or harassing language</li>
                                <li style="margin-bottom:8px;">Not share personal contact details to circumvent iSQROLL</li>
                                <li style="margin-bottom:8px;">Not send spam or unsolicited commercial messages</li>
                                <li style="margin-bottom:8px;">Report suspicious or fraudulent messages</li>
                            </ul>
                            <p style="margin-bottom:24px;">
                                iSQROLL may monitor iChat messages to ensure compliance with these Terms and to prevent fraud.
                                Messages may be retained for dispute resolution purposes.
                            </p>

                            <!-- 8. iRate Reviews -->
                            <h3 id="irate" style="color:var(--slate-900);margin-bottom:16px;">8. iRate Reviews</h3>
                            <p style="margin-bottom:16px;">
                                iRate is iSQROLL's feedback and rating system. After completing a transaction, both buyers
                                and sellers are encouraged to leave honest reviews.
                            </p>
                            <p style="margin-bottom:16px;">
                                Reviews must:
                            </p>
                            <ul style="margin-bottom:16px;margin-left:20px;">
                                <li style="margin-bottom:8px;">Be honest and based on your actual experience</li>
                                <li style="margin-bottom:8px;">Relate to the specific transaction</li>
                                <li style="margin-bottom:8px;">Not contain personal attacks or defamatory content</li>
                                <li style="margin-bottom:8px;">Not be used to extort or threaten other users</li>
                            </ul>
                            <p style="margin-bottom:24px;">
                                iSQROLL reserves the right to remove reviews that violate these Terms. Attempts to manipulate
                                ratings through fake reviews, review swapping, or other fraudulent means will result in
                                account suspension.
                            </p>

                            <!-- 9. Payments & Transactions -->
                            <h3 id="payments" style="color:var(--slate-900);margin-bottom:16px;">9. Payments & Transactions</h3>
                            <p style="margin-bottom:16px;">
                                <strong>All transactions on iSQROLL must be monetary.</strong> Bartering, trading, or exchanging
                                goods without monetary payment is not permitted on our platform.
                            </p>
                            <p style="margin-bottom:16px;">
                                Payments are arranged directly between buyers and sellers. Common payment methods include:
                            </p>
                            <ul style="margin-bottom:16px;margin-left:20px;">
                                <li style="margin-bottom:8px;">Bank transfer</li>
                                <li style="margin-bottom:8px;">Cash on pickup</li>
                                <li style="margin-bottom:8px;">PayNow or similar instant payment services</li>
                            </ul>
                            <p style="margin-bottom:16px;">
                                iSQROLL does not process payments or hold funds. We recommend:
                            </p>
                            <ul style="margin-bottom:16px;margin-left:20px;">
                                <li style="margin-bottom:8px;">Using traceable payment methods for valuable items</li>
                                <li style="margin-bottom:8px;">Meeting in safe, public locations for pickups</li>
                                <li style="margin-bottom:8px;">Inspecting items before paying</li>
                                <li style="margin-bottom:8px;">Being cautious of requests for unusual payment methods</li>
                            </ul>
                            <p style="margin-bottom:24px;">
                                iSQROLL is not liable for payment disputes, fraud, or non-payment between users.
                            </p>

                            <!-- 10. Prohibited Items -->
                            <h3 id="prohibited" style="color:var(--slate-900);margin-bottom:16px;">10. Prohibited Items & Conduct</h3>
                            <p style="margin-bottom:16px;">
                                The following items and activities are prohibited on iSQROLL:
                            </p>
                            <ul style="margin-bottom:16px;margin-left:20px;">
                                <li style="margin-bottom:8px;">Illegal items or items that violate New Zealand law</li>
                                <li style="margin-bottom:8px;">Stolen goods or items with unclear ownership</li>
                                <li style="margin-bottom:8px;">Counterfeit, replica, or pirated goods</li>
                                <li style="margin-bottom:8px;">Weapons, explosives, and ammunition</li>
                                <li style="margin-bottom:8px;">Drugs, drug paraphernalia, and controlled substances</li>
                                <li style="margin-bottom:8px;">Hazardous materials and recalled products</li>
                                <li style="margin-bottom:8px;">Adult content and services</li>
                                <li style="margin-bottom:8px;">Live animals (unless authorised breeders)</li>
                                <li style="margin-bottom:8px;">Human remains or body parts</li>
                                <li style="margin-bottom:8px;">Items that infringe intellectual property rights</li>
                            </ul>
                            <p style="margin-bottom:24px;">
                                Listings for prohibited items will be removed immediately. Users who repeatedly violate these
                                rules will have their accounts terminated.
                            </p>

                            <!-- 11. Fees & Subscriptions -->
                            <h3 id="fees" style="color:var(--slate-900);margin-bottom:16px;">11. Fees & Subscriptions</h3>
                            <p style="margin-bottom:16px;">
                                <strong>No success fees:</strong> iSQROLL does not charge success fees or commissions on sales.
                                You keep 100% of your sale price.
                            </p>
                            <p style="margin-bottom:16px;">
                                Subscription fees are billed monthly in advance. All prices are in New Zealand Dollars and
                                include GST where applicable.
                            </p>
                            <p style="margin-bottom:24px;">
                                We may change our subscription prices with 30 days' notice. Price changes will not affect
                                your current billing period. Continued use after a price change constitutes acceptance.
                            </p>

                            <!-- 12. Liability -->
                            <h3 id="liability" style="color:var(--slate-900);margin-bottom:16px;">12. Limitation of Liability</h3>
                            <p style="margin-bottom:16px;">
                                iSQROLL provides a platform to connect buyers and sellers. We are not a party to transactions
                                and do not guarantee:
                            </p>
                            <ul style="margin-bottom:16px;margin-left:20px;">
                                <li style="margin-bottom:8px;">The quality, safety, or legality of items listed</li>
                                <li style="margin-bottom:8px;">The truth or accuracy of listings</li>
                                <li style="margin-bottom:8px;">The ability of sellers to sell or buyers to pay</li>
                                <li style="margin-bottom:8px;">That users will complete transactions</li>
                            </ul>
                            <p style="margin-bottom:16px;">
                                To the maximum extent permitted by New Zealand law, iSQROLL Limited shall not be liable for
                                any indirect, incidental, special, consequential, or punitive damages arising from your use
                                of our platform.
                            </p>
                            <p style="margin-bottom:24px;">
                                Nothing in these Terms excludes or limits liability that cannot be excluded under New Zealand
                                law, including the Consumer Guarantees Act 1993.
                            </p>

                            <!-- Governing Law -->
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">13. Governing Law</h3>
                            <p style="margin-bottom:24px;">
                                These Terms are governed by the laws of New Zealand. Any disputes arising from these Terms
                                or your use of iSQROLL shall be subject to the exclusive jurisdiction of the courts of
                                New Zealand.
                            </p>

                            <!-- Contact -->
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">14. Contact Us</h3>
                            <p style="margin-bottom:16px;">
                                For questions about these Terms and Conditions, please contact us:
                            </p>
                            <p style="margin-bottom:8px;">
                                <strong>iSQROLL Limited</strong><br>
                                56 Victoria Avenue<br>
                                Whanganui 4500<br>
                                New Zealand
                            </p>
                            <p style="margin-bottom:8px;">
                                Email: <a href="mailto:legal@isqroll.co.nz" style="color:var(--primary);">legal@isqroll.co.nz</a>
                            </p>
                            <p>
                                Phone: 027 463 7463
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }
};
