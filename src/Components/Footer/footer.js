import "../Footer/footer.css";
import FooterLogo from "../../Assets/footer_logo.png";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div>
            <img style={{ width: "100%" }} src={FooterLogo} alt="footer logo" />
          </div>
          <div>
            <p>COPYRIGHT 2016. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
