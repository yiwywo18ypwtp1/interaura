type CardProps = React.ComponentProps<"text"> & {
    title: string;
    icon: string;
}

const InfoCard = ({ title, icon, children }: CardProps) => {
    return (
        <div className="flex flex-col items-center mt-13">
            <div className="
                flex flex-col items-center gap-2
                bg-white rounded-xl shadow-2xl shadow-sec/20
                py-8 w-100 relative
            ">
                <div className="
                    bg-white rounded-3xl shadow-2xl shadow-sec/35
                    flex items-center justify-center w-16 h-16
                    absolute -top-8
                ">
                    <img src={`/svg/${icon}.svg`} alt="" className="h-8" />
                </div>

                <h1 className="text-xl font-bold mt-3">{title}</h1>

                {children}
            </div>
        </div>
    )
}

export default InfoCard;