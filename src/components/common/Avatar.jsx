const Avatar = ({
  src,
  alt = "user",
  size = "md", // sm | md | lg | xl
  online = false,
  onClick,
}) => {
  const sizeClass = {
    sm: "avatar-sm",
    md: "avatar-md",
    lg: "avatar-lg",
    xl: "avatar-xl",
  }[size];

  return (
    <div
      className={`avatar-wrapper ${sizeClass}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {src ? (
        <img src={src} alt={alt} className="avatar-img" />
      ) : (
        <div className="avatar-fallback">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}

      {online && <span className="avatar-online-dot"></span>}
    </div>
  );
};

export default Avatar;
