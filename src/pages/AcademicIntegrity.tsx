import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { AlertTriangle } from "lucide-react";

const AcademicIntegrity = () => {
  return (
    <>
      <Helmet>
        <title>Academic Integrity Disclaimer | TEMADIPLOME.CE</title>
        <meta
          name="description"
          content="Important information about the intended use of our academic assistance services and academic integrity guidelines."
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
                Academic Integrity Disclaimer
              </h1>
              <p className="text-primary-foreground/70">
                Please read this important notice carefully
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
                {/* Important Notice Banner */}
                <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-6 mb-8 flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Important Notice
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      The materials provided by TEMADIPLOME.CE are intended for
                      academic assistance, research, and reference purposes only.
                      They should be used as learning aids and guides for creating
                      your own original work.
                    </p>
                  </div>
                </div>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Purpose of Our Services
                </h2>
                <p className="text-muted-foreground mb-6">
                  TEMADIPLOME.CE provides academic assistance services designed to help
                  students understand complex topics, learn proper research
                  methodologies, and develop their academic writing skills. Our
                  materials serve as:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Research and reference materials</li>
                  <li>Examples of proper academic writing structure</li>
                  <li>Guides for understanding methodology and analysis</li>
                  <li>Learning resources for academic skill development</li>
                  <li>Templates and frameworks for original work</li>
                </ul>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Intended Use
                </h2>
                <p className="text-muted-foreground mb-6">
                  Materials provided by TEMADIPLOME.CE should be used to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Gain understanding of how to approach academic writing</li>
                  <li>Learn proper citation and referencing techniques</li>
                  <li>Study research methodology and analytical approaches</li>
                  <li>Develop critical thinking and writing skills</li>
                  <li>Create your own original academic work</li>
                </ul>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Student Responsibility
                </h2>
                <p className="text-muted-foreground mb-6">
                  By using our services, you acknowledge and agree that:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>
                    You are responsible for understanding and following your
                    institution's academic integrity policies
                  </li>
                  <li>
                    Materials provided should not be submitted as your own work
                    without proper transformation and attribution
                  </li>
                  <li>
                    You understand the consequences of academic misconduct at your
                    institution
                  </li>
                  <li>
                    You will use our materials ethically and in accordance with
                    academic standards
                  </li>
                  <li>
                    TEMADIPLOME.CE is not responsible for how you ultimately use
                    the materials provided
                  </li>
                </ul>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Academic Integrity Values
                </h2>
                <p className="text-muted-foreground mb-6">
                  We believe in the importance of academic integrity and encourage all
                  students to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground mb-6 space-y-2">
                  <li>Develop their own ideas and arguments</li>
                  <li>Practice honest scholarship</li>
                  <li>Give proper credit to sources and ideas</li>
                  <li>Submit only original work</li>
                  <li>Seek legitimate help when struggling academically</li>
                </ul>

                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                  Our Commitment
                </h2>
                <p className="text-muted-foreground mb-6">
                  TEMADIPLOME.CE is committed to providing high-quality educational
                  resources that genuinely help students learn and improve. We do not
                  encourage or condone academic dishonesty in any form.
                </p>

                <div className="bg-muted rounded-xl p-6">
                  <p className="text-sm text-muted-foreground">
                    By proceeding with an order, you confirm that you have read,
                    understood, and agree to this Academic Integrity Disclaimer. If you
                    have questions about how to properly use our services within your
                    institution's guidelines, please contact us before placing an order.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AcademicIntegrity;
