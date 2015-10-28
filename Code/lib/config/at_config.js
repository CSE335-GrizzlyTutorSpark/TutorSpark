var mySubmitFunc = function(error, state) {
    if (!error) {
        if (state === "signIn") {
            Materialize.toast('Welcome Back', 4000)
        }
        if (state === "signUp") {
            Materialize.toast('Account Created', 4000)
        }
    }
};

// Options
AccountsTemplates.configure({
    //defaultLayout: 'emptyLayout',
    //showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    sendVerificationEmail: true,

    //enforceEmailVerification: true,
    //confirmPassword: true,
    //continuousValidation: false,
    //displayFormLabels: true,
    //forbidClientAccountCreation: false,
    //formValidationFeedback: true,
    //homeRoutePath: '/',
    //showAddRemoveServices: false,
    //showPlaceholders: true,

    negativeValidation: true,
    positiveValidation:true,
    negativeFeedback: false,
    positiveFeedback:false,

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
    
    onSubmitHook: mySubmitFunc
});