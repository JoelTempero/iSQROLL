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
            <div class="container" style="max-width:800px;">
                <div style="text-align:center;margin-bottom:48px;">
                    <p style="font-size:1.25rem;line-height:1.8;color:var(--slate-600);">
                        iSQROLL is a community platform that provides a safe buying and selling environment 
                        with easy communication between traders. We believe businesses and individual buyers 
                        and sellers are important contributors to the economic health of New Zealand.
                    </p>
                </div>
                
                <div class="card" style="margin-bottom:32px;">
                    <div class="card-body" style="padding:40px;">
                        <h3 style="margin-bottom:16px;">🎯 Our Mission</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            We set out to create a marketplace where buying and selling is accessible to everyone. 
                            Whether you're a small business owner, a hobbyist looking to sell some gear, or someone 
                            hunting for a bargain – iSQROLL is here for you.
                        </p>
                        <p style="color:var(--slate-600);line-height:1.8;margin-top:16px;">
                            Unlike other platforms that charge hefty fees, we believe in keeping costs low so you 
                            can keep more of your hard-earned money. Our affordable memberships start from $0, 
                            giving you the freedom to buy and sell without the hassle.
                        </p>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:32px;">
                    <div class="card-body" style="padding:40px;">
                        <h3 style="margin-bottom:16px;">🛡️ Safety First</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            We're committed to creating a safe trading environment. Our verification system 
                            helps eliminate scammers and fake accounts – and best of all, getting verified 
                            costs nothing. Every user can be verified at no cost, building trust throughout 
                            our community.
                        </p>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:32px;">
                    <div class="card-body" style="padding:40px;">
                        <h3 style="margin-bottom:16px;">🇳🇿 Proudly New Zealand</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            iSQROLL is 100% Kiwi owned and operated. We understand the unique needs of 
                            New Zealand traders because we are New Zealand traders. From Northland to 
                            Southland, we're building a platform that connects communities across Aotearoa.
                        </p>
                        <p style="color:var(--slate-600);line-height:1.8;margin-top:16px;">
                            Founded in Whanganui, we're proud to be part of the movement supporting local 
                            businesses and sustainable commerce in New Zealand.
                        </p>
                    </div>
                </div>
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
        return `
        <div class="page-header">
            <div class="container">
                <h1>Frequently Asked Questions</h1>
                <p class="lead">Everything you need to know about iSQROLL</p>
            </div>
        </div>
        
        <section class="section" style="background:var(--white);">
            <div class="container" style="max-width:800px;">
                
                <div class="card" style="margin-bottom:16px;">
                    <div class="card-body" style="padding:24px;">
                        <h3 style="margin-bottom:12px;">Is iSQROLL free to use?</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            Yes! Our basic membership is completely free. You can browse listings, contact sellers, 
                            save items to your watchlist, and create up to 5 listings per month at no cost. 
                            We also offer affordable paid plans for sellers who want unlimited listings and extra features.
                        </p>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:16px;">
                    <div class="card-body" style="padding:24px;">
                        <h3 style="margin-bottom:12px;">Are there any lock-in contracts?</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            No lock-in contracts at all. You can upgrade, downgrade, or cancel your membership at any time. 
                            We believe in earning your business, not trapping you in it.
                        </p>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:16px;">
                    <div class="card-body" style="padding:24px;">
                        <h3 style="margin-bottom:12px;">How does verification work?</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            Getting verified is free and helps build trust in the community. Verified users have 
                            confirmed their identity, which gives buyers and sellers confidence when trading. 
                            You can request verification through your profile settings.
                        </p>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:16px;">
                    <div class="card-body" style="padding:24px;">
                        <h3 style="margin-bottom:12px;">I'm a car dealership. Can I list my vehicles?</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            Absolutely! We welcome dealerships and businesses. Our Business membership gives you 
                            unlimited listings, a branded profile page, and priority placement. Contact us to 
                            discuss how we can help showcase your inventory.
                        </p>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:16px;">
                    <div class="card-body" style="padding:24px;">
                        <h3 style="margin-bottom:12px;">How do I contact a seller?</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            Simply click the "Contact" or "Message" button on any listing. You'll need to be logged 
                            in to send messages. Once you send a message, the seller will be notified and can respond 
                            directly to you.
                        </p>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:16px;">
                    <div class="card-body" style="padding:24px;">
                        <h3 style="margin-bottom:12px;">Is iSQROLL safe?</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            We take safety seriously. Our free verification system helps eliminate scammers and fake 
                            accounts. We also provide feedback ratings so you can see a seller's track record. 
                            For vehicles, we display background checks including stolen and damaged import status.
                        </p>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:16px;">
                    <div class="card-body" style="padding:24px;">
                        <h3 style="margin-bottom:12px;">What can I sell on iSQROLL?</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            Almost anything legal! We have categories for vehicles, property, farming equipment, 
                            electronics, clothing, home goods, and much more. Check our categories page for the 
                            full list. Some items are restricted – please review our Terms of Use.
                        </p>
                    </div>
                </div>
                
                <div class="card" style="margin-bottom:16px;">
                    <div class="card-body" style="padding:24px;">
                        <h3 style="margin-bottom:12px;">How do payments work?</h3>
                        <p style="color:var(--slate-600);line-height:1.8;">
                            Payments are arranged directly between buyers and sellers. Most transactions use 
                            bank transfer or cash on pickup. We recommend using secure payment methods and 
                            meeting in safe, public locations for pickups.
                        </p>
                    </div>
                </div>
                
            </div>
        </section>
        
        <section class="section">
            <div class="container" style="text-align:center;">
                <h2 style="margin-bottom:16px;">Still have questions?</h2>
                <p class="text-muted" style="margin-bottom:32px;">We're here to help</p>
                <button class="btn btn-primary btn-lg" onclick="App.navigate('contact')">Contact Us</button>
            </div>
        </section>`;
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
                            <a href="#intro" style="color:var(--primary);text-decoration:none;">1. Introduction</a>
                            <a href="#membership" style="color:var(--primary);text-decoration:none;">2. Membership Types</a>
                            <a href="#accounts" style="color:var(--primary);text-decoration:none;">3. Account Registration</a>
                            <a href="#verification" style="color:var(--primary);text-decoration:none;">4. Identity Verification</a>
                            <a href="#listings" style="color:var(--primary);text-decoration:none;">5. Listings</a>
                            <a href="#buying" style="color:var(--primary);text-decoration:none;">6. Buying on iSQROLL</a>
                            <a href="#ichat" style="color:var(--primary);text-decoration:none;">7. iChat Messaging</a>
                            <a href="#irate" style="color:var(--primary);text-decoration:none;">8. iRate Reviews</a>
                            <a href="#payments" style="color:var(--primary);text-decoration:none;">9. Payments & Transactions</a>
                            <a href="#prohibited" style="color:var(--primary);text-decoration:none;">10. Prohibited Items</a>
                            <a href="#fees" style="color:var(--primary);text-decoration:none;">11. Fees & Subscriptions</a>
                            <a href="#liability" style="color:var(--primary);text-decoration:none;">12. Liability</a>
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
