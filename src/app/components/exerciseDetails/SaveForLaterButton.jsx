"use client";

import { Context } from "@/Context/Context";
import React, { useContext } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const SaveForLaterButton = ({ data }) => {
  const { saveForLater, setSaveForLater } = useContext(Context);
  const handleSaveForLater = () => {
    const added = saveForLater.some((saved) => saved.id === data.id);
    if (added) {
      toast.error("Already Added");
      return;
    }
    setSaveForLater([...saveForLater, data]);
    toast.success("Saved for Later");
  };

  return (
    <div>
      <button
        onClick={handleSaveForLater}
        className="btn rounded-[10px] border-[#374151] font-medium hover:bg-[#15171D]"
      >
        <FaRegBookmark /> Save for later
      </button>
    </div>
  );
};

export default SaveForLaterButton;
