import "../styles/footer.css"
const Footer = () =>{

    return (
      <footer className="bg-hero-pattern site-footer flex flex-col justify-center items-center">
        <div className="container">
          <div className="row flex justify-around mb-3">
            <div className="w-3/5">
              <h6>About</h6>
              <p className="text-justify">
                Vikash Computer Center (VCC) is a computer training institute
                where most career oriented courses are available. It has been
                committed to the best IT education and has been continuously
                scaling new height's in the field of Information Technology
                since it's inception in 2008.
              </p>
            </div>

            <div className="">
              <h6>Timing</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/category/c-language/">
                    Monday - Saturday
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/category/c-language/">
                    10:00 am - 06:00 pm
                  </a>
                </li>
              </ul>
              <br/>
              <h6 className="">Location</h6>
              <ul className="footer-links">
                <li>
                  <a >
                    More Station Road, Nechua, jabalpur,
                  </a>
                </li>
                <li>
                  <a>
                    Gopalganj 841504
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="http://scanfcode.com/about/">About Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contact/">Contact Us</a>
                </li>
                <li>
                  <a href="http://scanfcode.com/contribute-at-scanfcode/">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="">
              <p className="copyright-text">
                Copyright &copy; 2017 All Rights Reserved by
                <a href="#">&nbsp; Vikash Computer Center</a>.
              </p>
            </div>

            <div className="">
              <ul className="social-icons">
                <li>
                  <a className="facebook" href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="dribbble" href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="#">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}
export default Footer;