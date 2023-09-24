import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full flex flex-wrap  bg-black text-gray-300 py-2 px-2">
      <div className="w-full sm:w-1/3  flex  max-w-[1400px] px-2 py-4 mx-auto justify-center items-center  sm:flex-row text-center text-gray-500">
        <div className="flex mx-auto justify-between pt-4 text-2xl">
          <div className="flex justify-center">
            <div className="flex items-center justify-center mx-2 h-10 w-10 bg-white rounded-full">
              <a target="_blank" rel="noopener noreferrer">
                <FaFacebook size={30} className="text-gray-800" />
              </a>
            </div>
            <div className="flex items-center justify-center mx-2 h-10 w-10 bg-white rounded-full">
              <a target="_blank" rel="noopener noreferrer">
                <FaTwitter size={30} className="text-gray-800" />
              </a>
            </div>
            <div className="flex items-center justify-center mx-2 h-10 w-10 bg-white rounded-full">
              <a target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} className="text-gray-800" />
              </a>
            </div>
            <div className="flex items-center justify-center mx-2 h-10 w-10 bg-white rounded-full">
              <TiSocialPinterest size={30} className="text-gray-800" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-2 sm:w-1/3  flex justify-center items-center  text-justify text-xs">
        <em>
          {" "}
          <strong>
            {" "}
            <b>inserte frase mamalona</b>
          </strong>
        </em>
      </div>
      <div className="w-full sm:w-1/3  flex justify-center items-center ">
        <Link href="/Preguntas">
          <img
            className="h-24 w-24 p-4"
            src="./images/logo.jpg"
            alt="Workflow"
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
