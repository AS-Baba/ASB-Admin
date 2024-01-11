import { Images } from "../images/index";
import {Link, Route, Routes, Outlet} from "react-router-dom";
import React from "react";
import DashBoard from "./DashBoard";
import Users from "../Components/Users/users";

const Blank = () => {

    return (
        <div className="container-scroller">
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                    <a className="sidebar-brand brand-logo" href="/">
                        <img src={Images.logo} alt="logo" />
                    </a>
                    <a className="sidebar-brand brand-logo-mini" href="#">
                        <img src={Images.logo_mini} alt="logo" />
                    </a>
                </div>
                <ul className="nav">
                    <li className="nav-item profile">
                        <div className="profile-desc">
                            <div className="profile-pic">
                                <div className="count-indicator">
                                    <img
                                        className="img-xs rounded-circle "
                                        src={Images.face_15}
                                        alt=""
                                    />
                                    <span className="count bg-success"></span>
                                </div>
                                <div className="profile-name">
                                    <h5 className="mb-0 font-weight-normal">Abubakar Salihu</h5>
                                    <span>Gold Member</span>
                                </div>
                            </div>
                            <a href="#" id="profile-dropdown" data-toggle="dropdown">
                                <i className="mdi mdi-dots-vertical"/>
                            </a>

                            <div
                                className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
                                aria-labelledby="profile-dropdown"
                            >
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-settings text-primary"/>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">
                                            Account settings
                                        </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-onepassword  text-info"/>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">
                                            Change Password
                                        </p>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="dropdown-item preview-item">
                                    <div className="preview-thumbnail">
                                        <div className="preview-icon bg-dark rounded-circle">
                                            <i className="mdi mdi-calendar-today text-success"/>
                                        </div>
                                    </div>
                                    <div className="preview-item-content">
                                        <p className="preview-subject ellipsis mb-1 text-small">
                                            To-do list
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item nav-category">
                        <span className="nav-link">Navigation</span>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="#">
              <span className="menu-icon">
                <i className="mdi mdi-speedometer"/>
              </span>
                            <span className="menu-title">Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item menu-items">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#ui-basic"
                            aria-expanded="false"
                            aria-controls="ui-basic"
                        >
              <span className="menu-icon">
                <i className="mdi mdi-laptop" />
              </span>
                            <span className="menu-title">Basic UI Elements</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="ui-basic">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    {" "}
                                    <a className="nav-link" href="#">
                                        Buttons
                                    </a>
                                </li>
                                <li className="nav-item">
                                    {" "}
                                    <a
                                        className="nav-link"
                                        href="#"
                                    >
                                        Dropdowns
                                    </a>
                                </li>
                                <li className="nav-item">
                                    {" "}
                                    <a
                                        className="nav-link"
                                        href="#"
                                    >
                                        Typography
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="#">

                            <span className="menu-icon">
                                <i className="mdi mdi-playlist-play" />
                            </span>
                            <Link to="/users">
                                <span className="menu-title"> All Users</span>
                            </Link>
                        </a>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="#">
              <span className="menu-icon">
                <i className="mdi mdi-table-large" />
              </span>
                            <span className="menu-title">Tables</span>
                        </a>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="pages/charts/chartjs.html">
              <span className="menu-icon">
                <i className="mdi mdi-chart-bar" />
              </span>
                            <span className="menu-title">Charts</span>
                        </a>
                    </li>
                    <li className="nav-item menu-items">
                        <a className="nav-link" href="pages/icons/mdi.html">
              <span className="menu-icon">
                <i className="mdi mdi-contacts" />
              </span>
                            <span className="menu-title">Icons</span>
                        </a>
                    </li>
                    <li className="nav-item menu-items">
                        <a
                            className="nav-link"
                            data-toggle="collapse"
                            href="#auth"
                            aria-expanded="false"
                            aria-controls="auth"
                        >
              <span className="menu-icon">
                <i className="mdi mdi-security" />
              </span>
                            <span className="menu-title">User Pages</span>
                            <i className="menu-arrow" />
                        </a>
                        <div className="collapse" id="auth">
                            <ul className="nav flex-column sub-menu">
                                <li className="nav-item">
                                    {" "}
                                    <a className="nav-link" href="#">
                                        {" "}
                                        Blank Page{" "}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    {" "}
                                    <a className="nav-link">
                                        {" "}
                                        <Link to="error404">404</Link>{" "}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    {" "}
                                    <a className="nav-link">
                                        {" "}
                                        <Link to="error500">500</Link>{" "}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    {" "}
                                    <a className="nav-link" href="#">
                                        {" "}
                                        <Link to="Login">Login</Link>{" "}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    {" "}
                                    <a className="nav-link" >
                                        {" "}
                                        <Link to="register">Register</Link>{" "}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className="container-fluid page-body-wrapper">
                <nav className="navbar p-0 fixed-top d-flex flex-row">
                    <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                        <a className="navbar-brand brand-logo-mini" href="#">
                            <img src={Images.logo_mini} alt="logo" />
                        </a>
                    </div>
                    <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                        <button className="navbar-toggler navbar-toggler align-self-center" type="button"
                                data-toggle="minimize">
                            <span className="mdi mdi-menu"></span>
                        </button>
                        <ul className="navbar-nav w-100">
                            <li className="nav-item w-100">
                                <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search products"
                                    />
                                </form>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-nav-right">
                            <li className="nav-item dropdown d-none d-lg-block">
                                <a
                                    className="nav-link btn btn-success create-new-button"
                                    id="createbuttonDropdown"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                    href="#"
                                >
                                    + Create New Project
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="createbuttonDropdown"
                                >
                                    <h6 className="p-3 mb-0">Projects</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-file-outline text-primary" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">
                                                Software Development
                                            </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-web text-info" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">
                                                UI Development
                                            </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-layers text-danger" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">
                                                Software Testing
                                            </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <p className="p-3 mb-0 text-center">See all projects</p>
                                </div>
                            </li>
                            <li className="nav-item nav-settings d-none d-lg-block">
                                <a className="nav-link" href="#">
                                    <i className="mdi mdi-view-grid" />
                                </a>
                            </li>
                            <li className="nav-item dropdown border-left">
                                <a
                                    className="nav-link count-indicator dropdown-toggle"
                                    id="messageDropdown"
                                    href="#"
                                    data-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="mdi mdi-email" />
                                    <span className="count bg-success"></span>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="messageDropdown"
                                >
                                    <h6 className="p-3 mb-0">Messages</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img
                                                src={Images.face_4}
                                                alt=""
                                                className="rounded-circle profile-pic"
                                            />
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">
                                                Mark send you a message
                                            </p>
                                            <p className="text-muted mb-0"> 1 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img
                                                src={Images.face_2}
                                                alt=""
                                                className="rounded-circle profile-pic"
                                            />
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">
                                                Cregh send you a message
                                            </p>
                                            <p className="text-muted mb-0"> 15 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <img
                                                src={Images.face_3}
                                                alt=""
                                                className="rounded-circle profile-pic"
                                            />
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject ellipsis mb-1">
                                                Profile picture updated
                                            </p>
                                            <p className="text-muted mb-0"> 18 Minutes ago </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <p className="p-3 mb-0 text-center">4 new messages</p>
                                </div>
                            </li>
                            <li className="nav-item dropdown border-left">
                                <a
                                    className="nav-link count-indicator dropdown-toggle"
                                    id="notificationDropdown"
                                    href="#"
                                    data-toggle="dropdown"
                                >
                                    <i className="mdi mdi-bell" />
                                    <span className="count bg-danger"></span>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="notificationDropdown"
                                >
                                    <h6 className="p-3 mb-0">Notifications</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-calendar text-success" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject mb-1">Event today</p>
                                            <p className="text-muted ellipsis mb-0">
                                                {" "}
                                                Just a reminder that you have an event today{" "}
                                            </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-settings text-danger" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject mb-1">Settings</p>
                                            <p className="text-muted ellipsis mb-0">
                                                {" "}
                                                Update dashboard{" "}
                                            </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-link-variant text-warning" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject mb-1">Launch Admin</p>
                                            <p className="text-muted ellipsis mb-0">
                                                {" "}
                                                New admin wow!{" "}
                                            </p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <p className="p-3 mb-0 text-center">See all notifications</p>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link"
                                    id="profileDropdown"
                                    href="#"
                                    data-toggle="dropdown"
                                >
                                    <div className="navbar-profile">
                                        <img
                                            className="img-xs rounded-circle"
                                            src={Images.face_15}
                                            alt=""
                                        />
                                        <p className="mb-0 d-none d-sm-block navbar-profile-name">
                                            Abubakar Salihu
                                        </p>
                                        <i className="mdi mdi-menu-down d-none d-sm-block" />
                                    </div>
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                                    aria-labelledby="profileDropdown"
                                >
                                    <h6 className="p-3 mb-0">Profile</h6>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-settings text-success" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject mb-1">Settings</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item preview-item">
                                        <div className="preview-thumbnail">
                                            <div className="preview-icon bg-dark rounded-circle">
                                                <i className="mdi mdi-logout text-danger" />
                                            </div>
                                        </div>
                                        <div className="preview-item-content">
                                            <p className="preview-subject mb-1">Log out</p>
                                        </div>
                                    </a>
                                    <div className="dropdown-divider"></div>
                                    <p className="p-3 mb-0 text-center">Advanced settings</p>
                                </div>
                            </li>
                        </ul>
                        <button
                            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                            type="button"
                            data-toggle="offcanvas"
                        >
                            <span className="mdi mdi-format-line-spacing"></span>
                        </button>
                    </div>
                </nav>

                <div className="main-panel">
                    <div className="content-wrapper">


                        <Outlet />

                    </div>

                    <footer className="footer">
                        <div className="d-sm-flex justify-content-center justify-content-sm-between">
                            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
                                Copyright © vodatrox.com 2024
                            </span>
                            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">{" "}
                                Made By{" "}
                                <a href="https://www.vodatrox.com" target="_blank"> ASB Tech </a>
                                {" "} from vodatrox.com
                            </span>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Blank;
