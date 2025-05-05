import { useState } from "react";
import SettingsSection from "./SettingsSection";
import Image1 from "../../assets/google.png";
import Image2 from "../../assets/facebook.svg";
import Image3 from "../../assets/x.png";
import { HelpCircle, Plus } from "lucide-react";

function ConnectedAccounts() {
  const [connectedAccounts, setConnectedAccounts] = useState([
    {
      id: 1,
      name: "Google",
      connected: true,
      icon: Image1,
    },
    {
      id: 2,
      name: "Facebook",
      connected: false,
      icon: Image2,
    },
    {
      id: 3,
      name: "Twitter",
      connected: true,
      icon: Image3,
    },
  ]);
  return (
    <SettingsSection icon={HelpCircle} title={"Connected Accounts"}>
      {connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between py-3">
          <div className="flex gap-1">
            <img
              src={account.icon}
              alt="Social Media icon"
              className="size-6 object-cover rounded-full mr-2"
            />
            <span className="text-gray-300">{account.name}</span>
          </div>
          <button
            className={`px-3 py-1 rounded ${
              account.connected
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 hover:bg-gray-700"
            } transition duration-200 cursor-pointer`}
            onClick={() => {
              setConnectedAccounts(
                connectedAccounts.map((acc) => {
                  if (acc.id === account.id) {
                    return {
                      ...acc,
                      connected: !acc.connected,
                    };
                  }
                  return acc;
                })
              );
            }}>
            {account.connected ? "Connected" : "Connect"}
          </button>
        </div>
      ))}
      <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transition duration-200 cursor-pointer">
        <Plus size={18} className="mr-2"/>
        Add Account</button>
    </SettingsSection>
  );
}

export default ConnectedAccounts;
