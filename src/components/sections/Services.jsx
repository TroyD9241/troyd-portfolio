import { motion } from "framer-motion";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import {
  CodeBracketIcon,
  PhotoIcon,
  BoltIcon,
  SparklesIcon,
  CpuChipIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { services, commonRules } from "../../data/services";

const serviceIcons = [
  SparklesIcon,    // Starter - rocket/volume
  PhotoIcon,      // Plus - gallery
  BoltIcon,       // Custom - dynamic
  SparklesIcon,   // Showcase - visual impact (using sparkles for now)
  CpuChipIcon,    // Software Applications
];

export function Services() {
  const webTiers = services.filter((s) => s.id <= 4);
  const softwareTier = services.find((s) => s.id === 5);

  return (
    <Section id="services" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-80 h-80 bg-surface/60 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto relative z-10">
        <SectionHeading
          title="Website Tiers"
          subtitle="Pick the tier that fits your needs—no surprises, no hidden fees."
        />

        {/* Web Tiers - 2x2 Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {webTiers.map((service, index) => {
            const IconComponent = serviceIcons[index];
            return (
              <Card
                key={service.id}
                hover
                delay={index * 0.15}
                className="p-8 flex flex-col h-full relative overflow-hidden group"
              >
                <motion.div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{ repeat: Infinity, duration: 8 }}
                />
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: index * 0.15 }}
                    className="w-16 h-16 rounded-3xl bg-gradient-to-br from-surface to-accent/20 flex items-center justify-center mb-4 shadow-lg"
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 4,
                        delay: index * 0.2,
                      }}
                    >
                      <IconComponent className="w-7 h-7 text-accent" />
                    </motion.span>
                  </motion.div>

                  {service.subtitle && (
                    <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-1">
                      {service.subtitle}
                    </p>
                  )}

                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {service.title}
                  </h3>

                  <p className="text-text-light mb-4 leading-relaxed text-sm">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.15 + i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-text"
                      >
                        <motion.svg
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.15 + i * 0.1 }}
                          className="w-4 h-4 text-accent flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </motion.svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="pt-5 border-t-2 border-surface/50 space-y-3">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + index * 0.15 }}
                    >
                      <p className="text-xs text-text-light uppercase tracking-wide mb-1">
                        Investment
                      </p>
                      <p className="text-accent font-bold text-xl">
                        {service.price}
                      </p>
                    </motion.div>

                    {service.timeline && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.15 }}
                        className="flex items-center gap-2 text-sm text-text-light"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{service.timeline}</span>
                      </motion.div>
                    )}

                    {service.bestFor && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 + index * 0.15 }}
                        className="text-xs text-text-light bg-surface/50 rounded-xl px-3 py-2"
                      >
                        <span className="font-semibold">Best for:</span>{" "}
                        {service.bestFor}
                      </motion.div>
                    )}

                    {service.hosting && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9 + index * 0.15 }}
                        className="pt-3 border-t border-surface/50"
                      >
                        <div className="flex items-start gap-2 text-xs text-text-light mb-1">
                          <svg
                            className="w-4 h-4 flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                            />
                          </svg>
                          <div>
                            <p className="font-semibold text-text">
                              Hosting:{" "}
                              <span className="text-accent font-bold">
                                {service.hosting.estimate}
                              </span>
                            </p>
                            <p className="text-xs mt-0.5">
                              {service.hosting.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {service.carePlan && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.0 + index * 0.15 }}
                        className="bg-accent/5 rounded-xl p-3 border-2 border-accent/20"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wide">
                            Care Plan
                          </p>
                          <p className="text-accent font-bold text-sm">
                            {service.carePlan.monthly}
                          </p>
                        </div>
                        <ul className="space-y-1 mb-2">
                          {service.carePlan.includes.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-1.5 text-xs text-text-light"
                            >
                              <svg
                                className="w-3 h-3 text-accent flex-shrink-0 mt-0.5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-text-light italic border-t border-accent/10 pt-2">
                          {service.carePlan.terms}
                        </p>
                      </motion.div>
                    )}

                    {service.note && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.1 + index * 0.15 }}
                        className="text-xs text-text-light italic bg-surface/30 rounded-lg px-3 py-2"
                      >
                        {service.note}
                      </motion.p>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Software Applications - Full Width */}
        {softwareTier && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <Card
              hover
              delay={0}
              className="p-8 relative overflow-hidden group bg-gradient-to-br from-surface to-accent/10"
            >
              <motion.div
                className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors duration-500"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{ repeat: Infinity, duration: 8 }}
              />
              <div className="relative z-10 flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-20 h-20 rounded-3xl bg-gradient-to-br from-surface to-accent/20 flex items-center justify-center shadow-lg"
                  >
                    <CpuChipIcon className="w-9 h-9 text-accent" />
                  </motion.div>
                </div>
                <div className="flex-grow">
                  <p className="text-accent text-sm font-semibold uppercase tracking-wide mb-1">
                    {softwareTier.subtitle}
                  </p>
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    {softwareTier.title}
                  </h3>
                  <p className="text-text-light mb-4 leading-relaxed">
                    {softwareTier.description}
                  </p>
                  <div className="flex flex-wrap gap-3 mb-5">
                    {softwareTier.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center gap-1.5 text-xs text-text bg-white/60 px-3 py-1.5 rounded-full"
                      >
                        <CheckCircleIcon className="w-3.5 h-3.5 text-accent" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-6 pt-5 border-t border-surface/50">
                    <div>
                      <p className="text-xs text-text-light uppercase tracking-wide mb-1">
                        Investment
                      </p>
                      <p className="text-accent font-bold text-xl">
                        {softwareTier.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-text-light uppercase tracking-wide mb-1">
                        Timeline
                      </p>
                      <p className="text-text font-semibold">
                        {softwareTier.timeline}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-text-light uppercase tracking-wide mb-1">
                        Best For
                      </p>
                      <p className="text-text font-semibold">
                        {softwareTier.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* How I Work - Common Rules */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-3xl shadow-lg border-2 border-surface/50 p-8 md:p-10"
        >
          <h3 className="text-2xl font-heading font-bold text-primary mb-2 text-center">
            How I Work
          </h3>
          <p className="text-text-light text-center mb-8">
            These rules apply to every project.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {commonRules.map((rule, index) => (
              <motion.div
                key={rule.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-accent font-bold">{index + 1}</span>
                </div>
                <h4 className="font-semibold text-primary text-sm mb-1">
                  {rule.title}
                </h4>
                <p className="text-xs text-text-light">{rule.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-surface to-accent/20 rounded-4xl p-10 md:p-12 relative overflow-hidden shadow-2xl border-2 border-accent/30"
          >
            <motion.div
              className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-5">
                Ready to get started?
              </h3>
              <p className="text-text-light text-lg mb-8 max-w-lg mx-auto leading-relaxed">
                For custom builds and applications, let's schedule a discovery call to discuss your needs.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-accent text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-accent/90 transition-colors shadow-xl"
              >
                Let's Talk
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRightIcon className="w-6 h-6" />
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
