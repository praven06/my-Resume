import Contact from './Contact'
import Links from './Links'
import profile from './assets/profile.jpg'
import Skills from './Skills'
import About from './About'
import Education from './Education'
import Technologies from './Technologies'

function App() {
  return (
    <div className='flex justify-center items-center  bg-gray-200'>
      <div className='flex w-4/5 m-10 bg-white shadow-xl rounded-lg overflow-hidden'>
        {/* Left Section */}
        <div className='left-div w-1/3 bg-gray-800 p-6 flex flex-col items-center'>
          <img
            className='w-32 h-32 rounded-full border-4 border-teal-500 shadow-lg mb-4'
            src={profile}
            alt='Profile'
          />
          <h1 className='text-2xl font-semibold text-teal-400 mb-1'>Praveen Kumar B</h1>
          <h4 className='text-sm text-gray-300 mb-6'>Software Engineer</h4>
          <div className='w-full space-y-6'>
            <Contact />
            <Links />
            <Skills />
          </div>
        </div>

        {/* Right Section */}
        <div className='right-div w-2/3 bg-gray-100 p-8 space-y-6'>
          <About/>
          <Education/>
          <Technologies/>
        </div>
      </div>
    </div>
  )
}

export default App
