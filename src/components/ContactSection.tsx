import { useState } from "react";
import { Send, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "./AnimatedSection";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission (replace with actual backend integration)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada! ✨",
      description: "Obrigado pelo contato. Responderei em breve!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="max-w-3xl mb-16">
            <p className="text-primary font-mono text-sm mb-3 tracking-wider">// CONTATO</p>
            <h2 className="section-title mb-6">
              Vamos conversar sobre{" "}
              <span className="gradient-text">seu projeto?</span>
            </h2>
            <p className="section-subtitle">
              Preencha o formulário ou use um dos canais diretos. Responderei o mais rápido possível.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <AnimatedSection className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary/50 h-12"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Conte-me sobre seu projeto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary/50 resize-none"
                />
              </div>
              <Button type="submit" variant="glow" size="xl" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem
                    <Send size={16} />
                  </>
                )}
              </Button>
            </form>
          </AnimatedSection>

          {/* Quick Contact */}
          <AnimatedSection className="lg:col-span-2" delay={0.2}>
            <div className="space-y-5 h-full flex flex-col justify-center">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="card-service flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <MessageCircle size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">WhatsApp</p>
                  <p className="text-muted-foreground text-sm">Resposta rápida</p>
                </div>
              </a>

              <a
                href="mailto:seuemail@email.com"
                className="card-service flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">E-mail</p>
                  <p className="text-muted-foreground text-sm">seuemail@email.com</p>
                </div>
              </a>

              <div className="glass-card p-6 mt-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  💡 <span className="text-foreground font-medium">Dica:</span> Quanto mais detalhes sobre seu projeto
                  você compartilhar, melhor eu consigo preparar uma proposta personalizada para você.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
