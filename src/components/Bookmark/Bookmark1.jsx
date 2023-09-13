import PropTypes from 'prop-types'
const Bookmark1 = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-slate-200 p-4 my-4 rounded-sm'>
            <h3>{title}</h3>
        </div>
    );
};
Bookmark1.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark1;