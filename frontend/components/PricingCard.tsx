type CardProps = {
    title: string
    buttonTitle: string
    priceSubtitle: string
    description: string
    price: number
    variant: "acc" | "sec"
    included: string[]
    notIncluded?: string[]
    mostPopular?: boolean
}

const PricingCard = ({
    title,
    buttonTitle,
    priceSubtitle,
    description,
    price,
    variant,
    included,
    notIncluded = [],
    mostPopular = false,
}: CardProps) => {
    const variants = {
        acc: {
            text: "text-acc",
            border: "border-acc hover:border-acc-lgt",
            shadow: "shadow-acc/35",
            buttonShadow: "shadow-acc/25 hover:shadow-acc/45",
            bg: "bg-acc",
            btnBg: "bg-acc hover:bg-acc-lgt",
            btnText: "text-white"
        },
        sec: {
            text: "text-sec",
            border: "border-sec/50",
            shadow: "shadow-sec/35",
            buttonShadow: "shadow-sec/25 hover:shadow-acc/35",
            bg: "bg-sec",
            btnBg: "bg-white hover:bg-black/1",
            btnText: "text-sec hover:text-acc"
        }
    } as const

    const v = variants[variant]

    return (
        <div className={`
            flex flex-col py-8 px-8 gap-6 items-center min-w-100 max-w-100
            bg-white shadow-2xl ${v.shadow}
            border ${v.border} rounded-2xl
        `}>
            <div className="flex gap-3 items-end">
                <h1 className={`text-3xl ${v.text} font-semibold`}>{title}</h1>

                {mostPopular &&
                    <div className={`flex gap-1 text-xl px-3 ${v.bg} rounded-full text-white`}>
                        <span>Most popular</span>

                        <img src="/svg/star.svg" alt="" className="h-6" />
                    </div>
                }
            </div>

            <div className="flex gap-1">
                <p className={`text-5xl ${v.text} font-semibold`}>$ {price}</p>
                <p className={`text-2xl text-black/75 font-light italic`}>/ month</p>
            </div>

            <div className="min-h-px bg-sec/20 w-full" />

            <div className="h-full w-full flex flex-col items-center justify-between gap-6">
                <div className="w-full text-xl flex flex-col gap-2">
                    {included &&
                        included.map(i => (
                            <div key={i} className="flex gap-3 items-center">
                                <img src="/svg/check-mark.svg" alt="" className="h-8" />

                                <p key={i}>{i}</p>
                            </div>
                        ))
                    }
                    {notIncluded &&
                        notIncluded.map(ni => (
                            <div key={ni} className="flex gap-3 items-center">
                                <img src="/svg/cross.svg" alt="" className="h-8" />

                                <p key={ni}>{ni}</p>
                            </div>
                        ))
                    }
                </div>

                <div className="w-full flex flex-col items-center gap-3">
                    <button className={`
                    ${v.btnBg} w-full h-12
                    border ${v.border} rounded-xl
                    ${v.btnText} text-xl
                    shadow-xl ${v.buttonShadow}
                    cursor-pointer transition duration-200
                `}>
                        <p>{buttonTitle}</p>
                    </button>

                    <p className={`${v.text} italic`}>{priceSubtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default PricingCard;