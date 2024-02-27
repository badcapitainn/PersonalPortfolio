export default function Component() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <main className="flex-1 py-6">
        <div className="container px-4 py-6 mx-auto space-y-6 text-xl leading-loose text-gray-900 dark:text-gray-50">
          <div className="flex prose lg:prose-xl max-w-[900px] mx-auto">
            <img
              className="w-64 h-64 rounded-full mr-8"
              src="/image1.jpg"
              alt="Your Name"
            />
            <div>
              <h1 className="font-bold text-4xl md:text-6xl">Hi, I'm Prince</h1>
              <p className="text-gray-500 dark:text-gray-500">
                I am a computer scientist who believes that technology can be a
                powerful tool for positive change in the world. I am passionate
                about creating innovative and user-friendly applications for
                Android devices, using modern frameworks such as Jetpack Compose
                and Kotlin. I enjoy exploring new ways to design and develop
                engaging and accessible interfaces that can enhance the user
                experience and solve real-world problems. I am always eager to
                learn new skills and technologies, and to collaborate with other
                developers and experts in the field. My goal is to use my
                knowledge and creativity to make a difference in the world
                through technology.
              </p>
              <a
                href="/about"
                className="mt-4 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-black uppercase transition bg-transparent border-2 border-gray-700 rounded-full ripple hover:bg-gray-100 focus:outline-none"
              >
                More about me
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
