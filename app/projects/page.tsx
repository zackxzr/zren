"use client";

import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

export default function Projects() {
  return (
    <div className="mt-12">
      <p className="text-lg">Some things I&apos;ve worked on</p>
      <div className="grid grid-cols-2 gap-6 mt-8">
        <Card className="pb-2" isPressable onPress={() => window.open("https://apps.apple.com/ca/app/neonatal-hemodynamics-cdss/id1560267229")}>
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/pocusneo.png"
            alt="pocusneo"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">CDSS Hemodynamics</h1>
            <p className="text-sm">
              A clinical decision support system mobile app aimed to guide
              neonatologists during hemodynamic assessment of newborns.
            </p>
          </CardBody>
          <CardFooter className="gap-2">
            <Chip>Flutter</Chip>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable onPress={() => window.open("https://github.com/Agorize-Veritech/Veritech")}>
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/veritech.png"
            alt="veritech"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">Veritech</h1>
            <p className="text-sm">
              A web based news aggregator that returns and classifies news
              articles by political stance based on a search query.
            </p>
          </CardBody>
          <CardFooter className="gap-2">
            <Chip>Python</Chip>
            <Chip>NLP</Chip>
            <Chip>Azure</Chip>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable onPress={() => window.open("https://github.com/Zack-Ren/grapht.ai")}>
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/graphtai.png"
            alt="graphtai"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">Grapht.ai</h1>
            <p className="text-sm">
              Dermatology diagnosis, referral, and eduation platform utilizing
              computer vision to make dematology care accessible to a greater
              population
            </p>
          </CardBody>
          <CardFooter className="gap-2 flex-wrap">
            <Chip>JavaScript</Chip>
            <Chip>GCP Vision AI</Chip>
            <Chip>Node.js</Chip>
            <Chip>MongoDB</Chip>
            <Chip>React</Chip>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable onPress={() => window.open("https://github.com/Zack-Ren/ToHacks")}>
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/nearbuy.png"
            alt="nearbuy"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">NearBuy</h1>
            <p className="text-sm">
              A mobile app designed to reduce the monopoly of third-party food
              delivery apps for local restaruants and instead support local
              businesses
            </p>
          </CardBody>
          <CardFooter className="gap-2">
            <Chip>JavaScript</Chip>
            <Chip>MongoDB</Chip>
            <Chip>React Native</Chip>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable onPress={() => window.open("https://github.com/Zack-Ren/convolution-kernel")}>
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/filtering.png"
            alt="filtering"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">Image Filtering</h1>
            <p className="text-sm">
              Image processing program which applies a filter to a .ppm image
              using a convolution kernel
            </p>
          </CardBody>
          <CardFooter className="gap-2">
            <Chip>C</Chip>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable onPress={() => window.open("https://github.com/Zack-Ren/SafeWayz")}>
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/safewayz.png"
            alt="safewayz"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">SafeWayz</h1>
            <p className="text-sm">
              Android app that helps users find the safest routes through San
              Francisco using Dijkstra&apos;s algorithm with a crime rate
              dataset as weights
            </p>
          </CardBody>
          <CardFooter className="gap-2">
            <Chip>Java</Chip>
            <Chip>Android Studio</Chip>
            <Chip>GSON</Chip>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable onPress={() => window.open("https://github.com/Zack-Ren/PillPal")}>
          <Image
            className="rounded-t-xl"
            radius="none"
            src="/pillpal.png"
            alt="pillpal"
          />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">PillPal</h1>
            <p className="text-sm">
              A mobile app designed to improve patient compliance when taking
              medications by tracking medications and sending reminders when
              needed
            </p>
          </CardBody>
          <CardFooter className="gap-2">
            <Chip>Flutter</Chip>
            <Chip>OpenCV</Chip>
            <Chip>pytesseract</Chip>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
