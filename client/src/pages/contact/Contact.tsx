import { useState } from 'react';
import shivam from "@/assets/shivam.webp";
import riya from "@/assets/riya.webp";
import narendra from "@/assets/narendra.webp";

interface ContactInfo {
  name: string;
  email: string;
  description: string;
  photoUrl: string;
}

export default function ContactPage() {
  const [contacts] = useState<ContactInfo[]>([
    {
      name: "Shivam Shukla",
      email: "shukla.shivamv@gmail.com",
      description:
        "Hi, I'm Shivam. I'm passionate about creating accessible and user-friendly applications. In this project, I handle the backend using Django, manage API calls, and ensure robust server-side functionality.",
      photoUrl: shivam,
    },
    {
      name: "Riya Mehta",
      email: "riyatmhatre@gmail.com",
      description:
        "Hi, I'm Riya. I'm a UI/UX designer who focuses on creating beautiful and functional user experiences. I have a keen eye for design and a deep understanding of user behavior. In this project, I handle UI/UX designing and also manage the database.",
      photoUrl: riya,
    },
    {
      name: "Narendra Patel",
      email: "alenway97@gmail",
      description:
        "Hi, I'm Narendra. I'm a frontend developer working with React.js. In this project, I handle the frontend and use UI libraries like Tailwind CSS to create beautiful and interactive designs. I enjoy crafting user-friendly interfaces that enhance the overall user experience.",
      photoUrl: narendra,
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="md:flex">
            {/* Left side - Photo */}
            <div className="md:w-1/3 flex items-center justify-center p-8">
              <div className="rounded-full overflow-hidden w-64 h-64 border-4 border-gray-200 shadow-md">
                <img
                  src={contact.photoUrl}
                  alt={`Photo of ${contact.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side - Info */}
            <div className="md:w-2/3 p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {contact.name}
              </h1>

              <div className="flex items-center text-gray-600 mb-6">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-blue-600 hover:underline"
                >
                  {contact.email}
                </a>
              </div>

              <div className="mt-6">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  About
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {contact.description}
                </p>
              </div>

              <div className="mt-10">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-lg">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
