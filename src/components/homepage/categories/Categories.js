import ItemsCategory from "./ItemsCategory";

const Categories = () => {
  // khai báo url ãnh
  const img1 = `url(${require("../../../images/product_1.png")})`;
  const img2 = `url(${require("../../../images/product_2.png")})`;
  const img3 = `url(${require("../../../images/product_3.png")})`;
  const img4 = `url(${require("../../../images/product_4.png")})`;
  const img5 = `url(${require("../../../images/product_5.png")})`;

  return (
    <div>
      <div className="text-center my-4 lh-1 align-bottom">
        <p className="fw-light fs-5">CARED FULLY CREATED COLLECTIONS</p>
        <span className="fs-3">BROWSER OUR CATEGORIES</span>
      </div>
      <div className="row mb-3 gap-3">
        <ItemsCategory imgUrl={img1} />
        <ItemsCategory imgUrl={img2} />
      </div>
      <div className="row my-2 mb-5 gap-3">
        <ItemsCategory imgUrl={img3} />
        <ItemsCategory imgUrl={img4} />
        <ItemsCategory imgUrl={img5} />
      </div>
    </div>
  );
};
export default Categories;
