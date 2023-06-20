import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shelton Tolbert",
  description: "Professional Software - Reno, NV",
};

function ListLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="mr-4 blur-s">
      <Link href={href} rel="noopener noreferrer">
        <h1 className={"font-bold text-center"}>{children}</h1>
      </Link>
    </li>
  );
}

function Links() {
  const externalLinks = [
    ["Home", "/"],
    ["GitHub", "https://www.github.com/sheltontolbert"],
    ["LinkedIn", "https://www.linkedin.com/in/shelton-tolbert"],
    ["Email", "mailto: tolbert.shelton@gmail.com"],
    ["Blog", "/blog"],
  ];

  return (
    <ul className="flex justify-start w-full max-w-5xl m-4 ">
      {externalLinks.map(([name, href]) => (
        <ListLink key={name} href={href}>
          {name}
        </ListLink>
      ))}
    </ul>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Links />
        {children}
      </body>
    </html>
  );
}
