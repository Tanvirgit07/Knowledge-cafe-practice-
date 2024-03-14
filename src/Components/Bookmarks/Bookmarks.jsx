import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookMarks}) => {
    return (
        <div>
            <h2>Bookmarks Blog : {bookMarks.length}</h2>
            {
                bookMarks.map(bookmark => <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookMarks : PropTypes.object,
}

export default Bookmarks;