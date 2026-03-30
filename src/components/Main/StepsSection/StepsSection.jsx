
import StepsCard from '../../../UI/StepsCard';
import userIcon from '../../../assets/user.png';
import packageIcon from '../../../assets/package.png';
import rocketIcon from '../../../assets/rocket.png';


const stepsData = [
    {
        id: 1,
        stepNumber: "01",
        title: "Create Account",
        description: "Sign up for free in seconds. No credit card required to get started.",
        icon: userIcon,
    },
    {
        id: 2,
        stepNumber: "02",
        title: "Choose Products",
        description: "Browse our catalog and select the tools that fit your needs.",
        icon: packageIcon,
    },
    {
        id: 3,
        stepNumber: "03",
        title: "Start Creating",
        description: "Download and start using your premium tools immediately.",
        icon: rocketIcon,
    }
];

const StepsSection = () => {
    return (
        <div className="container mx-auto p-5 space-y-10">
            <div className="flex gap-4 flex-col  justify-center items-center">
                <h2 className="text-center text-4xl md:text-5xl font-bold">Get Started in 3 Steps</h2>
                <p className="text-center text-gray-500 ">Start using premium digital tools in minutes, not hours.</p>
            </div>
            <div className="w-8/12 mx-auto  grid gap-10 lg:grid-cols-2 xl:grid-cols-3 justify-items-center">
                {
                    stepsData.map(step => <StepsCard
                        key={step.id}
                        stepNumber={step.stepNumber}
                        title={step.title}
                        description={step.description}
                        icon={step.icon}

                    />)
                }
            </div>
        </div>
    );
};

export default StepsSection;