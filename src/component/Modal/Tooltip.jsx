import React, { useState } from 'react';

const Tooltip = ({ children, text }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative flex flex-col items-center group">
      {showTooltip && (
        <div className="absolute bottom-full mb-2 w-auto p-2 bg-gray-600 text-white text-sm rounded">
          {text}
        </div>
      )}

      <div
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>
    </div>
  );
};

export default Tooltip;