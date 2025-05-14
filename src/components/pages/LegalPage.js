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
                    MyMenuCart provides a platform for meal planning, recipe management, and grocery shopping through Kroger integration. We are not responsible for the quality of products, availability, or services provided by Kroger or other third-party services integrated with our application.
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
                    <strong>Information We Collect:</strong> We collect information you provide directly to us, such as your recipe data, meal plans, shopping lists, and Kroger account connection information (through secure OAuth). Our app may also request access to your device's camera for recipe scanning and iOS Reminders for shopping list integration.
                </p>
                <p>
                    <strong>How We Use Your Information:</strong> We use your information to provide our meal planning and grocery shopping services, synchronize your recipes with your shopping list, connect with Kroger's systems for product lookup and ordering, and improve our services. With your permission, we may access your camera to scan recipes and your iOS Reminders to create grocery lists.
                </p>
                <p>
                    <strong>Third-Party Services:</strong> Our application integrates with Kroger's API for product lookup, cart management, and ordering. Your use of these features is also subject to Kroger's privacy policy and terms of service.
                </p>
                <p>
                    <strong>Data Security:</strong> We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or disclosure. All communication with third-party services is conducted through secure, encrypted channels.
                </p>
            </section>

            <section className="legal-section">
                <h2>Kroger Integration</h2>
                <p>
                    MyMenuCart integrates with Kroger's systems to enhance your grocery shopping experience. This integration allows you to add ingredients from recipes directly to your Kroger cart, search for products, and maintain lists of regularly ordered items.
                </p>
                <p>
                    When you connect your Kroger account, you authorize MyMenuCart to access your Kroger account information in accordance with the permissions you grant. MyMenuCart does not store your Kroger password.
                </p>
                <p>
                    Please note that Kroger's availability, pricing, and product offerings are controlled by Kroger and subject to change. MyMenuCart is not affiliated with or endorsed by Kroger.
                </p>
            </section>

            <section className="legal-section">
                <h2>Recipe Sharing & Content</h2>
                <p>
                    MyMenuCart enables you to share recipes, import recipes from websites via our share extension, and scan recipes using your device's camera. By sharing content through our platform, you represent that you have the right to share such content and grant MyMenuCart a license to use it for providing our services.
                </p>
                <p>
                    We respect intellectual property rights and expect our users to do the same. If you believe content shared through our platform infringes your copyright, please contact us.
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
