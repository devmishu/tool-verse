

const StateCard = ({ item, title, badge, image, description, price, billing, features, setCarts, carts }) => {
    const isAdded = carts.find(cart => cart.id === item.id);

    const handleCarts = (item) => {
        const isExit = carts.find(cart => cart.id === item.id)
        if (isExit) {
            return;
        }
        setCarts([...carts, item])
    }

    return (
        <div className="card w-full  bg-transparent shadow border border-gray-200">
            <div className="card-body">

                <div className="flex flex-col items-center absolute top-3 right-3  ">
                    <span className={`text-center border-none badge badge-xs badge-warning rounded-full p-3 font-medium text-[14px]
                    ${badge === 'Best Seller' && 'bg-[#FEF3C6] text-[#BB4D00]'}
                    ${badge === 'Popular' && 'bg-[#E1E7FF] text-blue-500'}
                    ${badge === 'New' && 'bg-[#DBFCE7] text-[#0A883E]'}
                        `}>{badge}</span>
                </div>

                <div className="flex flex-col justify-between gap-2">
                    <div className='w-10 h-10  border border-gray-300 rounded-full overflow-hidden p-1'>
                        <img className='p-1' src={image} alt="" />
                    </div>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-gray-500 text-[16px]">{description}</p>
                    <span className="text-xl mt-3 text-gray-500"><span className='font-bold text-black'>${price}</span>/<small>{billing}</small></span>
                </div>

                <div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">

                        {
                            features.map((feature, index) => <li key={index}
                            className="text-gray-500 text-[16px]"
                             >
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>)
                        }
                    </ul>
                </div>

                <div className="mt-6">
                    <button onClick={() => handleCarts(item)} className={`btn btn-primary btn-block rounded-full
                    ${isAdded && 'bg-green-700'}
                        `}> {isAdded ? 'Added To Cart' : 'Buy Now'}</button>
                </div>
            </div>
        </div>
    );
};

export default StateCard;