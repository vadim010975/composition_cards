import { PropsWithChildren, FC } from "react";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="card" style={{width: "18rem"}}>
      {children}
    </div>
  );
}

export default Card;
