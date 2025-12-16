import { create } from "zustand";

export const usePostStore = create((set) => ({
  posts: [],
  loading: false,

  /* =====================
     FETCH POSTS (MOCK / FIREBASE READY)
  ===================== */
  fetchPosts: async () => {
    set({ loading: true });

    // 🔥 Replace this with Firestore later
    setTimeout(() => {
      set({
        posts: [
          {
            id: "1",
            username: "john_doe",
            avatar: "https://i.pravatar.cc/150?img=3",
            image: "https://picsum.photos/600/600?1",
            caption: "Exploring the world 🌍",
            likes: 124,
            liked: false,
            createdAt: "2h",
          },
          {
            id: "2",
            username: "emma_watson",
            avatar: "https://i.pravatar.cc/150?img=5",
            image: "https://picsum.photos/600/600?2",
            caption: "Coding all night 💻",
            likes: 98,
            liked: true,
            createdAt: "5h",
          },
        ],
        loading: false,
      });
    }, 1000);
  },

  /* =====================
     CREATE POST
  ===================== */
  createPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),

  /* =====================
     TOGGLE LIKE
  ===================== */
  toggleLike: (postId) =>
    set((state) => ({
      posts: state.posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked
                ? post.likes - 1
                : post.likes + 1,
            }
          : post
      ),
    })),
}));
