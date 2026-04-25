// BANCO DE QUESTÕES — PADRÃO BARRO BRANCO (EsFO PMESP)
// Questões inéditas por matéria e tema
// Formato: { id, materia, tema, dificuldade, enunciado, alternativas:[{letra,texto}], correta, explicacao_correta, explicacoes_erradas:{}, dica_prova, erro_comum }

const BANCO_QUESTOES = [

// ══════════════════════════════════════
// MATEMÁTICA
// ══════════════════════════════════════
{id:"mat_001",materia:"mat",tema:"Porcentagem",dificuldade:"Médio",
enunciado:"Em uma turma de 40 alunos, 30% foram aprovados na primeira fase do concurso. Na segunda fase, 25% dos aprovados foram eliminados. Quantos alunos chegaram à fase final?",
alternativas:[{letra:"A",texto:"6"},{letra:"B",texto:"8"},{letra:"C",texto:"9"},{letra:"D",texto:"10"},{letra:"E",texto:"12"}],
correta:"C",
explicacao_correta:"30% de 40 = 12 aprovados na 1ª fase. Na 2ª fase, 25% de 12 foram eliminados: 25% × 12 = 3 eliminados. Restaram 12 − 3 = 9 alunos.",
dica_prova:"Questões de porcentagem encadeada: resolva etapa por etapa, nunca some os percentuais diretamente.",
erro_comum:"Somar 30% + 25% = 55% e calcular 55% de 40. Isso está errado — os percentuais se aplicam a bases diferentes."},

{id:"mat_002",materia:"mat",tema:"Regra de 3",dificuldade:"Fácil",
enunciado:"Se 5 soldados constroem 3 barracos em 4 dias, quantos dias 10 soldados levarão para construir 9 barracos?",
alternativas:[{letra:"A",texto:"4"},{letra:"B",texto:"5"},{letra:"C",texto:"6"},{letra:"D",texto:"8"},{letra:"E",texto:"12"}],
correta:"C",
explicacao_correta:"Regra de 3 composta. Soldados: 5→10 (inversamente proporcional ao tempo). Barracos: 3→9 (diretamente proporcional). Dias = 4 × (5/10) × (9/3) = 4 × 0,5 × 3 = 6 dias.",
dica_prova:"Na regra de 3 composta, identifique cada grandeza: mais trabalhadores → menos tempo (inversa); mais obra → mais tempo (direta).",
erro_comum:"Tratar todas as grandezas como diretamente proporcionais sem analisar o tipo de proporcionalidade."},

{id:"mat_003",materia:"mat",tema:"Geometria Plana",dificuldade:"Médio",
enunciado:"Um terreno retangular tem perímetro de 60 m. Sabe-se que o comprimento é o dobro da largura. Qual é a área desse terreno?",
alternativas:[{letra:"A",texto:"150 m²"},{letra:"B",texto:"180 m²"},{letra:"C",texto:"200 m²"},{letra:"D",texto:"240 m²"},{letra:"E",texto:"300 m²"}],
correta:"C",
explicacao_correta:"Seja largura = x e comprimento = 2x. Perímetro = 2(x + 2x) = 6x = 60, logo x = 10 m. Comprimento = 20 m. Área = 10 × 20 = 200 m².",
dica_prova:"Sempre monte as equações: P = 2(l + c). Com a relação entre lados, fica um sistema de 2 equações simples.",
erro_comum:"Confundir perímetro com área ou não usar a relação entre os lados antes de calcular."},

{id:"mat_004",materia:"mat",tema:"Frações e Decimais",dificuldade:"Fácil",
enunciado:"Um soldado gasta 1/3 do seu salário com aluguel e 2/5 com alimentação. Que fração do salário ainda lhe resta para outras despesas?",
alternativas:[{letra:"A",texto:"1/15"},{letra:"B",texto:"4/15"},{letra:"C",texto:"7/15"},{letra:"D",texto:"11/15"},{letra:"E",texto:"13/15"}],
correta:"B",
explicacao_correta:"Soma dos gastos: 1/3 + 2/5. MMC(3,5) = 15. Gastos = 5/15 + 6/15 = 11/15. O que resta é o total (15/15) menos os gastos: 15/15 - 11/15 = 4/15.",
dica_prova:"Sempre transforme as frações para o mesmo denominador antes de somar ou subtrair.",
erro_comum:"Somar os numeradores e denominadores diretamente (1+2)/(3+5) = 3/8. Isso é um erro grave de matemática básica."},

{id:"mat_005",materia:"mat",tema:"Frações e Decimais",dificuldade:"Médio",
enunciado:"Em uma maratona de treinamento, um cadete percorreu 0,6 do percurso total. Se ainda faltam 12 km para ele completar a prova, qual é a distância total do percurso?",
alternativas:[{letra:"A",texto:"20 km"},{letra:"B",texto:"24 km"},{letra:"C",texto:"30 km"},{letra:"D",texto:"36 km"},{letra:"E",texto:"40 km"}],
correta:"C",
explicacao_correta:"Se ele percorreu 0,6 (ou 60%), faltam 0,4 (ou 40%) do percurso. Se 0,4x = 12, então x = 12 / 0,4 = 30 km.",
dica_prova:"Converta decimais para frações se achar mais fácil: 0,4 = 4/10 = 2/5.",
erro_comum:"Multiplicar 12 por 0,6 em vez de dividir pela fração restante."},

{id:"mat_009",materia:"mat",tema:"Razão e Proporção",dificuldade:"Fácil",
enunciado:"Em um batalhão, a razão entre o número de oficiais e o número de praças é de 2 para 15. Se há 450 praças, qual é o número total de militares (oficiais + praças) nesse batalhão?",
alternativas:[{letra:"A",texto:"60"},{letra:"B",texto:"450"},{letra:"C",texto:"510"},{letra:"D",texto:"540"},{letra:"E",texto:"600"}],
correta:"C",
explicacao_correta:"Razão O/P = 2/15. Se P = 450, então O/450 = 2/15 → 15O = 900 → O = 60. Total = 60 + 450 = 510.",
dica_prova:"Cuidado com o que a questão pede: o número de uma categoria ou o total do grupo.",
erro_comum:"Responder apenas o número de oficiais (60) em vez do total solicitado."},

{id:"mat_010",materia:"mat",tema:"Média Aritmética",dificuldade:"Médio",
enunciado:"A média das idades de um grupo de 5 sargentos é 32 anos. Se um novo sargento de 38 anos se juntar ao grupo, qual será a nova média de idade?",
alternativas:[{letra:"A",texto:"33 anos"},{letra:"B",texto:"34 anos"},{letra:"C",texto:"35 anos"},{letra:"D",texto:"36 anos"},{letra:"E",texto:"37 anos"}],
correta:"A",
explicacao_correta:"Soma das idades atuais = 5 × 32 = 160. Nova soma = 160 + 38 = 198. Nova média = 198 / 6 = 33 anos.",
dica_prova:"Para questões de média que mudam, sempre calcule a 'Soma Total' antes e depois da alteração.",
erro_comum:"Fazer a média entre 32 e 38 (35), esquecendo que as quantidades de pessoas são diferentes."},

// ══════════════════════════════════════
// PORTUGUÊS
// ══════════════════════════════════════
{id:"port_001",materia:"port",tema:"Crase",dificuldade:"Médio",
enunciado:"Assinale a alternativa em que o emprego da crase está CORRETO:",
alternativas:[{letra:"A",texto:"O soldado se referiu à ela com respeito."},{letra:"B",texto:"O cabo foi à Curitiba para o treinamento."},{letra:"C",texto:"Entregou o relatório à seu superior."},{letra:"D",texto:"O oficial viajou à pé até o quartel."},{letra:"E",texto:"Dirigiu-se à delegacia imediatamente."}],
correta:"E",
explicacao_correta:"'Dirigiu-se à delegacia' está correto: verbo que exige 'a' + substantivo feminino 'delegacia' que admite artigo 'a'.",
dica_prova:"Teste da crase: substitua o feminino por masculino. Se ficar 'ao', coloca crase.",
erro_comum:"Usar crase antes de pronomes ('à ela') ou antes de palavras masculinas ('à pé')."},

{id:"port_004",materia:"port",tema:"Gramática: Verbos",dificuldade:"Médio",
enunciado:"Assinale a alternativa que preenche corretamente a lacuna: 'Se o comandante ________ a ordem, os soldados teriam avançado.'",
alternativas:[{letra:"A",texto:"desse"},{letra:"B",texto:"des"},{letra:"C",texto:"dar"},{letra:"D",texto:"der"},{letra:"E",texto:"daria"}],
correta:"A",
explicacao_correta:"O contexto exige o Pretérito Imperfeito do Subjuntivo ('desse') para manter a correlação verbal com o Futuro do Pretérito ('teriam').",
dica_prova:"Correlação verbal: 'Se eu fizesse (imperfeito subj.), eu teria (futuro pretérito)'.",
erro_comum:"Usar o Futuro do Subjuntivo ('Se ele der') com o Futuro do Pretérito, o que quebra a harmonia temporal."},

{id:"port_005",materia:"port",tema:"Pontuação",dificuldade:"Fácil",
enunciado:"Assinale a alternativa em que a vírgula foi utilizada para separar um vocativo:",
alternativas:[{letra:"A",texto:"São Paulo, 23 de abril de 2024."},{letra:"B",texto:"O soldado, compenetrado, estudava."},{letra:"C",texto:"Atenção, recrutas, o treino começou!"},{letra:"D",texto:"Comprou farda, botas e cinto."},{letra:"E",texto:"Sim, eu aceito o desafio."}],
correta:"C",
explicacao_correta:"'Recrutas' é um vocativo (chamamento) e deve ser isolado por vírgulas.",
dica_prova:"Vocativo é um chamamento. Aposto é uma explicação. Ambos usam vírgulas, mas o vocativo 'chama' alguém.",
erro_comum:"Confundir vocativo com aposto explicativo."},

// ══════════════════════════════════════
// HISTÓRIA
// ══════════════════════════════════════
{id:"hist_001",materia:"hist",tema:"Era Vargas",dificuldade:"Médio",
enunciado:"Sobre o Estado Novo (1937-1945) de Getúlio Vargas, é correto afirmar que foi um período caracterizado por:",
alternativas:[{letra:"A",texto:"Ampla liberdade de imprensa e pluripartidarismo."},{letra:"B",texto:"Descentralização política e autonomia dos estados."},{letra:"C",texto:"Criação da CLT e forte censura através do DIP."},{letra:"D",texto:"Alinhamento imediato e exclusivo com a União Soviética."},{letra:"E",texto:"Fim da intervenção estatal na economia."}],
correta:"C",
explicacao_correta:"O Estado Novo foi uma ditadura varguista marcada pelo populismo (CLT) e pelo controle social/censura (DIP - Departamento de Imprensa e Propaganda).",
dica_prova:"Vargas = CLT + DIP + Nacionalismo Econômico. Lembre-se do caráter autoritário do Estado Novo.",
erro_comum:"Achar que Vargas era democrata durante o Estado Novo devido às leis trabalhistas."},

{id:"hist_002",materia:"hist",tema:"Brasil Colônia",dificuldade:"Fácil",
enunciado:"O sistema de Capitanias Hereditárias, implementado pela Coroa Portuguesa no Brasil, visava principalmente:",
alternativas:[{letra:"A",texto:"Promover a independência imediata da colônia."},{letra:"B",texto:"Terceirizar os custos da colonização para a iniciativa privada."},{letra:"C",texto:"Proteger os povos indígenas contra invasões estrangeiras."},{letra:"D",texto:"Estabelecer o comércio direto com a Ásia através do Atlântico."},{letra:"E",texto:"Acabar com o ciclo do açúcar no Nordeste."}],
correta:"B",
explicacao_correta:"Sem recursos para colonizar o Brasil, Portugal dividiu o território em lotes e entregou a donatários, que deveriam investir recursos próprios na exploração.",
dica_prova:"Capitanias = Falta de recursos da Coroa + Medo de invasões francesas.",
erro_comum:"Achar que o sistema foi um sucesso total (apenas Pernambuco e São Vicente prosperaram de imediato)."},

// ══════════════════════════════════════
// GEOGRAFIA
// ══════════════════════════════════════
{id:"geo_001",materia:"geo",tema:"Vegetação Brasileira",dificuldade:"Médio",
enunciado:"Qual bioma brasileiro é conhecido como a 'savana mais rica do mundo' e sofre intensamente com o avanço da fronteira agrícola?",
alternativas:[{letra:"A",texto:"Amazônia"},{letra:"B",texto:"Caatinga"},{letra:"C",texto:"Cerrado"},{letra:"D",texto:"Pantanal"},{letra:"E",texto:"Pampa"}],
correta:"C",
explicacao_correta:"O Cerrado é a savana brasileira, caracterizada por solos ácidos e árvores de troncos retorcidos, sendo o bioma mais afetado pelo agronegócio (soja/pecuária).",
dica_prova:"Cerrado = Savana = Hotspot de biodiversidade = Agronegócio.",
erro_comum:"Confundir Cerrado com Caatinga (que é semiárido)."},

// ══════════════════════════════════════
// ATUALIDADES
// ══════════════════════════════════════
{id:"atu_001",materia:"atu",tema:"Conflitos Internacionais",dificuldade:"Médio",
enunciado:"A OTAN (Organização do Tratado do Atlântico Norte) tem sido peça central nas discussões geopolíticas recentes devido a:",
alternativas:[{letra:"A",texto:"Sua dissolução após o fim da Guerra Fria."},{letra:"B",texto:"Sua expansão para o Leste Europeu e o conflito na Ucrânia."},{letra:"C",texto:"Sua transformação em um bloco exclusivamente econômico."},{letra:"D",texto:"Sua aliança militar formal com a China e o Irã."},{letra:"E",texto:"Seu foco exclusivo no combate ao narcotráfico na América Latina."}],
correta:"B",
explicacao_correta:"A aproximação da Ucrânia com a OTAN e a expansão da aliança para países ex-soviéticos são pontos centrais de tensão com a Rússia.",
dica_prova:"OTAN = Aliança Militar Ocidental. Fique atento aos novos membros (Finlândia e Suécia).",
erro_comum:"Achar que la OTAN é um órgão da ONU. São instituições diferentes."},

];

