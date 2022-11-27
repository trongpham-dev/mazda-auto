import { StaticImageData } from "next/image";

interface CarModel {
  modelName: string;
  modelPrice: string;
}
export default interface CarDetail {
  carId: string;
  carName: string;
  carImage: string[] | StaticImageData;
  carPrice: string;
  carModel: CarModel[];
  description: { payload: string };
}

export let detail: CarDetail[] = [
  {
    carId: "mazda-cx5",
    carName: "MAZDA CX5",
    carImage: [
      "/detail/cx-5/cx5-xanh.png",
      "/detail/cx-5/cx5-den.png",
      "/detail/cx-5/cx5-do.png",
      "/detail/cx-5/cx5-trang.png",
      "/detail/cx-5/cx5-vang-cat.png",
      "/detail/cx-5/cx5-xam.png",
    ],
    carPrice: "839.000.000₫",
    carModel: [
      {
        modelName: "Mazda CX-5 2.0L Deluxe: ",
        modelPrice: "839.000.000₫",
      },
      {
        modelName: "Mazda CX-5 2.0L Luxury: ",
        modelPrice: "879.000.000đ",
      },
      {
        modelName: "Mazda CX-5 2.0L Premium: ",
        modelPrice: "919.000.000đ",
      },
      {
        modelName: "Mazda CX-5 2.5L Luxury: ",
        modelPrice: "889.000.000đ",
      },
      {
        modelName: "Mazda CX-5 2.5L Signature Premium 2WD: ",
        modelPrice: "999.000.000đ",
      },
      {
        modelName: "Mazda CX-5 2.5L Signature Premium AWD: ",
        modelPrice: "1.059.000.000đ",
      },
    ],
    description: {
      payload: `
    <video width="750" height="500" controls>
    <source src="/detail/cx-5/cx5-clip.mp4" type="video/mp4" />
  </video>
  <Image
      src="/cx-3.jpg"
      fill
      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
    />`,
    },
  },
];
