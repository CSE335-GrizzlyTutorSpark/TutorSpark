var _dep=new Deps.Dependency();

Template.adminTutorHours.helpers({
    
    'initArray': function() {
        avail = new Array(70);
        for (i = 0; i < avail.length; i++) {
            avail[i] = false;
        }
    },
    
    'showNumberofSellection': function(){
    _dep.depend();
    var ecount=$('.selected').length;
    return "You have selected " + ecount + " hour"

}
});


Template.adminTutorHours.events({
    
    'click .free':function(){
        var selected=event.target.id;
            // console.log("the value is"+selected);
            // console.log(selected);
        $('#'+selected).addClass('selected');
        $('#'+selected).removeClass('free');
        _dep.changed();
        
        if (event.target.id == "m0910") {
            avail[0] = true;
        } else if (event.target.id == "t0910") {
            avail[1] = true;
        } else if (event.target.id == "w0910") {
            avail[2] = true;
        } else if (event.target.id == "th0910") {
            avail[3] = true;
        } else if (event.target.id == "f0910") {
            avail[4] = true;
        } else if (event.target.id == "sa0910") {
            avail[5] = true;
        } else if (event.target.id == "su0910") {
            avail[6] = true;
        } else if (event.target.id == "m1011") {
            avail[7] = true;
        } else if (event.target.id == "t1011") {
            avail[8] = true;
        } else if (event.target.id == "w1011") {
            avail[9] = true;
        } else if (event.target.id == "th1011") {
            avail[10] = true;
        } else if (event.target.id == "f1011") {
            avail[11] = true;
        } else if (event.target.id == "sa1011") {
            avail[12] = true;
        } else if (event.target.id == "su1011") {
            avail[13] = true;
        } else if (event.target.id == "m1112") {
            avail[14] = true;
        } else if (event.target.id == "t1112") {
            avail[15] = true;
        } else if (event.target.id == "w1112") {
            avail[16] = true;
        } else if (event.target.id == "th1112") {
            avail[17] = true;
        } else if (event.target.id == "f1112") {
            avail[18] = true;
        } else if (event.target.id == "sa1112") {
            avail[19] = true;
        } else if (event.target.id == "su1112") {
            avail[20] = true;
        } else if (event.target.id == "m1201") {
            avail[14] = true;
        } else if (event.target.id == "t1201") {
            avail[15] = true;
        } else if (event.target.id == "w1201") {
            avail[16] = true;
        } else if (event.target.id == "th1201") {
            avail[17] = true;
        } else if (event.target.id == "f1201") {
            avail[18] = true;
        } else if (event.target.id == "sa1201") {
            avail[19] = true;
        } else if (event.target.id == "su1201") {
            avail[27] = true;
        } else if (event.target.id == "m0102") {
            avail[28] = true;
        } else if (event.target.id == "t0102") {
            avail[29] = true;
        } else if (event.target.id == "w0102") {
            avail[30] = true;
        } else if (event.target.id == "th0102") {
            avail[31] = true;
        } else if (event.target.id == "f0102") {
            avail[32] = true;
        } else if (event.target.id == "sa0102") {
            avail[33] = true;
        } else if (event.target.id == "su0102") {
            avail[34] = true;
        } else if (event.target.id == "m0203") {
            avail[35] = true;
        } else if (event.target.id == "t0203") {
            avail[36] = true;
        } else if (event.target.id == "w0203") {
            avail[37] = true;
        } else if (event.target.id == "th0203") {
            avail[38] = true;
        } else if (event.target.id == "f0203") {
            avail[39] = true;
        } else if (event.target.id == "sa0203") {
            avail[40] = true;
        } else if (event.target.id == "su0203") {
            avail[41] = true;
        } else if (event.target.id == "m0304") {
            avail[42] = true;
        } else if (event.target.id == "t0304") {
            avail[43] = true;
        } else if (event.target.id == "w0304") {
            avail[44] = true;
        } else if (event.target.id == "th0304") {
            avail[45] = true;
        } else if (event.target.id == "f0304") {
            avail[46] = true;
        } else if (event.target.id == "sa0304") {
            avail[47] = true;
        } else if (event.target.id == "su0304") {
            avail[48] = true;
        } else if (event.target.id == "m0405") {
            avail[49] = true;
        } else if (event.target.id == "t0405") {
            avail[50] = true;
        } else if (event.target.id == "w0405") {
            avail[51] = true;
        } else if (event.target.id == "th0405") {
            avail[52] = true;
        } else if (event.target.id == "f0405") {
            avail[53] = true;
        } else if (event.target.id == "sa0405") {
            avail[54] = true;
        } else if (event.target.id == "su0405") {
            avail[55] = true;
        } else if (event.target.id == "m0506") {
            avail[56] = true;
        } else if (event.target.id == "t0506") {
            avail[57] = true;
        } else if (event.target.id == "w0506") {
            avail[58] = true;
        } else if (event.target.id == "th0506") {
            avail[59] = true;
        } else if (event.target.id == "f0506") {
            avail[60] = true;
        } else if (event.target.id == "sa0506") {
            avail[61] = true;
        } else if (event.target.id == "su0506") {
            avail[62] = true;
        } else if (event.target.id == "m0607") {
            avail[63] = true;
        } else if (event.target.id == "t0607") {
            avail[64] = true;
        } else if (event.target.id == "w0607") {
            avail[65] = true;
        } else if (event.target.id == "th0607") {
            avail[66] = true;
        } else if (event.target.id == "f0607") {
            avail[67] = true;
        } else if (event.target.id == "sa0607") {
            avail[68] = true;
        } else if (event.target.id == "su0607") {
            avail[69] = true;
        }
    },
    
    'click .selected':function(){
        var selected = event.target.id;
        // console.log("the value is"+selected);
        // console.log(selected);
        $('#'+selected).addClass('free');
        $('#'+selected).removeClass('selected');
        _dep.changed();
        
        if (event.target.id == "m0910") {
            avail[0] = false;
        } else if (event.target.id == "t0910") {
            avail[1] = false;
        } else if (event.target.id == "w0910") {
            avail[2] = false;
        } else if (event.target.id == "th0910") {
            avail[3] = false;
        } else if (event.target.id == "f0910") {
            avail[4] = false;
        } else if (event.target.id == "sa0910") {
            avail[5] = false;
        } else if (event.target.id == "su0910") {
            avail[6] = false;
        } else if (event.target.id == "m1011") {
            avail[7] = false;
        } else if (event.target.id == "t1011") {
            avail[8] = false;
        } else if (event.target.id == "w1011") {
            avail[9] = false;
        } else if (event.target.id == "th1011") {
            avail[10] = false;
        } else if (event.target.id == "f1011") {
            avail[11] = false;
        } else if (event.target.id == "sa1011") {
            avail[12] = false;
        } else if (event.target.id == "su1011") {
            avail[13] = false;
        } else if (event.target.id == "m1112") {
            avail[14] = false;
        } else if (event.target.id == "t1112") {
            avail[15] = false;
        } else if (event.target.id == "w1112") {
            avail[16] = false;
        } else if (event.target.id == "th1112") {
            avail[17] = false;
        } else if (event.target.id == "f1112") {
            avail[18] = false;
        } else if (event.target.id == "sa1112") {
            avail[19] = false;
        } else if (event.target.id == "su1112") {
            avail[20] = false;
        } else if (event.target.id == "m1201") {
            avail[14] = false;
        } else if (event.target.id == "t1201") {
            avail[15] = false;
        } else if (event.target.id == "w1201") {
            avail[16] = false;
        } else if (event.target.id == "th1201") {
            avail[17] = false;
        } else if (event.target.id == "f1201") {
            avail[18] = false;
        } else if (event.target.id == "sa1201") {
            avail[19] = false;
        } else if (event.target.id == "su1201") {
            avail[27] = false;
        } else if (event.target.id == "m0102") {
            avail[28] = false;
        } else if (event.target.id == "t0102") {
            avail[29] = false;
        } else if (event.target.id == "w0102") {
            avail[30] = false;
        } else if (event.target.id == "th0102") {
            avail[31] = false;
        } else if (event.target.id == "f0102") {
            avail[32] = false;
        } else if (event.target.id == "sa0102") {
            avail[33] = false;
        } else if (event.target.id == "su0102") {
            avail[34] = false;
        } else if (event.target.id == "m0203") {
            avail[35] = false;
        } else if (event.target.id == "t0203") {
            avail[36] = false;
        } else if (event.target.id == "w0203") {
            avail[37] = false;
        } else if (event.target.id == "th0203") {
            avail[38] = false;
        } else if (event.target.id == "f0203") {
            avail[39] = false;
        } else if (event.target.id == "sa0203") {
            avail[40] = false;
        } else if (event.target.id == "su0203") {
            avail[41] = false;
        } else if (event.target.id == "m0304") {
            avail[42] = false;
        } else if (event.target.id == "t0304") {
            avail[43] = false;
        } else if (event.target.id == "w0304") {
            avail[44] = false;
        } else if (event.target.id == "th0304") {
            avail[45] = false;
        } else if (event.target.id == "f0304") {
            avail[46] = false;
        } else if (event.target.id == "sa0304") {
            avail[47] = false;
        } else if (event.target.id == "su0304") {
            avail[48] = false;
        } else if (event.target.id == "m0405") {
            avail[49] = false;
        } else if (event.target.id == "t0405") {
            avail[50] = false;
        } else if (event.target.id == "w0405") {
            avail[51] = false;
        } else if (event.target.id == "th0405") {
            avail[52] = false;
        } else if (event.target.id == "f0405") {
            avail[53] = false;
        } else if (event.target.id == "sa0405") {
            avail[54] = false;
        } else if (event.target.id == "su0405") {
            avail[55] = false;
        } else if (event.target.id == "m0506") {
            avail[56] = false;
        } else if (event.target.id == "t0506") {
            avail[57] = false;
        } else if (event.target.id == "w0506") {
            avail[58] = false;
        } else if (event.target.id == "th0506") {
            avail[59] = false;
        } else if (event.target.id == "f0506") {
            avail[60] = false;
        } else if (event.target.id == "sa0506") {
            avail[61] = false;
        } else if (event.target.id == "su0506") {
            avail[62] = false;
        } else if (event.target.id == "m0607") {
            avail[63] = false;
        } else if (event.target.id == "t0607") {
            avail[64] = false;
        } else if (event.target.id == "w0607") {
            avail[65] = false;
        } else if (event.target.id == "th0607") {
            avail[66] = false;
        } else if (event.target.id == "f0607") {
            avail[67] = false;
        } else if (event.target.id == "sa0607") {
            avail[68] = false;
        } else if (event.target.id == "su0607") {
            avail[69] = false;
        }
    },
    
    'click #finishButton': function() {
        var someID = Accounts.connection.userId();
        Meteor.call('createAvailability', someID, avail);
        Materialize.toast('Tutor Account Configured!', 4000);
    }
});