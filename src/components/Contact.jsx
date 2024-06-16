export default function Contact() {
  const whatsappNumber = "+6287888189912";
  const whatsappMessage = "Halo, I am interested in your services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      <div className="mt-20">
        <div className="flex flex-col items-center bg-cyan-950 p-20 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Interested in Our Services?
          </h2>
          <p className="my-4 text-xl text-white">
            Contact us via WhatsApp for more information and to discuss your
            needs.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded bg-green-500 px-6 py-3 text-white hover:bg-green-600"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
