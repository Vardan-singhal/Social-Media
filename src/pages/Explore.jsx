import { useState } from "react";

const trendingTags = [
  "#travel",
  "#photography",
  "#coding",
  "#fitness",
  "#food",
  "#nature",
];

const Explore = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="ig-explore container-fluid">
      {/* Search */}
      <div className="ig-explore-search sticky-top">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Trending Hashtags */}
      <div className="ig-explore-tags d-flex gap-2 px-2 my-3 overflow-auto">
        {trendingTags.map((tag) => (
          <span key={tag} className="ig-tag-chip">
            {tag}
          </span>
        ))}
      </div>

      {/* Explore Grid */}
      <div className="ig-explore-grid">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`ig-explore-item ${
              i % 7 === 0 ? "ig-explore-item-large" : ""
            }`}
          >
            <img
              src={`https://picsum.photos/600/600?random=${i}`}
              alt="explore"
            />
            <div className="ig-explore-overlay">
              ❤️ 1.{i}k &nbsp; 💬 {i * 3}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
