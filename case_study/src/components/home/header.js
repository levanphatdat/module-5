import React from "react";
import {Link} from "react-router-dom";

export function Header() {
    return (
        <>
            <header className="fixed-top">
                <nav
                    className="navbar navbar-expand-lg navbar-collapse"
                    style={{background: "#3ce286"}}
                >
                    <div className="container-fluid mx-4">
                        <img
                            src="https://furamavietnam.com/wp-content/uploads/2018/08/logo@2x.png"
                            width="2%"
                            className="me-5"
                        />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"> </span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav fs-5 text-light">
                                <li className="nav-item mx-3">
                                    <Link to={'/'}
                                        className="nav-a text-light nonlink"
                                        aria-current="page"
                                        href="#"
                                    >
                                        TRANG CHỦ
                                    </Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link to={'/facility'}
                                        className="nav-a text-light nonlink"
                                        aria-current="page"
                                        href="#"
                                    >
                                        DỊCH VỤ
                                    </Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link to={'/customer'}
                                        className="nav-a text-light nonlink"
                                        aria-current="page"
                                        href="#"
                                    >
                                        KHÁCH HÀNG
                                    </Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link to={'/contract'}
                                        className="nav-a text-light nonlink"
                                        aria-current="page"
                                        href="#"
                                    >
                                        HỢP ĐỒNG
                                    </Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <a
                                        className="nav-a text-light nonlink"
                                        aria-current="page"
                                        href="#"
                                    >
                                        ƯU ĐÃI
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}