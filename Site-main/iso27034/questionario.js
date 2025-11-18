// iso27034/questionario.js
const secoes = [
  { titulo: "Introdução", 
    descricao: `
A ISO/IEC 27034 é uma norma internacional que fornece um guia para integrar a segurança no ciclo de vida do desenvolvimento e operação de aplicações. 
Ela estabelece conceitos, princípios e um processo para incorporar a segurança em aplicativos desenvolvidos internamente, 
adquiridos de terceiros ou desenvolvidos sob terceirização. A norma ajuda as organizações a gerenciar os riscos de segurança de aplicações, estabelecer requisitos de segurança, 
selecionar controles e garantir a conformidade
`,
    obrigatorio: true, 
    camposExtras: [], 
    sub: [
      {titulo: "Estrutura da Norma",descricao: `
A ISO/IEC 27034 está dividida em várias partes, cada uma delas
abordando aspectos específicos de segurança de aplicações:

• Parte 1 – Visão geral e conceitos fundamentais  
• Parte 2 – Framework Normativo Organizacional (ONF) 
• Parte 3 – Processo de gerenciamento de segurança de aplicações 
• Parte 4 – Em construção:
• Parte 5 – Protocolos e estrutura de dados para ASCs
• Parte 6 – Estudos de Caso
• Parte 7 – Framework e estrutura de dados para ASCs

`,
        obrigatorio: true
      },
      {titulo: "Conceitos pricipais",descricao: `
Application Security Controls (ASCs): Controles para prevenir vulnerabilidades de segurança dentro de uma aplicação, como vincular variáveis em instruções SQL para prevenir injeção SQL Security Compass.
Organization Normative Framework (ONF): Coleção de documentos, políticas e recursos de segurança de aplicações que reflete a estratégia de segurança da organização de maneira estruturada CourseMonster. 
Funciona como um blueprint de segurança personalizável.
Níveis de Confiança: A norma introduz níveis de confiança, onde cada controle de segurança pode se enquadrar em um ou mais níveis, considerando que nem toda aplicação tem a mesma necessidade de controles de segurança Security Compass.

`,
        obrigatorio: true
      },
      {titulo: "Aplicabilidade",descricao: `
A norma é aplicável a aplicações desenvolvidas internamente, aplicações adquiridas de terceiros e situações onde o desenvolvimento ou operação da aplicação é terceirizado ISO.
O padrão introduz o modelo de Ciclo de Vida de Segurança de Aplicações, que ajuda organizações a abordar proativamente riscos de segurança em cada estágio PECB, desde o desenvolvimento até a implantação e manutenção.
`,
        obrigatorio: true
      },
      {titulo: "Benefícios",descricao: `
A ISO/IEC 27034 permite que organizações centralizem práticas de segurança, personalizem medidas conforme necessidades específicas e regulamentações, além de demonstrar conformidade com padrões internacionais, aumentando a credibilidade junto a clientes e partes interessadas. 
`,
        obrigatorio: true
      },
    ]
  },
  {titulo:"Parte 1: Visão geral e conceitos fundamentais",
    descricao:`
As organizações devem proteger suas informações e infraestruturas tecnológicas para se manterem em atividade.
Tradicionalmente, isso tem sido abordado no nível de TI, protegendo o perímetro e componentes da infraestrutura tecnológica, como computadores e redes, o que geralmente é insuficiente.

Além disso, as organizações estão cada vez mais se protegendo no nível de governança, operando sistemas de gestão de segurança da informação (SGSI) formalizados, testados e verificados. Uma abordagem sistemática contribui para um sistema de gestão de segurança da informação eficaz, conforme descrito na ISO/IEC 27001.
No entanto, as organizações enfrentam uma necessidade crescente de proteger suas informações no nível da aplicação.

As aplicações devem ser protegidas contra vulnerabilidades que podem ser inerentes à própria aplicação (por exemplo, defeitos de software), surgir durante o ciclo de vida da aplicação (por exemplo, por meio de alterações na aplicação) ou decorrem do uso da aplicação em um contexto para o qual ela não foi projetada.

Uma abordagem sistemática para aumentar a segurança das aplicações fornece evidências de que as informações usadas ou armazenadas pelas aplicações de uma organização estão adequadamente protegidas.
Os aplicativos podem ser adquiridos por meio de desenvolvimento interno, terceirização ou compra de um produto comercial.

Os aplicativos também podem ser adquiridos por meio de uma combinação dessas abordagens, o que pode introduzir novas
implicações de segurança que devem ser consideradas e gerenciadas.

Exemplos de aplicativos são sistemas de recursos humanos, sistemas financeiros, sistemas de processamento de texto, sistemas de gerenciamento de clientes, firewalls, sistemas antivírus e sistemas de detecção de intrusão.

Ao longo de seu ciclo de vida, um aplicativo seguro exibe características essenciais de qualidade de software, como
execução previsível e conformidade, além de atender aos requisitos de segurança sob a perspectiva de desenvolvimento,
gerenciamento, infraestrutura tecnológica e auditoria. Processos e
práticas de segurança aprimorada — e as pessoas qualificadas para executá-los — são necessários para construir aplicativos confiáveis ​​que não
aumentem a exposição ao risco além de um nível aceitável ou tolerável de risco residual e que suportem um SGSI eficaz.

Além disso, um aplicativo seguro leva em consideração os requisitos de segurança decorrentes do tipo de dados,
o ambiente alvo (contextos de negócios, regulatórios e tecnológicos), os atores e as
especificações do aplicativo. Deve ser possível obter evidências que demonstrem que um nível aceitável (ou tolerável) de risco residual foi atingido e está sendo mantido.
    
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    {titulo:"1. Escopo", 
      descricao: `
      A norma ISO/IEC 27034 fornece orientações para auxiliar as organizações na integração da segurança aos processos utilizados para o gerenciamento de seus aplicativos.

Esta parte da ISO/IEC 27034 apresenta uma visão geral da segurança de aplicativos. Ela introduz definições, conceitos,
princípios e processos envolvidos na segurança de aplicativos.

A ISO/IEC 27034 é aplicável a aplicativos desenvolvidos internamente, aplicativos adquiridos de terceiros e
quando o desenvolvimento ou a operação do aplicativo é terceirizado.

INTRODUÇÃO

As organizações devem proteger suas informações e infraestruturas tecnológicas para se manterem em atividade. Tradicionalmente, isso tem sido abordado no nível de TI, protegendo o perímetro e componentes da infraestrutura tecnológica, como computadores e redes, o que geralmente é insuficiente.

Além disso, as organizações estão cada vez mais se protegendo no nível de governança, operando sistemas de gestão de segurança da informação (SGSI) formalizados, testados e verificados. Uma abordagem sistemática contribui para um sistema de gestão de segurança da informação eficaz, conforme descrito na ISO/IEC 27001. No entanto, as organizações enfrentam uma necessidade crescente de proteger suas informações no nível da aplicação.

As aplicações devem ser protegidas contra vulnerabilidades que podem ser inerentes à própria aplicação (por exemplo, defeitos de software), surgir durante o ciclo de vida da aplicação (por exemplo, por meio de alterações na aplicação) ou decorrem do uso da aplicação em um contexto para o qual ela não foi projetada.

Uma abordagem sistemática para aumentar a segurança das aplicações fornece evidências de que as informações usadas ou armazenadas pelas aplicações de uma organização estão adequadamente protegidas. Os aplicativos podem ser adquiridos por meio de desenvolvimento interno, terceirização ou compra de um produto comercial.

Os aplicativos também podem ser adquiridos por meio de uma combinação dessas abordagens, o que pode introduzir novas implicações de segurança que devem ser consideradas e gerenciadas.

Exemplos de aplicações incluem sistemas de recursos humanos, sistemas financeiros, sistemas de processamento de texto, sistemas de gestão de clientes, firewalls, sistemas antivírus e sistemas de detecção de intrusão.

Ao longo de seu ciclo de vida, uma aplicação segura exibe características essenciais de qualidade de software, como execução previsível e conformidade, além de atender aos requisitos de segurança sob as perspectivas de desenvolvimento, gestão, infraestrutura tecnológica e auditoria. Processos e práticas de segurança aprimoradas — e as pessoas qualificadas para executá-los — são necessários para construir aplicações confiáveis ​​que não aumentem a exposição ao risco além de um nível aceitável ou tolerável de risco residual e que suportem um SGSI (Sistema de Gestão de Segurança da Informação) eficaz.

Além disso, uma aplicação segura leva em consideração os requisitos de segurança decorrentes do tipo de dados, do ambiente alvo (contextos de negócios, regulatórios e tecnológicos), dos atores e das especificações da aplicação. Deve ser possível obter evidências que demonstrem que um nível aceitável (ou tolerável) de risco residual foi atingido e está sendo mantido.
      `,
      obrigatorio:true,
    },
    {titulo:"1.1 Proposito", 
      descricao:`
      A ISO/IEC 27034 é uma norma que orienta como inserir segurança em todo o ciclo de vida de desenvolvimento de aplicações.

Ela ajuda as organizações a:

definir requisitos de segurança, avaliar riscos e escolher controles adequados;

garantir segurança mesmo com terceirização ou compra de software de terceiros;

gerar evidências de que suas aplicações são seguras;

alinhar o desenvolvimento com outras normas de segurança, como ISO 27001 e ISO 27002.

Ela não ensina a programar com segurança, não define como desenvolver software e não substitui processos de desenvolvimento.
Em vez disso, deve ser integrada aos processos já existentes da organização, que precisam ser mapeados para atender à norma.
      `, obrigatorio: true
    },
    {titulo:"1.2 Publico alvo", 
      descricao:`
Público-alvo geral
A norma é útil para diversos papéis dentro de uma organização, incluindo:
    • gestores,
    • equipes de provisão e operação,
    • profissionais de aquisição,
    • fornecedores,
    • auditores.

Gestores
São responsáveis por toda a gestão da aplicação ao longo do ciclo de vida.
Eles precisam:
    • equilibrar custos de segurança com riscos e valor para a organização,
    • analisar relatórios de auditoria,
    • garantir conformidade legal e normativa,
    • supervisionar a implementação de segurança,
    • autorizar o nível de confiança da aplicação,
    • definir controles de segurança e testes necessários,
    • reduzir custos de verificação,
    • documentar políticas e procedimentos,
    • treinar os envolvidos,
    • manter atualizações sobre segurança dos sistemas.

Equipes de provisão e operação
Incluem arquitetos, analistas, programadores, testers, administradores de sistemas, banco de dados e redes.
Eles precisam:
    • saber quais controles aplicar em cada fase do ciclo de vida,
    • implementar esses controles no software,
    • minimizar impacto nos processos de desenvolvimento e testes,
    • garantir que controles atendam às medições relacionadas,
    • usar ferramentas e boas práticas,
    • facilitar revisões técnicas,
    • apoiar processos de aquisição,
    • cuidar do descarte adequado de itens remanescentes.

Adquirentes
Pessoas que compram produtos ou serviços.
Precisam:
    • preparar solicitações com requisitos de segurança,
    • escolher fornecedores que atendam a esses requisitos,
    • verificar evidências de controles adotados,
    • avaliar produtos com base nessas evidências.

Fornecedores
Aqueles que entregam produtos ou serviços.
Precisam:
    • cumprir requisitos de segurança das propostas,
    • escolher controles adequados considerando custos,
    • comprovar que implementaram corretamente esses controles.

Auditores
Profissionais que verificam segurança.
Precisam:
      • entender o escopo e procedimentos das medições de verificação,
      • garantir repetibilidade dos resultados,
      • definir quais medições comprovam o nível de confiança exigido,
      • usar processos auditáveis e baseados em evidências.

      
      `, obrigatorio: true,
    },
    {titulo:"2. Referências normativas", 
      descricao: `
      Os seguintes documentos, no todo ou em parte, são referenciados normativamente neste documento e são indispensáveis ​​para a sua aplicação. Para referências datadas, aplica-se somente a edição citada. Para referências não datadas, aplica-se a edição mais recente do documento referenciado (incluindo quaisquer emendas).
      ISO/IEC 27000:2009, Tecnologia da informação — Técnicas de segurança — Sistemas de gestão da segurança da informação — Visão geral e vocabulário
      ISO/IEC 27001:2005, Tecnologia da informação — Técnicas de segurança — Sistemas de gestão da segurança da informação — Requisitos
      ISO/IEC 27002:2005, Tecnologia da informação — Técnicas de segurança — Código de prática para gestão da segurança da informação
      ISO/IEC 27005:2011, Tecnologia da informação — Técnicas de segurança — Gestão de riscos de segurança da informação
      `,obrigatorio: true,
    },
    {titulo:"3. termos e definições", 
      descricao:`
For the purposes of this document, the terms and definitions given in ISO/IEC 27000, ISO/IEC 27001, 
ISO/IEC 27002, ISO/IEC 27005 and the following apply. 

3.1
Ator
Pessoa ou processo que executa uma atividade durante o ciclo de vida de uma aplicação ou inicia a interação com qualquer processo fornecido por ou impactado por uma aplicação.

3.2
Nível de Confiança Real
Resultado de um processo de auditoria que fornece evidências que comprovam que todos os Controles de Segurança da Aplicação exigidos pelo
Nível de Confiança Alvo da aplicação foram implementados e verificados corretamente e produziram os resultados esperados.

3.3
Aplicação
Solução de TI, incluindo software de aplicação, dados de aplicação e procedimentos, projetada para ajudar os usuários de uma organização a executar tarefas específicas ou lidar com tipos específicos de problemas de TI, automatizando um processo ou função de negócios.

NOTA: Processos de negócios incluem pessoas e tecnologias.

3.4
Modelo de Referência do Ciclo de Vida de Segurança de Aplicações
Modelo de ciclo de vida usado como referência para a introdução de atividades de segurança em processos envolvidos em gerenciamento de aplicações, provisionamento e operação de aplicações, gerenciamento de infraestrutura e auditoria de aplicações.

3.5
Estrutura Normativa de Aplicações (ANF)
Conjunto de elementos normativos relevantes para um projeto de aplicação específico, selecionados da Estrutura Normativa da Organização.

3.6
Proprietário da aplicação
Função organizacional responsável pelo gerenciamento, utilização e proteção da aplicação e seus dados.

NOTA 1: O proprietário da aplicação toma todas as decisões relativas à segurança da aplicação.
NOTA 2: O termo “proprietário” é usado nesta parte da ISO/IEC 27034 como sinônimo de “proprietário da aplicação”. 

3.7
Projeto de aplicação
Esforço com critérios de início e término definidos, realizado para adquirir uma aplicação de acordo com recursos e requisitos especificados.

[FONTE: ISO/IEC 12207:2008, definição 4.29, modificada – especializada para escopo de aplicação.]
NOTA: Para os fins da ISO/IEC 27034, os critérios de início e término são tais que todo o ciclo de vida da aplicação está incluído no projeto de aplicação.

3.8
Controle de Segurança de Aplicativos ASC estrutura de dados contendo uma enumeração e descrição precisas de uma atividade de segurança e sua respectiva
medição de verificação a ser realizada em um ponto específico do ciclo de vida de um aplicativo

3.9
Processo de Gerenciamento de Segurança de Aplicativos
ASMP
processo geral de gerenciamento para atividades de segurança, atores, artefatos e auditoria para cada aplicativo usado por uma
organização

3.10
software de aplicativo
software projetado para ajudar os usuários a executar tarefas específicas ou lidar com tipos específicos de problemas, diferentemente
do software que controla o próprio computador
[FONTE: ISO/IEC/IEEE 24765:2010, definição 3.130-1]
© ISO/IEC 2011 – Todos os direitos reservados

3.11
auditoria
processo sistemático e documentado para obter evidências e avaliá-las objetivamente para determinar a 3.11
Extensão em que os critérios de medição foram atendidos
[FONTE: ISO 9000:2005, definição 3.9.1, modificada – generalizada.]

3.12
ambiente
contexto empresarial, regulatório e tecnológico em que uma aplicação é utilizada, incluindo todos os processos, produtos, informações e atores envolvidos na aplicação

3.13
ciclo de vida
evolução de um sistema, produto, serviço, projeto ou outra entidade criada pelo homem, desde a concepção até a desativação

[FONTE: ISO/IEC 12207:2008, definição 4.16]

3.14
modelo de ciclo de vida
estrutura de processos e atividades relacionados ao ciclo de vida que pode ser organizada em estágios, que também serve como referência comum para comunicação e entendimento

[FONTE: ISO/IEC 12207:2008, definição 4.17]

3.15
manutenção
qualquer alteração realizada em uma aplicação após sua entrega
EXEMPLOS: Correção de erros, funcionalidades adicionadas, desempenho aprimorado, garantia da funcionalidade da aplicação.

3.16
Estrutura Normativa da Organização (ONF)
estrutura interna de toda a organização contendo um conjunto de processos e elementos normativos de segurança de aplicações

3.17
Comitê da ONF
função organizacional responsável por manter e aprovar componentes relacionados à segurança de aplicações dentro da
ONF

3.18
ambiente operacional
contexto externo de um programa existente ou que se espera que exista durante sua execução

[FONTE: ISO/IEC 2382-7:2000, definição 07.11.07]

3.19
produto
resultado de um processo

[FONTE: ISO 9000:2005, definição 3.4.2]

3.20
aplicação segura
aplicação para a qual o Nível de Confiança Atual é igual ao Nível de Confiança Alvo, conforme definido pela organização que utiliza a aplicação

3.21
Nível de Confiança Alvo
nome ou rótulo de um conjunto de Controles de Segurança de Aplicativos considerados necessários pelo proprietário do aplicativo para reduzir
o risco associado a um aplicativo específico a um nível aceitável (ou tolerável), após uma análise de risco de segurança do aplicativo.

3.22
usuário
pessoa que usa ou opera algo

[FONTE: Concise Oxford English Dictionary]

NOTA: Para os fins da ISO/IEC 27034, o termo “usuário” inclui não apenas o usuário final, mas também funções de manutenção e operação, como administrador de sistema e administrador de banco de dados.

3.23
validação
confirmação, por meio do fornecimento de evidências objetivas, de que os requisitos para um uso ou aplicação específica pretendida foram atendidos
NOTA 1: O termo “validado” é usado para designar o status correspondente.
NOTA 2: As condições de uso para validação podem ser reais ou simuladas.

[FONTE: ISO 9000:2005, definição 3.8.5]
NOTA 3: Em termos leigos, “validação” significa “A aplicação correta está sendo construída?”
3.24
Verificação
Confirmação, por meio do fornecimento de evidências objetivas, de que os requisitos especificados foram atendidos.
NOTA 1: O termo “verificado” é usado para designar o status correspondente.
NOTA 2: A confirmação pode incluir atividades como a realização de cálculos alternativos, a comparação de uma nova especificação de projeto com uma especificação de projeto similar comprovada, a realização de testes e demonstrações e a revisão de documentos antes da emissão.

[FONTE: ISO 9000:2005, definição 3.8.4]

NOTA 3: Em termos leigos, “verificação” significa “O aplicativo está sendo construído corretamente?”
      
      `, obrigatorio: true,
    },
    {titulo:"4. Termos Abreviados", 
      descricao:`
ANF: Application Normative Framework  (Estrutura Normativa de Aplicação)

ASC: Application Security Control  (Controle de Segurança de Aplicação)

ASMP: Application Security Management Process (Processo de Gerenciamento de Segurança de Aplicação) 

COTS: Commercial-Off-The-Shelf (Produtos Comerciais Prontos para Uso)

ICT: Information and Communication Technology  (Tecnologia da Informação e Comunicação)

ISMS: Information Security Management System  (Sistema de Gerenciamento de Segurança da Informação)

ONF: Organization Normative Framework  (Estrutura Normativa Organizacional)

XML: eXtended Markup Language (Linguagem de Marcação Estendida)
      `,
    obrigatorio: true,
    },
    {titulo:"5. Estrutura da norma ISO/IEC 27034", 
      descricao:`
      A norma ISO/IEC 27034 é composta por seis documentos ou partes. Esta parte da ISO/IEC 27034 apresenta uma visão geral e os conceitos necessários. 
Ela é autossuficiente e suficiente para avaliar a necessidade de implementação da ISO/IEC 27034 em uma organização, bem como para fins de apresentação e treinamento. 
Esta parte da ISO/IEC 27034, por si só, não é suficiente para a implementação da ISO/IEC 27034.

As normas ISO/IEC 27034-2, -3 e -4 devem ser adquiridas por organizações que desejam implementar a ISO/IEC 27034. 
Elas contêm discussões aprofundadas, enumerações, estruturas e descrições para todos os conceitos apresentados nesta parte da ISO/IEC 27034.

A ISO/IEC 27034-5 será especialmente útil para organizações interessadas em adquirir ou distribuir controles,
por fornecer uma estrutura de dados padrão e um protocolo padrão para a distribuição de controles. Por exemplo, uma
grande organização pode estar interessada na distribuição e atualização automatizadas de controles para todas as suas subunidades. 

A norma ISO/IEC 27034-6 fornece exemplos de controles para requisitos específicos de segurança de aplicações e será útil para organizações que desejam implementar a ISO/IEC 27034 ou para organizações que desejam desenvolver controles específicos.
O conteúdo das seis partes é o seguinte:

PARTE 1 – Visão geral e conceitos (VOCÊ ESTÁ AQUI)
A Parte 1 apresenta uma visão geral da segurança de aplicações. Ela introduz definições, conceitos, princípios
e processos envolvidos na segurança de aplicações.

PARTE 2 – Estrutura normativa da organização
A Parte 2 apresenta uma discussão aprofundada da Estrutura Normativa da Organização, seus componentes
e os processos de nível organizacional para gerenciá-la. Esta parte explica as relações entre
esses processos, as atividades associadas a eles e os meios pelos quais eles apoiam o
Processo de Gerenciamento de Segurança de Aplicações. Esta parte discutirá como uma organização deve
implementar a ISO/IEC 27034 e integrá-la aos seus processos existentes.

PARTE 3 – Processo de gerenciamento de segurança de aplicações
A Parte 3 apresenta uma discussão aprofundada dos processos envolvidos em um projeto de aplicação:
determinação dos requisitos e ambiente da aplicação, avaliação dos riscos de segurança da aplicação,
criação e manutenção da Estrutura Normativa da Aplicação, implementação e operação da
aplicação e validação de sua segurança ao longo de seu ciclo de vida. Explica as relações entre esses processos, suas atividades e interdependências, e como eles introduzem a segurança em um projeto de aplicação.

PARTE 4 – Validação de segurança da aplicação
A Parte 4 apresenta uma discussão aprofundada do processo de validação e certificação de segurança da aplicação, que mede o Nível de Confiança Atual da aplicação e o compara com o Nível de Confiança Alvo previamente selecionado pela organização.

PARTE 5 – Protocolos e estrutura de dados de controle de segurança da aplicação
A Parte 5 apresenta os protocolos e o esquema XML para o Controle de Segurança da Aplicação (ASC) baseado na série ISO/IEC TS 15000: Electronic business eXtensible Markup Language (ebXML). Ele será usado para ajudar as organizações a validar a estrutura de dados de seus ASCs e outros componentes da ISO/IEC 27034, e para ajudar a automatizar a distribuição, atualização e uso dos ASCs.

PARTE 6 – Orientações de segurança para aplicações específicas
A Parte 6, se necessário, poderá fornecer exemplos de ASCs adaptados para requisitos de segurança de aplicações específicas.
      `,
      obrigatorio: true,
    }
    ],
  },
  {titulo:"Parte 2: Estrutura normativa da organização",
    descricao:`
    SOB CONTRUÇÃO
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    {titulo:"1. Escopo", 
      descricao: `
      SOB CONTRUÇÃO
      `,
      obrigatorio:true,
    },
    {titulo:"1.1 Proposito", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true
    },
    {titulo:"1.2 Publico alvo", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,

    },
    {titulo:"2. Referências normativas", descricao: `
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"3. termos e definições", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,
    },
    {titulo:"4. Termos Abreviados", descricao:`
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"5. Estrutura da norma ISO/IEC 27034", descricao:`
      SOB CONTRUÇÃO      
      `,obrigatorio: true,
    }
    ],
  },
  {titulo:"Parte 3: Processo de gerenciamento de segurança de aplicações",
    descricao:`
    SOB CONTRUÇÃO
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    {titulo:"1. Escopo", 
      descricao: `
      SOB CONTRUÇÃO
      `,
      obrigatorio:true,
    },
    {titulo:"1.1 Proposito", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true
    },
    {titulo:"1.2 Publico alvo", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,

    },
    {titulo:"2. Referências normativas", descricao: `
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"3. termos e definições", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,
    },
    {titulo:"4. Termos Abreviados", descricao:`
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"5. Estrutura da norma ISO/IEC 27034", descricao:`
      SOB CONTRUÇÃO      
      `,obrigatorio: true,
    }
    ],
  },
  {titulo:"Parte 4: Validação e verificação (Sob desenvolvimento)",
    descricao:`
    A Parte 4 da ISO/IEC 27034 tem uma história peculiar:
    Ela foi inicialmente cancelada, depois ressuscitada. Ela atingiu o status de Draft International Standard antes de ser retirada novamente no final de 2020 devido a resistência do CASCO - Comitê da ISO sobre Avaliação de Conformidade ISO.
    Desde 2021, a equipe recomeçou como um Preliminary Work Item, desta vez em colaboração com o CASCO ISO.
    Conteúdo da Parte 4:
    A Parte 4 trata de "Validation and verification" (Validação e verificação) e fornece uma descrição detalhada de um processo de segurança de aplicações para desenvolver, validar, implementar, verificar e melhorar continuamente esquemas de verificação usados para auditar e verificar CourseMonster (https://www.coursemonster.com/) a segurança das aplicações.
    Esta parte discute o processo de validação e certificação, que determina o nível de confiança que cada aplicação possui em relação aos seus requisitos de segurança da informação previamente estabelecidos ISO.
    Status Atual
    Portanto, a Parte 4 está em desenvolvimento e ainda não foi publicada como padrão final. Por isso, na lista das partes publicadas da ISO/IEC 27034, você não vê a Parte 4 entre as demais - ela ainda está em processo de aprovação e padronização, trabalhando em colaboração com o comitê de avaliação de conformidade da ISO.
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    /*{titulo:"1. Escopo", 
      descricao: `
      SOB CONTRUÇÃO
      `,
      obrigatorio:true,
    },
    {titulo:"1.1 Proposito", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true
    },
    {titulo:"1.2 Publico alvo", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,

    },
    {titulo:"2. Referências normativas", descricao: `
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"3. termos e definições", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,
    },
    {titulo:"4. Termos Abreviados", descricao:`
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"5. Estrutura da norma ISO/IEC 27034", descricao:`
      SOB CONTRUÇÃO      
      `,obrigatorio: true,
    }*/
    ],
  },
  {titulo:"Parte 5: Protocolos e estrutura de dados de controle de segurança da aplicação",
    descricao:`
    SOB CONTRUÇÃO
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    {titulo:"1. Escopo", 
      descricao: `
      SOB CONTRUÇÃO
      `,
      obrigatorio:true,
    },
    {titulo:"1.1 Proposito", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true
    },
    {titulo:"1.2 Publico alvo", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,

    },
    {titulo:"2. Referências normativas", descricao: `
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"3. termos e definições", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,
    },
    {titulo:"4. Termos Abreviados", descricao:`
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"5. Estrutura da norma ISO/IEC 27034", descricao:`
      SOB CONTRUÇÃO      
      `,obrigatorio: true,
    }
    ],
  },
  {titulo:"Parte 6: Orientações de segurança para aplicações específicas",
    descricao:`
    SOB CONTRUÇÃO
    `,
    obrigatorio: true,
    camposExtras: [],
    sub:[
    {titulo:"1. Escopo", 
      descricao: `
      SOB CONTRUÇÃO
      `,
      obrigatorio:true,
    },
    {titulo:"1.1 Proposito", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true
    },
    {titulo:"1.2 Publico alvo", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,

    },
    {titulo:"2. Referências normativas", descricao: `
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"3. termos e definições", descricao:`
      SOB CONTRUÇÃO
      `, obrigatorio: true,
    },
    {titulo:"4. Termos Abreviados", descricao:`
      SOB CONTRUÇÃO
      `,obrigatorio: true,
    },
    {titulo:"5. Estrutura da norma ISO/IEC 27034", descricao:`
      SOB CONTRUÇÃO      
      `,obrigatorio: true,
    }
    ],
  },
  
  
  
 
 
  // ... resto da estrutura permanece igual
];


