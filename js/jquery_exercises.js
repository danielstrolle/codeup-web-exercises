"use strict";
(function () {

    var changeBackgroundColor = function () {
        $(this).css("background-color", "red");
    };
    $('h1').click(changeBackgroundColor);

    var paragraph = $("p");
    var changeParagraphFont = function () {
        paragraph.css("font-size", "18px");
    };
    paragraph.dblclick(changeParagraphFont);

    $("li").hover(
        function () {
            $(this).css("color", "red");
        },
        function () {
            $(this).css("color", "black");
        }
);
})();
