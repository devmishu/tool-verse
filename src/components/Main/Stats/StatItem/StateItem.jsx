
import StateCard from '../../../../UI/StateCard';

const StateItem = ({ itemData,setCarts,carts }) => {
    return (
        <div className="w-8/12 mx-auto  grid gap-10 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">

            {
                itemData.map(item => <StateCard
                    item={item}
                    key={item.id}
                    title={item.title}
                    badge={item.badge}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                    billing={item.billing}
                    features={item.features}
                    setCarts={setCarts}
                    carts={carts}
                />)
            }
        </div>
    );
};

export default StateItem;