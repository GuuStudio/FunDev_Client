import clsx from "clsx";
import styles from "./Footer.module.scss";

function Footer() {
  return (
    <aside className={clsx(styles.wraper)}>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.footer_content)}>
          <div className={clsx(styles.footer_content_left)}>
            <div className={clsx(styles.footer_content_left_item)}>
              <div className={clsx(styles.footer_content_left_item_title)}>
                Company
              </div>
              <div className={clsx(styles.footer_content_left_item_info)}>
                Find a location nearest you. See Our Stores
              </div>
            </div>
            <div className={clsx(styles.footer_content_left_item)}>
              <div className={clsx(styles.footer_content_left_item_title)}>
                Useful links
              </div>
              <div className={clsx(styles.footer_content_left_item_info)}>
                New Products
              </div>
            </div>
            <div className={clsx(styles.footer_content_left_item)}>
              <div className={clsx(styles.footer_content_left_item_title)}>
                Information
              </div>
              <div className={clsx(styles.footer_content_left_item_info)}>
                Start a Return
              </div>
            </div>
          </div>
          <div className={clsx(styles.footer_content_right)}>
            <div className={clsx(styles.footer_content_right_tile)}>
              Good emails
            </div>
            <div className={clsx(styles.footer_content_right_description)}>
            Enter your email below to be the first to know about new collections and product launches.
            </div>
            <div className={clsx(styles.footer_content_right_input)}>
              <input type="email" placeholder="Enter your email address"/>
              <div className={clsx(styles.footer_content_right_subscribe)}>
                Subscribe
              </div>
            </div>
          </div>
        </div>
        <div className={clsx(styles.footer_name)}>FunDev</div>
      </div>
    </aside>
  );
}

export default Footer;
