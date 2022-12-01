import { StaticImageData } from "next/image";

interface Logo {
  imageUrl: string | StaticImageData;
  alt: string;
}

export let logo: Logo = {
  imageUrl: "/mazda.jpg",
  alt: "Mazda Binh Duong",
};
