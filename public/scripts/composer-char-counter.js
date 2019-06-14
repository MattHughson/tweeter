$(document).ready(function () {
    $(".new-tweet textarea").keyup(() => {
        // Trigger the character counter
        $(".counter").text(140 - $("textarea").val().length);
        // does the text calculator in the text box
        if ($("textarea").val().length - 140 > 0) {
            // color change of the font header
            $(".counter").css("color", "red");
        }
    })
});