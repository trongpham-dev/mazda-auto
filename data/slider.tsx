import { StaticImageData } from "next/image";

export default interface SliderImage {
  imgUrl: string | StaticImageData;
  alt: string;
}

export let sliderImages: SliderImage[] = [
  {
    imgUrl: "/slide/mazda-sedan.jpg",
    alt: "Xe Mazda 2022",
  },
  {
    imgUrl: "/slide/mazda-cx5.jpg",
    alt: "Xe MAZDA CX5 2022",
  },
  {
    imgUrl: "/slide/mazda-suv-sedan.jpg",
    alt: "Xe MAZDA SEDAN SUV 2022",
  },
  {
    imgUrl: "/slide/mazda.jpg",
    alt: "Xe MAZDA 2022",
  },
];
