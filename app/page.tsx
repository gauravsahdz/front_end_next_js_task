import HomePage from "@/app/(pages)/[homepage]/page";

export const metadata = {
  title: "Online Store",
  description: "Shop Clothing, personalizations, regular use, ornaments, ect....",
  url: "https://online-store-gauravsahdz.vercel.app/",
  image: "https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/OnlineStore/Shop%20what%20you%20need%20before%20it%20gets%20away/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2F4148343e-28ad-46af-bd12-4a5b3a4535dd.jpg%3Ftoken%3Dw2GvI2CKmpv4N3xkvx_zIHs771wNr9uSGZtq7jf62PQ%26height%3D800%26width%3D1200%26expires%3D33240006197/og.png",
}

export default function Home() {
  return (
    <>
      <HomePage />
    </>
  );
}
