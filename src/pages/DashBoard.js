import React from 'react';
import DashBoardHeader from "../component/DashBoardHeader";
import DashBoardSideNav from '../component/DashBoardSideNav';
import Tab from "../component/Tab";
import Activity from '../component/Activity';

const DashBoard = () => {
    return (
        <div className="dashboard">
            <DashBoardHeader />
            <div className="dashboard-layout--top-container">
                <div class="dashboard-layout--left-side-container">
                    <DashBoardSideNav />
                </div>
                <div class="dash-board-layout--right-side-container">
                    <div class="dash-board-layout--top-container">
                        <div class="tabs-holder">
                            <Tab src={"/session.svg"} text={"All interactive session"}/>
                            <Tab src={"/to-do-list.svg"} text={"Practice Questions"}/>
                            <Tab src={"/download.svg"} text={"Downloads"}/>
                            <Tab src={"/question-mark.svg"} text={"Ask Questions"}/>
                        </div>
                    </div>
                    <div class="dash-board-layout--bottom-container">
                        <div class="top-activity-container">
                            <div class="activity-box">
                                <Activity title={"Topic covered"} />
                            </div>
                            <div class="activity-box">
                                <Activity title={"Recent Activites"} />
                            </div>
                        </div>
                        <div class="bottom-activity-container">
                            <Activity title={"Performance"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DashBoard;