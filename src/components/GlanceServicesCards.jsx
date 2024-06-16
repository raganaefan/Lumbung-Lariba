import Image from "next/image";
import ProductLiveStreaming from "@/images/product-1.webp";
import ProductDigitalMarketing from "@/images/product-2.webp";
import ProductSEO from "@/images/product-3.webp";
import ProductCustomerService from "@/images/product-4.webp";

const glanceServices = [
  {
    image: (
      <Image
        src={ProductLiveStreaming}
        alt="A person do Live Streaming"
        className="rounded-2xl"
      />
    ),
    service: "Live Streaming",
    description:
      "Engaging your audience through live streaming events and product launches.",
  },
  {
    image: (
      <Image
        src={ProductDigitalMarketing}
        alt="Tablet contain Digital Marketing"
        className="rounded-2xl"
      />
    ),
    service: "Digital Marketing",
    description:
      "Implementing strategies to boost your online presence and drive sales.",
  },
  {
    image: (
      <Image
        src={ProductSEO}
        alt="Person looking up and there is SEO above"
        className="rounded-2xl"
      />
    ),
    service: "SEO Optimization",
    description: "Enhancing your website's visibility on search engines.",
  },
  {
    image: (
      <Image
        src={ProductCustomerService}
        alt="A Customer Service Person"
        className="rounded-2xl"
      />
    ),
    service: "Customer Service",
    description:
      "Offering exceptional customer support to enhance user satisfaction and loyalty.",
  },
];

export default function GlanceServicesCard() {
  return (
    <div className="my-5 mt-10 flex flex-wrap justify-center text-center">
      {glanceServices.map((service, index) => (
        <div
          key={index}
          className="flex w-1/2 flex-col sm:w-1/4 md:w-1/4 lg:w-1/4 xl:w-1/4 2xl:w-1/4"
        >
          <div className="mx-auto w-1/2">{service.image} </div>
          <p className="text-center font-bold text-white">{service.service}</p>
          <p className="text-center text-white">{service.description}</p>
        </div>
      ))}
    </div>
  );
}
