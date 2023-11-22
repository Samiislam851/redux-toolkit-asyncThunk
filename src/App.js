import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import SinglePost from "./features/posts/SinglePost";
import EditPost from "./features/posts/EditPost";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<EditPost/>}  />
        </Route>

      </Route>
    </Routes>
  );
}

export default App;
