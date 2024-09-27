$(document).ready(function () {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".slider-nav",
    prevArrow: $(".planning-solutions-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions-wrap .slider-navigation .slick-next"),
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          centerMode: true,
          slidesToShow: 2,
          focusOnSelect: true,
        },
      },
    ],
  });

  $(".info-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $(".info-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".info-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });
  $(".information-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $(".information-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".information-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });
  $(".style-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $(".style-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".style-slider-wrap .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });
  $(".style-slider2").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    prevArrow: $(".style-slider-wrap2 .slider-navigation .slick-prev"),
    nextArrow: $(".style-slider-wrap2 .slider-navigation .slick-next"),
    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  });

  $(".scroll").smoothScroll({
    speed: 1000,
  });
});
