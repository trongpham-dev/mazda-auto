import { StaticImageData } from "next/image";

export default interface SliderImage {
  imgUrl: string | StaticImageData;
  alt: string;
}

export let sliderImages: SliderImage[] = [
  {
    imgUrl: "/slide/mazda-sport.jpg",
    alt: "MAZDA SPORT 2022",
  },
  {
    imgUrl: "/slide/mazda-suv.jpg",
    alt: "MAZDA SUV 2022",
  },
];
