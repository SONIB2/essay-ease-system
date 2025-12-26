import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  FileText,
  GraduationCap,
  BarChart3,
  Edit,
  Languages,
  Presentation,
  FlaskConical,
  ArrowRight,
} from "lucide-react";

export const services = [
  {
    id: "bachelor",
    icon: GraduationCap,
    title: "Bachelor Thesis",
    description: "Comprehensive bachelor's degree thesis with original research and proper methodology.",
    startingPrice: 300,
    features: ["Research Design", "Literature Review", "Methodology", "Data Analysis", "Conclusions"],
  },
  {
    id: "master",
    icon: BookOpen,
    title: "Master Thesis",
    description: "Advanced master's level research with sophisticated analysis and critical evaluation.",
    startingPrice: 500,
    features: ["Advanced Research", "Critical Analysis", "Original Findings", "Expert Guidance", "Revisions"],
  },
  {
    id: "seminar",
    icon: FileText,
    title: "Seminar Paper",
    description: "Well-structured seminar papers with thorough research and academic rigor.",
    startingPrice: 80,
    features: ["Topic Research", "Structure Planning", "Citation Format", "Quality Review"],
  },
  {
    id: "coursework",
    icon: Edit,
    title: "Coursework Assignment",
    description: "High-quality coursework tailored to your specific course requirements.",
    startingPrice: 50,
    features: ["Custom Writing", "Subject Expertise", "Deadline Guarantee", "Free Revisions"],
  },
  {
    id: "research",
    icon: FlaskConical,
    title: "Research Project",
    description: "In-depth research projects with comprehensive methodology and analysis.",
    startingPrice: 250,
    features: ["Research Design", "Data Collection", "Statistical Analysis", "Report Writing"],
  },
  {
    id: "presentation",
    icon: Presentation,
    title: "PowerPoint Presentation",
    description: "Professional academic presentations with compelling visuals and clear structure.",
    startingPrice: 40,
    features: ["Visual Design", "Content Structure", "Speaker Notes", "Formatting"],
  },
  {
    id: "spss",
    icon: BarChart3,
    title: "SPSS / Excel Analysis",
    description: "Expert statistical analysis using SPSS, Excel, or other statistical tools.",
    startingPrice: 100,
    features: ["Data Cleaning", "Statistical Tests", "Visualization", "Interpretation"],
  },
  {
    id: "editing",
    icon: Edit,
    title: "Editing & Formatting",
    description: "Professional editing, proofreading, and formatting to academic standards.",
    startingPrice: 30,
    features: ["Grammar Check", "Style Consistency", "Citation Format", "Layout Polish"],
  },
  {
    id: "translation",
    icon: Languages,
    title: "Translation",
    description: "Academic translation services between Albanian, English, and Italian.",
    startingPrice: 25,
    features: ["Academic Terminology", "Native Speakers", "Quality Assurance", "Fast Delivery"],
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-subtle">
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
            Our Expertise
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Academic Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From thesis writing to data analysis, we offer comprehensive academic
            support tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.slice(0, 6).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-full bg-card rounded-2xl p-6 lg:p-8 shadow-card border border-border hover:border-secondary/30 hover:shadow-lg transition-all duration-300 group">
                {/* Icon & Price */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-muted-foreground">Starting at</span>
                    <p className="text-2xl font-bold text-secondary">€{service.startingPrice}</p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="w-full group/btn" asChild>
                  <Link to={`/book?service=${service.id}`}>
                    Order Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="default" size="lg" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
