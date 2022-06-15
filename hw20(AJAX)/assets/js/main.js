function loadPage(page) {
    $.get('assets/pages/' + page + '.html', (html) => {
        $('#page_content').html(html);
    });
}
loadPage('main');

$(function () {
    $(".nav-masthead a").on('click', function (e) {
        e.preventDefault();
        loadPage($(this).attr("href"));
        $(".nav-link.active").removeClass("active");
        $(this).addClass("active");
    })
});