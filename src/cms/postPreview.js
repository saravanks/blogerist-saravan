import React from 'react';
import PropTypes from 'prop-types';
import { PostTemplate } from '../templates/post';

const PostPreview = ({ entry, widgetFor }) => (
  <PostTemplate title={ entry.getIn(['data', 'title']) } content={ widgetFor('body') } />
);
PostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}
export default PostPreview;