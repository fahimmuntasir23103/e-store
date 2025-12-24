const SpecsGrid = ({ specs }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      {specs.map((spec, index) => (
        <div key={index} className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">{spec.label}</span>
          <span className="font-medium">{spec.value}</span>
        </div>
      ))}
    </div>
  );
};
export default SpecsGrid