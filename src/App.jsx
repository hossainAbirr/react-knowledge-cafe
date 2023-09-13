import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
const [bookmarks, setBookmarks] = useState([])
const [readingTime , setReadingTime] = useState(0)

const handleMarkAsRead = time => {
  console.log('mark', time);
  const newTime = readingTime + time;
  setReadingTime(newTime)
}

const handleAddToBookmark = blog => {
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks)
}
  return (
    <>
      <Header></Header>
      <div className='md:flex'>
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
