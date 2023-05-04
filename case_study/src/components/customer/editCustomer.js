import React from "react";

export function EditCustomer() {
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
                <h1 className="d-flex justify-content-center">Sửa thông tin khách hàng</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Họ tên
                        </label>
                        <input type="text" className="form-control" id="exampleInputEmail1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Ngày sinh
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div>
                        <div htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Giới tính
                        </div>
                        <label className="form-check mx-4">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Nam
                            </label>
                        </label>
                        <label className="form-check mx-4">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Nữ
                            </label>
                        </label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Số CMND
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Số điện thoại
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Email
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Loại khách
                        </label>
                        <select className="form-select" aria-label="Default select example">
                            <option value={1}>Diamond</option>
                            <option value={2}>Platinum</option>
                            <option value={3}>Gold</option>
                            <option value={4}>Silver</option>
                            <option value={5}>Member</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Địa chỉ
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-danger ms-3 float-end">
                        Huỷ
                    </button>
                    <button type="submit" className="btn btn-primary float-end">
                        Thêm mới
                    </button>
                </form>
            </div>
            <div className="col-3"/>
        </div>

    )
}