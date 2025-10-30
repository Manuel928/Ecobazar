import { Link, useParams } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { ArrowRight } from "lucide-react";
import { DownOutlined } from "@ant-design/icons";
import { assets } from "../../assets/assets";
import { useFirebaseQuery } from "../../hooks/productCategories/useFirebaseQuery";
import { getProductCategories } from "../../utils/firebaseQueries";
import { useState } from "react";

const ProductCategory = () => {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data: categories = [], isLoading } = useFirebaseQuery({
    queryKey: ["categories"],
    queryFn: getProductCategories,
  });

  if (isLoading) return <p>Loading categories...</p>;

  const items = categories.map((category) => ({
    key: category.id || category.title,
    label: (
      <Link to={`/category/${category.slug || category.id}`}>
        {category.title}
      </Link>
    ),
  }));

  const handleMenuClick = (info) => {
    const clickedKey = info.key;
    const selected = categories.find((c) => c.id === clickedKey);
    setSelectedCategory(selected?.title || "");
  };

  return (
    <div className="flex flex-col">
      {/* Sale banner */}
      <div
        className="relative w-[1120px] h-[358px] flex flex-col justify-center"
        style={{
          backgroundImage: `url(${assets.DiscountBanner})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ... */}
      </div>

      {/* Filters */}
      <div className="flex items-center justify-between mt-[40px]">
        <div className="flex items-center gap-[16px]">
          <Dropdown
            className="border border-light-gray text-sm px-[16px] rounded-[4px] py-[10px] cursor-pointer text-primary-black"
            menu={{ items, onClick: handleMenuClick }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {selectedCategory || "Select Category"}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            className="border border-light-gray text-sm rounded-[4px] px-[16px] py-[10px] cursor-pointer text-primary-black"
            menu={{ items, onClick: handleMenuClick }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {selectedCategory || "Select Price"}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            className="border border-light-gray text-sm rounded-[4px] px-[16px] py-[10px] cursor-pointer text-primary-black"
            menu={{ items, onClick: handleMenuClick }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {selectedCategory || "Select Rating"}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>

        <div className="flex items-center gap-[16px]">
          <Dropdown
            className="border border-light-gray text-sm rounded-[4px] px-[16px] py-[10px] cursor-pointer text-primary-black"
            menu={{ items, onClick: handleMenuClick }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {selectedCategory || "Sort by: Latest"}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown
            className="border border-light-gray text-sm rounded-[4px] px-[16px] py-[10px] cursor-pointer text-primary-black"
            menu={{ items, onClick: handleMenuClick }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                {selectedCategory || "Showing 16"}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
