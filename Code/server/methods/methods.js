// This file necessitated by the removal of the insecure package.

// Define all db-interactive methods here.

// Don't forget to separate method definitions with commas.

Meteor.methods({
    
    ////////////////////////////////
    // BlahBlah - related methods //
    ////////////////////////////////
    
    'createNewBlahBlah': function(Name) {
        BlahBlah.insert( {blahName: Name} );
    },
    
    'displayAllBlahBlahs': function() {
        return BlahBlah.find();
    },
    
    ////////////////////////////////////
    // Availability - related methods //
    ////////////////////////////////////

    
    
    // Availability Array is constructed left-to-right top-to-bottom
    // (like the way you would read)
    // Day6-14 is Saturday from 2:00pm-3:00pm (12+2=14)
    'createAvailability': function(personID, Hours) {
        Availability.insert( {  UserID:personID,
                                "Day1-9": Hours[0],
                                "Day2-9": Hours[1],
                                "Day3-9": Hours[2],
                                "Day4-9": Hours[3],
                                "Day5-9": Hours[4],
                                "Day6-9": Hours[5],
                                "Day7-9": Hours[6],
                                "Day1-10": Hours[7],
                                "Day2-10": Hours[8],
                                "Day3-10": Hours[9],
                                "Day4-10": Hours[10],
                                "Day5-10": Hours[11],
                                "Day6-10": Hours[12],
                                "Day7-10": Hours[13],
                                "Day1-11": Hours[14],
                                "Day2-11": Hours[15],
                                "Day3-11": Hours[16],
                                "Day4-11": Hours[17],
                                "Day5-11": Hours[18],
                                "Day6-11": Hours[19],
                                "Day7-11": Hours[20],
                                "Day1-12": Hours[21],
                                "Day2-12": Hours[22],
                                "Day3-12": Hours[23],
                                "Day4-12": Hours[24],
                                "Day5-12": Hours[25],
                                "Day6-12": Hours[26],
                                "Day7-12": Hours[27],
                                "Day1-13": Hours[28],
                                "Day2-13": Hours[29],
                                "Day3-13": Hours[30],
                                "Day4-13": Hours[31],
                                "Day5-13": Hours[32],
                                "Day6-13": Hours[33],
                                "Day7-13": Hours[34],
                                "Day1-14": Hours[35],
                                "Day2-14": Hours[36],
                                "Day3-14": Hours[37],
                                "Day4-14": Hours[38],
                                "Day5-14": Hours[39],
                                "Day6-14": Hours[40],
                                "Day7-14": Hours[41],
                                "Day1-15": Hours[42],
                                "Day2-15": Hours[43],
                                "Day3-15": Hours[44],
                                "Day4-15": Hours[45],
                                "Day5-15": Hours[46],
                                "Day6-15": Hours[47],
                                "Day7-15": Hours[48],
                                "Day1-16": Hours[49],
                                "Day2-16": Hours[50],
                                "Day3-16": Hours[51],
                                "Day4-16": Hours[52],
                                "Day5-16": Hours[53],
                                "Day6-16": Hours[54],
                                "Day7-16": Hours[55],
                                "Day1-17": Hours[56],
                                "Day2-17": Hours[57],
                                "Day3-17": Hours[58],
                                "Day4-17": Hours[59],
                                "Day5-17": Hours[60],
                                "Day6-17": Hours[61],
                                "Day7-17": Hours[62],
                                "Day1-18": Hours[63],
                                "Day2-18": Hours[64],
                                "Day3-18": Hours[65],
                                "Day4-18": Hours[66],
                                "Day5-18": Hours[67],
                                "Day6-18": Hours[68],
                                "Day7-18": Hours[69]
        } );
    }
    
    /*
    'updateAvailability': function(ID, Hours) {
        Availability.insert( {
    */
    
    
    ///////////////////////////////
    // Meeting - related methods //
    ///////////////////////////////
    
})