import PropTypes from 'prop-types';
import {FaBookmark} from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark, handleMarkAsRead}) => {
    const {title,author, author_img, reading_time, hashtags, posted_date, cover} = blog;
    return (
        <div className='my-8'>
            <img className='w-full rounded-md' src={cover} alt="" />
            
            <div className='flex justify-between items-center gap-10 my-10'>
                <div className='flex gap-5 items-center'>
                    <img className='w-20 h-20 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-3xl mb-2'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time}min read</span>
                    <button 
                    className='ml-4'
                    onClick={() => handleAddToBookmark(blog)}
                    ><FaBookmark></FaBookmark></button>
                </div>
            </div>
                <h2 className='text-3xl font-bold mb-3'>{title}</h2>
                <p>#{hashtags[0]} #{hashtags[1]}</p>
                <button className='text-blue-700 underline font-medium'
                onClick={() => handleMarkAsRead(reading_time)}
                >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}
export default Blog;