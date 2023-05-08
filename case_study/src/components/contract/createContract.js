import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {findAllCustomer} from "../../service/customerService";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import {createContract, findAllFacilityContract} from "../../service/contractService";
import moment from "moment";

export function CreateContract() {
    const navigate = useNavigate();
    const [customerList, setCustomerList] = useState([]);
    const [facilityContracts, setFacilityContracts] = useState([]);
    useEffect(() => {
        const contractData = async () => {
            setCustomerList(await findAllCustomer());
            setFacilityContracts(await findAllFacilityContract());
        }
        contractData();
    }, [])
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
                <h1 className="d-flex justify-content-center">Thêm mới hợp đồng</h1>
                <Formik
                    initialValues={{
                        code: '',
                        customerId: '',
                        facilityId: '',
                        dateStart: '',
                        dateEnd: '',
                        deposits: ''
                    }}
                    validationSchema={Yup.object({
                        code: Yup.string().required("Không được để trống"),
                        deposits: Yup.string().required("Không được để trống")
                            .matches(/^[1-9][\d]*$/, "Tiền đặt cọc phải là số nguyên dương."),
                    })
                    }
                    onSubmit={(contract) => {
                        const create = async () => {
                            await createContract({
                                ...contract,
                                dateStart: moment(contract.dateStart).format('DD-MM-YYYY'),
                                dateEnd: moment(contract.dateEnd).format('DD-MM-YYYY'),
                                customerId: parseInt(contract.customerId),
                                facilityId: parseInt(contract.facilityId),
                            })
                            console.log(contract)
                            alert("Thêm mới hợp đồng thành công !!!");
                            navigate("/contract")
                        }
                        create()
                    }
                    }
                >
                    <Form>
                        <div className="mb-3">
                            <label htmlFor="code" className="form-label fw-bold">
                                Mã hợp đồng
                            </label>
                            <Field
                                type="text"
                                name={"code"}
                                id={"code"}
                                className="form-control"
                            />
                            <ErrorMessage
                                name="code"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="customerId" className="form-label fw-bold">
                                Tên khách hàng
                            </label>
                            <Field
                                as={"select"}
                                name={"customerId"}
                                className="form-select"
                                aria-label="Default select example"
                            >
                                {
                                    customerList.map((customer, index) => (
                                        <option key={index} value={customer.id}>
                                            {customer.name}
                                        </option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage
                                name="customerId"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="facilityId" className="form-label fw-bold">
                                Tên dịch vụ
                            </label>
                            <Field
                                as={"select"}
                                name={"facilityId"}
                                className="form-select"
                                aria-label="Default select example"
                            >
                                {
                                    facilityContracts.map((facilityContract, index) => (
                                        <option key={index} value={facilityContract.id}>
                                            {facilityContract.facilityContract}
                                        </option>
                                    ))
                                }
                            </Field>
                            <ErrorMessage
                                name="facilityId"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateStart" className="form-label fw-bold">
                                Ngày bắt đầu
                            </label>
                            <Field
                                type="date"
                                name={"dateStart"}
                                id={"dateStart"}
                                className="form-control"
                            />
                            <ErrorMessage
                                name="dateStart"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dateEnd" className="form-label fw-bold">
                                Ngày kết thúc
                            </label>
                            <Field
                                type="date"
                                name={"dateEnd"}
                                id={"dateEnd"}
                                className="form-control"
                            />
                            <ErrorMessage
                                name="dateEnd"
                                component="span"
                                className="text-danger"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="deposits" className="form-label fw-bold">
                                Tiền đặt cọc
                            </label>
                            <Field
                                type="text"
                                name={"deposits"}
                                id={"deposits"}
                                className="form-control"
                            />
                            <ErrorMessage
                                name="deposits"
                                component="span"
                                className="text-danger"
                            />
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
                    </Form>

                </Formik>
            </div>
            <div className="col-3"/>
        </div>

    )
}