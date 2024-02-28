import { FC } from "react";

type ImgProps = {
  img: string,
}

const Img: FC<ImgProps> = ({ img }) => {

  return (
    <>
      <img src={img} className="card-img-top" alt="Image cap" />
    </>
  );
}

export default Img;