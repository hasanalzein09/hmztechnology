
const PrivacyPolicy = () => {
    return (
        <section className="py-20 bg-slate-950 text-gray-300 min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
                <p className="mb-4">Last Updated: January 2025</p>

                <div className="space-y-6">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p>HMZ Technology ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
                        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                        <ul className="list-disc ml-6 mt-2 space-y-2">
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                        <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:privacy@hmz.technology" className="text-blue-400">privacy@hmz.technology</a></p>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default PrivacyPolicy
