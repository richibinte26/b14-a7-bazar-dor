import Image from "next/image";
import Link from "next/link";
import BanglaDate from "./BanglaDate";

const Navbar = () => {
    return (
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
                <div>
                    <Image
                        src="/images/logo-icon.png"
                        alt="বাজার দর"
                        width={30}
                        height={30}
                        className="brightness-0"
                    />
                </div>
                <div>
                    <p className="font-bold text-xl leading-tight">বাজার দর</p>
                    <p className="text-xs text-gray-800"><BanglaDate/></p>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;