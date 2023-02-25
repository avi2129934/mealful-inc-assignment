import 'bootstrap/dist/css/bootstrap.min.css';
import get_dates from './functions';


function DatePcker() {
  return (
    <div>
      <label className = "bg bg-info" htmlFor="date" style = {{margin: 10, borderRadius : 5,inlineSize:50}}>Date</label>
      <input type="date" id="date" name="date"></input>
    </div>
  );
}

export default DatePcker;
