export default function Footer() {
    return (

        <footer
            id="footer"
            className="bg-dark footer position-relative"
            data-bs-theme="dark"
        >
            {/* / .container */}
            <div className="pb-5">
                <div className="container">
                    <div className="row justify-content-md-between align-items-center">
                        <div className="d-flex mb-3 mb-md-0 col-sm-6 col-md-4">
                            {/* Social button */}
                            <a
                                href="https://github.com/sdh077"
                                className="d-inline-block text-white mb-1 me-2 si rounded-pill si-hover-facebook"
                            >
                                <i className="bx bxl-github fs-5" />
                                <i className="bx bxl-github fs-5" />
                            </a>
                            {/* Social button */}
                            <a
                                href="https://www.instagram.com/daeho_302"
                                className="d-inline-block text-white mb-1 si rounded-pill si-hover-instagram"
                            >
                                <i className="bx bxl-instagram fs-5" />
                                <i className="bx bxl-instagram fs-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}