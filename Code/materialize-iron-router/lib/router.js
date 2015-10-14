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
Router.route('/AdminSchedule');
Router.route('/AddTutor');
Router.route('/AdminPrivate');
Router.route('/StudentSchedule');
Router.route('/AddTutorCourse');
Router.route('/AddTutorHour');

Router.map(function() {
    this.route('home', {
        path: '/',
    });
  
});

    
/*   if (Meteor.userId().roles == 'student')
    {  
   // this.route('/private');
    }
    else
    {
    this.route('admin_private');
    }  


/*

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
    except: ['home']
});

*/


Router.plugin('ensureSignedIn', {
  except: ['home','signin']  
});



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