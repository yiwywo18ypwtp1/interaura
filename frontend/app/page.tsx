import Header from "@/components/Header";
import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorksSection";
import PricingSection from "./sections/PricingSection";


export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans">
            <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-start sm:items-start">
                <Header />

                <HeroSection />
                <HowItWorks />
                <PricingSection />
            </main>
        </div>
    );
}