const STORAGE_KEY = "iso27034_questionario_v1";

// --- rest of the file: copy the same implementation used in iso27001/questionario.js ---
// DOM refs
const indiceEl = document.getElementById("indiceNorma");
const tituloEl = document.getElementById("tituloSecao");
const conteudoEl = document.getElementById("conteudoSecao");
const secaoContainer = document.getElementById("secaoContainer"); // optional for animation
const btnSalvar = document.getElementById("btnSalvar");
const btnNext = document.getElementById("btnProximo");
const btnPrev = document.getElementById("btnAnterior");

if (!indiceEl || !tituloEl || !conteudoEl) {
  console.error("IDs esperados não encontrados: indiceNorma, tituloSecao, conteudoSecao");
}

// state
let _indexMap = [];           // maps list index -> {i, sub}
let current = null;           // {i, sub}
let savedState = loadAllSaved();
let autoSaveInterval = null;

// ---------- build index ----------
function buildIndex() {
  indiceEl.innerHTML = "";
  _indexMap = [];
  secoes.forEach((s, i) => {
    const li = document.createElement("li");
    li.className = "indice-item";
    li.textContent = s.titulo;
    li.dataset.i = i;
    li.dataset.sub = -1;
    li.addEventListener("click", onIndexClick);
    indiceEl.appendChild(li);
    _indexMap.push({ i, sub: null });

    if (Array.isArray(s.sub) && s.sub.length) {
      s.sub.forEach((subObj, si) => {
        const liSub = document.createElement("li");
        liSub.className = "indice-item subnivel";
        liSub.textContent = subObj.titulo;
        liSub.dataset.i = i;
        liSub.dataset.sub = si;
        liSub.addEventListener("click", onIndexClick);
        indiceEl.appendChild(liSub);
        _indexMap.push({ i, sub: si });
      });
    }
  });
}

