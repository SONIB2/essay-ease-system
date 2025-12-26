import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

const Refund = () => {
  return (
    <>
      <Helmet>
        <title>Refund & Revision Policy | TEMADIPLOME.CE</title>
        <meta
          name="description"
          content="Understand our refund and revision policies for academic services at TEMADIPLOME.CE."
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
                Refund & Revision Policy
              </h1>
              <p className="text-primary-foreground/70">
                Last updated: {new Date().toLocaleDateString()}
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
                  Revision Policy
                </h2>
                <p className="text-muted-foreground mb-4">
                  We are committed to your satisfaction. Our revision policy ensures you
                  receive work that meets your requirements:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>
                    <strong>Basic Package:</strong> 2 free revisions within 7 days of
                    delivery
                  </li>
                  <li>
                    <strong>Standard Package:</strong> 5 free revisions within 14 days
                    of delivery
                  </li>
                  <li>
                    <strong>Premium Package:</strong> Unlimited revisions within 30 days
                    of delivery
                  </li>
                </ul>
                <p className="text-muted-foreground mb-6">
                  Revision requests must be within the scope of the original order.
                  Changes to requirements, additional pages, or new topics may incur
                  additional charges.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Refund Eligibility
                </h2>
                <p className="text-muted-foreground mb-4">
                  You may be eligible for a full or partial refund in the following
                  cases:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>
                    <strong>100% Refund:</strong> Order cancelled before work begins
                  </li>
                  <li>
                    <strong>100% Refund:</strong> We fail to deliver by the agreed
                    deadline (unless you approved an extension)
                  </li>
                  <li>
                    <strong>Partial Refund:</strong> Work delivered does not match the
                    agreed specifications after revision attempts
                  </li>
                  <li>
                    <strong>Partial Refund:</strong> Duplicate payment or billing error
                  </li>
                </ul>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Non-Refundable Cases
                </h2>
                <p className="text-muted-foreground mb-4">
                  Refunds will not be granted in the following situations:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>You provided incorrect or incomplete requirements</li>
                  <li>You failed to respond to revision requests or clarifications</li>
                  <li>The work has been submitted to your institution</li>
                  <li>Change of mind after work has been completed</li>
                  <li>Claims made after 30 days of delivery</li>
                </ul>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Refund Process
                </h2>
                <p className="text-muted-foreground mb-4">To request a refund:</p>
                <ol className="list-decimal list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Contact our support team at support@temadiplome.ce</li>
                  <li>Provide your order number and reason for the refund request</li>
                  <li>Our team will review your request within 3 business days</li>
                  <li>If approved, refunds are processed within 7-10 business days</li>
                  <li>Refunds are issued to the original payment method</li>
                </ol>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Quality Guarantee
                </h2>
                <p className="text-muted-foreground mb-6">
                  We stand behind the quality of our work. If you're not satisfied with
                  the final product after all revision attempts, we will work with you
                  to find a fair resolution, which may include partial refunds or
                  credits toward future orders.
                </p>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Contact
                </h2>
                <p className="text-muted-foreground">
                  For refund inquiries, please contact our support team at
                  support@temadiplome.ce or through your student portal.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Refund;
