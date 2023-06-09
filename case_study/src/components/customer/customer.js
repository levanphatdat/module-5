import React, {useEffect, useState} from "react";
import {
    deleteCustomer,
    findAllCustomer,
    findAllCustomerType,
    findAllGender,
    getCustomer
} from "../../service/customerService";
import {Link} from "react-router-dom";

export function Customer() {
    const [customerList, setCustomerList] = useState([]);
    const [genderList, setGenderList] = useState([]);
    const [customerTypeList, setCustomerTypeList] = useState([]);
    const [customerDetail, setCustomerDetail] = useState();
    const getData = async (id) => {
        const data = await getCustomer(id);
        setCustomerDetail(data);
    };
    const handleDelete = async () => {
        await deleteCustomer(customerDetail.id);
        setCustomerList(await findAllCustomer())
        alert("Xoá thông tin khách hàng thành công");
    };
    useEffect(() => {
        const listCustomer = async () => {
            setCustomerList(await findAllCustomer());
            setGenderList(await findAllGender());
            setCustomerTypeList(await findAllCustomerType());
        }
        listCustomer();
    }, [])
    return (
        <div>
            <div className="container-fluid">
                <h1 className="d-flex justify-content-center" style={{marginTop: 100}}>
                    Danh sách khách hàng
                </h1>
                <div>
                    <Link to={'/createCustomer'} className="btn btn-success my-3">
                        Thêm mới khách hàng
                    </Link>
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
                    {
                        customerList.map((customer, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{customer.name}</td>
                                <td>{customer.dateOfBirth}</td>
                                <td>
                                    {
                                        genderList.find(gender => customer.gender === gender.id)?.gender
                                    }
                                </td>
                                <td>{customer.passport}</td>
                                <td>{customer.phoneNumber}</td>
                                <td>{customer.email}</td>
                                <td>
                                    {
                                        customerTypeList.find(customerType => customer.customerType === customerType.id)?.customerType
                                    }
                                </td>
                                <td>{customer.address}</td>
                                <td>
                                    <Link to={`/editCustomer/${customer.id}`} className="btn btn-primary">
                                        Sửa
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger float-end"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => getData(customer.id)}
                                    >
                                        Xoá
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <button className="page-link">
                                Previous
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link">
                                1
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link">
                                2
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link">
                                3
                            </button>
                        </li>
                        <li className="page-item">
                            <button className="page-link">
                                Next
                            </button>
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
                                    Delete
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                Bạn có muốn xoá{" "}
                                <span className={"text-danger"}>{customerDetail?.name}</span>?
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Huỷ
                                </button>
                                <button
                                    data-bs-dismiss="modal"
                                    type="button"
                                    onClick={() => handleDelete()}
                                    className="btn btn-primary"
                                >
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