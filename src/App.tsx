import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Layers, 
  Target, 
  Zap, 
  MessageSquare, 
  Menu, 
  X,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Types ---
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
}

interface CaseStudy {
  id: number;
  client: string;
  category: string;
  image: string;
  result: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'Branding e Identidade',
    description: 'Criamos identidades de marca icônicas que ressoam profundamente e comandam atenção em mercados saturados.',
    icon: <Layers className="w-6 h-6" />,
    benefits: ['Sistemas de Identidade Visual', 'Voz e Mensagem da Marca', 'Diretrizes de Marca']
  },
  {
    id: 'strategy',
    title: 'Estratégia de Marketing',
    description: 'Roteiros baseados em dados projetados para navegar na complexidade e alcançar dominância de mercado sustentável.',
    icon: <Target className="w-6 h-6" />,
    benefits: ['Pesquisa de Mercado', 'Análise de Concorrência', 'Roteiros de Crescimento']
  },
  {
    id: 'digital',
    title: 'Marketing Digital',
    description: 'Estratégias digitais de funil completo que transformam cliques em clientes e visitantes em defensores da marca.',
    icon: <Zap className="w-6 h-6" />,
    benefits: ['Marketing de Performance', 'SEO e SEM', 'Automação de E-mail']
  },
  {
    id: 'content',
    title: 'Criação de Conteúdo',
    description: 'Storytelling de alto impacto em todas as plataformas para construir autoridade e promover o engajamento da comunidade.',
    icon: <MessageSquare className="w-6 h-6" />,
    benefits: ['Produção de Vídeo', 'Copywriting', 'Ativos para Redes Sociais']
  }
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    client: 'Lumina Tech',
    category: 'Transformação Digital',
    image: 'https://picsum.photos/seed/tech/800/600',
    result: '+140% Geração de Leads'
  },
  {
    id: 2,
    client: 'Aether Fashion',
    category: 'Identidade de Marca',
    image: 'https://picsum.photos/seed/fashion/800/600',
    result: 'Entrada no Mercado Global'
  },
  {
    id: 3,
    client: 'Vertex Finance',
    category: 'Campanha Publicitária',
    image: 'https://picsum.photos/seed/finance/800/600',
    result: '2.4x ROI em Anúncios'
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'InnovateX',
    content: 'A Prisma Hub não apenas mudou nosso marketing; eles mudaram toda a trajetória do nosso negócio. Sua profundidade estratégica é inigualável.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: 2,
    name: 'Marcus Thorne',
    role: 'Diretor de Marketing',
    company: 'Skyline Corp',
    content: 'O nível de criatividade e precisão que eles trazem para cada campanha é de tirar o fôlego. Eles são verdadeiros parceiros em nosso crescimento.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Sobre', href: '#about' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm rotate-45">
            <div className="w-4 h-4 bg-black -rotate-45"></div>
          </div>
          <span className="text-2xl font-bold tracking-tighter text-white uppercase">Prisma Hub</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs font-bold text-white/70 hover:text-white transition-colors tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
          <button className="px-6 py-2 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 text-xs font-bold uppercase tracking-widest">
            Começar
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black border-b border-white/10 py-8 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-sm">
                Começar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full mb-8">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold">O Nexo Estratégico</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-light text-white leading-[0.9] tracking-tighter mb-8">
            VISÃO EM <br />
            <span className="font-bold italic">DOMINÂNCIA.</span>
          </h1>
          <p className="text-lg text-white/50 max-w-lg mb-12 leading-relaxed font-light">
            Prisma Hub é uma agência criativa premium que transforma complexidade em clareza. Construímos marcas que não apenas existem—elas lideram.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-white/90 transition-all group">
              Iniciar Projeto <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all">
              Ver Portfólio
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="aspect-square relative">
             <img 
              src="https://picsum.photos/seed/agency/1000/1000" 
              alt="Agência Criativa" 
              className="w-full h-full object-cover grayscale brightness-50 border border-white/10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-white/20 p-8 backdrop-blur-xl bg-black/40">
              <div className="text-4xl font-bold text-white mb-2">12+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 leading-tight">Anos de Excelência <br />Estratégica</div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold rotate-90 origin-left translate-x-3">Scroll</div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/50 to-transparent"></div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-black/40 mb-6">Nossas Capacidades</h2>
            <h3 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
              SOLUÇÕES <br />
              <span className="font-bold italic">ESTRATÉGICAS.</span>
            </h3>
          </div>
          <p className="text-black/60 max-w-sm text-sm leading-relaxed">
            Oferecemos um conjunto abrangente de serviços projetados para escalar sua marca e maximizar seu impacto no mercado através de precisão e criatividade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-10 hover:bg-black hover:text-white transition-all duration-500 group">
              <div className="mb-8 text-black group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{service.title}</h4>
              <p className="text-sm opacity-60 mb-8 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider opacity-40 group-hover:opacity-100 transition-opacity">
                    <ChevronRight className="w-3 h-3" /> {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-white/40 mb-6">Trabalhos Selecionados</h2>
          <h3 className="text-5xl md:text-7xl font-light tracking-tighter leading-none">
            ESTUDOS DE <br />
            <span className="font-bold italic">CASO.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {CASE_STUDIES.map((study) => (
            <motion.div 
              key={study.id}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 border border-white/10 relative">
                <img 
                  src={study.image} 
                  alt={study.client} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">{study.category}</div>
                  <h4 className="text-2xl font-bold uppercase tracking-tighter">{study.client}</h4>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-2">Impacto</div>
                  <div className="text-lg font-bold italic text-white">{study.result}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <button className="group flex items-center gap-4 text-sm font-bold uppercase tracking-[0.3em] hover:text-white/60 transition-colors">
            Ver Todos os Projetos <div className="w-12 h-[1px] bg-white/30 group-hover:w-20 transition-all"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-white/40 mb-6">Voz do Cliente</h2>
            <h3 className="text-5xl md:text-7xl font-light tracking-tighter leading-none mb-12">
              ESCOLHIDA POR <br />
              <span className="font-bold italic">LÍDERES.</span>
            </h3>
            <p className="text-white/50 max-w-md leading-relaxed font-light">
              Nosso sucesso é medido pelo sucesso de nossos parceiros. Construímos relacionamentos de longo prazo baseados em transparência, resultados e crescimento mútuo.
            </p>
          </div>

          <div className="space-y-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-10 border border-white/10 bg-white/5 backdrop-blur-sm relative">
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5" />
                <p className="text-xl font-light italic mb-8 leading-relaxed text-white/90">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full grayscale border border-white/20" />
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest">{t.name}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-black/40 mb-6">Contate-nos</h2>
            <h3 className="text-5xl md:text-7xl font-light tracking-tighter leading-none mb-12">
              VAMOS CONSTRUIR <br />
              <span className="font-bold italic">ALGO ICÔNICO.</span>
            </h3>
            
            <div className="space-y-8 mt-16">
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-black/40 font-bold">E-mail</div>
                  <div className="text-lg font-bold">hello@prismahub.agency</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-black/40 font-bold">Ligue-nos</div>
                  <div className="text-lg font-bold">+1 (555) 012-3456</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group cursor-pointer">
                <div className="w-12 h-12 border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-black/40 font-bold">Visite-nos</div>
                  <div className="text-lg font-bold">77 Innovation Way, NY</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black p-12 text-white">
            <h4 className="text-2xl font-bold uppercase tracking-tight mb-8">Solicitar Consultoria</h4>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Nome Completo</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-white/40 outline-none transition-all" placeholder="João Silva" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">E-mail</label>
                  <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-white/40 outline-none transition-all" placeholder="joao@empresa.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Serviço Necessário</label>
                <select className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-white/40 outline-none transition-all appearance-none">
                  <option className="bg-black">Branding e Identidade</option>
                  <option className="bg-black">Estratégia de Marketing</option>
                  <option className="bg-black">Marketing Digital</option>
                  <option className="bg-black">Criação de Conteúdo</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Mensagem</label>
                <textarea rows={4} className="w-full bg-white/5 border border-white/10 px-4 py-3 focus:border-white/40 outline-none transition-all" placeholder="Conte-nos sobre sua visão..."></textarea>
              </div>
              <button className="w-full py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-all">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-6 h-6 bg-white flex items-center justify-center rounded-sm rotate-45">
                <div className="w-3 h-3 bg-black -rotate-45"></div>
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase">Prisma Hub</span>
            </div>
            <p className="text-white/40 max-w-md text-sm leading-relaxed mb-8">
              Uma agência criativa global dedicada a construir marcas de alto impacto através de inovação estratégica e excelência criativa.
            </p>
            <div className="flex gap-6">
              <Instagram className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-white/40">Navegação</h5>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#services" className="hover:text-white/60 transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-white/60 transition-colors">Portfólio</a></li>
              <li><a href="#about" className="hover:text-white/60 transition-colors">Sobre Nós</a></li>
              <li><a href="#contact" className="hover:text-white/60 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-widest font-bold mb-8 text-white/40">Jurídico</h5>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-white/60 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Termos de Serviço</a></li>
              <li><a href="#" className="hover:text-white/60 transition-colors">Política de Cookies</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            © 2026 Prisma Hub Agency. Todos os direitos reservados.
          </div>
          <div className="text-[10px] uppercase tracking-widest text-white/20 font-bold">
            Projetado para a Excelência.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-black text-white font-sans selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
