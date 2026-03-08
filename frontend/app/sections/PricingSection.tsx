import PricingCard from "@/components/PricingCard";

const PricingSection = () => {
    return (
        <section
            id="pricing"
            className="
                    w-full mt-16 py-10 flex flex-col items-center gap-16
                    rounded-3xl
                ">
            <h1 className="flex gap-1 text-3xl font-semibold">
                Plans
            </h1>

            <div className="flex gap-16 w-full justify-center">
                <PricingCard
                    title="Free"
                    price={0}
                    variant="sec"
                    priceSubtitle="No credit card required"
                    description="Perfect to try Interaura"
                    buttonTitle="Get started"
                    included={
                        [
                            "3 Mock interview / month",
                            "1 Real interview simulation / month",
                            "1 hint per interview",
                            "Basic interview stats",
                            "Public interview result page",
                            "Limited «weak topic» detect",
                            "Shareable interview results",
                            "Interview score",
                        ]
                    }
                    notIncluded={
                        [
                            "Follow-up questions",
                            "Topic drilling",
                            "Interview history",
                            "AI improvement suggestions",
                        ]
                    }
                />

                <PricingCard
                    title="Pro"
                    price={12}
                    variant="acc"
                    priceSubtitle="Cancel any time"
                    description="Best for interview preparation"
                    buttonTitle="Upgrade to Pro"
                    included={
                        [
                            "Unlimited mock interview",
                            "Unlimited real interview simulation",
                            "Unlimited hints",
                            "Detailed interview stats",
                            "Public interview result page",
                            "Strong «weak topic» detect",
                            "Shareable interview results",
                            "Interview score",
                            "Follow-up questions",
                            "Topic drilling",
                            "Interview history",
                            "AI improvement suggestions"
                        ]
                    }
                    mostPopular
                />
            </div>
        </section>
    )
}

export default PricingSection;