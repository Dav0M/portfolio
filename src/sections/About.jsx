

const About = () => {
  return (
    <section id="about" className='h-screen min-h-150 bg-base-100 m-auto max-x-screen-md place-content-center'>
      <div className='grid md:grid-cols-2 gap-12 place-content-center w-full my-12'>
        <div class="col-span-1 avatar size-80 my-auto place-self-center md:place-self-end">
          <img src="/avatar_img.jpg" className="hover:animate-spin rounded-full w-60 h-auto md:80 md object-cover shadow-lg"/>
        </div>
        <div class="col-span-1 my-auto place-self-center md:place-self-start w-3/4 lg:w-125 ">
          <hgroup className='w-full'>
            <p className='text-6xl font-bold mb-8'>Hey, I'm David</p>
            <p className='text-xl mb-10'>I'm a Software Engineer who enjoys developing <span className='italic'>sometimes</span> useful things that solve problems.</p>
            <a href='https://www.linkedin.com/in/dmai2025' className='w-fit' target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className='size-12 hover:scale-115' viewBox="0 0 128 128">
                <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3" />
                <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z" />
              </svg>
            </a>
          </hgroup>
        </div>
      </div>
    </section>
  );
};

export default About;


{/*
<section id="about" className="min-h-screen bg-base-500 flex items-center">
  <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h2 className="text-4xl font-bold mb-6">About Me</h2>
      <p className="text-gray-600 leading-relaxed">
        Passionate software developer with 5+ years of experience 
        in web and mobile application development. Specializing in 
        modern JavaScript frameworks and creating intuitive, 
        user-friendly interfaces.
      </p>
    </div>
    <div className="flex justify-center">
      <img 
        src="/api/placeholder/400/400" 
        alt="Profile" 
        className="rounded-full w-64 h-64 object-cover shadow-lg"
      />
    </div>
  </div>
</section>
*/}