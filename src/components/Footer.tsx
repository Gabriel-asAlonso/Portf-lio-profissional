import { Github, Linkedin, Mail, MessageCircle, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-lg text-foreground mb-1">&lt;Dev /&gt;</p>
            <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
              <MapPin size={14} />
              <span>Brasil</span>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: "https://github.com/seuusuario", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/seuusuario", label: "LinkedIn" },
              { icon: MessageCircle, href: "https://wa.me/5511999999999", label: "WhatsApp" },
              { icon: Mail, href: "mailto:seuemail@email.com", label: "E-mail" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground
                  hover:text-primary hover:border-primary/30 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={16} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} Seu Nome. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
