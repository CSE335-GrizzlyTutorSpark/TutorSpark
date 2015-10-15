Template.nav.rendered = function () {
    $(".button-collapse").sideNav();
    //$('.collapsible').collapsible();
};



Template.nav.helpers({
    'showUserName' : function(){
        return Meteor.user().name;
}
});



