export default (config) => {
  let modifiersClassName = "";
  if (config && (config.variations || config.states)) {
    Object.entries(config.variations).forEach((variation) => {
      modifiersClassName += ` ${variation[0]}_${variation[1]}`;
    });
    Object.entries(config.states).forEach((state) => {
      modifiersClassName += ` ${state[0]}_${state[1]}`;
    });
  }

  return (firstParam, secondParam) => {
    let elementClassName, hostStyleClassName, elementName;
    if (typeof firstParam === "object") {
      elementName = firstParam.name;
      hostStyleClassName = firstParam.hostStyle;
      elementClassName = secondParam;
    } else {
      elementClassName = firstParam;
    }
    const addedClassName = hostStyleClassName ? ` ${hostStyleClassName}` : "";

    return {
      className: `${elementClassName}${modifiersClassName}${addedClassName} base`,
    };
  };
};
