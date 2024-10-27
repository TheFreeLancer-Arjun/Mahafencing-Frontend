const FencingHistoryBlock = ({ title, image, content }) => {
  return (
    <div className="shadow-md bg-white p-4">
      <h4 className="text-2xl font-semibold mb-3">{title}</h4>
      <div className="grid grid-cols-1 md:flex gap-3 my-4">
        <img
          src={image}
          className="img-fluid img-thumbnail max-h-96"
          alt="Roman Fencing"
        />
        <p>{content}</p>
      </div>
    </div>
  );
};
export default FencingHistoryBlock;
