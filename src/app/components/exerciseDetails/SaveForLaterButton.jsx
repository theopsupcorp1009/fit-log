import React from 'react';
import { FaRegBookmark } from "react-icons/fa";

const SaveForLaterButton = ({data}) => {
    return (
        <div>
            <button className="btn rounded-[10px] border-[#374151] font-medium"><FaRegBookmark/> Save for later</button> 
        </div>
    );
};

export default SaveForLaterButton;