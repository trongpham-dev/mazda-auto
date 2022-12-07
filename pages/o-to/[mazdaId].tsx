import CarDetail, { detail } from "../../data/detail";
import "react-image-gallery/styles/css/image-gallery.css";
import React, { useEffect, useState } from "react";
import styles from "../o-to/mazda.module.css";
import ImageGallery from "react-image-gallery";
import MetaData from "../../data/meta";
import HeadSeo from "../../component/seo/HeadSeo";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

interface IParams extends ParsedUrlQuery {
  mazdaId: string;
}

interface Props {
  carDetail: CarDetail;
}
export default function Mazda(props: Props) {
  const [screenSize, setScreenSize] = useState(1920);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
  }, [props.carDetail, screenSize]);
  return props.carDetail ? (
    renderDetail(props.carDetail, screenSize)
  ) : (
    <h1>Content Not Found</h1>
  );
}

function renderDetail(carDetail: CarDetail, screenSize: number) {
  let metaData: MetaData = {
    title: `Mazda Bình Dương: ${carDetail.carName}`,
    description: `${carDetail.carName} | Mazda Bình Dương `,
    canonicalUrl: `https://www.otomazdabinhduong.com/o-to/${carDetail.carId}`,
    ogType: "image",
    ogImageUrl: carDetail.carImage[0]?.original,
  };

  return (
    <>
      <HeadSeo
        title={metaData.title}
        description={metaData.description}
        canonicalUrl={metaData.canonicalUrl}
        ogType={metaData.ogType}
        ogImageUrl={metaData.ogImageUrl}
      />
      <div className={styles.car_detail}>
        <div className={styles.car_detail_wrapper}>
          <div className={styles.car_infor_wrapper}>
            <div className={styles.car_image}>
              <ImageGallery
                thumbnailPosition={screenSize > 768 ? "bottom" : "left"}
                items={carDetail.carImage}
                showNav={false}
              />
            </div>
            <div className={styles.car_infor}>
              <h1 className={styles.car_name}>{carDetail.carName}</h1>
              <div className={styles.divider}></div>
              <div className={styles.price_wrapper}>
                <p className={styles.car_price}>
                  <span className={styles.amount}>{carDetail.carPrice}</span>
                </p>
              </div>
              <div className={styles.car_short_description}>
                <h4 className={styles.car_model_price}>
                  Giá xe {carDetail.carName}
                </h4>
                {carDetail.carModel.map((car) => (
                  <p className={styles.model_name} key={car.modelName}>
                    {car.modelName}
                    <span className={styles.model_price}>{car.modelPrice}</span>
                  </p>
                ))}
                <p className={styles.discount_infor}>
                  <strong>– Khuyến mãi &amp; ưu đãi</strong>
                  <br></br>
                  <em>
                    * Quý khách vui lòng liên hệ hotline tư vấn, nhận thông tin
                    ưu đãi &amp; khuyễn mãi.
                  </em>
                </p>
                <div className={styles.contact_infor}>
                  <a
                    rel="nofollow"
                    href="tel:0878584868"
                    target="_self"
                    className={styles.phone}
                  >
                    <span>087.858.4868</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {renderCar(carDetail.carId)}
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { mazdaId } = context.params as IParams;
  const carDetail = detail.filter((car) => car.carId === mazdaId)[0];
  return {
    props: {
      carDetail: carDetail,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = detail?.map((car) => {
    return {
      params: { mazdaId: car.carId },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

function renderCar(carId: string) {
  if (carId === "mazda-2") {
    return <RenderMazda2 />;
  } else if (carId === "mazda-3") {
    return <RenderMazda3 />;
  } else if (carId === "mazda-6") {
    return <RenderMazda6 />;
  } else if (carId === "mazda-cx3") {
    return <RenderMazdaCx3 />;
  } else if (carId === "mazda-cx30") {
    return <RenderMazdaCx30 />;
  } else if (carId === "mazda-cx5") {
    return <RenderMazdaCx5 />;
  } else if (carId === "mazda-cx8") {
    return <RenderMazdaCx8 />;
  } else if (carId === "mazda-bt50") {
    return <RenderMazdaBt50 />;
  } else {
    return <div>Content not found</div>;
  }
}

function RenderMazda2() {
  return (
    <div className={styles.description_wrapper}>
      <div className={styles.short_video}>
        <video width="1170" height="300" autoPlay={true} controls>
          <source
            src="https://www.otomazdabinhduong.com/detail/mazda-2/mazda2-clip.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          NEW MAZDA2 – PHONG CÁCH & NĂNG ĐỘNG
        </strong>
      </h2>
      <p className={styles.content}>
        <strong>New Mazda 2 </strong>Chậm rãi “Nhìn”,”Chạm” và “Cảm nhận”hơi thở
        sành điệu, tự tin trong thiết kế KODO của mẫu xe thế hệ mới. Mẫu xe
        hướng bạn đến hình mẫu mà bạn khao khát.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-2/mazda2-ngoai-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA 2"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          PHONG CÁCH THIẾT KẾ ẤN TƯỢNG
        </strong>
      </h2>
      <p className={styles.content}>
        Một chiếc xe có thể lay động cảm xúc và gợi lên sự thích thú ngay từ ánh
        nhìn đầu tiên.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-2/mazda2-first-look.jpg"
          width={1170}
          height={675}
          alt="MAZDA 2"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          TRẢI NGHIỆM ĐẦY CẢM HỨNG VÀ THÚ VỊ
        </strong>
      </h2>
      <p className={styles.content}>
        Lái xe dễ dàng ngay cả khi người dùng chưa đủ tự tin để lái xe.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-2/mazda2-drive.jpg"
          width={1170}
          height={675}
          alt="MAZDA 2"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          VẬN HÀNH MẠNH MẼ VÀ TỐI ƯU
        </strong>
      </h2>
      <p className={styles.content}>
        Lái xe với tâm trí thoải mái và tích cực, mang lại cảm hứng và sức sống.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-2/mazda2-drive-mode.jpg"
          width={1170}
          height={675}
          alt="MAZDA 2"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          NEW MAZDA2 PHONG CÁCH THIẾT KẾ ẤN TƯỢNG
        </strong>
      </h2>
      <p className={styles.content}>
        New Mazda2 một chiếc xe có thể lay động cảm xúc và gợi lên sự thích thú
        ngay từ ánh nhìn đầu tiên.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-2/mazda2-style.jpg"
          width={1170}
          height={675}
          alt="Mazda 2"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          NEW MAZDA2 SỰ KẾT HỢP HÀI HOÀ CỦA ÁNH SÁNG VÀ BÓNG TỐI
        </strong>
      </h2>
      <p className={styles.content}>
        Chủ đề thiết kế không gian bên trong của New Mazda2 là nghệ thuật thể
        hiện sự hài hoà của ánh sáng và bóng tối, cùng với chất lượng vật liệu
        để có thể tạo ra màu sắc phong phú và vẻ đẹp cho không gian.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-2/mazda2-inside.jpg"
          width={1170}
          height={675}
          alt="Mazda 2"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          VẬN HÀNH ỔN ĐỊNH VÀ LINH HOẠT
        </strong>
      </h2>
      <p className={styles.content}>
        New Mazda2 là sản phẩm tiếp theo của Mazda đạt chuẩn an toàn Euro NCAP
        nhờ vào các tính năng hỗ trợ an toàn chủ động i-Activsense. NCAP giúp
        người tiêu dùng, gia đình và những doanh nghiệp có thể so sánh các
        phương tiện dễ dàng hơn và giúp mọi người xác định sự lựa chọn nào là an
        toàn nhất cho mình. Tiêu chí đánh giá và chấm điểm của Euro NCAP bao
        gồm: Hệ thống hỗ trợ an toàn của xe, tính năng bảo vệ người lớn, bảo vệ
        trẻ em và bảo vệ người đi đường với một loạt các thử nghiệm được tổ chức
        thiết kế và thực hiện riêng.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-2/mazda2-van-hanh.jpg"
          width={1170}
          height={675}
          alt="Mazda 2"
        />
      </div>
    </div>
  );
}

function RenderMazda3() {
  return (
    <div className={styles.description_wrapper}>
      <div className={styles.short_video}>
        <video width="1170" height="300" autoPlay={true} controls>
          <source
            src="https://www.otomazdabinhduong.com/detail/mazda-3/mazda3-clip.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          ALL-NEW MAZDA 3 THẾ HỆ MỚI NHẤT ĐÃ XUẤT HIỆN
        </strong>
      </h2>
      <p className={styles.content}>
        <strong>ALL-NEW MAZDA 3 </strong>lấy cảm hứng từ mẫu concept nổi tiếng
        Vision Coupe – Mẫu xe Concept đẹp nhất thế giới năm 2018. Mazda3 được
        thiết kế Phong cách & Quyến rũ với các đường nét thanh thoát và sang
        trọng, khẳng định vẻ đẹp chuẩn mực vượt thời gian.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-3/mazda3-ngoai-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA 3"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          THIẾT KẾ ĐẠT ĐẲNG CẤP NGHỆ THUẬT
        </strong>
      </h2>
      <p className={styles.content}>
        Kế thừa ngôn ngữ thiết kế KODO – Linh hồn của sự chuyển động, bổ sung
        những giá trị tinh hoa của mỹ thuật truyền thống Nhật Bản và triết lý
        tinh giản “Less is more”, đội ngũ thiết kế Mazda đã nâng tầm sản phẩm
        thế hệ mới đạt đẳng cấp nghệ thuật – Car As Art. Thiết kế All-New Mazda3
        được tinh giản theo phong cách hiện đại, tạo cảm giác phấn khích và sống
        động qua sự bóng sáng được thay đổi theo ánh nhìn trên các đường nét của
        chiếc xe, theo thời gian trong ngày và theo mùa trong năm.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-3/mazda3-design.jpg"
          width={1170}
          height={675}
          alt="MAZDA 3"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          CÔNG NGHỆ AN TOÀN I-ACTIVSENSE
        </strong>
      </h2>
      <p className={styles.content}>
        Bộ tính năng an toàn i-Activsense® được nâng cấp với các cải tiến an
        toàn tinh vi sẽ cảnh báo bạn về những mối nguy hiểm để tránh va chạm.
        Với các tính năng duy nhất có trong phân khúc C như: điều khiển hành
        trình tích hợp radar (MRCC), hệ thống cảnh báo điểm mù (BSM), kiểm soát
        và giữ làn đường (LDWS – LAS), cảnh báo phương tiện cắt ngang khi lùi
        (RCTA) và nhiều tính năng khác. Những tính năng giúp bạn cải thiện tầm
        nhìn, hiểu rõ mặt đường và kiểm soát tình trạng giao thông xung quanh
        mình.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-3/mazda3-safety.png"
          width={1170}
          height={675}
          alt="MAZDA 3"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          HUMAN CENTRIC PHILOSOPHY
        </strong>
      </h2>
      <p className={styles.content}>
        Với triết lý thiết kế “Human Centric – Lấy con người làm trung tâm”,
        All-New Mazda3 với thiết kế bên trong tạo cảm giác hướng trục, tất cả
        chi tiết đều được bố trí xung quanh người sử dụng. Và mọi chi tiết đều
        được hướng đến người sử dụng để tăng cường sự kết nối giữa xe và người
        theo tinh thần “tương tác hoàn hảo”
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-3/mazda3-noi-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA 3"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          KIẾN TRÚC XE DỰA TRÊN CÔNG NGHỆ SKYACTIV
        </strong>
      </h2>
      <p className={styles.content}>
        Kiến trúc xe dựa trên công nghệ SkyActiv ( SkyActiv-Vehicle Architcture
        ) dựa vào triết lý “lấy con người làm trung tâm” để tối ưu hóa khả năng
        tự cân bằng của cơ thể con người. Người lái xe sẽ thoải mái hơn, ít mệt
        mỏi hơn và phản ứng nhanh với sự thay đổi môi trường xung quanh. Những
        đổi mới bao gồm: thiết kế lại ghế ngồi – giữ cho xương chậu thẳng đứng
        để duy trì đường cong tự nhiên của xương sống, tăng thêm độ liên kết của
        khung xe – tăng cường khả năng giảm chấn, tăng cường độ cứng dọc cho hệ
        thống treo để đảm bảo lực truyền theo phương thẳng đứng, thế hệ lốp xe
        mới có khả năng hấp thu ngoại lực và tương thích với hệ thống.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-3/mazda3-architecture.jpg"
          width={1170}
          height={675}
          alt="MAZDA 3"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          CẢM GIÁC LÁI ĐẦY HỨNG KHỞI
        </strong>
      </h2>
      <p className={styles.content}>
        Khởi động xe, lắng nghe tiếng động cơ và cảm nhận vô lăng khi lái chiếc
        All-New Mazda3 sẽ mang đến cho bạn những giây phút khó quên. Chính khả
        năng vận hành mạnh mẽ trong khi vẫn đảm bảo an toàn tối ưu là hai yếu tố
        đã tạo nên cảm giác lái phấn khích cho All-New Mazda3. Người lái được tự
        do trải nghiệm động cơ, công nghệ và các tính năng thú vị với sự an tâm
        tuyệt đối trên mọi cung đường
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-3/mazda3-drive-mode.jpg"
          width={1170}
          height={675}
          alt="MAZDA 3"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>ĐỘNG CƠ TRÊN MAZDA3</strong>
      </h2>
      <p className={styles.content}>
        Động cơ xăng SkyActiv-G 2.0L trên All-New Mazda3 cho công suất đạt 153
        mã lực và tạo ra momen xoắn 200 Nm, kết hợp cơ chế lái thể thao tạo nên
        khả năng tăng tốc nhanh nhạy trong khi vẫn vận hành êm ái, tiết kiệm
        nhiên liệu và giảm thiểu khí thải ra môi trường nhờ hệ thống i-Stop
        thông minh.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-3/mazda3-engine.jpg"
          width={1170}
          height={675}
          alt="MAZDA 3"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          TÍNH NĂNG G-VECTORING CONTROL PLUS
        </strong>
      </h2>
      <p className={styles.content}>
        Đây là một cách tiếp cận mới để kiểm soát động lực học của xe hơi, sử
        dụng động cơ và phanh để tăng cường hiệu suất xử lý, mang lại sự chuyển
        tiếp mượt mà hơn khi xe vào cua và thoát cua bằng cách kiểm soát các lực
        gia tốc trong mọi tình huống lái. Công nghệ GVC Plus còn cho phép điều
        khiển thời điểm chuyển hướng bằng cách tác động vào hệ thống phanh để
        tăng cường sự ổn định của xe, đặc biệt là khi thoát cua, khôi phục xe về
        đường chạy thẳng nhanh chóng. Tính năng GVC Plus giảm đáng kể sự cần
        thiết phải điều chỉnh tay lái, tăng độ tin cậy và giảm độ mỏi cho người
        lái trên mọi hành trình, hạn chế tối đa sự lắc lư của cơ thể để mang đến
        cho tất cả hành khách một chuyến đi thực sự êm ái.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-3/mazda3-control.jpg"
          width={1170}
          height={675}
          alt="MAZDA 3"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>CÔNG NGHỆ AN TOÀN</strong>
      </h2>
      <p className={styles.content}>
        All-New Mazda3 trang bị 7 túi khí, bao gồm túi khí đầu gối cho tất cả
        các phiên bản – điều này nhằm giảm áp lực quá mức từ dây đai an toàn,
        giúp cho người sử dụng không bị trượt khỏi dây đai khi va chạm. Đây là
        tiêu chuẩn an toàn duy nhất và vượt trội trong phân khúc C hiện tại. Bên
        cạnh đó, thân xe được sử dụng thép cường độ cao giúp gia tăng độ chắc
        chắn của thân xe.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-3/mazda3-more-safety.jpg"
          width={1170}
          height={675}
          alt="MAZDA 3"
        />
      </div>
    </div>
  );
}

function RenderMazda6() {
  return (
    <div className={styles.description_wrapper}>
      <div className={styles.short_video}>
        <video width="1170" height="300" autoPlay={true} controls>
          <source
            src="https://www.otomazdabinhduong.com/detail/mazda-6/mazda6-clip.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          NEW MAZDA6 – PHONG CÁCH VÀ LỊCH LÃM
        </strong>
      </h2>
      <p className={styles.content}>
        <strong>New Mazda 6 </strong>được thiết kế bằng cảm xúc, trau chuốt thêm
        phong cách của ngôn ngữ Kodo, ghi dấu ấn mạnh mẽ bằng những đường nét
        tinh tế và tràn đầy sức sống.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-6/mazda6-ngoai-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA 6 Ngoại Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          PHONG CÁCH THIẾT KẾ HIỆN ĐẠI, LỊCH LÃM
        </strong>
      </h2>
      <p className={styles.content}>
        New Mazda6 vẻ đẹp thực thụ trong thiết kế không đơn thuần là việc thỏa
        mãn yếu tố thẩm mỹ mà còn khơi gợi hứng khởi hành động trong mỗi người.
        New Mazda6 được tạo nên để giúp bạn mở rộng tầm nhìn, khám phá những
        chân trời mới và khai thác khả năng tiềm ẩn bên trong bạn.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-6/mazda6-design-style.jpg"
          width={1170}
          height={675}
          alt="MAZDA 6 Phong Cách Thiết Kế"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          KHÔNG GIAN MANG PHONG CÁCH SANG TRỌNG, TINH TẾ
        </strong>
      </h2>
      <p className={styles.content}>
        Không gian bên trong New Mazda6 được tinh chỉnh qua đôi bàn tay của các
        nghệ nhân bậc thầy để đạt đến độ hài lòng khi nhìn và thỏa mãn khi chạm.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-6/mazda6-inside.jpg"
          width={1170}
          height={675}
          alt="MAZDA 6 Khoang Nội Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>SANG TRỌNG, TINH TẾ</strong>
      </h2>
      <p className={styles.content}>
        Sử dụng các vật liệu tự nhiên như da Nappa và gỗ sen Nhật Bản mang đến
        sự sang trọng, tinh tế. Nhưng ứng dụng kỹ thuật Ultrasuede tương tự như
        khi trang trí các chi tiết công phu trên Kimono để hoàn thiện cánh cửa
        hay bảng điều khiển mới chính là yếu tố giúp New Mazda6 đạt đến sự đẳng
        cấp.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-6/mazda6-luxury.jpg"
          width={1170}
          height={675}
          alt="MAZDA 6 Sang Trọng Lịch Lãm"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>CÔNG NGHỆ</strong>
      </h2>
      <p className={styles.content}>
        Nâng cao chất lượng trải nghiệm lái xe với các trang bị cao cấp, tiện
        lợi được lựa chọn cẩn thận và dễ dàng sử dụng. – Màn hình cảm ứng 8” có
        thể điều chỉnh bằng núm xoay Mazda Connect – Kết nối Apple CarPlay và
        Android Auto – HUD hiển thị thông số trực quan ngay tầm mắt người lái –
        Hệ thống làm mát ghế tạo cảm giác thư thái, thoải mái trên mọi chặng
        hành trình
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-6/mazda6-tech.jpg"
          width={1170}
          height={675}
          alt="Công Nghệ Trên Mazda 6"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>ĐỘNG CƠ SKYACTIV-G MỚI</strong>
      </h2>
      <p className={styles.content}>
        Skyactiv-G thế hệ mới là động cơ xăng phun trực tiếp hiệu quả cao thể
        hiện hiệu suất nhanh và tiết kiệm nhiên liệu vượt trội nhờ tỷ số nén
        cao. Động cơ và hộp số mới tạo ra phản ứng chân ga nhạy hơn tại vòng tua
        thấp, giúp người lái dễ dàng điều khiển trong đô thị, đồng thời giúp vận
        hành tiết kiệm nhiên liệu hơn khi sử dụng xe hàng ngày
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-6/mazda6-engine.jpg"
          width={1170}
          height={675}
          alt="Động cơ trên Mazda 6"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          KIẾN TRÚC XE DỰA TRÊN CÔNG NGHỆ SKYACTIV
        </strong>
      </h2>
      <p className={styles.content}>
        Bên cạnh động cơ Skyactiv-G thế hệ mới mạnh mẽ và tối ưu, Mazda còn
        nghiên cứu kỹ cơ chế hoạt động của cơ thể con người để cải tiến khung
        gầm, thân xe, ghế ngồi, lốp xe nhằm tạo nên kết nối bản năng giữa người
        và xe, để đạt đến cảm giác lái phấn khích đích thực.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/mazda-6/mazda6-architecture.jpg"
          width={1170}
          height={675}
          alt="Kiến trúc Mazda 6"
        />
      </div>
    </div>
  );
}

function RenderMazdaCx3() {
  return (
    <div className={styles.description_wrapper}>
      <div className={styles.short_video}>
        <video width="1170" height="300" autoPlay={true} controls>
          <source
            src="https://www.otomazdabinhduong.com/detail/cx-3/cx3-clip.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          NEW MAZDA CX-3 – KHẲNG ĐỊNH ĐẲNG CẤP
        </strong>
      </h2>
      <p className={styles.content}>
        <strong>New Mazda 3 - </strong>Lựa chọn mới trong phân khúc SUV đô thị.
        Mẫu xe là sự kết hợp cân bằng giữa phong cách thiết năng động của mẫu xe
        SUV và trải nghiệm lái thú vị, linh hoạt của một chiếc Sedan. Sự kết hợp
        thú vị này sẽ mang đến nét riêng đặc trưng thể hiện cá tính và phong
        cách tự tin của người sở hữu.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-3/cx3-ngoai-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX3 Ngoại Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          NỘI THẤT HƯỚNG ĐẾN NGƯỜI SỬ DỤNG
        </strong>
      </h2>
      <p className={styles.content}>
        Mazda hiểu rằng không gian bên trong mỗi chiếc xe là yếu tố tạo niềm vui
        và cảm hứng, thức tỉnh mọi giác quan người sử dụng trên mọi cung đường.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-3/cx3-noi-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX3 Nội Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          VẬN HÀNH LINH HOẠT VÀ TIẾT KIỆM
        </strong>
      </h2>
      <p className={styles.content}>
        Hệ thống an toàn i-Activsense sử dụng các công nghệ tiên tiến để mang
        lại cho bạn cảm giác về “giác quan thứ sáu”, giúp cảnh báo các mối nguy
        tiềm ẩn.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-5/cx5-engine.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX3 Khung Máy"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          THIẾT KẾ ĐẦU XE ĐẬM DẤU ẤN THƯƠNG HIỆU
        </strong>
      </h2>
      <p className={styles.content}>
        Mazda CX-3 là mẫu SUV đô thị mới hướng đến các khách hàng yêu thích công
        nghệ, đề cao tính năng an toàn.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-3/cx3-design.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX3 Thiết Kế"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          KHÔNG GIAN NỘI THẤT TIỆN NGHI VÀ HIỆN ĐẠI
        </strong>
      </h2>
      <p className={styles.content}>
        Không gian xe được sắp xếp hướng trục và đối xứng mang lại cảm giác cân
        bằng, giao diện của các chi tiết đều hướng về phía người sử dụng giúp
        tương tác và điều khiển dễ dàng hơn.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-3/cx3-space.JPG"
          width={1170}
          height={675}
          alt="MAZDA CX3 Không Gian Nội Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          ĐÈN PHA THÍCH ỨNG THÔNG MINH HBC
        </strong>
      </h2>
      <p className={styles.content}>
        Giúp việc lái xe ban đêm trở nên an toàn hơn bằng cách điều khiển chuyển
        đổi chùm sáng cao thành chùm sáng thấp để bảo vệ các xe đi ngược chiều,
        chống…
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-3/cx3-hbc.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX3 Đèn Pha Thông minh HBC"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          HỆ THỐNG CẢNH BÁO LÀN ĐƯỜNG LDWS
        </strong>
      </h2>
      <p className={styles.content}>
        Hệ thống LDWS hoạt động bằng cách nhận diện vạch kẻ đường, và phát tính
        hiệu cảnh báo khi phát hiện người lái chuyển làn bất thường không có chủ
        đích
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-3/cx3-ldws.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX3 Hệ Thống Cảnh Báo"
        />
      </div>
    </div>
  );
}

function RenderMazdaCx30() {
  return (
    <div className={styles.description_wrapper}>
      <div className={styles.short_video}>
        <video width="1170" height="300" autoPlay={true} controls>
          <source src="/detail/cx-30/cx30-clip.mp4" type="video/mp4" />
        </video>
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          NEW MAZDA CX-30 – THẾ HỆ MỚI – ĐẲNG CẤP MỚI
        </strong>
      </h2>
      <p className={styles.content}>
        <strong>New Mazda CX-30 </strong>là mẫu SUV đầu tiên của thế hệ sản phẩm
        thứ 7 của Mazda. Mẫu xe được trang bị nền tảng công nghệ tiên tiến và
        hiện đại, đáp ứng nhu cầu ngày càng cao của khách hàng.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-30/cx30-ngoai-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX30 Ngoại Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          THIẾT KẾ ĐẦU XE ĐẬM DẤU ẤN THƯƠNG HIỆU
        </strong>
      </h2>
      <p className={styles.content}>
        Mazda CX-30 tiếp tục ứng dụng triết lý thiết kế KODO mới, với các đặc
        trưng riêng biệt của thương hiệu, mang lại niềm tự hào và đẳng cấp khác
        biệt cho người sở hữu. Mặt ca lăng phía trước là sự kết hợp của đường
        viền chrome biểu tượng đôi cánh của thương hiệu của Mazda, kết hợp với
        tính hiện đại của hệ thống đèn pha công nghệ LED.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-30/cx30-head.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX30 Đầu Xe"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          THÂN XE MAZDA CX-30 THU HÚT MỌI ÁNH NHÌN
        </strong>
      </h2>
      <p className={styles.content}>
        Mazda CX-30 thiết kế nóc xe cao, mở rộng kích thước khoang cửa sổ, mang
        lại tầm nhìn rộng và tư thế ngồi thoải mái cho người ngồi phía sau.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-30/cx30-body.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX30 Thân Xe"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          ĐUÔI XE BỀ THẾ VÀ VỮNG CHÃI
        </strong>
      </h2>
      <p className={styles.content}>
        Đuôi xe được thiết kế với triết lý đối xứng tạo cảm giác bề thế và vững
        chãi, kết hợp cụm đèn sau LED sắc sảo và hiện đại.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-30/cx30-duoi-xe.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX30 Đuôi Xe"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          KHÔNG GIAN NỘI THẤT TIỆN NGHI VÀ HIỆN ĐẠI
        </strong>
      </h2>
      <p className={styles.content}>
        Mazda CX-30 mang đến những trải nghiệm đẳng cấp, khác biệt và đầy hứng
        khởi với nhiều trang bị cao cấp vượt trội trong phân khúc. Nổi bật như
        nội thất da cao cấp, điều hòa tự động 2 vùng, phanh tay điện tử tích hợp
        chế độ giữ phanh Auto Hold, cửa sổ trời, cốp sau điều chỉnh điện. Ngoài
        ra, xe còn được trang bị những tiện nghi hàng đầu phân khúc như màn hình
        HUD màu hiển thị tốc độ trên kính lái, màn hình trung tâm 8.8 inch giao
        diện tiếng Việt kết nối Apple Carplay và Android Auto, kính chiếu hậu
        nhớ vị trí theo ghế lái và chống chói tự động bên cạnh các tính năng căn
        bản như chỉnh điện, gập điện tự động.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-30/cx30-inside.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX30 Nội Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          MAZDA CX-30 TRANG BỊ 7 TÚI KHÍ
        </strong>
      </h2>
      <p className={styles.content}>Tự tin di chuyển trên mọi hành trình</p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-30/cx30-safety.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX30 Túi Khí"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          CẢNH BÁO PHƯƠNG TIỆN CẮT NGANG KHI LÙI XE RCTA
        </strong>
      </h2>
      <p className={styles.content}>
        Hệ thống cảnh báo phương tiện cắt ngang, hoạt động dựa trên bộ Radar
        được gắn ở cản sau, hỗ trợ người lái phát hiện có phương tiện di chuyển
        cắt ngang…
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-30/cx30-rcta.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX30 Cảnh Báo Phương Tiện Cắt Ngang"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          HỆ THỐNG HỖ TRỢ GIỮ LÀN ĐƯỜNG LAS
        </strong>
      </h2>
      <p className={styles.content}>
        Cảnh báo và tác động một lực xoay vào tay lái khi phát hiện phương tiện
        có dấu hiệu di chuyển lệch khỏi quỹ đạo một cách không có chủ đích, giúp
        hạn…
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-30/cx30-las.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX30 Hệ Thống giữ Làn Đường"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          LINH HOẠT VỚI KHẢ NĂNG TIẾT KIỆM NHIÊN LIỆU TỐI ƯU
        </strong>
      </h2>
      <p className={styles.content}>
        Vận hành dựa trên công nghệ SKYACTIV thế hệ mới với động cơ SkyActiv-G
        mới được tinh chỉnh với phản ứng chân ga nhạy hơn, giúp dễ dàng điều
        khiển xe trong đô thị. Bên cạnh đó thiết kế Piston mới: Đầu Piston
        khuyết ở mép ngoài, giảm tiếng gõ (ồn) và độ rung. Vòng Xéc-măng mới,
        giảm thiểu ma sát, giảm tiếng ồn cùng kim phun kiểu mới (Kiểu phun
        sương): Nhiên liệu được phân bổ đồng đều và chính xác hơn. Hiệu năng
        được nâng tầm: Tăng 6.2% momen xoắn ở vòng tua thấp
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-30/cx30-engine.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX30 Động Cơ"
        />
      </div>
    </div>
  );
}

function RenderMazdaCx5() {
  return (
    <div className={styles.description_wrapper}>
      <div className={styles.short_video}>
        <video width="1170" height="300" autoPlay={true} controls>
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
          src="https://www.otomazdabinhduong.com/detail/cx-5/cx-5-ngoai-that.jpg"
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
          src="https://www.otomazdabinhduong.com/detail/cx-5/cx5-noi-that.jpg"
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
          src="https://www.otomazdabinhduong.com/detail/cx-5/cx5-drive.jpg"
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
          src="https://www.otomazdabinhduong.com/detail/cx-5/cx5-safety.jpg"
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
          src="https://www.otomazdabinhduong.com/detail/cx-5/cx5-engine.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX-5"
        />
      </div>
    </div>
  );
}

function RenderMazdaCx8() {
  return (
    <div className={styles.description_wrapper}>
      <div className={styles.short_video}>
        <video width="1170" height="300" autoPlay={true} controls>
          <source src="/detail/cx-8/cx8-clip.webm" type="video/webm" />
        </video>
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          NEW MAZDA CX-8 – KHẲNG ĐỊNH ĐẲNG CẤP
        </strong>
      </h2>
      <p className={styles.content}>
        Tại Mazda, không có chi tiết nào được xem là chi tiết nhỏ khi đề cập đến
        quá trình tạo nên một mẫu xe. Mazda CX-8 là sự kết hợp hoàn hảo từ thiết
        kế đến tiện nghi, công nghệ, giúp chiếc xe dễ dàng thu hút mọi ánh nhìn.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-8/cx8-ngoai-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX8 Ngoại Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          THỔI HỒN CUỘC SỐNG VÀO THIẾT KẾ
        </strong>
      </h2>
      <p className={styles.content}>
        Thiết kế KODO của Mazda: Triết lý thiết kế của Soul Motion truyền tải
        cảm giác về sức mạnh và năng lượng được thể hiện trong kiểu dáng thể
        thao của Mazda CX-8, mui xe thon dài và mái nhà thon. Hiệu ứng tổng thể
        là sự kết hợp giữa sức mạnh tổng hợp và chuyển động tức thời, tạo ra một
        chiếc SUV 7 chỗ thực sự nổi bật.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-8/cx8-design.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX8 Thiết Kế"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          TỰ TIN TẬN HƯỞNG CẢM GIÁC LÁI
        </strong>
      </h2>
      <p className={styles.content}>
        Với New Mazda CX8, Mazda đã chủ động đưa động cơ dung tích 2.5L vượt
        trội lên một mẫu SUV 5 chỗ khiến bất cứ ai sở hữu đều phải ngạc nhiên
        thích thú. Kết hợp với công nghệ SkyActiv phun xăng trực tiếp độc quyền
        do Mazda phát triển, New Mazda CX8 tự tin mang đến cho người dùng trải
        nghiệm lái xe phấn khích đích thực, thỏa mãn những ai ưa thích cảm giác
        lái thể thao trên một mẫu SUV đô thị.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-8/cx8-drive.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX8 Cảm giác Lái"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          CÔNG NGHỆ AN TOÀN HIỆN ĐẠI
        </strong>
      </h2>
      <p className={styles.content}>
        Với bộ tính năng an toàn i-Activsense cao cấp, New Mazda CX8 đã được các
        tổ chức đánh giá an toàn phương tiện nghiêm ngặt như Euro NCAP hay IIHS
        xếp hạng 5 sao (mức tối đa) về mức độ an toàn. Qua kiểm tra, New Mazda
        CX8 hoạt động ấn tượng trong cả 4 hạng mục thử nghiệm tại Euro NCAP, bao
        gồm: khả năng bảo vệ an toàn cho hành khách người lớn (Adult Occupant
        Protection – AOP), bảo vệ an toàn cho trẻ em (COP), bảo vệ an toàn cho
        người đi đường (Pedestrian safety) và các công nghệ hỗ trợ an toàn
        (Safety Assist Technologies – SAT).
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-8/cx8-safety.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX8 Trang Bị An Toàn"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          NỘI THẤT MAZDA CX-8 ĐẲNG CẤP, SANG TRỌNG
        </strong>
      </h2>
      <p className={styles.content}>
        Mazda CX-8 là mẫu xe duy nhất phân khúc trang bị da thuộc cao cấp Nappa,
        loại da tự nhiên, không chỉ mang đến cảm giác êm ái, mềm mại và mịn
        màng, thoáng khí. Bên cạnh đó là các chi tiết ốp gỗ Ayous sang trọng
        được chọn lọc và xử lý kỹ lưỡng. Tất cả hướng đến mục tiêu nâng cao đẳng
        cấp cho người sử dụng, tôn vinh giá trị và tăng trải nghiệm cho người sở
        hữu.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-8/cx8-noi-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX8 Nội Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>SUV 7 CHỖ ĐÍCH THỰC</strong>
      </h2>
      <p className={styles.content}>
        Mẫu SUV 7 chỗ mang đến không gian rộng rãi với hàng ghế thứ 3, tạo
        khoảng trống giúp hành khách để chân thoải mái. Hàng ghế thứ 3 thậm chí
        có thể đáp ứng các hành khách có chiều cao vượt trội. Việc ra vào cửa và
        hàng ghế thứ ba cũng rất dễ dàng.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-8/cx8-suv.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX8 SUV 7 Chỗ Đích Thực"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          TRANG BỊ TIỆN NGHI HÀNG ĐẦU PHÂN KHÚC
        </strong>
      </h2>
      <p className={styles.content}>
        Mazda CX-8 sở hữu khoang lái thiết kế hiện đại, tích hợp nhiều tính năng
        nhằm hỗ trợ tối đa người lái, giúp việc lái xe trở nên dễ dàng và bớt
        căng thẳng. Hàng ghế trước trang bị ghế chỉnh điện, ghế lái có tính năng
        nhớ vị trí; chức năng sưởi ghế; điều hoà tự động 3 vùng độc lập; gương
        chống chói; Mazda Connect, DVD; phanh tay điện tử, hệ thống tự động giữ
        phanh Auto Hold; chìa khoá thông minh, khởi động nút bấm; màn hình HUD
        hiển thị các thông tin quan trọng ngay tầm mắt người lái; và đặc biệt là
        hệ thống 10 loa Bose mang đến âm thanh chân thực, sống động.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-8/cx8-tech.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX8 Trang Bị Công Nghệ Cao Cấp"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          VẬN HÀNH DỄ DÀNG VỚI HỆ THỐNG SKYACTIV-VEHICLE DYNAMICS
        </strong>
      </h2>
      <p className={styles.content}>
        Hệ thống Skyactiv-Vehicle Dynamics và hệ thống kiểm soát gia tốc
        G-Vectoring Control đều là những công nghệ tiến tiến giúp người lái kiểm
        soát hành trình di chuyển tối ưu. Công nghệ này giúp xe duy trì sự êm ái
        ngay cả khi ôm cua và thoát cua.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-8/cx8-architect.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX8 Hệ Thống SKYACTIV-VEHICLE DYNAMICS"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          SỨC MẠNH ĐẾN TỪ ĐỘNG CƠ
        </strong>
      </h2>
      <p className={styles.content}>
        Mazda CX-8 đạt công suất cực đại 188 mã lực tại vòng tua 6000 vòng/phút
        và mô-men xoắn cực đại 252 Nm tại vòng tua 4000 vòng/phút.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/cx-8/cx8-engine.jpg"
          width={1170}
          height={675}
          alt="MAZDA CX8 Động Cơ Mạnh Mẽ"
        />
      </div>
    </div>
  );
}

function RenderMazdaBt50() {
  return (
    <div className={styles.description_wrapper}>
      <div className={styles.short_video}>
        <video width="1170" height="300" autoPlay={true} controls>
          <source
            src="https://www.otomazdabinhduong.com/detail/bt-50/bt50-clip.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          NEW MAZDA BT-50 – KHẲNG ĐỊNH ĐẲNG CẤP
        </strong>
      </h2>
      <p className={styles.content}>
        Mazda BT-50 2022 vẫn giữ nguyên kích thước tổng thể như cũ với các thông
        số dài x rộng x cao lần lượt tương ứng 5.280 x 1.870 x 1.800 (mm), chiều
        dài cơ sở 3.125 mm, khoảng sáng gầm 224 mm và bán kính quay vòng 6.1 (m)
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/bt-50/bt50-ngoai-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA BT-50 Ngoại Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          CHI TIẾT LÀM NÊN SỰ KHÁC BIỆT
        </strong>
      </h2>
      <p className={styles.content}>
        Không như những mẫu xe bán tải thiết kế chủ yếu cho nhu cầu chở hàng,
        All New Mazda BT-50 là sự kết hợp lý tưởng giữa không gian rộng rãi,
        thoải mái của dòng bán tải, cùng những tiện nghi hữu dụng của một chiếc
        SUV du lịch. Khoang lái Mazda BT-50 2022 là sự kết hợp hài hòa giữa
        những đường nét sang trọng, lịch lãm như trên các dòng xe du lịch nhưng
        cũng rất nam tính và gọn ghẽ. Xe sử dụng tông nâu chủ đạo cũng là màu
        duy nhất.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/bt-50/bt50-noi-that.jpg"
          width={1170}
          height={675}
          alt="MAZDA BT50 Nội Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>KHÔNG GIAN RỘNG RÃI</strong>
      </h2>
      <p className={styles.content}>
        Khoang nội thất của bán tải Mazda BT-50 thế hệ mới là sự kết hợp hoàn
        hảo giữa không gian rộng rãi, thoải mái của bán tải và tính tiện nghi,
        hiện đại và thực dụng của dòng SUV.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/bt-50/bt50-space.jpg"
          width={1170}
          height={675}
          alt="MAZDA BT50 Không Gian Nội Thất"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          CẢM GIÁC LÁI PHẤN KHÍCH ĐÍCH THỰC
        </strong>
      </h2>
      <p className={styles.content}>
        Tất cả 4 phiên bản All New Mazda BT-50 đều được trang bị động cơ diesel
        1.9L tích hợp công nghệ tăng áp biến thiên cánh tiên tiến cho công suất
        tối đa 148 mã lực và mô men xoắn cực đại 350 Nm, cùng tùy chọn hộp số tự
        động 6 cấp hoặc số sàn 6 cấp. Về khả năng off-road, Mazda BT-50 2022 sử
        dụng hệ dẫn động bốn bánh 4WD bán thời gian với các nấc điều chỉnh 2H,
        4H và 4L như đa phần các mẫu bán tải khác trên thị trường và có thêm
        khoá vi sai cầu sau hỗ trợ đắc lực cho việc off-road.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/bt-50/bt50-offroad.jpg"
          width={1170}
          height={675}
          alt="MAZDA BT50 Khả Năng Vận Hành Vượt Trội"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          CÁC CHẾ ĐỘ GÀI CẦU TRÊN BT-50
        </strong>
      </h2>
      <p className={styles.content}>
        Mazda BT-50 2022 sử dụng hệ dẫn động bốn bánh 4WD bán thời gian với các
        nấc điều chỉnh 2H, 4H và 4L như đa phần các mẫu bán tải khác trên thị
        trường và có thêm khoá vi sai cầu sau hỗ trợ đắc lực cho việc off-road.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/bt-50/bt50-drive-mode.jpg"
          width={1170}
          height={675}
          alt="MAZDA BT50 Các chế độ gài cầu"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          Hệ thống treo, khung gầm
        </strong>
      </h2>
      <p className={styles.content}>
        Phiên bản cũ của Mazda BT-50 từng sử dụng nền tảng T6 của Ford, áp dụng
        trên Ranger. Tuy nhiên, giờ đây, Mazda đã hợp tác với Isuzu và hiện đang
        sử dụng nền tảng của họ cho chiếc xe bán tải do họ đồng phát triển. Vì
        vậy, BT-50 mới sẽ có những bộ phận tương tự nếu không muốn nói là giống
        với D-Max. Điều này có nghĩa là chiếc xe bán tải mới sẽ có hệ thống treo
        giống Isuzu D-Max mà nó dựa trên.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/bt-50/bt50-khung-gam.jpg"
          width={1170}
          height={675}
          alt="MAZDA BT-50 Hệ Thống Khung Gầm Chắc Chắn"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          TRANG BỊ HỆ THỐNG TÚI KHÍ AN TOÀN
        </strong>
      </h2>
      <p className={styles.content}>
        All-New Mazda BT-50 trang bị 7 túi khí, bao gồm túi khí đầu gối cho tất
        cả các phiên bản – điều này nhằm giảm áp lực quá mức từ dây đai an toàn,
        giúp cho người sử dụng không bị trượt khỏi dây đai khi va chạm. Đây là
        tiêu chuẩn an toàn duy nhất và vượt trội trong phân khúc bán tải hiện
        tại. Bên cạnh đó, thân xe được sử dụng thép cường độ cao giúp gia tăng
        độ chắc chắn của thân xe.
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/bt-50/bt50-safety.jpg"
          width={1170}
          height={675}
          alt="MAZDA BT-50 Hệ thống túi khí"
        />
      </div>
      <h2 className={styles.title}>
        <strong className={styles.title_content}>
          ĐỘNG CƠ SDiesel 1.9L MẠNH MẼ VÀ TIẾT KIỆM NHIÊN LIỆU
        </strong>
      </h2>
      <p className={styles.content}>
        Cung cấp sức mạnh cho Mazda BT-50 là động cơ Diesel 1.9L. Nó sản sinh
        công suất cực đại 148 mã lực, mô-men xoắn 350Nm. Động cơ này được kết
        hợp với hộp số sàn 6 cấp hoặc tự động 6 cấp. Ngoài ra, BT-50 thế hệ mới
        còn có tùy chọn hệ thống truyền lực 4×2 hoặc 4×4
      </p>
      <div className={styles.image}>
        <Image
          src="https://www.otomazdabinhduong.com/detail/bt-50/bt50-engine.jpg"
          width={1170}
          height={675}
          alt="MAZDA BT-50 Động Cơ Mạnh Mẽ"
        />
      </div>
    </div>
  );
}
