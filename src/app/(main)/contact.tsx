import { addContact } from "../actions";

export default function Contact() {
    return (
        <section className="position-relative" id="contact">
            <div className="container py-9 py-lg-12">
                <div className="row">
                    <div className="col-md-8 col-lg-7 mb-7 mb-md-0 me-auto">
                        <div className="position-relative">
                            <h2 className="display-5 mb-4">Contact</h2>
                            <p className="mb-5 lead pe-lg-8">
                                이직 제안이나 궁금한 점이 있으시면 문의 주세요
                            </p>
                            {/* Contacts Form */}
                            <form
                                action={addContact}
                                method="POST"
                                role="form"
                                className="needs-validation"
                            >
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <label className="form-label" htmlFor="email">
                                            Your email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            name="email"
                                            id="email"
                                            placeholder="sdh077@naver.com"
                                            aria-label="sdh077@naver.com"
                                            required={true}
                                        />
                                        <div className="invalid-feedback">
                                            Please enter a valid email address
                                        </div>
                                    </div>
                                    <div className="w-100" />
                                    <div className="col-12 mb-3">
                                        <label className="form-label" htmlFor="subject">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-lg"
                                            name="subject"
                                            id="subject"
                                            placeholder="Web Design"
                                            required={true}
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control form-control-lg"
                                        name="message"
                                        placeholder="Hi there...."
                                        required={true}
                                        defaultValue={""}
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a message in the textarea.
                                    </div>
                                </div>
                                <div className="d-lg-flex d-grid justify-content-between align-items-center">
                                    <p className="small mb-3 w-100 text-body-secondary mb-lg-0">
                                        1-2 내에 응답하겠습니다.
                                    </p>
                                    <input
                                        type="submit"
                                        name="submit"
                                        defaultValue="Submit message"
                                        id="sendBtn"
                                        className="btn btn-lg btn-primary"
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}