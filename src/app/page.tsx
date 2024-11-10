"use client"; // Add this line to make the component a Client Component
import ProfileCard from "../components/profileCard/profileCard";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleRedirect = (route:string) => {
    router.push(`/${route}`); // Replace with your target route
  }
  return (
    <div className="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[calc(100vh - 160px)]">
        <div className="bg-primary flex items-center justify-center md:justify-end h-full p-6 md:p-0">
          <ProfileCard  className="md:-mx-12"/>
        </div>
        {/* Right Content Section */}
        <div className="flex flex-col justify-center md:pl-[70px] max-w-[370px] p-6 md:p-0">
          <h1 className="text-8xl font-bold text-gray-900">Hello</h1>
          <p className="text-gray-700 mt-4">Here's who I am & what I do</p>
          <div className="flex mt-6 space-x-4">
            <button 
              className="w-32 bg-blue border-2 border-blue hover:bg-transparent hover:text-black text-white px-4 py-1 rounded-2xl"
              onClick={() => handleRedirect('resume')}
            >
              Resume
            </button>
            {/* <button 
              className="w-32 bg-transparent border-2 border-black hover:bg-blue hover:border-blue hover:text-white text-gray-800 px-4 py-1 rounded-2xl"
              onClick={() => handleRedirect('projects')}
            >
              Projects
            </button> */}
          </div>
          <p className="mt-6 text-gray max-w-md">I’m a Senior Software Engineer with 5+ years in scalable web app development, 
            specializing in React.js, Node.js, and AWS. At Softura, I led projects like Vault Admin Portal, 
            achieving 100% client satisfaction. Previously at Scaletech Solutions, I developed key features for BETFAN and a streaming app 
            while mentoring junior developers.
          </p>
        </div>
      </div>
    </div>
  );
}
