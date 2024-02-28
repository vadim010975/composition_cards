import { FC } from "react";

type BodyProps = {
  title: string,
  content: string,
  linkBtn: string,
  textBtn: string,
}

const Body: FC<BodyProps> = ({ title, content, linkBtn, textBtn }) => {

  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{content}</p>
      <a href={linkBtn} className="btn btn-primary">{textBtn}</a>
    </div>
  );
}

export default Body;