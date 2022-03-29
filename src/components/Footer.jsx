import styled from "@emotion/styled";

const Firma = styled.h5`
  font-family: "Lato", sans-serif;
  color: #fff;
  float: right;
  display: block;
`;

const Footer = () => {
  return (
    <footer className="footer">
      <Firma>By Nicolas Parco ®</Firma>
    </footer>
  );
};

export default Footer;
