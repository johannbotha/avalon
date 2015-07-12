
Template.characterList.helpers({
    names: function () {
        return Object.keys(Session.get('names'))
    }
});

Template.characterList.events = {
    'click .goto-main': function (event, template) {
        Router.go('main');
    },
    'click .person-name': function (event, template) {
        var board = Session.get('board');
        var name = $(event.target).find('.name').html() || $(event.target).html();
        var names = Session.get('names');
        var currentPlayer = names[name];

        if(currentPlayer.seen){
            alert('This player has been seen');
            return;
        }
        currentPlayer.seen = true;
        names[currentPlayer.name] = currentPlayer;
        Session.set('names', names);


        var characters = _.filter(currentPlayer.sees, function (element) {
            return board[element] !== undefined;
        });

        var players = _.map(characters, function (element) {
            return board[element].name;
        });

        Session.set('currentPlayer', {
            'role': currentPlayer.character,
            'characters': _.shuffle(characters).join(', '),
            'players': _.shuffle(players).join(', '),
            'color': currentPlayer.color
        });

        Router.go('preview')
    }
};