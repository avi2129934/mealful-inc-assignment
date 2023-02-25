import data from './data.json';

function get_dates(){
  var date = document.getElementById("date");
  if(!date) return;
  date = date.value;
  var scheduled_dates = data.filter(function(data){
    return data.item_date===date;
  });
  console.log(scheduled_dates);
  return group_data(scheduled_dates);
}

function group_data(data){
  if(data===null) return null;
  var obj = [];
    for(let i in data){
        let date = data[i].schedule_time.substring(0,10);
        var found = false;
        for(let j in obj){
            if(obj[j].sched_date===date){
                obj[j].value++;
                found = true;
                break;
            }
        }
        if(found) continue;
        else{
            obj.push({sched_date:date,value:1});
        }
    }
    // console.log(obj);
    return obj;
}

export default get_dates;
