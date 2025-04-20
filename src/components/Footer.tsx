// import React from "react";

// const Footer = () => {
//   return (
//     <div className="flex flex-col  items-center justify-center h-[30vh] font-[Poppins] bg-[#0a0a0a]/40">
//       <div className="first-half  ">
//         <h1 className="capitalize text-xl sm:text-3xl lg:text-3xl  font-bold  text-[#dadada]">
//           Build by - <span className="text-[#ec4e39]">abhishek</span> with love
//           ❤️{" "}
//         </h1>
//         <h2 className="text-[#a8a8a8]   sm:text-[1.5vw] lg:text-sm p-2 text-center bg-black mt-2 sm:mt-4">
//           {" "}
//           <span>copyright guidelines</span> since 2025,April 17
//         </h2>
//       </div>

//       <div className="second-half mt-4 flex sm:flex-row  gap-4  ">
//         <h1 className="capitalize sm:text-xl lg:text-sm  text-[#dadada]">
//           Further Enquiries
//         </h1>
//         <div className="text-[#a8a8a8] sm:text-sm lg:text-xs">
//           <h2>
//             email - <span className="text-[#ec4e39]">abhi@gmail.com</span>
//           </h2>
//           <h2 className="hidden opacity-0 ">
//             phone - <span className="text-[#ec4e39]  ">+91 1234567890</span>
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import { ZapIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="p-1 bg-primary/10 rounded">
                <ZapIcon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono">
                code<span className="text-primary">flex</span>.ai
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AI-Fitness-Mentor(AFM) - All rights reserved
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-2 text-sm">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/help"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Help
            </Link>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-md bg-background/50">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs font-mono">SYSTEM OPERATIONAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;