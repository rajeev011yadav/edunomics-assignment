import React, { useState } from "react";

const DropdownLeft = ({title, children}) => {
    const [active, toggleActive] = useState(false);
    return (
        <div className="dropdown">
            <div className="dropdown-item" onClick={() => toggleActive(!active)}>
                {title}
            </div>
            {
                active &&
                <div className="dropdown-left-menu">
                    {children}
                </div>
            }
        </div>
    )
}

export default DropdownLeft;