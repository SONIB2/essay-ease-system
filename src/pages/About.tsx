import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Shield, Users, Award, Clock, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Confidentiality",
    description:
      "Your privacy is paramount. All communications and materials are strictly confidential.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We maintain the highest academic standards with rigorous quality control processes.",
  },
  {
    icon: Clock,
    title: "Timely Delivery",
    description:
      "We understand deadlines matter. Your work is delivered on time, every time.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our writers hold advanced degrees and specialize in various academic fields.",
  },
  {
    icon: Target,
    title: "Custom Approach",
    description:
      "Every project is tailored to your specific requirements and academic standards.",
  },
  {
    icon: Heart,
    title: "Student Success",
    description:
      "Your academic success is our mission. We're dedicated to helping you achieve your goals.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | TEMADIPLOME.CE</title>
        <meta
          name="description"
          content="Learn about TEMADIPLOME.CE - your trusted partner for academic excellence. Discover our mission, values, and commitment to student success."
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
                About <span className="text-gradient-gold">Us</span>
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">
                Empowering students to achieve academic excellence since 2018.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                  Our Mission
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Bridging the Gap to Academic Success
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At TEMADIPLOME.CE, we believe every student deserves the
                  opportunity to excel. Our mission is to provide high-quality
                  academic assistance that helps students overcome challenges,
                  develop their skills, and achieve their educational goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Who We Are
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We are a team of academic professionals, including PhD
                    holders, researchers, and experienced writers who are
                    passionate about education. Based in Albania, we serve
                    students across the Balkans and beyond.
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    What We Do
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We provide comprehensive academic assistance services,
                    including thesis writing, research support, data analysis,
                    editing, and more. Our work serves as a guide and reference
                    for students.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Drives Us
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
