import React from 'react';
import './LegalPage.css';

function LegalPage() {
    return (
        <div className="legal-page">
            <h1>Legal Information</h1>

            <section className="legal-section">
                <h2>Terms of Service</h2>
                <p>
                    Welcome to MyMenuCart. By accessing or using our application, you agree to be bound by these Terms of Service.
                </p>
                <p>
                    MyMenuCart provides a platform for users to browse restaurant menus, place orders, and process payments. We are not responsible for the quality of food or service provided by the restaurants listed in our application.
                </p>
                <p>
                    We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting. Your continued use of the application after any modifications indicates your acceptance of the modified terms.
                </p>
            </section>

            <section className="legal-section">
                <h2>Privacy Policy</h2>
                <p>
                    At MyMenuCart, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
                </p>
                <p>
                    <strong>Information We Collect:</strong> We collect information you provide directly to us, such as your name, email address, phone number, and payment information when you create an account or place an order.
                </p>
                <p>
                    <strong>How We Use Your Information:</strong> We use your information to process your orders, provide customer support, and improve our services. We may also use your information to send promotional emails about new features or special offers.
                </p>
                <p>
                    <strong>Data Security:</strong> We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or disclosure.
                </p>
            </section>

            <section className="legal-section">
                <h2>Copyright Notice</h2>
                <p>
                    © {new Date().getFullYear()} MyMenuCart. All rights reserved. The content, design, graphics, and other materials on this application are protected by copyright and other intellectual property rights.
                </p>
            </section>

            <section className="legal-section">
                <h2>Contact Us</h2>
                <p>
                    If you have any questions about our legal policies, please contact us at:
                </p>
                <p>
                    Email: legal@mymenucart.com<br />
                    Address: 123 App Street, Mobile, AL 36608
                </p>
            </section>
        </div>
    );
}

export default LegalPage;
