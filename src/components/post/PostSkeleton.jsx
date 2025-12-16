const PostSkeleton = () => {
  return (
    <div className="ig-post-card ig-skeleton mb-4">
      {/* Header */}
      <div className="ig-post-header d-flex align-items-center px-3 py-2">
        <div className="skeleton skeleton-avatar"></div>
        <div className="ms-2 skeleton skeleton-text short"></div>
      </div>

      {/* Image */}
      <div className="skeleton skeleton-media"></div>

      {/* Actions */}
      <div className="px-3 py-2 d-flex gap-3">
        <div className="skeleton skeleton-icon"></div>
        <div className="skeleton skeleton-icon"></div>
        <div className="skeleton skeleton-icon"></div>
      </div>

      {/* Caption */}
      <div className="px-3 pb-3">
        <div className="skeleton skeleton-text"></div>
        <div className="skeleton skeleton-text half"></div>
      </div>
    </div>
  );
};

export default PostSkeleton;
