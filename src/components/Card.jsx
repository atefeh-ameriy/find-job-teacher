const Card = ({ children, bg = 'bg-slate-100' }) => {
  return <div className={`${bg} p-6 w-11/12 rounded-lg shadow-md `}>{children}</div>;
};
export default Card;
