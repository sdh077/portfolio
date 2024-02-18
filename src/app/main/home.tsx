'use client';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

export default function Home() {
    const strings = '{ "strings": ["신대호", "SHIN DAEHO"] }'

    return (
        <section
            className="position-relative bg-dark text-white overflow-hidden"
            id="home">
            {/*Parallax background*/}
            <img
                src="/images/slide.jpeg"
                className="bg-image opacity-50"
                alt=""
            />
            {/*Connected line*/}
            <div className="position-absolute star-0 bottom-0 w-100 text-center justify-content-center text-body-secondary">
                <div className="connect-line d-inline-block position-relative"> </div>
            </div>
            <div className="container position-relative z-1">
                <div className="row vh-100 d-flex align-items-center justify-content-center text-center">
                    <div className="col-xl-11">
                        <h2 className="mb-5 display-3">
                            안녕하세요 프로그래머 <br className="d-none d-md-block" />
                            <span
                                className="d-inline-block text-warning"
                                data-typed={strings}
                            />입니다
                        </h2>
                        <p className="mb-6 lead">
                            FULL STACK DEVELOPER
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}