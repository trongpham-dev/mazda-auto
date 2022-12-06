import { StaticImageData } from "next/image";

export default interface SliderImage {
  imgUrl: string | StaticImageData;
  alt: string;
}

export let sliderImages: SliderImage[] = [
  {
    imgUrl: "https://www.otomazdabinhduong.com/slide/mazda-cx8.jpg",
    alt: "Xe Mazda 2022",
  },
  {
    imgUrl: "https://www.otomazdabinhduong.com/slide/mazda-cx5.jpg",
    alt: "Xe MAZDA SEDAN SUV 2022",
  },
  {
    imgUrl: "https://www.otomazdabinhduong.com/slide/mazda-cx3.jpg",
    alt: "Xe MAZDA CX5 2022",
  },
  {
    imgUrl: "https://www.otomazdabinhduong.com/slide/mazda-sedan.jpg",
    alt: "Xe MAZDA 6 2022",
  },
  {
    imgUrl: "https://www.otomazdabinhduong.com/slide/mazda-bt-50.jpg",
    alt: "Xe MAZDA 2022",
  },
];
