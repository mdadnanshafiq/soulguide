import Donated from "../../components/Donated/Donated";
import { getLocalStorage } from "../../utils/LocalStorage";

const Donation = () => {
  const data = getLocalStorage();

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {data.map((item, idx) => (
          <Donated key={idx} data={item}></Donated>
        ))}
      </div>
      <div>
        <button className="btn">Show All</button>
      </div>
    </div>
  );
};

export default Donation;
