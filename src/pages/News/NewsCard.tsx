

interface NewsItem {
  id: number;
  title: string;
  category: string;
  image: string;     // ✅ Added image
  link: string;      // ✅ Added link
}

interface NewsCardProps {
  item: NewsItem;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({ item, index }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden h-full transform transition-all duration-300 hover:shadow-xl"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* ✅ Display the image */}
      <a href={item.link} target="_blank" rel="noopener noreferrer">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover"
        />
      </a>

      <div className="p-6">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {item.category}
        </span>
        <h3 className="text-xl font-bold mt-2 mb-4 text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </h3>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
        </p>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">May 30, 2023</span>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-medium flex items-center hover:underline"
          >
            Read
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
