import { createClient } from "contentful";
import CardsServ from "./Cards-Serv";

async function getProducts() {
  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    });
    const res = await client.getEntries({ content_type: "productPage" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function ServicesCards() {
  const products = await getProducts();
  return (
    <div className="flex flex-wrap sm:flex-col">
      {products.map((products) => (
        <CardsServ key={products.sys.id} products={products} />
      ))}
    </div>
  );
}
