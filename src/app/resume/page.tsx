const Resume = () => {
    return (
        <div className="home bg-primary">
            <div className="max-w-[724px] mx-auto px-6 md:px-0">
                <div className="px-3 py-12 h-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue mr-3" />
                    <h1 className="text-4xl font-extrabold">Resume</h1>
                </div>
                <div className="flex justify-between mt-4 w-full">
                    <h2 className="text-3xl font-bold">Experience</h2>
                    <button className="bg-blue border-2 border-blue hover:bg-transparent hover:text-black text-white px-4 py-1 rounded-2xl">
                        Download CV
                    </button>
                </div>
                {/* Experience Section */}
                <section className="py-8">

                <div className="pt-6">
                    {/* Experience Card 1 */}
                    <div className="p-6 mb-6 bg-white shadow-lg rounded-lg md:flex">
                    {/* Left Side - Company Info */}
                        <div className="md:w-1/3 pr-4">
                            <h3 className="mb-2 text-xl font-semibold text-blue">Feb 2023 - Present</h3>
                            <p className="mb-2 font-medium">Sr. Software Engineer</p>
                            <p className="mb-2 text-sm text-gray-600">Sofura, Ahmedabad</p>
                        </div>

                        {/* Right Side - Description */}
                        <div className="md:w-2/3 text-gray-700">
                            <p className="pt-6">As a Full Stack Developer, I built dynamic web applications using React.js, addressing technical and business needs. 
                            I developed RESTful APIs with Node.js, ensuring maintainability and performance. I contributed to troubleshooting and optimization 
                            across the full stack for efficient solutions. In the Vault Admin Portal project, I collaborated with management to meet all 
                            requirements, created REST APIs, handled database operations, and integrated DynamoDB and PostgreSQL for a seamless 
                            user experience.</p>
                        </div>
                    </div>

                    {/* Experience Card 2 */}
                    <div className="p-6 mb-6 bg-white shadow-lg rounded-lg md:flex">
                        {/* Left Side - Company Info */}
                        <div className="md:w-1/3 pr-4">
                            <h3 className="mb-2 text-xl font-semibold text-blue">June 2019 - Jan 2023</h3>
                            <p className="mb-2 font-medium">Software Engineer</p>
                            <p className="mb-2 text-sm text-gray-600">Scaletech, Ahmedabad</p>
                        </div>

                        {/* Right Side - Description */}
                        <div className="md:w-2/3 text-gray-700">
                            <p className="pt-6">As a Full Stack Developer, I built responsive web applications with React.js, implementing Redux for state management and 
                            optimizing performance. I integrated front-end interfaces with Node.js and contributed to code reviews, focusing on best practices, 
                            responsive design, and accessibility. In the BETFAN - Sports Betting PWA, I developed the authentication feature and mentored 
                            juniors, optimizing components for performance. For the Streaming Platform WebApp, I developed a responsive app with React 
                            and Node and managed client requirements using Redux.</p>
                        </div>
                    </div>
                    <div className="p-6 mb-6 bg-white shadow-lg rounded-lg flex">
                        
                    </div>
                </div>
                </section>
            </div>
        </div>
    )
}

export default Resume;