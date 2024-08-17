import clsx from "clsx";
import Styles from "./NoCartItem.module.scss";
import emptyProduct from "~/assets/images/emptyNotepad.png"

const NoCartItem = () => {
  return (
    <div className={clsx(Styles.wrap)}>
      <div className={clsx(Styles.container)}>
        <img src={emptyProduct} alt="no product" />
        <p>
        There are no item.
        </p>
      </div>
    </div>
  );
};

export default NoCartItem;
