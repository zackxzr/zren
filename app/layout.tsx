import "./globals.css";
import { Link } from "@nextui-org/link";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";
import { ThemeSwitch } from "@/components/theme-switch";
import { Providers } from "./providers";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

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
                    <Link color="foreground" underline="hover" href="/">
                      Home
                    </Link>
                    <Link color="foreground" underline="hover" href="/posts">
                      Blog
                    </Link>
                    <Link color="foreground" underline="hover" href="/projects">
                      Projects
                    </Link>
                  </nav>
                  <div className="flex items-center gap-2">
                    <Link
                      isExternal
                      href="https://www.linkedin.com/in/zack-ren/"
                      aria-label="Linkedin"
                    >
                      <LinkedinIcon className="text-default-500" />
                    </Link>
                    <Link
                      isExternal
                      href="https://github.com/Zack-Ren"
                      aria-label="Github"
                    >
                      <GithubIcon className="text-default-500" />
                    </Link>
                    <ThemeSwitch />
                  </div>
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
