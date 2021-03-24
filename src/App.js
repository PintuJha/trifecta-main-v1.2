import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className="App">



    <nav className="navbar fixed-top">
        <div className="d-flex align-items-center navbar-left">
            <a href="#" className="menu-button d-none d-md-block">
                <svg className="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
                    <rect x="0.48" y="0.5" width="7" height="1" />
                    <rect x="0.48" y="7.5" width="7" height="1" />
                    <rect x="0.48" y="15.5" width="7" height="1" />
                </svg>
                <svg className="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                    <rect x="1.56" y="0.5" width="16" height="1" />
                    <rect x="1.56" y="7.5" width="16" height="1" />
                    <rect x="1.56" y="15.5" width="16" height="1" />
                </svg>
            </a>

            <a href="#" className="menu-button-mobile d-xs-block d-sm-block d-md-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
                    <rect x="0.5" y="0.5" width="25" height="1" />
                    <rect x="0.5" y="7.5" width="25" height="1" />
                    <rect x="0.5" y="15.5" width="25" height="1" />
                </svg>
            </a>

            <div className="search" data-search-path="Layouts.Search.html?q=">
                <input placeholder="Search..." />
                <span className="search-icon">
                    <i className="simple-icon-magnifier"></i>
                </span>
            </div>
        </div>


        <a className="navbar-logo" href="#.">
            <span className="logo d-none d-xs-block"></span>
            <span className="logo-mobile d-block d-xs-none"></span>
        </a>

        <div className="navbar-right">
            <div className="header-icons d-inline-block align-middle">
                          <div className="position-relative d-none d-sm-inline-block">
                    <button className="header-icon btn btn-empty" type="button" id="iconMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i className="simple-icon-grid"></i>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right mt-3  position-absolute" id="iconMenuDropdown">
                        <a href="#" className="icon-menu-item">
                            <i className="iconsmind-Equalizer d-block"></i>
                            <span>Settings</span>
                        </a>

                        <a href="#" className="icon-menu-item">
                            <i className="iconsmind-MaleFemale d-block"></i>
                            <span>Users</span>
                        </a>

                        <a href="#" className="icon-menu-item">
                            <i className="iconsmind-Puzzle d-block"></i>
                            <span>Components</span>
                        </a>

                        <a href="#" className="icon-menu-item">
                            <i className="iconsmind-Bar-Chart d-block"></i>
                            <span>Profits</span>
                        </a>

                        <a href="#" className="icon-menu-item">
                            <i className="iconsmind-File-Chart d-block"></i>
                            <span>Surveys</span>
                        </a>

                        <a href="#" className="icon-menu-item">
                            <i className="iconsmind-Suitcase d-block"></i>
                            <span>Tasks</span>
                        </a>

                    </div>
                </div>

                <div className="position-relative d-inline-block">
                    <button className="header-icon btn btn-empty" type="button" id="notificationButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i className="simple-icon-bell"></i>
                        <span className="count">3</span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right mt-3 scroll position-absolute" id="notificationDropdown">

                        <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                            <a href="#">
                                <img src="http://hotel.trifectahms.in/image/18.jpg" alt="Notification Image" className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                            </a>
                            <div className="pl-3 pr-2">
                                <a href="#">
                                    <p className="font-weight-medium mb-1">Joisse Kaycee just sent a new comment!</p>
                                    <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                </a>
                            </div>
                        </div>

                        <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                            <a href="#">
                                <img src="http://hotel.trifectahms.in/image/18.jpg" alt="Notification Image" className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                            </a>
                            <div className="pl-3 pr-2">
                                <a href="#">
                                    <p className="font-weight-medium mb-1">1 item is out of stock!</p>
                                    <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                </a>
                            </div>
                        </div>


                        <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                            <a href="#">
                                <img src="http://hotel.trifectahms.in/image/18.jpg" alt="Notification Image" className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                            </a>
                            <div className="pl-3 pr-2">
                                <a href="#">
                                    <p className="font-weight-medium mb-1">New order received! It is total $147,20.</p>
                                    <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                </a>
                            </div>
                        </div>

                        <div className="d-flex flex-row mb-3 pb-3 ">
                            <a href="#">
                                <img src="http://hotel.trifectahms.in/image/18.jpg" alt="Notification Image" className="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                            </a>
                            <div className="pl-3 pr-2">
                                <a href="#">
                                    <p className="font-weight-medium mb-1">3 items just added to wish list by a user!</p>
                                    <p className="text-muted mb-0 text-small">09.04.2018 - 12:45</p>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <button className="header-icon btn btn-empty d-none d-sm-inline-block" type="button" id="fullScreenButton">
                    <i className="simple-icon-size-fullscreen"></i>
                    <i className="simple-icon-size-actual"></i>
                </button>

            </div>

            <div className="user d-inline-block">
                <button className="btn btn-empty p-0" type="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <span className="name">Sarah Kortney</span>
                    <span>
                        <img alt="Profile Picture" src="http://hotel.trifectahms.in/image/18.jpg" />
                    </span>
                </button>

                <div className="dropdown-menu dropdown-menu-right mt-3">
                    <a className="dropdown-item" href="#">Account</a>
                    <a className="dropdown-item" href="#">Features</a>
                    <a className="dropdown-item" href="#">History</a>
                    <a className="dropdown-item" href="#">Support</a>
                    <a className="dropdown-item" href="#">Sign out</a>
                </div>
            </div>
        </div>
    </nav>

    <div className="sidebar">
        <div className="main-menu">
            <div className="scroll">
                <ul className="list-unstyled">
                    <li className="active">
                        <a href="#dashboard">
                            <i className="iconsmind-Shop-4"></i>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#people">
                            <i className="iconsmind-Digital-Drawing"></i> People
                        </a>
                    </li>
                    <li>
                        <a href="#roommanagement">
                            <i className="iconsmind-Air-Balloon"></i>  Room Management  
                        </a>
                    </li>
                    <li>
                        <a href="#reservation">
                            <i className="iconsmind-Pantone"></i> Reservation 
                        </a>
                    </li>
                    <li>
                        <a href="#frontoffice">
                            <i className="iconsmind-Space-Needle"></i> Front Office 
                        </a>
                    </li>
                    <li>
                        <a href="#accounts">
                            <i className="iconsmind-Three-ArrowFork"></i> Accounts
                        </a>
                    </li>

                    <li>
                        <a href="#configuration">
                            <i className="iconsmind-Three-ArrowFork"></i> Configuration
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="sub-menu">
            <div className="scroll">

                <ul className="list-unstyled" data-link="people">
                    <li>
                        <a href="#.">
                            <i className="simple-icon-credit-card"></i> User 
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-list"></i> Staff Record
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-grid"></i>  Access Report
                        </a>
                    </li>
                   
                </ul>
              
              
                <ul className="list-unstyled" data-link="roommanagement">
                 
                    <li>
                        <a href="#.">
                            <i className="simple-icon-check"></i> Room Category
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-calculator"></i> Floor
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-bubbles"></i> Room No.
                        </a>
                    </li>

                    <li>
                        <a href="#.">
                            <i className="simple-icon-bubbles"></i> View Tariff
                        </a>
                    </li>

                    <li>
                        <a href="#.">
                            <i className="simple-icon-bubbles"></i> Edit Tariff
                        </a>
                    </li>
                </ul>
              
              
                <ul className="list-unstyled" data-link="reservation">
                    <li>
                        <a href="#.">
                            <i className="simple-icon-bell"></i> New Reservation
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-badge"></i>  View Reservation Details  
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-control-play"></i> Cancel List 
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-layers"></i> Travel Agent/Third Party Side 
                        </a>
                    </li>

                   
                </ul>
               
               
                <ul className="list-unstyled" data-link="frontoffice">
                    <li>
                        <a href="#.">
                            <i className="simple-icon-docs"></i> Stay View
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-doc"></i> Check In
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-info"></i> Check Out
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-user-following"></i> Room Shifting
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-user-follow"></i> Booking Modification
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-bubbles"></i> Early Check Out 
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-bubble"></i> EOD Sale Report 
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-people"></i> Meal Report
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-check"></i> Occupancy Report
                        </a>
                    </li>
                   
                </ul>




                <ul className="list-unstyled" data-link="accounts">
                    <li>
                        <a href="#.">
                            <i className="simple-icon-control-pause"></i> Salary
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-arrow-left mi-subhidden"></i> Rental
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-control-start mi-hidden"></i> Commission List
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-control-start mi-hidden"></i> New Expense
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-control-start mi-hidden"></i> New Purchase
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-control-start mi-hidden"></i> Day Summary
                        </a>
                    </li>

                    <li>
                        <a href="#.">
                            <i className="simple-icon-control-start mi-hidden"></i> Sale Report
                        </a>
                    </li>

                    <li>
                        <a href="#.">
                            <i className="simple-icon-control-start mi-hidden"></i> P & L Statement
                        </a>
                    </li>
                </ul>

                <ul className="list-unstyled" data-link="configuration">
                    <li>
                        <a href="#.">
                            <i className="simple-icon-control-pause"></i> GST Info
                        </a>
                    </li>
                    <li>
                        <a href="#.">
                            <i className="simple-icon-arrow-left mi-subhidden"></i>  GST
                        </a>
                    </li>
                   
                </ul>
         
         
            </div>
        </div>
    </div>


    <main>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">

                    <h1 type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Add Room Category</h1>
            
                          <div class="modal fade" id="myModal">
                              <div class="modal-dialog modal-lg">
                                  <div class="modal-content">


                                      <div class="modal-header">
                                          <h4 class="modal-title">Add Category</h4>
                                          <button type="button" class="close" data-dismiss="modal">&times;</button>
                                      </div>


                                      <div class="modal-body">
                                          <form action="#.">
                                              <div class="form-group">
                                                  <label for="text">Room Category
