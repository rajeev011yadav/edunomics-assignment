import React from 'react';

const DashBoardSideNav = ({
    currActiveTab,
    changeCurrActiveTab
}) => {
    return (
        <nav className="dashboard-side-nav">
            <a className={"dashboard-side-nav--link" + (currActiveTab == 'home' ? ' active' : "")}>
                <div className="dashboard-side-nav--link-tab" onClick={() => changeCurrActiveTab('home')}>
                    Home
                </div>
            </a>
            <a className={"dashboard-side-nav--link" + (currActiveTab == 'sessions' ? ' active' : "")}>
                <div className="dashboard-side-nav--link-tab" onClick={() => changeCurrActiveTab('sessions')}>
                    Sessions
                </div>
            </a>
            <a className={"dashboard-side-nav--link" + (currActiveTab == 'downloads' ? ' active' : "")}>
                <div className="dashboard-side-nav--link-tab" onClick={() => changeCurrActiveTab('downloads')}>
                    Downloads
                </div>
            </a>
            <a className={"dashboard-side-nav--link" + (currActiveTab == 'settings' ? ' active' : "")}>
                <div className="dashboard-side-nav--link-tab" onClick={() => changeCurrActiveTab('settings')}>
                    Settings
                </div>
            </a>
            <a className={"dashboard-side-nav--link" + (currActiveTab == 'about' ? ' active' : "")} >
                <div className="dashboard-side-nav--link-tab" onClick={() => changeCurrActiveTab('about')}>
                    About
                </div>
            </a>
        </nav>
    )
}

export default DashBoardSideNav;