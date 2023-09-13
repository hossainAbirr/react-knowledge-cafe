import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {
const [bookmarks, setBookmarks] = useState([])
const [readingTime , setReadingTime] = useState(0)

const handleAddToBookmark = blog => {
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks)
}

const handleMarkAsRead = (time, id) => {
  // console.log('mark', time, bookmarks, id);
  console.log(id);
  const newTime = readingTime + time;
  setReadingTime(newTime)
  const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
  setBookmarks(remainingBookmarks)
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
