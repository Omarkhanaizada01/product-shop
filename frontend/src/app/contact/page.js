"use client";

import Image from "next/image";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Заголовок */}
        <h1 className="text-4xl font-bold text-gray-800 text-center">Contact Us</h1>

        {/* Контактная информация */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 text-center">
          {/* Address */}
          <div className="flex flex-col items-center">
            <MapPinIcon className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-gray-500">123 Main Street, City, Country</span>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <EnvelopeIcon className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-gray-500">info@example.com</span>
          </div>

          {/* Call */}
          <div className="flex flex-col items-center">
            <PhoneIcon className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-gray-500">+1 (234) 567-890</span>
          </div>
        </div>

        {/* Map image */}
        <div className="mt-12 relative w-full h-[400px]">
          <Image
            src="/images/icons/map.png"
            alt="Map"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

