import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences, projects } from '../profile';



const Index = () => (
    <Layout>

        {/* header card */}
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary text-dark">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="fotoEnrique.png" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-8">
                            <h1>Enrique Donaire</h1>
                            <h3>Full-Stack Developer</h3>
                            <p>Hi, Nice to meet you! 👋 <br />
                                <br />
                                I'm a Full-stack Developer with background in Digital Cinema and Audio-Visual editing. My greatest skill is my creativity, applied to solve logical problems resulting in an efficient but also stimulating product for the user. My mission is to interlace the technological and artistic worlds, identifying the needs of the people and providing innovative and entertaining solutions.</p>
                            <a href="https://www.linkedin.com/in/enrique-donaire/" target="_blank" >Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        {/* second section */}
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress" >
                                        <div className="progress-bar"
                                            role="progressbar" style={{ width: `${percentage}%` }}></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul>
                            {
                                experiences.map(({ title, description, from, to }, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from} - {to}</h5>
                                        <p>
                                            {description}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link href="https://donaireq2.wixsite.com/website" >
                            <a className="btn btn-dark">
                                Know More
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        {/* Portfolio */}
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-light">Portfolio</h1>
                        </div>

                        {
                            projects.map(({ name, description, image, website }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100">
                                        <div className="overflow">
                                            <img src={`/${image}`} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <Link href={`${website}`} target="_blank">
                                                <a className="btn btn-dark">
                                                    Know More
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            ))
                        }
                    </div>
                    <div className="text-center mt-2">
                        <Link href='https://github.com/Enriquedonaire?tab=repositories'>
                            <a className="btn btn-outline-light">More Projects</a>
                        </Link>
                    </div>

                </div>
            </div>
        </div>


    </Layout>
)



export default Index;