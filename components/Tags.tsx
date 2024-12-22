type Props = {
    children: React.ReactNode;
  };
const Tags: React.FC<Props>=({
    children,
  }) => {
  
    return <span
    className="inline-block  bg-[#FAFAFA] dark:bg-[#263641] rounded-full px-4 py-1 text-sm text-gray-800 dark:text-gray-200 mr-2 mb-2"
  >
    {children}
  </span>
  };
  
  export default Tags;
  