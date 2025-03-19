import Image from "next/image"
import Link from "next/link"
import { Check, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Barra de navegação */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl text-primary">BolsasLucrativas</div>
          <nav className="hidden md:flex gap-6">
            <Link href="#beneficios" className="text-sm font-medium hover:text-primary">
              Benefícios
            </Link>
            <Link href="#conteudo" className="text-sm font-medium hover:text-primary">
              O que você recebe
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:text-primary">
              Depoimentos
            </Link>
            <Link href="#garantia" className="text-sm font-medium hover:text-primary">
              Garantia
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="#comprar">Comprar Agora</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <Badge className="mb-2">Método Exclusivo</Badge>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                <span className="text-primary">100 BOLSAS DE CROCHÊ</span> QUE VENDEM O ANO TODO
              </h1>
              <p className="text-xl text-muted-foreground">
                Receba hoje mesmo as receitas mais lucrativas para faturar R$2.700,00 por semana e criar uma nova fonte
                de renda.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="font-medium">4.9/5</span>
                <span className="text-muted-foreground">(mais de 1.200 avaliações)</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild size="lg" className="text-base">
                  <Link href="#comprar">Quero Começar Agora</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link href="#conteudo">Ver Detalhes</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute -top-6 -left-6 w-28 h-28 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-primary/10 rounded-full blur-xl"></div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    width={400}
                    height={500}
                    alt="Ebook 100 Bolsas de Crochê"
                    className="mx-auto rounded-lg shadow-2xl rotate-3 z-10 relative"
                  />
                  <Image
                    src="/placeholder.svg?height=300&width=250"
                    width={250}
                    height={300}
                    alt="Bônus: Aulas de Receitas e Gráficos"
                    className="absolute -bottom-10 -left-10 rounded-lg shadow-xl -rotate-6 z-20"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-white text-sm font-bold py-1 px-3 rounded-full rotate-12 z-30">
                    BÔNUS EXCLUSIVO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Por que escolher nosso método?</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra como nossas receitas exclusivas podem transformar seu hobby em uma fonte de renda constante
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Receitas Testadas e Aprovadas",
                description: "Todas as 100 bolsas foram testadas e já venderam milhares de unidades por todo o Brasil.",
              },
              {
                title: "Passo a Passo Detalhado",
                description:
                  "Instruções claras com fotos e gráficos para você criar peças perfeitas, mesmo sendo iniciante.",
              },
              {
                title: "Materiais Acessíveis",
                description: "Selecionamos receitas que utilizam materiais de baixo custo e fáceis de encontrar.",
              },
              {
                title: "Suporte Exclusivo",
                description: "Acesso ao nosso grupo privado onde você pode tirar dúvidas e receber orientações.",
              },
              {
                title: "Estratégias de Venda",
                description: "Aprenda como precificar, fotografar e vender suas peças online e offline.",
              },
              {
                title: "Atualizações Gratuitas",
                description: "Receba novas receitas e tendências do mercado sem custo adicional.",
              },
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-2 text-primary">
                      <Check className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{benefit.title}</h3>
                      <p className="text-muted-foreground mt-2">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* O que você recebe */}
      <section id="conteudo" className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">O que você vai receber</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Conteúdo completo para você começar a produzir e vender imediatamente
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-28 h-28 bg-primary/10 rounded-full blur-xl"></div>
              <Image
                src="/placeholder.svg?height=600&width=500"
                width={500}
                height={600}
                alt="Conteúdo do curso"
                className="mx-auto rounded-lg shadow-xl"
              />
              <Badge className="absolute top-4 right-4 text-sm py-1 px-3">Acesso Imediato</Badge>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Ebook Principal: 100 Bolsas de Crochê</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>100 receitas completas com gráficos e instruções passo a passo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Lista de materiais necessários para cada modelo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dicas de acabamento profissional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Guia de precificação para maximizar seus lucros</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Bônus Exclusivo: Aulas de Receitas e Gráficos</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>10 videoaulas detalhadas dos modelos mais vendidos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Como interpretar e criar seus próprios gráficos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Técnicas avançadas para acelerar sua produção</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Suporte e Comunidade</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Acesso ao grupo exclusivo de alunas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Suporte por 12 meses para tirar dúvidas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">O que nossas alunas dizem</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Histórias reais de pessoas que transformaram suas vidas com nossas receitas
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Maria Silva",
                location: "São Paulo, SP",
                testimonial:
                  "Comecei a fazer crochê como hobby e hoje tenho uma renda extra de R$1.800 por mês vendendo apenas nos finais de semana. As receitas são fáceis de seguir e os produtos vendem muito bem!",
              },
              {
                name: "Ana Oliveira",
                location: "Rio de Janeiro, RJ",
                testimonial:
                  "Estava desempregada quando comprei o curso. Em 3 meses, já estava faturando mais do que no meu antigo emprego. A qualidade das receitas e o suporte fizeram toda a diferença.",
              },
              {
                name: "Juliana Costa",
                location: "Belo Horizonte, MG",
                testimonial:
                  "As bolsas deste guia são um sucesso nas feiras de artesanato! Já vendi mais de 50 peças em apenas dois meses. O investimento se pagou na primeira semana.",
              },
              {
                name: "Patrícia Mendes",
                location: "Curitiba, PR",
                testimonial:
                  "Mesmo sendo iniciante no crochê, consegui fazer peças lindas seguindo os gráficos. O bônus com as videoaulas foi fundamental para o meu aprendizado.",
              },
              {
                name: "Fernanda Santos",
                location: "Salvador, BA",
                testimonial:
                  "Abri minha loja online vendendo exclusivamente as bolsas deste guia. Em 6 meses, já tenho clientes fixos e uma lista de espera para alguns modelos.",
              },
              {
                name: "Luciana Almeida",
                location: "Recife, PE",
                testimonial:
                  "O que mais gostei foi a variedade de modelos. Tem bolsas para todos os gostos e ocasiões, o que me permite atingir diferentes públicos e maximizar as vendas.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground">"{testimonial.testimonial}"</p>
                    <div className="mt-auto">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section id="garantia" className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse"></div>
                <div className="bg-white rounded-full p-8 shadow-xl relative z-10">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    width={150}
                    height={150}
                    alt="Selo de garantia"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Garantia Incondicional de 30 Dias</h2>
              <p className="text-xl text-muted-foreground">
                Se por qualquer motivo você não ficar satisfeita com o material, basta solicitar o reembolso em até 30
                dias e devolveremos 100% do seu investimento, sem perguntas.
              </p>
              <p className="text-muted-foreground">
                Estamos tão confiantes na qualidade do nosso material que oferecemos esta garantia para que você possa
                investir com tranquilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="comprar" className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Comece Hoje Mesmo a Transformar Seu Crochê em Renda
              </h2>
              <p className="text-xl opacity-90">Acesso imediato a todo o conteúdo + bônus exclusivos</p>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
                  ))}
                </div>
                <span className="font-medium">4.9/5</span>
                <span className="opacity-75">(mais de 1.200 avaliações)</span>
              </div>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="text-4xl font-bold">R$97,00</div>
                  <div className="text-xl line-through opacity-75">R$297,00</div>
                  <Badge variant="outline" className="ml-2 text-sm py-1">
                    67% OFF
                  </Badge>
                </div>
                <p className="text-sm opacity-90">Pagamento único • Acesso vitalício • Sem mensalidades</p>
              </div>
            </div>
            <div className="bg-white text-foreground rounded-xl p-6 shadow-xl">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-center">Garanta Seu Acesso</h3>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="w-full bg-green-600 hover:bg-green-700">Cartão de Crédito</Button>
                    <Button className="w-full bg-green-600 hover:bg-green-700">Boleto Bancário</Button>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Pix</Button>
                </div>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Acesso imediato após a confirmação do pagamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Suporte por 12 meses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Garantia de 30 dias</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full text-lg py-6 bg-green-600 hover:bg-green-700">QUERO COMEÇAR AGORA</Button>
                </div>
                <div className="flex justify-center pt-4">
                  <Image
                    src="/placeholder.svg?height=40&width=250"
                    width={250}
                    height={40}
                    alt="Pagamento seguro"
                    className="h-10 w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Perguntas Frequentes</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
            {[
              {
                question: "Preciso ter experiência com crochê?",
                answer:
                  "Não é necessário ter experiência avançada. Nossas receitas são detalhadas e incluem instruções passo a passo. Além disso, o bônus com videoaulas ajuda iniciantes a dominarem as técnicas necessárias.",
              },
              {
                question: "Como recebo o material após a compra?",
                answer:
                  "Imediatamente após a confirmação do pagamento, você receberá um e-mail com as instruções de acesso à área de membros, onde poderá baixar todos os materiais e acessar os bônus.",
              },
              {
                question: "Quanto tempo leva para fazer uma bolsa?",
                answer:
                  "O tempo varia conforme o modelo e sua experiência. Em média, uma bolsa pode ser concluída em 1-3 dias, dedicando algumas horas por dia. Com a prática, você conseguirá produzir mais rapidamente.",
              },
              {
                question: "Como faço para vender as bolsas?",
                answer:
                  "O material inclui um guia completo de estratégias de venda, com dicas para vender online (Instagram, Facebook, marketplaces) e offline (feiras, lojas locais). Compartilhamos também técnicas de fotografia e precificação.",
              },
              {
                question: "É possível realmente ganhar R$2.700 por semana?",
                answer:
                  "Este valor é baseado na experiência de alunas que se dedicaram ao negócio. Os resultados variam conforme seu empenho, tempo dedicado e estratégias de venda. Temos diversos casos de sucesso com ganhos significativos.",
              },
              {
                question: "Posso acessar o material em qualquer dispositivo?",
                answer:
                  "Sim, todo o conteúdo é digital e pode ser acessado em computadores, tablets e smartphones. As videoaulas também estão otimizadas para visualização em qualquer dispositivo.",
              },
            ].map((faq, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-xl font-bold">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/40">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="font-bold text-xl text-primary mb-4">BolsasLucrativas</div>
              <p className="text-sm text-muted-foreground">
                Transformando habilidades em oportunidades de negócio desde 2020.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#beneficios" className="text-muted-foreground hover:text-primary">
                    Benefícios
                  </Link>
                </li>
                <li>
                  <Link href="#conteudo" className="text-muted-foreground hover:text-primary">
                    O que você recebe
                  </Link>
                </li>
                <li>
                  <Link href="#depoimentos" className="text-muted-foreground hover:text-primary">
                    Depoimentos
                  </Link>
                </li>
                <li>
                  <Link href="#garantia" className="text-muted-foreground hover:text-primary">
                    Garantia
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-muted-foreground">suporte@bolsaslucrativas.shop</li>
                <li className="text-muted-foreground">Atendimento: Seg-Sex, 9h às 18h</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Formas de Pagamento</h3>
              <Image
                src="/placeholder.svg?height=40&width=200"
                width={200}
                height={40}
                alt="Formas de pagamento"
                className="h-8 w-auto"
              />
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} BolsasLucrativas. Todos os direitos reservados.</p>
            <p className="mt-2">
              <Link href="#" className="hover:text-primary">
                Termos de Uso
              </Link>{" "}
              •
              <Link href="#" className="hover:text-primary ml-2">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

