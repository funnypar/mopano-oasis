import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: {
        template: "%s | Mopano Oasis",
        default: "Mopano Oasis",
    },
    description: "This is an app just to reserve the rooms of a small hostel !",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