// ---------- index click ----------
function onIndexClick(ev) {
  const i = Number(this.dataset.i);
  const sub = this.dataset.sub === "-1" ? null : Number(this.dataset.sub);
  selectSection(i, sub, this);
}

// ---------- select section ----------
function selectSection(i, sub = null, clickedLi = null) {
  // mark active
  document.querySelectorAll("#indiceNorma .indice-item").forEach(n => n.classList.remove("active"));
  if (clickedLi) clickedLi.classList.add("active");
  else {
    // compute item index and mark
    for (let idx = 0; idx < _indexMap.length; idx++) {
      const m = _indexMap[idx];
      if (m.i === i && m.sub === sub) {
        const nodes = document.querySelectorAll("#indiceNorma .indice-item");
        if (nodes[idx]) nodes[idx].classList.add("active");
        break;
      }
    }
  }

  current = { i, sub };
  renderCurrentSection();
  markCurrentForAutoSave();
}

// ---------- render section ----------
function renderCurrentSection() {
  const { i, sub } = current;
  const sec = secoes[i];
  const titulo = sub !== null ? (sec.sub[sub].titulo || sec.titulo) : sec.titulo;
  const descricao = sub !== null ? (sec.sub[sub].descricao || "") : (sec.descricao || "");

  tituloEl.textContent = titulo;

  // build extras inputs HTML
  let extrasHtml = "";
  if (Array.isArray(sec.camposExtras) && sec.camposExtras.length) {
    extrasHtml += `<div class="extras">`;
    sec.camposExtras.forEach((c, idx) => {
      extrasHtml += `<label>${c}</label><input class="campoExtra" data-idx="${idx}" placeholder="${c}">`;
    });
    extrasHtml += `</div>`;
  }

  // html: dropdown conformidade + obs container (hidden by default)
  conteudoEl.innerHTML = `
    ${ descricao ? `<p class="descricao">${descricao}</p>` : "" }

    <div class="form-row">
      <label>Conformidade</label>
      <select id="conformidadeSelect">
        <option value="SIM">SIM</option>
        <option value="SIM_OBS">SIM com observações</option>
        <option value="NAO">NÃO</option>
      </select>
    </div>

    <div id="obsContainer" style="display:none; margin-top:10px;">
      <label>Observações (exigir se não estiver em conformidade)</label>
      <textarea id="campoTexto" rows="5" placeholder="Descreva aqui..."></textarea>
    </div>

    <div style="margin-top:10px;">
      <label>Anexar arquivo (opcional)</label>
      <input type="file" id="campoArquivo">
    </div>

    ${extrasHtml}

    <div style="margin-top:8px;color:#94a3b8;font-size:13px"><em>Alterações são salvas automaticamente (localStorage).</em></div>
  `;

  // attach events for dropdown behavior
  const select = document.getElementById("conformidadeSelect");
  const obs = document.getElementById("obsContainer");

  select.addEventListener("change", () => {
    if (select.value === "SIM") obs.style.display = "none";
    else obs.style.display = "block";
  });

  // load saved values for this section
  loadSavedForCurrent();

  // apply animation
  if (secaoContainer) {
    secaoContainer.classList.remove("fade");
    void secaoContainer.offsetWidth;
    secaoContainer.classList.add("fade");
  }
}

