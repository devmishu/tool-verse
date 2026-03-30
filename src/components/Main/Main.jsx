
import TransparentPricing from './TransparentPricing/TransparentPricing';
import StateHeader from './Stats/StatHeader/StateHeader';
import StateItem from './Stats/StatItem/StateItem';
import { Suspense } from 'react';
import StatCartItem from './Stats/StatCartItem/StatCartItem';
import StepsSection from './StepsSection/StepsSection';


const fetchTransparentPricing = async () => {
    const res = await fetch('/transparentPricingData.json')
    return res.json();
}

const Main = ({ itemData, setActiveTab, activeTab, carts, setCarts }) => {
    const transparentPricingPromise = fetchTransparentPricing();
    console.log(itemData);
    return (
        <div className='space-y-15 p-5'>
            <StateHeader activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} />

            {
                activeTab === 'Products' ? <StateItem
                    itemData={itemData}
                    setCarts={setCarts}
                    carts={carts}
                /> : <StatCartItem carts={carts} setCarts={setCarts} />
            }
            <StepsSection />

            <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
                <TransparentPricing transparentPricingPromise={transparentPricingPromise} />
            </Suspense>
        </div>
    );
};

export default Main;