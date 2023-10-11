const ButtonStyles = {
  solid: {
    base: "btn-base",
    primary: "btn-solid-primary",
    secondary: "btn-solid-secondary",
  },
  outline: {
    base: "btn-base border-2",
    primary: "btn-outline-primary",
    secondary: "btn-outline-secondary",
  },
};

const BaseButton = ({ css, children, ...props }) => {
  return (
    <button {...props} className={`${ButtonStyles.solid.base} ${css}`}>
      {children}
    </button>
  );
};

export const VariantButton = ({ variant, style, children, ...props }) => {
  const variantStyles = ButtonStyles[variant] || ButtonStyles.solid;
  const variantStyle = variantStyles[style] || variantStyles.primary;
  const baseStyle = variantStyles.base;

  return (
    <BaseButton {...props} css={`${baseStyle} ${variantStyle}`}>
      {children}
    </BaseButton>
  );
};
