'use client'
import React, { useEffect, useState } from 'react'
import blogApi from '@/utils/BlogApi';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { RiProfileFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';

function blogDetailPage() {
    const params = useParams();
    // console.log(params.id);
    const [loading, setLoading] = useState(true);
    const [blog,setBlog] = useState([]);
      useEffect(()=>{
        blogApi.getBlogById(params.id).then((res)=>{
          setLoading(true);
          
          setBlog(res?.blog);
          setLoading(false);
        })
      },[]);
  return (
    <div>
      
        <div className='flex flex-row justify-between items-center my-5'>
          <div className='me-5 flex flex-row items-center'><CgProfile className='me-3 text-5xl'  /> 
          <div>
            <div className='text-sm'>Author</div>
            {
              loading ? (
              <div class="h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 animate-pulse"></div>
              ):(
                <div className='text-xl'>{blog?.author}</div>
              )
            }
          </div>
          </div>
          {
              loading ? (
              <div class="h-[30px] bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4 animate-pulse"></div>
              ):(
                <div className='bg-orange-500 p-2'>{blog?.date}</div>
              )
            }
          
        </div>
        <hr />
        {
          loading ? (
            <div>
              <div class="h-[50px] bg-gray-200 rounded-lg dark:bg-gray-700 w-2/3 my-4 mx-auto animate-pulse"></div>
            
              <div class="w-2/3 mx-auto flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700 animate-pulse">
                    <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                    </svg>
                </div>
            </div>


          ):(
            <div>
              <div className='text-[40px] text-center mt-5 font-bold mb-5'>
          {blog?.title}
        </div>
          <img src={blog?.image?.url} className='w-2/3 h-full mx-auto'/>
            </div>
          )
        }

        {
          loading? (
          <div className='w-2/3 mx-auto my-5'>
              <div class="h-[20px] bg-gray-200 rounded-lg dark:bg-gray-700 w-full my-4 mx-auto animate-pulse"></div>
              <div class="h-[20px] bg-gray-200 rounded-lg dark:bg-gray-700 w-full my-4 mx-auto animate-pulse"></div>
              <div class="h-[20px] bg-gray-200 rounded-lg dark:bg-gray-700 w-full my-4 mx-auto animate-pulse"></div>
              <div class="h-[20px] bg-gray-200 rounded-lg dark:bg-gray-700 w-full my-4 mx-auto animate-pulse"></div>
              <div class="h-[20px] bg-gray-200 rounded-lg dark:bg-gray-700 w-2/3 my-4  animate-pulse"></div>
              <div class="h-[20px] bg-gray-200 rounded-lg dark:bg-gray-700 w-1/3 my-4  animate-pulse"></div>
          </div>
          ):(
            <div>
            {
              blog?.description?.map((des,index)=>(
                <div className='text-xl/9 mb-5 w-2/3 mx-auto'>{des}</div>
              ))
            }
          </div>
          )
        }
       
    </div>
  )
}

export default blogDetailPage