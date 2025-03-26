import React, { useState } from "react";
import { Rocket, Expand } from "lucide-react";
import { IconClockSearch, IconX } from "@tabler/icons-react";

const UpgradeCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-48">
      <div
        className="
          bg-gradient-to-br from-gray-900 to-black/80 
          border border-white/10 
          rounded-xl 
          p-4 
          shadow-2xl 
          backdrop-blur-md 
          hover:scale-[1.02] 
          transition-all duration-300 
          group
          cursor-pointer
        "
      >
        <div className="flex items-center justify-between mb-3">
          <div className="bg-green-500 p-2 rounded-lg">
            <Rocket className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="text-white">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold mb-1">Premium</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="hover:bg-white/10 rounded-full p-1 transition-colors"
            >
              <IconX className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
            </button>
          </div>
          <p className="text-sm text-white/70 mb-3">Explore Our Premium Plan</p>

          <button
            className="
              w-full 
              bg-green-500 
              text-white 
              py-2 
              rounded-lg 
              font-semibold 
              hover:bg-green-600 
              transition-colors 
              flex 
              items-center 
              justify-center 
              gap-2
            "
          >
            Upgrade
            <Rocket className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradeCard;
