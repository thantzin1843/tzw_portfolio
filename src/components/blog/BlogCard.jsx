import React from 'react'

function BlogCard({blog}) {
  return (
    <div class="w-full md:w-1/3 border border-gray-200 rounded-lg shadow  dark:border-gray-700">
        <a href={`/blog/${blog?.id}`}>
            <img class="rounded-t-lg" src={blog?.image?.url} alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight ">{blog?.title}</h5>
            </a>
            <p class="mb-3 font-normal line-clamp-2 ">
                {blog?.description[0]}
            </p>
            <a href={`/blog/${blog?.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center   rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300  dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>

  )
}

export default BlogCard