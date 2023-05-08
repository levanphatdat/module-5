import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {
    editFacility,
    findAllAccompaniedService,
    findAllRentalType,
    findAllTypeRoom,
    findFacilityById
} from "../../service/facilityService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";

export function EditFacility() {
    const navigate = useNavigate();
    const [facilityData, setFacilityData] = useState();
    const [rentalTypes, setRentalTypes] = useState([]);
    const [typeRooms, setTypeRooms] = useState([]);
    const [accompaniedServices, setAccompaniedServices] = useState([])
    const [selectTypeRoom, setSelectTypeRoom] = useState(facilityData?.typeRoom);
    const param = useParams();
    useEffect(() => {
        const data = async () => {
            setFacilityData(await findFacilityById(param.id));
        }
        data()
    }, [param.id]);
    useEffect(() => {
            const list = async () => {
                setRentalTypes(await findAllRentalType());
                setTypeRooms(await findAllTypeRoom());
                setAccompaniedServices(await findAllAccompaniedService());
            };
            list();
            console.log(facilityData?.typeRoom.toString())
        }, []
    )
    if (!facilityData) {
        return null;
    }
    return (
        <div>
            <div className="row">
                <div className="col-3"/>
                <div
                    className="col-6"
                    style={{
                        background: "#85c4c4",
                        margin: "80px 70px 30px",
                        padding: "25px 25px"
                    }}
                >
                    <h1 className="d-flex justify-content-center">Sửa thông tin dịch vụ</h1>
                    <Formik
                        initialValues={{
                            id: facilityData?.id,
                            name: facilityData?.name,
                            img: facilityData?.img,
                            typeRoom: facilityData?.typeRoom,
                            area: facilityData?.area,
                            price: facilityData?.price,
                            amountOfPeople: facilityData?.amountOfPeople,
                            rentalType: facilityData?.rentalType,
                            roomStandard: facilityData?.roomStandard,
                            description: facilityData?.description,
                            poolArea: facilityData?.poolArea,
                            floor: facilityData?.floor,
                            freeService: facilityData?.freeService,
                            accompaniedService: facilityData?.accompaniedService
                        }}
                        validationSchema={
                            Yup.object({
                                name: Yup.string().required("Không được để trống")
                                    .matches(/^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/, "Tên dịch vụ không được chứa số."),
                                img: Yup.string().required("Không được để trống"),
                                area: Yup.string().required("Không được để trống"),
                                // price: Yup.string().required("Không được để trống"),
                                amountOfPeople: Yup.string().required("Không được để trống")
                                    .matches(/^[1-9][\d]*$/, "Số lượng người phải là số nguyên dương."),
                                // roomStandard: Yup.string().required("Không được để trống"),
                                // description: Yup.string().required("Không được để trống"),
                                // poolArea: Yup.string().required("Không được để trống")
                                //     .matches(/^[1-9][\d]*$/, "Diện tích hồ bơi phải là số nguyên dương."),
                                // floor: Yup.string().required("Không được để trống")
                                //     .matches(/^[1-9][\d]*$/, "Số tầng phải là số nguyên dương.")
                            })
                        }
                        onSubmit={(facility) => {
                            const edit = async () => {
                                await editFacility({
                                    ...facility,
                                    rentalType: parseInt(facility.rentalType),
                                    typeRoom: parseInt(selectTypeRoom),
                                    accompaniedService: facility.accompaniedService.map(accompaniedService => parseInt(accompaniedService))
                                });
                                alert("Sửa thông tin dịch vụ thành công !!!");
                                navigate("/facility")
                            }
                            edit();
                        }}
                    >
                        <Form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label fw-bold">
                                    Tên dịch vụ
                                </label>
                                <Field
                                    type="text"
                                    name={"name"}
                                    id={"name"}
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="span"
                                    className="text-danger"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="img" className="form-label fw-bold">
                                    Hình ảnh </label>
                                <Field
                                    type="text"
                                    name={"img"}
                                    id={"img"}
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="img"
                                    component="span"
                                    className="text-danger"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="area" className="form-label fw-bold">
                                    Diện tích sử dụng </label>
                                <Field
                                    type="text"
                                    name={"area"}
                                    id={"area"}
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="area"
                                    component="span"
                                    className="text-danger"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="amountOfPeople" className="form-label fw-bold">
                                    Số lượng người tối đa
                                </label>
                                <Field
                                    type="text"
                                    name={"amountOfPeople"}
                                    id={"amountOfPeople"}
                                    className="form-control"
                                />
                                <ErrorMessage
                                    name="amountOfPeople"
                                    component="span"
                                    className="text-danger"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="rentalType" className="form-label fw-bold">
                                    Kiểu thuê
                                </label>
                                <Field
                                    as={"select"}
                                    name={"rentalType"}
                                    className="form-select"
                                    aria-label="Default select example"
                                >
                                    {
                                        rentalTypes.map((rentalType, index) => (
                                            <option key={index} value={rentalType.id}>
                                                {rentalType.rentalType}
                                            </option>
                                        ))
                                    }
                                </Field>
                                <ErrorMessage
                                    name="rentalType"
                                    component="span"
                                    className="text-danger"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="typeRoom" className="form-label fw-bold">
                                    Loại dịch vụ
                                </label>
                                <Field
                                    name="typeRoom"
                                    render={() => (
                                        <select
                                            onChange={(event) => (setSelectTypeRoom(event.target.value))}
                                            className="form-select"
                                            aria-label="Default select example"
                                        >
                                            {
                                                typeRooms.map((typeRoom, index) => (
                                                    <option key={index} value={typeRoom.id}>
                                                        {typeRoom.typeRoom}
                                                    </option>
                                                ))
                                            }
                                        </select>
                                    )}
                                />
                                <ErrorMessage
                                    name="typeRoom"
                                    component="span"
                                    className="text-danger"
                                />
                            </div>
                            {
                                selectTypeRoom === "1" && (
                                    <div>
                                        <div className="mb-3">
                                            <label htmlFor="roomStandard" className="form-label fw-bold">
                                                Tiêu chuẩn phòng
                                            </label>
                                            <Field type="text" name={"roomStandard"} id={"roomStandard"}
                                                   className="form-control"/>
                                            <ErrorMessage
                                                name="roomStandard"
                                                component="span"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label fw-bold">
                                                Mô tả tiện nghi khác
                                            </label>
                                            <Field type="text" name={"description"} id={"description"}
                                                   className="form-control"/>
                                            <ErrorMessage
                                                name="description"
                                                component="span"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="poolArea" className="form-label fw-bold">
                                                Diện tích hồ bơi
                                            </label>
                                            <Field type="text" name={"poolArea"} id={"poolArea"}
                                                   className="form-control"/>
                                            <ErrorMessage
                                                name="poolArea"
                                                component="span"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="floor" className="form-label fw-bold">
                                                Số tầng
                                            </label>
                                            <Field type="text" name={"floor"} id={"floor"}
                                                   className="form-control"/>
                                            <ErrorMessage
                                                name="floor"
                                                component="span"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            {
                                selectTypeRoom === "2" && (
                                    <div>
                                        <div className="mb-3">
                                            <label htmlFor="roomStandard" className="form-label fw-bold">
                                                Tiêu chuẩn phòng
                                            </label>
                                            <Field type="text" name={"roomStandard"} id={"roomStandard"}
                                                   className="form-control"/>
                                            <ErrorMessage
                                                name="roomStandard"
                                                component="span"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label fw-bold">
                                                Mô tả tiện nghi khác
                                            </label>
                                            <Field type="text" name={"description"} id={"description"}
                                                   className="form-control"/>
                                            <ErrorMessage
                                                name="description"
                                                component="span"
                                                className="text-danger"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="floor" className="form-label fw-bold">
                                                Số tầng
                                            </label>
                                            <Field type="text" name={"floor"} id={"floor"}
                                                   className="form-control"/>
                                            <ErrorMessage
                                                name="floor"
                                                component="span"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            {
                                selectTypeRoom === "3" && (
                                    <div>
                                        <div className="mb-3">
                                            <label htmlFor="freeService" className="form-label fw-bold">
                                                Dịch vụ miễn phí đi kèm
                                            </label>
                                            <Field type="text" name={"freeService"} id={"freeService"}
                                                   className="form-control"/>
                                            <ErrorMessage
                                                name="freeService"
                                                component="span"
                                                className="text-danger"
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            <div className="mb-3">
                                <div htmlFor="" className="form-label fw-bold mb-3">
                                    Dịch vụ đi kèm
                                </div>
                                <div className={'ms-4'}>
                                    <div htmlFor="" className="form-label fw-bold ">
                                        Tên dịch vụ đi kèm
                                    </div>
                                    <div className="ms-4">
                                        {accompaniedServices.map((accompanied, index) => (
                                            <div className="row" key={index}>
                                                <Field
                                                    className={"mb-1"}
                                                    style={{width: "5%", marginBottom: "0"}}
                                                    type="checkbox"
                                                    name="accompaniedService"
                                                    id={accompanied.id}
                                                    value={accompanied.id}
                                                />
                                                <label className="col-10 mb-1" htmlFor={accompanied.id}>
                                                    {accompanied.accompaniedService}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Link to={'/facility'} type="submit" className="btn btn-danger ms-3 float-end">
                                Huỷ
                            </Link>
                            <button type="submit" className="btn btn-primary float-end">
                                Xác nhận
                            </button>
                        </Form>
                    </Formik>
                </div>
                <div className="col-3"/>
            </div>

        </div>
    )
}