import React from "react";
import Link from "next/link";

export default function() {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-slate-600">
      <div className="container p-10 flex justify-between">
        <span className="z-10">Powered by <Link href="https://vercel.com/" target="_blank">Vercel</Link> and <Link href="https://nextjs.org/" target="_blank">NEXT.js</Link></span>
        <p className="text-slate-600 z-10">© 2025 Ikbal Čaušević. All rights reserved.</p>
      </div>
    </footer>
  );
};
