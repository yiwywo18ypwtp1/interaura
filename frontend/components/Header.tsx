import { Button } from "./Button";

const Header = () => {
    return (
        <header className="w-full">
            <div className="flex items-center justify-between h-24">
                <div className="flex gap-2 items-center h-full">
                    <img src="/svg/star-logo.svg" alt="" className="h-6" />

                    <span className="text-2xl font-semibold leading-none">Interaura</span>
                </div>

                <nav className="flex items-end gap-10 h-6 absolute -translate-x-1/2 left-1/2">
                    <a href="#product" className="font-semibold text-sec hover:text-acc cursor-pointer transition-colors duration-300">Product</a>
                    <a href="#how-it-works" className="font-semibold text-sec hover:text-acc cursor-pointer transition-colors duration-300">How it works</a>
                    <a href="#pricing" className="font-semibold text-sec hover:text-acc cursor-pointer transition-colors duration-300">Pricing</a>
                    <a href="#FAQ" className="font-semibold text-sec hover:text-acc cursor-pointer transition-colors duration-300">FAQ</a>
                </nav>

                <div className="flex items-center gap-6">
                    <button className="font-semibold text-sec hover:text-acc cursor-pointer transition-all duration-300">Log in</button>

                    <Button
                        icon="arrow-right"
                    >
                        Start interview
                    </Button>
                </div>
            </div>
        </header>
    )
}

export default Header;