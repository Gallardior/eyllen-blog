type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5 bg-white dark:bg-[#111827] bg-opacity-25">{children}</div>;
};

export default Container;
