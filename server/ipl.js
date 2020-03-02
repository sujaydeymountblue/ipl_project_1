const matches='../data/matches.csv'
const deliveries='../data/deliveries.csv'
const csv=require('csvtojson')
const q =require('../data/practice.js');


csv().fromFile(matches).then((first)=>{
    csv().fromFile(deliveries).then(second=>{
         //q.a(first);
         q.b(first);
          //q.c(first,second);
        //q.d(first,second);
    })
});

