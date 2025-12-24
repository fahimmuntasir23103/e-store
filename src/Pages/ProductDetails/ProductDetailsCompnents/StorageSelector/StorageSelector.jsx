const StorageSelector = ({ options, selectedStorage, onStorageChange }) => {
  return (
    <div className="mb-6">
      <div className="grid grid-cols-4 gap-2">
        {options.map((storage) => (
          <button
            key={storage}
            onClick={() => onStorageChange(storage)}
            className={`py-3 rounded-lg border-2 text-sm font-medium ${
              selectedStorage === storage
                ? "border-black bg-black text-white"
                : "border-gray-300 bg-white text-gray-900"
            }`}
          >
            {storage}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StorageSelector