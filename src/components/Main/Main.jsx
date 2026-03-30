
import { Suspense } from 'react';
import TransparentPricing from './TransparentPricing/TransparentPricing';
import StateHeader from './Stats/StatHeader/StateHeader';

const fetchTransparentPricing = async () => {
    const res = await fetch('/transparentPricingData.json')
    return res.json();
}

const Main = () => {
    const transparentPricingPromise = fetchTransparentPricing();
    return (
        <div>
            <StateHeader />
            <Suspense fallback="Loading...">
                <TransparentPricing transparentPricingPromise={transparentPricingPromise} />
            </Suspense>

        </div>
    );
};

export default Main;