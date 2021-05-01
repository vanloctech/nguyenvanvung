$(document).ready(function () {
    $('.open-close').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        // $this.parents('.has-submenu').find('.submenu').stop().slideToggle();
        // $this.parents('.has-submenu').find('.submenu').toggleClass('open')
        $this.closest('.has-submenu').find('.submenu').first().toggleClass('open')
        $this.closest('.has-submenu').toggleClass('open');
        if ($this.data('expanded') === false) {
            $this.removeClass(' fa-chevron-circle-down');
            $this.addClass(' fa-chevron-circle-up');
            $this.data('expanded', true);
        } else {
            $this.removeClass(' fa-chevron-circle-up');
            $this.addClass(' fa-chevron-circle-down');
            $this.data('expanded', false);
        }
        return false;
    });

    // $('.li_check').on('click', function (e) {
    //     if ($(this).data('click') === undefined || $(this).data('click') === 0) {
    //         e.preventDefault();
    //         $(this).data('click', 1)
    //     }
    // });

    $('.open-close-v').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var nav = $('.nav-vertical');
        // $this.parents('.has-submenu').find('.submenu').stop().slideToggle();
        // $this.parents('.has-submenu').find('.submenu').toggleClass('open')
        $this.closest('li').find('ul').first().toggleClass('in')
        if ($this.data('expanded') === false) {
            $this.removeClass('fa-chevron-circle-down');
            $this.addClass(' fa-chevron-circle-up');
            $this.data('expanded', true);
        } else {
            $this.removeClass('fa-chevron-circle-up');
            $this.addClass(' fa-chevron-circle-down');
            $this.data('expanded', false);
        }
        return false;
    });
});
