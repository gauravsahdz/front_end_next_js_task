import { ImageResponse } from "next/server";

export const size = {
  width: 1200,
  height: "100%",
};

export const contentType = "image/png";

export default async function og({
  params,
}: {
  params: { searchTerm: string };
}) {
  const url = `https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/OnlineStore%20-%20Search%20Result/Get%20products%20for%20${params.searchTerm}/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F8b85ec4c-69e8-4f73-8cc1-ce28b2f65418.jpg%3Ftoken%3DQuPOUCkiNcZThxQwpl_nf6rgaUTp04vTwbgG2EJZguM%26height%3D798%26width%3D1200%26expires%3D33240115970/og.png`;
  return new ImageResponse(
    (
      <img
        src={url}
        alt={params.searchTerm}
        tw="flex flex-1"
        height={size.height}
        width={size.width}
      />
    )
  );
}
