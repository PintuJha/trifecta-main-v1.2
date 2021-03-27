import React from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {


/* 03.05. Menu */

    render() {
        return (

            
            <div className="Menu-sectioccccn">

       <div class="sidebar">
           <div class="main-menu">
               <div class="scroll">
                <ul class="list-unstyled">
                    <li class="active">
                  {/* <Link to="/"  class="list-group-item"> <i class="iconsmind-Shop-4"></i> User</Link> */}
                        <a href="#dashboard">
                            <i class="iconsmind-Shop-4"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#people">
                            <i class="iconsmind-Digital-Drawing"></i> People
                        </a>
                    </li>
                    <li>
                        <a href="#roommanagement">
                            <i class="iconsmind-Air-Balloon"></i>  Room Management  
                        </a>
                    </li>
                    <li>
                        <a href="#reservation">
                            <i class="iconsmind-Pantone"></i> Reservation 
                        </a>
                    </li>
                    <li>
                        <a href="#frontoffice">
                            <i class="iconsmind-Space-Needle"></i> Front Office 
                        </a>
                    </li>
                    <li>
                        <a href="#accounts">
                            <i class="iconsmind-Three-ArrowFork"></i> Accounts
                        </a>
                    </li>

                    <li>
                        <a href="#configuration">
                            <i class="iconsmind-Three-ArrowFork"></i> Configuration
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="sub-menu">
            <div class="scroll">

                <ul class="list-unstyled" data-link="people">
                    <li>
                        {/* <Link to="/User"  class="list-group-item">User</Link> */}
                        {/* <a to="/User"><i class="simple-icon-credit-card"></i>
                             User 
                        </a> */}

                        {/* <Link to="/User"  class="list-group-item"> User</Link> */}
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-list"></i> Staff Record
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-grid"></i>  Access Report
                        </a>
                    </li>
                   
                </ul>
              
              
                <ul class="list-unstyled" data-link="roommanagement">
                 
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-check"></i> Room Category
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-calculator"></i> Floor
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-bubbles"></i> Room No.
                        </a>
                    </li>

                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-bubbles"></i> View Tariff
                        </a>
                    </li>

                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-bubbles"></i> Edit Tariff
                        </a>
                    </li>
                </ul>
              
              
                <ul class="list-unstyled" data-link="reservation">
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-bell"></i> New Reservation
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-badge"></i>  View Reservation Details  
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-control-play"></i> Cancel List 
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-layers"></i> Travel Agent/Third Party Side 
                        </a>
                    </li>

                   
                </ul>
               
               
                <ul class="list-unstyled" data-link="frontoffice">
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-docs"></i> Stay View
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-doc"></i> Check In
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-info"></i> Check Out
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-user-following"></i> Room Shifting
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-user-follow"></i> Booking Modification
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-bubbles"></i> Early Check Out 
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-bubble"></i> EOD Sale Report 
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-people"></i> Meal Report
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-check"></i> Occupancy Report
                        </a>
                    </li>
                   
                </ul>




                <ul class="list-unstyled" data-link="accounts">
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-control-pause"></i> Salary
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-arrow-left mi-subhidden"></i> Rental
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-control-start mi-hidden"></i> Commission List
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-control-start mi-hidden"></i> New Expense
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-control-start mi-hidden"></i> New Purchase
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-control-start mi-hidden"></i> Day Summary
                        </a>
                    </li>

                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-control-start mi-hidden"></i> Sale Report
                        </a>
                    </li>

                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-control-start mi-hidden"></i> P & L Statement
                        </a>
                    </li>
                </ul>

                <ul class="list-unstyled" data-link="configuration">
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-control-pause"></i> GST Info
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0);">
                            <i class="simple-icon-arrow-left mi-subhidden"></i>  GST
                        </a>
                    </li>
                   
                </ul>
         
         
            </div>
        </div>
    </div>
{/* <!-- ======================ASSIDE MENU CODE START====================== --> */}
  

    
    {/* <!-- ======================ASSIDE MENU CODE END====================== --> */}







        {/* <div class="collapse width show" id="sidebar">
            <div class="list-group border-0 text-center text-md-left">

         
            <Link to="/" class="list-group-item d-inline-block collapsed"><i class="fa fa-film"></i> <span class="d-none d-md-inline">Home </span></Link>


                <a href="#menu1" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-dashboard"></i> <span class="d-none d-md-inline">People</span> </a>
                <div class="collapse" id="menu1" data-parent="#sidebar">

                           <Link to="/User"  class="list-group-item">User</Link>
                            <Link class="list-group-item" to="/StaffRecord">Staff Record</Link>
                            <Link class="list-group-item" to="/AccessReport">Access Report</Link>
                           </div>
            
                <a href="#menu3" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-book"></i> <span class="d-none d-md-inline"> Room Management</span></a>
                <div class="collapse" id="menu3" data-parent="#sidebar">
                            <Link class="list-group-item" data-parent="#menu3" to="/RoomCategory">Room Category</Link>
                            <Link class="list-group-item" data-parent="#menu3" to="/Floor">Floor</Link>
                            <Link class="list-group-item" data-parent="#menu3" to="/RoomNo">Room No.</Link>
                            <Link class="list-group-item" data-parent="#menu3" to="/ViewTariff">View Tariff</Link>
                            <Link class="list-group-item" data-parent="#menu3" to="/EditTariff">Edit Tariff</Link>

                            </div>


                <a href="#menu4" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-book"></i> <span class="d-none d-md-inline"> Reservation</span></a>
                <div class="collapse" id="menu4" data-parent="#sidebar">
                            <Link class="list-group-item" data-parent="#menu4" to="/NewReservation">New Reservation</Link>
                            <Link class="list-group-item" data-parent="#menu4" to="/ViewReservation">View Reservation Details</Link>
                            <Link class="list-group-item" data-parent="#menu4" to="/CancelList">Cancel List</Link>
                            <Link class="list-group-item" data-parent="#menu4" to="/TravelAgentThirdParty">Travel Agent / Third Party Side</Link>
                </div>


                <a href="#menu5" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-book"></i> <span class="d-none d-md-inline"> Front Office</span></a>
                <div class="collapse" id="menu5" data-parent="#sidebar">
                            <Link class="list-group-item" data-parent="#menu5" to="/StayView">Stay View</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/CheckIn">Check In</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/CheckOut">Check Out</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/RoomShifting">Room Shifting</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/EditBooking">Booking Modification</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/EarlyCheckOut">Early Check Out</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/EodSaleReport">EOD Sale Report</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/MealReport">Meal Report</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/OccupancyReport">Occupancy Report</Link>
                            <Link class="list-group-item" data-parent="#menu5" to="/DirectBookingReport">Direct Booking Report</Link>
                 
                </div>


                <a href="#menu6" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-book"></i> <span class="d-none d-md-inline"> Configuration</span></a>
                <div class="collapse" id="menu6" data-parent="#sidebar">

                            <Link class="list-group-item" data-parent="#menu6" to="/Salary">Salary</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/Rental">Rental</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/CommissionList">Commission List</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/NewExpense">New Expense</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/NewPurchase">New Purchase</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/DaySummary">Day Summary</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/SaleReport">Sale Report</Link>
                            <Link class="list-group-item" data-parent="#menu6" to="/Statement">P & L Statement</Link>
                 
                </div>


                <a href="#menu7" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-book"></i> <span class="d-none d-md-inline"> Menu</span></a>
                <div class="collapse" id="menu7" data-parent="#sidebar">
                    
                                <Link class="list-group-item" data-parent="#menu7" to="/GstInfo">GST Info</Link>
                                <Link class="list-group-item" data-parent="#menu7" to="/Gst">GST</Link>
                 
                </div>




           
            </div>
        </div> */}
      






                {/*

                 <ul>
                    <li><Link to="/">Home</Link></li>
                    <br/>
                    <li>
                        People
                        <ul>
                            <li><Link to="/User">User</Link></li>
                            <li><Link to="/StaffRecord">Staff Record</Link></li>
                            <li><Link to="/AccessReport">Access Report</Link></li>
                        </ul>
                    </li>
                    <br/>
                    <li>
                        Room Management
                        <ul>
                            <li><Link to="/RoomCategory">Room Category</Link></li>
                            <li><Link to="/Floor">Floor</Link></li>
                            <li><Link to="/RoomNo">Room No.</Link></li>
                            <li><Link to="/ViewTariff">View Tariff</Link></li>
                            <li><Link to="/EditTariff">Edit Tariff</Link></li>
                        </ul>
                    </li>
                    <br/>
                    <li>
                        Reservation
                        <ul>
                            <li><Link to="/NewReservation">New Reservation</Link></li>
                            <li><Link to="/ViewReservation">View Reservation Details</Link></li>
                            <li><Link to="/CancelList">Cancel List</Link></li>
                            <li><Link to="/TravelAgentThirdParty">Travel Agent / Third Party Side</Link></li>
                        </ul>
                    </li>
                    <br/>
                    <li>
                        Front Office
                        <ul>
                            <li><Link to="/StayView">Stay View</Link></li>
                            <li><Link to="/CheckIn">Check In</Link></li>
                            <li><Link to="/CheckOut">Check Out</Link></li>
                            <li><Link to="/RoomShifting">Room Shifting</Link></li>
                            <li><Link to="/EditBooking">Booking Modification</Link></li>
                            <li><Link to="/EarlyCheckOut">Early Check Out</Link></li>
                            <li><Link to="/EodSaleReport">EOD Sale Report</Link></li>
                            <li><Link to="/MealReport">Meal Report</Link></li>
                            <li><Link to="/OccupancyReport">Occupancy Report</Link></li>
                            <li><Link to="/DirectBookingReport">Direct Booking Report</Link></li>
                        </ul>
                    </li>
                    <br/>
                    <li>
                        Configuration
                        <ul>
                            <li><Link to="/Salary">Salary</Link></li>
                            <li><Link to="/Rental">Rental</Link></li>
                            <li><Link to="/CommissionList">Commission List</Link></li>
                            <li><Link to="/NewExpense">New Expense</Link></li>
                            <li><Link to="/NewPurchase">New Purchase</Link></li>
                            <li><Link to="/DaySummary">Day Summary</Link></li>
                            <li><Link to="/SaleReport">Sale Report</Link></li>
                            <li><Link to="/Statement">P & L Statement</Link></li>
                        </ul>
                    </li>
                    <br/>
                    <li>
                        Menu
                        <ul>
                            <li><Link to="/GstInfo">GST Info</Link></li>
                            <li><Link to="/Gst">GST</Link></li>
                        </ul>
                    </li>
                </ul> 
                      
            */}



            </div>
        )
    }
}