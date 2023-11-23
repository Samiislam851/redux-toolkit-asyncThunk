import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import SinglePost from "./features/posts/SinglePost";
import EditPost from "./features/posts/EditPost";
import UsersList from "./features/users/usersList";
import UserPage from "./features/users/userPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path='post'>
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePost />} />
          <Route path="edit/:postId" element={<EditPost />} />
        </Route>
        <Route path='users'>
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage/>} />

        </Route>

      </Route>
    </Routes>
  );
}

export default App;
