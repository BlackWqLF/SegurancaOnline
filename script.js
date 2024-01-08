const questions = [
    {
        question: "Descarregas um ficheiro com uma oferta de feriado e percebes que tem o nome 'Oferta 2022.docx.exe' Como ages?",
        answers: [
            { text: "É uma nova extensão para um novo tipo de documento moderno que ocupa menos memória e carrega mais rápido. Abro o ficheiro sem preocupação.", correct: false},
            { text: "Acho que é um vírus. Não abro o ficheiro, apago diretamente.", correct: true},
            { text: "Não presto atenção nessas coisas, abro assim que acaba de descarregar para ver a oferta.", correct: false},

        ]
    },
    {
        question: "Recebes-te uma mensagem da tua loja online preferida. O que fazes, clicas no link?",
        answers: [
            { text: "Mereço um voucher, mas não clico antes de ligar para o centro de atendimento e confirmo se é deles.", correct: true},
            { text: "Adoro a loja e confio nela, então clico naturalmente, mal posso esperar para comprar algumas roupas.", correct: false},
            { text: "Além de clicar, também envio a mensagem aos meus amigos para que eles também possam se beneficiar da oferta.", correct: false},

        ]
    },
    {
        question: "Quais dos dados abaixo correspondem ao cartão bancário?",
        answers: [
            { text: "Nome e sobrenome, número do cartão, código CVV e data de validade", correct: true},
            { text: "IBAN", correct: false},
            { text: "Nome de utilizador e palavra-passe da conta do banco online.", correct: false},

        ]
    },
    {
        question: "Em que situação NÃO deves fornecer os dados do cartão?",
        answers: [
            { text: "Pagamento de contas online.", correct: false},
            { text: "Faço um registo num serviço online com base em uma assinatura mensal.", correct: false},
            { text: "Compras em lojas online.", correct: false},
            { text: "Quando preciso receber dinheiro.", correct: true},

        ]
    },
    {
        question: "És chamado por uma pessoa que diz ser do banco e pede para atualizares os teus dados, caso contrário bloqueará o acesso à tua conta.",
        answers: [
            { text: "Estou feliz que eles ligaram-me. Digo tudo rapidamente: todos os dados bancários, não quero muito ter as contas bloqueadas, pretendo fazer compras.", correct: false},
            { text: "Eu atualizava, mas quando eles começam perguntar-me sobre os dados do cartão, eu desligo a chamada. Se fossem do banco, eles não deveriam sabê-los?", correct: true},

        ]
    },
    {
        question: "Recebes-te um documento não solicitado de uma pessoa amiga ou conhecida. Abres o documento?",
        answers: [
            { text: "Não", correct: true},
            { text: "Sim", correct: false},

        ]
    },
    {
        question: "Saíste com amigos quando de repente recebes um e-mail com um alerta de segurança. O que fazes neste caso?",
        answers: [
            { text: "Abro o link enviado no e-mail.", correct: true},
            { text: "Ignoro o e-mail", correct: false},

        ]
    },
    {
        question: "Parece que foste vítima de uma tentativa de hacking! Entrei em pânico? O que fazes nesse caso?",
        answers: [
            { text: "Clico para trocar rapidamente a minha palavra-passe.", correct: false},
            { text: "Marco como spam.", correct: true},

        ]
    },
    {
        question: "Recebes-te um e-mail de um hacker que te pede dinheiro para não publicar as tuas informações pessoais na Internet. Vais enviar-lhe dinheiro?",
        answers: [
            { text: "Pago imediatamente para evitar mais problemas.", correct: false},
            { text: "Ignoro o e-mail e marco como spam.", correct: true},

        ]
    },
    {
        question: "Recebes um e-mail que parece ser do teu colega de trabalho. Abres o documento anexado?",
        answers: [
            { text: "Sim. Normalmente não deixo os meus colegas à espera, então sigo as orientações do e-mail.", correct: false},
            { text: "Não. Verifico primeiro do que se trata.", correct: true},

        ]
    },
    {
        question: "Qual é a diferença entre uma conta IBAN e um número de cartão?",
        answers: [
            { text: "Nenhum, existem dois nomes para a mesma informação.", correct: false},
            { text: "O IBAN representa o código do cartão e o número do cartão identifica a ordem pela qual o cartão foi emitido.", correct: false},
            { text: "O IBAN representa a conta bancária e o número do cartão identifica o instrumento de pagamento.", correct: true},

        ]
    },
    {
        question: "Quais das ações a seguir representam um risco à segurança dos teus dados?",
        answers: [
            { text: "Pagamento online para compras em redes wi-fi públicas, sem palavras-passe.", correct: false},
            { text: "Acesso a conta do banco online.", correct: false},
            { text: "Atualizo o software dos dispositivos.", correct: true},
            { text: "Verifico links recebidos com um antivírus.", correct: false}

        ]
    },
    {
        question: "Notaste que o dinheiro foi levantado da tua conta sem o teu conhecimento, é aconselhável avisar logo o/a?",
        answers: [
            { text: "DNS", correct: false},
            { text: "Familia", correct: false},
            { text: "Policia", correct: false},
            { text: "Banco", correct: true}

        ]
    },
    {
        question: "Conheceste um amigo do noivo em um casamento. Ele liga-te e pergunta se podes lhe dar dinheiro para mandar a alguém que precisa de tratamento médico urgente, mas ele não tem contas bancárias no país, porque trabalha fora do país. O que tu fazes?",
        answers: [
            { text: "Não mando dinheiro a um estranho pela minha conta! Quem sabe se é verdade o que ele diz!", correct: true},
            { text: "Mal o conheci, a família dele não o pode ajudar? Sinto-me estranho, mas vou ajudá-lo, é por uma boa causa.", correct: false},
            { text: "Vou ajudá-lo, claro! Somos todos humanos.", correct: false},
            

        ]
    },
    {
        question: "Crias uma conta num site online. Qual a palavra-passe que vais usar?",
        answers: [
            { text: "Invento uma senha que anoto em algum lugar: contém letras minúsculas, maiúsculas e números, tudo misturado e não vou usá-la em mais nenhum site ou conta.", correct: true},
            { text: "A mesma que uso em todos os sites ou contas. Senão vou esquecê-la!", correct: false},
            { text: "Uma simples de lembrar, mas forte! Por exemplo [O meu nome]1234.", correct: false},
            

        ]
    },


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próximo";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Pontuou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar de novo";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();