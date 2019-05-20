var correctAnswersCount = 0;
var incorrectAnswersCount = 0;
var unansweredCount = 0;
var timer;

//Timer start at 20 seconds
var timerCount = 20;

var questionsArray = [
    {
        question: "Which fruit is the most popular and most consumed in the world?",
        answers: {
            a: "Banana",
            b: "Orange",
            c: "Tomato",
            d: "Mango"
        },
        correctAnswer: "c"
    },
    {
        question: "Which is the most visited museum in the world?",
        answers: {
            a: "The Vatican Museums in Italy",
            b: "The National Museum of China",
            c: " The Metropolitan Museum of Art in the US",
            d: "The Louvre in France"
        },
        correctAnswer: "d"
    },
    {
        question: "Where do apricots originate from?",
        answers: {
            a: "France",
            b: "Canada",
            c: "China",
            d: "Australia"
        },
        correctAnswer: "c"
    },
    {
        question: "How many planets are in our Solar System?",
        answers: {
            a: "Eleven",
            b: "Nive",
            c: "Thirteen",
            d: "Height"
        },
        correctAnswer: "d"
    },
    {
        question: "Which is the highest building in the world?",
        answers: {
            a: "The Burj Khalifa in Dubai",
            b: "The Shanghai Tower in China",
            c: "The Abraj Al-Bait Clock Tower in Soudi Arabia",
            d: "The One World Trade Center in the US"
        },
        correctAnswer: "a"
    }
];

//answersKeys = ["a", "b", "c", "d"]

$("#start").on("click", function () {


    for (var i = 0; i < questionsArray.length; i++) {
        var answers = questionsArray[i].answers;
        var question = questionsArray[i].question;
        var answersKeys = Object.keys(answers);
        var radioGroup = "rbtnCount" + i; // Grouping the set of 4 answers per question



        var questionContainer = $("<div>");

        questionContainer.append($("<h3>").text(question));
        for (var j = 0; j < answersKeys.length; j++) {
            //Allowing only one selection per question for a given set of answers
            var answerLetter = answersKeys[j];
            var radioBtn = $('<input type="radio" name="' + radioGroup + '" value="' + answerLetter + '" />');

            radioBtn.appendTo(questionContainer);

            var answerText = answers[answerLetter];
            var answerSentence = answerLetter + ". " + answerText;
            questionContainer.append($("<label>").text(answerSentence));
            // console.log(answerSentence);
        }

        $("#page").append(questionContainer);

    }

    $("#time-left").text(timerCount);

    timer = setInterval(() => {

        timerCount--;
        // update timer display
        $("#time-left").text(timerCount);
        if (timerCount === 0) {
            // display results 
            results();
        }

    }, 1000);


});


function results() {
    clearInterval(timer);
    
    for (var i = 0; i < questionsArray.length; i++) {
        var selectedOption = $('input:radio[name=rbtnCount' + i + ']:checked').val();

        if (selectedOption === undefined) {
            unansweredCount++;
            

        } else if (selectedOption === questionsArray[i].correctAnswer) {
            correctAnswersCount++;

        } else {
            incorrectAnswersCount++;
        }

    }

    $("#resultId").show();
    $("#unanswered-question").append(unansweredCount);
    $("#correct-answer").append(correctAnswersCount);
    $("#incorrect-answer").append(incorrectAnswersCount);
    
}


$("#submit").on("click", function () {
    results();

});

var fullReset = document.getElementById('fullReset');

    fullReset.addEventListener('click', function(e) {
      location.reload();
    }, false);