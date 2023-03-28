import React from 'react';

const Comment = props => {
  const { item } = props;
  return (
    <div key={item.id} className="contents">
      <p>
        <strong> {item.id}</strong> {item.value}
      </p>
    </div>
  );
};

export default Comment;
