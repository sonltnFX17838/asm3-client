const customerServices = [
  "Help & Contact Us",
  "Returns & Refunds",
  "Online Stores",
  "Terms & Conditions",
];
const company = ["What We Do", "Available Services", "Lates Posts", "FAQs"];

const socialMedia = ["Twitter", "Instagram", "Facebook", "Pinterest"];

const NameContent = ({ name }) => {
  return (
    <li className="text-start">
      <a className="badge text-decoration-none fs-7 fw-light" href="">
        {name}
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="m-0 mt-5 py-5 text-bg-dark text-center">
      <div className="row m-auto">
        <div className="col"></div>
        <div className="col">
          <ul className="list-group list-group-flush list-unstyled pe-3">
            <li className="text-start">
              <p className="px-2 fs-5 fw-normal">CUSTOMER SERVICES</p>
            </li>
            {customerServices.map((name, index) => (
              <NameContent name={name} key={index} />
            ))}
          </ul>
        </div>
        <div className="col">
          <ul className="list-group list-group-flush list-unstyled pe-3">
            <li className="text-start">
              <p className="px-2 fs-5 fw-normal">COMPANY</p>
            </li>
            {company.map((name, index) => (
              <NameContent name={name} key={index} />
            ))}
          </ul>
        </div>
        <div className="col">
          <ul className="list-group list-group-flush list-unstyled pe-3">
            <li className="text-start">
              <p className="px-2 fs-5 fw-normal">SOCIAL MEDIA</p>
            </li>
            {socialMedia.map((name, index) => (
              <NameContent name={name} key={index} />
            ))}
          </ul>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Footer;
