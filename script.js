// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Parody-only "clickbait" chrome.
// Intentionally exaggerated styling, but clearly labeled as satire.
document.addEventListener('DOMContentLoaded', function () {
    try {
        // Determine a safe link base so injected links work from subfolders (like /NFT/).
        var isInSubfolder = (window.location && typeof window.location.pathname === 'string')
            ? window.location.pathname.split('/').filter(Boolean).length > 1
            : false;
        var rel = isInSubfolder ? '../' : '';
        var linkHooks = rel + 'hooks.html';
        var linkAbout = rel + 'about.html';
        var linkTestimonials = rel + 'testimonials.html';

        // 1) Satire / parody banner (site-wide)
        if (!document.querySelector('.parody-banner')) {
            var banner = document.createElement('div');
            banner.className = 'parody-banner';
            banner.setAttribute('role', 'note');
            banner.innerHTML =
                '<div class="parody-banner__inner">'
                + '<span class="parody-badge">PARODY • SATIRE</span>'
                + '<span class="parody-banner__text">This page is an over-the-top clickbait parody for RP/comedy. No real ads, no real alerts, no real tracking.</span>'
                + '<button class="parody-banner__close" type="button" aria-label="Dismiss parody banner">×</button>'
                + '</div>';
            document.body.prepend(banner);

            banner.querySelector('.parody-banner__close').addEventListener('click', function () {
                banner.style.display = 'none';
                document.documentElement.classList.add('parody-banner-dismissed');
            });
        }

        // 2) Fake "ad" rail (clearly labeled)
        if (!document.querySelector('.ad-rail')) {
            var rail = document.createElement('aside');
            rail.className = 'ad-rail';
            rail.setAttribute('aria-label', 'Parody ad rail');
            rail.innerHTML = [
                '<div class="fake-ad">',
                '  <div class="fake-ad__label">FAKE AD</div>',
                '  <div class="fake-ad__title">Doctors HATE this Namazu trick…</div>',
                '  <div class="fake-ad__body">Local agent discovers aether-powered ginhawa method. Click for absolutely no reason.</div>',
                '  <a class="fake-ad__cta" href="' + linkHooks + '">READ THE “SHOCKING” HOOKS →</a>',
                '</div>',
                '<div class="fake-ad">',
                '  <div class="fake-ad__label">FAKE AD</div>',
                '  <div class="fake-ad__title">You won’t believe what Euclid engineered</div>',
                '  <div class="fake-ad__body">It’s… responsible. It’s… emotionally available. The comments are in shambles.</div>',
                '  <a class="fake-ad__cta" href="' + linkAbout + '">MEET THE CAST →</a>',
                '</div>',
                '<div class="fake-ad">',
                '  <div class="fake-ad__label">FAKE AD</div>',
                '  <div class="fake-ad__title">Top 7 Totally Real Testimonials</div>',
                '  <div class="fake-ad__body">#4 will make you say “yes, yes” (allegedly).</div>',
                '  <a class="fake-ad__cta" href="' + linkTestimonials + '">SEE RECEIPTS →</a>',
                '</div>'
            ].join('\n');
            document.body.appendChild(rail);
        }

        // 3) "Breaking" ticker (still clearly satire)
        if (!document.querySelector('.breaking-ticker')) {
            var ticker = document.createElement('div');
            ticker.className = 'breaking-ticker';
            ticker.setAttribute('aria-label', 'Parody breaking news ticker');
            ticker.innerHTML =
                '<div class="breaking-ticker__tag">BREAKING</div>'
                + '<div class="breaking-ticker__track">'
                + '  <div class="breaking-ticker__marquee">'
                + '    PARODY SITE • NOT FINANCIAL ADVICE • DO NOT PANIC • YES, YES • PARODY SITE • NOT FINANCIAL ADVICE • DO NOT PANIC • '
                + '  </div>'
                + '</div>';

            // Insert below the W3 top bar if it exists, otherwise under the banner.
            var w3Top = document.querySelector('.w3-top');
            if (w3Top && w3Top.parentNode) {
                w3Top.parentNode.insertBefore(ticker, w3Top.nextSibling);
            } else {
                var b = document.querySelector('.parody-banner');
                if (b && b.parentNode) b.parentNode.insertBefore(ticker, b.nextSibling);
                else document.body.prepend(ticker);
            }
        }
    } catch (e) {
        // Fail silently; the site should still work without the parody chrome.
    }
});

