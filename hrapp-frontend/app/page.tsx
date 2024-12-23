import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";

import { Button } from "@nextui-org/button";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Avatar, AvatarGroup } from "@nextui-org/avatar";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";

export default function Home() {
  return (
    <div>
      {/* <h1 className="text-4xl mb-6">Campaigns</h1> */}

      <section className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        <Card className="py-4 max-w- w-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="text-xl font-semibold">Regional Sales Manager</h4>

            <div className="flex flex-row gap-3 items-center">
              <small className="text-default-500">Candidates: 2</small>

              <Chip color="success" variant="flat">
                Live
              </Chip>
            </div>
          </CardHeader>
          <CardBody>
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="Earthcore.png"
            />
          </CardBody>

          <CardFooter className="flex justify-between items-center">
            <div className="flex gap-2">
              <Avatar
                size="sm"
                color="secondary"
                isBordered
                src="/keithfox.jpeg"
              />

              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  Keith Fox
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  Managed By
                </h5>
              </div>
            </div>

            <Button color="primary" radius="full">
              View
            </Button>
          </CardFooter>
        </Card>
        <Card className="py-4 max-w- w-full">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="text-xl font-semibold">Country Manager</h4>

            <div className="flex flex-row gap-3 items-center">
              <small className="text-default-500">Candidates: 0</small>

              <Chip color="warning" variant="flat">
                Draft
              </Chip>
            </div>
          </CardHeader>
          <CardBody>
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="Earthcore.png"
            />
          </CardBody>

          <CardFooter className="flex justify-between items-center">
            <div className="flex gap-2">
              <Avatar
                size="sm"
                color="secondary"
                isBordered
                src="/deran.jpeg"
              />

              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">
                  Deran Kılıçarslan
                </h4>
                <h5 className="text-small tracking-tight text-default-400">
                  Managed By
                </h5>
              </div>
            </div>

            <Button color="primary" radius="full">
              View
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
}
