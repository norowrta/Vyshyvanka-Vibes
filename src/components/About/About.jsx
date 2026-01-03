import Icon from "../Icon";
import scss from "./about.module.scss";

import mobile1x from "../../assets/about/dress-phone@1x.png";
import mobile2x from "../../assets/about/dress-phone@2x.png";

import tablet1x from "../../assets/about/dress-tablet@1x.png";
import tablet2x from "../../assets/about/dress-tablet@2x.png";

import laptop1x from "../../assets/about/dress-laptop@1x.png";
import laptop2x from "../../assets/about/dress-laptop@2x.png";

import desktop1x from "../../assets/about/dress-desktop@1x.png";
import desktop2x from "../../assets/about/dress-desktop@2x.png";

export default function About() {
  return (
    <section className={scss.about} id="about">
      <div className="container">
        <div className={scss.about__content}>
          <div className={scss.about__main}>
            <h3 className={scss.about__title} data-aos="fade-right">
              About Us
            </h3>
            <div className={scss.about__txtBlock}>
              <p
                className={scss.about__txt}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                The store "Vyshyvanka Vibes" is a place where traditional
                Ukrainian vyshyvanka comes to life with new zest and style. Our
                store offers a wide selection of high-quality and authentic
                embroidery, which combines the elegance of traditional
                needlework and modern design.
              </p>
              <p
                className={scss.about__txt}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                In "Vyshyvanka Vibes" you will find various models of
                embroidery, from classic to modern, corresponding to the latest
                fashion trends. Our embroidery is made using natural fabrics and
                is embroidered by highly qualified craftsmen who convey the
                beauty of Ukrainian culture in every detail.We believe that
                vyshyvanka is not just clothing, but a symbol of national pride,
                the heritage of our ancestors and a way of expressing one's
                individuality. Each embroidery from "Vyshyvanka Vibes" has its
                own unique history and symbolism, which gives it a special
                meaning.
              </p>
            </div>
          </div>
          <div className={scss.about__visual}>
            <picture className={scss.about__imageBlock}>
              <source
                media="(min-width: 1440px)"
                srcSet={`${desktop1x} 1x, ${desktop2x} 2x`}
              />

              <source
                media="(min-width: 1280px)"
                srcSet={`${laptop1x} 1x, ${laptop2x} 2x`}
              />

              <source
                media="(min-width: 768px)"
                srcSet={`${tablet1x} 1x, ${tablet2x} 2x`}
              />

              <img
                src={mobile1x}
                srcSet={`${mobile1x} 1x, ${mobile2x} 2x`}
                alt="Опис зображення"
                className={scss.about__image}
                loading="lazy"
                data-aos="fade-left"
                data-aos-delay="400"
              />
            </picture>

            <div
              className={scss.about__bgWrapper}
              data-aos="zoom-in-left"
              data-aos-delay="500"
              data-aos-anchor-placement="bottom-bottom"
            >
              <Icon name="ornament-white" className={scss.about__bg} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
