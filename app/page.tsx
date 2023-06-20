import Image from "next/image";

function AboutMe() {
  return (
    <p className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm">
      hello friend! I&#39;m shelton, a software engineer based in reno. I&#39;m
      a big fan of the web, and I love building things for it. I&#39;m currently
      working on the{" "}
      <a
        rel="noopener noreferrer"
        className="blur-s"
        href="https://dscout.com/recruit"
      >
        recruit
      </a>{" "}
      product at{" "}
      <a
        rel="noopener noreferrer"
        className="blur-s"
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
      <HeadShot />
      <AboutMe />
    </main>
  );
}
