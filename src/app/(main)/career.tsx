export default function Career() {
    const careers = [
        {
            company: '플레이오토',
            title: 'Playauto 2.0 서비스 개발',
            skill: ['Node.js', 'C#', 'Angular', 'Mysql', 'React'],
            jobs: [
                '쇼핑몰 유지 보수 및 연동 개발 (오늘의집, 신세계TV쇼핑, W쇼핑, emart mall, 카페24, 티몬 연동) ',
                'URL : https://www.plto.com/'

            ],
        },
        {
            company: '대학교 연구원 & 이츠엠 소속',
            title: '포항포인트 멤버십 App 개발',
            skill: ['Node.js', 'Ionic2', 'Angular', 'oracle', 'AWS(EC2, RDS)'],
            jobs: [
                '포항시 자영업자 대상 멤버십 서비스 개발 (포항포인트 APP 개발, 포스 시스템 개발, 회계 서비스 개발, oauth 로그인, 유저/ 관리자 페이지 개발)'
            ]
        },
        {
            company: '히포티앤씨',
            title: 'DTx 플랫폼 개발',
            skill: ['SvelteKit', 'Next.js', 'React.js', 'Node.js', 'Postgresql', 'AWS(ELB, RDS)', 'Vercel'],
            jobs: [
                'DTx 진단 및 치료 웹 플랫폼 개발',
                '주의력 결핍 과다행동(과잉행동) 진단 프로그램 유저 웹 서비스 개발',
            ]
        }
    ]
    return (
        <section className="position-relative overflow-hidden" id="career">
            {/*content*/}
            <div className="container py-9 py-lg-12 position-relative">
                <div className="row mb-7 mb-lg-9 align-items-center">
                    <div className="col-lg-7">
                        {/*Subheading*/}
                        <div className="mb-3">
                            <span className="h6 text-body-secondary">What I do</span>
                        </div>
                        {/*Section Heading*/}
                        <h2
                            className="mb-0 display-5"

                            data-aos-delay={100}
                        >
                            Career
                        </h2>
                    </div>
                </div>
                <div className="row justify-content-around">
                    {careers.map((career, i) => (
                        <div className="col-md-4 mb-7 mb-md-0" key={i}>
                            <div className="card h-100 card-body border-0 shadow py-5 hover-lift hover-shadow-lg overflow-hidden">
                                <div className="position-relative z-1">
                                    {/*title*/}
                                    <h4 className="mb-4">{career.company}</h4>
                                    {/*text*/}
                                    <p className="mb-4">
                                        {career.title}
                                    </p>
                                    <div className="width-4x pt-1 bg-warning mb-4" />
                                    {/*List*/}
                                    <ul className="list-unstyled lh-lg mb-0">
                                        {career.jobs.map((job, jobId) => (
                                            <li className="my-2 d-flex align-items-center" key={jobId}>
                                                <i className="bx bx-radio-circle me-3 text-warning" /> {job}
                                            </li>

                                        ))}
                                    </ul>
                                    <div className="width-4x pt-1 bg-warning my-4" />
                                    <p className="mb-4">
                                        사용 기술
                                    </p>
                                    <ul className="list-unstyled lh-lg mb-0">
                                        {career.skill.map((skill, skillId) => (
                                            <li className="my-2 d-flex align-items-center" key={skillId}>
                                                <i className="bx bx-radio-circle me-3 text-warning" /> {skill}
                                            </li>

                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}