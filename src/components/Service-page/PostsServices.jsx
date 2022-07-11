let Posts = (props) => {
  return (
    <div className="created-post">
      <div className="titleDes">
        <h2 className="head"> {props.title}</h2>
        <p className="post-description2">{props.description}</p>
      </div>
      <div>
        <img className="image" src={props.image} alt=""></img>
      </div>
    </div>
  );
};

export default Posts;
