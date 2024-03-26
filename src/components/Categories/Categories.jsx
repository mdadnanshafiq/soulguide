import CategoryCard from "../CategoryCard/CategoryCard";
import Loader from "../Loader/Loader";

const Categories = ({ loading, filteredData }) => {
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="grid md:grid-cols-4 justify-center items-center gap-4 mx-auto">
      {filteredData.map((item, idx) => (
        <CategoryCard key={idx} data={item}></CategoryCard>
      ))}
    </div>
  );
};

export default Categories;
