import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";

const DonationDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const { data } = useDonationData();

  useEffect(() => {
    if (data.length > 0) {
      const single = data.find((item) => item.id == id);
      setSingleData(single);
    }
  }, [id, data]);

  return (
    <div>
      <div>
        <img src={singleData.image} alt="" />
        <div>
          <button className="btn">Donate ${singleData.price}</button>
        </div>
      </div>
      <div>{singleData.title}</div>
      <div>{singleData.description}</div>
    </div>
  );
};

export default DonationDetails;
