import router from "@/router";

const CustomMove = () => {
  const moveToPage = (page) => {
    router.push(page);
  };
  return { moveToPage };
};

export default CustomMove;
