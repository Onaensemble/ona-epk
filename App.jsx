import React, { useState } from 'react';
import './App.css';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { Music, Users, MapPin, Calendar, ExternalLink, Instagram, Play, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

// Importando as imagens
import ensembleGroup from './assets/ona_ensemble.jpeg';
import ensembleGroup2 from './assets/ona.jpg';
import performancePhoto1 from './assets/_DSC2496_11zon.jpg';
import victorPrado from './assets/_DSC1470.jpg';
import colleenAllen from './assets/_DSC1481.jpg';
import oliviaEsther from './assets/_DSC1457.jpg';
import ensemblePerformance from './assets/_DSC1435.jpg';
import andreValerio from './assets/_DSC1452.jpg';

function App() {
  const [activeSection, setActiveSection] = useState('biografia');

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const integrantes = [
    {
      nome: "Olivia Esther",
      instrumento: "Trompa",
      foto: oliviaEsther,
      descricao: "Trompista clássica reconhecida internacionalmente no mundo da música de câmara clássica e contemporânea."
    },
    {
      nome: "Victor Prado",
      instrumento: "Trompa",
      foto: victorPrado,
      descricao: "Trompista brasileiro especializado em jazz brasileiro e choro, co-fundador do ensemble."
    },
    {
      nome: "Sheba Thibideau",
      instrumento: "Fagote",
      foto: ensembleGroup,
      descricao: "Fagotista canadense conhecida por seu trabalho em música de câmara e nova música."
    },
    {
      nome: "Colleen Allen",
      instrumento: "Saxofones/Flauta",
      foto: colleenAllen,
      descricao: "Uma das saxofonistas de jazz mais respeitadas do Canadá."
    },
    {
      nome: "André Valério",
      instrumento: "Violão/Guitarra",
      foto: andreValerio,
      descricao: "Guitarrista e compositor brasileiro com raízes profundas no choro e jazz."
    },
    {
      nome: "Roberto Occhipinti",
      instrumento: "Contrabaixo",
      foto: ensembleGroup,
      descricao: "Contrabaixista renomado, adicionando profundidade e versatilidade à seção rítmica do Oná Ensemble."
    },
    {
      nome: "Alan Hetherington",
      instrumento: "Bateria/Percussão",
      foto: ensembleGroup,
      descricao: "Percussionista reconhecido por seu trabalho em tradições musicais globais e contemporâneas."
    }
  ];

  const apresentacoes = [
    "Jazz Bistro",
    "The Rex",
    "Reid's Distillery",
    "Markham Jazz Festival",
    "Toronto Jazz Festival",
    "Lula Lounge",
    "JazzInToronto Community Celebration"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <motion.header 
        className="bg-white shadow-lg sticky top-0 z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Music className="h-8 w-8 text-amber-600" />
              <div>
                <h1 className="text-2xl font-bold text-slate-800">Oná Ensemble</h1>
                <p className="text-sm text-slate-600">Electronic Press Kit</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              {['biografia', 'integrantes', 'música', 'apresentações', 'contato'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeSection === section 
                      ? 'bg-amber-600 text-white shadow-lg' 
                      : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section 
        className="relative h-96 bg-gradient-to-r from-amber-600 to-orange-600 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <motion.div 
            className="text-white max-w-2xl"
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-5xl font-bold mb-4">Oná Ensemble</h2>
            <p className="text-xl mb-6">
              Uma nova voz ousada no chamber jazz brasileiro-canadense
            </p>
            <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
              Chamber Jazz • Choro • Música Clássica
            </Badge>
          </motion.div>
        </div>
        <motion.div 
          className="absolute right-0 top-0 h-full w-1/2 opacity-30"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img 
            src={ensembleGroup} 
            alt="Oná Ensemble" 
            className="h-full w-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Biografia Section */}
          {activeSection === 'biografia' && (
            <motion.section variants={fadeInUp}>
              <Card className="mb-8 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl text-slate-800 flex items-center">
                    <Users className="mr-3 text-amber-600" />
                    Biografia
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <p className="text-lg leading-relaxed text-slate-700">
                        Oná Ensemble é um conjunto de música de câmara brasileiro-canadense que 
                        mistura jazz e é baseado e inspirado na força vital que é a música brasileira. 
                        Embora sejam um conjunto emergente, cada músico alcançou reconhecimento 
                        internacional nos palcos da Música Clássica, Jazz e World Music ao longo de 3 décadas.
                      </p>
                      <p className="text-lg leading-relaxed text-slate-700">
                        A instrumentação única do conjunto de duas trompas, fagote, palhetas 
                        (flauta, clarinete, saxofone), violão e percussão proporciona um som global e 
                        "clássico" cativante combinado com a alma do Jazz e do Choro Brasileiro.
                      </p>
                    </div>
                    <div className="relative">
                      <img 
                        src={ensembleGroup2} 
                        alt="Oná Ensemble - Foto do grupo" 
                        className="rounded-lg shadow-lg w-full"
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-semibold text-slate-800">A História</h3>
                    <p className="text-lg leading-relaxed text-slate-700">
                      O nome <em>Oná</em>, derivado da palavra iorubá para "novo caminho", captura a 
                      missão central do conjunto: criar música original que seja enraizada na herança 
                      cultural e exploratória em forma e som. A ideia para Oná nasceu após um encontro 
                      entre Olivia Esther e Victor Prado no International Horn Symposium de 2023 em Montreal.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700">
                      Vindo de distintas formações musicais—Esther no mundo da música de câmara clássica 
                      e contemporânea, e Prado no jazz brasileiro e choro—os dois trompistas descobriram 
                      uma visão artística comum. Unidos por um profundo interesse em contar histórias, 
                      improvisação e diálogo musical transcultural, eles começaram a desenvolver um projeto 
                      que uniria suas respectivas tradições.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          )}

          {/* Integrantes Section */}
          {activeSection === 'integrantes' && (
            <motion.section variants={fadeInUp}>
              <Card className="mb-8 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl text-slate-800 flex items-center">
                    <Users className="mr-3 text-amber-600" />
                    Integrantes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {integrantes.map((integrante, index) => (
                      <motion.div
                        key={integrante.nome}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-6">
                            <div className="text-center space-y-4">
                              <img 
                                src={integrante.foto} 
                                alt={integrante.nome}
                                className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                              />
                              <div>
                                <h3 className="text-xl font-semibold text-slate-800">{integrante.nome}</h3>
                                <Badge variant="secondary" className="mt-2">
                                  {integrante.instrumento}
                                </Badge>
                              </div>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {integrante.descricao}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          )}

          {/* Música Section */}
          {activeSection === 'música' && (
            <motion.section variants={fadeInUp}>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-800 flex items-center">
                      <Play className="mr-3 text-amber-600" />
                      Ouça Nossa Música
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">"São Paulo Sessions" EP</h3>
                      <p className="mb-2">Lançado em abril de 2025</p>
                      <p className="mb-4 text-sm">Gravado no Brasil com o lendário cantor, multi-instrumentista e compositor indicado ao Grammy, Filó Machado</p>
                      <Button 
                        className="bg-white text-green-600 hover:bg-green-50"
                        onClick={() => window.open('https://open.spotify.com/album/7IdIjxHJZBHyBWBjJv87cN?si=-FlzNIPQRs6jriNKwIFf0Q', '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Abrir no Spotify
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-slate-800">Estilo Musical</h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Chamber Jazz</Badge>
                        <Badge>Choro Brasileiro</Badge>
                        <Badge>Música Clássica</Badge>
                        <Badge>World Music</Badge>
                        <Badge>Improvisação</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-800">Instrumentação</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="font-medium">Trompas</span>
                        <Badge variant="outline">2</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="font-medium">Fagote</span>
                        <Badge variant="outline">1</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="font-medium">Saxofones/Flauta</span>
                        <Badge variant="outline">1</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="font-medium">Violão/Guitarra</span>
                        <Badge variant="outline">1</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span className="font-medium">Bateria/Percussão</span>
                        <Badge variant="outline">1</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>
          )}

          {/* Apresentações Section */}
          {activeSection === 'apresentações' && (
            <motion.section variants={fadeInUp}>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-800 flex items-center">
                      <MapPin className="mr-3 text-amber-600" />
                      Principais Apresentações
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {apresentacoes.map((local, index) => (
                        <motion.div
                          key={local}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center p-3 bg-slate-50 rounded-lg hover:bg-amber-50 transition-colors duration-300"
                        >
                          <Calendar className="mr-3 h-5 w-5 text-amber-600" />
                          <span className="font-medium">{local}</span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                      <p className="text-sm text-slate-700">
                        <strong>Localização:</strong> Toronto, Canadá
                      </p>
                      <p className="text-sm text-slate-700 mt-1">
                        Principais casas de jazz e festivais da cidade
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-800">Reconhecimento</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Latin Jazz Network</h4>
                      <p className="text-sm text-blue-700 mb-3">
                        "Introducing Oná: A Bold New Voice in Chamber Jazz"
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open('https://latinjazznet.com/featured/introducing-ona-a-bold-new-voice-in-chamber-jazz/', '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ler Artigo
                      </Button>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-2">That Canadian Magazine</h4>
                      <p className="text-sm text-red-700 mb-3">
                        "JazzInToronto Community Celebration: ONÁ Ensemble"
                      </p>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => window.open('https://thatcanadianmagazine.com/featured-events/jazzintoronto-community-celebration-ona-ensemble/', '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ler Artigo
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-800">Destaques</h4>
                      <ul className="space-y-1 text-sm text-slate-600">
                        <li>• EP "São Paulo Sessions" lançado em abril de 2025</li>
                        <li>• Colaboração com Filó Machado (indicado ao Grammy)</li>
                        <li>• Reconhecimento internacional individual de cada músico</li>
                        <li>• 3 décadas de experiência coletiva</li>
                        <li>• Inovação na instrumentação de chamber jazz</li>
                        <li>• Fusão única de tradições musicais</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>
          )}

          {/* Contato Section */}
          {activeSection === 'contato' && (
            <motion.section variants={fadeInUp}>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-800 flex items-center">
                      <Mail className="mr-3 text-amber-600" />
                      Informações de Contato
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-lg">
                        <h4 className="font-semibold text-slate-800 mb-2">Para Contratações</h4>
                        <p className="text-sm text-slate-600">
                          Entre em contato para informações sobre apresentações e contratações
                        </p>
                      </div>
                      
                      <div className="p-4 bg-amber-50 rounded-lg">
                        <h4 className="font-semibold text-amber-800 mb-2">Redes Sociais</h4>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start"
                          onClick={() => window.open('https://www.instagram.com/onaensemble/', '_blank')}
                        >
                          <Instagram className="mr-2 h-4 w-4" />
                          @onaensemble
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-slate-800">Informações Técnicas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-800">Requisitos de Som</h4>
                      <div className="text-sm text-slate-600 space-y-1">
                        <p>• 2x Clip mic XLR (Trompas)</p>
                        <p>• 1x Clip mic XLR (Fagote)</p>
                        <p>• 3x Clip mic (Saxofones/Flauta/Clarinete)</p>
                        <p>• 1x DI ou Mic (Violão/Guitarra)</p>
                        <p>• Kit completo de bateria (4 mics)</p>
                        <p>• 1x Clip mic (Pandeiro)</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-800">Formatos de Show</h4>
                      <div className="text-sm text-slate-600">
                        <p>• Apresentações em formato de câmara</p>
                        <p>• Repertório original e standards brasileiros</p>
                        <p>• Duração flexível conforme evento</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>
          )}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Music className="h-6 w-6 text-amber-400" />
            <h3 className="text-xl font-semibold">Oná Ensemble</h3>
          </div>
          <p className="text-slate-400 mb-4">
            Criando novos caminhos para música de câmara, colaboração e performance
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://open.spotify.com/album/7IdIjxHJZBHyBWBjJv87cN?si=-FlzNIPQRs6jriNKwIFf0Q', '_blank')}
            >
              Spotify
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.open('https://www.instagram.com/onaensemble/', '_blank')}
            >
              Instagram
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

