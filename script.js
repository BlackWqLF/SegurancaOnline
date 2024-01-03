const questions = [
    {
        question: "Você baixa um documento com uma oferta de feriado e percebe que ele tem o nome 'Oferta 2022.docx.exe' Como você age?",
        answers: [
            { text: "é uma nova extensão para um novo tipo de documento moderno que ocupa menos memória e carrega mais rápido. Abro o documento sem preocupação", correct: false},
            { text: "Acho que é um vírus. Eu não abro, eu apago diretamente", correct: true},
            { text: "Não presto atenção nessas coisas, abro assim que baixa para conferir a oferta.", correct: false},

        ]
    },
    {
        question: "Você recebe um SMS da sua loja online favorita. O que você faz, clica no link?",
        answers: [
            { text: "Mereço um voucher, mas não clico antes de ligar para a central de atendimento e confirmar que é deles.", correct: true},
            { text: "Adoro a loja e confio nelas, então clico naturalmente, mal posso esperar para comprar algumas roupas", correct: false},
            { text: "além de clicar, também envio a mensagem aos meus amigos para que eles também possam se beneficiar da oferta.", correct: false},

        ]
    },
    {
        question: "Quais dos dados abaixo correspondem ao cartão bancário?",
        answers: [
            { text: "nome e sobrenome, número do cartão, código CVC, data de validade", correct: true},
            { text: "iban", correct: false},
            { text: "nome de usuário e senha da conta do internet banking", correct: false},

        ]
    },
    {
        question: "Em que situação você NÃO deve fornecer os dados do cartão?",
        answers: [
            { text: "pagamento de contas on-line", correct: false},
            { text: "registro em um serviço on-line com base em uma assinatura mensal", correct: false},
            { text: "compras em lojas online", correct: false},
            { text: "quando você precisa receber dinheiro", correct: true},

        ]
    },
    {
        question: "Você é chamado por uma pessoa que diz ser do banco e pede para você atualizar seus dados, caso contrário bloqueará o acesso à sua conta.",
        answers: [
            { text: "Estou feliz que eles me ligaram. Conto tudo rapidamente: tanto o CNP quanto a conta bancária, não quero muito ter as contas bloqueadas, pretendo fazer compras", correct: false},
            { text: "Eu iria atualizar, mas quando eles começam a me perguntar sobre os dados do cartão, eu desligo na cara deles. se fossem do banco, ele não deveria conhecê-los?", correct: true},

        ]
    },
    {
        question: "Você recebe um documento não solicitado de uma pessoa amiga ou conhecida. Você abre?",
        answers: [
            { text: "Não", correct: true},
            { text: "Sim", correct: false},

        ]
    },
    {
        question: "Você está saindo com amigos quando de repente recebe um e-mail com um alerta de segurança. O que você está fazendo?",
        answers: [
            { text: "Eu acesso o link no e-mail", correct: true},
            { text: "eu ignoro o e-mail", correct: false},

        ]
    },
    {
        question: "Parece que você foi vítima de uma tentativa de hacking! Você deveria entrar em pânico? O que você está fazendo?",
        answers: [
            { text: "Clico para alterar rapidamente minha senha", correct: false},
            { text: "Eu marco como spam", correct: true},

        ]
    },
    {
        question: "Você recebe o e-mail abaixo de um hacker que lhe pede dinheiro para não publicar suas informações pessoais na Internet. Você está pagando a ele?",
        answers: [
            { text: "Estou pagando agora para evitar mais problemas", correct: false},
            { text: "Eu ignoro e marco como spam", correct: true},

        ]
    },
    {
        question: "Você recebe um e-mail que parece ser do seu colega de trabalho. Abrir o documento anexado?",
        answers: [
            { text: "Sim. Normalmente não deixo meus colegas esperarem, então sigo as instruções do e-mail", correct: false},
            { text: "não. Eu verifico primeiro do que se trata", correct: true},

        ]
    },
    {
        question: "Qual é a diferença entre uma conta IBAN e um número de cartão?",
        answers: [
            { text: "nenhum, existem dois nomes para a mesma informação", correct: false},
            { text: "o iban representa o código do cartão e o número do cartão identifica a ordem pela qual o cartão foi emitido", correct: false},
            { text: "o iban representa a conta bancária e o número do cartão identifica o instrumento de pagamento", correct: true},

        ]
    },
    {
        question: "Quais das ações a seguir representam um risco à segurança dos seus dados?",
        answers: [
            { text: "pagamento online para compras em redes wi-fi públicas, sem senha", correct: false},
            { text: "acessando a conta do internet banking", correct: false},
            { text: "atualização de software em dispositivos", correct: true},
            { text: "verificando links recebidos com um antivírus", correct: false}

        ]
    },
    {
        question: "Você percebe que o dinheiro foi sacado da sua conta sem o seu conhecimento, é aconselhável avisar na primeira vez?",
        answers: [
            { text: "DNS", correct: false},
            { text: "Familia", correct: false},
            { text: "Policia", correct: true},
            { text: "Banco", correct: false}

        ]
    },
    {
        question: "Você conheceu um primo do noivo em um casamento. Ele te liga e pergunta se pode te dar algum dinheiro para mandar para alguém que precisa de tratamento médico urgente, e ele não tem contas no país, muitas vezes vai trabalhar fora do país. O que você está fazendo?",
        answers: [
            { text: "Eu não passo dinheiro de um estranho pela minha conta! Quem sabe qual é a realidade!", correct: true},
            { text: "Mal o conheci, a família dele não pode ajudá-lo? mas quem sabe, talvez eles não saibam. Me sinto estranho, mas estou ajudando ele, é por uma boa causa", correct: false},
            { text: "Eu o ajudo, claro! somos todos humanos e aquele ditado - ajude o homem quando ele precisar, não quando você quiser", correct: false},
            

        ]
    },
    {
        question: "Você cria uma conta de usuário em um site. Qual senha você usa?",
        answers: [
            { text: "Invento uma senha que anoto em algum lugar: tem letras minúsculas, maiúsculas, números, misturadas e não uso mais em lugar nenhum.", correct: true},
            { text: "o mesmo que uso em todos os lugares. Caso contrário, vou esquecer!", correct: false},
            { text: "um simples de lembrar, mas poderoso! [Nome de usuário]1234. Também contém letras e números.", correct: false},
            

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
    nextButton.innerHTML = "Next";
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