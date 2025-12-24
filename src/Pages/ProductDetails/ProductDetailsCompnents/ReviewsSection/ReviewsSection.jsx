import { FiChevronDown } from "react-icons/fi";
import ReviewCard from "../ReviewCard/ReviewCard"

const ReviewsSection = ({ overallRating, totalReviews, ratingBreakdown, reviews }) => {
  return (
    <div className="bg-white rounded-lg p-8 mb-8">
      <h2 className="text-2xl font-bold mb-8">Reviews</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Overall Rating */}
        <div className="lg:col-span-1">
          <div className="text-center">
            <div className="text-6xl font-bold mb-2">{overallRating}</div>
            <div className="text-sm text-gray-500 mb-3">
              of {totalReviews} reviews
            </div>
            <div className="flex justify-center gap-1 text-yellow-400 text-xl">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>★</span>
              ))}
            </div>
          </div>
        </div>

        {/* Rating Breakdown */}
        <div className="lg:col-span-2 space-y-3">
          {ratingBreakdown.map((rating) => (
            <div key={rating.label} className="flex items-center gap-4">
              <span className="text-sm w-32">{rating.label}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div
                  className={`${rating.color} h-2 rounded-full`}
                  style={{ width: `${(rating.count / totalReviews) * 100}%` }}
                />
              </div>
              <span className="text-sm text-gray-500 w-8 text-right">
                {rating.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Leave Comment"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="space-y-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </div>

      <div className="flex justify-center mt-8">
      </div>
    </div>
  );
};

export default ReviewsSection