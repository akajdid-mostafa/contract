"use client";

import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";



export default function ComingSoon() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 via-red-500 to-blue-400 text-white p-4">
      <main className="text-center">
        <h1 className="text-5xl font-bold mb-4">Bientôt disponible</h1>
        <p className="text-xl mb-8">Nous travaillons dur pour vous offrir quelque chose d&apos;extraordinaire. Restez à l&apos;écoute !</p>
        <div className="flex justify-center space-x-4">
        <h1 className="text-xl font-semibold mb-4">Contactez-nous sur les comptes suivants :</h1>
          <a href="https://wa.me/+212704309787?text=Hi%20*oceanconnecting*!%20I%20need%20more%20info%20about%20oceanconnecting%20https%3A%2F%2Foceanconnecting.ma" className="hover:text-gray-300"><FaWhatsapp size={24} /></a>
          <a href="https://www.facebook.com/the.ocean.connecting/" className="hover:text-gray-300"><FaFacebookF size={24} /></a>
          <a href="https://www.instagram.com/oceanconnecting.ma/" className="hover:text-gray-300"><FaInstagram size={24} /></a>
          {/* <a href="#" className="hover:text-gray-300"><FaXTwitter size={24} /></a> */}
          <a href="https://www.linkedin.com/company/ocean-connecting/?originalSubdomain=ma" className="hover:text-gray-300"><FaLinkedinIn size={24} /></a>
          <a href="https://www.youtube.com/@OceanConnecting" className="hover:text-gray-300"><FiYoutube size={24} /></a>
        </div>
      </main>
    </div>
  )
}
