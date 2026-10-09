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
                <div className="absolute right-4 top-4 flex items-center gap-3 text-sm">
                    <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-green-700">সাইন ইন</button>
                    <button className="btn bg-green-700 px-3 py-1.5 font-semibold rounded-xl text-white transition-colors hover:bg-green-800">
                        সাইন আপ
                    </button>
                </div>
            </Link>
        </div>
    );
};

export default Navbar;