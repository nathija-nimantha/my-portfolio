import Link from 'next/link';

export default function Resume() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">Resume</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Nathija Nimantha Jayasinghe</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Trainee Full-Stack Developer</p>

        <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Contact</h3>
        <ul className="mb-4 text-gray-700 dark:text-gray-300">
          <li>Email: <a href="mailto:Nathijanimantha10@gmail.com" className="text-indigo-600 dark:text-indigo-400">Nathijanimantha10@gmail.com</a></li>
          <li>Phone: +94 76 123 1133 / +94 71 424 299</li>
          <li>Address: 50/4, Hospital Road, Aluthgama</li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/nathija-nimantha" target="_blank" className="text-indigo-600 dark:text-indigo-400">linkedin.com/in/nathija-nimantha</a></li>
          <li>GitHub: <a href="https://github.com/nathija-nimantha" target="_blank" className="text-indigo-600 dark:text-indigo-400">github.com/nathija-nimantha</a></li>
        </ul>

        <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Objective</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Creative and detail-oriented Full Stack Developer with expertise in modern web and mobile app development technologies, including React, Angular, Java, Dart (Flutter), and MySQL. Seeking to leverage my technical skills and passion for software engineering to develop scalable and efficient applications.
        </p>

        <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Skills</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
          <li>Languages: Java, JavaScript, HTML, CSS, TypeScript</li>
          <li>Frameworks/Libraries: Angular, Next.js, React, Spring Boot, Flutter</li>
          <li>Tools: MySQL, Git, TailwindCSS</li>
          <li>Soft Skills: Teamwork, Communication, Problem-Solving, Quick Learning</li>
        </ul>

        <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Experience</h3>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          <strong>Nimantha Tours and Travels (Jan 2020 - Dec 2023):</strong> Organized and managed travel itineraries for customers by analyzing their requirements and preferences, leading to enhanced client satisfaction.
        </p>

        <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Education</h3>
        <ul className="mb-4 text-gray-700 dark:text-gray-300">
          <li>Institute of Computer Engineering Technology (ICET) - Full-Stack Software Engineering Program (Current)</li>
          <li>Kalutara Vidyalaya - G.C.E. A/L Examination in Physical Science (2019)</li>
          <li>Aluthgama National School - G.C.E. O/L Examination (2016)</li>
        </ul>

        <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Certifications</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
          <li>Python Programming (Mimo) - 2022</li>
          <li>English Language Certification (British Way English Academy) - 2019</li>
        </ul>

        <h3 className="text-xl font-bold mb-2 text-indigo-600 dark:text-indigo-400">Projects</h3>
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
          <li>
            <strong>Hospital Management System:</strong> Collaborated on developing a hospital management system using Angular and integrated APIs for real-time data management.
          </li>
          <li>
            <strong>Library Management System:</strong> A robust system for book management using Angular, Spring Boot, and MySQL. Features include book reservations, user authentication, and notifications.
          </li>
          <li>
            <strong>Customer Details Manager:</strong> Java Swing application for managing customer data with CRUD operations and a Singleton design pattern.
          </li>
        </ul>

        <Link
          href="/NathijaNimantha.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Download Resume (PDF)
        </Link>
      </div>
    </div>
  );
}
