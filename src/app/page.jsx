import React from "react";
import Link from "next/link";
import Image from "next/image";

import ImageCompany from "@/images/image-home.webp";
import Hero from "@/images/hero.webp";
import TestimonyCard from "@/components/TestimonyCards";
import GlanceServicesCard from "@/components/GlanceServicesCards";
import Client1 from "@/images/client-1.webp";
import Client2 from "@/images/client-2.webp";
import Client3 from "@/images/client-3.webp";

export default function HomePage() {
  return (
    <div className="bg-cyan-950">
      <section
        className="h-96 bg-cover bg-center opacity-70 sm:h-screen"
        style={{
          backgroundImage: `url('${Hero.src}'
          )`,
        }}
      >
        <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center">
          <h1 className="text-center text-2xl font-bold text-white sm:max-2xl:text-4xl 2xl:text-6xl">
            Innovative Solutions for Your Online Success
          </h1>
        </div>
      </section>
      <section className="my-10 flex flex-col items-center px-4 text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Who we are?
        </h2>
        <h3 className="mt-4 text-xl text-white md:mx-20 lg:max-xl:mx-40 2xl:text-4xl">
          At Lumbung Lariba, we specialize in delivering top-notch eCommerce
          solutions tailored to your business needs. Our mission is to empower
          businesses with cutting-edge technology and innovative strategies to
          maximize their online potential.
        </h3>
        <button className="mt-5 flex w-2/3 justify-center rounded-2xl bg-white py-2 md:w-1/3 lg:w-1/6 xl:text-xl">
          <Link href="/about">Learn more about our Company</Link>
        </button>
      </section>
      <section className="bg-white sm:flex-col">
        <TestimonyCard />
      </section>
      <section className="my-20 flex flex-col items-center px-4 text-center">
        <h2 className="text-4xl font-bold text-white md:text-5xl">
          Our end-to-end services
        </h2>
        <h3 className="mt-4 text-xl text-white md:mx-20 lg:mx-40 xl:mx-40 2xl:mx-40">
          Our mission is to empower businesses with cutting-edge technology and
          innovative strategies to maximize their online potential. We believe
          in creating customized solutions that align with our clients&apos;
          unique goals and objectives. By focusing on user experience and
          leveraging the latest advancements in technology, we ensure that our
          clients stay ahead in the competitive eCommerce landscape.
        </h3>
        <GlanceServicesCard />
        <button className="mt-5 flex w-2/3 justify-center rounded-2xl bg-white py-2 md:w-1/3 lg:w-1/6">
          <Link href="/services">Learn more about our Services</Link>
        </button>
      </section>
      <section className="bg-white px-4 pt-10 text-center">
        <div className="flex flex-col">
          <h2 className="mb-4 text-4xl font-bold sm:text-3xl">
            Company Overview
          </h2>
          <p className="mb-4 md:mx-20 lg:mx-40">
            Our team of experts is dedicated to providing comprehensive
            services, including web development, digital marketing, SEO
            optimization, and consulting. Each team member brings a wealth of
            experience and a passion for excellence, ensuring that we deliver
            the best results for our clients.
          </p>
          <p className="mb-4 md:mx-20 lg:mx-40">
            We are proud of the culture we have built at Lumbung Lariba. Our
            workplace is defined by creativity, innovation, and a relentless
            pursuit of excellence. We foster an environment where every team
            member feels valued and empowered to contribute their best work.
          </p>
          <p className="mb-4 md:mx-20 lg:mx-40">
            We invite you to join us on this journey and experience the
            difference that Lumbung Lariba can make for your business. Whether
            you are looking to launch a new eCommerce site, enhance your digital
            presence, or optimize your online operations, we are here to help
            you achieve your goals.
          </p>
        </div>
      </section>
      <section
        className="h-96 bg-cover bg-center opacity-70 sm:h-screen"
        style={{
          backgroundImage: `url('${ImageCompany.src}'
          )`,
        }}
      >
        <div className="relative h-96 sm:h-screen">
          <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-8 bg-cyan-950 bg-opacity-50">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Our Happy Clients
            </h2>
            <div className="flex flex-row items-center space-y-8">
              <div className="flex justify-center">
                <Image
                  src={Client1}
                  alt="Client 1"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={Client2}
                  alt="Client 2"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={Client3}
                  alt="Client 3"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
