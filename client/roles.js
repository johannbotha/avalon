
function Merlin() {
    this.color =  'blue';
    this.character =  'merlin';
    this.name = '';
}

function Mordrid() {
    this.color =  'red';
    this.character =  'mordrid';
    this.name = '';
}

function Percival() {
    this.color =  'red';
    this.character =  'percival';
    this.name = '';
}

function DumbBlue1() {
    this.color =  'red';
    this.character =  'dumbBlue1';
    this.name = '';
    this.sees = [];
}

function DumbBlue2 () {
    this.color =  'red';
    this.character =  'dumbBlue2';
    this.name = '';
    this.sees = [];
}

function DumbBlue3 () {
    this.color =  'red';
    this.character =  'dumbBlue3';
    this.name = '';
    this.sees = [];
}

function DumbBlue4 () {
    this.color =  'red';
    this.character =  'dumbBlue4';
    this.name = '';
    this.sees = [];
}

function Morgana() {
    this.color =  'red';
    this.character =  'morgana';
    this.name = '';
}

function DumbRed() {
    this.color =  'red';
    this.character =  'dumbRed';
    this.name = '';
}

function Assasin() {
    this.color =  'red';
    this.character =  'assasin';
    this.name = '';
}

function Board (numOfPPl) {
    this.hash = {};

    this.hash['merlin'] = new Merlin();
    this.hash['percival'] = new Percival();
    this.hash['morgana'] = new Morgana();
    this.hash['dumbBlue1'] = new DumbBlue1();
    this.hash['mordrid'] = new Mordrid();


    if (numOfPPl == 6){
        this.hash['dumbBlue2'] = new DumbBlue2();
    }
    else if (numOfPPl == 7){
        this.hash['assasin'] = new Assasin();
    }
    else if (numOfPPl == 8){
        this.hash['dumbBlue3'] = new DumbBlue3();
    }
    else if (numOfPPl == 9){
        this.hash['dumbBlue4'] = new DumbBlue4();
    }
    else if (numOfPPl == 10){
        this.hash['dumbRed1'] = new DumbRed();
    }
}



