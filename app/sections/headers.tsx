import React from 'react'

const headers = () => {
  return (
    <div className='flex flex-wrap items-center justify-between'>
        <div className='flex justify-center items-center h-full w-1/4'> <a href="/cv.pdf" download><h2>Dinahasina(Telecharge CV)</h2></a></div>
        <nav className='flex justify-center w-3/4'>
            <a href="/Home" className='m-6'>Apropos</a>
            <a href="/Home" className='m-6'>À propos</a>
            <a href="/Home" className='m-6'>Expérience professionnelle</a>
            <a href="/Home" className='m-6'>Projets</a>
            <a href="/Home" className='m-6'>Compétences</a>
            <a href="/Home" className='m-6'>Contact</a>
        </nav>
    </div>
  )
}

export default headers