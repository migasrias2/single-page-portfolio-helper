import { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, ChevronDown, Gamepad2, Cpu, ShoppingBag, Code, Briefcase, Rocket, Award, Calendar, User, Zap, ArrowUpRight } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { Feature } from "@/components/ui/feature-section-with-bento-grid";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return <div className="min-h-screen bg-background-dark">
      <ThemeToggle />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 md:px-16 lg:px-32 relative overflow-hidden">
        <Particles 
          className="absolute inset-0" 
          quantity={150} 
          ease={100} 
          color="#FFFFFF"
          refresh={false} 
          size={0.8} 
        />

        <div className={`text-center transform transition-all duration-700 relative z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-sm uppercase tracking-widest mb-6 inline-block font-medium text-white">BEM-VINDO/A AO MEU PORTFÓLIO</span>
          <h1 className="text-4xl md:text-6xl font-display font-semibold mb-8 text-white">Miguel Martins</h1>
          <p className="text-lg max-w-2xl mx-auto text-zinc-200 md:text-base font-semibold">AI Web Designer | AI Web Developer | E-commerce Specialist</p>
        </div>
        
        <div className={`flex gap-6 mt-12 transform transition-all duration-700 delay-300 relative z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a href="https://github.com/migasrias2" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-gray-300 text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/miguel-martins-68a211284/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-gray-300 text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/miguelfmartinss/" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-gray-300 text-white transition-colors">
            <Instagram size={24} />
          </a>
        </div>

        <a href="#sobre" className="absolute bottom-16 animate-bounce z-10 text-white">
          <ChevronDown size={24} />
        </a>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 md:py-28 px-6 md:px-8 bg-secondary-dark relative overflow-hidden">
        <Particles 
          className="absolute inset-0 opacity-30" 
          quantity={80} 
          ease={100} 
          color="#FFFFFF"
          refresh={false} 
          size={0.5} 
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-sm uppercase tracking-widest mb-3 inline-block font-medium text-white/70">Conheça-me</span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white">
              Sobre Mim
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col items-start relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '100ms'}}>
              <User className="w-10 h-10 stroke-1 text-white mb-6" />
              <h3 className="text-xl font-medium tracking-tight mb-3 text-white">Quem Sou</h3>
              <p className="text-muted-dark-foreground text-base">
                Sou um jovem apaixonado por tecnologia e vendas online, com experiência em criar soluções web inovadoras.
              </p>
            </div>
            
            <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col items-start relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
              <Calendar className="w-10 h-10 stroke-1 text-white mb-6" />
              <h3 className="text-xl font-medium tracking-tight mb-3 text-white">Experiência</h3>
              <p className="text-muted-dark-foreground text-base">
                A minha jornada começou há 5 anos, e desde então venho construindo sites e lojas que fazem a diferença.
              </p>
            </div>
            
            <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col items-start relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '300ms'}}>
              <Zap className="w-10 h-10 stroke-1 text-white mb-6" />
              <h3 className="text-xl font-medium tracking-tight mb-3 text-white">Paixão</h3>
              <p className="text-muted-dark-foreground text-base">
                Procuro sempre aprender e evoluir para entregar os melhores resultados e aumentar as minhas capacidades.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col items-start relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '400ms'}}>
              <h3 className="text-2xl font-medium tracking-tight mb-6 text-white">Áreas de Especialização</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full">
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 stroke-1 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Desenvolvimento Web</h4>
                    <p className="text-sm text-muted-dark-foreground">Criação de websites modernos e responsivos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShoppingBag className="w-6 h-6 stroke-1 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">E-commerce</h4>
                    <p className="text-sm text-muted-dark-foreground">Gestão e otimização de lojas online</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Instagram className="w-6 h-6 stroke-1 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Redes Sociais</h4>
                    <p className="text-sm text-muted-dark-foreground">Estratégia e gestão de conteúdo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Rocket className="w-6 h-6 stroke-1 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Marketing Digital</h4>
                    <p className="text-sm text-muted-dark-foreground">Campanhas e estratégias de crescimento</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col justify-between relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-white/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '500ms'}}>
              <div>
                <h3 className="text-2xl font-medium tracking-tight mb-6 text-white">Minha Filosofia</h3>
                <p className="text-muted-dark-foreground text-base mb-6">
                  E-commerce, Gestão de Redes Sociais e Desenvolvimento de Websites são as áreas onde tenho mais experiência, onde procuro sempre aprender e evoluir (sozinho ou em equipa) para entregar os melhores resultados.
                </p>
                <p className="text-muted-dark-foreground text-base">
                  Acredito que a tecnologia deve ser acessível e útil, criando soluções que realmente resolvem problemas e melhoram a experiência dos usuários.
                </p>
              </div>
              <div className="mt-8 flex justify-start">
                <a href="#contato" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors border border-white/10">
                  <Briefcase size={18} />
                  <span>Vamos Trabalhar Juntos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 md:py-28 px-6 md:px-8 relative overflow-hidden">
        <Particles 
          className="absolute inset-0" 
          quantity={150} 
          ease={100} 
          color="#FFFFFF"
          refresh={false} 
          size={0.8} 
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-sm uppercase tracking-widest mb-3 inline-block font-medium text-white/70">Portfólio</span>
            <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-6">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-muted-dark-foreground max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e impactantes em desenvolvimento web e e-commerce.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {/* Projeto 1 */}
            <div className={`group flex flex-col h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '100ms'}}>
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src="/lovable-uploads/ed11d115-5906-4891-abf6-588f873bc673.png" 
                  alt="Estética Nature Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-2.5 py-0.5 text-xs font-semibold text-white">Website</span>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-2.5 py-0.5 text-xs font-semibold text-white">Design</span>
                </div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white">Estética Nature</h3>
                <p className="text-muted-dark-foreground text-sm mb-4 flex-1">
                  Website completo para um centro de estética, com design moderno e funcionalidades avançadas de agendamento.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white">React</span>
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white">Tailwind</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-1 text-white text-sm hover:text-primary transition-colors">
                    Ver detalhes
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Projeto 2 */}
            <div className={`group flex flex-col h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '200ms'}}>
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src="/lovable-uploads/bbcbf495-2445-4b8f-8df1-e964575ae51c.png" 
                  alt="iFrame Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-2.5 py-0.5 text-xs font-semibold text-white">E-commerce</span>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-2.5 py-0.5 text-xs font-semibold text-white">Marketing</span>
                </div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white">iFrame.pt</h3>
                <p className="text-muted-dark-foreground text-sm mb-4 flex-1">
                  Loja online completa com gestão de inventário, pagamentos integrados e estratégia de marketing digital.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white">Shopify</span>
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white">SEO</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-1 text-white text-sm hover:text-primary transition-colors">
                    Ver detalhes
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Projeto 3 */}
            <div className={`group flex flex-col h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-white/20 hover:bg-white/10 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{transitionDelay: '300ms'}}>
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src="/lovable-uploads/1a0fbe81-90b3-494d-8f82-349dfc4e0794.png" 
                  alt="Total Sales Project" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-2.5 py-0.5 text-xs font-semibold text-white">Dashboard</span>
                  <span className="inline-flex items-center rounded-full border border-white/20 bg-black/50 backdrop-blur-md px-2.5 py-0.5 text-xs font-semibold text-white">Analytics</span>
                </div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-white">Projeto Pessoal</h3>
                <p className="text-muted-dark-foreground text-sm mb-4 flex-1">
                  Dashboard de análise de vendas para e-commerce, com visualizações de dados e relatórios personalizados.
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white">React</span>
                    <span className="inline-flex items-center rounded-full bg-white/10 px-2 py-1 text-xs font-medium text-white">Charts</span>
                  </div>
                  <a href="#" className="inline-flex items-center gap-1 text-white text-sm hover:text-primary transition-colors">
                    Ver detalhes
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a href="#contato" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors border border-white/10">
              <span>Ver Todos os Projetos</span>
              <ChevronDown size={16} className="rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-secondary-dark relative overflow-hidden">
        <Feature />
      </section>

      {/* Hobbies Section */}
      <section className="py-20 md:py-28 px-6 md:px-8 bg-background-dark relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 md:mb-16 text-center text-white">
            Hobbies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            <div className="bg-white rounded-3xl p-6 md:p-8 aspect-square flex flex-col items-start relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
              <Gamepad2 className="w-8 h-8 stroke-1 text-black mb-6" />
              <h3 className="text-xl font-medium tracking-tight mb-3 text-black">Futebol</h3>
              <p className="text-muted-foreground text-base">
                Jogador federado desde os 5 anos, contribuindo para o bem-estar físico e mental.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 aspect-square flex flex-col items-start relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
              <Cpu className="w-8 h-8 stroke-1 text-black mb-6" />
              <h3 className="text-xl font-medium tracking-tight mb-3 text-black">Tecnologia</h3>
              <p className="text-muted-foreground text-base">Apaixonado por tecnologia  que é útil e que resolve problemas mundiais.</p>
            </div>

            <div className="bg-white rounded-3xl p-6 md:p-8 aspect-square flex flex-col items-start relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
              <ShoppingBag className="w-8 h-8 stroke-1 text-black mb-6" />
              <h3 className="text-xl font-medium tracking-tight mb-3 text-black">Dropshipping</h3>
              <p className="text-muted-foreground text-base">Adoro ter a liberdade e o poder de criar uma marca do 0 até ao sucesso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 md:py-28 px-6 md:px-8 relative overflow-hidden">
        <Particles 
          className="absolute inset-0" 
          quantity={150} 
          ease={100} 
          color="#FFFFFF"
          refresh={false} 
          size={0.8} 
        />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8 md:mb-12 text-white">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-dark-foreground mb-8 md:mb-12">
            Estou sempre aberto a novas oportunidades e parcerias interessantes.
          </p>
          <a href="mailto:seu@email.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
            <Instagram size={20} />
            Entre em Contato
          </a>
        </div>
      </section>
    </div>;
};

export default Index;
