import PropTypes from 'prop-types'
import Bookmark1 from '../Bookmark/Bookmark1';
const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 my-8 ml-8 bg-[#1111110d] p-8">
            <div className='bg-[#6047ec1a] mb-5 p-5 rounded-md'>
                <h2 className='text-3xl'>Reading Time: {readingTime}</h2>
            </div>
                <h2 className='text-3xl font-bold'>Bookmarked Blogs:{bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark1 key={idx} bookmark={bookmark}></Bookmark1>)
                }
            
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;