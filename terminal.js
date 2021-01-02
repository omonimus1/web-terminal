
 $('body').terminal({
    hi: function(what) {
        this.echo('Welcome to this terminal.');
    },
    
    age: function() {
        this.echo('21');
    },

    help: function( ){
        this.echo('List of command: \n' +
        'whoami => Provide basic info about me \n' + 
        'location => Show my current location\n' +
        'linkedln => provides the url to my linkedln profile\n' +
        'github => Provides the link to my github profile\n'
        );
    },

    location: function(what) {
        this.echo('United Kingdom');
    },

    linkedln:function(){
        this.echo('https://www.linkedin.com/in/davidepollicino7/');
    },

    github : function(){
        this.echo('https://github.com/omonimus1/');
    },

    whoami : function(){
        this.echo('Davide Pollicino');
    },
 },
    {
        greetings: 'Welcome! Run help command to start'
});
