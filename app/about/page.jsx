export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <section className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center px-32 space-y-8 md:px-48 lg:px-64">
          <h2 className="text-3xl font-bold sm:text-6xl">about me.</h2>
          <h3 className="font-semibold">
            software developer. | android enthusiast.
          </h3>
          <p className="pt-2 text-base">
            greetings! I’m Prince Madzamba, a passionate software developer
            hailing from Zimbabwe. My journey in the tech world has been fueled
            by curiosity and an unyielding drive to create meaningful solutions.
            As the alias “badcapitainn,” I navigate the digital seas with
            determination, much like a seasoned captain steering a ship. My
            compass points toward innovation, and my sails catch the winds of
            emerging technologies.
            My forte lies in Android development, and I’ve found my muse in
            Kotlin—the language that empowers me to craft elegant, efficient,
            and user-friendly mobile applications. Whether it’s building sleek
            UIs, optimizing performance, or diving into complex architectures, I
            relish every challenge.
            But here’s the secret: I’m not just content with what I know. I
            hunger for knowledge like a traveler seeking hidden paths. New
            technologies? Bring them on! Frameworks, libraries, APIs—I’m ready
            to learn, adapt, and elevate my craft. So, whether I’m debugging
            code late into the night or sketching out app blueprints during
            sunrise, I’m fueled by a relentless pursuit of excellence. Let’s
            connect, collaborate, and build something remarkable together!
          </p>

          <h3 className="text-3xl font-bold md:text-5xl">i prefer.</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Repeat for each language */}
            {["python", "javascript", "kotlin", "java"].map((language) => (
              <div
                className="flex items-center p-2 border rounded"
                key={language}
              >
                <div className="w-10 h-10 mr-2">
                  <img
                    src={`${language}-filled.png`}
                    alt="icon"
                    className="rounded"
                  />
                </div>
                <div className="flex-1 text-left">{language}.</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
