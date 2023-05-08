import React, {useEffect, useState} from "react";
import {deleteFacility, findAllFacility, getFacility} from "../../service/facilityService";
import {Link} from "react-router-dom";

export function Facility() {
    const [facilityList, setFacilityList] = useState([]);
    const [facilityDetail, setFacilityDetail] = useState();

    useEffect(() => {
        const listFacility = async () => {
            setFacilityList(await findAllFacility())
        }
        listFacility()
    }, [])
    const getData = async (id) => {
        const data = await getFacility(id);
        setFacilityDetail(data);
    };
    const handleDelete = async () => {
        await deleteFacility(facilityDetail.id);
        setFacilityList(await findAllFacility())
        alert("Xoá thông tin dịch vụ thành công");
    };
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
                                        <img src={facility.img} alt=""/>
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
                                                onClick={() => getData(facility.id)}
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
                                <button className="page-link" >
                                    Previous
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link">
                                    1
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" >
                                    2
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" >
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
                                <span className={"text-danger"}>{facilityDetail?.name}</span>?
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
            </>

        </div>
    )
}