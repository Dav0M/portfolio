
const SkillIcon = ( {svg, txt} ) => {
  return (
    <div className="flex transition ease-out duration-300 hover:scale-115"> {/*TS*/}
      {svg}
      <div className="place-content-center ml-1 text-xl">{txt}</div>
    </div>
  );
};

export default SkillIcon;