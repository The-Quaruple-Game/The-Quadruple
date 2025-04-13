import { useState } from 'react';

import shivam from "@/assets/shivam.webp"
import riya from "@/assets/riya.webp"
import narendra from "@/assets/narendra.webp"
import office from "@/assets/office.webp"

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

interface CompanyValue {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

export default function AboutUs() {
    const [teamMembers] = useState<TeamMember[]>([
        {
          id: 1,
          name: "Shivam Shukla",
          role: "Backend Developer",
          bio: "Shivam is passionate about creating accessible and user-friendly applications. His contribution to this project is handling the backend using Django, managing API calls, and ensuring robust server-side functionality.",
          imageUrl: shivam // replace with actual image URL or import
        },
        {
          id: 2,
          name: "Riya Sharma",
          role: "UI/UX Designer & Database Manager",
          bio: "Riya handles UI/UX designing and also manages the database in this project. She focuses on creating functional, aesthetically pleasing designs and ensures the seamless integration of the database with the application.",
          imageUrl: riya // replace with actual image URL or import
        },
        {
          id: 3,
          name: "Narendra Kumar",
          role: "Frontend Developer",
          bio: "Narendra works on the frontend using React.js and leverages UI libraries like Tailwind CSS to create beautiful and interactive designs. He focuses on building a user-friendly interface that enhances the overall user experience.",
          imageUrl: narendra // replace with actual image URL or import
        }
      ]);


  const [companyValues] = useState<CompanyValue[]>([
    {
      id: 1,
      title: "Innovation",
      description: "We continuously seek new ideas and technologies to solve complex problems in creative ways.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Integrity",
      description: "We uphold the highest standards of honesty, transparency, and ethical behavior in all our relationships.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Customer Focus",
      description: "We put our customers at the center of everything we do, creating products that address their real needs.",
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    }
  ]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a passionate team dedicated to building products that empower people and businesses to achieve more.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src={office}
              alt="Our office"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2018, we began with a simple mission: to create technology that makes life better. What started as a small team of three in a co-working space has grown into a diverse company with team members across the globe.
            </p>
            <p className="text-gray-600 mb-4">
              Through years of innovation and dedication, we've developed solutions that are now used by thousands of customers worldwide. Our journey hasn't always been easy, but our commitment to excellence and customer satisfaction has never wavered.
            </p>
            <p className="text-gray-600">
              Today, we continue to push boundaries and explore new possibilities, always guided by our core values and vision for the future.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map(value => (
              <div key={value.id} className="bg-gray-50 p-6 rounded-lg shadow">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{value.title}</h3>
                <p className="text-gray-600 text-center">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-center mb-4">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-blue-100"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
              <p className="text-blue-600 text-center mb-4">{member.role}</p>
              <p className="text-gray-600 text-center">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-xl mb-8">
            We're always looking for talented individuals to join our team and help us create amazing products.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
              View Careers
            </button>
            <button className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
