
const CartCard = () => {
    return (
        <div className="p-5 bg-[#F9FAFC] rounded-md flex justify-between items-center ">
            <div className="flex items-center gap-3 ">
                <div className="w-10 h-10 border border-gray-200 p-1 rounded-full bg-white">
                    <p >img</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold ">AI Writing Pro</h2>
                    <p className="text-gray-400">$29</p>
                </div>
            </div>
            <button className="font-bold text-[#FF3980] hover:cursor-pointer">Remove</button>
        </div>
    );
};

export default CartCard;