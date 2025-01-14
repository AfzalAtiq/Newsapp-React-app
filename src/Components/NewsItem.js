import React from 'react';
import '../style.css';

const NewsItem =(props)=>  {
    let { title, description, imageUrl, newsUrl,author,date,source } =props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{ dispaly:'flex',
          justifycontent:'flex-end',
          position:'absolute',
          right:'0'
          }
          }>

          <span className=" badge rounded-pill bg-danger"> {source}
          </span>
          </div>
          <img src={!imageUrl?"https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg":imageUrl} className="card-img-top" alt={title} />
          <div className="card-body">
           
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown": author} on {new Date(date).toGMTString()}</small></p>
            <a  rel="noreferrer" href={newsUrl} target="_blank"  className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
