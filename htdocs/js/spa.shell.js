spa.shell = (function() {
    var initModule = function ( containerElem ) {
        containerElem.insertAdjacentHTML('afterbegin',
            '<h1>My Todo List</h1>'
        );
    };

    return { initModule: initModule };
}());
