const ReviewCard = ({ review }) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex items-start gap-4">
        <div className="w-18 h-18 rounded-full bg-gray-300 flex-shrink-0" >
          <img src={review.image_url} className="w-full" alt="" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-semibold">{review.user}</h4>
              <div className="flex gap-1 text-yellow-400 text-sm my-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star}>{star <= review.rating ? "★" : "☆"}</span>
                ))}
              </div>
            </div>
            <span className="text-sm text-gray-400">{review.date}</span>
          </div>
          <p className="text-sm text-gray-600 mb-3">{review.comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard