import { useParams } from "react-router-dom";
import useDonationData from "../../Hooks/useDonationData";
import { useEffect, useState } from "react";
import { saveLocalStorage } from "../../utils/LocalStorage";
import Loader from "../../components/Loader/Loader";

const DonationDetails = () => {
  const [singleData, setSingleData] = useState({});
  const { id } = useParams();
  const { data, loading } = useDonationData();

  const handleDonate = () => {
    saveLocalStorage(singleData);
  };

  useEffect(() => {
    if (data.length > 0) {
      const single = data.find((item) => item.id == id);
      setSingleData(single);
    }
  }, [id, data]);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <div>
        <img src={singleData.image} alt="" />
        <div>
          <button onClick={handleDonate} className="btn">
            Donate ${singleData.price}
          </button>
        </div>
      </div>
      <div>{singleData.title}</div>
      <div>{singleData.description}</div>
    </div>
  );
};

export default DonationDetails;
