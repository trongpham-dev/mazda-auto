import { StaticImageData } from "next/image";

export default interface Car {
  productId: string;
  productName: string;
  productImage: string | StaticImageData;
  productPrice: string;
}

export let product_list: Car[] = [
  {
    productId: "mazda-2",
    productName: "MAZDA 2",
    productImage: "/mazda2.jpg",
    productPrice: "454.000.000₫",
  },
  {
    productId: "mazda-3",
    productName: "MAZDA 3",
    productImage: "/mazda3.jpg",
    productPrice: "602.000.000₫",
  },
  {
    productId: "mazda-6",
    productName: "MAZDA 6",
    productImage: "/mazda6.jpg",
    productPrice: "799.000.000₫",
  },
  {
    productId: "mazda-cx30",
    productName: "MAZDA CX-30",
    productImage: "/cx-30.png",
    productPrice: "794.000.000₫",
  },
  {
    productId: "mazda-cx3",
    productName: "MAZDA CX-3",
    productImage: "/cx-3.png",
    productPrice: "619.000.000₫",
  },
  {
    productId: "mazda-cx5",
    productName: "MAZDA CX-5",
    productImage: "/cx-5.jpg",
    productPrice: "839.000.000₫",
  },
  {
    productId: "mazda-cx8",
    productName: "MAZDA CX-8",
    productImage: "/cx8.webp",
    productPrice: "1.059.000.000₫",
  },
  {
    productId: "mazda-bt50",
    productName: "MAZDA BT-50",
    productImage: "/detail/bt-50/bt50-no-background.png",
    productPrice: "639.000.000₫",
  },
];
