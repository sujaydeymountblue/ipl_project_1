



module.exports.a=function(first){
 const matchPerYears={};
for(let i=0 ; i < first.length ; i++){
  if(matchPerYears[first[i].season]==undefined){
      matchPerYears[first[i].season]=1;
  }
  else{
     matchPerYears[first[i].season]+=1;
  }
}

console.log(matchPerYears)
  
}



module.exports.b=function(first){
var matchWin={}
let team={};

first.forEach(function(matches){
  team[matches.winner]=1;
  if(matchWin[matches.season]==undefined)
  {
    matchWin[matches.season]=team;
    
    team={}
  }
  else if(matchWin[matches.season][matches.winner]==undefined)
  {
    matchWin[matches.season][matches.winner]=1
  }
  else{
  matchWin[matches.season][matches.winner]+=1
  }
});
console.log(matchWin);
}


module.exports.c=function(first,second){
var battingTeam={}


const filterFirst=first=>{
const temp=[]
first.forEach(function(i){
  if(i.season==='2016')
  {
    temp.push(i);
  }
  }
);
return temp;
}

const temp1=filterFirst(first);

const filterSecond=(temp1,second)=>{
  const temp=[]
  temp1.forEach(function(i){
          second.forEach(function(j){
          if(i.id===j.match_id){
                temp.push(j);
          }
      });
     
    
    
  });
  return temp;
 }

 const temp2=filterSecond(temp1,second);

temp1.forEach(function(i){

  if(i.season==='2016'){
    
  temp2.forEach(function(j){
        if(i.id===j.match_id)
        {

          t=Number(j.extra_runs);
          if(battingTeam[j.batting_team]==undefined)
          {
            battingTeam[j.batting_team]=t;
          }
          else if(battingTeam[j.batting_team]==undefined)
          {
            battingTeam[j.batting_team]=t;
          }
          else{
            battingTeam[j.batting_team]+=t;
          }
        }

  });
}

});

console.log(battingTeam);
}









module.exports.d=function(first,second){

  var battingTeam={}


  const filterFirst=first=>{
  const temp=[]
  first.forEach(function(i){
    if(i.season==='2015')
    {
      temp.push(i);
    }
    }
  );
  return temp;
  }
  
  const temp1=filterFirst(first);
  
  const filterSecond=(temp1,second)=>{
    const temp=[]
    temp1.forEach(function(i){
      
      
        second.forEach(function(j){
            if(i.id===j.match_id){
                  temp.push(j);
            }
        });
       
      
      
    });
    return temp;
   }
   
   EconomyBowler={};
   

   const temp2=filterSecond(temp1,second);
  
     var counter=0;
     var total_run=0;
     var extras=0;
     var temp={}
     
     for(let i=0 ; i < temp2.length-1 ; i++)
     {
       total_run+=Number(temp2[i].total_runs)-Number(temp2[i].bye_runs)-Number(temp2[i].legbye_runs);
       
        if(Number(temp2[i].over) !== Number(temp2[i+1].over))
        {
          counter+=1;
            
          if(EconomyBowler==={})
          {
            temp[0]=total_runs;
            temp[1]=counter;  
            
            EconomyBowler[temp2[i].bowler]=temp;
          }
          else if(EconomyBowler[temp2[i].bowler]===undefined)
          {
           
            
            temp[0]=total_run;
            temp[1]=counter;  
             
            EconomyBowler[temp2[i].bowler]=temp;
          }
          else 
          {
            
            EconomyBowler[temp2[i].bowler][0]+=total_run;
            EconomyBowler[temp2[i].bowler][1]+=counter;

            
          }
          

          counter=0;
          total_run=0;
          extras=0;
          temp={}
          
        }


        
      }
    
     var economyBowler={}
     
     for(let i in EconomyBowler)
     { 
      economyBowler[i]=EconomyBowler[i][0]/EconomyBowler[i][1]
     }
  // console.log(economyBowler)
    

const fl=Object.entries(economyBowler);
console.log(fl.sort((a,b)=>a[1] -b[1]).slice(0,10));
  

}


