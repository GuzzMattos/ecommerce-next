import Link from "next/link";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-white text-gray-950">
            <Link
                href='/'
                className="uppercase font-bold text-md h-12 flex items-center">
                Monica's Closet
            </Link>
            <div className="flex items-center gap-8">
                <SignedIn>
                    <UserButton></UserButton>
                </SignedIn>
                <SignedOut>
                    <SignInButton mode='modal'>
                        <button className="font-bold bg-gray-800 text-slate-100  rounded-lg border-gray-700 px-3 py-2">
                            Login
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>
        </nav>
    )
}