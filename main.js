$(document).ready(function () {
    $('.slick-slider').each(function () {
        let slider = $(this);

        let options = {
            prevArrow: slider.parent().find('.slider-prev'),
            nextArrow: slider.parent().find('.slider-next'),
            infinite: true,
            autoplay: true,
            dots: false
        };

        let extraOptions = {};

        if (slider.hasClass('directions')) {
            extraOptions = {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                dots: false,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2.1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1.8,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            };
        }

        if (slider.hasClass('projects')) {
            extraOptions = {
                slidesToShow: 4,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                dots: false,
                autoplay: true,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3.5,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2.8,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            };
        }

        if (slider.hasClass('news')) {
            extraOptions = {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false,
                centerMode: false,
                arrows: true,
                dots: false,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2.5,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2.1,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            };
        } if (slider.hasClass('categories-2')) {
            extraOptions = {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: false,
                centerMode: false,
                arrows: true,
                dots: false,
                autoplay: false,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 4.1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            };
        }

        slider.slick($.extend({}, options, extraOptions));
    });
});