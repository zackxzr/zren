"use client";

export default function Home() {
  return (
    <div className="mt-12">
      <p>
        Hi, I&apos;m <span className="font-semibold">Zack</span>, a Software Engineer.
      </p>
      <p className="pt-4 pb-2">
        What I&apos;m up to:
      </p>
      <ul className="list-disc pl-4">
        <li>Software Engineering <span className="font-medium">@Capital One</span></li>
        <li>M.S. Computer Science <span className="font-medium">@Georgia Tech</span></li>
        <li>Technology I&apos;m learning: Rust, AWS.</li>
      </ul>
    </div>
  );
}
