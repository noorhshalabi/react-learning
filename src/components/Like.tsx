import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);
  const toggle = () => {
    setStatus(!status); //switch back and forth instead of having repetitive code
    onClick(); //Call to notify consumer
  };

  if (status)
    return <AiFillHeart color="red" size={20} onClick={toggle}></AiFillHeart>;
  return <AiOutlineHeart size={20} onClick={toggle}></AiOutlineHeart>;
};

export default Like;
