import { toast } from "react-toastify";

const getStoredReadList = () => {
  const storedListstr = localStorage.getItem("read-list");

  if (storedListstr) {
    const storedList = JSON.parse(storedListstr);
    return storedList;
  } else {
    return [];
  }
};

const addToStporedList = (id) => {
  const storedList = getStoredReadList();
  if (storedList.includes(id)) {
    console.log(id, "Already Exist in the Read List");
  } else {
    storedList.push(id);
    const storedListstr = JSON.stringify(storedList);
    localStorage.setItem("read-list", storedListstr);
    toast('Book Added')
  }
};

const getStoredWishList = () => {
  const storedListstr = localStorage.getItem("wish-list");
  if (storedListstr) {
    const storedList = JSON.parse(storedListstr);
    return storedList;
  } else {
    return [];
  }
};

const addToStopWishList = (id) => {
  const storedList = getStoredWishList();
  if (storedList.includes(id)) {
    console.log(id, "Already Exist in Wish List");
  } else {
    storedList.push(id);
    const storedListstr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListstr);
  }
};

export { addToStporedList, addToStopWishList, getStoredReadList };
