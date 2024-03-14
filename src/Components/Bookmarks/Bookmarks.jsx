import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookMarks,spentTimes}) => {
    return (
        <div className='mt-11'>
            <div className=' p-2 font-bold text-2xl'>
                <h3>Spent time on read : {spentTimes} min</h3>
            </div>
            <div className=''>
            <h2>Bookmarks Blog : {bookMarks.length}</h2>
            <div className='bg-slate-'>
            {
                bookMarks.map(bookmark => <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
            </div>
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookMarks : PropTypes.object,
    spentTimes : PropTypes.object
}

export default Bookmarks;