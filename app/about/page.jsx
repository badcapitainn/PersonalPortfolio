export default function About() {
  return(
      <div className="flex flex-col min-h-screen">
          <main className="flex-1 py-6">
              <div className="container px-4 py-6 mx-auto space-y-6 text-xl leading-loose text-gray-900 dark:text-gray-50">
                  <div className="prose lg:prose-xl max-w-[900px] mx-auto">
                      <h1 className="text-4xl font-bold md:text-6xl">About Me</h1>
                      <p className="text-gray-500 dark:text-gray-500">I am a passionate software developer with a knack for problem-solving and a love for clean, efficient code.</p>
                      
                      <h2 className="text-3xl font-bold md:text-5xl">Languages I Use</h2>
                      <div className="grid grid-cols-3 gap-4">
                          <div className="flex items-center p-2 border rounded">
                              <div className="w-10 h-10 mr-2">
                                  {/* Replace 'javascript.png' with the path to your JavaScript logo */}
                                  <img src="javascript.png" alt="icon" className="rounded-full" />
                              </div>
                              <div className="flex-1 text-left">JavaScript</div>
                          </div>
                          {/* Repeat for each language */}
                      </div>
                      
                      <h2 className="text-3xl font-bold md:text-5xl">My Accomplishments</h2>
                      <p className="text-gray-500 dark:text-gray-500">I have contributed to several open-source projects and have built numerous web applications and software solutions for various industries.</p>
                      
                      <a href="/resume" className="text-blue-500 underline">View my resume</a>
                  </div>
              </div>
          </main>
      </div>
  )
}
