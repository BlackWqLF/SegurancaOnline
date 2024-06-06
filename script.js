const questions = [
    {
        question: "Quando descarregamos um ficheiro com uma oferta de feriado e percebemos que tem o nome de 'Oferta 2022.docx.exe' O que fazes neste caso?",
        answers: [
            { text: "É uma nova extensão para um novo tipo de documento moderno que ocupa menos memória e carrega mais rápido. Abro o ficheiro sem preocupação.", correct: false},
            { text: "Acho que é um vírus. Não abro o ficheiro, apago diretamente.", correct: true},
            { text: "Não presto atenção nessas coisas, abro assim que acaba de descarregar para ver a oferta.", correct: false},

        ]
    },
    {
        question: "Recebes-te uma mensagem de spam da tua loja online preferida. O que fazes, clicas no link?",
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
            { text: "Quando faço um registo num serviço online com base em uma assinatura mensal.", correct: false},
            { text: "Em compras em lojas online.", correct: false},
            { text: "Quando preciso receber dinheiro.", correct: true},

        ]
    },
    {
        question: "És telefonado por uma pessoa que diz ser do banco e pede para atualizares os teus dados, caso contrário irão bloquear o acesso à tua conta.",
        answers: [
            { text: "Estou feliz que eles ligaram. Digo tudo rapidamente: todos os dados bancários, não quero muito ter as contas bloqueadas, pretendo fazer compras.", correct: false},
            { text: "Eu atualizava, mas quando eles começam perguntar-me sobre os dados do cartão, eu desligo a chamada. Se fossem do banco, eles não deveriam sabê-los?", correct: true},

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