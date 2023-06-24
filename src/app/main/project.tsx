'use client';
import { useEffect } from 'react';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

export default function Projects() {
    const projects = [
        {
            title: '신대호의 포트폴리오',
            term: '2023-06 ~',
            content: '포트폴리오 및 이력서 사이트',
            skill: 'Next.js, vercel',
            link: [{ link: 'https://github.com/sdh077/portfolio.git', type: 'git' }]
        },
        {
            title: '피부타입 검사',
            term: '2017.07 ~ 2017.10',
            content: '피부타입검사페이지, 관리자페이지개발 ',
            skill: 'Angular, node.js, mysql',
            link: [{ link: 'https://github.com/dps301/16drops-server.git', type: 'git' }, { link: 'https://github.com/dps301/ng16drops.git', type: 'git' }]
        },
        {
            title: '장덕한방병원 자가진단 페이지',
            term: '2018.07, 2019.03',
            content: '발바닥 통증 자가 진단과 어깨 통증 자가 진단 페이지 개발, 결과 랜더링 페이지 개발',
            skill: 'PHP, Mysql',
            link: [{ link: 'https://jangdeuk.com/include/new_self.php', type: 'site' }, { link: 'https://pc.jangdeuk.com/include/footTest.php?landing=homepc', type: 'site' }]
        },
        {
            title: '한동대 디자인학과 졸업과제 사이트',
            term: '2018.08 ~ 2018.12',
            content: '한동대 디자인학과 졸업 과제 전시 사이트',
            skill: 'Angular, node.js, mysql',
            link: [{ link: 'https://github.com/sdh077/handongdegree', type: 'git' }]
        }
    ]
    useEffect(() => {
        new Swiper(".swiper-testimonials", {
            slidesPerView: "auto",
            loop: true,
            centeredSlides: true,
            spaceBetween: 16,
            pagination: {
                el: ".swiperAuto-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiperAuto-button-next",
                prevEl: ".swiperAuto-button-prev",
            },
            modules: [Navigation, Pagination],
        });
    }, [])
    return (
        <section className="position-relative overflow-hidden">
            {/*Background half*/}
            <div className="position-absolute start-0 top-0 w-100 h-50 bg-body-tertiary" />
            <div className="container position-relative py-9 py-lg-11">
                <div className="row mb-3 mb-md-5 align-items-end">
                    <div className="col-md-7 mb-5 mb-md-0">
                        {/*Title*/}
                        <h2 className="mb-0 display-5">
                            My projects
                        </h2>
                    </div>
                    <div className="col-md-5">
                        <div className="d-flex align-items-center justify-content-md-end">
                            {/*Swiper Navigation*/}
                            <div className="swiper-button-prev swiperAuto-button-prev me-2 bg-body text-body position-relative start-0"></div>
                            <div className="swiper-button-next swiperAuto-button-next bg-body text-body position-relative end-0"></div>
                        </div>
                    </div>
                </div>
                <div className="swiper-container swiper-testimonials overflow-visible">
                    <div className="swiper-wrapper">
                        {/*Slider item*/}
                        {projects.map((project, project_id) => (
                            <div className="swiper-slide">
                                <div className="row">
                                    <div className="col-lg-12" key={project_id}>
                                        <div className="card rounded-block shadow-lg flex-md-row flex-column overflow-hidden border-0 bg-body">
                                            <div className="col-md-4">
                                                <div className="d-flex flex-column border-end-md p-5 align-items-center justify-content-center h-100 ">
                                                    <h2>{project.title}</h2>
                                                    <h5>{project.term}</h5>
                                                </div>
                                            </div>
                                            <div className="card-body h-100 p-4 py-5 py-md-7 px-md-5 flex-grow-1">
                                                <div className="d-md-flex align-items-md-center">

                                                    <div className="ps-md-6 px-lg-10 px-xl-12">
                                                        <p className="fs-4 font-serif mb-4">
                                                            {project.content}
                                                        </p>
                                                        <div className="mb-5">
                                                            <h5 className="mb-2">{project.skill}</h5>
                                                        </div>
                                                        {project.link.map((link, link_id) => (

                                                            <a
                                                                href={link.link}
                                                                className="btn btn-secondary rounded-pill btn-hover-arrow mx-2"
                                                                key={link_id}
                                                            >
                                                                <span>{link.type}</span>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="swiperAuto-pagination swiper-pagination w-100 text-center position-relative mb-0 mt-5 bottom-0 pb-0"></div>
            </div>
        </section>

    )
}