import Contact from "@/components/Contact";
import ServicesCards from "@/components/ServicesCards";
import TestimonyCard from "@/components/TestimonyCards";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cyan-950">
        <h2 className="bg-cyan-950 p-20 text-center text-3xl font-bold text-white sm:text-5xl">
          Our Services
        </h2>
      </section>
      <section>
        <ServicesCards />
      </section>
      <section className="bg-white sm:flex-col">
        <h2 className="bg-cyan-950 p-20 text-center text-3xl font-bold text-white sm:text-5xl">
          Testimony of our Customers
        </h2>
        <TestimonyCard />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}
