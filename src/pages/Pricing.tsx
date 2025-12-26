import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

const packages = [
  {
    name: "Basic",
    description: "Essential academic support for standard assignments",
    priceMultiplier: 1,
    features: [
      "Standard research depth",
      "5-7 day delivery",
      "2 free revisions",
      "Basic formatting",
      "Email support",
    ],
    notIncluded: ["Express delivery", "Priority support", "Plagiarism report"],
  },
  {
    name: "Standard",
    description: "Comprehensive support for important projects",
    priceMultiplier: 1.3,
    popular: true,
    features: [
      "In-depth research",
      "3-5 day delivery",
      "5 free revisions",
      "Advanced formatting",
      "Priority email support",
      "Plagiarism report",
      "Source verification",
    ],
    notIncluded: ["24/7 support"],
  },
  {
    name: "Premium",
    description: "Ultimate service for thesis and critical projects",
    priceMultiplier: 1.6,
    features: [
      "Comprehensive research",
      "48-hour express delivery",
      "Unlimited revisions",
      "Professional formatting",
      "24/7 priority support",
      "Detailed plagiarism report",
      "Source verification",
      "Expert consultation",
      "Quality assurance review",
    ],
    notIncluded: [],
  },
];

const priceTable = [
  { service: "Bachelor Thesis", basic: 300, standard: 390, premium: 480 },
  { service: "Master Thesis", basic: 500, standard: 650, premium: 800 },
  { service: "Seminar Paper", basic: 80, standard: 104, premium: 128 },
  { service: "Coursework", basic: 50, standard: 65, premium: 80 },
  { service: "Research Project", basic: 250, standard: 325, premium: 400 },
  { service: "PowerPoint (per slide)", basic: 5, standard: 7, premium: 9 },
  { service: "SPSS Analysis", basic: 100, standard: 130, premium: 160 },
  { service: "Editing (per page)", basic: 3, standard: 4, premium: 5 },
  { service: "Translation (per page)", basic: 8, standard: 10, premium: 13 },
];

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | TEMADIPLOME.CE</title>
        <meta
          name="description"
          content="Transparent pricing for all academic services. Choose from Basic, Standard, or Premium packages to match your needs."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-16 lg:py-24 bg-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Transparent <span className="text-gradient-gold">Pricing</span>
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">
                Choose the package that fits your needs. No hidden fees, no
                surprises – just quality academic assistance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative rounded-2xl p-8 ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground shadow-xl scale-105"
                      : "bg-card border border-border shadow-card"
                  }`}
                >
                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="flex items-center gap-1 px-4 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="font-heading text-2xl font-bold mb-2">
                      {pkg.name}
                    </h3>
                    <p
                      className={`text-sm ${
                        pkg.popular
                          ? "text-primary-foreground/70"
                          : "text-muted-foreground"
                      }`}
                    >
                      {pkg.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 shrink-0 ${
                            pkg.popular ? "text-secondary" : "text-secondary"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            pkg.popular
                              ? "text-primary-foreground/90"
                              : "text-foreground"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    variant={pkg.popular ? "hero" : "outline"}
                    className="w-full"
                    asChild
                  >
                    <Link to="/book">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Price Table */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Service Price List
              </h2>
              <p className="text-muted-foreground">
                Starting prices for each service type by package level
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-4xl mx-auto bg-card rounded-2xl shadow-card overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-primary text-primary-foreground">
                      <th className="text-left py-4 px-6 font-semibold">
                        Service
                      </th>
                      <th className="text-center py-4 px-6 font-semibold">
                        Basic
                      </th>
                      <th className="text-center py-4 px-6 font-semibold bg-secondary text-secondary-foreground">
                        Standard
                      </th>
                      <th className="text-center py-4 px-6 font-semibold">
                        Premium
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceTable.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-border ${
                          index % 2 === 0 ? "bg-background" : "bg-muted/50"
                        }`}
                      >
                        <td className="py-4 px-6 font-medium text-foreground">
                          {row.service}
                        </td>
                        <td className="text-center py-4 px-6 text-muted-foreground">
                          €{row.basic}
                        </td>
                        <td className="text-center py-4 px-6 font-semibold text-secondary bg-secondary/5">
                          €{row.standard}
                        </td>
                        <td className="text-center py-4 px-6 text-muted-foreground">
                          €{row.premium}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              * Prices may vary based on complexity, deadline, and specific
              requirements. Get an accurate quote with our booking form.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Pricing;
