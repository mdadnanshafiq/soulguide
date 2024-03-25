import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CategoryCard = ({ data }) => {
  return (
    <Link to={`/donation-details/${data.id}`} className="mx-auto">
      <div className="mx-auto">
        <Card
          style={{ backgroundColor: data.cardBg, color: data.textColor }}
          className=" mx-auto shadow-none "
        >
          <CardHeader
            color="blue-gray"
            className="relative shadow-none m-0 p-0 rounded-b-none"
          >
            <img src={data.image} alt="card-image" />
          </CardHeader>
          <CardBody>
            <button
              style={{
                backgroundColor: data.categoryBg,
                color: data.textColor,
              }}
              color="blue-gray"
              className="mb-2 btn-xs btn border-none"
            >
              {data.category}
            </button>
            <Typography className="text-xl font-bold">{data.title}</Typography>
          </CardBody>
        </Card>
      </div>
    </Link>
  );
};

export default CategoryCard;
