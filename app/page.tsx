"use client";

export default function Home() {
  return (
    <div className="mt-12">
      <p>
        Hi, I&apos;m <span className="font-semibold">Zack</span>, a Software
        Engineer building out my ideas. I&apos;m a Software and Biomedical
        Engineering graduate from McMaster University. I love solving challenging
        problems and I&apos;m fascinated with innovations in AI and technology.
      </p>
      <p className="pt-4">
        On days when I decide I&apos;ve had enough of staring into a monitor, I
        enjoy going out for a hike or at least doing something active. I&apos;m
        always on the lookout for new things to learn and food to eat!
      </p>
      <p className="pt-4 pb-2">
        What I&apos;m up to:
      </p>
      <ul className="list-disc pl-4">
        <li>Software Engineering - Mobile backend and infrastructure <span className="font-medium">@Capital One</span></li>
        <li>Master of Science in Computer Science - Machine Learning <span className="font-medium">@Georgia Tech</span></li>
        <li>Technology I&apos;m learning: Go, Bazel, AWS.</li>
      </ul>
    </div>
  );
}
