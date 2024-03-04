export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section className='flex items-center justify-center h-[85vh]'>
        <div className='flex flex-row items-center'>
          <div className="m-4 sm:ml-4">
            <h1 className="text-3xl font-bold sm:text-6xl">
              hello world, this is my portfolio.
            </h1>
            <p className="pt-2 text-base">
              Where I show you my expertise and thoughts as I build
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="https://github.com/badcapitainn" className="px-4 py-2 bg-transparent border border-black rounded hover:bg-gray-400">github.</a>
              <a href="https://www.linkedin.com/in/prince-madzamba-a5aaa027a/" className="px-4 py-2 bg-transparent border border-black rounded hover:bg-gray-400">linkedIn.</a>
              <a href="https://stackoverflow.com/users/19962868/badcapitainn" className="px-4 py-2 bg-transparent border border-black rounded hover:bg-gray-400">stackoverflow.</a>
              <a href="/CV-Prince-Madzamba.pdf" className="px-4 py-2 bg-transparent border border-black rounded hover:bg-gray-400">myResume.</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
