export default (config, styles) => {
  let modifiersClassName = "";
  Object.entries(config.variations).forEach((variation) => {
    if (styles[`${variation[0]}_${variation[1]}`]) {
      modifiersClassName += " " + styles[`${variation[0]}_${variation[1]}`];
    }
  });
  Object.entries(config.states).forEach((state) => {
    if (styles[`${state[0]}_${state[1]}`]) {
      modifiersClassName += " " + styles[`${state[0]}_${state[1]}`];
    }
  });

  return (elementClassName, passedClassName) => {
    const addedClassName = passedClassName ? ` ${passedClassName}` : "";

    return {
      className: `${elementClassName}${modifiersClassName}${addedClassName}`,
    };
  };
};
