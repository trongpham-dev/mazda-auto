import { StaticImageData } from "next/image";

export default interface SliderImage {
  imgUrl: string | StaticImageData;
  alt: string;
}
