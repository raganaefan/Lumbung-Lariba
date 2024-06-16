import Teams from "@/components/TeamMember";

export const metadata = {
  title: "Teams",
};

export default function TeamsPage() {
  return (
    <div>
      <section>
        <h2 className="mt-10 text-center text-4xl font-bold">Meet The Team</h2>
        <p className="mx-10 my-4 text-center text-xl sm:mx-40">
          Our team is the backbone of our company, bringing together a diverse
          group of talented professionals who are dedicated to delivering
          exceptional results for our clients. <br />
          Each member of our team plays a crucial role in our success, and we
          take pride in the expertise, creativity, and commitment that they
          bring to the table.
        </p>
      </section>
      <section>
        <Teams />
      </section>
    </div>
  );
}
