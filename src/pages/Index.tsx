import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ChevronDown, Gamepad2, Cpu, ShoppingBag } from "lucide-react";
import { Particles } from "@/components/ui/particles";
import { Feature } from "@/components/ui/feature-section-with-bento-grid";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center section-padding relative overflow-hidden">
        <Particles className="absolute inset-0" quantity={100} ease={100} color="#000000" refresh={false} size={0.5} />

        <div className={`text-center transform transition-all duration-700 relative z-10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="text-sm uppercase tracking-widest mb-4 inline-block font-medium">BEM-VINDO/A AO MEU PORTFÓLIO</span>
          <h1 className="text-4xl md:text-6xl font-display font-semibold mb-6">Miguel Martins</h1>
          <p className="text-lg max-w-2xl mx-0 px-0 text-zinc-950 md:text-base font-semibold">AI Web Designer | AI Web Developer | E-commerce Specialist</p>
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
      <section id="sobre" className="section-padding bg-secondary relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8 text-center">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground mb-6">Sou um jovem apaixonado por tecnologia e vendas online, com experiência em criar soluções web inovadoras. A minha jornada começou há 5 anos, e desde então venho construindo sites e lojas que fazem a diferença.</p>
          <p className="text-lg text-muted-foreground font-medium">E-commerce, Gestão de Redes Sociais e Desenvolvimento de Websites são as áreas onde tenho mais experiência, onde procuro sempre aprender e evoluir (sozinho ou em equipa) para entregar os melhores resultados e aumentar as minhas capacidades.</p>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="section-padding relative overflow-hidden">
        <Particles className="absolute inset-0" quantity={100} ease={100} color="#000000" refresh={false} size={0.5} />
        <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center relative z-10">
          Projetos em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-video bg-muted relative overflow-hidden rounded-lg">
              <img src="/lovable-uploads/ed11d115-5906-4891-abf6-588f873bc673.png" alt="Estética Nature Project" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl mb-2 font-bold">Estética Nature</h3>
                  <p className="text-gray-200 text-base font-bold">Gestão e Desenvolvimento do Website</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-video bg-muted relative overflow-hidden rounded-lg">
              <img src="/lovable-uploads/bbcbf495-2445-4b8f-8df1-e964575ae51c.png" alt="iFrame Project" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl mb-2 font-bold">iFrame.pt</h3>
                  <p className="text-gray-200 text-base font-bold">E-commerce e Gestão de Redes Sociais</p>
                </div>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-lg">
            <div className="aspect-video bg-muted relative overflow-hidden rounded-lg">
              <img src="/lovable-uploads/1a0fbe81-90b3-494d-8f82-349dfc4e0794.png" alt="Total Sales Project" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-xl mb-2 font-bold">Wiser Metrics</h3>
                  <p className="text-gray-200 text-base font-bold">Gestão e Desenvolvimento do Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-secondary relative overflow-hidden">
        <Feature />
      </section>

      {/* Hobbies Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-12 text-center">
            Hobbies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 aspect-square flex flex-col items-start relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <Gamepad2 className="w-8 h-8 stroke-1 text-black mb-6" />
              <h3 className="text-xl font-medium tracking-tight mb-3">Futebol</h3>
              <p className="text-muted-foreground text-base">
                Jogador federado desde os 5 anos, contribuindo para o bem-estar físico e mental.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 aspect-square flex flex-col items-start relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <Cpu className="w-8 h-8 stroke-1 text-black mb-6" />
              <h3 className="text-xl font-medium tracking-tight mb-3">Tecnologia</h3>
              <p className="text-muted-foreground text-base">Apaixonado por tecnologia  que é útil e que resolve problemas mundiais.</p>
            </div>

            <div className="bg-white rounded-3xl p-8 aspect-square flex flex-col items-start relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <ShoppingBag className="w-8 h-8 stroke-1 text-black mb-6" />
              <h3 className="text-xl font-medium tracking-tight mb-3">Dropshipping</h3>
              <p className="text-muted-foreground text-base">Adoro ter a liberdade e o poder de criar uma marca do 0 até ao sucesso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="section-padding relative overflow-hidden">
        <Particles className="absolute inset-0" quantity={100} ease={100} color="#000000" refresh={false} size={0.5} />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-8">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Estou sempre aberto a novas oportunidades e parcerias interessantes.
          </p>
          <a href="mailto:seu@email.com" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            <Mail size={20} />
            Entre em Contato
          </a>
        </div>
      </section>
    </div>;
};

export default Index;
