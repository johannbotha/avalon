
Template.characterList.helpers({
    names: function () {
        var names = Session.get('names');

        return $.map(names, function (value, index) {
            return [value];
        });
    },

    canReveal: function() {
        var names = _.values(Session.get('names'));

        var allRevealed = _.filter(names, function(name) {
            return !name.seen;
        });

        return allRevealed.length > 0;
    }
});

Template.characterList.events = {

    'click .js-start-over': function (event, template) {
        Router.go('main');
    },

    'click .person-name': function (event, template) {
        var board = Session.get('board');
        var name = $(event.target).find('.name').html() || $(event.target).html();
        var names = Session.get('names');
        var currentPlayer = names[name];

        if(currentPlayer.seen){
            return;
        }

        currentPlayer.seen = true;
        names[currentPlayer.name] = currentPlayer;
        Session.set('names', names);


        var characters = _.filter(currentPlayer.sees, function (character) {
            return board[character] !== undefined;
        });

        // characters = ['merlin', 'morgana']

        var charsWithInfo = [];

        _.each(characters, function(character) {
            var charWithColor = {
                character: character,
                color: board[character].color,
                longName: board[character].longName
            };

            charsWithInfo.push(charWithColor);
        });

        if(charsWithInfo.length) {
            var charsShuffled = _.shuffle(charsWithInfo);
            charsShuffled[charsShuffled.length - 1].isLast = true;
        }

        var players = _.map(characters, function (element) {
            return board[element].name;
        });

        Session.set('currentPlayer', {
            'role': currentPlayer.longName,
            'characters': charsShuffled,
            'players': _.shuffle(players).join(', '),
            'color': currentPlayer.color
        });

        Router.go('preview')
    },

    'click .js-reveal': function() {
        Router.go('reveal')
    }
};