interface CarModel {
  modelName: string;
  modelPrice: string;
}

export default interface CarDetail {
  carId: string;
  carName: string;
  carImage: { original: string; thumbnail: string }[];
  carPrice: string;
  carModel: CarModel[];
  carVideo: string;
}

export let detail: CarDetail[] = [
  {
    carId: "mazda-2",
    carName: "NEW MAZDA 2",
    carImage: [
      {
        original: "/detail/mazda-2/mazda2-do.jpg",
        thumbnail: "/detail/mazda-2/mazda2-do.jpg",
      },
      {
        original: "/detail/mazda-2/mazda2-trang.jpg",
        thumbnail: "/detail/mazda-2/mazda2-trang.jpg",
      },
      {
        original: "/detail/mazda-2/mazda2-xanh.jpg",
        thumbnail: "/detail/mazda-2/mazda2-xanh.jpg",
      },
    ],
    carPrice: "454.000.000₫",
    carModel: [
      {
        modelName: "New Mazda 2 Sedan 1.5 AT Standard(E5): ",
        modelPrice: "454.000.000đ",
      },
      {
        modelName: "New Mazda 2 Sedan 1.5 Luxury(E5): ",
        modelPrice: "524.000.000đ",
      },
      {
        modelName: "New Mazda 2 Sedan 1.5 Premium(E5): ",
        modelPrice: "574.000.000₫",
      },
      {
        modelName: "New Mazda 2 Sport 1.5 Luxury(E5): ",
        modelPrice: "529.000.000₫",
      },
      {
        modelName: "New Mazda 2 Sport 1.5 Premium(E5): ",
        modelPrice: "579.000.000₫",
      },
    ],
    carVideo: "/detail/mazda-2/mazda2-clip.mp4",
  },
  {
    carId: "mazda-3",
    carName: "NEW MAZDA 3",
    carImage: [
      {
        original: "/detail/mazda-3/mazda3-do.jpg",
        thumbnail: "/detail/mazda-3/mazda3-do.jpg",
      },
      {
        original: "/detail/mazda-3/mazda3-den.jpg",
        thumbnail: "/detail/mazda-3/mazda3-den.jpg",
      },
      {
        original: "/detail/mazda-3/mazda3-xam.jpg",
        thumbnail: "/detail/mazda-3/mazda3-xam.jpg",
      },
      {
        original: "/detail/mazda-3/mazda3-trang.jpg",
        thumbnail: "/detail/mazda-3/mazda3-trang.jpg",
      },
      {
        original: "/detail/mazda-3/mazda3-sport-xam.jpg",
        thumbnail: "/detail/mazda-3/mazda3-sport-xam.jpg",
      },
      {
        original: "/detail/mazda-3/mazda3-sport-xanh.jpg",
        thumbnail: "/detail/mazda-3/mazda3-sport-xanh.jpg",
      },
    ],
    carPrice: "602.000.000₫",
    carModel: [
      {
        modelName: "All New Mazda 3 1.5L Deluxe: ",
        modelPrice: "602.000.000₫",
      },
      {
        modelName: "All New Mazda 3 1.5L Luxury: ",
        modelPrice: "664.000.000₫",
      },
      {
        modelName: "All New Mazda 3 1.5L Premium: ",
        modelPrice: "734.000.000₫",
      },
      {
        modelName: "All New Mazda 3 1.5L Sport Luxury: ",
        modelPrice: "694.000.000₫",
      },
      {
        modelName: "All New Mazda 3 1.5L Sport Premium: ",
        modelPrice: "754.000.000₫",
      },
    ],
    carVideo: "/detail/mazda-3/mazda3-clip.mp4",
  },
  {
    carId: "mazda-6",
    carName: "NEW MAZDA 6",
    carImage: [
      {
        original: "/detail/mazda-6/mazda6-bac.jpg",
        thumbnail: "/detail/mazda-6/mazda6-bac.jpg",
      },
      {
        original: "/detail/mazda-6/mazda6-den.jpg",
        thumbnail: "/detail/mazda-6/mazda6-den.jpg",
      },
      {
        original: "/detail/mazda-6/mazda6-nau.jpg",
        thumbnail: "/detail/mazda-6/mazda6-nau.jpg",
      },
      {
        original: "/detail/mazda-6/mazda6-trang.jpg",
        thumbnail: "/detail/mazda-6/mazda6-trang.jpg",
      },
      {
        original: "/detail/mazda-6/mazda6-vang.jpg",
        thumbnail: "/detail/mazda-6/mazda6-vang.jpg",
      },
      {
        original: "/detail/mazda-6/mazda6-xam.jpg",
        thumbnail: "/detail/mazda-6/mazda6-xam.jpg",
      },
    ],
    carPrice: "799.000.000₫",
    carModel: [
      {
        modelName: "New Mazda 6 2.0L Luxury: ",
        modelPrice: "799.000.000₫",
      },
      {
        modelName: "New Mazda 6 2.0L Premium: ",
        modelPrice: "854.000.000₫",
      },
      {
        modelName: "New Mazda 6 2.0L Premium(GTCCC): ",
        modelPrice: "899.000.000₫",
      },
      {
        modelName: "New Mazda 6 2.0L Signature Premium(GTCCC): ",
        modelPrice: "999.000.000₫",
      },
    ],
    carVideo: "/detail/mazda-6/mazda6-clip.mp4",
  },
  {
    carId: "mazda-cx3",
    carName: "NEW MAZDA CX5",
    carImage: [
      {
        original: "/detail/cx-5/cx5-xanh.jpg",
        thumbnail: "/detail/cx-5/cx5-xanh.jpg",
      },
      {
        original: "/detail/cx-5/cx5-den.jpg",
        thumbnail: "/detail/cx-5/cx5-den.jpg",
      },
      {
        original: "/detail/cx-5/cx5-nau.jpg",
        thumbnail: "/detail/cx-5/cx5-nau.jpg",
      },
      {
        original: "/detail/cx-5/cx5-do.jpg",
        thumbnail: "/detail/cx-5/cx5-do.jpg",
      },
      {
        original: "/detail/cx-5/cx5-trang.jpg",
        thumbnail: "/detail/cx-5/cx5-trang.jpg",
      },
      {
        original: "/detail/cx-5/cx5-vang-cat.jpg",
        thumbnail: "/detail/cx-5/cx5-vang-cat.jpg",
      },
      {
        original: "/detail/cx-5/cx5-xam.jpg",
        thumbnail: "/detail/cx-5/cx5-xam.jpg",
      },
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
        modelName: "Mazda CX-5 2.5L Signature Premium AWD: ",
        modelPrice: "1.059.000.000đ",
      },
    ],
    carVideo: "/detail/cx-5/cx5-clip.mp4",
  },
  {
    carId: "mazda-cx30",
    carName: "NEW MAZDA CX5",
    carImage: [
      {
        original: "/detail/cx-5/cx5-xanh.jpg",
        thumbnail: "/detail/cx-5/cx5-xanh.jpg",
      },
      {
        original: "/detail/cx-5/cx5-den.jpg",
        thumbnail: "/detail/cx-5/cx5-den.jpg",
      },
      {
        original: "/detail/cx-5/cx5-nau.jpg",
        thumbnail: "/detail/cx-5/cx5-nau.jpg",
      },
      {
        original: "/detail/cx-5/cx5-do.jpg",
        thumbnail: "/detail/cx-5/cx5-do.jpg",
      },
      {
        original: "/detail/cx-5/cx5-trang.jpg",
        thumbnail: "/detail/cx-5/cx5-trang.jpg",
      },
      {
        original: "/detail/cx-5/cx5-vang-cat.jpg",
        thumbnail: "/detail/cx-5/cx5-vang-cat.jpg",
      },
      {
        original: "/detail/cx-5/cx5-xam.jpg",
        thumbnail: "/detail/cx-5/cx5-xam.jpg",
      },
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
        modelName: "Mazda CX-5 2.5L Signature Premium AWD: ",
        modelPrice: "1.059.000.000đ",
      },
    ],
    carVideo: "/detail/cx-5/cx5-clip.mp4",
  },
  {
    carId: "mazda-cx5",
    carName: "NEW MAZDA CX5",
    carImage: [
      {
        original: "/detail/cx-5/cx5-xanh.jpg",
        thumbnail: "/detail/cx-5/cx5-xanh.jpg",
      },
      {
        original: "/detail/cx-5/cx5-den.jpg",
        thumbnail: "/detail/cx-5/cx5-den.jpg",
      },
      {
        original: "/detail/cx-5/cx5-nau.jpg",
        thumbnail: "/detail/cx-5/cx5-nau.jpg",
      },
      {
        original: "/detail/cx-5/cx5-do.jpg",
        thumbnail: "/detail/cx-5/cx5-do.jpg",
      },
      {
        original: "/detail/cx-5/cx5-trang.jpg",
        thumbnail: "/detail/cx-5/cx5-trang.jpg",
      },
      {
        original: "/detail/cx-5/cx5-vang-cat.jpg",
        thumbnail: "/detail/cx-5/cx5-vang-cat.jpg",
      },
      {
        original: "/detail/cx-5/cx5-xam.jpg",
        thumbnail: "/detail/cx-5/cx5-xam.jpg",
      },
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
        modelName: "Mazda CX-5 2.5L Signature Premium AWD: ",
        modelPrice: "1.059.000.000đ",
      },
    ],
    carVideo: "/detail/cx-5/cx5-clip.mp4",
  },
  {
    carId: "mazda-cx8",
    carName: "NEW MAZDA CX5",
    carImage: [
      {
        original: "/detail/cx-5/cx5-xanh.jpg",
        thumbnail: "/detail/cx-5/cx5-xanh.jpg",
      },
      {
        original: "/detail/cx-5/cx5-den.jpg",
        thumbnail: "/detail/cx-5/cx5-den.jpg",
      },
      {
        original: "/detail/cx-5/cx5-nau.jpg",
        thumbnail: "/detail/cx-5/cx5-nau.jpg",
      },
      {
        original: "/detail/cx-5/cx5-do.jpg",
        thumbnail: "/detail/cx-5/cx5-do.jpg",
      },
      {
        original: "/detail/cx-5/cx5-trang.jpg",
        thumbnail: "/detail/cx-5/cx5-trang.jpg",
      },
      {
        original: "/detail/cx-5/cx5-vang-cat.jpg",
        thumbnail: "/detail/cx-5/cx5-vang-cat.jpg",
      },
      {
        original: "/detail/cx-5/cx5-xam.jpg",
        thumbnail: "/detail/cx-5/cx5-xam.jpg",
      },
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
        modelName: "Mazda CX-5 2.5L Signature Premium AWD: ",
        modelPrice: "1.059.000.000đ",
      },
    ],
    carVideo: "/detail/cx-5/cx5-clip.mp4",
  },
  {
    carId: "mazda-bt50",
    carName: "NEW MAZDA CX5",
    carImage: [
      {
        original: "/detail/cx-5/cx5-xanh.jpg",
        thumbnail: "/detail/cx-5/cx5-xanh.jpg",
      },
      {
        original: "/detail/cx-5/cx5-den.jpg",
        thumbnail: "/detail/cx-5/cx5-den.jpg",
      },
      {
        original: "/detail/cx-5/cx5-nau.jpg",
        thumbnail: "/detail/cx-5/cx5-nau.jpg",
      },
      {
        original: "/detail/cx-5/cx5-do.jpg",
        thumbnail: "/detail/cx-5/cx5-do.jpg",
      },
      {
        original: "/detail/cx-5/cx5-trang.jpg",
        thumbnail: "/detail/cx-5/cx5-trang.jpg",
      },
      {
        original: "/detail/cx-5/cx5-vang-cat.jpg",
        thumbnail: "/detail/cx-5/cx5-vang-cat.jpg",
      },
      {
        original: "/detail/cx-5/cx5-xam.jpg",
        thumbnail: "/detail/cx-5/cx5-xam.jpg",
      },
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
        modelName: "Mazda CX-5 2.5L Signature Premium AWD: ",
        modelPrice: "1.059.000.000đ",
      },
    ],
    carVideo: "/detail/cx-5/cx5-clip.mp4",
  },
];
