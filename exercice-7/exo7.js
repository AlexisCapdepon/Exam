'use strict'
var nT = [10, 13, 13, 12, 15, 12, 11, 16, 14];

function computeNotes(notes){
var tmp = 0  ;
    for(var i = 0; i <notes.length ; i++){
        tmp += notes[i];
    }
   return(tmp / notes.length);
}

alert(computeNotes(nT));