import React from "react";

export function Customer() {
    return (
        <div>
            <div className="container-fluid">
                <h1 className="d-flex justify-content-center" style={{marginTop: 100}}>
                    Danh sách khách hàng
                </h1>
                <div>
                    <button type="button" className="btn btn-success my-3">
                        Thêm mới khách hàng
                    </button>
                </div>
                <table className="table table-success">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Họ tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Số CMND</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                        <th>Loại khách</th>
                        <th>Địa chỉ</th>
                        <th/>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Lê Đạt</td>
                        <td>01/12/2000</td>
                        <td>Nam</td>
                        <td>1919563562</td>
                        <td>0975362222</td>
                        <td>datcute@gmail.com</td>
                        <td>Gold</td>
                        <td>Huế</td>
                        <td>
                            <button type="submit" className="btn btn-primary">
                                Sửa
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-danger float-end"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Xoá
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Lê Đồng</td>
                        <td>01/02/1998</td>
                        <td>Nam</td>
                        <td>1919525252</td>
                        <td>0963564444</td>
                        <td>dongle12@gmail.com</td>
                        <td>Silver</td>
                        <td>Huế</td>
                        <td>
                            <button type="submit" className="btn btn-primary">
                                Sửa
                            </button>
                        </td>
                        <td>
                            <button
                                type="button"
                                className="btn btn-danger float-end"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Xoá
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Previous
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                Next
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* Modal */}
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Xoá dịch vụ
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">Bạn muốn xoá chứ?</div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Huỷ
                                </button>
                                <button type="button" className="btn btn-danger">
                                    Xác nhận
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}