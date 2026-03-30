
import TransparentPricing from './TransparentPricing/TransparentPricing';
import StateHeader from './Stats/StatHeader/StateHeader';
import StateItem from './Stats/StatItem/StateItem';
import { Suspense } from 'react';

const fetchTransparentPricing = async () => {
    const res = await fetch('/transparentPricingData.json')
    return res.json();
}

const Main = ({ itemData }) => {
    const transparentPricingPromise = fetchTransparentPricing();
    console.log(itemData);
    return (
        <div className='space-y-20'>
            <StateHeader />
            <StateItem itemData={itemData} />
            <Suspense fallback="Loading...">
                <TransparentPricing transparentPricingPromise={transparentPricingPromise} />
            </Suspense>
        </div>
    );
};

export default Main;