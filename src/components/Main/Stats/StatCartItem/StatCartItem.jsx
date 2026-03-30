
import CartCard from '../../../../UI/CartCard';
import cartIcon from '../../../../assets/products/shopping-cart.png'

const StatCartItem = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, cart) => {
        return sum + cart.price;
    }, 0);

    return (
        <div className='container mx-auto p-5  border border-gray-200  rounded-sm space-y-3 '>
            <h2 className='text-xl font-bold'>Your Cart</h2>


            {
                carts.map(cart => <CartCard
                    carts={carts}
                    cart={cart}
                    setCarts={setCarts}
                    image={cart.image}
                    title={cart.title}
                    price={cart.price}
                />)
            }

            {
                carts.length !== 0 && <div className='flex justify-between p-5 '>
                    <h2 className='text-gray-400'>Total:</h2>
                    <h2 className='font-bold'>${totalPrice}</h2>
                </div>
            }

            {
                carts.length !== 0 && <button onClick={() => setCarts([])} className='btn btn-primary rounded-full w-full'>Proceed to Checkout</button>
            }

            {carts.length === 0 && <div className='flex flex-col justify-center items-center gap-3 py-10 '>
                <h2 className='text-xl text-gray-400 '>Your Cart is Empty</h2>
                <img src={cartIcon} alt="" />
            </div>
            }


        </div>
    );
};

export default StatCartItem;