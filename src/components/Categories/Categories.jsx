import useDonationData from "../../Hooks/useDonationData";
import CategoryCard from "../CategoryCard/CategoryCard";

const Categories = () => {
  const { data } = useDonationData();
  return (
    <div className="grid md:grid-cols-4 justify-center items-center gap-4 mx-auto">
      {data.map((item, idx) => (
        <CategoryCard key={idx} data={item}></CategoryCard>
      ))}
    </div>
  );
};

export default Categories;
