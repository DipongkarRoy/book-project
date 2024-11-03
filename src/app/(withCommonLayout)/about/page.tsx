
const AboutPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 text-gray-800">
        <div className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
          <div className="flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg"
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-lg"
            />
            <h1 className="mt-4 text-3xl font-bold text-gray-900">Dipongkar Roy</h1>
            <p className="mt-2 text-gray-600">MERN Stack Developer</p>
          </div>
  
          <div className="mt-6">
            <p className="text-gray-700 leading-relaxed text-center">
              Hello! I’m Dipongkar Roy, a Fronted web developer with a passion for
              creating efficient and beautiful digital experiences. With a focus
              on 2 years, I enjoy turning complex problems into simple,
              beautiful, and intuitive designs.
            </p>
          </div>
  
          <div className="flex justify-center mt-6 space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* GitHub icon SVG path */}
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* LinkedIn icon SVG path */}
              </svg>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                {/* Twitter icon SVG path */}
              </svg>
            </a>
          </div>
        </div>
      </div>
    );
};

export default AboutPage;