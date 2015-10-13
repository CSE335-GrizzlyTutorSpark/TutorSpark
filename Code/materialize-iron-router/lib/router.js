Router.configure({
    layoutTemplate: 'masterLayout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'pageNotFound',
//    schedule:'schedule',
    yieldTemplates: {
        nav: {to: 'nav'},
        footer: {to: 'footer'},
    } 
});


//Router.route('/select_course');
Router.route('/policy');
Router.route('/aboutus');
Router.route('/signin');
Router.route('/StudentPrivate');
//Router.route('/AdminPrivate');

Router.map(function() {
    this.route('home', {
        path: '/',
    });
 /*   if (Meteor.userId().roles == 'student')
    {  */
   // this.route('/private');
/*    }
    else
    {
    this.route('admin_private');
    }  */
});



var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function(pause) {
        if (!Meteor.userId()) {
            this.render('login');
            return next();
        }
    }
};


Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: ['private','StudentPrivate']
});


/*Router.plugin('ensureSignedIn', {
  only: ['private','StudentPrivate']  
});
put on hold for now, if needed, don't forget to add additional template
*/

//UserAccounts Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
// AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');

/*
AccountsTemplates.configureRoute('schedule'); */