import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-4 z-10">
            <Image src="/logo.png" height={60} width={60} alt="logo" />
            <span className="text-xl font-semibold text-primary-100">
                Thhe Wild Oasis
            </span>
        </Link>
    );
};

export default Logo;
