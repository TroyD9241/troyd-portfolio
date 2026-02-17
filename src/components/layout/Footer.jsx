import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const socialLinks = [
  { href: "https://github.com/", label: "GitHub", icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/troyd41/",
    label: "LinkedIn",
    icon: LinkedinIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-surface/50 border-t-4 border-primary/10 py-16 relative overflow-hidden">
      {/* Warm decorative blobs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-4"
            >
              <img
                src="/src/assets/logo.svg"
                alt="Troy Dawson"
                className="h-14"
              />
            </motion.div>
            <p className="text-text-light text-base leading-relaxed mb-4">
              Building beautiful, functional websites that help local businesses
              grow and succeed online.
            </p>
            <p className="text-primary font-semibold text-sm">
              Based in your community
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="text-primary font-heading font-bold text-xl mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "#about", label: "About" },
                { href: "#services", label: "Services" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#experience", label: "Experience" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-light hover:text-accent transition-colors duration-200 text-base inline-block group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="text-primary font-heading font-bold text-xl mb-4">
              Let's Connect
            </h3>
            <p className="text-text-light text-base mb-6 leading-relaxed">
              Ready to start your project? Let's chat about how I can help your
              business grow.
            </p>
            <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center hover:bg-accent text-accent hover:text-white shadow-md hover:shadow-xl transition-all duration-300"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block bg-accent text-white px-6 py-3 rounded-2xl font-semibold text-sm shadow-md hover:shadow-xl transition-all hover:scale-105"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t-2 border-primary/10 pt-8 text-center"
        >
          <p className="text-text-light text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-primary font-semibold">
              Toro Toro Creative
            </span>
            . Built with care, attention to detail, and a genuine desire to help
            your business succeed.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
