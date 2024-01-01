import { getProductById } from "@/app/api/product";
import { ImageResponse } from "next/server";

export const size = {
  width: 1200,
  height: "100%",
};

export const contentType = "image/png";

export default async function og({ params }: { params: { id: string } }) {
  const id = params.id;
  const product = await getProductById(Number(id));

  return new ImageResponse(
    (
      <img
        src={product?.image + "?w=1200&h=630&auto=format&q=75"}
        alt={product.name}
        tw="flex flex-1"
        height={size.height}
        width={size.width}
      />
    )
  );
}
