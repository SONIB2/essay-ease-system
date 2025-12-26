import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | TEMADIPLOME.CE</title>
        <meta
          name="description"
          content="Learn how TEMADIPLOME.CE collects, uses, and protects your personal data in compliance with GDPR."
        />
      </Helmet>
      <Layout>
        <section className="py-16 lg:py-24 bg-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Privacy Policy
              </h1>
              <p className="text-primary-foreground/70">
                GDPR Compliant • Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border"
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  1. Data Controller
                </h2>
                <p className="text-muted-foreground mb-6">
                  TEMADIPLOME.CE is the data controller responsible for your personal
                  data. We are committed to protecting your privacy and complying with
                  the General Data Protection Regulation (GDPR).
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  2. Data We Collect
                </h2>
                <p className="text-muted-foreground mb-3">
                  We collect the following categories of personal data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Identity data: name, email, phone number</li>
                  <li>Order data: project requirements, uploaded files</li>
                  <li>Payment data: transaction records (processed securely by Stripe)</li>
                  <li>Technical data: IP address, browser type, cookies</li>
                  <li>Communication data: messages and correspondence</li>
                </ul>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  3. How We Use Your Data
                </h2>
                <p className="text-muted-foreground mb-3">We use your data to:</p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you about your projects</li>
                  <li>Process payments securely</li>
                  <li>Improve our services and website</li>
                  <li>Comply with legal obligations</li>
                </ul>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  4. Legal Basis for Processing
                </h2>
                <p className="text-muted-foreground mb-6">
                  We process your data based on: contractual necessity (to fulfill your
                  order), your consent (for marketing communications), legitimate
                  interests (to improve our services), and legal obligations (for
                  accounting and tax purposes).
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  5. Data Retention
                </h2>
                <p className="text-muted-foreground mb-6">
                  We retain your personal data only for as long as necessary to fulfill
                  the purposes for which it was collected. Order data is retained for 5
                  years for legal and accounting purposes. You may request deletion at
                  any time.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground mb-3">Under GDPR, you have the right to:</p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing</li>
                  <li>Data portability</li>
                  <li>Withdraw consent at any time</li>
                </ul>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  7. Data Security
                </h2>
                <p className="text-muted-foreground mb-6">
                  We implement appropriate technical and organizational measures to
                  protect your data, including encryption, secure servers, and access
                  controls. We never sell your data to third parties.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  8. Cookies
                </h2>
                <p className="text-muted-foreground mb-6">
                  We use essential cookies to ensure our website functions properly. We
                  also use analytics cookies to understand how visitors use our site.
                  You can manage cookie preferences through your browser settings.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  9. Contact Us
                </h2>
                <p className="text-muted-foreground">
                  For privacy-related inquiries or to exercise your rights, contact our
                  Data Protection Officer at privacy@temadiplome.ce
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Privacy;
