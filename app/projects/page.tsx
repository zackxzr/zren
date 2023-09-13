"use client";

import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Image } from "@nextui-org/image";

export default function Projects() {
  return (
    <div className="mt-12">
      <p className="text-lg">Some things I&apos;ve built</p>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <Card
          className="pb-2"
          isPressable
          onPress={() => window.open("https://github.com/Zack-Ren/Hypnos")}
        >
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/hypnos.png"
            alt="hypnos"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">Hypnos</h1>
            <p className="text-sm text-zinc-400">
              An integrated platform to provide a seamless diagnosis experience
              for sleep specialists and their patients.
            </p>
          </CardBody>
          <CardFooter className="gap-2 flex-wrap">
            <Chip radius="sm">Flutter</Chip>
            <Chip radius="sm">React</Chip>
            <Chip radius="sm">MongoDB</Chip>
            <Chip radius="sm">C#</Chip>
            <Chip radius="sm">Python</Chip>
          </CardFooter>
        </Card>
        <Card
          className="pb-2"
          isPressable
          onPress={() =>
            window.open(
              "https://apps.apple.com/ca/app/neonatal-hemodynamics-cdss/id1560267229"
            )
          }
        >
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/pocusneo.png"
            alt="pocusneo"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">CDSS Hemodynamics</h1>
            <p className="text-sm text-zinc-400">
              A clinical decision support system mobile app aimed to guide
              neonatologists during hemodynamic assessment of newborns.
            </p>
          </CardBody>
          <CardFooter className="gap-2">
            <Chip radius="sm">Flutter</Chip>
          </CardFooter>
        </Card>
        <Card
          className="pb-2"
          isPressable
          onPress={() => window.open("https://github.com/Zack-Ren/grapht.ai")}
        >
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/graphtai.png"
            alt="graphtai"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">Grapht.ai</h1>
            <p className="text-sm text-zinc-400">
              Dermatology diagnosis, referral, and eduation platform utilizing
              computer vision to make dematology care accessible to a greater
              population
            </p>
          </CardBody>
          <CardFooter className="gap-2 flex-wrap">
            <Chip radius="sm">JavaScript</Chip>
            <Chip radius="sm">GCP Vision AI</Chip>
            <Chip radius="sm">Node.js</Chip>
            <Chip radius="sm">MongoDB</Chip>
            <Chip radius="sm">React</Chip>
          </CardFooter>
        </Card>
        <Card
          className="pb-2"
          isPressable
          onPress={() => window.open("https://github.com/Zack-Ren/ToHacks")}
        >
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/nearbuy.png"
            alt="nearbuy"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">NearBuy</h1>
            <p className="text-sm text-zinc-400">
              A mobile app designed to reduce the monopoly of third-party food
              delivery apps for local restaruants and instead support local
              businesses
            </p>
          </CardBody>
          <CardFooter className="gap-2">
            <Chip radius="sm">JavaScript</Chip>
            <Chip radius="sm">MongoDB</Chip>
            <Chip radius="sm">React Native</Chip>
          </CardFooter>
        </Card>
        <Card
          className="pb-2"
          isPressable
          onPress={() =>
            window.open("https://github.com/Agorize-Veritech/Veritech")
          }
        >
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/veritech.png"
            alt="veritech"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">Veritech</h1>
            <p className="text-sm text-zinc-400">
              A web based news aggregator that returns and classifies news
              articles by political stance based on a search query.
            </p>
          </CardBody>
          <CardFooter className="gap-2">
            <Chip radius="sm">Python</Chip>
            <Chip radius="sm">NLP</Chip>
            <Chip radius="sm">Azure</Chip>
          </CardFooter>
        </Card>
        <Card
          className="pb-2"
          isPressable
          onPress={() =>
            window.open("https://github.com/Zack-Ren/convolution-kernel")
          }
        >
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/filtering.png"
            alt="filtering"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">Image Filtering</h1>
            <p className="text-sm text-zinc-400">
              Image processing program which applies a filter to a .ppm image
              using a convolution kernel
            </p>
          </CardBody>
          <CardFooter className="gap-2">
            <Chip radius="sm">C</Chip>
          </CardFooter>
        </Card>
        <Card
          className="pb-2"
          isPressable
          onPress={() =>
            window.open("https://github.com/AdityaSharma6/SafeWayz")
          }
        >
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/safewayz.png"
            alt="safewayz"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">SafeWayz</h1>
            <p className="text-sm text-zinc-400">
              Android app that helps users find the safest routes through San
              Francisco using Dijkstra&apos;s algorithm with a crime rate
              dataset as weights
            </p>
          </CardBody>
          <CardFooter className="gap-2">
            <Chip radius="sm">Java</Chip>
            <Chip radius="sm">Android Studio</Chip>
            <Chip radius="sm">GSON</Chip>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
