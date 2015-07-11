
Template.characterList.helpers({
    names: function () {
        var board = Session.get('board');
        var names = [];
        _.each(board, function (character){
            var name = character.name
            names.push(name);
        });
        return names;
    }
});