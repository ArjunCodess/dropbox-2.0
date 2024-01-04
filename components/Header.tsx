import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeToggler } from './ThemeToggler';

const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <Link href="/" className='flex items-center space-x-3'>
                <div className='bg-[#0160FE] w-fit p-2'>
                    <Image
                        src="https://cdn-icons-png.flaticon.com/512/37/37540.png"
                        className="invert"
                        alt="dropbox logo"
                        height={50}
                        width={50}
                    />
                </div>
                <h1 className='font-bold text-xl'>Dropbox 2.0</h1>
            </Link>

            <div className='px-5 flex space-x-2 items-center'>
                <ThemeToggler />

                <UserButton afterSignOutUrl='/' />

                <SignedOut>
                    <SignInButton afterSignInUrl='/dashboard' mode="modal" />
                </SignedOut>
            </div>
            
        </header>
    )
}

export default Header