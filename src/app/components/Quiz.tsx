import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Trophy, CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "A Revolta dos Malês (1835) em Salvador foi liderada por africanos muçulmanos. Qual era a principal reivindicação deste movimento?",
    options: [
      "Abolição imediata da escravidão e liberdade religiosa",
      "Melhores condições de trabalho nos engenhos",
      "Redução dos impostos sobre produtos importados",
      "Autonomia política da província da Bahia"
    ],
    correctAnswer: 0,
    explanation: "A Revolta dos Malês foi um levante de escravizados e libertos muçulmanos alfabetizados em árabe que lutavam pela abolição da escravidão e pela liberdade para praticar o Islamismo. Foi brutalmente reprimida."
  },
  {
    id: 2,
    question: "O Poder Moderador, estabelecido pela Constituição de 1824, era exclusivo do Imperador e permitia que ele:",
    options: [
      "Declarasse guerra sem consultar o Parlamento",
      "Dissolvesse a Câmara dos Deputados e nomeasse senadores vitalícios",
      "Criasse impostos por decreto imperial",
      "Alterasse a Constituição sem aprovação popular"
    ],
    correctAnswer: 1,
    explanation: "O Poder Moderador era a quarta instância de poder que concentrava grande autoridade nas mãos do imperador, permitindo-lhe dissolver a Câmara, nomear senadores vitalícios, suspender magistrados e interferir nos outros poderes. Era inspirado nas ideias de Benjamin Constant."
  },
  {
    id: 3,
    question: "A Guerra do Paraguai (1864-1870) teve consequências profundas para o Brasil. Qual foi uma das principais consequências políticas internas deste conflito?",
    options: [
      "Enfraquecimento do poder das oligarquias cafeeiras",
      "Fortalecimento do Exército como instituição política, contribuindo para a proclamação da República",
      "Imediata abolição da escravidão para recompensar os combatentes negros",
      "Descentralização administrativa através do federalismo"
    ],
    correctAnswer: 1,
    explanation: "A Guerra do Paraguai fortaleceu o Exército brasileiro como instituição modernizadora e politizada. Oficiais jovens retornaram influenciados pelo positivismo e ideais republicanos, tornando-se críticos da monarquia e protagonistas do golpe de 15 de novembro de 1889."
  },
  {
    id: 4,
    question: "A Confederação do Equador (1824) foi uma revolta separatista no Nordeste que defendia:",
    options: [
      "A manutenção da união com Portugal sob regime constitucional",
      "O republicanismo e o federalismo contra o absolutismo de Dom Pedro I",
      "A abolição gradual da escravidão e reforma agrária",
      "A instauração de uma monarquia constitucional parlamentarista"
    ],
    correctAnswer: 1,
    explanation: "A Confederação do Equador foi uma revolta republicana e federalista liderada por Frei Caneca e outros intelectuais que se opunham ao autoritarismo de Dom Pedro I após a outorga da Constituição de 1824. Defendiam a criação de uma república federativa. Foi brutalmente reprimida."
  },
  {
    id: 5,
    question: "Sobre a Revolução Farroupilha (1835-1845), é correto afirmar que:",
    options: [
      "Foi exclusivamente um movimento abolicionista liderado por escravizados",
      "Proclamou a República Rio-Grandense e a República Juliana, contestando o centralismo imperial e os altos impostos sobre o charque",
      "Teve apoio incondicional do governo imperial por defender a descentralização",
      "Resultou na independência permanente do Rio Grande do Sul"
    ],
    correctAnswer: 1,
    explanation: "A Revolução Farroupilha foi o mais longo conflito do período regencial/imperial. Os farroupilhas proclamaram a República Rio-Grandense (1836) e a República Juliana em Santa Catarina (1839), contestando os altos impostos imperiais sobre o charque gaúcho que favoreciam o charque platino importado. O conflito só terminou em 1845 com a Paz de Ponche Verde."
  },
  {
    id: 6,
    question: "A Lei de Terras de 1850 estabeleceu que as terras devolutas (terras públicas) só poderiam ser adquiridas mediante:",
    options: [
      "Doação gratuita para pequenos agricultores",
      "Compra, dificultando o acesso de ex-escravizados e imigrantes pobres à propriedade",
      "Ocupação e cultivo por cinco anos consecutivos",
      "Sorteio público entre candidatos qualificados"
    ],
    correctAnswer: 1,
    explanation: "A Lei de Terras de 1850 foi promulgada no mesmo ano da Lei Eusébio de Queirós (que proibiu o tráfico negreiro). Estabeleceu que terras públicas só poderiam ser adquiridas por compra, consolidando o latifúndio e impedindo que ex-escravizados e imigrantes pobres tivessem acesso à terra, mantendo-os como mão de obra nas fazendas."
  },
  {
    id: 7,
    question: "O sincretismo religioso nas religiões de matriz africana no Brasil representa:",
    options: [
      "Abandono completo das tradições africanas em favor do catolicismo",
      "Uma estratégia de resistência cultural onde orixás foram associados a santos católicos para preservar as práticas religiosas africanas",
      "Uma imposição da Igreja Católica para facilitar a conversão",
      "A fusão igualitária entre catolicismo e religiões africanas sem hierarquias"
    ],
    correctAnswer: 1,
    explanation: "O sincretismo religioso foi uma sofisticada estratégia de resistência. Os africanos escravizados associaram seus orixás aos santos católicos (Iemanjá/N. Sra. dos Navegantes, Xangô/São Jerônimo) para praticar suas religiões disfarçadamente sob repressão colonial, preservando cosmologias, rituais e línguas sagradas africanas."
  },
  {
    id: 8,
    question: "Qual evento marca o início da chamada 'Revolução Cognitiva' no Homo sapiens, há cerca de 70 mil anos?",
    options: [
      "O desenvolvimento da agricultura e domesticação de animais",
      "Um salto nas capacidades mentais resultando em linguagem complexa, arte elaborada e pensamento simbólico",
      "A descoberta do fogo e seu controle sistemático",
      "A migração definitiva da África para todos os continentes"
    ],
    correctAnswer: 1,
    explanation: "A Revolução Cognitiva (aproximadamente 70 mil anos atrás) marca um salto qualitativo nas capacidades mentais do Homo sapiens: linguagem mais complexa, pensamento abstrato, planejamento de longo prazo, religião e arte elaborada. Foi após essa revolução que começaram as grandes migrações para fora da África."
  },
  {
    id: 9,
    question: "A Cabanagem (1835-1840) no Grão-Pará foi uma das revoltas mais violentas do período regencial. Qual foi sua principal característica?",
    options: [
      "Foi liderada exclusivamente por membros da elite local",
      "Foi a única revolta popular do período regencial em que os revoltosos tomaram o poder, com ampla participação de indígenas, negros e mestiços pobres",
      "Defendia a recolonização portuguesa da região amazônica",
      "Tinha como objetivo principal a industrialização da região"
    ],
    correctAnswer: 1,
    explanation: "A Cabanagem foi a revolta mais radical do período regencial. Populações pobres (cabanos - indígenas, negros, mestiços) tomaram o poder em Belém e governaram a província. Foi extremamente violenta e estima-se que morreu entre 30-40% da população do Pará. É considerada a revolta mais sangrenta da história brasileira."
  },
  {
    id: 10,
    question: "Durante o Segundo Reinado, o sistema político brasileiro era caracterizado pelo parlamentarismo às avessas. Isso significa que:",
    options: [
      "O Parlamento escolhia livremente o Primeiro-Ministro sem interferência imperial",
      "O Imperador, através do Poder Moderador, nomeava o presidente do Conselho de Ministros, que então dissolvia a Câmara e convocava eleições para formar uma maioria favorável",
      "Os partidos políticos alternavam-se no poder através de eleições livres e diretas",
      "O sistema era totalmente democrático com sufrágio universal"
    ],
    correctAnswer: 1,
    explanation: "No 'parlamentarismo às avessas', o Imperador usava o Poder Moderador para nomear o presidente do Conselho de Ministros (Liberal ou Conservador conforme sua preferência), que então dissolvia a Câmara e organizava eleições para garantir maioria parlamentar. Assim, não era o Parlamento que escolhia o governo, mas o governo que fabricava o Parlamento."
  },
  {
    id: 11,
    question: "O Quilombo dos Palmares (1597-1694) estabeleceu uma sociedade complexa que:",
    options: [
      "Tinha população maior que muitas cidades europeias da época, com rei próprio, economia agrícola, comércio e exército organizado",
      "Existiu pacificamente sem enfrentar ataques portugueses ou holandeses",
      "Aboliu completamente qualquer forma de hierarquia social",
      "Focava exclusivamente em ataques militares sem desenvolver agricultura"
    ],
    correctAnswer: 0,
    explanation: "Palmares chegou a ter 30 mil habitantes (maior que a maioria das cidades europeias da época), com organização política (Zumbi foi o último rei), economia baseada em agricultura diversificada, comércio com vilas próximas, e defesa militar sofisticada. Resistiu por quase 100 anos a inúmeros ataques antes de ser destruído em 1694."
  },
  {
    id: 12,
    question: "As reformas pombalinas (1750-1777), implementadas pelo Marquês de Pombal, incluíram:",
    options: [
      "A abolição imediata da escravidão nas colônias portuguesas",
      "A expulsão dos jesuítas, criação de monopólios comerciais e transferência da capital de Salvador para o Rio de Janeiro",
      "A independência imediata do Brasil de Portugal",
      "A implantação do sistema parlamentarista na colônia"
    ],
    correctAnswer: 1,
    explanation: "As reformas pombalinas visavam modernizar e centralizar o império português. Incluíram: expulsão dos jesuítas (1759) acusados de criar 'Estado dentro do Estado', criação de companhias monopolistas de comércio, transferência da capital colonial de Salvador para Rio de Janeiro (1763) por razões estratégicas e econômicas (proximidade com as minas), e estímulo a novas culturas agrícolas."
  }
];

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false));

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    const newAnswered = [...answeredQuestions];
    newAnswered[currentQuestion] = true;
    setAnsweredQuestions(newAnswered);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(new Array(questions.length).fill(false));
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Perfeito, Gabrielly! Você é uma expert em História do Brasil! 🎉";
    if (percentage >= 80) return "Excelente, Gabrielly! Você conhece muito bem a história brasileira! 👏";
    if (percentage >= 60) return "Muito bom, Gabrielly! Continue estudando para melhorar ainda mais! 📚";
    if (percentage >= 40) return "Bom trabalho! Revise alguns conceitos para melhorar! 💪";
    return "Continue estudando, Gabrielly! A história do Brasil é fascinante! 📖";
  };

  if (showResult) {
    return (
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Quiz Concluído!</h2>
            <p className="text-6xl mb-6">
              {score}/{questions.length}
            </p>
            <p className="text-xl text-gray-700 mb-8">
              {getScoreMessage()}
            </p>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(score / questions.length) * 100}%` }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-gradient-to-r from-purple-500 to-pink-600 h-4 rounded-full"
              />
            </div>
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center space-x-2 mx-auto"
            >
              <RotateCcw className="w-5 h-5" />
              <span>Tentar Novamente</span>
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">Quiz de História</h2>
          <p className="text-xl text-gray-600">
            Gabrielly, teste seus conhecimentos sobre a história do Brasil
          </p>
          <p className="text-sm text-purple-600 mt-2">
            Nível: ENEM e Concursos
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Pergunta {currentQuestion + 1} de {questions.length}</span>
            <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl text-gray-900 mb-8">
              {question.question}
            </h3>

            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correctAnswer;
                const showAnswer = selectedAnswer !== null;

                let buttonClass = "w-full p-4 rounded-xl text-left transition-all border-2 ";
                
                if (showAnswer) {
                  if (isCorrect) {
                    buttonClass += "border-purple-500 bg-purple-50 text-purple-900";
                  } else if (isSelected && !isCorrect) {
                    buttonClass += "border-red-500 bg-red-50 text-red-900";
                  } else {
                    buttonClass += "border-gray-200 bg-gray-50 text-gray-500";
                  }
                } else {
                  buttonClass += "border-gray-200 hover:border-purple-500 hover:bg-purple-50 cursor-pointer";
                }

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={buttonClass}
                    whileHover={selectedAnswer === null ? { scale: 1.02 } : {}}
                    whileTap={selectedAnswer === null ? { scale: 0.98 } : {}}
                    disabled={selectedAnswer !== null}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{option}</span>
                      {showAnswer && isCorrect && <CheckCircle className="w-6 h-6 text-purple-600" />}
                      {showAnswer && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-600" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-blue-50 rounded-xl border-2 border-blue-200"
                >
                  <p className="text-blue-900">
                    <strong>Explicação:</strong> {question.explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {selectedAnswer !== null && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleNext}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                {currentQuestion < questions.length - 1 ? "Próxima Pergunta" : "Ver Resultado"}
              </motion.button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
