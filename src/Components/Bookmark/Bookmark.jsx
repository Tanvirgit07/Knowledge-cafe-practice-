import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    return (
        <div>
            <h3>{bookmark.title }</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object,
}

export default Bookmark;