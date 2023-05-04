import React from "react";
import {Link} from "react-router-dom";

export function CreateContract() {
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
                <h1 className="d-flex justify-content-center">Thêm mới hợp đồng</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Số hợp đồng
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Tên dịch vụ
                        </label>
                        <input type="text" className="form-control" id="exampleInputEmail1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Ngày bắt đầu
                        </label>
                        <input type="date" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Ngày kết thúc
                        </label>
                        <input type="date" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Số tiền cọc trước
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">
                            Tổng số tiền thanh toán
                        </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <Link to={'/contract'} className="btn btn-danger ms-3 float-end">
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