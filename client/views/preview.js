Template.preview.rendered = function(){
    setTimeout(function() {
        Session.set('currentPlayer', undefined);
        Router.go('characterList');
    }, 10000);
};

Template.preview.helpers({
    player: function () {
        return Session.get('currentPlayer');
    }
});

Template.preview.events = {
    'click .js-done-preview': function (event, template) {

        // this disgusting hack gets the highest timeout ID
        // then using that, we can make sure all timeouts are cleared
        var highestTimeoutId = setTimeout(";");
        for (var i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i);
        }

        Router.go('characterList');
    }
};