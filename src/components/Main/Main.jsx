
import { Suspense } from 'react';
import TransparentPricing from './TransparentPricing/TransparentPricing';

const fetchTransparentPricing = async () => {
    const res = await fetch('/public/transparentPricingData.json')
    return res.json();
}

const Main = () => {
    const transparentPricingPromice = fetchTransparentPricing();
    return (
        <div>
            <Suspense fallback="Loading">
                <TransparentPricing transparentPricingPromice={transparentPricingPromice} />
            </Suspense>
        </div>
    );
};

export default Main;