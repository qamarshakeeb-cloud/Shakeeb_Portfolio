import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const profile = {
    name: 'Md. Shakeeb Qamar',
    title: 'Engineering-Focused Web Developer',
    subtitle:
        'MSc Space Engineering | Python | CAD/FEM | React & Laravel Learner',
    email: 'mdshakeebqamar@gmail.com',
    location: 'Bremen, Germany',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/qamarshakeeb-cloud/Shakeeb_Portfolio',
    resume: '/resume.pdf',
};

const skills = [
    {
        group: 'Web Development',
        items: ['HTML', 'CSS', 'JavaScript', 'React', 'Laravel', 'PHP', 'SQL'],
    },
    {
        group: 'Programming & Data',
        items: ['Python', 'NumPy', 'SciPy', 'Matplotlib', 'Data Visualization'],
    },
    {
        group: 'Engineering',
        items: [
            'CAD',
            'FEM',
            'ANSYS Mechanical',
            'ANSYS Fluent',
            'LS-DYNA',
            'SolidWorks',
            'Autodesk Inventor',
        ],
    },
    {
        group: 'Tools',
        items: ['GitHub', 'MS Project', 'MS Office', 'Siemens Teamcenter'],
    },
];

const projects = [
    {
        title: 'Laravel + React Portfolio Website',
        type: 'Web Development',
        description:
            'A responsive portfolio website built using React and Laravel to demonstrate modern web development skills.',
        tech: ['React', 'Laravel', 'PHP', 'CSS'],
    },
    {
        title: 'Python Data Analysis Pipeline',
        type: 'Programming / Engineering',
        description:
            'A Python-based workflow for processing, analyzing, and visualizing measurement and simulation data.',
        tech: ['Python', 'NumPy', 'SciPy', 'Matplotlib'],
    },
    {
        title: 'FEM Analysis and Virtual Prototype',
        type: 'Mechanical Engineering',
        description:
            'Development of a virtual prototype using CAD and FEM simulations to evaluate structural performance.',
        tech: ['CAD', 'FEM', 'ANSYS'],
    },
    {
        title: 'Space Fuel Depot Study',
        type: 'Aerospace Engineering',
        description:
            'Mission analysis, Delta-V calculations, and thermal analysis of cryogenic hydrogen transfer.',
        tech: ['Aerospace', 'Delta-V', 'Thermal Analysis'],
    },
];

function App() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setStatus('Sending...');

        try {
            const response = await fetch('https://shakeeb-portfolio.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (!response.ok) {
                setStatus('Please check the form fields.');
                console.log(result);
                return;
            }

            setStatus(result.message || 'Message sent successfully. Please check your email.');

            setFormData({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error(error);
            setStatus('Could not connect to Laravel backend. Make sure Laravel is running.');
        }
    }

    return (
        <main>
            <nav className="navbar">
                <strong>{profile.name}</strong>

                <div>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </nav>

            <section className="hero">
                <p className="eyebrow">{profile.location}</p>

                <h1>{profile.name}</h1>

                <h2>{profile.title}</h2>

                <p>{profile.subtitle}</p>

                <div className="actions">
                    <a className="btn primary" href="#projects">
                        View Projects
                    </a>

                    <a className="btn" href={profile.resume}>
                        📄 Download CV
                    </a>
                </div>
            </section>

            <section id="about" className="section card">
                <h2>About Me</h2>

                <p>
                    I am a Mechanical Engineer with a Master's background in Space
                    Engineering from the University of Bremen. My experience includes CAD
                    design, FEM/CFD simulations, virtual prototyping, technical analysis,
                    and Python-based data processing.
                </p>

                <p>
                    I am currently expanding my skills into modern web development using
                    React and Laravel while combining engineering problem-solving with
                    software development.
                </p>
            </section>

            <section id="skills" className="section">
                <h2>Skills</h2>

                <div className="grid">
                    {skills.map((skill) => (
                        <div className="card" key={skill.group}>
                            <h3>{skill.group}</h3>

                            <div className="tags">
                                {skill.items.map((item) => (
                                    <span key={item}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section id="projects" className="section">
                <h2>Projects</h2>

                <div className="projects">
                    {projects.map((project) => (
                        <article className="card project" key={project.title}>
                            <p className="eyebrow">{project.type}</p>

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="tags">
                                {project.tech.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href="#">GitHub</a>
                                <a href="#">🔗 Demo</a>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section id="contact" className="section card">
                <h2>Contact</h2>

                <p>
                    Interested in my work or want to discuss a project? Feel free to
                    reach out.
                </p>

                <form onSubmit={handleSubmit}>
                    <input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <textarea
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    <button className="btn primary" type="submit">
                        ✉️ Send Message
                    </button>
                </form>

                {status && <p className="form-status">{status}</p>}

                <div className="socials">
                    <a href={`mailto:${profile.email}`}>✉️ Email</a>
                    <a href={profile.linkedin}>💼 LinkedIn</a>
                    <a href={profile.github}>GitHub</a>
                </div>
            </section>
        </main>
    );
}

createRoot(document.getElementById('root')).render(<App />);