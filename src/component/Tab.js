import React from 'react';

const Tab = ({src, text}) => {
    return (
        <div className="tab">
            <div class="tab-img">
                <img src={src} />
            </div>
            <div class="tab-text">
                {text}
            </div>
        </div>
    )
}


export default Tab;