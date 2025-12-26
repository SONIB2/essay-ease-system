import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | TEMADIPLOME.CE</title>
        <meta
          name="description"
          content="Read our terms and conditions for using TEMADIPLOME.CE academic services."
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
                Terms & Conditions
              </h1>
              <p className="text-primary-foreground/70">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-slate">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 lg:p-12 shadow-card border border-border"
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="text-muted-foreground mb-6">
                  Welcome to TEMADIPLOME.CE. By accessing our website and using our
                  services, you agree to be bound by these Terms and Conditions. Please
                  read them carefully before placing an order.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  2. Services Description
                </h2>
                <p className="text-muted-foreground mb-6">
                  TEMADIPLOME.CE provides academic assistance services including but not
                  limited to thesis writing, research support, data analysis, editing,
                  and translation. All materials provided are intended for reference and
                  guidance purposes only.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  3. Order Process
                </h2>
                <p className="text-muted-foreground mb-6">
                  Orders are placed through our online booking system. You must provide
                  accurate and complete information. We reserve the right to decline
                  orders at our discretion. Payment is required to begin work on your
                  order.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  4. Pricing and Payment
                </h2>
                <p className="text-muted-foreground mb-6">
                  Prices are displayed in Euros (€) and are subject to change. Payment
                  must be made through our approved payment methods. We accept partial
                  deposits for qualifying orders. All payments are non-refundable except
                  as outlined in our Refund Policy.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  5. Delivery
                </h2>
                <p className="text-muted-foreground mb-6">
                  We commit to delivering work by the agreed deadline. In case of
                  unforeseen delays, we will notify you promptly. Digital deliveries are
                  made through our secure student portal.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  6. Revisions
                </h2>
                <p className="text-muted-foreground mb-6">
                  Revision requests must be submitted within 14 days of delivery. The
                  number of free revisions depends on your chosen package. Revisions
                  outside the original scope may incur additional charges.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  7. Intellectual Property
                </h2>
                <p className="text-muted-foreground mb-6">
                  Upon full payment, you receive rights to use the delivered work for
                  personal educational purposes. We retain the right to use anonymized
                  samples for quality assurance purposes.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-muted-foreground mb-6">
                  TEMADIPLOME.CE shall not be liable for any indirect, incidental, or
                  consequential damages arising from the use of our services. Our
                  maximum liability is limited to the amount paid for the specific order.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  9. Contact
                </h2>
                <p className="text-muted-foreground">
                  For questions about these Terms & Conditions, please contact us at
                  info@temadiplome.ce
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Terms;
