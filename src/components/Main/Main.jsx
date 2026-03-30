
import TransparentPricing from './TransparentPricing/TransparentPricing';
import StateHeader from './Stats/StatHeader/StateHeader';
import StateItem from './Stats/StatItem/StateItem';
import { Suspense } from 'react';
import StatCartItem from './Stats/StatCartItem/StatCartItem';

const fetchTransparentPricing = async () => {
    const res = await fetch('/transparentPricingData.json')
    return res.json();
}

const Main = ({ itemData, setActiveTab, activeTab }) => {
    const transparentPricingPromise = fetchTransparentPricing();
    console.log(itemData);
    return (
        <div className='space-y-20'>
            <StateHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            {
                activeTab === 'Products' ? <StateItem
                    itemData={itemData}
                /> : <StatCartItem />
            }

            <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
                <TransparentPricing transparentPricingPromise={transparentPricingPromise} />
            </Suspense>
        </div>
    );
};

export default Main;