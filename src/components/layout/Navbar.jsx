import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <Link href={"/"}>
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
                
                </div>
            </Link>
        </div>
    );
};

export default Navbar;