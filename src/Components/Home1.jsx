import Images from "../assets/images/index";

const Home1 = () => {
  return (
      <div className="container-scroller">
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
            <a className="sidebar-brand brand-logo" href="index.html"> <img src={Images.logo} alt="logo" /> </a>
            <a className="sidebar-brand brand-logo-mini" href="index.html"> <img src={Images.logo_mini} alt="logo" /> </a>
        </div>
        <ul className="nav">
            <li className="nav-item profile">
                <div className="profile-desc">
                    <div className="profile-pic">
                        <div className="count-indicator">
                            <img className="img-xs rounded-circle" src={Images.face_15} alt="" />
                            <span className="count bg-success"></span>
                        </div>
                        <div className="profile-name">
                            <h5 className="mb-0 font-weight-normal text-white">Abubakar Salihu</h5>
                            <span>Gold Member</span>
                        </div>
                    </div>
                    <a href="#" id="profile-dropdown" data-toggle ="drop-down"> <i className="mdi mdi-dots-vertical"></i> </a>
                    <div className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                        <a href="#" className="dropdown-item preview-item">
                            <div className="preview-thumbnail">
                                <div className="preview-icon bg-dark rounded-circle">
                                    <i className="mdi mdi-settings text-primary"></i>
                                </div>
                            </div>
                            <div className="preview-item-content">
                                <p className="preview-subject ellipsis mb-1 text-small">Acount settings</p>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item preview-item">
                            <div className="preview-thumbnail">
                                <div className="preview-icon bg-dark rounded-circle">
                                    <i className="mdi mdi-onepassword text-info"></i>
                                </div>
                            </div>
                            <div className="preview-item-content">
                                <p className="preview-subject ellipsis mb-1 text-small">Change Password</p>
                            </div>
                        </a>
                        <div className="dropdown-divider"></div>
                        <a href="#" className="dropdown-item preview-item">
                            <div className="preview-thumbnail">
                                <div className="preview-icon bg-dark rounded-circle">
                                    <i className="mdi mdi-calendar-today text-success"></i>
                                </div>
                            </div>
                            <div className="preview-item-content">
                                <p className="preview-subject ellipsis mb-1 text-small">To-do list</p>
                            </div>
                        </a>
                    </div>
                </div>
            </li>
            <li className="nav-item nav-category">
                <span className="nav-link">Navigation</span>
            </li>
            <li className="nav-item menu-items">
                <a href="index.html" className="nav-link">
                    <span className="menu-icon">
                        <i className="mdi mdi-speedometer"></i>
                    </span>
                    <span className="manu-title">Dashboard</span>
                </a>
            </li>
            <li className="nav-item menu-items">
                <a href="#ui-basic" data-toggle="collapse" aria-expanded="false" aria-controls="ui-basic" className="nav-link">
                    <span className="menu-icon">
                        <i className="mdi mdi-laptop"></i>
                    </span>
                    <span className="menu-title">Basic UI Elements</span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="ui-basic">
                    <ul className="nav flex-menu sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                    </ul>
                </div>
            </li>
            <li className="nav-item menu-items">
                <a href="pages/forms/basic_elements.html" className="nav-link">
                    <span className="menu-icon">
                        <i className="mdi mdi-playlist-play"></i>
                    </span>
                    <span className="menu-title">Form Elements</span>
                </a>
            </li>
            <li className="nav-item menu-items">
                <a href="pages/tables/basic-table.html" className="nav-link">
                    <span className="menu-icon">
                        <i className="mdi mdi-table-large"></i>
                    </span>
                    <span className="menu-title">Tables</span>
                </a>
            </li>
            <li className="nav-item menu-items">
                <a href="pages/charts/chartjs.html" className="nav-link">
                    <span className="menu-icon">
                        <i className="mdi mdi-chart-bar"></i>
                    </span>
                    <span className="menu-title">Charts</span>
                </a>
            </li>
            <li className="nav-item menu-items">
                <a href="pages/icons/mdi.html" className="nav-link">
                    <span className="menu-icon">
                        <i className="mdi mdi-contacts"></i>
                    </span>
                    <span className="menu-title">Icons</span>
                </a>
            </li>
            <li className="nav-item menu-items">
                <a href="#auth" data-toggle ="collapse"  className="nav-link" aria-expanded="false" aria-controls="auth">
                    <span className="menu-icon">
                        <i className="mdi mdi-security"></i>
                    </span>
                    <span className="menu-title">User Pages</span>
                    <i className="menu-arrow"></i>
                </a>
                <div className="collapse" id="auth">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item"> <a class="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                        <li class="nav-item"> <a class="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                        <li class="nav-item"> <a class="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                        <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
                        <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Register </a></li>
                    </ul>
                </div>
            </li>
        </ul>
      </nav>
      
      {/* Partial */}
      <div className="container-fluid page-body-wrapper">
            <nav className="navbar p-0 fixed-top  d-flex flex-row ">
                <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                    <a href="index.html" className="navbar-brand brand-logo-mini"> <img src={Images.logo_mini} alt="logo" /></a>
                </div>
                <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle ="minimize">
                        <span className="mdi mdi-menu"></span>
                    </button>
                    <ul className="navbar-nav w-100">
                        <li className="nav-item w-100">
                            <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                                <input type="text" placeholder="Search products" className="form-control" />
                            </form>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                        <li className="nav-item dropdown d-none d-lg-block">
                            <a  className="nav-link btn btn-success create-new-button" id="createbuttonDropdown" data-toggle ="dropdown" aria-expanded="false">
                                +Create New Project</a>
                                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="createbuttonDropdown">
                                    <h6 className="p-3 mb-0">Projects</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-file-outline text-primary"></i>
                                            </div>
                                        </div>
                                            <div class="preview-item-content">
                                            <p class="preview-subject ellipsis mb-1">Software Development</p>
                                            </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                            <div class="preview-icon bg-dark rounded-circle">
                                                <i class="mdi mdi-web text-info"></i>
                                            </div>
                                        </div>
                                        <div class="preview-item-content">
                                            <p class="preview-subject ellipsis mb-1">UI Development</p>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item preview-item">
                                        <div class="preview-thumbnail">
                                        <div class="preview-icon bg-dark rounded-circle">
                                            <i class="mdi mdi-layers text-danger"></i>
                                        </div>
                                        </div>
                                        <div class="preview-item-content">
                                        <p class="preview-subject ellipsis mb-1">Software Testing</p>
                                        </div>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <p class="p-3 mb-0 text-center">See all projects</p>
                                </div>
                        </li>
                        {/* Why is this guy not displaying??? */}
                        <li class="nav-item nav-settings d-none d-lg-block">
                            <a class="nav-link" href="#">
                            <i class="mdi mdi-view-grid text-white"> </i>
                            </a>
                        </li>
                        <li className="nav-item-dropdown border-left">
                            <a class="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                                <i class="mdi mdi-email text-white"></i>
                                <span class="count bg-success"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                                <h6 className="p-3 mb-0">Messages</h6>
                                <div className="dropdown-divider"></div>
                                <a  className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src={Images.face_4} alt="" className="rounded-circle profile-pic" />
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1">Mark send you a message</p>
                                        <p className="text-muted mb-0">1 Minute ago</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a  className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src={Images.face_2} alt="image" className="rounded-circle profile-pic" />
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1">Cregh send you a message</p>
                                        <p className="text-muted mb-0">15 Minutes ago</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a  className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <img src={Images.face_3} alt="image" className="rounded-circle profile-pic" />
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1">Profile picture updated</p>
                                        <p className="text-muted mb-0">18 Minutes ago</p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <p className="p-3 mb-0 text-center">4 new messages</p>
                            </div>
                        </li>
                        <li className="nav-item dropdown border-left">
                            <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" >
                                <i className="mdi mdi-bell"></i>
                                <span className="count bg-danger"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                                <h6 class="p-3 mb-0">Notifications</h6>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                    <div class="preview-icon bg-dark rounded-circle">
                                        <i class="mdi mdi-calendar text-success"></i>
                                    </div>
                                    </div>
                                    <div class="preview-item-content">
                                    <p class="preview-subject mb-1">Event today</p>
                                    <p class="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
                                    </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                    <div class="preview-icon bg-dark rounded-circle">
                                        <i class="mdi mdi-settings text-danger"></i>
                                    </div>
                                    </div>
                                    <div class="preview-item-content">
                                    <p class="preview-subject mb-1">Settings</p>
                                    <p class="text-muted ellipsis mb-0"> Update dashboard </p>
                                    </div>
                                </a>
                                 <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                    <div class="preview-icon bg-dark rounded-circle">
                                        <i class="mdi mdi-link-variant text-warning"></i>
                                    </div>
                                    </div>
                                    <div class="preview-item-content">
                                    <p class="preview-subject mb-1">Launch Admin</p>
                                    <p class="text-muted ellipsis mb-0"> New admin wow! </p>
                                    </div>
                                </a>
                                 <div class="dropdown-divider"></div>
                                <div class="dropdown-divider"></div>
                                <p class="p-3 mb-0 text-center">See all notifications</p>    
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                             <a class="nav-link" id="profileDropdown" href="#" data-toggle="dropdown">
                                <div class="navbar-profile">
                                    <img className="img-xs rounded-circle" src={Images.face_15} alt=""/>
                                    <p className="mb-0 d-none d-sm-block navbar-profile-name">Abubakar Salihu</p>
                                    <i className="mdi mdi-menu-down d-none d-sm-block"></i>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="profileDropdown">
                                 <h6 class="p-3 mb-0">Profile</h6>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                    <div class="preview-icon bg-dark rounded-circle">
                                        <i class="mdi mdi-settings text-success"></i>
                                    </div>
                                    </div>
                                    <div class="preview-item-content">
                                    <p class="preview-subject mb-1">Settings</p>
                                    </div>
                                </a>
                                 <div class="dropdown-divider"></div>
                                <a class="dropdown-item preview-item">
                                    <div class="preview-thumbnail">
                                    <div class="preview-icon bg-dark rounded-circle">
                                        <i class="mdi mdi-logout text-danger"></i>
                                    </div>
                                    </div>
                                    <div class="preview-item-content">
                                    <p class="preview-subject mb-1">Log out</p>
                                    </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <p class="p-3 mb-0 text-center">Advanced settings</p>
                            </div>
                        </li>
                    </ul>
                    <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                        <span class="mdi mdi-format-line-spacing"></span>
                    </button>
                </div>
            </nav>
            {/* Partial */}
            <div className="main-panel">
                <div className="content-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-9">
                                            <div className="d-flex align-item-center align-self-start">
                                                <h3 className="mb-0">$12.34</h3>
                                                <p class="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>  
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="icon icon-box-success ">
                                                <span class="mdi mdi-arrow-top-right icon-item"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="text-muted font-weight-normal">Potential growth</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-9">
                                            <div class="d-flex align-items-center align-self-start">
                                            <h3 class="mb-0">$17.34</h3>
                                            <p class="text-success ml-2 mb-0 font-weight-medium">+11%</p>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="icon icon-box-success">
                                            <span class="mdi mdi-arrow-top-right icon-item"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="text-muted font-weight-normal">Revenue current</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-9">
                                            <div class="d-flex align-items-center align-self-start">
                                                <h3 class="mb-0">$12.34</h3>
                                                <p class="text-danger ml-2 mb-0 font-weight-medium">-2.4%</p>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="icon icon-box-danger">
                                                <span class="mdi mdi-arrow-bottom-left icon-item"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="text-muted font-weight-normal">Daily Income</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-9">
                                            <div class="d-flex align-items-center align-self-start">
                                                <h3 class="mb-0">$31.53</h3>
                                                <p class="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                                            </div>
                                        </div>
                                        <div class="col-3">
                                            <div class="icon icon-box-success ">
                                                <span class="mdi mdi-arrow-top-right icon-item"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="text-muted font-weight-normal">Expense current</h6>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>    
            </div>    
        </div>
    </div>
  );
};

export default Home1;
