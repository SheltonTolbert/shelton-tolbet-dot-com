"use client";

import "./index.css";
import Post from "./post";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  DocumentData,
  query,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyAHOCBySipVOHdj93UL_EDhrDAbJBkJXig",
  authDomain: "shelton-tolbert.firebaseapp.com",
  projectId: "shelton-tolbert",
  storageBucket: "shelton-tolbert.appspot.com",
  messagingSenderId: "470196682775",
  appId: "1:470196682775:web:8486a368d837b98dee5c52",
  measurementId: "G-WPXW0TBNKP",
};

// Get a list of cities from your database
const app = initializeApp(firebaseConfig);
async function getBlogPosts() {
  const db = getFirestore(app);
  const postsCol = collection(db, "blog-posts");
  const postSnapshot = await getDocs(postsCol);
  const postList = postSnapshot.docs.map((doc) => doc.data());
  return postList;
}

function PostsView({
  posts,
  setActivePost,
}: {
  posts: DocumentData[];
  setActivePost: (post: DocumentData) => void;
}) {
  return (
    <div className="px-40 mt-20 text-6xl w-lg text-right">
      posts view
      {posts.map((post) => (
        <div
          key={post.title}
          className="blur cursor-pointer inline-block my-1 mx-2 light-blur"
          onClick={() => setActivePost(post)}
        >
          <a>{post.title}</a>
        </div>
      ))}
    </div>
  );
}

export default function Blog() {
  const [posts, setPosts] = useState<DocumentData[]>([]);
  const [activePost, setActivePost] = useState<DocumentData | null>(null);
  useEffect(() => {
    getBlogPosts().then((p) => setPosts(p));
  }, []);

  console.log(posts);

  const ideas = [
    "Why AI Hates Me",
    "Terminal-Centric Workflow",
    "Robot GIrlfriend",
    "Foxes & Rabbits",
    "Horticulture and You",
    "WTF is GPS",
    "My Other Failed Career",
    "Noise, Noise, Noise",
    "What is this Website?",
    "Outdoors",
    "Accessibly Subverting Design Patterns",
    "My Failed Career",
  ];


  return (
    <>
      {activePost ? (
        <Post post={activePost} />
      ) : (
        <PostsView posts={posts} setActivePost={setActivePost} />
      )}
    </>
  );
}
