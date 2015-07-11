Template.preview.rendered = function(){
    setTimeout(function() {
        Session.set('currentPlayer', undefined);
        Router.go('characterList');
    }, 3000);
};

Template.preview.helpers({
    player: function () {
        return Session.get('currentPlayer');
    }
});

Template.preview.events = {
    'click .person-name': function (event, template) {
        
    }
};