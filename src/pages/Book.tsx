import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Calendar,
  Upload,
  CreditCard,
  Check,
  ArrowRight,
  ArrowLeft,
  Calculator,
} from "lucide-react";

const serviceTypes = [
  { id: "bachelor", label: "Bachelor Thesis", basePrice: 300 },
  { id: "master", label: "Master Thesis", basePrice: 500 },
  { id: "seminar", label: "Seminar Paper", basePrice: 80 },
  { id: "coursework", label: "Coursework Assignment", basePrice: 50 },
  { id: "research", label: "Research Project", basePrice: 250 },
  { id: "presentation", label: "PowerPoint Presentation", basePrice: 40 },
  { id: "spss", label: "SPSS / Excel Analysis", basePrice: 100 },
  { id: "editing", label: "Editing & Formatting", basePrice: 30 },
  { id: "translation", label: "Translation", basePrice: 25 },
];

const academicLevels = ["Bachelor", "Master", "PhD"];
const languages = [
  { id: "albanian", label: "Albanian", multiplier: 1 },
  { id: "english", label: "English", multiplier: 1.2 },
  { id: "italian", label: "Italian", multiplier: 1.15 },
];
const citationStyles = ["APA 7", "MLA", "Harvard", "Chicago"];
const urgencyLevels = [
  { id: "normal", label: "Normal (7+ days)", multiplier: 1 },
  { id: "urgent", label: "Urgent (3-6 days)", multiplier: 1.3 },
  { id: "very-urgent", label: "Very Urgent (1-2 days)", multiplier: 1.6 },
];

const addOns = [
  { id: "powerpoint", label: "PowerPoint Slides", price: 30 },
  { id: "spss-addon", label: "SPSS Analysis Add-on", price: 50 },
  { id: "plagiarism", label: "Plagiarism Report", price: 15 },
  { id: "express", label: "Express Delivery", price: 40 },
];

const steps = [
  { id: 1, title: "Service Selection", icon: FileText },
  { id: 2, title: "Specifications", icon: FileText },
  { id: 3, title: "Deadline", icon: Calendar },
  { id: 4, title: "Materials", icon: Upload },
  { id: 5, title: "Pricing", icon: Calculator },
  { id: 6, title: "Checkout", icon: CreditCard },
];

const paymentMethods = [
  {
    id: "moneygram",
    label: "MoneyGram",
    description: "Send payment via MoneyGram",
    icon: "💵",
  },
  {
    id: "western-union",
    label: "Western Union",
    description: "Send payment via Western Union",
    icon: "💸",
  },
  {
    id: "ria",
    label: "RIA Money Transfer",
    description: "Send payment via RIA",
    icon: "💳",
  },
  {
    id: "bank-transfer",
    label: "Bank Transfer",
    description: "Direct bank account transfer",
    icon: "🏦",
  },
];

interface FormData {
  // Step 1
  serviceType: string;
  academicField: string;
  academicLevel: string;
  language: string;
  // Step 2
  pages: number;
  citationStyle: string;
  references: number;
  sourcesPreference: string;
  originalityConfirm: boolean;
  // Step 3
  deadline: string;
  urgency: string;
  // Step 4
  files: File[];
  externalLinks: string;
  instructions: string;
  topic: string;
  hasOutline: boolean;
  needsConsultation: boolean;
  // Step 5
  selectedAddOns: string[];
  discountCode: string;
  // Step 6
  name: string;
  email: string;
  phone: string;
  paymentMethod: string;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
}

