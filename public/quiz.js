var questions = [
    { "text": "Question 1", "answers": ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"], "correct": "Answer 1" },
    { "text": "Question 2", "answers": ["Answer A", "Answer B", "Answer C", "Answer D", "Answer E"], "correct": "Answer 2" },
    { "text": "Question 3", "answers": ["Answer F", "Answer G", "Answer H", "Answer I", "Answer J"], "correct": "Answer 3" },
    { "text": "Question 4", "answers": ["Answer K", "Answer L", "Answer M", "Answer N", "Answer O"], "correct": "Answer 4" },
    { "text": "Question 5", "answers": ["Answer P", "Answer Q", "Answer R", "Answer S", "Answer T"], "correct": "Answer 5" }
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

    $(".answer").on("click", function() {
        score++;
        show_score();
    });

});

var show_score = (function () {
    $("#score").text(score);
});

show_question();
show_score();

