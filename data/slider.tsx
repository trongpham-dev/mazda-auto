import { StaticImageData } from "next/image";

export default interface SliderImage {
  imgUrl: string | StaticImageData;
  alt: string;
}

export let sliderImages: SliderImage[] = [
  {
    imgUrl: "/slide1.jpg",
    alt: "MAZDA CX-5 2022",
  },
  {
    imgUrl: "/slide1.jpg",
    alt: "MAZDA CX-30 2022",
  },
  // {
  //   imgUrl: "/slide/mazda-2.jpg",
  //   alt: "MAZDA 2 2022",
  // },
  // {
  //   imgUrl: "/slide/mazda-3.jpg",
  //   alt: "MAZDA 3 2022",
  // },
  // {
  //   imgUrl: "/slide/mazda-6.jpg",
  //   alt: "MAZDA 6 2022",
  // },
];
