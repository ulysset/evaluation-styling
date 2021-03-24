export default (config, styles) => {
  let modifiersClassName = "";
  Object.entries(config).forEach((modifier) => {
    if (styles[`${modifier[0]}_${modifier[1]}`]) {
      modifiersClassName += " " + styles[`${modifier[0]}_${modifier[1]}`];
    }
  });

  return (elementClassName, passedClassName) => {
    const addedClassName = passedClassName ? ` ${passedClassName}` : "";

    return {
      className: `${elementClassName}${modifiersClassName}${addedClassName}`,
    };
  };
};
