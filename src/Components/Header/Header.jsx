import profile from "../../images/girl3.png";
const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1>Knowledge cafe</h1>
        <img src={profile} alt="" />
      </div>
      <div className="border-b-4"></div>
    </div>
  );
};

export default Header;
