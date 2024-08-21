import clsx from "clsx";
import Styles from "./NoProduct.module.scss";
import emptyProduct from "~/assets/images/emptyNotepad.png"

const NoProduct = () => {
  return (
    <div className={clsx(Styles.wrap)}>
      <div className={clsx(Styles.container)}>
        <img src={emptyProduct} alt="no product" />
        <p>
        There are no products.
        </p>
      </div>
    </div>
  );
};

export default NoProduct;
