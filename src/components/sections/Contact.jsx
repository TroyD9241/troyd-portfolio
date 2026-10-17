import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import {
  EnvelopeIcon,
  PaperAirplaneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const tiers = [
  { id: "starter", label: "Starter", price: "$500", color: "from-green-400 to-green-600" },
  { id: "plus", label: "Plus", price: "$850", color: "from-blue-400 to-blue-600" },
  { id: "custom", label: "Custom", price: "Quote", color: "from-purple-400 to-purple-600" },
  { id: "showcase", label: "Showcase", price: "Quote", color: "from-pink-400 to-pink-600" },
  { id: "software", label: "Software", price: "$2k+", color: "from-orange-400 to-orange-600" },
];

const projectTypes = [
  { value: "", label: "What are you looking for?" },
  { value: "starter", label: "Starter Website ($500)" },
  { value: "plus", label: "Plus Website ($850)" },
  { value: "custom", label: "Custom Web App (Quote)" },
  { value: "showcase", label: "Showcase Site (Quote)" },
  { value: "software", label: "Software Application ($2k+)" },
  { value: "other", label: "Something else" },
];

function FloatingLabel({ label, value, type = "text", required = false, error }) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;

  return (
    <div className="relative">
      <motion.label
        initial={false}
        animate={{
          y: isFocused || hasValue ? -28 : 0,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: error ? "#dc2626" : isFocused ? "#d97706" : "#6b7280",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-5 top-4 origin-left pointer-events-none font-medium"
      >
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </motion.label>
      <motion.input
        whileFocus={{ scale: 1.01 }}
        type={type}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full px-5 pt-6 pb-3 rounded-2xl border-2 transition-all duration-200 outline-none font-medium
          ${error 
            ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100" 
            : "border-surface focus:border-accent focus:ring-4 focus:ring-accent/20"
          }`}
        placeholder={isFocused ? "" : " "}
      />
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500"
        >
          <ExclamationCircleIcon className="w-5 h-5" />
        </motion.span>
      )}
    </div>
  );
}

function FloatingTextarea({ label, value, required = false, rows = 4, maxLength = 500, error }) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value && value.length > 0;
  const charCount = value ? value.length : 0;

  return (
    <div className="relative">
      <motion.label
        initial={false}
        animate={{
          y: isFocused || hasValue ? -28 : 0,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: error ? "#dc2626" : isFocused ? "#d97706" : "#6b7280",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="absolute left-5 top-4 origin-left pointer-events-none font-medium"
      >
        {label}
        {required && <span className="text-accent ml-1">*</span>}
      </motion.label>
      <motion.textarea
        whileFocus={{ scale: 1.01 }}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        rows={rows}
        maxLength={maxLength}
        className={`w-full px-5 pt-6 pb-10 rounded-2xl border-2 transition-all duration-200 outline-none resize-none font-medium
          ${error 
            ? "border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100" 
            : "border-surface focus:border-accent focus:ring-4 focus:ring-accent/20"
          }`}
        placeholder={isFocused ? "" : " "}
      />
      <div className="absolute right-4 bottom-3 flex items-center gap-2">
        {error && <ExclamationCircleIcon className="w-4 h-4 text-red-500" />}
        <span className={`text-xs ${charCount > maxLength * 0.9 ? "text-orange-500" : "text-gray-400"}`}>
          {charCount}/{maxLength}
        </span>
      </div>
    </div>
  );
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
    tier: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [formState, setFormState] = useState("idle"); // idle, submitting, success, error
  const [shake, setShake] = useState(false);

  const emailAddress = "troydawsondev@gmail.com";

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : "";
      case "message":
        return value.trim().length < 10 ? "Message must be at least 10 characters" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const isFormValid = () => {
    return (
      formData.name.trim().length >= 2 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      formData.message.trim().length >= 10 &&
      formData.projectType
    );
  };

  const handleTierSelect = (tierId) => {
    setFormData((prev) => ({ ...prev, tier: prev.tier === tierId ? "" : tierId }));
  };

  async function handleSubmit(event) {
    event.preventDefault();

    // Validate all fields
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.values(newErrors).some((err) => err)) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setFormState("submitting");

    try {
      const response = await fetch(
        import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/demo",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, tier: formData.tier || "Not specified" }),
        }
      );

      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  const formCompletion = (() => {
    let filled = 0;
    if (formData.name) filled++;
    if (formData.email) filled++;
    if (formData.projectType) filled++;
    if (formData.message) filled++;
    if (formData.tier) filled++;
    return (filled / 5) * 100;
  })();

  return (
    <Section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-background via-transparent to-background/80" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Tell me about your project and I'll get back to you within 24 hours."
        />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
          className="bg-white rounded-4xl shadow-2xl p-10 md:p-14 relative overflow-hidden border-4 border-surface/30"
        >
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ repeat: Infinity, duration: 5 }}
          />

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <motion.a
              href={`mailto:${emailAddress}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="flex items-center gap-4 p-4 bg-surface/40 rounded-2xl hover:bg-surface shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                <EnvelopeIcon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-text-light">Email</p>
                <p className="font-medium text-primary text-sm">{emailAddress}</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/troyd41/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="flex items-center gap-4 p-4 bg-surface/40 rounded-2xl hover:bg-surface shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-light">LinkedIn</p>
                <p className="font-medium text-primary text-sm">Connect with me</p>
              </div>
            </motion.a>
          </div>

          <AnimatePresence mode="wait">
            {formState === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center shadow-xl"
                >
                  <CheckCircleIcon className="w-14 h-14 text-green-600" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-heading font-bold text-primary mb-3"
                >
                  Message Sent!
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-text-light text-lg mb-8 max-w-md mx-auto"
                >
                  Thanks for reaching out! I'll get back to you within 24 hours.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setFormState("idle");
                    setFormData({ name: "", email: "", projectType: "", message: "", tier: "" });
                    setTouched({});
                    setErrors({});
                  }}
                  className="px-8 py-4 bg-surface text-primary rounded-2xl font-semibold hover:bg-surface-dark transition-colors shadow-md"
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-text-light">Form completion</span>
                    <span className="text-xs font-semibold text-accent">{Math.round(formCompletion)}%</span>
                  </div>
                  <div className="h-2 bg-surface rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${formCompletion}%` }}
                      className="h-full bg-gradient-to-r from-accent to-amber-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Tier Selection */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="block text-sm font-medium text-primary mb-3">
                    Interested in which tier? <span className="text-text-light text-xs">(optional)</span>
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {tiers.map((tier) => (
                      <motion.button
                        key={tier.id}
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleTierSelect(tier.id)}
                        className={`relative p-3 rounded-xl border-2 transition-all ${
                          formData.tier === tier.id
                            ? "border-accent bg-accent/5 shadow-lg"
                            : "border-surface hover:border-accent/50"
                        }`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 rounded-xl transition-opacity ${formData.tier === tier.id ? "opacity-10" : ""}`} />
                        <p className="relative text-sm font-semibold text-primary">{tier.label}</p>
                        <p className="relative text-xs text-text-light">{tier.price}</p>
                        {formData.tier === tier.id && (
                          <motion.div
                            layoutId="tierIndicator"
                            className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center"
                          >
                            <CheckCircleIcon className="w-3 h-3 text-white" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <FloatingLabel
                      label="Your Name"
                      value={formData.name}
                      name="name"
                      required
                      error={touched.name && errors.name}
                    />
                    <AnimatePresence>
                      {touched.name && errors.name && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-500 text-xs mt-1 ml-1"
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 }}
                  >
                    <FloatingLabel
                      label="Your Email"
                      value={formData.email}
                      name="email"
                      type="email"
                      required
                      error={touched.email && errors.email}
                    />
                    <AnimatePresence>
                      {touched.email && errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          className="text-red-500 text-xs mt-1 ml-1"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>

                {/* Project Type */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="projectType"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Project Type <span className="text-text-light text-xs">(required)</span>
                  </label>
                  <motion.select
                    whileFocus={{ scale: 1.01 }}
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-surface focus:border-accent focus:ring-4 focus:ring-accent/20 transition-all duration-200 outline-none font-medium bg-white appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "1.5em 1.5em",
                      paddingRight: "3rem",
                    }}
                  >
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </motion.select>
                </motion.div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <FloatingTextarea
                    label="Tell me about your project"
                    value={formData.message}
                    name="message"
                    required
                    maxLength={500}
                    error={touched.message && errors.message}
                  />
                  <AnimatePresence>
                    {touched.message && errors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-red-500 text-xs mt-1 ml-1"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Error Message */}
                <AnimatePresence>
                  {formState === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3"
                    >
                      <ExclamationCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-600 text-sm">
                        Something went wrong. Please try again or email me directly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={isFormValid() ? { scale: 1.01 } : {}}
                  whileTap={isFormValid() ? { scale: 0.99 } : {}}
                >
                  <motion.button
                    type="submit"
                    disabled={formState === "submitting"}
                    whileHover={isFormValid() ? { scale: 1.02 } : {}}
                    whileTap={isFormValid() ? { scale: 0.98 } : {}}
                    className={`w-full py-5 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-3
                      ${isFormValid()
                        ? "bg-accent text-white hover:bg-accent/90"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                      }`}
                  >
                    {formState === "submitting" ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <PaperAirplaneIcon className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </motion.div>

                {/* Helper text */}
                <p className="text-center text-xs text-text-light">
                  {isFormValid()
                    ? "✓ Ready to send!"
                    : "Fill out the form above to get in touch"}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
}
