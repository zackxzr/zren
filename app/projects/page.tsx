import React from "react";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="mt-12">
      <p className="text-lg">Some things I've worked on</p>
      <div className="grid grid-cols-2 gap-6 mt-8">
        <Card className="pb-2" isPressable>
          <Image className="rounded-t-xl" radius="none" src="/pocusneo.png" />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">
              CDSS Hemodynamics -
              <span className="text-violet-400"> Flutter</span>
            </h1>
            <p className="text-sm">
              A clinical decision support system mobile app aimed to guide
              neonatologists during hemodynamic assessment of newborns.
            </p>
          </CardBody>
          <CardFooter>
            <Button>Link</Button>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable>
          <Image className="rounded-t-xl" radius="none" src="/veritech.png" />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">Veritech - Python (NLP), Azure, React</h1>
            <p className="text-sm">
              A web based news aggregator that returns and classifies news
              articles by political stance based on a search query.
            </p>
          </CardBody>
          <CardFooter>
            <Button>Link</Button>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable>
          <Image className="rounded-t-xl" radius="none" src="/graphtai.png" />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">
              Grapht.ai - GCP, node.js, MongoDB, React
            </h1>
            <p className="text-sm">
              Dermatology diagnosis, referral, and eduation platform utilizing
              computer vision to make dematology care accessible to a greater
              population
            </p>
          </CardBody>
          <CardFooter>
            <Button>Link</Button>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable>
          <Image className="rounded-t-xl" radius="none" src="/nearbuy.png" />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">
              NearBuy - React Native, MongoDB, JavaScript
            </h1>
            <p className="text-sm">
              A mobile app designed to reduce the monopoly of third-party food
              delivery apps for local restaruants and instead support local
              businesses
            </p>
          </CardBody>
          <CardFooter>
            <Button>Link</Button>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable>
          <Image className="rounded-t-xl" radius="none" src="/filtering.png" />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">Image Filtering - C</h1>
            <p className="text-sm">
              Image processing program which applies a filter to a .ppm image
              using a convolution kernel
            </p>
          </CardBody>
          <CardFooter>
            <Button>Link</Button>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable>
          <Image className="rounded-t-xl" radius="none" src="/safewayz.png" />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">
              SafeWayz - Java, Android Studio, GSON API
            </h1>
            <p className="text-sm">
              Android app that helps users find the safest routes through San
              Francisco using Dijkstra's algorithm with a crime rate dataset as
              weights
            </p>
          </CardBody>
          <CardFooter>
            <Button>Link</Button>
          </CardFooter>
        </Card>
        <Card className="pb-2" isPressable>
          <Image className="rounded-t-xl" radius="none" src="/pillpal.png" />
          <CardBody className="overflow-visible py-2">
            <h1 className="text-lg">PillPal - Flutter</h1>
            <p className="text-sm">
              A mobile app designed to improve patient compliance when taking
              medications by tracking medications and sending reminders when
              needed
            </p>
          </CardBody>
          <CardFooter>
            <Button>Link</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
