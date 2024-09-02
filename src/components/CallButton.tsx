import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const CallButton = () => {
  const phoneNumber = "+918340561344"; // Replace with your phone number
  const callLink = `tel:${phoneNumber}`;

  return (
    <a
      href={callLink}
      className="fixed z-50 bottom-20 right-4 bg-blue-500 rounded-full p-3 mb-3 shadow-lg hover:bg-blue-600 transition"
    >
      <FontAwesomeIcon icon={faPhone} className="text-white w-10 h-10" />
    </a>
  );
};

export default CallButton;
