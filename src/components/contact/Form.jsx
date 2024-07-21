
import React from 'react'
import styles from './contact.module.css'
import { IoIosSend } from "react-icons/io";
import { storeMessage } from '@/utils/actions';


async function Form() {
  return (
    <form action={storeMessage} className='w-full p-2 my-5'>
      <input  name='name' type="text" placeholder="Name" className={`${styles.border} w-full   outline-none p-3 bg-gray-600/0 shadow-lg`} />
      <input  name='email' type="email" placeholder="Email" className={`${styles.border} w-full mt-3  outline-none p-3 bg-gray-600/0`} />
      <textarea name="message" id="" className={`${styles.border} w-full mt-3  outline-none p-3 bg-gray-600/0`} rows={10}>
      </textarea>
      <div className='w-full flex justify-center mt-5 '>
      <button className={`py-5 px-20 ${styles.border} mx-auto ${styles.sendbtn} flex items-center` } type='submit'>Send Message&nbsp;<IoIosSend size={35}/></button>
      </div>
    </form>
  )
}

export default Form