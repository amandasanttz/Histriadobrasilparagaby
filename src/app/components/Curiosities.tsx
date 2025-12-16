import { motion } from 'motion/react';
import { Sparkles, Eye, TrendingUp } from 'lucide-react';
import { useState } from 'react';

interface Curiosity {
  id: number;
  title: string;
  content: string;
  icon: string;
}

const curiosities: Curiosity[] = [
  {
    id: 1,
    title: "O Brasil já teve uma imperatriz negra",
    content: "Teresa de Benguela foi uma líder quilombola que, no século XVIII, comandou o Quilombo de Quariterê (MT) por duas décadas após a morte de seu companheiro. Ela estabeleceu um sistema de defesa, parlamento e economia própria, resistindo bravamente à escravidão. É considerada por muitos como uma imperatriz do quilombo.",
    icon: "👑"
  },
  {
    id: 2,
    title: "A primeira favela tinha nome de planta",
    content: "A primeira favela do Brasil surgiu no Morro da Providência, no Rio de Janeiro, em 1897. Soldados que voltaram da Guerra de Canudos se instalaram lá, e batizaram o local de 'Morro da Favela' por causa de um morro em Canudos que tinha muitas plantas chamadas favelas. O nome depois se generalizou para todas as comunidades similares.",
    icon: "🏘️"
  },
  {
    id: 3,
    title: "Dom Pedro II adorava invenções",
    content: "Dom Pedro II foi o primeiro chefe de Estado a usar o telefone na América Latina. Ele conheceu Alexander Graham Bell na Exposição Internacional da Filadélfia em 1876 e ficou tão impressionado que testou o aparelho pessoalmente, exclamando 'Meu Deus, isto fala!'. O imperador também fotografava, traduzia textos antigos e estudava astronomia.",
    icon: "📞"
  },
  {
    id: 4,
    title: "O Brasil teve um imperador europeu que nunca veio aqui",
    content: "Entre 1808 e 1821, o Brasil foi a única colônia do mundo a sediar a corte de um império europeu. Mas poucos sabem que Dom João VI só veio ao Brasil fugindo de Napoleão. Antes disso, o Brasil era governado a distância, e Dom João VI chegou ao Brasil sem nunca ter planejado sair de Portugal.",
    icon: "⚓"
  },
  {
    id: 5,
    title: "A bandeira brasileira mudou 13 vezes",
    content: "A bandeira atual do Brasil foi adotada em 1889, mas o país já teve 13 bandeiras diferentes desde o período colonial. Cada mudança de regime político ou territorial resultava em uma nova bandeira. A famosa frase 'Ordem e Progresso' foi inspirada no positivismo de Auguste Comte.",
    icon: "🇧🇷"
  },
  {
    id: 6,
    title: "O Hino Nacional tem 4 estrofes secretas",
    content: "A maioria dos brasileiros conhece apenas a primeira e segunda estrofes do Hino Nacional, mas ele tem ao todo 6 estrofes! As estrofes 'secretas' falam sobre heróis que morreram pela pátria, natureza brasileira e liberdade. O hino completo raramente é cantado em cerimônias oficiais.",
    icon: "🎵"
  },
  {
    id: 7,
    title: "O Brasil quase foi dividido em 3 países",
    content: "Durante o período regencial (1831-1840), várias revoltas separatistas quase dividiram o Brasil. A Revolução Farroupilha no Sul proclamou a República Rio-Grandense (1836-1845), a Cabanagem no Norte, e a Sabinada na Bahia. Se tivessem sucesso, hoje teríamos vários países no território brasileiro.",
    icon: "🗺️"
  },
  {
    id: 8,
    title: "Machado de Assis era neto de escravizados",
    content: "Machado de Assis, considerado o maior escritor brasileiro, era neto de escravos alforriados, negro, epilético e gago. Apesar de todas as barreiras sociais da época, tornou-se presidente da Academia Brasileira de Letras e revolucionou a literatura brasileira com obras como 'Dom Casmurro' e 'Memórias Póstumas de Brás Cubas'.",
    icon: "📚"
  },
  {
    id: 9,
    title: "A capital foi planejada em apenas 4 anos",
    content: "Brasília foi completamente construída em apenas 41 meses, entre 1956 e 1960, no governo de Juscelino Kubitschek. Foi a primeira cidade modernista planejada do mundo e é hoje Patrimônio Mundial da UNESCO. Cerca de 60 mil trabalhadores, chamados 'candangos', construíram a capital no meio do cerrado.",
    icon: "🏛️"
  },
  {
    id: 10,
    title: "Existiu um reino africano no Brasil",
    content: "O Quilombo dos Palmares existiu por quase 100 anos (1597-1694) e chegou a ter 30 mil habitantes, sendo maior que muitas cidades europeias da época. Tinha rei, leis próprias, agricultura, comércio e exército. Zumbi dos Palmares foi seu último líder e é símbolo da resistência negra no Brasil.",
    icon: "⚔️"
  },
  {
    id: 11,
    title: "O café já representou 70% das exportações",
    content: "No final do século XIX e início do XX, o café representava até 70% de todas as exportações brasileiras. O Brasil era o maior produtor mundial e a riqueza do café financiou ferrovias, indústrias e a modernização de São Paulo. Os 'barões do café' eram tão poderosos que controlavam a política nacional.",
    icon: "☕"
  },
  {
    id: 12,
    title: "Tivemos uma guerra esquecida na Amazônia",
    content: "Em 1835, a Cabanagem foi uma revolta popular no Pará que matou cerca de 30-40% da população da província. Foi a única revolta popular do período regencial em que os revoltosos conseguiram tomar o poder e governar. É uma das páginas mais sangrentas e menos conhecidas da história brasileira.",
    icon: "🌳"
  }
];

export function Curiosities() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [viewCount, setViewCount] = useState<{ [key: number]: number }>({});

  const handleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
    if (expandedId !== id) {
      setViewCount(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">Curiosidades Secretas</h2>
          <p className="text-xl text-purple-200">
            Gabrielly, descubra fatos incríveis que quase ninguém sabe sobre a história do Brasil
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curiosities.map((curiosity, index) => (
            <motion.div
              key={curiosity.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 cursor-pointer hover:bg-white/20 transition-all border border-white/10"
              onClick={() => handleExpand(curiosity.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{curiosity.icon}</span>
                <div className="flex items-center space-x-2 text-purple-300 text-sm">
                  <Eye className="w-4 h-4" />
                  <span>{viewCount[curiosity.id] || 0}</span>
                </div>
              </div>
              
              <h3 className="text-xl text-white mb-3">{curiosity.title}</h3>
              
              <motion.div
                initial={false}
                animate={{
                  height: expandedId === curiosity.id ? 'auto' : '0px',
                  opacity: expandedId === curiosity.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-purple-100 leading-relaxed mb-4">
                  {curiosity.content}
                </p>
              </motion.div>

              <button className="text-purple-300 hover:text-purple-200 text-sm flex items-center space-x-1 transition-colors">
                <span>{expandedId === curiosity.id ? 'Ver menos' : 'Descobrir'}</span>
                <motion.span
                  animate={{ rotate: expandedId === curiosity.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white border border-white/20">
            <TrendingUp className="w-5 h-5 text-yellow-400" />
            <span>Você descobriu {Object.keys(viewCount).length} de {curiosities.length} curiosidades!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
