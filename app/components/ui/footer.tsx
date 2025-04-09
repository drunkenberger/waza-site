import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-gradient-to-br from-[#252A34] to-[#0D0D0D] text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">WAZA</span>
            </Link>
            <p className="mt-4 text-sm text-[#F9F7F7]/70">Creating technology that grows stronger through use.</p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                  Custom AI Agents
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                  Digital Experiences
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                  Web3 Innovation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#F9F7F7]/70 hover:text-[#F9F7F7] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-[#F9F7F7]/70">
            Built by{" "}
            <a
              href="https://waza.ai"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-[#F9F7F7]"
            >
              WAZA
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/waza-ai/waza-site"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-[#F9F7F7]"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
} 