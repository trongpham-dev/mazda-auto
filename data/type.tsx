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
    productImage: "https://showroomxebinhduong.com/mazda2.jpg",
    productPrice: "479.000.000₫",
  },
  {
    productId: "mazda-3",
    productName: "MAZDA 3",
    productImage: "https://showroomxebinhduong.com/mazda3.jpg",
    productPrice: "669.000.000₫",
  },
  {
    productId: "mazda-6",
    productName: "MAZDA 6",
    productImage: "https://showroomxebinhduong.com/mazda6.jpg",
    productPrice: "889.000.000₫",
  },
  {
    productId: "mazda-cx30",
    productName: "MAZDA CX-30",
    productImage: "https://showroomxebinhduong.com/cx-30.png",
    productPrice: "849.000.000₫",
  },
  {
    productId: "mazda-cx3",
    productName: "MAZDA CX-3",
    productImage: "https://showroomxebinhduong.com/cx-3.png",
    productPrice: "649.000.000₫",
  },
  {
    productId: "mazda-cx5",
    productName: "MAZDA CX-5",
    productImage: "https://showroomxebinhduong.com/cx-5.jpg",
    productPrice: "839.000.000₫",
  },
  {
    productId: "mazda-cx8",
    productName: "MAZDA CX-8",
    productImage: "https://showroomxebinhduong.com/cx8.webp",
    productPrice: "1.079.000.000₫",
  },
  {
    productId: "mazda-bt50",
    productName: "MAZDA BT-50",
    productImage: "https://showroomxebinhduong.com/bt-50.png",
    productPrice: "659.000.000₫",
  },
];
