"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import {
  X,
  DumbbellIcon,
  HomeIcon,
  UserIcon,
  ZapIcon,
  Logs,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const { isSignedIn } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuRef.current) return;

    if (isMobileMenuOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        pointerEvents: "auto",
      });
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          // Disable clicks after closing
          if (menuRef.current) {
            menuRef.current.style.pointerEvents = "none";
          }
        },
      });
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    console.log(isMobileMenuOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border py-3 font-[Poppins] px-3">
      <div className="container mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1 bg-primary/10 rounded">
            <ZapIcon className="size-4 text-primary" />
          </div>
          <span className="text-xl font-bold font-mono">
            fitness<span className="text-primary">mentor</span>.ai
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="flex items-center gap-5">
          {!isMobile ? (
            <>
              {isSignedIn ? (
                <>
                  <Link
                    href="/"
                    className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                  >
                    <HomeIcon size={16} />
                    <span>Home</span>
                  </Link>

                  <Link
                    href="/generate-programs"
                    className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                  >
                    <DumbbellIcon size={16} />
                    <span>Generate</span>
                  </Link>

                  <Link
                    href="/profile"
                    className="flex items-center gap-1.5 text-sm hover:text-primary transition-colors"
                  >
                    <UserIcon size={16} />
                    <span>Profile</span>
                  </Link>
                  <Button
                    asChild
                    variant="outline"
                    className="ml-2 border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                  >
                    <Link href="/generate-program">Get Started</Link>
                  </Button>
                  <UserButton />
                </>
              ) : (
                <>
                  <SignInButton>
                    <Button
                      variant={"outline"}
                      className="border-primary/50 text-primary hover:text-white hover:bg-primary/10"
                    >
                      Sign In
                    </Button>
                  </SignInButton>

                  <SignUpButton>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </>
              )}
            </>
          ) : (
            <>
              <div>
                <div className="flex items-center justify-center gap-2">
                  <UserButton />
                  {/* mobile menu */}
                  <button onClick={handleMobileMenuClick}>
                    <Logs size={32} />
                  </button>
                </div>

                {/* {isMobileMenuOpen && ( */}
                <div
                  ref={menuRef}
                  className=" top-0 absolute right-0 h-screen flex flex-col gap-2 bg-[#efefef] w-1/2 text-[#1f1f1f] z-50 pointer-events-none opacity-0 translate-x-full"
                >
                  {/* mobile menu content */}
                  <button
                    className="h-20 text-[#0a0a0a] flex items-center justify-center text-center"
                    onClick={handleMobileMenuClick}
                  >
                    <X size={32} />
                  </button>

                  {/* NAV LINKS */}
                  <div className="flex flex-col items-center gap-4 text-[5vw] p-4">
                    <Link
                      href="/"
                      className="flex items-center gap-1.5 hover:text-primary transition-colors"
                    >
                      <HomeIcon size={24} />
                      <span>Home</span>
                    </Link>
                    <hr className="border-t-2 border-black w-full my-2" />

                    <Link
                      href="/generate-programs"
                      className="flex items-center gap-1.5  hover:text-primary transition-colors"
                    >
                      <DumbbellIcon size={24} />
                      <span>Generate</span>
                    </Link>
                    <hr className="border-t-2 border-black w-full my-2" />

                    <Link
                      href="/profile"
                      className="flex items-center gap-1.5 hover:text-primary transition-colors "
                    >
                      <UserIcon size={24} />
                      <span>Profile</span>
                    </Link>
                  </div>
                </div>
                {/* )} */}
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
