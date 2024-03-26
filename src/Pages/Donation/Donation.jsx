import { useState } from "react";
import Donated from "../../components/Donated/Donated";
import { getLocalStorage } from "../../utils/LocalStorage";

const Donation = () => {
  const data = getLocalStorage();

  const [dataLength, setDataLength] = useState(4);

  const handleShowAll = () => {
    setDataLength(data.length);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <div className="flex flex-wrap gap-6 justify-center items-center">
        {data.slice(0, dataLength).map((item, idx) => (
          <Donated key={idx} data={item}></Donated>
        ))}
      </div>
      <div className={dataLength === data.length && "hidden"}>
        <button onClick={handleShowAll} className="btn">
          Show All
        </button>
      </div>
    </div>
  );
};

export default Donation;
