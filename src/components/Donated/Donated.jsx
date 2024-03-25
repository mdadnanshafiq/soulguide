import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Donated = ({ data }) => {
  return (
    <Card
      className="w-full max-w-[48rem] flex-row"
      style={{ backgroundColor: data.cardBg }}
    >
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={data.image}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <button
          style={{ color: data.textColor }}
          className="btn btn-xs mb-4 uppercase"
        >
          {data.category}
        </button>
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {data.title}
        </Typography>
        <Typography
          style={{ color: data.textColor }}
          color="gray"
          className="mb-8 font-bold"
        >
          ${data.price}.00
        </Typography>
        <Link to={`/donation-details/${data.id}`} className="inline-block">
          <Button
            style={{ backgroundColor: data.categoryBg }}
            variant="text"
            className="btn flex items-center gap-2 text-white border-none"
          >
            View Details
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default Donated;
