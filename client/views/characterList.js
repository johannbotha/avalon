
Template.characterList.helpers({
    names: function () {
        return Object.keys(Session.get('names'))
    }
});

Template.characterList.events = {
    'click .person-name': function (event, template) {
        var board = Session.get('board');
        var name = $(event.target).html();
        var position = Session.get('names')[name];

        var characters = _.filter(position.sees, function (element) {
            return board[element] !== undefined;
        });

        var players = _.map(characters, function (element) {
            return board[element].name;
        });

        console.log('role ', position.character);
        console.log('you see: ', _.shuffle(characters));
        console.log('played by: ', _.shuffle(players));
        console.log()
    }
}