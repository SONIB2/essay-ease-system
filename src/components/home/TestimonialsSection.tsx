import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Elena K.",
    role: "Master's Student",
    university: "University of Tirana",
    rating: 5,
    text: "TEMADIPLOME helped me complete my master's thesis on time. The quality exceeded my expectations, and the communication was excellent throughout the process.",
    avatar: "EK",
  },
  {
    name: "Arben M.",
    role: "Bachelor's Student",
    university: "Polytechnic University",
    rating: 5,
    text: "I was struggling with my research methodology, and they provided exceptional guidance. My professor was impressed with the quality of work.",
    avatar: "AM",
  },
  {
    name: "Linda S.",
    role: "PhD Candidate",
    university: "European University",
    rating: 5,
    text: "The SPSS analysis service was invaluable for my dissertation. Fast, accurate, and professionally presented. Highly recommend!",
    avatar: "LS",
  },
];

const stats = [
  { value: "5,000+", label: "Students Helped" },
  { value: "98%", label: "Satisfaction Rate" },
  { value: "15+", label: "Expert Writers" },
  { value: "24/7", label: "Support Available" },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
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
            Student Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of satisfied students who achieved academic success
            with our help.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-primary"
            >
              <p className="text-3xl lg:text-4xl font-bold text-secondary mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="h-full bg-card rounded-2xl p-8 shadow-card border border-border hover:border-secondary/30 transition-all duration-300">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-secondary/20 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-foreground">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.university}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
