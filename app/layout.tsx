import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ThemeSwitch } from "@/components/theme-switch";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zack Ren",
  description: "My personal blog + portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="max-w-3xl mx-auto py-10 px-4">
              <header>
                <div className="flex justify-between">
                  <nav className="text-sm font-medium space-x-6">
                    <Link className="text-lg" href="/">
                      Home
                    </Link>
                    <Link className="text-lg" href="/posts">
                      Blog
                    </Link>
                    <Link className="text-lg" href="/projects">
                      Projects
                    </Link>
                  </nav>
                  <ThemeSwitch />
                </div>
              </header>
              <main>{children}</main>
            </div>
            <Analytics />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
