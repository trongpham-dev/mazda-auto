import styles from "../pages/o-to/mazda.module.css";
import Image from "next/image";
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
  description: Function;
}

export let detail: CarDetail[] = [
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
    description: renderCx5,
  },
];

function renderCx5() {
  return (
    <div className={styles.description_wrapper}>
      <div className={styles.short_video}>
        <video width="1170" height="300" autoPlay controls>
          <source src="/detail/cx-5/cx5-clip.mp4" type="video/mp4" />
        </video>
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          NEW MAZDA CX-5 – KHẲNG ĐỊNH ĐẲNG CẤP
        </strong>
      </h2>
      <p className={styles.content}>
        <strong>New Mazda CX-5 </strong>được thiết kế bằng cảm xúc, trau chuốt
        thêm phong cách của ngôn ngữ Kodo, ghi dấu ấn mạnh mẽ bằng những đường
        nét tinh tế và tràn đầy sức sống.
      </p>
      <div className={styles.image}>
        <Image
          src="/detail/cx-5/cx-5-ngoai-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX-5"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          CHI TIẾT LÀM NÊN SỰ KHÁC BIỆT
        </strong>
      </h2>
      <p className={styles.content}>
        Dù chỉ nhìn ngắm hay bước vào buồng lái trải nghiệm, New Mazda CX-5 luôn
        mang đến cảm giác tự hào cho người sở hữu. Với các đường gân dập nổi
        chạy dọc thân xe, lưới tản nhiệt họa tiết đinh tán, đường viền mạ Chrome
        hình cánh chim sải cánh nối liền cụm đèn pha và mâm xe 19-inch, ngoại
        hình của New Mazda CX-5 đặc biệt mạnh mẽ và đậm chất thể thao. Khi bước
        vào bên trong, New Mazda CX-5 mang đến không gian rộng rãi và thoải mái
        cho tất cả vị trí ngồi với các tiện nghi được chăm chút đến từng chi
        tiết nhỏ như cụm nút xoay điều khiển Mazda Connect, hệ thống nút bấm, vô
        lăng cùng ghế bọc da, màn hình trung tâm cảm ứng 7 inch cùng hệ thống 10
        loa Bose cao cấp…
      </p>
      <div className={styles.image}>
        <Image
          src="/detail/cx-5/cx5-noi-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX-5"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          CẢM GIÁC LÁI PHẤN KHÍCH ĐÍCH THỰC
        </strong>
      </h2>
      <p className={styles.content}>
        Với New Mazda CX-5, Mazda đã chủ động đưa động cơ dung tích 2.5L vượt
        trội lên một mẫu SUV 5 chỗ khiến bất cứ ai sở hữu đều phải ngạc nhiên
        thích thú. Kết hợp với công nghệ SkyActiv phun xăng trực tiếp độc quyền
        do Mazda phát triển, New Mazda CX-5 tự tin mang đến cho người dùng trải
        nghiệm lái xe phấn khích đích thực, thỏa mãn những ai ưa thích cảm giác
        lái thể thao trên một mẫu SUV đô thị.
      </p>
      <div className={styles.image}>
        <Image
          src="/detail/cx-5/cx5-drive.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX-5"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          TỰ TIN VỚI CÔNG NGHỆ AN TOÀN CAO CẤP
        </strong>
      </h2>
      <p className={styles.content}>
        Với bộ tính năng an toàn i-Activsense cao cấp, New Mazda CX-5 đã được
        các tổ chức đánh giá an toàn phương tiện nghiêm ngặt như Euro NCAP hay
        IIHS xếp hạng 5 sao (mức tối đa) về mức độ an toàn. Qua kiểm tra, New
        Mazda CX-5 hoạt động ấn tượng trong cả 4 hạng mục thử nghiệm tại Euro
        NCAP, bao gồm: khả năng bảo vệ an toàn cho hành khách người lớn (Adult
        Occupant Protection – AOP), bảo vệ an toàn cho trẻ em (COP), bảo vệ an
        toàn cho người đi đường (Pedestrian safety) và các công nghệ hỗ trợ an
        toàn (Safety Assist Technologies – SAT).
      </p>
      <div className={styles.image}>
        <Image
          src="/detail/cx-5/cx5-safety.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX-5"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          ĐỘNG CƠ SKYACTIV-G 2.5 MẠNH MẼ VÀ TIẾT KIỆM NHIÊN LIỆU
        </strong>
      </h2>
      <p className={styles.content}>
        Một trong những yếu tố căn bản giúp New Mazda CX-5 chiếm lĩnh thị trường
        chính là bộ động cơ SkyActiv-G trứ danh giúp tăng công suất lên 15% so
        với thông thường, đồng thời tiết kiệm nhiên liệu từ 15-30% và giảm khí
        thải ra môi trường.New Mazda CX-5 còn sử dụng hộp số tự động 6 cấp (AT)
        SkyActiv thay vì hộp số vô cấp CVT, với khả năng khóa ly hợp tại mọi dãy
        vòng quay, đảm bảo khả năng vận hành ổn định và chính xác trong tất cả
        các tình huống. Hộp số tự động 6 cấp (AT) luôn được đánh giá cao bởi độ
        tin cậy cũng như khả năng vận hành mạnh mẽ.
      </p>
      <div className={styles.image}>
        <Image
          src="/detail/cx-5/cx5-engine.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX-5"
        />
      </div>
    </div>
  );
}
