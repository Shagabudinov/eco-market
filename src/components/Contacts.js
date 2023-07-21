const Contacts = () => {
  return (
    <div className="center-container">
      <h2>Мы в Google картах!</h2>
      <div className="main-information">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11281.434998475364!2d39.0324103!3d45.0176424!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f0501a653e61f3%3A0x74724f6fb41eed54!2z0K3QutC-0LzQsNGA0LrQtdGC!5e0!3m2!1sru!2sru!4v1689164227777!5m2!1sru!2sru"
          width="992"
          height="400"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
        <p className="mg12">Email: EcoMarket@gmail.com</p>
        <p className="mg12">Номер телефона: +7 (918) 983-02-32</p>
      </div>
    </div>
  );
};

export default Contacts;
