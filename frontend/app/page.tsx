import Header from "@/components/Header";
import HeroSection from "./sections/HeroSection";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center font-sans">
            <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-start sm:items-start">
                <Header />

                <HeroSection />
            </main>
        </div>
    );
}
