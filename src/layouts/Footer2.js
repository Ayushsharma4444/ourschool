import Link from "next/link";
const Footer2 = () => {
  return (
    <footer id="footer" className="st-2">
      <section className="tf-subcribe-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="fl-subcribe wow fadeIn   animated"
                data-wow-delay="0.3ms"
                data-wow-duration="1200ms"
              >
                <div className="subcribe-wp">
                  <h2 className="title clr-pri-5">Subscribe Our Newsletter</h2>
                  <p className="sub f-mulish clr-pri-2">
                    Amet consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua suspendisse
                    ultrices gravida. Risus commodo
                  </p>
                </div>
                <div className="subcribe-form fx">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    id="subscribe-form"
                  >
                    <input
                      type="email"
                      id="subscribe-email"
                      placeholder="Email Address"
                    />
                    <button className="fl-btn st-7" id="subscribe-button">
                      <span className="inner">Subscribe</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="footer-inner st-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="widget-footer">
                <div className="widget widget-logo">
                  <div className="logo-bottom" id="logo-footer">
                    <Link href="/">
                      <a>
                        <h2>Our School</h2>
                      </a>
                    </Link>
                  </div>
                  <p className="wrap f-mulish">
                    Sit amet consectetur adipiscing elit sed do eiusmod teminci
                    idunt ut labore et dolore magna
                  </p>
                  <div className="list-contact">
                    <ul>
                      <li className="fx">
                        <span>
                          <i className="far fa-map-marker-alt" /> Chhatarpur, New Delhi
                        </span>
                      </li>
                      <li className="fx">
                        <a href="mailto:hotline@gmail.com">
                          <i className="far fa-envelope" /> hotline@gmail.com
                        </a>
                      </li>
                      <li className="fx">
                        <a href="tel:012345678">
                          <i className="fal fa-phone" /> +91 1234567894
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="widget widget-business">
                  <div className="inner">
                    <div className="op-time">
                      <h4 className="title-widget">opening hours</h4>
                      <ul>
                        <li>
                          <span className="f-mulish">Sunday - Friday</span>
                        </li>
                        <li>
                          <span className="f-mulish">08 am - 05 pm</span>
                        </li>
                      </ul>
                    </div>
                    <div className="cls-time">
                      <p>Every Sunday and Govt Holiday</p>
                      <h4 className="title-widget">closed</h4>
                    </div>
                  </div>
                </div>
                <div className="widget widget-link">
                  <h4 className="title-widget">Our Program</h4>
                  <ul className="list-link">
                    <li className="fx">
                      <Link href="">
                      {/* <Link href="/program"> */}
                        <a className="wd-ctm f-mulish">Arts &amp; Drawing</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="">
                      {/* <Link href="/program"> */}
                        <a className="wd-ctm f-mulish">Computer Engineering </a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="">
                      {/* <Link href="/program"> */}
                        <a className="wd-ctm f-mulish">Digital Mathematics</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="">
                      {/* <Link href="/program"> */}
                        <a className="wd-ctm f-mulish">Physical Exercise</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="">
                      {/* <Link href="/program"> */}
                        <a className="wd-ctm f-mulish">General Science</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="">
                      {/* <Link href="/program"> */}
                        <a className="wd-ctm f-mulish">English Basic</a>
                      </Link>
                    </li>
                    <li className="fx">
                      <Link href="">
                      {/* <Link href="/program"> */}
                        <a className="wd-ctm f-mulish">Social Science</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-news st-3">
                  <h4 className="title-widget">recent news</h4>
                  <ul className="list-news">
                    <li className="fx">
                      <img
                        src="https://kinco.vercel.app/assets/images/thumbnails/widget10.jpg"
                        alt="Image"
                        className="feature"
                      />
                      <ul className="box-content">
                        <li>
                          <h6 className="title">
                            <Link href="">
                            {/* <Link href="/blog-grid"> */}
                              <a>Useful Code Extened End Developers</a>
                            </Link>
                          </h6>
                        </li>
                        <li>
                          <Link href="">
                          {/* <Link href="/blog-grid"> */}
                            <a className="fx meta-news clr-pri-6">
                              <i className="far fa-calendar-alt" />
                              25 dec 2021
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="fx">
                      <img
                        src="https://kinco.vercel.app/assets/images/thumbnails/widget10.jpg"
                        alt="Image"
                        className="feature"
                      />
                      <ul className="box-content">
                        <li>
                          <h6 className="title">
                            <Link href="">
                            {/* <Link href="/blog-grid"> */}
                              <a>Useful Code Extened End Developers</a>
                            </Link>
                          </h6>
                        </li>
                        <li>
                          <Link href="">
                          {/* <Link href="/blog-grid"> */}
                            <a className="fx meta-news clr-pri-6">
                              <i className="far fa-calendar-alt" />
                              25 dec 2021
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="footer-bottom jus-ct">
                <p className="copy-right">
                  Copyright © {new Date().getFullYear()}, Our School
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
