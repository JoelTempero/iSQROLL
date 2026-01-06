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
                            <h4 style="font-size:16px;margin-bottom:8px;">📍 Location</h4>
                            <p style="color:var(--slate-600);">Whanganui, New Zealand</p>
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
                <p class="lead">Last updated: January 2026</p>
            </div>
        </div>
        
        <section class="section" style="background:var(--white);">
            <div class="container" style="max-width:800px;">
                <div class="card">
                    <div class="card-body" style="padding:40px;">
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
                <h1>Terms of Use</h1>
                <p class="lead">Last updated: January 2026</p>
            </div>
        </div>
        
        <section class="section" style="background:var(--white);">
            <div class="container" style="max-width:800px;">
                <div class="card">
                    <div class="card-body" style="padding:40px;">
                        <div style="color:var(--slate-600);line-height:1.9;">
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">1. Acceptance of Terms</h3>
                            <p style="margin-bottom:24px;">
                                By accessing or using iSQROLL, you agree to be bound by these Terms of Use. 
                                If you do not agree to these terms, please do not use our platform.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">2. Eligibility</h3>
                            <p style="margin-bottom:24px;">
                                You must be at least 18 years old to use iSQROLL. By using our platform, 
                                you represent that you meet this age requirement.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">3. User Accounts</h3>
                            <p style="margin-bottom:24px;">
                                You are responsible for maintaining the confidentiality of your account 
                                credentials and for all activities under your account. You must provide 
                                accurate information when creating your account.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">4. Listing Rules</h3>
                            <p style="margin-bottom:24px;">
                                All listings must be for legal items. Prohibited items include illegal goods, 
                                stolen property, counterfeit items, weapons, and anything that violates 
                                New Zealand law. We reserve the right to remove any listing at our discretion.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">5. Transactions</h3>
                            <p style="margin-bottom:24px;">
                                iSQROLL provides a platform for buyers and sellers to connect. We are not 
                                party to any transaction and are not responsible for the quality, safety, 
                                or legality of items listed, or the ability of sellers to sell or buyers to pay.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">6. User Conduct</h3>
                            <p style="margin-bottom:24px;">
                                You agree not to use iSQROLL for any unlawful purpose, to harass other users, 
                                to post false or misleading information, or to interfere with the operation 
                                of our platform.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">7. Limitation of Liability</h3>
                            <p style="margin-bottom:24px;">
                                iSQROLL is provided "as is" without warranties of any kind. We shall not be 
                                liable for any indirect, incidental, or consequential damages arising from 
                                your use of our platform.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">8. Changes to Terms</h3>
                            <p style="margin-bottom:24px;">
                                We may update these Terms of Use from time to time. We will notify users of 
                                significant changes. Continued use of iSQROLL after changes constitutes 
                                acceptance of the new terms.
                            </p>
                            
                            <h3 style="color:var(--slate-900);margin-bottom:16px;">9. Contact</h3>
                            <p>
                                For questions about these Terms of Use, contact us at 
                                <a href="mailto:legal@isqroll.co.nz" style="color:var(--primary);">legal@isqroll.co.nz</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>`;
    }
};
