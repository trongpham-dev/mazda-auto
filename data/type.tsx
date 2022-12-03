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
    productPrice: "479.000.000đ",
  },
  {
    productId: "mazda-3",
    productName: "MAZDA 3",
    productImage: "/mazda3.jpg",
    productPrice: "649.000.000đ",
  },
  {
    productId: "mazda-6",
    productName: "MAZDA 6",
    productImage: "/mazda6.jpg",
    productPrice: "889.000.000đ",
  },
  {
    productId: "mazda-cx30",
    productName: "MAZDA CX-30",
    productImage: "/cx-30.jpg",
    productPrice: "849.000.000đ",
  },
  {
    productId: "mazda-cx3",
    productName: "MAZDA CX-3",
    productImage: "/cx-3.jpg",
    productPrice: "649.000.000đ",
  },
  {
    productId: "mazda-cx5",
    productName: "MAZDA CX-5",
    productImage: "/cx-5.jpg",
    productPrice: "879.000.000đ",
  },
  {
    productId: "mazda-cx8",
    productName: "MAZDA CX-8",
    productImage: "/cx-8.jpg",
    productPrice: "999.000.000đ",
  },
  {
    productId: "mazda-bt50",
    productName: "MAZDA BT-50",
    productImage: "/bt-50.png",
    productPrice: "849.000.000đ",
  },
];
