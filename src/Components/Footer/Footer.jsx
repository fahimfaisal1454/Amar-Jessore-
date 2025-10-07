import React, { useEffect, useState } from "react";
import AxiosInstance from "../AxiosInstance/AxiosInstance";
import {
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaIdCard,
  FaMapMarkerAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const Footer = () => {
  const [institution, setInstitution] = useState({
    name: "",
    address: "",
    contact_phone: "",
    contact_email: "",
    government_approval_number: "",
    government_approval_date: "",
    history: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInstitutionInfo = async () => {
      try {
        setLoading(true);
        const res = await AxiosInstance.get("institutions/");
        const data = res.data;
        if (Array.isArray(data)) {
          setInstitution(data[0] || {});
        } else {
          setInstitution(data || {});
        }
      } catch (err) {
        console.error("Error fetching institution info:", err);
        // No error state for UI, just console log
      } finally {
        setLoading(false);
      }
    };

    fetchInstitutionInfo();
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(dateString).toLocaleDateString("bn-BD", options);
    } catch (error) {
      return "N/A";
    }
  };

  // Helper function to safely display data or empty string
  const safeDisplay = (value, fallback = "") => {
    return value && value.trim() !== "" ? value : fallback;
  };

  return (
    <footer className="w-full text-gray-800 bg-lime-400  font-sans mt-auto ">
      <div className="max-w-7xl mx-auto p-6 bg-lime-400">
   
        {/* Copyright and Credits - Always shows */}
        <div className="text-center text-xs text-black">
          <p>
            © 2025 {safeDisplay(institution?.name, "Amar Jessore")},{" "}
            {safeDisplay(institution?.address, "Jessore Sadar")}. All rights reserved.
            <span className="mx-2">|</span>
            Powered by{" "}
            <a
              href="https://www.utshabtech.com.bd/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-medium hover:underline"
            >
              Utshab Technology Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
