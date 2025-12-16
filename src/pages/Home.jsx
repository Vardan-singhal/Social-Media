import { useEffect, useState } from "react";
import CreatePost from "../components/post/CreatePost";
import PostCard from "../components/post/PostCard";
import PostSkeleton from "../components/post/PostSkeleton";
import Sidebar from "../components/layout/Sidebar";

const Home = () => {
  const [loading, setLoading] = useState(true);

  // simulate feed loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ig-home container-fluid">
      <div className="row justify-content-center">
        {/* Feed */}
        <div className="col-12 col-md-8 col-lg-6">
          {/* Stories */}
          <div className="ig-stories-bar mb-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="ig-story-item">
                <img
                  src={`https://i.pravatar.cc/150?img=${i + 1}`}
                  alt="story"
                />
                <span>user{i + 1}</span>
              </div>
            ))}
          </div>

          {/* Create Post */}
          <CreatePost />

          {/* Feed */}
          {loading ? (
            <>
              <PostSkeleton />
              <PostSkeleton />
              <PostSkeleton />
            </>
          ) : (
            <>
              <PostCard />
              <PostCard />
              <PostCard />
            </>
          )}
        </div>

        {/* Sidebar (Desktop only) */}
        <div className="d-none d-lg-block col-lg-4">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
