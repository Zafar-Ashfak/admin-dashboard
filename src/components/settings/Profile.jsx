import React from 'react'
import { User } from "lucide-react";
import SettingsSection from "./SettingsSection";
import ProfilePic from "../../assets/profile.png";
function Profile() {
  return (
    <SettingsSection icon={User} title={"Profile"}>
      <div className="flex flex-col sm:flex-row items-center mb-6">
       <div className='bg-white rounded-full w-20 h-20 mr-4'>
       <img
          src={ProfilePic}
          alt="Profile"
          className="object-contain"
        />
       </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-100 text-center mt-2 sm:text-left">
            Md Ashfak Alam
          </h3>
          <p className='text-gray-400 text-center'>zafarashfak@example.com</p>
        </div>
      </div>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 w-full sm:w-auto cursor-pointer">Edit Profile</button>
    </SettingsSection>
  )
}

export default Profile