const Book = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    serviceType: searchParams.get("service") || "",
    academicField: "",
    academicLevel: "Bachelor",
    language: "albanian",
    pages: 10,
    citationStyle: "APA 7",
    references: 10,
    sourcesPreference: "",
    originalityConfirm: false,
    deadline: "",
    urgency: "normal",
    files: [],
    externalLinks: "",
    instructions: "",
    topic: "",
    hasOutline: false,
    needsConsultation: false,
    selectedAddOns: [],
    discountCode: "",
    name: "",
    email: "",
    phone: "",
    paymentMethod: "",
    acceptTerms: false,
    acceptPrivacy: false,
  });

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const calculatePrice = () => {
    const service = serviceTypes.find((s) => s.id === formData.serviceType);
    if (!service) return { base: 0, urgency: 0, language: 0, addOns: 0, total: 0 };

    const basePrice = service.basePrice * (formData.pages / 10);
    const urgencyMultiplier =
      urgencyLevels.find((u) => u.id === formData.urgency)?.multiplier || 1;
    const languageMultiplier =
      languages.find((l) => l.id === formData.language)?.multiplier || 1;

    const urgencyFee = basePrice * (urgencyMultiplier - 1);
    const languageFee = basePrice * (languageMultiplier - 1);
    const addOnsFee = formData.selectedAddOns.reduce((sum, id) => {
      const addOn = addOns.find((a) => a.id === id);
      return sum + (addOn?.price || 0);
    }, 0);

    const total = basePrice + urgencyFee + languageFee + addOnsFee;

    return {
      base: Math.round(basePrice),
      urgency: Math.round(urgencyFee),
      language: Math.round(languageFee),
      addOns: addOnsFee,
      total: Math.round(total),
    };
  };

  const pricing = calculatePrice();

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = () => {
    toast({
      title: "Order Submitted!",
      description:
        "Your order has been received. You'll receive a confirmation email shortly.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Book Your Order | TEMADIPLOME.CE</title>
        <meta
          name="description"
          content="Place your academic work order with our easy 6-step booking wizard. Get instant pricing and start your project today."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="py-12 lg:py-16 bg-hero">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Book Your <span className="text-gradient-gold">Order</span>
              </h1>
              <p className="text-primary-foreground/70">
                Complete the form below to get started. We'll provide an instant
                quote.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Progress Steps */}
              <div className="mb-12">
                <div className="flex items-center justify-between">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className="flex flex-col items-center flex-1"
                    >
                      <div className="relative flex items-center w-full">
                        {index > 0 && (
                          <div
                            className={`absolute left-0 right-1/2 h-0.5 -translate-x-1/2 ${
                              currentStep > step.id
                                ? "bg-secondary"
                                : "bg-border"
                            }`}
                          />
                        )}
                        <div
                          className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center mx-auto transition-all ${
                            currentStep === step.id
                              ? "bg-secondary text-secondary-foreground shadow-gold"
                              : currentStep > step.id
                              ? "bg-secondary text-secondary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {currentStep > step.id ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            <step.icon className="w-5 h-5" />
                          )}
                        </div>
                        {index < steps.length - 1 && (
                          <div
                            className={`absolute left-1/2 right-0 h-0.5 translate-x-1/2 ${
                              currentStep > step.id
                                ? "bg-secondary"
                                : "bg-border"
                            }`}
                          />
                        )}
                      </div>
                      <span
                        className={`mt-2 text-xs font-medium hidden sm:block ${
                          currentStep === step.id
                            ? "text-secondary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="bg-card rounded-2xl p-6 lg:p-10 shadow-card border border-border">
                <AnimatePresence mode="wait">
                  {/* Step 1: Service Selection */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                        Select Your Service
                      </h2>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Type of Work *</Label>
                          <Select
                            value={formData.serviceType}
                            onValueChange={(v) => updateFormData("serviceType", v)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select service type" />
                            </SelectTrigger>
                            <SelectContent>
                              {serviceTypes.map((service) => (
                                <SelectItem key={service.id} value={service.id}>
                                  {service.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="academicField">
                            Academic Field / Major *
                          </Label>
                          <Input
                            id="academicField"
                            value={formData.academicField}
                            onChange={(e) =>
                              updateFormData("academicField", e.target.value)
                            }
                            placeholder="e.g., Business Administration, Psychology"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Academic Level *</Label>
                            <Select
                              value={formData.academicLevel}
                              onValueChange={(v) =>
                                updateFormData("academicLevel", v)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {academicLevels.map((level) => (
                                  <SelectItem key={level} value={level}>
                                    {level}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label>Language *</Label>
                            <Select
                              value={formData.language}
                              onValueChange={(v) => updateFormData("language", v)}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {languages.map((lang) => (
                                  <SelectItem key={lang.id} value={lang.id}>
                                    {lang.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Specifications */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                        Specifications
                      </h2>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="pages">Number of Pages *</Label>
                            <Input
                              id="pages"
                              type="number"
                              min={1}
                              value={formData.pages}
                              onChange={(e) =>
                                updateFormData("pages", parseInt(e.target.value))
                              }
                            />
                          </div>

                          <div className="space-y-2">
                            <Label>Citation Style *</Label>
                            <Select
                              value={formData.citationStyle}
                              onValueChange={(v) =>
                                updateFormData("citationStyle", v)
                              }
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {citationStyles.map((style) => (
                                  <SelectItem key={style} value={style}>
                                    {style}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="references">
                              Minimum Number of References
                            </Label>
                            <Input
                              id="references"
                              type="number"
                              min={0}
                              value={formData.references}
                              onChange={(e) =>
                                updateFormData(
                                  "references",
                                  parseInt(e.target.value)
                                )
                              }
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="sourcesPreference">
                              Sources Preference
                            </Label>
                            <Input
                              id="sourcesPreference"
                              value={formData.sourcesPreference}
                              onChange={(e) =>
                                updateFormData("sourcesPreference", e.target.value)
                              }
                              placeholder="e.g., Google Scholar, PubMed"
                            />
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="originalityConfirm"
                            checked={formData.originalityConfirm}
                            onCheckedChange={(v) =>
                              updateFormData("originalityConfirm", v)
                            }
                          />
                          <Label
                            htmlFor="originalityConfirm"
                            className="text-sm font-normal"
                          >
                            I understand the work must be 100% original
                          </Label>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Deadline & Urgency */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                        Deadline & Urgency
                      </h2>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="deadline">Deadline Date & Time *</Label>
                          <Input
                            id="deadline"
                            type="datetime-local"
                            value={formData.deadline}
                            onChange={(e) =>
                              updateFormData("deadline", e.target.value)
                            }
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Urgency Level *</Label>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {urgencyLevels.map((level) => (
                              <button
                                key={level.id}
                                type="button"
                                onClick={() => updateFormData("urgency", level.id)}
                                className={`p-4 rounded-xl border-2 text-center transition-all ${
                                  formData.urgency === level.id
                                    ? "border-secondary bg-secondary/10"
                                    : "border-border hover:border-secondary/50"
                                }`}
                              >
                                <p className="font-semibold text-foreground">
                                  {level.label.split(" (")[0]}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                  {level.label.match(/\(([^)]+)\)/)?.[1]}
                                </p>
                                {level.multiplier > 1 && (
                                  <p className="text-xs text-secondary mt-1">
                                    +{Math.round((level.multiplier - 1) * 100)}%
                                  </p>
                                )}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Materials */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                        Upload Materials
                      </h2>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="topic">Topic / Title *</Label>
                          <Input
                            id="topic"
                            value={formData.topic}
                            onChange={(e) =>
                              updateFormData("topic", e.target.value)
                            }
                            placeholder="Enter your topic or proposed title"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Upload Files</Label>
                          <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-secondary/50 transition-colors">
                            <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                            <p className="text-sm text-muted-foreground mb-2">
                              Drag & drop files here, or click to browse
                            </p>
                            <p className="text-xs text-muted-foreground">
                              PDF, Word, ZIP (Max 25MB)
                            </p>
                            <input
                              type="file"
                              className="hidden"
                              multiple
                              accept=".pdf,.doc,.docx,.zip"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="externalLinks">
                            External Links (Google Drive, etc.)
                          </Label>
                          <Input
                            id="externalLinks"
                            value={formData.externalLinks}
                            onChange={(e) =>
                              updateFormData("externalLinks", e.target.value)
                            }
                            placeholder="Paste your link here"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="instructions">
                            Professor Instructions / Special Requirements
                          </Label>
                          <Textarea
                            id="instructions"
                            value={formData.instructions}
                            onChange={(e) =>
                              updateFormData("instructions", e.target.value)
                            }
                            placeholder="Any specific guidelines or requirements..."
                            rows={4}
                          />
                        </div>

                        <div className="flex flex-col gap-3">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="hasOutline"
                              checked={formData.hasOutline}
                              onCheckedChange={(v) =>
                                updateFormData("hasOutline", v)
                              }
                            />
                            <Label
                              htmlFor="hasOutline"
                              className="text-sm font-normal"
                            >
                              I have an outline already prepared
                            </Label>
                          </div>

                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="needsConsultation"
                              checked={formData.needsConsultation}
                              onCheckedChange={(v) =>
                                updateFormData("needsConsultation", v)
                              }
                            />
                            <Label
                              htmlFor="needsConsultation"
                              className="text-sm font-normal"
                            >
                              I need a consultation before starting
                            </Label>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 5: Pricing */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                        Your Quote
                      </h2>

                      {/* Add-ons */}
                      <div className="space-y-4 mb-8">
                        <Label>Optional Add-ons</Label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {addOns.map((addOn) => (
                            <label
                              key={addOn.id}
                              className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                formData.selectedAddOns.includes(addOn.id)
                                  ? "border-secondary bg-secondary/10"
                                  : "border-border hover:border-secondary/50"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <Checkbox
                                  checked={formData.selectedAddOns.includes(
                                    addOn.id
                                  )}
                                  onCheckedChange={(checked) => {
                                    if (checked) {
                                      updateFormData("selectedAddOns", [
                                        ...formData.selectedAddOns,
                                        addOn.id,
                                      ]);
                                    } else {
                                      updateFormData(
                                        "selectedAddOns",
                                        formData.selectedAddOns.filter(
                                          (id) => id !== addOn.id
                                        )
                                      );
                                    }
                                  }}
                                />
                                <span className="font-medium text-foreground">
                                  {addOn.label}
                                </span>
                              </div>
                              <span className="text-secondary font-semibold">
                                +€{addOn.price}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Discount Code */}
                      <div className="space-y-2">
                        <Label htmlFor="discountCode">Discount Code</Label>
                        <div className="flex gap-2">
                          <Input
                            id="discountCode"
                            value={formData.discountCode}
                            onChange={(e) =>
                              updateFormData("discountCode", e.target.value)
                            }
                            placeholder="Enter code"
                          />
                          <Button variant="outline">Apply</Button>
                        </div>
                      </div>

                      {/* Price Breakdown */}
                      <div className="bg-muted rounded-xl p-6 space-y-4">
                        <h3 className="font-semibold text-foreground">
                          Price Breakdown
                        </h3>

                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              Base Price ({formData.pages} pages)
                            </span>
                            <span className="font-medium">€{pricing.base}</span>
                          </div>

                          {pricing.urgency > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                Urgency Fee
                              </span>
                              <span className="font-medium">
                                +€{pricing.urgency}
                              </span>
                            </div>
                          )}

                          {pricing.language > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                Language Fee
                              </span>
                              <span className="font-medium">
                                +€{pricing.language}
                              </span>
                            </div>
                          )}

                          {pricing.addOns > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">
                                Add-ons
                              </span>
                              <span className="font-medium">
                                +€{pricing.addOns}
                              </span>
                            </div>
                          )}

                          <div className="border-t border-border pt-3 flex justify-between">
                            <span className="font-semibold text-foreground">
                              Total
                            </span>
                            <span className="text-2xl font-bold text-secondary">
                              €{pricing.total}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 6: Checkout */}
                  {currentStep === 6 && (
                    <motion.div
                      key="step6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                        Checkout
                      </h2>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) =>
                              updateFormData("name", e.target.value)
                            }
                            placeholder="Your full name"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                updateFormData("email", e.target.value)
                              }
                              placeholder="your@email.com"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) =>
                                updateFormData("phone", e.target.value)
                              }
                              placeholder="+355..."
                            />
                          </div>
                        </div>

                        {/* Payment Method Selection */}
                        <div className="space-y-3">
                          <Label>Payment Method *</Label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {paymentMethods.map((method) => (
                              <button
                                key={method.id}
                                type="button"
                                onClick={() => updateFormData("paymentMethod", method.id)}
                                className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all ${
                                  formData.paymentMethod === method.id
                                    ? "border-secondary bg-secondary/10"
                                    : "border-border hover:border-secondary/50"
                                }`}
                              >
                                <span className="text-2xl">{method.icon}</span>
                                <div>
                                  <p className="font-semibold text-foreground">
                                    {method.label}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {method.description}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </div>
                          {formData.paymentMethod && (
                            <div className="bg-secondary/10 rounded-xl p-4 border border-secondary/30">
                              <p className="text-sm text-foreground">
                                <strong>Next Steps:</strong> After placing your order, 
                                contact us on <strong>WhatsApp</strong> to receive the 
                                payment details for{" "}
                                <strong>
                                  {paymentMethods.find(m => m.id === formData.paymentMethod)?.label}
                                </strong>.
                              </p>
                              <p className="text-xs text-muted-foreground mt-2">
                                We'll provide the recipient name, location, and any 
                                required details to complete your payment securely.
                              </p>
                            </div>
                          )}
                        </div>

                        {/* Order Summary */}
                        <div className="bg-muted rounded-xl p-6">
                          <h3 className="font-semibold text-foreground mb-4">
                            Order Summary
                          </h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Service
                              </span>
                              <span className="font-medium">
                                {
                                  serviceTypes.find(
                                    (s) => s.id === formData.serviceType
                                  )?.label
                                }
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Pages</span>
                              <span className="font-medium">{formData.pages}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">
                                Urgency
                              </span>
                              <span className="font-medium">
                                {
                                  urgencyLevels.find(
                                    (u) => u.id === formData.urgency
                                  )?.label
                                }
                              </span>
                            </div>
                            {formData.paymentMethod && (
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                  Payment
                                </span>
                                <span className="font-medium">
                                  {paymentMethods.find(m => m.id === formData.paymentMethod)?.label}
                                </span>
                              </div>
                            )}
                            <div className="border-t border-border pt-2 flex justify-between">
                              <span className="font-semibold">Total</span>
                              <span className="text-xl font-bold text-secondary">
                                €{pricing.total}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="acceptTerms"
                              checked={formData.acceptTerms}
                              onCheckedChange={(v) =>
                                updateFormData("acceptTerms", v)
                              }
                            />
                            <Label
                              htmlFor="acceptTerms"
                              className="text-sm font-normal leading-relaxed"
                            >
                              I agree to the{" "}
                              <a
                                href="/terms"
                                className="text-secondary hover:underline"
                              >
                                Terms & Conditions
                              </a>{" "}
                              and{" "}
                              <a
                                href="/refund"
                                className="text-secondary hover:underline"
                              >
                                Refund Policy
                              </a>
                            </Label>
                          </div>

                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="acceptPrivacy"
                              checked={formData.acceptPrivacy}
                              onCheckedChange={(v) =>
                                updateFormData("acceptPrivacy", v)
                              }
                            />
                            <Label
                              htmlFor="acceptPrivacy"
                              className="text-sm font-normal leading-relaxed"
                            >
                              I agree to the{" "}
                              <a
                                href="/privacy"
                                className="text-secondary hover:underline"
                              >
                                Privacy Policy
                              </a>{" "}
                              and{" "}
                              <a
                                href="/academic-integrity"
                                className="text-secondary hover:underline"
                              >
                                Academic Integrity Disclaimer
                              </a>
                            </Label>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
                  {currentStep > 1 ? (
                    <Button variant="outline" onClick={prevStep}>
                      <ArrowLeft className="w-4 h-4" />
                      Previous
                    </Button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 6 ? (
                    <Button variant="hero" onClick={nextStep}>
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="hero"
                      size="lg"
                      onClick={handleSubmit}
                      disabled={!formData.acceptTerms || !formData.acceptPrivacy || !formData.paymentMethod}
                    >
                      <CreditCard className="w-4 h-4" />
                      Place Order – €{pricing.total}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Book;
