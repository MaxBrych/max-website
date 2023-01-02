const Link = ({ title, icon, link }) => {
  return (
    <a
      href={link}
      className="flex items-center w-full row-auto p-2 space-x-2 bg-gray-200 rounded-full"
    >
      <div className="flex items-center justify-center p-2 align-middle bg-gray-100 rounded-full w-9 h-9 fill-white">
        {icon}
      </div>
      <h6 className="font-semibold ">{title}</h6>
    </a>
  );
};

export default Link;
