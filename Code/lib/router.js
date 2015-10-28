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

// General Site Routes
Router.route('/policy');
Router.route('/aboutUs');
Router.route('/signIn');

// Student Routes
Router.route('/studentCourses');
Router.route('/studentSchedule');
Router.route('/studentFindTutor');

// Tutor Routes
Router.route('/tutorCourses');
Router.route('/tutorAvailability');

// Admin Routes
Router.route('/adminDashboard');
Router.route('/adminPromoteStudent');

// Test Route
Router.route('/BlahBlah');

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
  except: ['home','signIn']  
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