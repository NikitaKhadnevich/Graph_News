/* eslint-disable consistent-return */
export const calcPlayerHeight = (id: string, width: number, height: number): number | any => {
  window.onresize = () => {
    const elemsWidth = document.getElementById(id);
    if (elemsWidth?.offsetWidth) {
      return (elemsWidth?.offsetWidth / width) * height;
    }
  };
};
