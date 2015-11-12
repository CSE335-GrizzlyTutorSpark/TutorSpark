Template.nav.rendered = function () {
    $(".button-collapse").sideNav({
        closeOnClick: true
    });
    $('.collapsible').collapsible();
};

Template.nav.helpers({
    'showUserName' : function(){
        return Meteor.user().name;
}
});