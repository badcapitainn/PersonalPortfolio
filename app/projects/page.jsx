export default function Projects() {
  // Replace this with your actual data
  const projects = [
    {
      image: "/portfoliopic.png",
      description:
        "a personal portfolio website i created to to manage my projects, archievements and also to practice my web development in new and mordern frameworks like javascript and tailwind. ",
      stacks: ["next.js", "javascript.", "tailwind."],
      githubLink: "https://github.com/badcapitainn/personalportfolio",
    },

    {
      image: "/letstalkpic.png",
      description:
        "a mobile app language translator that translate from english to chinese in text as well as turn the chinese text into speech, i am still yet to create the conversation aspect of the app ",
      stacks: ["jetpack compose.", "kotlin.", "ml-kits."],
      githubLink: "https://github.com/badcapitainn/LetsTalk",
    },

    // Add more projects as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <section className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center px-4 space-y-8 md:px-8 lg:px-16">
          <h1 className="text-3xl font-bold sm:text-6xl">my projects.</h1>

          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full p-4 border border-black rounded-md card md:w-96"
              >
                <img
                  src={project.image}
                  alt="Project"
                  className="object-cover w-full h-64 rounded-md"
                />
                <p className="mt-4">{project.description}</p>
                <h3 className="mt-4 font-semibold">development stack.</h3>
                <ul className="list-disc list-inside">
                  {project.stacks.map((stack, i) => (
                    <li key={i}>{stack}</li>
                  ))}
                </ul>
                <div className="flex justify-end mt-4">
                  <a
                    href={project.githubLink}
                    className="px-4 py-2 bg-transparent border border-black rounded hover:bg-gray-400"
                  >
                    github.
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
