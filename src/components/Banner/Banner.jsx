import { Typography } from "@material-tailwind/react";
import { Input, Button } from "@material-tailwind/react";

const Banner = ({ setValue, value, handleSearch }) => {
  return (
    <div className="h-[450px] flex flex-col justify-center items-center gap-6 relative">
      <div className="absolute inset-0 bg-[url('/images/banner.png')] bg-no-repeat bg-center bg-cover opacity-5"></div>
      <Typography variant="h2">I Grow By Helping People In Need</Typography>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="email"
          label="Search Here"
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
        />
        <Button
          onClick={() => {
            handleSearch();
            setValue("");
          }}
          size="sm"
          color="deep-orange"
          className="!absolute right-1 top-1 rounded"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default Banner;
