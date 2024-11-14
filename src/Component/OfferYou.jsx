import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function OfferYou() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="services light-background my-5">
      <div className="container section-title text-center my-5" data-aos="fade-up">
        <motion.h1
          className='fw-bolder text-center'
          style={{ color: "#0e776a" }}
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          نقدم لك؟
        </motion.h1>

        <motion.p
          className='fw-bold subheading'
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ما يميزنا ... لنكون الشريك التسويقي الافضل للشركات العالمية
        </motion.p>
      </div>

      <motion.div
        className="container"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        transition={{ duration: 1 }}
      >
        <div className="row gy-4 text-center">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <i className="fa-regular fa-lightbulb icon"></i>
              <h3 style={{ color: "#0e776a" }}>افكار ابداعية</h3>
              <p className='fs-6 fw-bold'>
                تمتلك لاي اوت فريق يتميز بالابداع...
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <i className="fa-solid fa-display icon"></i>
              <h3 style={{ color: "#0e776a" }}>خدمات متكاملة</h3>
              <p className='fs-6 fw-bold'>
                توفر لاي اوت لعملائها جميع انواع الخدمات التسويقية...
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <i className="fa-solid fa-arrow-trend-up icon"></i>
              <h3 style={{ color: "#0e776a" }}>خطط وتقارير</h3>
              <p className='fs-6 fw-bold'>
                نسير على خطط تسويقية شاملة لتحقيق اهداف العميل...
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <i className="fa-solid fa-mobile-screen-button icon"></i>
              <h3 style={{ color: "#0e776a" }}>متابعة بعد انتهاء العمل</h3>
              <p className='fs-6 fw-bold'>
                نبقى على تواصل مع عملاءنا بعد انتهاء الخدمة...
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <i className="fa-solid fa-phone icon"></i>
              <h3 style={{ color: "#0e776a" }}>خدمة عملاء متميزة</h3>
              <p className='fs-6 fw-bold'>
                خدمة عملاء متصلون على مدار الساعة لتلقى طلباتكم واستفساراتكم...
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="service-item position-relative">
              <i className="fa-regular fa-clock icon"></i>
              <h3 style={{ color: "#0e776a" }}>الالتزام</h3>
              <p className='fs-6 fw-bold'>
                الالتزام بالمواعيد والاتفاقات هو اهم اولوياتنا...
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
