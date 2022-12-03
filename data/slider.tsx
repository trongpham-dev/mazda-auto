import { StaticImageData } from "next/image";

export default interface SliderImage {
  imgUrl: string | StaticImageData;
  alt: string;
}

export let sliderImages: SliderImage[] = [
  {
    imgUrl: "/slide/mazda-cx8.jpg",
    alt: "Xe Mazda 2022",
  },
  {
    imgUrl: "/slide/mazda-cx5.jpg",
    alt: "Xe MAZDA SEDAN SUV 2022",
  },
  {
    imgUrl: "/slide/mazda-cx3.jpg",
    alt: "Xe MAZDA CX5 2022",
  },
  {
    imgUrl: "/slide/mazda-suv-sedan.jpg",
    alt: "Xe MAZDA SEDAN SUV 2022",
  },
  {
    imgUrl: "/slide/mazda-bt-50.jpg",
    alt: "Xe MAZDA 2022",
  },
];
