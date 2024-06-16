import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export default function CardsServ({ products }) {
  return (
    <div className="flex flex-col sm:flex-row">
      <Image
        src={`https:${products.fields.thumbnail.fields.file.url}`}
        alt=""
        className="sm:w-1/2"
        width={products.fields.thumbnail.fields.file.details.image.width}
        height={products.fields.thumbnail.fields.file.details.image.width}
      />
      <div className="flex flex-col items-center justify-center bg-white p-5 text-center sm:w-1/2">
        <h2 className="flex text-2xl font-bold">
          {products.fields.productName}
        </h2>
        <div>
          {documentToReactComponents(products.fields.productDescription)}
        </div>
      </div>
    </div>
  );
}
