import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Post.scss';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

class Post extends React.Component {
  static propTypes = {
    data: PropTypes.object,
    single: PropTypes.bool
  }

  render() {
    const { data } = this.props;
    const time = new Date(data.time);
    const timeRender = monthNames[time.getMonth()] + ' ' + time.getDate();
    return (
      <article className={styles.Post}>
        <header>
          <h1>
            {!this.props.single ? (
              <Link to={'post/' + data.id}>{data.title}</Link>
            ) : data.title
            }
          </h1>
          <h5 className={styles.date}>Posted at <span>{timeRender}</span></h5>
        </header>
        <div className="content" dangerouslySetInnerHTML={{ __html: data.content }}></div>
        <hr />
      </article>
    );
  }
}

export default Post;
