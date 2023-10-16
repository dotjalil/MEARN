const Post = (props) => {
  return (
    <div className="flex items-center justify-center my-4">
      {" "}
      <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
        <div className="mt-4 mb-6">
          <div className="mb-3 text-xl font-bold">{props.post.title}</div>
          <div className="text-sm text-neutral-600">{props.post.body}</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
