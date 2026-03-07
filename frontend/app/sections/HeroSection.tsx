import { Button } from "@/components/Button"

const HeroSection = () => {
    return (
        <section id="product" className="w-full mt-16 flex gap-16">
            <div className="flex flex-col justify-between">
                <div className="text-6xl font-semibold flex flex-col">
                    <div className="flex gap-1">
                        <h1>Practice.</h1>
                        <h1>Improve.</h1>
                    </div>

                    <h1 className="text-acc">Get hired.</h1>
                </div>

                <h2 className="text-xl">Interaura simulates real technical interviews follow-up questions, pressure, and structured feedback to level up faster.</h2>

                <div className="flex flex-row gap-4">
                    <Button
                        title="Start interview"
                        icon="arrow-right"
                    >
                        Start interview
                    </Button>

                    <Button
                        title="Start interview"
                        variant="secondary"
                    >
                        See how it works
                    </Button>
                </div>

                <div className="flex gap-3 items-center">
                    <li className="flex -space-x-2 will-change-transform">
                        <img src="/man-1.jpg" className="h-10 w-10 rounded-full border-3 border-background object-cover" />
                        <img src="/man-4.jpg" className="h-10 w-10 rounded-full border-3 border-background object-cover" />
                        <img src="/woman-1.jpg" className="h-10 w-10 rounded-full border-3 border-background object-cover" />
                    </li>

                    <div className="flex gap-1">
                        <p className="text-md">Join 3,200+ developers practicing with</p>
                        <p className="text-acc text-md font-semibold">Interaura</p>
                    </div>
                </div>
            </div>

            <div className="w-[47%] min-w-[47%] border border-black/15 rounded-3xl shadow-2xl shadow-sec/25 hover:scale-103 cursor-pointer transition-all duration-300">
                <img src="/chatikk.png" alt="" className="rounded-3xl" />
            </div>
        </section>
    )
}

export default HeroSection;