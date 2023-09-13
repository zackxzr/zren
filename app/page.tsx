"use client";

import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="mt-12">
      <p className={`${theme === "light" ? "text-zinc-700" : "text-zinc-300"}`}>
        Hi, I&apos;m{" "}
        <span
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } font-semibold`}
        >
          Zack
        </span>
        , a Software Engineer building out my ideas. Currently a SWE undergrad
        student at McMaster University. I love solving challenging problems and
        I&apos;m fascinated with innovations in AI and technology.
      </p>
      <p
        className={`${
          theme === "light" ? "text-zinc-700" : "text-zinc-300"
        } pt-4`}
      >
        On days when I decide I&apos;ve had enough of staring into a monitor, I
        enjoy going out for a hike or at least doing something active. I&apos;m
        always on the lookout for new things to learn and food to eat!
      </p>
      <p
        className={`${
          theme === "light" ? "text-zinc-700" : "text-zinc-300"
        } py-4`}
      >
        Right now I&apos;m building tools for web3 over at Parametric.
      </p>
    </div>
  );
}
