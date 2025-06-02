import { Route, Switch, useRouteMatch } from "react-router-dom";
import BlogPostPage from "./BlogPostPage";
import BlogListPage from "./BlogListPage";

export default function BlogPage() {
  const blog = useRouteMatch();
  return (
    <div className="blog-page">
      <Switch>
        <Route path={`${blog.path}/:blogId`}>
          <BlogPostPage />
        </Route>
        <Route path={`${blog.path}`}>
          <BlogListPage />
        </Route>
      </Switch>
    </div>
  );
}
