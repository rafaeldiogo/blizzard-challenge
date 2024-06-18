type ProgressBarProps = {
  value: number;
  max?: number;
};

const ProgressBar = ({ value, max = 100 }: ProgressBarProps) => {
  return <progress className="w-full h-[3px]" value={value} max={max} />;
};

export default ProgressBar;
