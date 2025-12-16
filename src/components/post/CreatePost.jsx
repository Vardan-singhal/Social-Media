import { useState } from "react";
import Avatar from "../common/Avatar";
import Loader from "../common/Loader";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handlePost = () => {
    if (!caption && !image) return;

    setLoading(true);

    // simulate API / Firebase call
    setTimeout(() => {
      setCaption("");
      setImage(null);
      setPreview(null);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="ig-create-post card mb-3">
      {/* Header */}
      <div className="d-flex align-items-center p-3 border-bottom">
        <Avatar
          src="https://i.pravatar.cc/150?img=11"
          alt="me"
          size="sm"
        />
        <span className="ms-2 fw-semibold">your_username</span>
      </div>

      {/* Textarea */}
      <div className="p-3">
        <textarea
          className="ig-post-textarea"
          placeholder="What's on your mind?"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          rows={caption ? 3 : 1}
        />
      </div>

      {/* Image Preview */}
      {preview && (
        <div className="ig-post-preview">
          <img src={preview} alt="preview" />
          <button
            className="ig-remove-image"
            onClick={() => {
              setImage(null);
              setPreview(null);
            }}
          >
            ✕
          </button>
        </div>
      )}

      {/* Actions */}
      <div className="ig-create-post-actions d-flex align-items-center justify-content-between p-2 border-top">
        <div className="d-flex align-items-center gap-3">
          {/* Emoji */}
          <button
            className="ig-icon-btn"
            onClick={() => setCaption(caption + " 😊")}
            title="Add emoji"
          >
            😊
          </button>

          {/* Image Upload */}
          <label className="ig-icon-btn" title="Add photo">
            📷
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageChange}
            />
          </label>
        </div>

        <button
          className="btn btn-primary btn-sm"
          disabled={loading || (!caption && !image)}
          onClick={handlePost}
        >
          {loading ? <Loader size="sm" /> : "Post"}
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
