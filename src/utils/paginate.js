import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //_() lodash wrapper to chain a lot of methods from it
  //_.slice(items, startIndex); //_.slice(array, [start=0], [end=array.length])
  console.log("startIndex=>", startIndex);

  console.log("lodash=>", _(items).slice(startIndex).take(pageSize).value);
  return _(items).slice(startIndex).take(pageSize).value();
}
