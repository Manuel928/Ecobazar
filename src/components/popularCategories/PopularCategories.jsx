import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useFirebaseQuery } from "../../hooks/productCategories/useFirebaseQuery";
import Card from "./components/Card";
import { getPopularCategories } from "../../utils/firebaseQueries";

const PopularCategories = () => {
  const {
    data: popularCategories,
    isLoading,
    isError,
  } = useFirebaseQuery({
    queryFn: getPopularCategories,
    queryKey: ["popularCategories"],
  });
  return (
    <div className="pt-[60px] flex flex-col gap-[32px]">
      <div className="flex items-center justify-between">
        <p className="text-[18px] lg:text-[28px] text-[#1A1A1A] font-semibold">
          Popular Categories
        </p>
        <div className="flex items-center gap-3">
          <Link to={"/categories"} className="text-primary-green text-sm">
            View All
          </Link>
          <ArrowRight className="text-primary-green" />
        </div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-2 gap-[18px] lg:gap-[30px] lg:grid-cols-6 items-center">
        {popularCategories?.map((category) => (
          <Card category={category.title} image={category.image} slug={category.slug} />
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
