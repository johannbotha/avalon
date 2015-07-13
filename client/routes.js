Router.map(function(){
    this.route('main', {
        path: '/'
    });

    this.route('characterList', {
        path: '/characters'
    });

    this.route('preview', {
        path: '/preview'
    });

    this.route('characterBreakdown', {
        path: '/characterBreakdown'
    });

    this.route('reveal', {
        path: '/reveal'
    });
});
