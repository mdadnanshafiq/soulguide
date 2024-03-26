import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import useDonationData from "../../Hooks/useDonationData";
import Loader from "../../components/Loader/Loader";

const Home = () => {
  const [value, setValue] = useState("");
  const { data, loading } = useDonationData();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (loading) {
      return <Loader></Loader>;
    }
    setFilteredData(data);
  }, [data]);

  const handleSearch = () => {
    if (loading) {
      return <Loader></Loader>;
    }
    if (value.trim() !== "") {
      const filtered = data.filter((item) =>
        item.category.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data);
    }
  };
  return (
    <div className="mx-auto">
      <Banner
        setValue={setValue}
        value={value}
        handleSearch={handleSearch}
      ></Banner>
      <Categories loading={loading} filteredData={filteredData}></Categories>
    </div>
  );
};

export default Home;
