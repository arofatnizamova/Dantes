$(document).ready(function() {
    $('.slick-slider').each(function() {
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
                responsive: [{
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
                responsive: [{
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
                centerMode: false,
                arrows: true,
                dots: false,
                autoplay: false,
                responsive: [{
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
        }
        if (slider.hasClass('partners')) {
            extraOptions = {
                slidesToShow: 6,
                slidesToScroll: 1,
                centerMode: false,
                arrows: true,
                dots: false,
                autoplay: false,
                responsive: [{
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
                    {
                        breakpoint: 576,
                        settings: {
                            slidesToShow: 2.1,
                            slidesToScroll: 1,
                        }
                    },
                ]
            };
        }

        slider.slick($.extend({}, options, extraOptions));
    });
    const $uploadArea = $('#uploadArea');
    const $input = $('#resume');
    const $selectedFile = $('.selected-file');
    const $fileText = $selectedFile.find('span');

    function showFile(file) {
        if (!file) return;

        $fileText.text(file.name);
        $selectedFile.removeClass('d-none');
    }

    $input.on('change', function() {
        const file = this.files[0];

        if (file) {
            showFile(file);
        }
    });

    $uploadArea.on('dragover', function(event) {
        event.preventDefault();
        event.stopPropagation();

        $uploadArea.addClass('dragover');
    });

    $uploadArea.on('dragleave', function(event) {
        event.preventDefault();
        event.stopPropagation();

        $uploadArea.removeClass('dragover');
    });

    $uploadArea.on('drop', function(event) {
        event.preventDefault();
        event.stopPropagation();

        $uploadArea.removeClass('dragover');

        const files = event.originalEvent.dataTransfer.files;

        if (!files.length) return;

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(files[0]);

        $input[0].files = dataTransfer.files;

        showFile(files[0]);
    });
});