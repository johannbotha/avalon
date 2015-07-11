
function Board (ppl) {

    allPeople = _.shuffle(ppl);
    numOfPPl = allPeople.length;
    unasignedPeople = allPeople;

    this.hash = {};

    this.getRandomPerson = function(){
        var person = unasignedPeople.shift();
        return person;
    };

    this.hash['merlin'] = new Merlin(this.getRandomPerson());
    this.hash['percival'] = new Percival(this.getRandomPerson());
    this.hash['morgana'] = new Morgana(this.getRandomPerson());
    this.hash['dumbBlue1'] = new DumbBlue1(this.getRandomPerson());
    this.hash['mordred'] = new Mordrid(this.getRandomPerson());

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
    this.color =  'red';
    this.character =  'percival';
    this.name = name;
    this.sees = ['merlin', 'morgana'];

}

function DumbBlue1(name) {
    this.color =  'red';
    this.character =  'dumbBlue1';
    this.name = name;
    this.sees = [];
}

function DumbBlue2 (name) {
    this.color =  'red';
    this.character =  'dumbBlue2';
    this.name = name;
    this.sees = [];
}

function DumbBlue3 (name) {
    this.color =  'red';
    this.character =  'dumbBlue3';
    this.name = name;
    this.sees = [];
}

function DumbBlue4 (name) {
    this.color =  'red';
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
    Session.set("numPlayers", [1, 2, 3, 4, 5]);
};

Template.main.events({

    'click .add-person': function () {

        var current = Session.get('numPlayers');
        current.push(current.length + 1);
        Session.set('numPlayers', current);
    },

    'click .submit': function (e, tmpl) {
        var names = [];
        $(".name").each(function() {
            var name = $(this).val();
            console.log(name);
            if(name)
                names.push(name);
        });

        if(names.length < 5) {
            $('.error').removeClass('hidden');
        } else {
            var board = new Board(names).hash;
            Session.set('board', board);
            Session.set('names', _.indexBy(board, 'name'));
            Router.go('characterList');
        }
    }
});


