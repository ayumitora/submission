function get_achievement(points){
    let sum = 0;
    for(let i = 0;i<number;i++)
    sum += points[i];
    
    if(sum >= 100*0.8/number){
        return"A";
    }else if(sum >= 100*0.6/number){
        return"B";
    }else if(sum >= 100*0.4/number){
        return"C";
    }else{
        return"D";    
    }
};


function get_pass_or_failure(points){
  let judge = "合格";
  for(let i=0; i<number; i++){
    if(points[i]<60){
      judge= "不合格";
      break;
    }
  }
  return judge
}



function judgement(points){
  let achievement = get_achievement(points);
  let pass_or_failure =  get_pass_or_failure(points);
  return `あなたの成績は${achievement}です。${pass_or_failure}です`;
}

let points = [60,100,80,80,70,80];
let number = points.length;

console.log(judgement(points));