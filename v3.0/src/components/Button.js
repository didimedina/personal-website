import React from 'react';
import { BookmarkIcon } from '@heroicons/react/solid'

const styles = {
  container: `
    relative z-0 inline-flex h-12 shadow-lg rounded-md
  `
}


const Button = () =>  {
  return (
    <span className={styles.container}>
      <button
        type="button"
        className="relative  inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
      >
        <BookmarkIcon className="-ml-1 mr-2 h-5 w-5 text-gray-400" aria-hidden="true" />
        Bookmark
      </button>
      <button
        type="button"
        className="-ml-px relative  inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        12k
      </button>
    </span>
  )
}

export default Button;