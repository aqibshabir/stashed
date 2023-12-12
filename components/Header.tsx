import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#0160FE] w-fit">
          <Image
            src="https://www.shareicon.net/data/2048x2048/2016/07/13/606936_dropbox_2048x2048.png"
            alt="logo"
            className="invert"
            height={50}
            width={50}
          ></Image>
        </div>
        <h1 className="font-bold text-xl">DropBox</h1>
      </Link>

      <div className="px-5 flex space-x-2 item-center">
        {/* implementing theme toggler here */}

        <UserButton afterSignOutUrl="/" />

        <SignedOut>
          <SignInButton afterSignInUrl="/dashboard" mode="modal" />
        </SignedOut>
      </div>
    </header>
  );
}

export default Header;
