"use strict";
(function () {
    var title = $('h1');
    $().css('font-size', '20px');
    $('li, p, h1').css('background-color', 'yellow');
    var contents = title.html();
    alert(contents);
})();
