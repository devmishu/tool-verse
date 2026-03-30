
const CounterSection = () => {
    const counterData = [
        { id: 1, label: 'Active Users', value: '50K+' },
        { id: 2, label: 'Premium Tools', value: '200+' },
        { id: 3, label: 'Rating', value: '4.9' },
    ];

    return (
        <div className="bg-primary py-12 px-6 mb-24">
            <div className="max-w-6xl mx-auto ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center text-center text-white `">
                    {counterData.map((stat) => (
                        <div
                            key={stat.id}
                            className={`flex flex-col space-y-2 relative md:border-r md:border-white/30 last:border-none
                                }`}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold ">
                                {stat.value}
                            </h2>
                            <p className="text-sm md:text-base font-medium opacity-90 capitalize ">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CounterSection;











// const CounterSection = () => {
//     return (
//         <div className="bg-primary">
//             <div className="container mx-auto p-5 py-10 flex flex-col md:flex-row items-center gap-10 justify-between ">
//                 <div className=" border-r-2 border-gray-500 pr-60">
//                     <h2 className="text-6xl font-extrabold text-white mb-4">50K+</h2>
//                     <p className="text-gray-300">Active Users</p>
//                 </div>
//                 <div className=" border-r-2 border-gray-500 pr-60">
//                     <h2 className="text-6xl font-extrabold text-white mb-4">50K+</h2>
//                     <p className="text-gray-300">Active Users</p>
//                 </div>
//                 <div>
//                     <h2 className="text-6xl font-extrabold text-white mb-4">50K+</h2>
//                     <p className="text-gray-300">Active Users</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CounterSection;