import Image from 'next/image';
import SkillBar from '../components/SkillBar';

const skills = [
  { name: 'JavaScript', level: 70 },
  { name: 'Java', level: 85 },
  { name: 'React', level: 60 },
  { name: 'Angular', level: 65 },
  { name: 'Next.js', level: 60 },
  { name: 'Spring Boot', level: 80 },
];

export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        <div className="md:w-1/3">
          <div className="relative w-64 h-64 md:w-full md:h-96">
            <Image
              src="/profile_pic.jpg"
              alt="Nathija Nimantha"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              className="rounded-full shadow-2xl"
              priority
            />
          </div>
        </div>

        <div className="md:w-2/3">
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            I&apos;m Nathija Nimantha, a passionate and aspiring full-stack software engineer currently studying at the Institute of Computer Engineering (ICET). My journey in programming began with a fascination for solving complex problems and creating innovative solutions.
          </p>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            Throughout my academic career, I&apos;ve worked on various projects that honed my skills in both front-end and back-end development. I&apos;m particularly interested in web technologies and enjoy working with frameworks like React, Angular, and Next.js.
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Skills
          </h2>
          <div className="space-y-4 mb-8">
            {skills && skills.length > 0 ? (
              skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))
            ) : (
              <p className="text-gray-700 dark:text-gray-300">
                No skills data available at the moment.
              </p>
            )}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100">
            Fun Fact
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            When I&apos;m not coding, you can find me exploring new programming languages and frameworks. I love the challenge of learning something new and applying it to real-world problems!
          </p>
        </div>
      </div>
    </div>
  );
}
