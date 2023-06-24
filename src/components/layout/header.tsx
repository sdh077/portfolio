export default function Header() {
    return (
        <header className="z-fixed header-transparent header-fixed-top sticky-fixed">
            <nav className="navbar navbar-expand-lg navbar-light navbar-link-white">
                {/*Navbar-fixed-background*/}
                <div className="navbar-fixed-bg position-absolute" />
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <div
                            className="img-fluid navbar-brand-sticky text-white"
                        >
                            Shin Resume</div>
                        <div
                            className="img-fluid navbar-brand-transparent text-white"
                        >
                            Shin Resume</div>
                    </a>
                    <div className="d-flex align-items-center navbar-no-collapse-items order-lg-last">
                        <button
                            className="navbar-toggler order-last"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#mainNavbarTheme"
                            aria-controls="mainNavbarTheme"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon">
                                <i />
                            </span>
                        </button>
                        <div className="nav-item me-3 me-lg-0">
                            <a
                                href="#contact"
                                className="btn btn-warning text-white btn-sm btn-hover-text"
                            >
                                <span className="btn-hover-label label-default">Hire Me</span>
                                <span className="btn-hover-label label-hover">Hire Me</span>
                            </a>
                        </div>
                    </div>
                    <div
                        className="offcanvas-lg offcanvas-navbar offcanvas-end"
                        id="mainNavbarTheme"
                    >
                        <div className="offcanvas-header p-2 justify-content-end">
                            <button
                                type="button"
                                data-bs-dismiss="offcanvas"
                                data-bs-target="#mainNavbarTheme"
                                className="btn btn-close"
                            >
                                <i className="bx bx-x fs-4 align-middle" />
                            </button>
                        </div>
                        <div className="offcanvas-body">
                            {/*Navbar items*/}
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#skill">
                                        Skill
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#career">
                                        Career
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#project">
                                        Project
                                    </a>
                                </li>
                                <li className="nav-item ms-lg-4">
                                    <a className="nav-link" href="#contact">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}