import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  // const filter = useSelector((state) => state.filters);

  return (
    <input
      type="text"
      //value={filter}
      placeholder="Search"
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      className={css.input}
    />
  );
}
