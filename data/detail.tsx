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
        original:
          "https://showroomxebinhduong.com/detail/mazda-2/mazda2-do.jpg",
        thumbnail: "/detail/mazda-2/mazda2-do.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-2/mazda2-trang.jpg",
        thumbnail: "/detail/mazda-2/mazda2-trang.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-2/mazda2-xanh.jpg",
        thumbnail: "/detail/mazda-2/mazda2-xanh.jpg",
      },
    ],
    carPrice: "479.000.000₫",
    carModel: [
      {
        modelName: "New Mazda 2 Sedan 1.5 AT Standard(E5): ",
        modelPrice: "479.000.000đ",
      },
      {
        modelName: "New Mazda 2 Sedan 1.5 Luxury(E5): ",
        modelPrice: "559.000.000đ",
      },
      {
        modelName: "New Mazda 2 Sedan 1.5 Premium(E5): ",
        modelPrice: "599.000.000₫",
      },
      {
        modelName: "New Mazda 2 Sport 1.5 Luxury(E5): ",
        modelPrice: "574.000.000₫",
      },
      {
        modelName: "New Mazda 2 Sport 1.5 Premium(E5): ",
        modelPrice: "614.000.000₫",
      },
    ],
    carVideo: "https://showroomxebinhduong.com/detail/mazda-2/mazda2-clip.mp4",
  },
  {
    carId: "mazda-3",
    carName: "NEW MAZDA 3",
    carImage: [
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-do.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-do.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-den.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-den.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-xam.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-xam.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-trang.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-trang.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-sport-xam.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-sport-xam.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-sport-xanh.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-3/mazda3-sport-xanh.jpg",
      },
    ],
    carPrice: "669.000.000₫",
    carModel: [
      {
        modelName: "All New Mazda 3 1.5L Deluxe: ",
        modelPrice: "669.000.000₫",
      },
      {
        modelName: "All New Mazda 3 1.5L Luxury: ",
        modelPrice: "719.000.000₫",
      },
      {
        modelName: "All New Mazda 3 1.5L Premium: ",
        modelPrice: "789.000.000₫",
      },
      {
        modelName: "All New Mazda 3 1.5L Sport Luxury: ",
        modelPrice: "739.000.000₫",
      },
      {
        modelName: "All New Mazda 3 1.5L Sport Premium: ",
        modelPrice: "789.000.000₫",
      },
    ],
    carVideo: "https://showroomxebinhduong.com/detail/mazda-3/mazda3-clip.mp4",
  },
  {
    carId: "mazda-6",
    carName: "NEW MAZDA 6",
    carImage: [
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-bac.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-bac.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-den.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-den.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-nau.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-nau.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-trang.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-trang.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-vang.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-vang.jpg",
      },
      {
        original:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-xam.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/mazda-6/mazda6-xam.jpg",
      },
    ],
    carPrice: "889.000.000₫",
    carModel: [
      {
        modelName: "New Mazda 6 2.0L Luxury: ",
        modelPrice: "889.000.000₫",
      },
      {
        modelName: "New Mazda 6 2.0L Premium: ",
        modelPrice: "949.000.000₫",
      },
      {
        modelName: "New Mazda 6 2.0L Premium(GTCCC): ",
        modelPrice: "999.000.000₫",
      },
      {
        modelName: "New Mazda 6 2.0L Signature Premium(GTCCC): ",
        modelPrice: "1.109.000.000₫",
      },
    ],
    carVideo: "https://showroomxebinhduong.com/detail/mazda-6/mazda6-clip.mp4",
  },
  {
    carId: "mazda-cx3",
    carName: "NEW MAZDA CX3",
    carImage: [
      {
        original: "https://showroomxebinhduong.com/detail/cx-3/cx3-do.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-3/cx3-do.jpg",
      },
      {
        original: "https://showroomxebinhduong.com/detail/cx-3/cx3-trang.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-3/cx3-trang.jpg",
      },
    ],
    carPrice: "649.000.000₫",
    carModel: [
      {
        modelName: "Mazda CX-3 Deluxe: ",
        modelPrice: "649.000.000₫",
      },
      {
        modelName: "Mazda CX-3 Luxury: ",
        modelPrice: "689.000.000đ",
      },
      {
        modelName: "Mazda CX-3 Premium: ",
        modelPrice: "729.000.000đ",
      },
    ],
    carVideo: "https://showroomxebinhduong.com/detail/cx-3/cx3-clip.mp4",
  },
  {
    carId: "mazda-cx30",
    carName: "NEW MAZDA CX30",
    carImage: [
      {
        original: "https://showroomxebinhduong.com/detail/cx-30/cx30-den.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-30/cx30-den.jpg",
      },
      {
        original: "https://showroomxebinhduong.com/detail/cx-30/cx30-trang.jpg",
        thumbnail:
          "https://showroomxebinhduong.com/detail/cx-30/cx30-trang.jpg",
      },
      {
        original: "https://showroomxebinhduong.com/detail/cx-30/cx30-do.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-30/cx30-do.jpg",
      },
    ],
    carPrice: "849.000.000₫",
    carModel: [
      {
        modelName: "Mazda CX-30 Luxury(E5): ",
        modelPrice: "849.000.000₫",
      },
      {
        modelName: "Mazda CX-30 Premium(E5): ",
        modelPrice: "909.000.000đ",
      },
    ],
    carVideo: "https://showroomxebinhduong.com/detail/cx-30/cx30-clip.mp4",
  },
  {
    carId: "mazda-cx5",
    carName: "NEW MAZDA CX5",
    carImage: [
      {
        original: "https://showroomxebinhduong.com/detail/cx-5/cx5-xanh.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-5/cx5-xanh.jpg",
      },
      {
        original: "https://showroomxebinhduong.com/detail/cx-5/cx5-den.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-5/cx5-den.jpg",
      },
      {
        original: "https://showroomxebinhduong.com/detail/cx-5/cx5-do.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-5/cx5-do.jpg",
      },
      {
        original: "https://showroomxebinhduong.com/detail/cx-5/cx5-trang.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-5/cx5-trang.jpg",
      },
      {
        original: "https://showroomxebinhduong.com/detail/cx-5/cx5-xam.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-5/cx5-xam.jpg",
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
    carVideo: "https://showroomxebinhduong.com/detail/cx-5/cx5-clip.mp4",
  },
  {
    carId: "mazda-cx8",
    carName: "NEW MAZDA CX8",
    carImage: [
      {
        original: "https://showroomxebinhduong.com/detail/cx-8/cx8-den.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-8/cx8-den.jpg",
      },
      {
        original: "https://showroomxebinhduong.com/detail/cx-8/cx8-xam.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-8/cx8-xam.jpg",
      },
      {
        original: "https://showroomxebinhduong.com/detail/cx-8/cx8-trang.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-8/cx8-trang.jpg",
      },
      {
        original: "https://showroomxebinhduong.com/detail/cx-8/cx8-do.jpg",
        thumbnail: "https://showroomxebinhduong.com/detail/cx-8/cx8-do.jpg",
      },
    ],
    carPrice: "1.079.000.000₫",
    carModel: [
      {
        modelName: "New Mazda CX-8 2.5L Luxury: ",
        modelPrice: "1.079.000.000₫",
      },
      {
        modelName: "New Mazda CX-8 2.5L Premium: ",
        modelPrice: "1.169.000.000₫",
      },
      {
        modelName: "New Mazda CX-8 2.5L Premium AWD: ",
        modelPrice: "1.259.000.000₫",
      },
      {
        modelName: "New Mazda CX-8 2.5L Premium AWD-6S: ",
        modelPrice: "1.269.000.000₫",
      },
    ],
    carVideo: "https://showroomxebinhduong.com/detail/cx-5/cx5-clip.mp4",
  },
  {
    carId: "mazda-bt50",
    carName: "NEW MAZDA BT-50",
    carImage: [
      {
        original: "https://showroomxebinhduong.com/detail/bt-50/bt50-xanh.png",
        thumbnail: "https://showroomxebinhduong.com/detail/bt-50/bt50-xanh.png",
      },
      {
        original: "https://showroomxebinhduong.com/detail/bt-50/bt50-xam.png",
        thumbnail: "https://showroomxebinhduong.com/detail/bt-50/bt50-xam.png",
      },
      {
        original: "https://showroomxebinhduong.com/detail/bt-50/bt50-trang.png",
        thumbnail:
          "https://showroomxebinhduong.com/detail/bt-50/bt50-trang.png",
      },
      {
        original: "https://showroomxebinhduong.com/detail/bt-50/bt50-do.png",
        thumbnail: "https://showroomxebinhduong.com/detail/bt-50/bt50-do.png",
      },
    ],
    carPrice: "659.000.000₫",
    carModel: [
      {
        modelName: "New Mazda BT-50 1.9MT 4x2(E5): ",
        modelPrice: "659.000.000₫",
      },
      {
        modelName: "New Mazda BT-50 1.9AT 4x2(E5): ",
        modelPrice: "709.000.000₫",
      },
      {
        modelName: "New Mazda BT-50 1.9 4x2 Luxury(E5): ",
        modelPrice: "809.000.000₫",
      },
      {
        modelName: "New Mazda BT-50 1.9 4x4 Premium(E5): ",
        modelPrice: "849.000.000₫",
      },
    ],
    carVideo: "https://showroomxebinhduong.com/detail/bt-50/bt50-clip.mp4",
  },
];
