import Head from 'next/head';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
       
      <Head>
        <title>My Portfolio</title>
      </Head>
      
      <header className="bg-white shadow">
        <div className="container mx-auto p-5">
          <h1 className="text-3xl font-bold text-center">My Portfolio</h1>
        </div>
      </header>
      
      <main className="container mx-auto p-5">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-5">About Me</h2>
          <div className="flex items-center space-x-4">
    <Image 
      src="/baaz.jpeg" // Path relative to the public folder
      alt="My Profile Picture"
      width={150}
      height={150}
      className="rounded-full"
    />
    <p className="text-gray-700">
      Hi, I’m Shalini, a intern in specializing the modern web applications.
    </p>
  </div>
</section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-5">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow-lg rounded-lg p-5">
              <h3 className="text-xl font-bold">Project 1</h3>
              <p className="text-gray-600">Human skin cancer classification</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-5">
              <h3 className="text-xl font-bold">Project 2</h3>
              <p className="text-gray-600">AI virtual mouse</p>
            </div>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-5">Contact</h2>
          <p className="text-gray-700">Email:shaliniarul722@gmail.com</p>
        </section>
        
      </main>
      <footer className="bg-gray-800 text-white p-5 text-center">
        © 2024 [Your Name]. All rights reserved.
      </footer>
    </div>
  );
}