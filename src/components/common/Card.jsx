const Card = ({ children, className = '', ...props }) => {
  const baseClasses = 'card';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;