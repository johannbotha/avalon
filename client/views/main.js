
function Board (ppl) {

    allPeople = _.shuffle(ppl);
    numOfPPl = allPeople.length;
    unassignedPeople = allPeople;

    this.hash = {};

    this.getRandomPerson = function(){
        return unassignedPeople.shift();
    };

    this.hash['merlin'] = new Merlin(this.getRandomPerson());
    this.hash['percival'] = new Percival(this.getRandomPerson());
    this.hash['morgana'] = new Morgana(this.getRandomPerson());
    this.hash['dumbBlue1'] = new DumbBlue1(this.getRandomPerson());
    this.hash['mordred'] = new Mordred(this.getRandomPerson());

    if (numOfPPl == 6){
        this.hash['dumbBlue2'] = new DumbBlue2(this.getRandomPerson());
    }
    else if (numOfPPl == 7){
        this.hash['assasin'] = new Assasin(this.getRandomPerson());
    }
    else if (numOfPPl == 8){
        this.hash['dumbBlue3'] = new DumbBlue3(this.getRandomPerson());
    }
    else if (numOfPPl == 9){
        this.hash['dumbBlue4'] = new DumbBlue4(this.getRandomPerson());
    }
    else if (numOfPPl == 10){
        this.hash['dumbRed1'] = new DumbRed(this.getRandomPerson());
    }

}

function Merlin(name) {
    this.color =  'blue';
    this.character =  'merlin';
    this.name = name;
    this.sees = ['morgana', 'dumbRed', 'assasin'];
}

function Mordred(name) {
    this.color =  'red';
    this.character =  'mordred';
    this.name = name;
    this.sees = ['dumbRed', 'assasin', 'morgana'];
}

function Percival(name) {
    this.color =  'blue';
    this.character =  'percival';
    this.name = name;
    this.sees = ['merlin', 'morgana'];

}

function DumbBlue1(name) {
    this.color =  'blue';
    this.character =  'dumbBlue1';
    this.name = name;
    this.sees = [];
}

function DumbBlue2 (name) {
    this.color =  'blue';
    this.character =  'dumbBlue2';
    this.name = name;
    this.sees = [];
}

function DumbBlue3 (name) {
    this.color =  'blue';
    this.character =  'dumbBlue3';
    this.name = name;
    this.sees = [];
}

function DumbBlue4 (name) {
    this.color =  'blue';
    this.character =  'dumbBlue4';
    this.name = name;
    this.sees = [];
}

function Morgana(name) {
    this.color =  'red';
    this.character =  'morgana';
    this.name = name;
    this.sees = ['dumbRed', 'assasin', 'mordred'];
}

function DumbRed(name) {
    this.color =  'red';
    this.character =  'dumbRed';
    this.name = name;
    this.sees = ['dumbRed', 'assasin', 'mordred'];
}

function Assasin(name) {
    this.color =  'red';
    this.character =  'assasin';
    this.name = name;
    this.sees = ['dumbRed', 'assasin', 'mordred'];
}

Template.main.helpers({
    counter: function () {
        return Session.get('counter');
    },

    players: function() {
        return Session.get('numPlayers');
    }
});

Template.main.rendered = function() {
    Session.set("numPlayers",
    [
        { value: 1, necessary: true },
        { value: 2, necessary: true },
        { value: 3, necessary: true },
        { value: 4, necessary: true },
        { value: 5, necessary: true }
    ]);
};

Template.main.events({

    'click .add-person': function () {

        var current = Session.get('numPlayers');

        if(current.length > 9) {
            $('.error')
                .html('You cannot have more than 10 players')
                .removeClass('hidden');

            return;
        }

        current.push({
            value: current.length + 1,
            necessary: false
        });

        Session.set('numPlayers', current);
    },

    'click .js-remove-player': function(e) {

        e.preventDefault();

        var current = Session.get('numPlayers');

        current.pop();

        Session.set('numPlayers', current);
    },

    'click .submit': function (e, tmpl) {
        var names = [];
        $('.name').each(function() {
            var name = $(this).val();

            if(name) {
                names.push(name);
            }
        });

        if(names.length < 5) {
            $('.error')
                .html('You must have at least 5 players')
                .removeClass('hidden');
            return;
        }

        var board = new Board(names).hash;
        Session.set('board', board);
        Session.set('names', _.indexBy(board, 'name'));
        Router.go('characterList');
    }
});


