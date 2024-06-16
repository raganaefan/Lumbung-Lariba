import Person from "@/images/person-1.webp";
import Person2 from "@/images/person-2.webp";
import Person3 from "@/images/person-3.webp";
import Image from "next/image";

const testimony = [
  {
    name: "Bob Sadino",
    image: <Image src={Person} alt="Bob Picture" />,
    position: "CEO Usaha Berkah",
    testimony: "Their SEO services boosted our site traffic by 200%!",
  },
  {
    name: "Jondo",
    image: <Image src={Person2} alt="Jondo Picture" />,
    position: "CEO Rahayu Bersatu",
    testimony:
      "The team at Lumbung Lariba transformed our online store. Their expertise in eCommerce is unmatched.",
  },
  {
    name: "Ucup Maricup",
    image: <Image src={Person3} alt="Bob Picture" />,
    position: "CEO Malas Sejahtera",
    testimony: "Outstanding service and quality. Highly recommend to everyone!",
  },
];

export default function TestimonyCard() {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-1 md:gap-5">
      {testimony.map((test, index) => (
        <div
          key={index}
          className="my-5 flex w-1/3 flex-col items-center gap-2 rounded-md bg-slate-100 p-2 text-center md:w-1/4"
        >
          <div className="m-auto mt-2 h-full w-1/2 bg-cover">{test.image} </div>
          <p>{test.testimony}</p>
          <p className="font-bold">{test.name}</p>
          <p>{test.position}</p>
        </div>
      ))}
    </div>
  );
}
