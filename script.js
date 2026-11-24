function showMessage() {
    alert("Welcome to My Personal Portfolio!");
}

$(document).ready(function() {

    $(".section-title").click(function() {

        $(this).toggleClass("active-title");

    });

    $(".reveal").hide().fadeIn(1200);

});