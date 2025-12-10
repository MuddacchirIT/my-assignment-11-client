import { use } from "react";
const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  return <div></div>;
};

export default Reviews;
