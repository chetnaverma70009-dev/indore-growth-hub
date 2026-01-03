import { Linkedin, Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

const services = [
  "SEO",
  "Content Marketing",
  "Meta Ads",
  "Google Ads",
  "LinkedIn Ads",
  "Digital Marketing Strategy",
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@chetnaverma.com", label: "Email" },
];

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-2">Chetna Verma</h3>
            <p className="text-background/80 mb-4">
              Digital Marketing Professional | Indore, Madhya Pradesh
            </p>
            <div className="flex items-center gap-2 text-background/70 mb-4">
              <MapPin className="w-4 h-4" />
              <span>Serving: Indore and surrounding areas</span>
            </div>
            
            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection("skills")}
                    className="text-background/70 hover:text-primary transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Skills & Expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("achievements")}
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Achievements
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Keywords */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-sm text-background/50 text-center mb-4">
            Best Digital Marketing in Indore | Indore Digital Marketing Services | Social Media Marketing Agency Indore | SEO Expert Indore | Google Ads Specialist | Meta Ads Professional | Content Marketing Indore
          </p>
          <p className="text-center text-background/70">
            © {new Date().getFullYear()} Chetna Verma. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
