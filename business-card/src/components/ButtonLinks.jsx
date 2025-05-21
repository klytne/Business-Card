// Button links

import linkedin from '../assets/linkedin.svg'

export default function ButtonLinks() {
    return (
        <div className='flex gap-8 mt-5 max-sm:block'>
            <button type='button' className='px-7 py-2 bg-white flex rounded-lg text-black max-sm:mb-3 hover:cursor-pointer max-sm:mx-auto'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                Email
            </button>

            <>
                <button type='button' className='bg-blue-400 flex rounded-lg px-7 py-2 pr-10 hover:cursor-pointer max-sm:mx-auto'>
                    <img src={linkedin} className='mr-2 size-6'/>
                    LinkedIn
                </button>
            </>
        </div>
        
    )
}