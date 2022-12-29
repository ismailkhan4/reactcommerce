import React from 'react'

const Footer = () => {
    const date = new Date()
    return (
        <div>
            <p className='text-center'>
                Copyright &copy; {date.getFullYear()}. Designed by <span className='text-success'>Ismail</span>
            </p>
        </div>
    )
}

export default Footer