
module.exports.a=function(match){
  const result=match.reduce((map,matches)=>{
    if(map[matches.season]==undefined)
    {
      map[matches.season]=1;     
    }
    else{          
      map[matches.season]+=1;
    }
    return map;
 },{});
  console.log(result)
}
  
  
  
  
  module.exports.b=function(first){
    
  const result=first.reduce((map,matches)=>{
     
     
    if(map[matches.season]==undefined)
    {
      // let t={}
      // t[matches.winner]=1 
      map[matches.season]={};
      
    }
    if(map[matches.season][matches.winner]==undefined)
    {
      // t[matches.winner]=1 
      map[matches.season][matches.winner]=1;
      
    }
    else{
      
      map[matches.season][matches.winner]+=1;
    }

    return map;
   
  },{});
  console.log(result)

  }
  

  //
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
  
   const result1=temp2.reduce((battingTeam,j)=>{
         
            t=Number(j.extra_runs);
            if(battingTeam[j.batting_team]==undefined)
            {
              battingTeam[j.batting_team]=t;
            }
            else{
              battingTeam[j.batting_team]+=t;
            }
          return battingTeam;
  
    },{});
  
  

  
  console.log(result1);
  
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
         
      var temp={}
       const result=temp2.reduce((EconomyBowler,temp2)=>{
        let total_run=0;
        let extras=0;
        total_run=Number(temp2.total_runs)-Number(temp2.bye_runs)-Number(temp2.legbye_runs);
         let extra_ball=Number(temp2.noball_runs)+Number(temp2.wide_runs);
         
          if(EconomyBowler==={} || EconomyBowler[temp2.bowler]===undefined)
            {
              temp[0]=total_run;
              temp[1]=1-extra_ball;  
              
              EconomyBowler[temp2.bowler]=temp;
              temp={}
              
            }
            
            else 
            {
              EconomyBowler[temp2.bowler][0]+=total_run;
              EconomyBowler[temp2.bowler][1]+=1-extra_ball;
              temp={}         
            }
           return EconomyBowler;

          },{});

      var economyBowler={}
       
       for(let i in result)
       { 
        economyBowler[i]=result[i][0]/(result[i][1]/6);
       }
    
      
  
  const fl=Object.entries(economyBowler);
  console.log(fl.sort((a,b)=>a[1] -b[1]).slice(0,10));
  }


  module.exports.msdhoni=function(match,deliverie){
    var msd=match.reduce((acc,i)=>{
    var result=deliverie.reduce((a,j)=>{
     
     if(j.match_id===i.id && j.batsman==='CH Gayle'){
      a+=Number(j.batsman_runs);
     }
    //   {
    //     if(a[i.season]===undefined)
    //     {

    //       a[i.season]=Number(j.batsman_runs);
    //     }
    //     else{
    //     a[i.season]+=Number(j.batsman_runs);
       
    //   }      
    // }

   
    return a
    },0);
    // console.log(result)
    if(acc[i.season]===undefined)
    {
      acc[i.season]=0;
    }
    
    acc[i.season]+=result;
    
    
    
    
    return acc;
  
    

  },{});    

  console.log(msd);
  }