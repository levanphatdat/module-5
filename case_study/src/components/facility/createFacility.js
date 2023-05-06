import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as Yup from 'yup';
import {ErrorMessage, Field, Formik} from "formik";
import {
    createFacility,
    findAllAccompaniedService,
    findAllRentalType,
    findAllTypeRoom
} from "../../service/facilityService";


export function CreateFacility() {
    const navigate = useNavigate();
    const [rentalTypes, setRentalTypes] = useState([]);
    const [typeRooms, setTypeRooms] = useState([]);
    const [accompaniedServices, setAccompaniedServices] = useState([])
    const [selectTypeRoom, setSelectTypeRoom] = useState("");
    const handleSelect = (event) => {
        setSelectTypeRoom(event.target.value.toString());
    };
    useEffect(() => {
            const list = async () => {
                setRentalTypes(await findAllRentalType());
                setTypeRooms(await findAllTypeRoom());
                setAccompaniedServices(await findAllAccompaniedService());
            };
            list();
        }, []
    )
    return (
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
                <h1 className="d-flex justify-content-center">Thêm mới dịch vụ</h1>
                <Formik
                    initialValues={{
                        name: '',
                        img: '',
                        typeRoom: 1,
                        area: '',
                        price: '',
                        amountOfPeople: '',
                        rentalType: 1,
                        roomStandard: null,
                        description: null,
                        poolArea: null,
                        floor: null,
                        freeService: null,
                        accompaniedService: []
                    }}
                    validationSchema={
                        Yup.object({
                            name: Yup.string().required("Không được để trống")
                                .matches(/^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/, "Tên dịch vụ không được chứa số."),
                            img: Yup.string().required("Không được để trống"),
                            area: Yup.string().required("Không được để trống"),
                            price: Yup.string().required("Không được để trống"),
                            amountOfPeople: Yup.string().required("Không được để trống")
                                .matches(/^[1-9][\d]*$/, "Số lượng người phải là số nguyên dương."),
                            roomStandard: Yup.string().required("Không được để trống"),
                            description: Yup.string().required("Không được để trống"),
                            poolArea: Yup.string().required("Không được để trống")
                                .matches(/^[1-9][\d]*$/, "Diện tích hồ bơi phải là số nguyên dương."),
                            floor: Yup.string().required("Không được để trống")
                                .matches(/^[1-9][\d]*$/, "Số tầng phải là số nguyên dương."),
                        })
                    }
                    onSubmit={(facility) => {
                        const create = async () => {
                            await createFacility({
                                ...facility,
                                rentalType: parseInt(facility.rentalType),
                                typeRoom: parseInt(facility.typeRoom)
                            });
                            console.log(facility)
                            alert("Thêm dịch vụ hàng thành công !!!");
                            navigate("/facility")
                        }
                        create();
                    }}
                >
                    <form>
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
                                as={"select"}
                                name={"typeRoom"}
                                className="form-select"
                                aria-label="Default select example"
                                onChange={handleSelect}
                            >
                                {
                                    typeRooms.map((typeRoom, index) => (
                                        <option key={index} value={typeRoom.id}>
                                            {typeRoom.typeRoom}
                                        </option>
                                    ))
                                }

                            </Field>
                            <ErrorMessage
                                name="typeRoom"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        {
                            selectTypeRoom === '1' && (
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="roomStandard" className="form-label fw-bold">
                                            Tiêu chuẩn phòng
                                        </label>
                                        <Field type="text" name={"roomStandard"} id={"roomStandard"} className="form-control"/>
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
                                        <Field type="text" name={"description"} id={"description"} className="form-control"/>
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
                                        <Field type="text" name={"poolArea"} id={"poolArea"} className="form-control"/>
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
                            selectTypeRoom === '2' && (
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="roomStandard" className="form-label fw-bold">
                                            Tiêu chuẩn phòng
                                        </label>
                                        <Field type="text" name={"roomStandard"} id={"roomStandard"} className="form-control"/>
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
                                        <Field type="text" name={"description"} id={"description"} className="form-control"/>
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
                            selectTypeRoom ==="3" && (
                                <div>
                                    <div className="mb-3">
                                        <label htmlFor="freeService" className="form-label fw-bold">
                                            Dịch vụ miễn phí đi kèm
                                        </label>
                                        <Field type="text" name={"freeService"} id={"freeService"} className="form-control"/>
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
                                                style={{width: "5%", marginBottom: "0"}}
                                                type="checkbox"
                                                id={accompanied.id}
                                                name="accompaniedService"
                                                value={accompanied.id}
                                            />
                                            <label className="col-10 mt-1">
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
                            Thêm mới
                        </button>
                    </form>
                </Formik>
            </div>
            <div className="col-3"/>
        </div>

    )
}