// ---------- persistence (localStorage) ----------
function loadAllSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.warn("Erro parsing storage:", e);
    return {};
  }
}

function loadSavedForCurrent() {
  const key = getCurrentKey();
  const data = savedState[key];
  if (!data) return;
    const txt = document.getElementById("campoTexto");
  if (txt && data.texto) txt.value = data.texto;
    const extras = document.querySelectorAll(".campoExtra");
  if (extras && data.extras) extras.forEach((el, idx) => el.value = data.extras[idx] || "");
    const select = document.getElementById("conformidadeSelect");
  if (select && data.conformidade) select.value = data.conformidade;
  // show obs if necessary
    const obs = document.getElementById("obsContainer");
  if (obs && select) obs.style.display = (select.value === "SIM") ? "none" : "block";
  // file cannot be repopulated due to browser security
}

function saveCurrentSection() {
  if (!current) return;
  const key = getCurrentKey();
  const textoEl = document.getElementById("campoTexto");
  const texto = textoEl ? textoEl.value.trim() : "";
  const extrasEls = document.querySelectorAll(".campoExtra");
  const extras = extrasEls ? Array.from(extrasEls).map(e => e.value) : [];
  const select = document.getElementById("conformidadeSelect");
  const conformidade = select ? select.value : "SIM";
  const fileInput = document.getElementById("campoArquivo");
  const arquivoName = (fileInput && fileInput.files && fileInput.files[0]) ? fileInput.files[0].name : null;

  // validation: if required and conformidade != SIM, obs must be present
  const sec = secoes[current.i];
  const isSub = current.sub !== null;
  const obrig = isSub ? (sec.sub[current.sub] && sec.sub[current.sub].obrigatorio) : sec.obrigatorio;
  if (obrig && conformidade !== "SIM" && texto === "") {
    // still allow save as draft but warn the user
    // For stricter validation you could block and show message
    console.warn("Seção obrigatória com conformidade != SIM salva sem observações (é recomendável preencher).");
  }

  savedState[key] = {
    texto,
    extras,
    conformidade,
    arquivo: arquivoName,
    updatedAt: new Date().toISOString()
  };

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedState));
  } catch (e) {
    console.error("Erro ao salvar no localStorage:", e);
  }
}

