import React from 'react'
import { Link } from 'react-router-dom'
import profile from '../assets/profile.png'
import styles from '../styles/Username.module.css'

const Username = () => {
  return (
    <div className='container mx-auto'>
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col item-center">
            <h4 className='text-5xl font-bold text-center'>Hello Again</h4>
            <span className="py-4 text-center text-xl w-2/3text-grey-500">Explore more by connecting with us</span>
          </div>

          <form className='py-1'>
            <div className="profile flex justify-center py-4">
              <input type="file" />
              <img className={styles.profile_img} src={profile} alt="avatar" />
            </div>
            <div className={`textbox flex flex-col items-center gap-6`}>
              <input type='text' className={styles.textbox} placeholder='Username' />
              <button style={{
                width: '288px',
                backgroundColor: "black",
                borderRadius: "5px",
                color: "white",
                height: "45px"
              }} type='submit'>Let's Go</button>
            </div>
            <div className="text-center py-4">
              <span className='text-grey-500'>Not a Menber <Link className='text-red-500' to="/register">Register Now</Link></span>
            </div>
          </form>
        </div>
      </div >
    </div >
  )
}

export default Username
