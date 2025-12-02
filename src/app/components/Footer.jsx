import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-slate-600">
      <div className="container mx-auto p-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="z-10 text-center md:text-left">
          Powered by{" "}
          <Link href="https://vercel.com/" target="_blank">
            Vercel
          </Link>{" "}
          and{" "}
          <Link href="https://nextjs.org/" target="_blank">
            NEXT.js
          </Link>
        </span>
        <p className="text-slate-600 z-10 text-center md:text-right">
          © 2025 Ikbal Čaušević. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
