type ButtonProps = React.ComponentProps<"button"> & {
    variant?: "primary" | "secondary"
    icon?: string
    size?: "default" | "small"
}

export const Button = ({
    variant = "primary",
    icon,
    size = "default",
    children,
    ...props
}: ButtonProps) => {

    const base =
        `flex gap-2 items-center justify-center ${size === "default" ? "min-w-50 h-13" : "min-w-45 h-11"} rounded-lg font-medium transition-all cursor-pointer`

    const variants = {
        primary:
            "bg-acc text-white hover:bg-acc-lgt shadow-lg shadow-acc/30",

        secondary:
            "bg-white text-black shadow-lg shadow-black/10 border border-black/15 hover:bg-black/1",
    }

    return (
        <button
            className={`${base} ${variants[variant]}`}
            {...props}
        >
            <span>{children}</span>

            {icon && (
                <img src={`/svg/${icon}.svg`} alt="" className="h-7" />
            )}
        </button>
    )
}