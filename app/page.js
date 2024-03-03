export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <section 
        className='flex items-center justify-center h-[85vh]'
        >
        <div className='flex flex-row items-center'>
          <div className="m-4 sm:ml-4">
            <h1 className="text-3xl font-bold sm:text-6xl">
              Hello world, this is my portfolio
            </h1>
            <p className="pt-2 text-base">
              Where I show you my expertise and thoughts as I build
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
