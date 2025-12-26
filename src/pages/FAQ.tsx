import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General Questions",
    questions: [
      {
        q: "What services do you offer?",
        a: "We offer comprehensive academic assistance including thesis writing (Bachelor's, Master's, PhD), seminar papers, coursework assignments, research projects, PowerPoint presentations, SPSS/Excel data analysis, editing & formatting, and translation services in Albanian, English, and Italian.",
      },
      {
        q: "How does the process work?",
        a: "It's simple: 1) Fill out our detailed order form with your requirements, 2) Receive an instant price quote and make payment, 3) Track your order progress and communicate with us, 4) Receive your completed work on time with free revisions if needed.",
      },
      {
        q: "Who writes the papers?",
        a: "Our team consists of qualified academic professionals, including PhD holders and experienced researchers who specialize in various academic fields. Each writer is carefully vetted for their expertise and academic writing skills.",
      },
    ],
  },
  {
    title: "Pricing & Payments",
    questions: [
      {
        q: "How is pricing calculated?",
        a: "Pricing depends on several factors: type of work, academic level, number of pages, deadline urgency, and any additional services. Our online calculator provides instant, transparent quotes before you place an order.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept major credit/debit cards through our secure Stripe payment system. Bank transfers are also available for larger orders. All transactions are encrypted and secure.",
      },
      {
        q: "Do you require full payment upfront?",
        a: "For most orders, we offer flexible payment options. You can pay a 50% deposit to start your order and the remaining balance upon completion, or pay in full for a small discount.",
      },
    ],
  },
  {
    title: "Quality & Delivery",
    questions: [
      {
        q: "Is the work original?",
        a: "Absolutely. All work is written from scratch based on your specific requirements. We never reuse or resell papers. Each order includes a plagiarism check to ensure 100% originality.",
      },
      {
        q: "What if I need revisions?",
        a: "We offer free revisions within the scope of your original requirements. Basic package includes 2 revisions, Standard includes 5, and Premium offers unlimited revisions. Simply request changes through your student portal.",
      },
      {
        q: "How do you ensure quality?",
        a: "Every paper goes through our quality assurance process, including thorough research, expert writing, internal review, plagiarism checking, and final formatting before delivery.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    questions: [
      {
        q: "Is my information confidential?",
        a: "Yes, we maintain strict confidentiality. Your personal information, order details, and all communications are encrypted and never shared with third parties. We take your privacy seriously.",
      },
      {
        q: "Will anyone know I used your service?",
        a: "No. We never disclose client information. All files and communications are securely stored and accessible only to you and your assigned team member. Your academic reputation is safe with us.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <>
      <Helmet>
        <title>FAQ | TEMADIPLOME.CE</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about our academic services, pricing, quality, and privacy policies."
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
                Frequently Asked <span className="text-gradient-gold">Questions</span>
              </h1>
              <p className="text-lg text-primary-foreground/70 leading-relaxed">
                Everything you need to know about our services. Can't find an
                answer? Contact our support team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, catIndex) => (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                >
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((item, qIndex) => (
                      <AccordionItem
                        key={qIndex}
                        value={`${catIndex}-${qIndex}`}
                        className="bg-card rounded-xl border border-border px-6 shadow-sm"
                      >
                        <AccordionTrigger className="text-left font-medium text-foreground hover:text-secondary py-5">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FAQ;
