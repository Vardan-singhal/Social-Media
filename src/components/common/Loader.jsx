const Loader = ({
  size = "md",     // sm | md | lg
  variant = "spinner", // spinner | dots
  fullscreen = false,
  text = "",
}) => {
  return (
    <div
      className={`loader-wrapper ${fullscreen ? "loader-fullscreen" : ""}`}
      role="status"
      aria-live="polite"
    >
      {variant === "spinner" && (
        <div className={`ig-spinner ig-spinner-${size}`}></div>
      )}

      {variant === "dots" && (
        <div className="ig-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {text && <div className="loader-text">{text}</div>}
    </div>
  );
};

export default Loader;
