import React, { useState } from "react";

const Dropdown = ({title, children}) => {
    const [active, toggleActive] = useState(false)
    return (
        <div class="dropdown">
            <div class="dropdown-title" onClick={() => toggleActive(!active)}>
                {title}
            </div>
            { active && children}
        </div>
    )
}

export default Dropdown