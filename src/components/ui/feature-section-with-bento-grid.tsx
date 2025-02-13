import { Paintbrush, ShoppingCart, Share2, Bitcoin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BorderTrail } from "@/components/ui/border-trail";
function Feature() {
  return <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Expertise</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Minhas Habilidades
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Áreas em que posso ajudar você e seu negócio a crescer
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <Paintbrush className="w-8 h-8 stroke-1 text-black mb-6" />
              <div className="flex flex-col">
                <h3 className="text-xl font-medium tracking-tight mb-3">Web Design</h3>
                <p className="text-muted-foreground text-base">Criação de designs modernos e responsivos, com foco na experiência do usuário.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 aspect-square flex justify-between flex-col relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <ShoppingCart className="w-8 h-8 stroke-1 text-black mb-6" />
              <div className="flex flex-col">
                <h3 className="text-xl font-medium tracking-tight mb-3">E-commerce</h3>
                <p className="text-muted-foreground text-base">
                  Desenvolvimento e otimização de lojas online com foco em conversão e experiência de compra.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 aspect-square flex justify-between flex-col relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <Share2 className="w-8 h-8 stroke-1 text-black mb-6" />
              <div className="flex flex-col">
                <h3 className="text-xl font-medium tracking-tight mb-3">Redes Sociais</h3>
                <p className="text-muted-foreground text-base">
                  Gestão e estratégia de conteúdo para redes sociais, aumentando o engajamento e alcance da sua marca.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl h-full lg:col-span-2 p-8 aspect-square lg:aspect-auto flex justify-between flex-col relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <Bitcoin className="w-8 h-8 stroke-1 text-black mb-6" />
              <div className="flex flex-col">
                <h3 className="text-xl font-medium tracking-tight mb-3">Crypto</h3>
                <p className="text-muted-foreground text-base">
                  Implementação de soluções blockchain e integração de pagamentos com criptomoedas em aplicações web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export { Feature };