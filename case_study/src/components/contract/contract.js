import React, {useEffect, useState} from "react";
import {findAllContract} from "../../service/contractService";
import {findAllCustomer} from "../../service/customerService";
import {findAllFacility} from "../../service/facilityService";
import {Link} from "react-router-dom";

export function Contract() {
    const [contractList, setContractList] = useState([]);
    const [customerList, setCustomerList] = useState([]);
    const [facilityList, setFacilityList] = useState([]);
    useEffect(() => {
        const listContract = async () => {
            setContractList(await findAllContract());
            setCustomerList(await findAllCustomer());
            setFacilityList(await findAllFacility());
        }
        listContract();
    }, [])
    return (
        <div className="container-fluid">
            <h1 className="d-flex justify-content-center" style={{marginTop: 100}}>
                Danh sách hợp đồng
            </h1>
            <div>
                <Link to={'/createContract'} className="btn btn-success my-3">
                    Thêm mới hợp đồng
                </Link>
            </div>
            <table className="table table-success">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Số hợp đồng</th>
                    <th>Tên dịch vụ</th>
                    <th>Tên khách hàng</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số tiền cọc trước</th>
                    <th>Tổng số tiền thanh toán</th>
                </tr>
                </thead>
                <tbody>
                {
                    contractList.map((contract, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{contract.code}</td>
                            <td>
                                {
                                    facilityList.find(facility => contract.facilityId === facility.id)?.name
                                }
                            </td>
                            <td>
                                {
                                    customerList.find(customer => contract.customerId === customer.id)?.name
                                }
                            </td>
                                <td>{contract.dateStart}</td>
                            <td>{contract.dateEnd}</td>
                            <td>{contract.deposits} VND</td>
                            <td>{contract.totalAmount} VND</td>
                        </tr>
                    ))
                }

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
        </div>
    )
}