// helper key
function getCurrentKey() {
  return current.sub !== null ? `${current.i}_${current.sub}` : `${current.i}`;
}

// ---------- autosave ----------
function setupAutoSave() {
  if (autoSaveInterval) clearInterval(autoSaveInterval);
  autoSaveInterval = setInterval(() => {
    if (current) saveCurrentSection();
  }, 5000);
}

// ---------- buttons ----------
function setupButtons() {
  if (btnSalvar) {
    btnSalvar.addEventListener("click", () => {
      if (!current) return alert("Nenhuma seção selecionada.");
      saveCurrentSection();
      alert("Seção salva.");
    });
  }
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      const idx = findCurrentListIndex();
      if (idx >= 0 && idx < _indexMap.length - 1) selectByListIndex(idx + 1);
    });
  }
  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      const idx = findCurrentListIndex();
      if (idx > 0) selectByListIndex(idx - 1);
    });
  }
}

// ---------- helpers for list <-> mapping ----------
function findCurrentListIndex() {
  if (!current) return -1;
  for (let k = 0; k < _indexMap.length; k++) {
    const m = _indexMap[k];
    if (m.i === current.i && m.sub === current.sub) return k;
  }
  return -1;
}

function selectByListIndex(listIdx) {
  const mapping = _indexMap[listIdx];
  if (!mapping) return;
  const nodes = document.querySelectorAll("#indiceNorma .indice-item");
  if (nodes[listIdx]) nodes[listIdx].click();
}

// ---------- init ----------
function init() {
  savedState = loadAllSaved();
  buildIndex();
  // select first item if exists
  if (_indexMap.length) {
    // click first element in the list
    const firstNode = document.querySelectorAll("#indiceNorma .indice-item")[0];
    if (firstNode) firstNode.click();
  }
  setupButtons();
  setupAutoSave();
  console.log("ISO 27001 questionnaire initialized. STORAGE_KEY:", STORAGE_KEY);
}

// expose mark for autosave when needed (internal)
function markCurrentForAutoSave() {
  window._currentSection = current;
}

// build _indexMap after buildIndex runs, but buildIndex populates _indexMap so it's fine
// Also populate _indexMap according to buildIndex implementation:
(function patchIndexMapAfterBuild() {
  const originalBuild = buildIndex;
  buildIndex = function() {
    originalBuild();
    // rebuild _indexMap correctly (already done inside buildIndex), so no-op
  };
})();

document.getElementById("voltar").addEventListener("click", () => {
  window.location.href = "../dashboard.html";
});

// run
init();
