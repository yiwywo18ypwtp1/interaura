import InfoCard from "@/components/InfoCard";

const HowItWorks = () => {
    return (
        <section className="w-full mt-16 flex flex-col items-center" id="how-it-works">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-3xl font-semibold">How it works</h1>

                <div className="min-h-0.75 bg-acc w-1/2"></div>
            </div>

            <div className="flex justify-between w-full">
                <InfoCard
                    title="Choose a role"
                    icon="tie"
                >
                    Frontend, Backend, DevOps & more
                </InfoCard>

                <InfoCard
                    title="Get challenged"
                    icon="chat"
                >
                    Realictic questions & pressure
                </InfoCard>

                <InfoCard
                    title="Get structured feedback"
                    icon="grow"
                >
                    Score & improvement tips
                </InfoCard>
            </div>
        </section>
    )
}

export default HowItWorks;