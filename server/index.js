const matches='../data/matches.csv'
const deliveries='../data/deliveries.csv'
const csv=require('csvtojson')
const q =require('./ipl.js');


csv().fromFile(matches).then((match)=>{
    csv().fromFile(deliveries).then(deliverie=>{
        //q.a(match);
         //q.b(match);
         // q.c(match,deliverie);
        //q.d(match,deliverie);
        q.msdhoni(match,deliverie);
    })
});

