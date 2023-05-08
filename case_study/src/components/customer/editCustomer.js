import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {editCustomer, findAllCustomerType, findAllGender, findCustomerById} from "../../service/customerService";
import {Link} from "react-router-dom";
import moment from "moment";

export function EditCustomer() {
    const navigate = useNavigate();
    const [customerData, setCustomerData] = useState();
    const [genders, setGenders] = useState([]);
    const [customerTypes, setCustomerTypes] = useState([]);
    const param = useParams();
    useEffect(() => {
        const data = async () => {
            setCustomerData(await findCustomerById(param.id));
        }
        data()
    }, [param.id]);
    useEffect(() => {
        const data = async () => {
            setCustomerTypes(await findAllCustomerType())
            setGenders(await findAllGender())
        }
        data()
    })
    if (!customerData) {
        return null;
    }
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
                <h1 className="d-flex justify-content-center">Sửa thông tin khách hàng</h1>
                <Formik
                    initialValues={{
                        id: customerData?.id,
                        name: customerData?.name,
                        dateOfBirth: customerData?.dateOfBirth,
                        gender: customerData?.gender,
                        passport: customerData?.passport,
                        phoneNumber: customerData?.phoneNumber,
                        email: customerData?.email,
                        customerType: customerData?.customerType,
                        address: customerData?.address
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Không được để trống")
                            .matches(/^([a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+)$/, "Tên dịch vụ không được chứa số và các kí tự đầu tiên của mỗi từ phải viết hoa."),
                        passport: Yup.string()
                            .required("Không được để trống")
                            .matches(
                                /^([\d]{9}|[\d]{12})$/,
                                "Số CMND phải đúng định dạng XXXXXXXXX hoặc XXXXXXXXXXXX (X là số 0-9)."
                            ),
                        phoneNumber: Yup.string()
                            .required("Không được để trống")
                            .matches(
                                /^(090|091|\\(84\\)\\+90|\\(84\\)\\+91)[\d]{7}$/,
                                "Số điện thoại phải đúng định dạng 090xxxxxxx hoặc 091xxxxxxx hoặc (84)+90xxxxxxx hoặc (84)+91xxxxxxx."
                            ),
                        email: Yup.string()
                            .required("Không được để trống.")
                            .matches(
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                "Email phải đúng định dạng. Ví dụ: abc123@xyz.com"
                            ),
                        dateOfBirth: Yup.string().required("Không được để trống"),

                    })}
                    onSubmit={(customer) => {
                        const edit = async () => {
                            await editCustomer({
                                ...customer,
                                dateOfBirth: moment(customer.dateOfBirth).format('DD-MM-YYYY'),
                                gender: parseInt(customer.gender),
                                customerType: parseInt(customer.customerType)
                            });
                            alert("Sửa thông tin khách hàng thành công !!!");
                            navigate("/customer")
                        }
                        edit();
                    }}
                >
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-bold">
                                Họ tên
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
                            <label htmlFor="dateOfBirth" className="form-label fw-bold">
                                Ngày sinh
                            </label>
                            <Field
                                type="date"
                                name={"dateOfBirth"}
                                id={"dateOfBirth"}
                                className="form-control"
                            />
                            <ErrorMessage
                                name="dateOfBirth"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <div>
                            <label className="fw-bold"> Giới tính</label>
                            {
                                genders.map((gender, index) => (
                                    <div key={index} className="form-check">
                                        <Field
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            value={gender.id}
                                        />
                                        <label className="form-check-label" htmlFor="male">
                                            {gender.gender}
                                        </label>
                                    </div>
                                ))
                            }
                            {/*<div className="form-check">*/}
                            {/*    <Field*/}
                            {/*        className="form-check-input"*/}
                            {/*        type="radio"*/}
                            {/*        name="gender"*/}
                            {/*        id="female"*/}
                            {/*        value="2"*/}
                            {/*    />*/}
                            {/*    <label className="form-check-label" htmlFor="female">*/}
                            {/*        Nữ*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            {/*<div className="form-check">*/}
                            {/*    <Field*/}
                            {/*        className="form-check-input"*/}
                            {/*        type="radio"*/}
                            {/*        name="gender"*/}
                            {/*        id="lgbt"*/}
                            {/*        value="3"*/}
                            {/*    />*/}
                            {/*    <label className="form-check-label" htmlFor="lgbt">*/}
                            {/*        Giới tính khác*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            <ErrorMessage
                                name="gender"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="passport" className="form-label fw-bold">
                                Số CMND
                            </label>
                            <Field
                                type="text"
                                name={"passport"}
                                className="form-control"
                                id={"passport"}
                            />
                            <ErrorMessage
                                name="passport"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label fw-bold">
                                Số điện thoại
                            </label>
                            <Field
                                type="text"
                                name={"phoneNumber"}
                                id={"phoneNumber"}
                                className="form-control"
                            />
                            <ErrorMessage
                                name="phoneNumber"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold">
                                Email
                            </label>
                            <Field
                                type="email"
                                name={"email"}
                                id={"email"}
                                className="form-control"
                            />
                            <ErrorMessage
                                name="email"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="typeOfGuest" className="form-label fw-bold">
                                Loại khách
                            </label>
                            <Field
                                as={"select"}
                                name={"customerType"}
                                className="form-select"
                                aria-label="Default select example"
                            >
                                {
                                    customerTypes.map((customerType, index) => (
                                        <option key={index} value={customerType.id}>
                                            {customerType.customerType}
                                        </option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage
                                name="typeOfGuest"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label fw-bold">
                                Địa chỉ
                            </label>
                            <Field
                                type="text"
                                id={"address"}
                                name={"address"}
                                className="form-control"
                            />
                            <ErrorMessage
                                name="address"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <Link to={'/customer'} className="btn btn-danger ms-3 float-end">
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

    )
}