// ══════════════════════════════════════
// ADICIONAIS — REFORÇO DE TEMAS
// ══════════════════════════════════════
BANCO_QUESTOES.push(
{id:"mat_011",materia:"mat",tema:"Operações Básicas",dificuldade:"Fácil",
enunciado:"Um batalhão recebeu 1.200 litros de combustível. Se cada viatura consome 45 litros para completar o tanque, quantas viaturas podem ser totalmente abastecidas e quanto sobrará de combustível?",
alternativas:[{letra:"A",texto:"26 viaturas e sobram 30 litros"},{letra:"B",texto:"26 viaturas e sobram 40 litros"},{letra:"C",texto:"27 viaturas e sobram 15 litros"},{letra:"D",texto:"25 viaturas e sobram 75 litros"},{letra:"E",texto:"28 viaturas e não sobra nada"}],
correta:"A",
explicacao_correta:"1200 / 45 = 26,66... Multiplicando 26 × 45 = 1.170. Sobra: 1.200 - 1.170 = 30 litros.",
dica_prova:"Em divisões não exatas, o quociente é a quantidade inteira e o resto é o que sobra.",
erro_comum:"Arredondar para 27 sem verificar se o combustível é suficiente."},

{id:"port_006",materia:"port",tema:"Interpretação de Texto",dificuldade:"Médio",
enunciado:"No trecho 'A resiliência é o alicerce do oficial moderno', a palavra 'alicerce' é usada em sentido:",
alternativas:[{letra:"A",texto:"Denotativo, referindo-se à base de uma construção."},{letra:"B",texto:"Conotativo, indicando que a resiliência é a base moral/psicológica."},{letra:"C",texto:"Irônico, para criticar a falta de preparo."},{letra:"D",texto:"Científico, descrevendo um processo biológico."},{letra:"E",texto:"Geológico, referindo-se a camadas do solo."}],
correta:"B",
explicacao_correta:"'Alicerce' aqui é uma metáfora para base ou fundamento, caracterizando o sentido conotativo (figurado).",
dica_prova:"Denotativo = Dicionário (literal). Conotativo = Coração/Criativo (figurado).",
erro_comum:"Confundir os termos denotativo e conotativo."},

{id:"hist_003",materia:"hist",tema:"Guerras Mundiais",dificuldade:"Médio",
enunciado:"A participação do Brasil na Segunda Guerra Mundial (1939-1945) foi marcada pelo envio da FEB para atuar em qual país?",
alternativas:[{letra:"A",texto:"Alemanha"},{letra:"B",texto:"França"},{letra:"C",texto:"Itália"},{letra:"D",texto:"Japão"},{letra:"E",texto:"Egito"}],
correta:"C",
explicacao_correta:"A Força Expedicionária Brasileira (FEB) lutou na campanha da Itália, com destaque para a vitória em Monte Castello.",
dica_prova:"FEB = Itália = 'A cobra vai fumar'.",
erro_comum:"Achar que o Brasil lutou na França ou diretamente na Alemanha."},

{id:"geo_002",materia:"geo",tema:"Geopolítica e Globalização",dificuldade:"Médio",
enunciado:"O grupo dos BRICS, do qual o Brasil faz parte, é um exemplo de:",
alternativas:[{letra:"A",texto:"Bloco militar de defesa mútua."},{letra:"B",texto:"Aliança de países desenvolvidos do Hemisfério Norte."},{letra:"C",texto:"Agrupamento de economias emergentes."},{letra:"D",texto:"Organização para o fim das fronteiras nacionais."},{letra:"E",texto:"Conselho de segurança exclusivo da ONU."}],
correta:"C",
explicacao_correta:"Os BRICS (Brasil, Rússia, Índia, China e África do Sul) reúnem as principais economias emergentes do mundo.",
dica_prova:"BRICS não é um bloco econômico formal (como o Mercosul), mas um mecanismo de cooperação política e financeira.",
erro_comum:"Confundir BRICS com um bloco econômico de livre comércio."}
);