</label>
                                                  <input type="text" class="form-control" placeholder="Room Category" id="text" />
                                              </div>

                                              <div class="form-group">
                                                  <label for="text">Short Code

</label>
                                                  <input type="text" class="form-control" placeholder="Short Code" id="text" />
                                              </div>

                                              <div class="form-group">
                                                  <label for="text">No. Of Rooms
</label>
                                                  <input type="text" class="form-control" placeholder="Room Category" id="text" />
                                              </div>




                                          </form>
                                      </div>


                                      <div class="modal-footer">
                                          <button type="button" class="btn btn-primary">Save</button>
                                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                      </div>

                                  </div>
                              </div>
                          </div>


                    <div className="separator mb-5"></div>




                </div>
            </div>

                  <section>
                      <div className="row">
                          <div className="col-md-12">
                          <div class="col-xs-12">
                          <table summary="This table shows how to create responsive tables using Datatables' extended functionality" class="table table-bordered table-hover dt-responsive">
      
        <thead>
          <tr>
            <th>Country</th>
            <th>Languages</th>
            <th>Population</th>
            <th>Median Age</th>
            <th>Area (Km²)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Argentina</td>
            <td>Spanish (official), English, Italian, German, French</td>
            <td>41,803,125</td>
            <td>31.3</td>
            <td>2,780,387</td>
          </tr>
          <tr>
            <td>Australia</td>
            <td>English 79%, native and other languages</td>
            <td>23,630,169</td>
            <td>37.3</td>
            <td>7,739,983</td>
          </tr>
          <tr>
            <td>Greece</td>
            <td>Greek 99% (official), English, French</td>
            <td>11,128,404</td>
            <td>43.2</td>
            <td>131,956</td>
          </tr>
          <tr>
            <td>Luxembourg</td>
            <td>Luxermbourgish (national) French, German (both administrative)</td>
            <td>536,761</td>
            <td>39.1</td>
            <td>2,586</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
        
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>Russian, others</td>
            <td>142,467,651</td>
            <td>38.4</td>
            <td>17,076,310</td>
          </tr>
          <tr>
            <td>Sweden</td>
            <td>Swedish, small Sami- and Finnish-speaking minorities</td>
            <td>9,631,261</td>
            <td>41.1</td>
            <td>449,954</td>
          </tr>
        </tbody>
       
      </table>
    </div>
                          </div>
                      </div>
                  </section>


        </div>
    </main>

    </div>
  );
}

export default App;
