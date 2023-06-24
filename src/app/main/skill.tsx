export default function Skills() {
    const skills = ['js', 'express', 'mysql', 'node', 'aws', 'cs', 'php', 'python', 'react', 'svelte', 'ts', 'next']
    return (
        <section className="position-relative bg-body-tertiary overflow-hidden">
            <div
                className="container px-lg-12 py-9 py-lg-12 position-relative z-1"
                data-aos="fade"
                data-aos-once="false"
                data-aos-offset={120}
            >
                <div
                    className="mb-5 px-lg-11 text-center"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    {/*Heading*/}
                    <h4 className="mb-3">Skill Set</h4>
                </div>
                <div className="d-flex flex-wrap justify-content-center">
                    {skills.map((skill, i) => (
                        <div
                            className="d-flex align-items-center justify-content-center mt-5 width-14x px-4"
                            data-aos="fade-up"
                            data-aos-delay={150 + i * 50}
                            key={i}
                        >
                            <img
                                src={`/images/skills/${skill}.png`}
                                alt="partner"
                                className="img-fluid img-invert"
                            />
                        </div>

                    ))}
                </div>
                {/*Col*/}
            </div>
        </section>
    )
}