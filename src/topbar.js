import 'bootstrap/dist/css/bootstrap.min.css';
function TopBar(){
    return(
        <div className='row' id = "topbar_elements">
            <div id= "icon_div" className="col-1"><i class="fa fa-bars"></i></div>
            <div className="col-10"><span className="text-center" id = "topbar-heading">MEALFUL INC</span></div>
            <div className='col-1'></div>
        </div>
    )
};

export default TopBar;