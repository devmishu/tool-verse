
const TestimonialSection = () => {
    return (
        <div className="bg-primary py-20 px-6 text-center text-white">
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">

                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="text-sm md:text-lg opacity-90 max-w-2xl leading-relaxed">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    <br className="hidden md:block" /> Start your free trial today.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <button className="bg-white text-[#7c3aed] px-8 py-3 rounded-full font-semibold text-sm transition hover:bg-opacity-90 hover:cursor-pointer">
                        Explore Products
                    </button>
                    <button className="border border-white/50 text-white px-8 py-3 rounded-full font-semibold text-sm transition hover:bg-white/10 hover:cursor-pointer">
                        View Pricing
                    </button>
                </div>

                <p className="text-[12px] md:text-sm opacity-70 pt-2">
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </div>
    );
};

export default TestimonialSection;