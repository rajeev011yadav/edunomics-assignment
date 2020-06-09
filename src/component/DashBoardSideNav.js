import React from 'react';

const DashBoardSideNav = () => {
    return (
        <nav className="dashboard-side-nav">
            <a className="dashboard-side-nav--link">
                <div className="dashboard-side-nav--link-tab">
                    Home
                </div>
            </a>
            <a className="dashboard-side-nav--link">
                <div className="dashboard-side-nav--link-tab">
                    Sessions
                </div>
            </a>
            <a className="dashboard-side-nav--link">
                <div className="dashboard-side-nav--link-tab">
                    Downloads
                </div>
            </a>
            <a className="dashboard-side-nav--link">
                <div className="dashboard-side-nav--link-tab">
                    Settings
                </div>
            </a>
            <a className="dashboard-side-nav--link">
                <div className="dashboard-side-nav--link-tab">
                    About
                </div>
            </a>
        </nav>
    )
}

export default DashBoardSideNav;