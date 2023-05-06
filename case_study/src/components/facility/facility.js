import React, {useEffect, useState} from "react";
import {findAllFacility} from "../../service/facilityService";
import {Link} from "react-router-dom";

export function Facility() {
    const [facilityList, setFacilityList] = useState([]);
    useEffect(() => {
        const listFacility = async () => {
            setFacilityList(await findAllFacility())
        }
        listFacility()
    }, [])
    return (
        <div>
            <>
                <div className="container1">
                    <img
                        src="https://furamavietnam.com/wp-content/uploads/2018/08/banner01.jpg?id=1433"
                        alt=""
                        height={300}
                        width="100%"
                    />
                    <div className="center">Dịch vụ</div>
                </div>
                <div className={"container"}>
                    <Link to={'/createFacility'} className="btn btn-success mt-5">
                        Thêm mới dịch vụ
                    </Link>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        {
                            facilityList.map((facility, index) => (
                                <div key={index} className="col-4 mb-5">
                                    <div className="card" style={{width: "95%"}}>
                                        <img src={facility.img}/>
                                        <div className="card-body">
                                            <h5 className="card-title">{facility.name}</h5>
                                            <p>
                                                Diện tích: {facility.area} m<sup>2</sup>
                                            </p>
                                            <button
                                                type="button"
                                                className="btn btn-danger float-end"
                                                data-bs-toggle="modal"
                                                data-bs-target="#exampleModal"
                                            >
                                                Xoá
                                            </button>
                                            <Link to={`/editFacility/${facility.id}`} className="btn btn-primary float-end mx-3">
                                                Sửa
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
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
            </>

        </div>
    )
}