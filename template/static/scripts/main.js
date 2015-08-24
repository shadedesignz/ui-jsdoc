$(function () {
    var sideBarMenu = $('#side-bar-menu'),
        sideBar = $('.nav-side-menu'),
        searchTerms = $('#menu-content > li').map(function() {
            var $this = $(this),
                target = $this.data('target'),
                $child = target && $this.siblings($this.data('target')) || [];

            return [{
                id: $(this).attr('id'),
                text: $(this).find('a').text().toLowerCase(),
                parent: null
            }].;
        }).toArray(),
        showAllNav = function() {
            $('#search').data('previousVal', '');
            searchTerms.forEach(function(item) {
                item.$.show();

                $(item.$.data('target')).collapse('hide');

                item.children.forEach(function(child) {
                    child.$.show();
                });

            });
        },
        sideMenuClone, searchTimeOut;

    $('.nav-side-menu .menu-content > li a').click(function(e) {
        e.stopPropagation();
    });

    $('.nav-side-menu .clearer').click(function(e) {
        $('#search').val('');
        $(this).hide();
        showAllNav();
    });

    // $('#search').keyup(function(e) {
    //     var $this = $(this),
    //         preVal = $this.data('previousVal'),
    //         val = $this.val().toLowerCase(),
    //         tempMatch = [],
    //         tempHide = [];

    //     clearTimeout(searchTimeOut);

    //     if (val.length && preVal !== val) {
    //         searchTimeOut = setTimeout(function() {
    //             $this.data('previousVal', val);
    //             $this.next().show();

    //             sideMenuClone = sideBarMenu.clone(true, true);
    //             sideBarMenu.remove();
    //             sideBar.append(sideMenuClone);

    //             searchTerms.forEach(function(item) {
    //                 var pScore = item.text.score(val, 0.5),
    //                     mChild = [],
    //                     hChild = [];

    //                 item.children.forEach(function(child) {
    //                     var cScore = child.text.score(val, 0.5);

    //                     if (cScore > 0.5) {
    //                         mChild[mChild.length] = child.$;
    //                     } else {
    //                         hChild[hChild.length] = child.$;
    //                     }
    //                 });

    //                 if (pScore > 0.5 || mChild.length) {
    //                     item.$.show();

    //                     if (mChild.length) {
    //                         mChild.forEach(function(child) {
    //                             child.show();
    //                         });
    //                         hChild.forEach(function(child) {
    //                             child.hide();
    //                         });

    //                         $(item.$.data('target')).collapse('show');
    //                     } else {
    //                         $(item.$.data('target')).collapse('hide');
    //                     }
    //                 } else {
    //                     item.$.hide();
    //                 }
    //             });
    //         }, 150);
    //     } else if (!val.length) {
    //         $this.next().hide();
    //     }
    // });

    // disqus code
    if (config.disqus) {
        $(window).on('load', function () {
            var disqus_shortname = config.disqus; // required: replace example with your forum shortname
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
            var s = document.createElement('script'); s.async = true;
            s.type = 'text/javascript';
            s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
            document.getElementsByTagName('BODY')[0].appendChild(s);
        });
    }
});