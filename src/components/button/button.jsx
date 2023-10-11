import React from "react";

const ButtonFront = ({
  children,
  dir,
  type,
  onClick,
  formName,
  additionalClass,
  disabled
}) => {
  return (
    <button
      form={formName}
      type={type}
      className={`button-${dir} ${additionalClass}`}
      onClick={onClick}
      disabled={disabled?disabled:false}
    >
      {children}
    </button>
  );
};

export default ButtonFront;
