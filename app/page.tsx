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
        . I&apos;m a Software Engineer.
      </p>

      <p
        className={`${
          theme === "light" ? "text-zinc-700" : "text-zinc-300"
        } py-4`}
      >
        On days when I decide I&apos;ve had enough of staring into a monitor, I
        enjoy going out for a hike or at least doing something active. I&apos;m
        always on the lookout for new things to learn and food to eat!
      </p>
    </div>
  );
}
