import React from "react"
import Dropdown from "../component/Dropdown"
import DropdownLeft from "./DropdownLeft"
import { Link } from "react-router-dom";

const DashBoardHeader = ({currActiveTab}) => {
    const dropdown = (
        <Dropdown title={"Select class"}>
            <div className="dropdown-menu">
                <DropdownLeft title={"11th"}>
                    <div className="dropdown-menu">
                        <div className="dropdown-item">
                            Physics
                        </div>
                        <DropdownLeft title={"Maths"}>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    Trignomatry
                                </div>
                                <div className="dropdown-item">
                                    Calculus
                                </div>
                                <div className="dropdown-item">
                                    Polynomial
                                </div>
                                <div className="dropdown-item">
                                    Imaginary number
                                </div>
                            </div>
                        </DropdownLeft>
                    </div>
                </DropdownLeft>
                <DropdownLeft title="12th">
                    <div className="dropdown-menu">
                        <div className="dropdown-item">
                            Physics
                        </div>
                        <DropdownLeft title={"Maths"}>
                            <div className="dropdown-menu">
                                <div className="dropdown-item">
                                    Trignomatry
                                </div>
                                <div className="dropdown-item">
                                    Calculus
                                </div>
                                <div className="dropdown-item">
                                    Polynomial
                                </div>
                                <div className="dropdown-item">
                                    Imaginary number
                                </div>
                            </div>
                        </DropdownLeft>
                    </div>
                </DropdownLeft>
            </div>
        </Dropdown>
    );
    return (
        <header className="dashboard-header">
            <div class="dashboard-header--left-box">
                <h2>Welcom to Edunomics</h2>
                {currActiveTab==='sessions' && dropdown}
            </div>
            <div class="dashboard-header--nav">
                <Dropdown title={"My account"}>
                    <div className="dropdown-menu">
                        <div className="dropdown-item">My Profile</div>
                        <div className="dropdown-item">
                            <Link to="/">LogOut</Link>
                        </div>
                    </div>
                </Dropdown>
            </div>
        </header>
    )
}

export default DashBoardHeader
