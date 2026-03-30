
const PricingCard = ({ planName, tagline, price, billingCycle, features, buttonText, isPopular }) => {
    return (
        <div className={`card w-full   ${isPopular ? 'bg-primary text-white' : 'bg-[#F2F2F2]'} shadow-md`}>
            <div className="card-body relative ">
                {isPopular && <div className="flex flex-col items-center ">
                    <span className="text-center badge bg-[#FEF3C6] text-[#BB4D00] border-none font-medium text-[14px] badge-xs badge-warning absolute -top-4  p-4 rounded-full">Most Popular</span>
                </div>}

                <div className="flex flex-col justify-between">
                    <h2 className="text-3xl font-bold">{planName}</h2>
                    <p className={`text-gray-500 ${isPopular && 'text-pink-400'}  text-[16px]`}>{tagline}</p>
                    <span className="text-xl mt-3 ">${price}/<small>{billingCycle}</small> </span>
                </div>
                <div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">

                        {
                            features.map((feature, index) => <li key={index}
                                className={`text-[16px] ${isPopular && 'text-white'} text-gray-500`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>)
                        }
                    </ul>
                </div>

                <div className="mt-6">
                    <button className={` ${isPopular ? 'btn' : 'btn btn-primary'}  btn-block rounded-full`}>{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;