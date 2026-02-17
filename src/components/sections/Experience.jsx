import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Section } from "../ui/Section";
import { SectionHeading } from "../ui/SectionHeading";
import { Badge } from "../ui/Badge";
import { ExperienceModal } from "../ui/ExperienceModal";
import {
  BuildingOffice2Icon,
  ComputerDesktopIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import { CalendarIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

const experiences = [
  {
    id: 1,
    company: "Lenovo",
    title: "Fullstack Software Engineer",
    period: "Aug 2022 - Jun 2025",
    duration: "3 years",
    location: "Hybrid",
    headline:
      "Built an award-winning internal tool serving 1,000+ users weekly",
    description:
      "Led the complete redesign of a legacy system into a modern, user-friendly platform. The transformation was so successful that it won internal recognition and became the standard tool across the organization.",
    achievements: [
      "Transformed outdated systems into modern web applications that users love",
      "Streamlined workflows for multiple teams, saving hours of manual work every week",
      "Built robust, well-tested code that reduced bugs and manual testing needs",
      "Listened directly to users to improve their experience and increase satisfaction",
    ],
    technologies: [
      "React",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "JavaScript",
    ],
    website: "https://www.lenovo.com",
    type: "fulltime",
  },
  {
    id: 2,
    company: "Metav3rse, Inc.",
    title: "Software Engineer (Contract)",
    period: "Dec 2021 - Aug 2022",
    duration: "9 months",
    location: "Remote",
    headline:
      "Built high-traffic web3 platform generating $2M+ in launch day sales",
    description:
      "Designed and deployed scalable systems for a cutting-edge NFT launch platform. Successfully handled extreme traffic spikes during a $2M+ launch while maintaining flawless performance.",
    achievements: [
      "Built systems that handled nearly 10,000 users at once without crashing",
      "Created reliable payment infrastructure for high-stakes transactions",
      "Delivered a fast, seamless experience during a multi-million dollar launch",
      "Worked with cutting-edge web3 technology under tight deadlines",
    ],
    technologies: ["JavaScript", "MongoDB", "Node.js", "Web3", "Solidity"],
    website: "https://metav3rse.io",
    type: "contract",
  },
];

const companyIcons = {
  fulltime: BuildingOffice2Icon,
  contract: ComputerDesktopIcon,
};

export function Experience() {
  const ref = useRef(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleExperienceClick = (exp) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  return (
    <>
      <ExperienceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        experience={selectedExperience}
      />
      <Section id="experience" ref={ref} className="relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-5"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary blur-3xl" />
        </motion.div>

        <div className="container mx-auto relative z-10">
          <SectionHeading
            title="Work Experience"
            subtitle="Click on any experience to see the full story"
          />

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleExperienceClick(exp)}
                whileHover={{ scale: 1.03, y: -8 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-4 border-surface/30 hover:border-accent/50 group relative overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-surface/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                    className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-4"
                  >
                    {(() => {
                      const Icon = companyIcons[exp.type];
                      return <Icon className="w-10 h-10 text-accent" />;
                    })()}
                  </motion.div>

                  {/* Company & Title */}
                  <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-lg text-accent font-semibold mb-3">
                    {exp.title}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-text-light mb-4">
                    <CalendarIcon className="w-4 h-4" />
                    <span>{exp.period}</span>
                    <span className="text-accent">•</span>
                    <span className="font-medium">{exp.duration}</span>
                  </div>

                  {/* Headline */}
                  <div className="bg-accent/10 rounded-2xl p-4 mb-4 border-l-4 border-accent">
                    <p className="text-text font-medium leading-relaxed">
                      {exp.headline}
                    </p>
                  </div>

                  {/* Click to expand indicator */}
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-2 text-accent font-semibold text-sm"
                  >
                    <span>Click to see full details</span>
                    <motion.span className="text-xl">→</motion.span>
                  </motion.div>

                  {/* Tech stack preview */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t-2 border-surface/50">
                    {exp.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                    {exp.technologies.length > 3 && (
                      <Badge variant="outline">
                        +{exp.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div className="absolute -bottom-2 -right-2 w-32 h-32 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
