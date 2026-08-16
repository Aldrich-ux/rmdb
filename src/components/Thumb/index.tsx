import React from "react";
import { Link } from "react-router";
// Styles
import { Image } from "./Thumb.styles";
// Types
type Props = {
  image: string;
  clickable: boolean;
  movieId: number;
};

const Thumb: React.FC<Props> = ({ image, clickable, movieId }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

export default Thumb;
