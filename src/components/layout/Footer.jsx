import { motion } from 'framer-motion'
import { GithubIcon, LinkedinIcon } from './SocialIcons'

const socialLinks = [
  { href: 'https://github.com/', label: 'GitHub', icon: GithubIcon },
  { href: 'https://www.linkedin.com/in/troyd41/', label: 'LinkedIn', icon: LinkedinIcon }
]

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-heading font-bold mb-2">Portfolio</h3>
            <p className="text-white/70">Building websites that grow local businesses</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300"
                aria-label={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
