
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Particles } from "@/components/ui/particles";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center section-padding relative overflow-hidden">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={100}
          color="#000000"
          refresh={false}
          size={0.5}
        />

        <div className={`text-center transform transition-all duration-700 relative z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-sm uppercase tracking-widest mb-4 inline-block font-medium">Bem-vindo ao meu portfólio</span>
          <h1 className="text-4xl md:text-6xl font-display font-semibold mb-6">
            Seu Nome
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais excepcionais
          </p>
        </div>
        
        <div className={`flex gap-6 mt-8 transform transition-all duration-700 delay-300 relative z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-primary transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:seu@email.com" className="p-2 hover:text-primary transition-colors">
            <Mail size={24} />
          </a>
        </div>

        <a href="#sobre" className="absolute bottom-10 animate-bounce z-10">
          <ChevronDown size={24} />
        </a>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="section-padding bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8 text-center">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Sou um desenvolvedor apaixonado por tecnologia com experiência em criar soluções web inovadoras. 
            Minha jornada começou há X anos, e desde então venho construindo aplicações que fazem a diferença.
          </p>
          <p className="text-lg text-muted-foreground">
            Especializado em React, Node.js e tecnologias modernas de desenvolvimento web, 
            busco sempre aprender e evoluir para entregar os melhores resultados.
          </p>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="section-padding">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">
          Projetos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((project) => (
            <div key={project} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-video bg-muted relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-xl font-semibold mb-2">Projeto {project}</h3>
                    <p className="text-sm text-gray-200">Descrição breve do projeto</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Habilidades Section */}
      <section id="habilidades" className="section-padding bg-secondary">
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">
          Habilidades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            "React", "TypeScript", "Node.js", "Next.js",
            "TailwindCSS", "PostgreSQL", "Git", "AWS"
          ].map((skill) => (
            <div key={skill} className="glass p-4 rounded-lg text-center hover:scale-105 transition-transform">
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Estou sempre aberto a novas oportunidades e parcerias interessantes.
          </p>
          <a 
            href="mailto:seu@email.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            <Mail size={20} />
            Entre em Contato
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
