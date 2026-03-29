import { use } from "react";
import PricingCard from "./PricingCard";

const TransparentPricing = ({ transparentPricingPromice }) => {
    const transparentPricingData = use(transparentPricingPromice);
    console.log(transparentPricingData);
    return (
        <div className="container mx-auto p-5 space-y-10">
            <div className="flex gap-4 flex-col  justify-center items-center">
                <h2 className="text-center text-4xl md:text-5xl font-bold">Simple,Transparent Pricing Card</h2>
                <p className="text-center text-gray-500 ">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className="w-10/12 mx-auto  grid gap-10 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
                {
                    transparentPricingData.map(item => <PricingCard
                        key={item.id}
                        planName={item.planName}
                        tagline={item.tagline}
                        price={item.price}
                        billingCycle={item.billingCycle}
                        features={item.features}
                        buttonText={item.buttonText}
                        isPopular={item.isPopular}

                    />)
                }
            </div>
        </div>
    );
};

export default TransparentPricing;