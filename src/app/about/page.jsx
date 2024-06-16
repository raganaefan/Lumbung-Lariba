import Image from "next/image";
import TeamPhoto from "@/images/image-about.webp";
import TeamMember1 from "@/images/team-1.webp";
import TeamMember2 from "@/images/team-2.webp";
import TeamMember3 from "@/images/team-3.webp";

export const metadata = {
  title: "About",
};

export default function AboutUsPage() {
  return (
    <div className="bg-white text-gray-800">
      <section className="flex flex-col items-center justify-center bg-cyan-950 py-10 text-white">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 max-w-2xl text-center text-lg">
          Welcome to Lumbung Lariba! We specialize in delivering top-notch
          eCommerce solutions tailored to your business needs.
        </p>
      </section>
      <section className="mx-auto max-w-5xl p-6">
        <div className="flex flex-col items-center md:flex-row md:space-x-6">
          <Image
            src={TeamPhoto}
            alt="Our Team"
            className="w-full rounded-lg md:w-1/2"
          />
          <div className="mt-6 flex flex-col space-y-4 md:mt-0 md:w-1/2">
            <h2 className="text-2xl font-bold">Who We Are</h2>
            <p>
              At Lumbung Lariba, we specialize in delivering top-notch eCommerce
              solutions tailored to your business needs. Our mission is to
              empower businesses with cutting-edge technology and innovative
              strategies to maximize their online potential.
            </p>
            <p>
              Our team of experts brings together years of experience and a
              passion for excellence, ensuring that we deliver the best results
              for our clients. We believe in creating customized solutions that
              align with our clients&apos; unique goals and objectives.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10">
        <div className="mx-auto max-w-5xl p-6">
          <h2 className="text-center text-2xl font-bold">
            Our Mission & Vision
          </h2>
          <p className="mt-4 text-center">
            Our mission is to empower businesses with cutting-edge technology
            and innovative strategies to maximize their online potential. We
            believe in creating customized solutions that align with our
            clients' unique goals and objectives. By focusing on user experience
            and leveraging the latest advancements in technology, we ensure that
            our clients stay ahead in the competitive eCommerce landscape.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl p-6">
        <h2 className="text-center text-2xl font-bold">Our Team</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <Image
              src={TeamMember1}
              alt="Team Member 1"
              width={150}
              height={150}
              className="rounded-full"
            />
            <h3 className="mt-4 text-xl font-bold">John Doe</h3>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={TeamMember2}
              alt="Team Member 2"
              width={150}
              height={150}
              className="rounded-full"
            />
            <h3 className="mt-4 text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-600">Chief Technology Officer</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={TeamMember3}
              alt="Team Member 3"
              width={150}
              height={150}
              className="rounded-full"
            />
            <h3 className="mt-4 text-xl font-bold">Susi Susan</h3>
            <p className="text-gray-600">Head of Marketing</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-10">
        <div className="mx-auto max-w-5xl p-6">
          <h2 className="text-center text-2xl font-bold">Our Achievements</h2>
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>
              <strong>[2022]:</strong> Reached our first 100 clients, showcasing
              our rapid growth and market acceptance.
            </li>
            <li>
              <strong>[2023]:</strong> Launched our innovative eCommerce
              platform, transforming the way our clients do business online.
            </li>
            <li>
              <strong>[2024]:</strong> Expanded our services globally, helping
              businesses across different continents achieve their online goals.
            </li>
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-5xl p-6">
        <h2 className="text-center text-2xl font-bold">Join Us</h2>
        <p className="mt-4 text-center">
          We invite you to join us on this journey and experience the difference
          that Lumbung Lariba can make for your business. Whether you are
          looking to launch a new eCommerce site, enhance your digital presence,
          or optimize your online operations, we are here to help you achieve
          your goals.
        </p>
      </section>
    </div>
  );
}
