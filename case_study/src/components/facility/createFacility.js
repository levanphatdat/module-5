import {Link} from "react-router-dom";

export function CreateFacility() {
    return (
        <div className="row">
            <div className="col-3"/>
            <div
                className="col-6"
                style={{
                    background: "#afa354",
                    margin: "80px 70px 30px",
                    padding: "25px 25px"
                }}
            >
                <h1 className="d-flex justify-content-center">Thêm mới dịch vụ</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Tên dịch vụ
                        </label>
                        <input type="text" className="form-control" id="exampleInputEmail1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Diện tích sử dụng
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Số lượng người tối đa
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Kiểu thuê
                        </label>
                        <select className="form-select" aria-label="Default select example">
                            <option selected="">--- Chọn kiểu thuê ---</option>
                            <option value={1}>Năm</option>
                            <option value={2}>Tháng</option>
                            <option value={3}>Ngày</option>
                            <option value={4}>Giờ</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Loại dịch vụ
                        </label>
                        <select className="form-select" aria-label="Default select example">
                            <option value={1}>Villa</option>
                            <option value={2}>House</option>
                            <option value={3}>Room</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Hình ảnh
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Tiêu chuẩn phòng
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Mô tả tiện nghi khác
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Diện tích hồ bơi
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Số tầng
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <Link to={'/facility'} type="submit" className="btn btn-danger ms-3 float-end">
                        Huỷ
                    </Link>
                    <button type="submit" className="btn btn-primary float-end">
                        Thêm mới
                    </button>
                </form>
            </div>
            <div className="col-3"/>
        </div>

    )
}