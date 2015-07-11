
function Board (ppl) {

    allPeople = _.shuffle(ppl);
    numOfPPl = allPeople.length;
    unasignedPeople = allPeople;

    this.hash = {};

    this.getRandomPerson = function(){
        var person = unasignedPeople.shift();
        return person;
    }

    this.hash['merlin'] = new Merlin(this.getRandomPerson());
    this.hash['percival'] = new Percival(this.getRandomPerson());
    this.hash['morgana'] = new Morgana(this.getRandomPerson());
    this.hash['dumbBlue1'] = new DumbBlue1(this.getRandomPerson());
    this.hash['mordrid'] = new Mordrid(this.getRandomPerson());

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
    this.sees = [];
}

function Mordrid(name) {
    this.color =  'red';
    this.character =  'mordrid';
    this.name = name;
    this.sees = ['dumbRed', 'assasin', 'mordrid'];
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
    this.sees = ['dumbRed', 'assasin', 'mordrid'];
}

function DumbRed(name) {
    this.color =  'red';
    this.character =  'dumbRed';
    this.name = name;
    this.sees = ['dumbRed', 'assasin', 'mordrid'];
}

function Assasin(name) {
    this.color =  'red';
    this.character =  'assasin';
    this.name = name;
    this.sees = ['dumbRed', 'assasin', 'mordrid'];
}


Template.main.helpers({
    counter: function () {
        return Session.get('counter');
    }
});

Template.main.rendered = function() {

}

Template.main.events({
    'click .add-person': function () {
        $(".names").append('<input class="name" type="text"><br>');
    },

    'click .submit': function (e, tmpl) {
        var names = [];
        $(".name").each(function() {
            var name = $(this).val();
            console.log(name);
            if(name)
                names.push(name);
        });

        Session.set('board', new Board(names).hash);
        Router.go('characterList');
    }
});


