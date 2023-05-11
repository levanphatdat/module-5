import React, {useEffect, useState} from "react";
import {deleteFacility, findFacilityByName, getFacility} from "../../service/facilityService";
import {Link} from "react-router-dom";
import {Field, Form, Formik} from "formik";

export function Facility() {
    const [facilityDetail, setFacilityDetail] = useState();
    const [list, setList] = useState([]);
    const [facility, setFacility] = useState('');

    const getData = async (id) => {
        const data = await getFacility(id);
        setFacilityDetail(data);
    };
    const handleDelete = async () => {
        await deleteFacility(facilityDetail.id);
        setList(await findFacilityByName(facility))
        alert("Xoá thông tin dịch vụ thành công");
    };
    useEffect(() => {
        const find = async () => {
            const response = await findFacilityByName(facility)
            setList(response);
        }
        find()
    }, [facility]);
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
                <div className={"container d-flex justify-content-center"}>
                    <Link to={'/createFacility'} className="btn btn-success mt-4">
                        Thêm mới dịch vụ
                    </Link>
                </div>
                <div className="row">
                    <div>
                        <Formik
                            initialValues={{
                                facility: ''
                            }}
                            onSubmit={(values) => {
                                setFacility(values.facility);
                            }}
                        >
                            <Form>
                                <div className="input-group w-25 mt-3 float-end" >

                                    <div className="form-outline">
                                        <Field type="search" name={'facility'} id="form1" className="form-control"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary  float-end">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path
                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                        </svg>
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>

                <div className="container mt-4">
                    <div className="row">
                        {
                            list.length === 0 ? <h1 className={'text-danger text-center'}>Không tìm thấy kết quả</h1>:
                            list.map((facility, index) => (
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
                                            <Link to={`/editFacility/${facility.id}/${facility.typeRoom}`}
                                                  className="btn btn-primary float-end mx-3">
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