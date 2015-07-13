
Template.reveal.helpers({
    names: function () {
        return _.values(Session.get('names'));
    }
});

Template.reveal.events({
    'click .js-start-over': function (event, template) {
        Router.go('main');
    }
});

