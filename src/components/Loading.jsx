const Loading = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border Loader spinner"
        role="status"
        style={{ height: "5rem", width: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
