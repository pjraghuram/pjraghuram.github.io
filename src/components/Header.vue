<template>

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Personal Portfolio Website HTML CSS Only </title>
        <link rel="stylesheet" href="./Header.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    </head>

    <body>
        <div class="cotainer-fluid">
            <header class="header">
                <a href="#" class="logo">Raghu Ram</a>
                <nav class="navbar">
                    <a href="#first">About Me</a>
                    <!-- <a href="#second">Skills</a> -->
                    <a href="#third">Projects</a>
                    <a href="#fourth">Experience</a>
                    <a href="#fifth">Contact</a>
                </nav>
            </header>
            <div class="abstract-shape "></div>
            <section class="aboutme" id="first">
                <div class="aboutme-content">
                    <h1>Hi, I'm Jaya Raghu Ram Penugonda</h1>
                    <h3>Data Analyst</h3>
                    <p>I have a strong interest in data analytics and possess knowledge in understanding APIs and effective data handling. I have experience working on machine learning and deep learning models, which has fueled my passion for uncovering insights from complex data. I'm eager to further expand my skills and learn more in this ever-evolving field.</p>
                    <div class="btn-box">
                        <a href="#">Download Resume</a>
                    </div>
                </div>
            </section>
            <!-- <section class="skills" id="second">
                <div class="abstract-shape-left"></div>
                <div class="skills-images">
                    <i class="fab fa-python large-icon-python"></i>
                    <img src="../assets/sql-icon.png" alt="" class="large-icon-sql"
                        style="width: 120px; height: 120px; padding-right: 30px;">
                    <i class="fab fa-html5  large-icon-html"></i>
                    <i class="fab fa-css3 large-icon-css"></i>
                    <i class="fab fa-bootstrap large-icon-bootstrap"></i>
                    <i class="fab fa-angular large-icon-angular"></i>
                </div>
            </section> -->
            <section class="projects" id="third">
                <div class="projects-content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card border-dark mb-3" style="max-width: 18rem;">
                                    <div class="card-header">COVID-19 Detection from Chest X-Ray Images using Neural
                                        Networks</div>
                                    <div class="card-body text-dark">
                                        <div class="card-text">
                                            <p>This model is developed in such a way that based on the chest X-ray
                                                report we can identify whether the person is infected by COVID-19 or
                                                not.</p>
                                            </div>
                                        <div class="btn-box-card">
                                        <a href="#">View</a>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card border-dark mb-3" style="max-width: 18rem;">
                                    <div class="card-header">Credit Risk Assessment using Ensemble Model and Neural
                                        Network</div>
                                    <div class="card-body text-dark">
                                        <div class="card-text">
                                            <p>Credit risk is defined as the risk of
                                                non-payment of the responsibilities. A comparision is done
                                                 between ensemble model and neural network</p>
                                            </div>
                                        <div class="btn-box-card">
                                        <a href="#">View</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card border-dark mb-3" style="max-width: 18rem;">
                                    <div class="card-header">Portfolio Management System</div>
                                    <div class="card-body text-dark">
                                        <div class="card-text">
                                            <p>This is a web project that allows customer to login, check their
                                                portfolio and allows to sell the stocks or mutual funds that the user
                                                holds. This project is done using ASP.NET MVC, C#, and SQL Server.</p>
                                            </div>
                                        <div class="btn-box-card">
                                        <a href="#">View</a>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section class="exp" id="fourth">
                <div class="exp-content">
                    <div class="timeline">
                        <!-- Timeline Item 1 -->
                        <div class="timeline-item left ">
                            <div class="timeline-item-content">
                                <span class="date">September 2024 - Present</span>
                                <h3 class="title">Data Analytics Engineering</h3>
                                <h6 class="sub-title">Northeastern University</h6>
                                <p class="description">
                                <pre class="description">Major: Data Analytics
CGPA: 0.00</pre>
                                </p>
                            </div>
                        </div>

                        <!-- Timeline Item 2 -->
                        <div class="timeline-item right">
                            <div class="timeline-item-content">
                                <span class="date">August 2022 - August 2024</span>
                                <h3 class="title">Programmer Analyst</h3>
                                <h6 class="sub-title">Cognizant Technology Solutions</h6>
                                <p class="description">
                                    Worked as a full-stack developer for 2 years under projects 'Comcast Unified
                                    Planning', 'Contracts Concourse'.
                                </p>
                            </div>
                        </div>

                        <!-- Timeline Item 3 -->
                        <div class="timeline-item left">
                            <div class="timeline-item-content">
                                <span class="date">February 2022 - July 2022</span>
                                <h3 class="title">Intern</h3>
                                <h6 class="sub-title">Cognizant Technology Solutions</h6>
                                <p class="description">
                                    A six-month internship in full-stack development. As a team lead, I completed a
                                    final project at
                                    the end of the internship which involved technologies like C#, ASP.NET MVC, and SQL
                                    Server.
                                </p>
                            </div>
                        </div>
                        <!-- Timeline Item 4 -->
                        <div class="timeline-item right">
                            <div class="timeline-item-content">
                                <span class="date">July 2018 - May 2022</span>
                                <h3 class="title">Computer Science and Engineering</h3>
                                <h6 class="sub-title">GMR Institute of Technology</h6>
                                <p class="description">
                                <pre class="description">Major: DBMS, Big Data
CGPA: 8.57</pre>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="contact" id="fifth">
                <div class="contact-content">

                </div>
            </section>
        </div>
    </body>
</template>
<script>

import "./Header.css"
export default {
    name: "HomeComponent",
    props: {
        name: String,
        work: String
    }
}
</script>