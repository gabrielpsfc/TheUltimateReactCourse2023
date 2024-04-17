import styles from "./City.module.css";
import Spinner from "./Spinner.jsx";

function City({ cities, isLoading }) {
  if (isLoading) return <Spinner></Spinner>;
  return <ul className={styles.cityList}>{cities.map((city) => {})}</ul>;
}

export default City;
