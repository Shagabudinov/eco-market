import "../App.sass";


const Privacy = (props) => {
    const privacyData = props.privacyData;

    const privacyElements = privacyData.map((row, index) => (
      <div key={index}>
        {row.map((value, j) => (
          <p key={j} className={j !== 0 ? "custom-list p-text" : "p-text"}>
            {value}
          </p>
        ))}
      </div>
    ));
    
  return (
    <div className="center-container">
      <h2 className="">Публичная оферта интернет-магазина "EcoMarket"</h2>
      <div className="main-information">{privacyElements}</div>
    </div>
  );
};

export default Privacy;
