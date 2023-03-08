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
        let t = data[i].schedule_time.substring(11);
        var found = false;
        for(let j in obj){
            if(obj[j].sched_date===date){
                obj[j].time.push(t);
                found = true;
                break;
            }
        }
        if(found) continue;
        else{
            obj.push({sched_date:date,time:[t]});
        }
    }
    console.log(obj);
    return obj;
}

function groupTimesBySlot(times) {
  
  const slots = {
    '9AM-12PM': [],
    '12PM-3PM': [],
    '3PM-6PM': [],
    '6PM-9PM': [],
    '9PM-12AM':[],
    '12AM-3AM':[],
    '3AM-6AM':[],
    '6AM-9AM':[]
  };

  // loop through each time and add it to the appropriate time slot
  for (let i = 0; i < times.length; i++) {
    const time = times[i];
    const hour = parseInt(time.split(':')[0]); // get the hour part of the time string

    if (hour >= 9 && hour < 12) {
      slots['9AM-12PM'].push(time);
    } else if (hour >= 12 && hour < 15) {
      slots['12PM-3PM'].push(time);
    } else if (hour >= 15 && hour < 18) {
      slots['3PM-6PM'].push(time);
    } else if (hour >= 18 && hour < 21) {
      slots['6PM-9PM'].push(time);
    } else if (hour >= 18 && hour < 24) {
      slots['9PM-12AM'].push(time);
    }  else if (hour >= 0 && hour < 3) {
      slots['12AM-3AM'].push(time);
    }else if (hour >= 3 && hour < 6) {
      slots['3AM-6AM'].push(time);
    }
    else{
      slots['6AM-9AM'].push(time);
    }
  }
  var arr = [];
  for(var obj in slots){
    if(slots[obj].length!==0){
      arr.push({'sched_slot':obj,value:slots[obj].length});
    }
  }
  console.log(arr);
  return arr;
}
export {get_dates, groupTimesBySlot} ;
