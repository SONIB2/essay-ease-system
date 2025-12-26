import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { services } from "@/components/home/ServicesSection";
import { ArrowRight, Check } from "lucide-react";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Academic Services | TEMADIPLOME.CE</title>
        <meta
          name="description"
          content="Explore our comprehensive academic services including thesis writing, research projects, SPSS analysis, editing, and more."
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
                Our <span className="text-gradient-gold">Services</span>
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">
                From undergraduate assignments to doctoral dissertations, we
                provide expert academic assistance across all levels and
                disciplines.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shrink-0">
                      <service.icon className="w-8 h-8 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <h2 className="font-heading text-2xl font-bold text-foreground">
                          {service.title}
                        </h2>
                        <div className="text-right">
                          <span className="text-xs text-muted-foreground">From</span>
                          <p className="text-2xl font-bold text-secondary">
                            €{service.startingPrice}
                          </p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {service.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            <Check className="w-4 h-4 text-secondary shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Button variant="hero" asChild>
                        <Link to={`/book?service=${service.id}`}>
                          Order Now
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
