"use strict";
(function (){
    const QUIZ = [
        { 
            question: 'John Carmack and John Romero developed which of these games?',
            options: [ 'Myst', 'Ultima', 'Doom', 'Diablo' ],
            images: [ 'https://paonow.files.wordpress.com/2019/04/myst.png?resize=300%2C300',
                        'https://paonow.files.wordpress.com/2019/04/ultima.jpg?resize=300%2C300',
                        'https://paonow.files.wordpress.com/2019/04/doom.jpg?resize=300%2C300',
                        'https://paonow.files.wordpress.com/2019/04/diablo.jpg?resize=300%2C300'],
            answer: 2
        },
        { 
            question: 'Who developed Pac-Man?',
            options: [ 'Toru Iwatani w. Namco', 'Shigeru Miyamoto w. Nintendo', 'Shinji Mikami w. Capcom', 'Keiji Inafune w. Capcom' ],
            images: [ 'https://paonow.files.wordpress.com/2019/04/toru-iwatani.jpg?resize=300%2C300', 
                        'https://paonow.files.wordpress.com/2019/04/miyamoto.jpg?resize=300%2C300',
                        'https://paonow.files.wordpress.com/2019/04/keiji-inafune.jpg?resize=300%2C300', 
                        'https://paonow.files.wordpress.com/2019/04/timthumb.jpg?resize=300%2C300'],
            answer: 0
        },
        { 
            question: 'Chess originally came from ______',
            options: [ 'India', 'Mesopotamia', 'Egypt', 'France' ],
            images: [ 'https://paonow.files.wordpress.com/2019/04/india.png?resize=300%2C300', 
                        'https://paonow.files.wordpress.com/2019/04/mesopotamia-map.jpg?resize=300%2C300',
                        'https://paonow.files.wordpress.com/2019/04/egypt-map.gif?resize=300%2C300', 
                        'https://paonow.files.wordpress.com/2019/04/france-map.gif?resize=300%2C300'],
            answer: 0
        },
        { 
            question: 'Will Crowther developed this classic text adventure.',
            options: [ 'Bandersnatch', 'Rockett\'s New School', 'Colossal Cave / Adventure', 'Zork' ],
            images: [ 'https://paonow.files.wordpress.com/2019/04/bandersnatch.jpg?resize=300%2C300', 
            'https://paonow.files.wordpress.com/2019/04/rockett.jpg?resize=300%2C300',
            'https://paonow.files.wordpress.com/2019/04/be1are.png?resize=300%2C300', 
            'https://paonow.files.wordpress.com/2019/04/msdos_zork1.jpg?resize=300%2C300'],
            answer: 2
        },
        { 
            question: 'Gary Gygax and Dave _______ designed Dungeons & Dragons.',
            options: [ 'Mustaine', 'Franco', 'Arneson', 'Morse' ],
            images: [ 'https://paonow.files.wordpress.com/2019/04/toru-iwatani.jpg?resize=300%2C300', 
            'https://paonow.files.wordpress.com/2019/04/miyamoto.jpg?resize=300%2C300',
            'https://paonow.files.wordpress.com/2019/04/keiji-inafune.jpg?resize=300%2C300', 
            'https://paonow.files.wordpress.com/2019/04/timthumb.jpg?resize=300%2C300'],
            answer: 2
        },
        { 
            question: 'In 1997, this post-apocalyptic RPG, developed by Tim Cain w. Interplay, was released.',
            options: [ 'Final Fantasy', 'Ultima', 'Diablo', 'Fallout' ],
            images: [ 'https://paonow.files.wordpress.com/2019/04/toru-iwatani.jpg?resize=300%2C300', 
            'https://paonow.files.wordpress.com/2019/04/miyamoto.jpg?resize=300%2C300',
            'https://paonow.files.wordpress.com/2019/04/keiji-inafune.jpg?resize=300%2C300', 
            'https://paonow.files.wordpress.com/2019/04/timthumb.jpg?resize=300%2C300'],
            answer: 3
        },
        { 
            question: 'Don Rawitsch w. MECC released the classic simulation game called the ______ trail.',
            options: [ 'Mississipi', 'Tallahasee ', 'Oregon', 'Georgia' ],
            images: [ 'https://paonow.files.wordpress.com/2019/04/toru-iwatani.jpg?resize=300%2C300', 
            'https://paonow.files.wordpress.com/2019/04/miyamoto.jpg?resize=300%2C300',
            'https://paonow.files.wordpress.com/2019/04/keiji-inafune.jpg?resize=300%2C300', 
            'https://paonow.files.wordpress.com/2019/04/timthumb.jpg?resize=300%2C300'],
            answer: 2
        },
        { 
            question: 'Hideo Kojima is best known for developing this stealth, action-adventure series.',
            options: [ 'Splinter Cell', 'Hitman', 'Tenchu', 'Metal Gear' ],
            images: [ 'https://paonow.files.wordpress.com/2019/04/toru-iwatani.jpg?resize=300%2C300', 
            'https://paonow.files.wordpress.com/2019/04/miyamoto.jpg?resize=300%2C300',
            'https://paonow.files.wordpress.com/2019/04/keiji-inafune.jpg?resize=300%2C300', 
            'https://paonow.files.wordpress.com/2019/04/timthumb.jpg?resize=300%2C300'],
            answer: 3
        },
    ];
    
    let quizIndex = 0; 
    
    function renderQuestion(){
        //get question from QUIZ        
        $('.headline').text(QUIZ[quizIndex].question);
        const buttons = $('ul').find('.answer-button');
        console.log(buttons.length);
        for(let i = 0; i<buttons.length; i++){
            $(buttons[i]).text(`${QUIZ[quizIndex].options[i]}`);
            $(buttons[i]).css('background', `url(${QUIZ[quizIndex].images[i]}`);
            // console.log('renderQuestion ran!');
        }
    }
    
    function checkPlayerAnswer(playerAns){
        renderBetweenQuestionScreen(QUIZ[quizIndex].options[QUIZ[quizIndex].answer] === playerAns, QUIZ[quizIndex].options[QUIZ[quizIndex].answer]);
    }
    
    function renderBetweenQuestionScreen(isPlayerCorrect, correctAnswer){
        $('form').toggleClass('hidden');
        $('.between-questions').toggleClass('hidden');
        $('.between-button').html('NEXT');
        $('.headline').toggleClass('hidden');
        
        if(isPlayerCorrect){
            // render the screen for correct answer
            $('.between-headline').html(`RIGHT! The answer is ${correctAnswer}!`);
            updateScore();
            if(quizIndex<QUIZ.length-1){ 
                quizIndex++;            
            } else {
                renderEndScreen();
            }
        } else {
            //render the screen for wrong answer
            $('.between-headline').html(`WRONG! the answer is ${correctAnswer}!`);
            if(quizIndex<QUIZ.length-1){ 
                quizIndex++;            
            }
        }
        // console.log('renderQuesiton() ran!');
    }
    
    function renderEndScreen(){
        $('.end-screen').toggleClass('hidden');
    }
    
    function renderStartScreen(){
    
    }
    
    function handleNextButtonClick(){
        $('.between-questions').on('click', '.between-button', event => {
            $('form').toggleClass('hidden');
            $('.between-questions').toggleClass('hidden');
            $('.headline').toggleClass('hidden');
            updateCurrentQuestion();
            renderQuestion();
        });
    }
    
    function handleOptionClick(){
        //get player input.
        // check which button they clicked.
        $('.answer-ul').on('click', '.answer-button', event => {
            checkPlayerAnswer($(event.currentTarget).html());
        });
    }
    
    function updateScore(){
            $('.current-score').html(`SCORE: ${quizIndex + 1}/${QUIZ.length}`);
    }
    
    function updateCurrentQuestion(){
        $('.current-q').html(`QUESTION: ${quizIndex + 1}/${QUIZ.length}`);      
        console.log('incrementQuestion ran'); 
    }
    
    $(renderQuestion());
    $(handleOptionClick());
    $(handleNextButtonClick());
})();