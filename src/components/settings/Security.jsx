import React, { useState } from 'react';
import SettingsSection from './SettingsSection';
import { Lock } from 'lucide-react';
import ToggleSwitch from './ToggleSwitch';

function Security() {
  const [twoFactor, setTwoFactor] = useState(false);
  return (
    <SettingsSection icon={Lock} title={"Security"}>
      <ToggleSwitch Label={"Two-Factor Authentication"} 
      isOn={twoFactor}
      onToggle={() => setTwoFactor(!twoFactor)}
      />
      <div className='mt-4'>
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition duration-200 w-full sm:w-auto cursor-pointer">Change Password</button>
      </div>
    </SettingsSection>
  )
}

export default Security
