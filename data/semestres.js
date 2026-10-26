// Edite este arquivo para ajustar semestres, textos e fotos.
// As fotos ficam em /public/fotos. Troque os .svg de exemplo por prints
// dos seus trabalhos (jpg/png) e atualize o campo "foto".
export const semestres = [
  {
    periodo: "2026.1",
    titulo: "Primeiro semestre de 2026",
    trabalhos: [
      {
        nome: "App Node.js de Nova Andradina",
        data: "Maio",
        foto: "/fotos/nova-andradina.svg",
        texto:
          "CRUD completo em Express/EJS com arquitetura MVC para cadastrar estabelecimentos da cidade. Dados em memória, rotas com query e params.",
        tecnologias: ["Node.js", "Express", "EJS", "CSS"],
      },
      {
        nome: "Escola de futebol: modelagem UML",
        data: "Maio e junho",
        foto: "/fotos/uml-futebol.svg",
        texto:
          "Diagramas ECB para 12 VCPs, casos de uso (também no Astah), dicionário de classes e diagramas de classes com herança entre Atleta, Professor, Funcionário e outros.",
        tecnologias: ["UML", "Astah", "ECB"],
      },
      {
        nome: "Exercícios de POO em TypeScript",
        data: "Maio e junho",
        foto: "/fotos/typescript-poo.svg",
        texto:
          "Sistema de ingressos, contas bancárias com exceções próprias, cartões e folha de pagamento, praticando herança, interfaces e polimorfismo.",
        tecnologias: ["TypeScript", "POO"],
      },
      {
        nome: "Dashboard de frigorífico",
        data: "Junho",
        foto: "/fotos/dashboard-frigorifico.svg",
        texto:
          "Painel industrial com OEE, rendimento de carcaça, conformidade SIF/HACCP, pH, temperatura e Pareto de paradas, feito com Chart.js.",
        tecnologias: ["HTML", "CSS", "Chart.js"],
      },
      {
        nome: "SoloSmart / AgroSmart",
        data: "Junho",
        foto: "/fotos/solosmart.svg",
        texto:
          "Plataforma de apoio à decisão agronômica com três árvores de decisão (cultura, adubação e diagnóstico de solo) rodando no navegador, mais um agrônomo virtual com IA.",
        tecnologias: ["JavaScript", "scikit-learn", "Claude API"],
      },
      {
        nome: "AgroCalc Web (Integrador)",
        data: "Julho",
        foto: "/fotos/agrocalc.svg",
        texto:
          "Projeto integrador com seis módulos: custo de produção, simulador de financiamento (PMT), conversor de bases numéricas, matriz de produtividade e mistura NPK por Cramer.",
        tecnologias: ["HTML", "CSS", "JavaScript"],
      },
    ],
  },
  {
    periodo: "2026.2",
    titulo: "Segundo semestre de 2026",
    trabalhos: [
      {
        nome: "RevisaSIF",
        data: "Agosto",
        foto: "/fotos/revisasif.svg",
        texto:
          "Proposta de sistema que usa OCR para revisar e corrigir planilhas manuais de abate, com captura, extração, regras, detecção de rasuras, fluxo de correção e painel.",
        tecnologias: ["React", "Node.js", "Tesseract", "PostgreSQL"],
      },
      {
        nome: "ValidaQ",
        data: "Em andamento",
        foto: "/fotos/validaq.svg",
        texto:
          "Sistema de validação do controle de qualidade para um frigorífico bovino, desenvolvido para uso real.",
        tecnologias: ["Front-end", "Controle de qualidade"],
      },
    ],
  },
  // Para adicionar um semestre anterior, copie o bloco acima:
  // { periodo: "2025.2", titulo: "...", trabalhos: [ { nome, data, foto, texto, tecnologias } ] },
];
