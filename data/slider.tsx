import { StaticImageData } from "next/image";

export default interface SliderImage {
  imgUrl: string | StaticImageData;
  alt: string;
}

export let sliderImages: SliderImage[] = [
  {
    imgUrl: "https://www.otomazdabinhduong.com/slide/mazda-cx8.jpg",
    alt: "XE Mazda Cx8 2022",
  },
  {
    imgUrl: "https://www.otomazdabinhduong.com/slide/mazda-cx5.jpg",
    alt: "XE MAZDA CX5 2022",
  },
  {
    imgUrl: "https://www.otomazdabinhduong.com/slide/mazda-cx3.jpg",
    alt: "XE MAZDA CX3 2022",
  },
  {
    imgUrl: "https://www.otomazdabinhduong.com/slide/mazda-sedan.jpg",
    alt: "XE MAZDA 6 2022",
  },
  {
    imgUrl: "https://www.otomazdabinhduong.com/slide/mazda-bt-50.jpg",
    alt: "XE MAZDA BT-50 2022",
  },
];
