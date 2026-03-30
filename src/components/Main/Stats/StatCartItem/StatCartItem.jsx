
import CartCard from '../../../../UI/CartCard';
import cartIcon from '../../../../assets/products/shopping-cart.png'

const StatCartItem = ({carts}) => {
    return (
        <div className='container mx-auto p-5 border border-gray-200  rounded-sm space-y-3 '>
            <h2 className='text-xl font-bold'>Your Cart</h2>

            <div className='flex flex-col justify-center items-center gap-3 '>
                <h2 className='text-xl text-gray-400 '>Your Cart is Empty</h2>
                <img src={cartIcon} alt="" />
            </div>
            {
                carts.map(cart => <CartCard
                    image={cart.image}
                    title={cart.title}
                    price={cart.price}
                /> )
            }

            <div className='flex justify-between p-5 '>
                <h2 className='text-gray-400'>Total:</h2>
                <h2 className='font-bold'>$78</h2>
            </div>
            <button className='btn btn-primary rounded-full w-full'>Proceed to Checkout</button>

        </div>
    );
};

export default StatCartItem;