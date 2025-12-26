import { motion } from "framer-motion";
import { FileText, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Submit Your Brief",
    description:
      "Fill out our detailed order form with your requirements, deadline, and any specific instructions.",
  },
  {
    icon: CreditCard,
    step: "02",
    title: "Secure Payment",
    description:
      "Pay a deposit or full amount through our secure payment system. Your payment is protected.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Receive Your Work",
    description:
      "Track your order progress and receive your completed work on time, with free revisions.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get your academic work done in three simple steps. We make the
            process seamless and stress-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:border-secondary/30 transition-all duration-300 hover:shadow-lg group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 px-3 py-1 bg-secondary text-secondary-foreground text-sm font-bold rounded-full">
                    Step {item.step}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
