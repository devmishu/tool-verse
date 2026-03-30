import React from 'react';

const StepsCard = ({ stepNumber, title, description, icon }) => {
    return (
        <div className="card bg-base-100 w-full shadow-sm justify-center items-center py-10 relative  ">
            <div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white absolute top-3 right-3'>
                <span> {stepNumber}</span>
            </div>
            <div className='bg-[#f1e9fe] p-4 rounded-full '>
                <img className='w-15 h-15' src={icon} alt="" />
            </div>
            <div className="card-body items-center">
                <h2 className="card-title text-2xl font-bold ">{title}</h2>
                <p className='text-[16px] text-gray-500 text-center'>{description}</p>
            </div>
        </div>
    );
};

export default StepsCard;