import { LoadingProvider } from "./context/LoadingContext";
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Rick & Morty Explorer",
  description: "Neon Sci-Fi themed character explorer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-rm-background text-white min-h-screen">
        <nav className="sticky top-0 z-40 bg-black/40 backdrop-blur-xl border-b border-rm-primary/30 flex items-center justify-between px-6 py-4 shadow-[0_0_25px_#00ffea50]">
          {/* Neon Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-rm-primary drop-shadow-[0_0_10px_#00ffea]hover:drop-shadow-[0_0_20px_#00ffea]transition-all"
          >
            ⚡ Rick & Morty
          </Link>

          {/* Nav Links */}
          <div className="flex gap-6">
            <Link className="hover:text-rm-primary transition" href="/">
              Characters
            </Link>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-6">
          <LoadingProvider>{children}</LoadingProvider>
        </main>

        {/* Footer */}
        <footer className="mt-16 py-8 text-center text-gray-400 text-sm border-t border-rm-primary/20 bg-black/30 backdrop-blur-xl">
          <p>
            Built by Amjad ⚡ 💚 Neon sci-fi theme •{" "}
            <span className="text-rm-primary drop-shadow-[0_0_8px_#00ffea]">
              Rick & Morty API
            </span>
          </p>
        </footer>
      </body>
    </html>
  );
}
