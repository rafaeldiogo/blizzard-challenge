type ProgressBarProps = {
  value: number;
  max?: number;
};

const ProgressBar = ({ value, max = 100 }: ProgressBarProps) => {
  return <progress className="h-[3px] w-full" value={value} max={max} />;
};

export default ProgressBar;
