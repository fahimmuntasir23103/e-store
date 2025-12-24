const ColorSelector = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className="mb-6">
      <p className="text-sm text-gray-600 mb-3">Select color :</p>
      <div className="flex gap-2">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onColorChange(color.name)}
            className={`w-10 h-10 rounded-full ${color.bg} ${
              selectedColor === color.name
                ? "ring-2 ring-offset-2 ring-black"
                : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector