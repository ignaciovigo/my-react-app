const Logo = (props) => {
  return (
    <div className={"logo d-flex " + props.className}>
      <img src="./img/logo.svg" alt="logo de zitro" />
      {props.img && <p className="m-0 align-self-center">iTRO</p>}
    </div>
  );
};

export default Logo;
