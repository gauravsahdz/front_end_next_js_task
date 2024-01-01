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
  return new ImageResponse(
    (
      <div tw="flex flex-1 flex-col justify-center items-center">
        <p tw="text-4xl font-bold">open the url to get products of category:</p>
        <h1 tw="text-4xl font-bold text-center uppercase">
          {params.searchTerm}
        </h1>
      </div>
    )
  );
}
