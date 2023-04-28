import React from "react";

export function Home() {
    return (
        <div>
            <div className="mt-2">
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="{0}"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="{1}"
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="{2}"
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="../img/62371531.jpg"
                                className="d-block w-100"
                                height={500}
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="../img/128145956.jpg"
                                className="d-block w-100"
                                height={500}
                                alt="..."
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="../img/207296917.jpg"
                                className="d-block w-100"
                                height={500}
                                alt="..."
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
        <span className="carousel-control-prev-icon" aria-hidden="true">
          <span className="visually-hidden">Previous</span>
        </span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
        <span className="carousel-control-next-icon" aria-hidden="true">
          <span className="visually-hidden">Next</span>
        </span>
                    </button>
                </div>
            </div>
            <div className="container" style={{marginTop: 50}}>
                <div className="row mt-5">
                    <div className="col-6">
                        <div style={{color: "#09572c"}} className="fw-bold fs-4">
                            KHU NGHỈ DƯỠNG ĐẲNG CẤP THẾ GIỚI FURAMA ĐÀ NẴNG, TỰ HÀO LÀ KHU NGHỈ
                            DƯỠNG ẨM THỰC TẠI VIỆT NAM
                        </div>
                        <div
                            className="my-3 d-flex justify-content-center"
                            style={{width: "95%"}}
                        >
                            Hướng ra bãi biển Đà Nẵng trải dài cát trắng, Furama Resort Đà Nẵng là
                            cửa ngõ đến với 3 di sản văn hoá thế giới: Hội An (20 phút), Mỹ Sơn
                            (90 phút) và Huế (2 tiếng). 196 phòng hạng sang cùng với 70 căn biệt
                            thự từ hai đến bốn phòng ngủ có hồ bơi riêng đều được trang trí trang
                            nhã, theo phong cách thiết kế truyền thống của Việt Nam và kiến trúc
                            thuộc địa của Pháp, biến Furama thành khu nghỉ dưỡng danh giá nhất tại
                            Việt Nam – vinh dự được đón tiếp nhiều người nổi tiếng, giới hoàng
                            gia, chính khách, ngôi sao điện ảnh và các nhà lãnh đạo kinh doanh
                            quốc tế.
                        </div>
                        <img src="../img/CULIRARY.jpg" width="100%" alt=""/>
                    </div>
                    <div className="col-6">
                        <img
                            src="../img/02.-ICP-ICP_Furama_Danang_-Ball-Room-4.jpg"
                            width="100%"
                            alt=""
                        />
                        <div
                            className="my-3 d-flex justify-content-center"
                            style={{width: "95%"}}
                        >
                            Ẩm thực tại khu nghỉ dưỡng là trải nghiệm kết hợp giữa các món ăn Việt
                            Nam, châu Á, Ý và châu Âu cùng các món bít tết nhập khẩu hảo hạng. Khu
                            nghỉ dưỡng mang đến cho quý khách những không gian ẩm thực đa dạng bao
                            gồm – quầy bar nhìn ra biển, hồ bơi Lagoon được bao quanh bởi khu vườn
                            nhiệt đới, ẩm thực truyền thống Ý tại nhà hàng Don Cipriani’s, chất Á
                            Đông tại Café Indochine hay nhà hàng bít tết “The Fan – Cái Quạt” nằm
                            ngay trên bãi biển. Khu nghỉ dưỡng Furama Đà Nẵng còn gây ấn tượng và
                            tạo nhiều thích thú cho khách thông qua các chương trình vui chơi đầy
                            thú vị như các chuyến du ngoạn, thể thao trên nước, lặn biển và chơi
                            golf cũng như các dịch vụ chăm sóc sức khoẻ và sắc đẹp.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}