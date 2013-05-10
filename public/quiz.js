var music = document.getElementsByTagName("audio")[0];
var applause = document.getElementsByTagName("audio")[1];
var ahh = document.getElementsByTagName("audio")[2];

$("#start").on("click", function() {
    $(this).toggle();
    $("#qna").toggle().animate({width: "1050px", height: "350px"}, 1000);
    $("#timer").css("background", "lightblue").animate({width: "1050px"}, 1000).animate({width: "10px"}, 10000, 'linear');
    music.play();

    var questions = [
        { "text": "How many sharps are in the key of C?", "answers": ["1", "0", "3", "4", "355"], "correct": "0" },
        { "text": "What are the Treble Clef line notes?", "answers": ["EGBDF", "EGCBA", "GBDFA", "FACEB", "CAGEC"], "correct": "EGBDF" },
        { "text": "What are the Treble Clef space notes?", "answers": ["ACEG", "CAGE", "FABC", "GCEA", "FACE"], "correct": "FACE" },
        { "text": "What are the Bass Clef space notes?", "answers": ["BCEA", "GCDA", "EADG", "ACEG", "BACE"], "correct": "ACEG" },
        { "text": "What are the Bass Clef line notes?", "answers": ["GDFTA", "FGABE", "ABCDE", "FACBG", "GBDFA"], "correct": "GBDFA" },
        { "text": "How many sharps are in the key of A?", "answers": ["2", "9", "4", "3", "100000"], "correct": "3" },
        { "text": "How many keys are usually on a standard piano keyboard?", "answers": ["88", "6", "1000932", "77", "255"], "correct": "88" },
        { "text": "How many sharps are in the key of A minor?", "answers": ["7", "0", "3", "4", "1"], "correct": "1" },
        { "text": "What is the airspeed velocity of an unladen European swallow in MPH?", "answers": ["88", "6", "3", "24", "355"], "correct": "24" },
        { "text": "How many sharps are in the key of G?", "answers": ["9", "2", "3", "4", "1"], "correct": "1" }
    ];

    var score = 0;

    var show_question = (function() {
        var question = questions[score];

        $("#question").text(question.text);

        $("#answers").empty();
        for (var i in question.answers) {
            var answer = question.answers[i];
            $("#answers").append("<li class='answer'>" + answer + "</li>");
        }

        $(".answer").on("click", check_answer);

        $(".answer").hover(
            function() {
                $(this).stop();
                $(this).css("background", "red").animate({padding: "20px"}, 350);
            },
            function() {
                $(this).stop();
                $(this).css("background", "yellow").animate({padding: "10px"}, 200);
            });

    });

    var check_answer = (function () {
        if ($(this).text().toLowerCase() == questions[score].correct.toLowerCase()) {
            score++;
            if (questions.length > score) {
                timer = max_timer;
                show_question();
                $("#timer").stop();
                $("#timer").css("width", "1050px").delay(500).animate({width: "10px"}, 10000, 'linear');
            } else {
                // http://stackoverflow.com/questions/14834520/html5-audio-stop-function/14836099#14836099
                music.pause();
                music.currentTime = 0;
                applause.play();
                $("#timer").stop();
                $("#question").text("Quiz over.");
                $("#answers").empty();
                $("#qna").animate({height: "50px"}, 1000);
                $("#try_again").text("Restart the Quiz").toggle();
                clearInterval(timer_interval);
            }
        } else {
            wrong_answer();
        }

        show_score();

    });

    var wrong_answer = (function() {
        $("#question").text("You picked the wrong answer or the time ran out. Bummer.");
        $("#answers").empty();
        $("#qna").animate({height: "50px"}, 1000);
        $("#try_again").toggle();
        clearInterval(timer_interval)
        music.pause();
        music.currentTime = 0;
        $("#timer").stop();
        ahh.play();

    });

    var show_score = (function () {
        $("#score").text(score);
    });

    $("#try_again").on("click", function() {
        ahh.pause();
        ahh.currentTime = 0;
        applause.pause();
        applause.currentTime = 0;
        music.play();
        $(this).toggle();
        score = 0;
        $("#score").text(score);
        timer = max_timer;
        timer_interval = setInterval(timer_function, 1000);
        $("#qna").animate({width: "1050px", height: "350px"}, 1000);
        $("#timer").css("width", "1050px").delay(1000).animate({width: "10px"}, 10000, 'linear');
        show_question();
    });

    var max_timer = 10;
    var timer = max_timer;
    var show_timer = (function () {
        $("#timer").text(timer);
    });

    var timer_function = (function() {
        show_timer();
        timer--;
        if(timer < 0) {
            wrong_answer();
        }
    });

    var timer_interval = setInterval(timer_function, 1000);

    show_question();
    show_score();
});