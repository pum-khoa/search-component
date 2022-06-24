import React from 'react';
import './ListView.css';
const ListView = (props) => {
  const { data } = props;
  if (data.length > 0)
    return (
      <ol {...props} data-testid="listSearchHit">
        {data.map((item, index) => {
          if (item.title)
            return (
              <li key={index}>
                <a href={item.url}> {item.title}</a>
              </li>
            );
          else return null;
        })}
      </ol>
    );
  else return <p className="no-data" data-testid="listNoDataSearchHit">No data</p>;
};

export default ListView;
