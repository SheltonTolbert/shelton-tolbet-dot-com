import Image from "next/image";
import Link from "next/link";

function ListLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="pr-4">
      <Link href={href} rel="noopener noreferrer">
        <h1
          className={
            "text-2xl font-bold text-center text-gray-900 dark:text-gray-100"
          }
        >
          {children}
        </h1>
      </Link>
    </li>
  );
}

function Links() {
  const externalLinks = [
    ["GitHub", "https://www.github.com/sheltontolbert"],
    ["LinkedIn", "https://www.linkedin.com/in/shelton-tolbert"],
    ["Email", "mailto: tolbert.shelton@gmail.com"],
  ];

  return (
    <ul className="flex justify-start w-full max-w-5xl ">
      {externalLinks.map(([name, href]) => (
        <ListLink key={name} href={href}>
          {name}
        </ListLink>
      ))}
    </ul>
  );
}

function AboutMe() {
  return (
    <p className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
      hello friend! I&#39;m shelton, a software engineer based in reno. I&#39;m
      a big fan of the web, and I love building things for it. I&#39;m currently
      working on the{" "}
      <a
        rel="noopener noreferrer"
        className="underline"
        href="https://dscout.com/recruit"
      >
        recruit
      </a>{" "}
      product at{" "}
      <a
        rel="noopener noreferrer"
        className="underline"
        href="https://www.dscout.com"
      >
        dscout
      </a>
      .
    </p>
  );
}

function HeadShot() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm flex">
      <Image
        src="/media/headshot.png"
        alt="Hello, I'm me!"
        width={150}
        height={24}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-y-20 p-14">
      <Links />
      <HeadShot />
      <AboutMe />
    </main>
  );
}
