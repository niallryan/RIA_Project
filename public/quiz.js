var questions = [
    { "text": "Question 1", "answers": ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"], "correct": "Answer 1" },
    { "text": "Question 2", "answers": ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"], "correct": "Answer B" },
    { "text": "Question 3", "answers": ["Answer F", "Answer G", "Answer H", "Answer I", "Answer J"], "correct": "Answer H" },
    { "text": "Question 4", "answers": ["Answer K", "Answer L", "Answer M", "Answer N", "Answer O"], "correct": "Answer N" },
    { "text": "Question 5", "answers": ["Answer P", "Answer Q", "Answer R", "Answer S", "Answer T"], "correct": "Answer T" }
];

var score = 0;

var check_answer = (function () {
    if ($(this).text().toLowerCase() == questions[score].correct.toLowerCase()) {
        score++;
        if (questions.length > score) {
            show_question();
        } else {
            $("#question").text("Quiz over.");
            $("#answers").empty();
            $("#try_again").toggle();
        }
    } else {
        wrong_answer();
    }

    show_score();

});

var wrong_answer = (function() {
    $("#question").text("You picked the wrong answer.");
    $("#answers").empty();
    $("#try_again").toggle();
});

var show_question = (function() {
    var question = questions[score];

    $("#question").text(question.text);

    $("#answers").empty();
    for (var i in question.answers) {
        var answer = question.answers[i];
        $("#answers").append("<li class='answer'>" + answer + "</li>");
    }

    $(".answer").on("click", check_answer);

});

var show_score = (function () {
    $("#score").text(score);
});

$("#try_again").on("click", function() {
    score = 0;
    show_question();
    $(this).toggle();
})

show_question();
show_score();

