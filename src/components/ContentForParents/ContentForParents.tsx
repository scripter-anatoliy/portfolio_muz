import image from "../Assets/imageParents.jpg";
import classes from "./contentForParents.module.css";
import { dateParents } from "./ContentForParentsData";

function ContentForParents() {
  return (
    <div id="part-4" className={classes.wrap}>
      <div className={classes.container}>
        <span className={classes.title}>Для родителей</span>
        <div className={classes.wrapInfo}>
          <div className={classes.info}>
            <span className={classes.description}>Консультации</span>
            <div className={classes.list}>
              {dateParents.map((item) => (
                <div key={item.id} className={classes.listItem}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className={classes.picture}>
            <img src={image} alt="default image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentForParents;
