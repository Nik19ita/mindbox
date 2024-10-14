import typeItem from "../type/typeItem";
import typeStateTodo from "../type/typeStateTodo";

const getListData = (state: typeStateTodo, list: typeItem[]) => {
  if (state === "all") return list;

  if (state === "active") {
    return list.filter((item) => {
      return item.done === false;
    });
  }

  if (state === "completed") {
    return list.filter((item) => {
      return item.done === true;
    });
  }
};
export default getListData;
