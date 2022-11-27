import { StaticImageData } from "next/image";

export default interface Car {
  productId: string;
  productName: string;
  productImage: string | StaticImageData;
  productPrice: string;
}

export let product_list: Car[] = [
  {
    productId: "mazda-cx5",
    productName: "Mazda CX-3",
    productImage: "/cx-5.png",
    productPrice: "849.000.000đ",
  },
  {
    productId: "mazda-cx5",
    productName: "Mazda CX-5",
    productImage: "/cx-5.png",
    productPrice: "849.000.000đ",
  },
  {
    productId: "mazda-cx5",
    productName: "Mazda CX-8",
    productImage: "/cx-5.png",
    productPrice: "849.000.000đ",
  },
  {
    productId: "mazda-cx5",
    productName: "Mazda CX-30",
    productImage: "/cx-30.jpg",
    productPrice: "849.000.000đ",
  },
  {
    productId: "mazda-cx5",
    productName: "Mazda 2",
    productImage: "/mazda2.jpg",
    productPrice: "849.000.000đ",
  },
  {
    productId: "mazda-cx5",
    productName: "Mazda 2 Sport",
    productImage: "/mazda2_sport.jpg",
    productPrice: "849.000.000đ",
  },
  {
    productId: "mazda-3-sport",
    productName: "Mazda 3 Sport",
    productImage: "/mazda3_sport.jpg",
    productPrice: "849.000.000đ",
  },
  {
    productId: "mazda-3",
    productName: "Mazda 3",
    productImage: "/mazda3.jpg",
    productPrice: "849.000.000đ",
  },
  {
    productId: "mazda-6",
    productName: "Mazda 6",
    productImage: "/mazda6.jpg",
    productPrice: "849.000.000đ",
  },
];
