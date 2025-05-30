import React from 'react';

const SocialRow = ({data}) => {
  const iconStyle = 'w-10 h-10 rounded-full text-white flex items-center justify-center text-xl';
 

  return (
    <div className="flex gap-6 flex-wrap  mt-8">
      {data.map((social, index) => (
        <div key={index} className={`${iconStyle} ${social.bg} hover:bg-black w-2`}>
          {social.icon}
        </div>
      ))}
    </div>
  );
};

export default SocialRow;
