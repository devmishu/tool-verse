
const CartCard = ({ carts, cart,setCarts, image, title, price }) => {
    const handleRemoveCart = (cart) => {
        const filterCart = carts.filter(filCart => filCart.id !== cart.id);
        setCarts(filterCart);
    }
    return (
        <div className="p-5 bg-[#F9FAFC] rounded-md flex justify-between items-center ">
            <div className="flex items-center gap-3 ">
                <div className="w-10 h-10 border border-gray-200 p-1 rounded-full bg-white">
                    <img src={image} alt="" />
                </div>
                <div>
                    <h2 className="text-xl font-semibold ">{title}</h2>
                    <p className="text-gray-400">${price}</p>
                </div>
            </div>
            <button onClick={() => handleRemoveCart(cart)} className="font-bold text-[#FF3980] hover:cursor-pointer">Remove</button>
        </div>
    );
};

export default CartCard;