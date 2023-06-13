import React from 'react'

const About = () => {
    return (
        <div name = "about" className = "w-full md:h-screen text-gray-800">
            <div className = "max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className = "pb-8">
                    <p className = "text-4xl font-bold inline border-b-4 border-gray-900">About</p>
                </div>
                <p className= "text-xl mt-10">
                Highly skilled Full Stack Developer with experience in building scalable web applications using modern technologies. 
                Specialized in Next.js, React.js, and Redis, with a strong understanding of frontend and backend development. 
                Proven track record of delivering high-quality code and solutions within deadline-driven environments. 
                Passionate about creating intuitive user interfaces and optimizing application performance. 
                Effective collaborator with excellent problem-solving skills and a strong dedication to continuous learning and professional growth.
                </p>
            </div>
        </div>
    )
}

export default About