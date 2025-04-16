"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { SignOutButton } from "@clerk/nextjs";
import React from "react";

const Homepage = () => {
  return (
    <div className="text-3xl h-screen bg-[#ec4e39]">
      <h1>Homepage</h1>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <Button>Test</Button>
    </div>
  );
};

export default Homepage;
