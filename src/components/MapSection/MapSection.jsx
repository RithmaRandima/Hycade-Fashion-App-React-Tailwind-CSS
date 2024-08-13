import React from "react";

const MapSection = () => {
  return (
    <div className="w-[100%] h-[70vh] bg-black mt-[60px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3319992906654!2d-122.01154692533615!3d37.334648037392995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2slk!4v1723532441780!5m2!1sen!2slk"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="google map"
      ></iframe>
    </div>
  );
};

export default MapSection;
