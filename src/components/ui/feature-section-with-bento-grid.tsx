
import { Paintbrush, ShoppingCart, Share2, Bitcoin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BorderTrail } from "@/components/ui/border-trail";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
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
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col relative">
              <BorderTrail 
                className="bg-gradient-to-l from-[#9b87f5] via-[#7E69AB] to-[#6E59A5]"
                size={120}
              />
              <Paintbrush className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Web Design</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Criação de designs modernos e responsivos para websites e aplicações web, focando na experiência do usuário.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col relative">
              <BorderTrail 
                className="bg-gradient-to-l from-[#0EA5E9] via-[#1EAEDB] to-[#33C3F0]"
                size={100}
              />
              <ShoppingCart className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">E-commerce</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Desenvolvimento e otimização de lojas online com foco em conversão e experiência de compra.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col relative">
              <BorderTrail 
                className="bg-gradient-to-l from-[#F2FCE2] via-[#D3E4FD] to-[#E5DEFF]"
                size={100}
              />
              <Share2 className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Redes Sociais</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Gestão e estratégia de conteúdo para redes sociais, aumentando o engajamento e alcance da sua marca.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col relative">
              <BorderTrail 
                className="bg-gradient-to-l from-[#8B5CF6] via-[#D6BCFA] to-[#9b87f5]"
                size={120}
              />
              <Bitcoin className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Crypto</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Implementação de soluções blockchain e integração de pagamentos com criptomoedas em aplicações web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
