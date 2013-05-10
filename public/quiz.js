var music = document.getElementsByTagName("audio")[0];
var applause = document.getElementsByTagName("audio")[1];
var ahh = document.getElementsByTagName("audio")[2];

$("#start").on("click", function() {
    $(this).toggle();
    $("#qna").toggle().animate({width: "1050px", height: "500px"}, 1000);
    $("#timer").css("background", "white").animate({width: "1050px"}, 1000).animate({width: "10px"}, 10000, 'linear');
    music.play();

    var questions = [
        { "text": "Question 1", "answers": ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"], "correct": "Answer 1" },
        { "text": "Question 2", "answers": ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"], "correct": "Answer B" },
        { "text": "Question 3", "answers": ["Answer F", "Answer G", "Answer H", "Answer I", "Answer J"], "correct": "Answer H" },
        { "text": "Question 4", "answers": ["Answer K", "Answer L", "Answer M", "Answer N", "Answer O"], "correct": "Answer N" },
        { "text": "Question 5", "answers": ["Answer P", "Answer Q", "Answer R", "Answer S", "Answer T"], "correct": "Answer T" }
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