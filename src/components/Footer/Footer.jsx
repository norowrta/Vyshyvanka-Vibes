import scss from "./footer.module.scss";
import Icon from "../Icon";

export default function Footer() {
  return (
    <section className={scss.footer}>
      <div className="container">
        <div className={scss.footer__content}>
          <nav className={scss.footer__nav}>
            <a
              href="#about"
              className={scss.footer__navLink}
              data-aos="fade-up"
            >
              About us
            </a>
            <a
              href="#collection"
              className={scss.footer__navLink}
              data-aos="fade-up"
              data-aos-delay="50"
            >
              Our collection
            </a>
            <a
              href="#newsletter"
              className={scss.footer__navLink}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Newsletter
            </a>
            <a
              href="#testimonials"
              className={scss.footer__navLink}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Testimonials
            </a>
          </nav>

          <h3
            className={scss.footer__title}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A touch of{" "}
            <span className={scss.footer__titleHighlighted}>Ukrainian</span>{" "}
            <br />
            culture in every embroidery
          </h3>
        </div>
      </div>
      <div className={scss.footer__bgWrapper}>
        <div
          data-aos="zoom-in-left"
          data-aos-delay="500"
          data-aos-anchor-placement="center-bottom"
        >
          <Icon name="ornament-yellow" className={scss.footer__bg} />
        </div>
      </div>
    </section>
  );
}
