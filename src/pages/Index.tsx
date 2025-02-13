
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

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
          
          {/* Apps Orbit */}
          <div className="relative h-[300px] w-[300px] mx-auto mt-12">
            {/* Inner Circle Apps */}
            <OrbitingCircles
              className="size-[40px] border-none bg-transparent"
              duration={15}
              delay={0}
              radius={60}
              path={false}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.5 5c1.5 0 2.7 1.2 2.7 2.7v8.6c0 1.5-1.2 2.7-2.7 2.7H7.5c-1.5 0-2.7-1.2-2.7-2.7V7.7C4.8 6.2 6 5 7.5 5h9zM16.5 6.7h-9c-.6 0-1 .4-1 1v8.6c0 .6.4 1 1 1h9c.6 0 1-.4 1-1V7.7c0-.6-.4-1-1-1zm-2.3 2.8c.4 0 .7.3.7.7v2.1l1.8-1.8c.3-.3.7-.3 1 0s.3.7 0 1l-1.8 1.8h2.1c.4 0 .7.3.7.7s-.3.7-.7.7h-3.5c-.4 0-.7-.3-.7-.7v-3.5c0-.4.3-.7.7-.7zm-6.7 0h3.5c.4 0 .7.3.7.7v3.5c0 .4-.3.7-.7.7s-.7-.3-.7-.7v-2.1l-1.8 1.8c-.3.3-.7.3-1 0s-.3-.7 0-1l1.8-1.8H7.5c-.4 0-.7-.3-.7-.7s.3-.7.7-.7z"/>
              </svg>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[40px] border-none bg-transparent"
              duration={20}
              delay={5}
              radius={60}
              path={false}
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.14 15.14c-.39.39-1.02.39-1.41 0L12 13.41l-3.73 3.73c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L10.59 12 6.86 8.27c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 10.59l3.73-3.73c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41L13.41 12l3.73 3.73c.39.39.39 1.02 0 1.41z"/>
              </svg>
            </OrbitingCircles>

            {/* Outer Circle Apps */}
            <OrbitingCircles
              className="size-[40px] border-none bg-transparent"
              duration={25}
              delay={0}
              radius={120}
              path={false}
              reverse
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.82 22h-3.64c-.69 0-1.25-.56-1.25-1.25v-1.57c-.05-.26-.19-.49-.4-.67l-1.35-.79c-.23-.13-.5-.19-.77-.15l-1.49.2c-.68.09-1.31-.37-1.45-1.04l-.77-3.6c-.15-.67.23-1.35.87-1.58l1.43-.52c.24-.09.44-.27.55-.51.12-.24.13-.51.05-.76l-.4-1.23c-.16-.47-.16-.98.01-1.44l.8-2.37c.28-.84 1.16-1.3 2.01-1.03l1.41.45c.26.08.54.05.78-.1.24-.15.41-.39.46-.66l.27-1.47c.13-.68.71-1.16 1.39-1.16h3.64c.69 0 1.27.49 1.39 1.16l.27 1.47c.05.27.22.51.46.66.24.15.52.18.78.1l1.41-.45c.85-.27 1.73.19 2.01 1.03l.8 2.37c.17.46.17.97.01 1.44l-.4 1.23c-.08.26-.06.53.05.77s.31.42.55.51l1.43.52c.64.23 1.02.91.87 1.58l-.77 3.6c-.14.67-.77 1.13-1.45 1.04l-1.49-.2c-.27-.04-.54.02-.77.15l-1.35.79c-.21.17-.35.41-.4.67v1.57c0 .69-.56 1.25-1.25 1.25zm-3.39-1.5h3.14v-1.32c0-.65.31-1.27.83-1.67l1.35-.79c.47-.28 1.04-.39 1.58-.31l1.24.17.64-2.98-1.43-.52c-.49-.18-.91-.52-1.16-1s-.31-1.02-.11-1.54l.4-1.23-.66-1.96-1.41.45c-.52.17-1.09.14-1.58-.09s-.87-.62-.96-1.09l-.27-1.47h-3.14l-.27 1.47c-.09.47-.47.86-.96 1.09s-1.06.26-1.58.09l-1.41-.45-.66 1.96.4 1.23c.2.51.14 1.07-.11 1.54s-.67.82-1.16 1l-1.43.52.64 2.98 1.24-.17c.54-.08 1.11.03 1.58.31l1.35.79c.52.39.83 1.02.83 1.67v1.32z"/>
              </svg>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[40px] border-none bg-transparent"
              duration={25}
              delay={8}
              radius={120}
              path={false}
              reverse
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"/>
              </svg>
            </OrbitingCircles>

            <OrbitingCircles
              className="size-[40px] border-none bg-transparent"
              duration={25}
              delay={16}
              radius={120}
              path={false}
              reverse
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm5.207 13.293-1.414 1.414L12 13.414l-3.793 3.793-1.414-1.414L10.586 12 6.793 8.207l1.414-1.414L12 10.586l3.793-3.793 1.414 1.414L13.414 12z"/>
              </svg>
            </OrbitingCircles>
          </div>
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
