import React, { useEffect, useState } from 'react';

import Movie from './components/Movie';
<html lang="en" class="no-js">
  <head>
    <title>The Movie Database (TMDB)</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="cleartype" content="on">
    <meta charset="utf-8">
    
    <meta name="keywords" content="Movies, TV Shows, Streaming, Reviews, API, Actors, Actresses, Photos, User Ratings, Synopsis, Trailers, Teasers, Credits, Cast">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    
      <meta name="description" content="The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.">
    
    <meta name="msapplication-TileImage" content="/assets/2/v4/icons/mstile-144x144-30e7905a8315a080978ad6aeb71c69222b72c2f75d26dab1224173a96fecc962.png">
<meta name="msapplication-TileColor" content="#032541">
<meta name="theme-color" content="#032541">
<link rel="apple-touch-icon" sizes="180x180" href="/assets/2/apple-touch-icon-57ed4b3b0450fd5e9a0c20f34e814b82adaa1085c79bdde2f00ca8787b63d2c4.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/2/favicon-32x32-543a21832c8931d3494a68881f6afcafc58e96c5d324345377f3197a37b367b5.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/2/favicon-16x16-b362d267873ce9c5a39f686a11fe67fec2a72ed25fa8396c11b71aa43c938b11.png">
<link rel="manifest" href="/manifest.json?version=3">
    <link rel="canonical" href="https://www.themoviedb.org/">
    <link rel="search" type="application/opensearchdescription+xml" title="TMDB Search" href="/opensearch.xml">
    <link rel="preload" href="/assets/2/Consensus-3cba2c4d050ea63dbf7783173d288faf9ecb2942515a5e7f6e1beecabb2eaf72.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/2/source-sans-pro-v14-vietnamese_latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-regular-f38472b9e378b8c936f55a92677f575ab69e414d7cc3706ecfefeacd994b7975.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/2/source-sans-pro-v14-vietnamese_latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-italic-48273a74acbc1611b6ef1d0a771bb8ef042b9922b51d5bff560571dddcb5542a.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/2/source-sans-pro-v14-vietnamese_latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-300-db9f15a13a9f8b8bc46db7756ab863e8834bd20a7a1124c4c0a5a8f7892f3e99.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/2/source-sans-pro-v14-vietnamese_latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-600-6a087a74d78fc7d7b97fa1b0911c4ff3be4ff0bd5144618fd7ddc63ef1777f3a.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/2/source-sans-pro-v14-vietnamese_latin-ext_latin_greek-ext_greek_cyrillic-ext_cyrillic-700-d67f7dff97d105f4ac5616b00fc7822ce2c33f653ece2f547995e6a71bb7b993.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="/assets/2/v4/fonts-36ddd04013299b102c5aa8b9f8098a1cb925ca0e8e037e557f7e65870703a6bb.css" media="screen">
    <link rel="stylesheet" href="/assets/2/application-a8e56dc9b9064086646f2f8bcd562ce7e39a07396bea8dbb7bc37a0cb427ed08.css" media="screen">
    
    
      <link rel="stylesheet" href="/assets/2/v4/media-e5da667c10afeebc04aaa589fb851ae5c624ba6d321769982aaccdcea9fe24af.css" media="screen">
      
    
      <link rel="stylesheet" href="/assets/2/v4/discover-421028eba2c3eaf5699e02314870662bfc46a923ce94d25af7cfb312dd37ad93.css" media="screen">
      
    
      <link rel="stylesheet" href="/assets/2/v4/index-22ae5cf76b44e5115ea8049c717a06255873388dd7ae02a2ea653e75829b5eff.css" media="screen">
      
    
    
    <link rel="alternate" hreflang="x-default" href="https://www.themoviedb.org/">
  
    <link rel="alternate" hreflang="af-ZA" href="https://www.themoviedb.org/?language=af-ZA">
  
    <link rel="alternate" hreflang="ar-SA" href="https://www.themoviedb.org/?language=ar-SA">
  
    <link rel="alternate" hreflang="be-BY" href="https://www.themoviedb.org/?language=be-BY">
  
    <link rel="alternate" hreflang="bg-BG" href="https://www.themoviedb.org/?language=bg-BG">
  
    <link rel="alternate" hreflang="bn-BD" href="https://www.themoviedb.org/?language=bn-BD">
  
    <link rel="alternate" hreflang="ca-ES" href="https://www.themoviedb.org/?language=ca-ES">
  
    <link rel="alternate" hreflang="ch-GU" href="https://www.themoviedb.org/?language=ch-GU">
  
    <link rel="alternate" hreflang="cn-CN" href="https://www.themoviedb.org/?language=cn-CN">
  
    <link rel="alternate" hreflang="cs-CZ" href="https://www.themoviedb.org/?language=cs-CZ">
  
    <link rel="alternate" hreflang="cy-GB" href="https://www.themoviedb.org/?language=cy-GB">
  
    <link rel="alternate" hreflang="da-DK" href="https://www.themoviedb.org/?language=da-DK">
  
    <link rel="alternate" hreflang="de-DE" href="https://www.themoviedb.org/?language=de-DE">
  
    <link rel="alternate" hreflang="el-GR" href="https://www.themoviedb.org/?language=el-GR">
  
    <link rel="alternate" hreflang="en-US" href="https://www.themoviedb.org/?language=en-US">
  
    <link rel="alternate" hreflang="eo-EO" href="https://www.themoviedb.org/?language=eo-EO">
  
    <link rel="alternate" hreflang="es-ES" href="https://www.themoviedb.org/?language=es-ES">
  
    <link rel="alternate" hreflang="et-EE" href="https://www.themoviedb.org/?language=et-EE">
  
    <link rel="alternate" hreflang="eu-ES" href="https://www.themoviedb.org/?language=eu-ES">
  
    <link rel="alternate" hreflang="fa-IR" href="https://www.themoviedb.org/?language=fa-IR">
  
    <link rel="alternate" hreflang="fi-FI" href="https://www.themoviedb.org/?language=fi-FI">
  
    <link rel="alternate" hreflang="fr-FR" href="https://www.themoviedb.org/?language=fr-FR">
  
    <link rel="alternate" hreflang="ga-IE" href="https://www.themoviedb.org/?language=ga-IE">
  
    <link rel="alternate" hreflang="gd-GB" href="https://www.themoviedb.org/?language=gd-GB">
  
    <link rel="alternate" hreflang="gl-ES" href="https://www.themoviedb.org/?language=gl-ES">
  
    <link rel="alternate" hreflang="he-IL" href="https://www.themoviedb.org/?language=he-IL">
  
    <link rel="alternate" hreflang="hi-IN" href="https://www.themoviedb.org/?language=hi-IN">
  
    <link rel="alternate" hreflang="hr-HR" href="https://www.themoviedb.org/?language=hr-HR">
  
    <link rel="alternate" hreflang="hu-HU" href="https://www.themoviedb.org/?language=hu-HU">
  
    <link rel="alternate" hreflang="id-ID" href="https://www.themoviedb.org/?language=id-ID">
  
    <link rel="alternate" hreflang="it-IT" href="https://www.themoviedb.org/?language=it-IT">
  
    <link rel="alternate" hreflang="ja-JP" href="https://www.themoviedb.org/?language=ja-JP">
  
    <link rel="alternate" hreflang="ka-GE" href="https://www.themoviedb.org/?language=ka-GE">
  
    <link rel="alternate" hreflang="kk-KZ" href="https://www.themoviedb.org/?language=kk-KZ">
  
    <link rel="alternate" hreflang="kn-IN" href="https://www.themoviedb.org/?language=kn-IN">
  
    <link rel="alternate" hreflang="ko-KR" href="https://www.themoviedb.org/?language=ko-KR">
  
    <link rel="alternate" hreflang="ky-KG" href="https://www.themoviedb.org/?language=ky-KG">
  
    <link rel="alternate" hreflang="lt-LT" href="https://www.themoviedb.org/?language=lt-LT">
  
    <link rel="alternate" hreflang="lv-LV" href="https://www.themoviedb.org/?language=lv-LV">
  
    <link rel="alternate" hreflang="ml-IN" href="https://www.themoviedb.org/?language=ml-IN">
  
    <link rel="alternate" hreflang="mr-IN" href="https://www.themoviedb.org/?language=mr-IN">
  
    <link rel="alternate" hreflang="ms-MY" href="https://www.themoviedb.org/?language=ms-MY">
  
    <link rel="alternate" hreflang="nb-NO" href="https://www.themoviedb.org/?language=nb-NO">
  
    <link rel="alternate" hreflang="nl-NL" href="https://www.themoviedb.org/?language=nl-NL">
  
    <link rel="alternate" hreflang="no-NO" href="https://www.themoviedb.org/?language=no-NO">
  
    <link rel="alternate" hreflang="pa-IN" href="https://www.themoviedb.org/?language=pa-IN">
  
    <link rel="alternate" hreflang="pl-PL" href="https://www.themoviedb.org/?language=pl-PL">
  
    <link rel="alternate" hreflang="pt-PT" href="https://www.themoviedb.org/?language=pt-PT">
  
    <link rel="alternate" hreflang="ro-RO" href="https://www.themoviedb.org/?language=ro-RO">
  
    <link rel="alternate" hreflang="ru-RU" href="https://www.themoviedb.org/?language=ru-RU">
  
    <link rel="alternate" hreflang="si-LK" href="https://www.themoviedb.org/?language=si-LK">
  
    <link rel="alternate" hreflang="sk-SK" href="https://www.themoviedb.org/?language=sk-SK">
  
    <link rel="alternate" hreflang="sl-SI" href="https://www.themoviedb.org/?language=sl-SI">
  
    <link rel="alternate" hreflang="sq-AL" href="https://www.themoviedb.org/?language=sq-AL">
  
    <link rel="alternate" hreflang="sr-RS" href="https://www.themoviedb.org/?language=sr-RS">
  
    <link rel="alternate" hreflang="sv-SE" href="https://www.themoviedb.org/?language=sv-SE">
  
    <link rel="alternate" hreflang="ta-IN" href="https://www.themoviedb.org/?language=ta-IN">
  
    <link rel="alternate" hreflang="te-IN" href="https://www.themoviedb.org/?language=te-IN">
  
    <link rel="alternate" hreflang="tl-PH" href="https://www.themoviedb.org/?language=tl-PH">
  
    <link rel="alternate" hreflang="th-TH" href="https://www.themoviedb.org/?language=th-TH">
  
    <link rel="alternate" hreflang="tr-TR" href="https://www.themoviedb.org/?language=tr-TR">
  
    <link rel="alternate" hreflang="uk-UA" href="https://www.themoviedb.org/?language=uk-UA">
  
    <link rel="alternate" hreflang="vi-VN" href="https://www.themoviedb.org/?language=vi-VN">
  
    <link rel="alternate" hreflang="zh-CN" href="https://www.themoviedb.org/?language=zh-CN">
  
    <link rel="alternate" hreflang="zu-ZA" href="https://www.themoviedb.org/?language=zu-ZA">
  
    <link rel="alternate" hreflang="ar-AE" href="https://www.themoviedb.org/?language=ar-AE">
  
    <link rel="alternate" hreflang="de-AT" href="https://www.themoviedb.org/?language=de-AT">
  
    <link rel="alternate" hreflang="de-CH" href="https://www.themoviedb.org/?language=de-CH">
  
    <link rel="alternate" hreflang="en-AU" href="https://www.themoviedb.org/?language=en-AU">
  
    <link rel="alternate" hreflang="en-CA" href="https://www.themoviedb.org/?language=en-CA">
  
    <link rel="alternate" hreflang="en-GB" href="https://www.themoviedb.org/?language=en-GB">
  
    <link rel="alternate" hreflang="en-IE" href="https://www.themoviedb.org/?language=en-IE">
  
    <link rel="alternate" hreflang="en-NZ" href="https://www.themoviedb.org/?language=en-NZ">
  
    <link rel="alternate" hreflang="es-MX" href="https://www.themoviedb.org/?language=es-MX">
  
    <link rel="alternate" hreflang="fr-CA" href="https://www.themoviedb.org/?language=fr-CA">
  
    <link rel="alternate" hreflang="ms-SG" href="https://www.themoviedb.org/?language=ms-SG">
  
    <link rel="alternate" hreflang="nl-BE" href="https://www.themoviedb.org/?language=nl-BE">
  
    <link rel="alternate" hreflang="pt-BR" href="https://www.themoviedb.org/?language=pt-BR">
  
    <link rel="alternate" hreflang="zh-HK" href="https://www.themoviedb.org/?language=zh-HK">
  
    <link rel="alternate" hreflang="zh-SG" href="https://www.themoviedb.org/?language=zh-SG">
  
    <link rel="alternate" hreflang="zh-TW" href="https://www.themoviedb.org/?language=zh-TW">
  

    <script src="/assets/2/lozad.min-7f803337d01a657607bca6b20e06f371c3895b36a5f2be03a8fa9b5e16c9a83e.js"></script>
    <script src="/assets/2/jquery-3.5.1.min-f7f6a5894f1d19ddad6fa392b2ece2c5e578cbf7da4ea805b6885eb6985b6e3d.js"></script>
    <script>
      $(function() {
        jQuery.event.special.touchstart = {
          setup: function( _, ns, handle ) {
            this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
          }
        };
        jQuery.event.special.touchmove = {
          setup: function( _, ns, handle ) {
            this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
          }
        };
      });
      detected_timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
        
          timezone = detected_timezone;
        
        dataLayer = [{ 'userId': '628e5517ed2ac2758cf99a0a' }];
      
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-5QWVXV');
    </script>
    <script src="/assets/2/kendo-59bc8069669538cda019bccf140d9a7598fd5e3392322771187961e4fef87b99.js"></script>
    <script src="/assets/2/application-fee20aeed047f5ad803562342e62c9a638e6eebab933e0954873868ed5d6d47a.js"></script>
    
      <script src="/assets/2/application.desktop-ea69249141a43ef7c6a59a19ee40eface5e171cf03eefffddb488574a66dea02.js"></script>
    
    

<body class="en v4">
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5QWVXV" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  
  
    <script src="/assets/2/pusher.min-d24a4628bd62ef6f45bafd26c81616f97dc5912cfcf4ba4eea7f731fe625b7d3.js"></script>
    <script>
      var pusher = new Pusher('8961361d6e18d951b539', { cluster: 'mt1', disableStats: true, auth: { params: { timezone: timezone } } });
      var pusher_account_channel = pusher.subscribe('private-account_628e5517ed2ac2758cf99a0a');
    </script>
  
  
    <script src="/assets/2/kendo-2021.1.204/messages/kendo.messages.en-US.min-79da68ae0221b4fd7978805d0c79cc7f682fddace5f2137aa0dae8fe1c5ddacd.js"></script>
  
  
    <script src="/assets/2/kendo-2021.1.204/cultures/kendo.culture.en-US.min-61ce5636474a35333ecff74fe30c528d459bcee29b3b32fc0c58ac77de788b34.js"></script>
    <script>kendo.culture("en-US");</script>
  

  <div class="page_wrap _wrap">
<header class="normal smaller no_animation smaller  subtle">
  <div class="content">
    <div class="sub_media">
      <div class="nav_wrapper">
        
          <a class="logo" href="/">
            <img src="/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDB)" width="154" height="20">
          </a>
        

        <ul class="dropdown_menu navigation">
          
            <li>
              <a class="no_click" href="/movie">Movies</a>

              <ul>
                <li><a href="/movie">Popular</a></li>
                <li><a href="/movie/now-playing">Now Playing</a></li>
                <li><a href="/movie/upcoming">Upcoming</a></li>
                <li><a href="/movie/top-rated">Top Rated</a></li>
              </ul>
            </li>
            <li>
              <a  class="no_click" href="/tv">TV Shows</a>

              <ul>
                <li><a href="/tv">Popular</a></li>
                <li><a href="/tv/airing-today">Airing Today</a></li>
                <li><a href="/tv/on-the-air">On TV</a></li>
                <li><a href="/tv/top-rated">Top Rated</a></li>
              </ul>
            </li>
            <li>
              <a class="no_click" href="/person">People</a>

              <ul>
                <li><a href="/person">Popular People</a></li>
              </ul>
            </li>
            <li>
              <a class="no_click" href="#">More</a>

              <ul>
                <li><a href="/discuss">Discussions</a></li>
                <li><a href="/leaderboard">Leaderboard</a></li>
                <li><a href="/talk">Support</a></li>
                <li><a href="/documentation/api">API</a></li>
              </ul>
            </li>
          
        </ul>
      </div>

      
        <div class="flex">
          <ul class="primary">
            <li class="glyph new_buttons">
              <a class="new_icon no_click" href="#">
                <span class="glyphicons_v2 plus white"></span>
              </a>
            </li>
            <li class="translate">
              <div>en</div>
            </li>
            
              <li class="glyph notifications">
                <a class="no_click" href="/settings/notifications"><span class="glyphicons_v2 bell svg invert "></span></a>
                <div class="badge hide"><div class="count">0</div></div>
              </li>
              <li class="user">
                <a class="no_click tooltip_hover" title="Profile and Settings" href="/u/VIkasM123">
                  
                    <span class="avatar background_color purple">V</span>
                  
                </a>
              </li>
            

            <li class="glyph search_buttons">
              <a class="search" href="/search"><span class="glyphicons_v2 search blue"></span></a>
              <a class="close hide" href="/search"><span class="glyphicons_v2 menu-close invert svg"></span></a>
            </li>
          </ul>
        </div>
      
    </div>
  </div>
  <div class="search_bar hide">
    <section class="search show_search_false">
      <div class="sub_media">
        <form id="search_form" action="/search" method="get" accept-charset="utf-8">
          
          <label>
            <input dir="auto" id="search_v4" name="query" type="text" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false" placeholder="Search for a movie, tv show, person..." value="">
          </label>
          <input type="submit" disabled>
        </form>
      </div>
    </section>
  </div>
</header>
<main id="main" class="index">
  

  
    <style>
      section.new_index {
        
          background-image: linear-gradient(to right, rgba(var(--tmdbDarkBlue), 0.8) 0%, rgba(var(--tmdbDarkBlue), 0) 100%), url('/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/2Sm3asuwKVNTzgm2nF6hp5mwEfh.jpg');
        
      }
    </style>
    <section class="inner_content new_index">
      <div id="media_v4" class="media discover">
        <div class="column_wrapper">
          <div class="content_wrapper wrap">
            <div class="title">
              <h2>Welcome.</h2>
              <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>

            <div class="search">
              <form id="inner_search_form" action="/search" method="get" accept-charset="utf-8">
                
                <label>
                  <input dir="auto" id="inner_search_v4" name="query" type="text" tabindex="1" autocorrect="off" autofill="off" autocomplete="off" spellcheck="false" placeholder="Search for a movie, tv show, person......" value="">
                </label>
                <input type="submit" value="Search">
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  

  <section class="inner_content no_pad">
  <div class="column_wrapper">
    <div class="content_wrapper no_bottom_pad wrap">

      <div class="column">
        <div class="column_header">
          <h2>What's Popular</h2>

          <div class="selector_wrap">
            <div class="selector">
              <div class="anchor selected">
                <h3><a href="#" class="no_click" data-panel="popular_scroller" data-group="streaming">Streaming <span class="glyphicons_v2 chevron-down"></span></a></h3>
                <div class="background"></div>
              </div>

              <div class="anchor ">
                <h3><a href="#" class="no_click" data-panel="popular_scroller" data-group="on-tv">On TV <span class="glyphicons_v2 chevron-down"></span></a></h3>
                <div class="background hide"></div>
              </div>

              <div class="anchor ">
                <h3><a href="#" class="no_click" data-panel="popular_scroller" data-group="for-rent">For Rent <span class="glyphicons_v2 chevron-down"></span></a></h3>
              </div>

              <div class="anchor">
                <h3><a href="#" class="no_click" data-panel="popular_scroller" data-group="in-theatres">In Theaters <span class="glyphicons_v2 chevron-down"></span></a></h3>
              </div>
            </div>
          </div>
        </div>

        <div id="popular_scroller" class="media discover scroller_wrap should_fade is_fading">
          <div class="column_content flex scroller">
              <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
<div class="card style_1 spacer"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

  <section class="inner_content no_pad">
    <div class="column_wrapper">
      <div class="content_wrapper wrap no_bottom_pad">

        <div class="column">
          <div class="column_header">
            <h2>Free To Watch</h2>

            <div class="selector_wrap">
              <div class="selector">
                <div class="anchor selected">
                  <h3><a href="#" class="no_click" data-panel="free_scroller" data-group="movie">Movies <span class="glyphicons_v2 chevron-down"></span></a></h3>
                  <div class="background"></div>
                </div>

                <div class="anchor">
                  <h3><a href="#" class="no_click" data-panel="free_scroller" data-group="tv">TV <span class="glyphicons_v2 chevron-down"></span></a></h3>
                </div>
              </div>
            </div>
          </div>

          <div id="free_scroller" class="media discover scroller_wrap should_fade is_fading">
            <div class="column_content flex scroller">
                <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
<div class="card style_1 spacer"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

<section class="inner_content bg_image no_pad video">
  <div class="column_wrapper">

    <div id="trailer_scroller" class="media discover scroller_wrap should_fade is_fading">
      <div class="content_wrapper wrap no_bottom_pad">

        <div class="column">
          <div class="column_header">
            <h2>Latest Trailers</h2>

            <div class="selector_wrap">
              <div class="selector">
                <div class="anchor selected">
                  <h3><a href="#" class="no_click" data-panel="trailer_scroller" data-group="streaming">Streaming <span class="glyphicons_v2 chevron-down"></span></a></h3>
                  <div class="background"></div>
                </div>

                <div class="anchor ">
                  <h3><a href="#" class="no_click" data-panel="trailer_scroller" data-group="on-tv">On TV <span class="glyphicons_v2 chevron-down"></a></h3>
                  <div class="background hide"></div>
                </div>

                <div class="anchor ">
                  <h3><a href="#" class="no_click" data-panel="trailer_scroller" data-group="for-rent">For Rent <span class="glyphicons_v2 chevron-down"></a></h3>
                </div>

                <div class="anchor">
                  <h3><a href="#" class="no_click" data-panel="trailer_scroller" data-group="in-theatres">In Theaters <span class="glyphicons_v2 chevron-down"></a></h3>
                </div>
              </div>
            </div>
          </div>

          <div class="column_content flex scroller">
              <div class="card video style_2 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey backdrop no_image_holder "></div>
  

      </div>
    </div>
    <div class="content">
      <h2></h2>
      <h3></h3>
    </div>
  </div>
  <div class="card video style_2 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey backdrop no_image_holder "></div>
  

      </div>
    </div>
    <div class="content">
      <h2></h2>
      <h3></h3>
    </div>
  </div>
  <div class="card video style_2 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey backdrop no_image_holder "></div>
  

      </div>
    </div>
    <div class="content">
      <h2></h2>
      <h3></h3>
    </div>
  </div>
  <div class="card video style_2 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey backdrop no_image_holder "></div>
  

      </div>
    </div>
    <div class="content">
      <h2></h2>
      <h3></h3>
    </div>
  </div>
  <div class="card video style_2 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey backdrop no_image_holder "></div>
  

      </div>
    </div>
    <div class="content">
      <h2></h2>
      <h3></h3>
    </div>
  </div>
  <div class="card video style_2 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey backdrop no_image_holder "></div>
  

      </div>
    </div>
    <div class="content">
      <h2></h2>
      <h3></h3>
    </div>
  </div>
  <div class="card video style_2 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey backdrop no_image_holder "></div>
  

      </div>
    </div>
    <div class="content">
      <h2></h2>
      <h3></h3>
    </div>
  </div>
  <div class="card video style_2 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey backdrop no_image_holder "></div>
  

      </div>
    </div>
    <div class="content">
      <h2></h2>
      <h3></h3>
    </div>
  </div>
  <div class="card video style_2 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey backdrop no_image_holder "></div>
  

      </div>
    </div>
    <div class="content">
      <h2></h2>
      <h3></h3>
    </div>
  </div>
  <div class="card video style_2 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey backdrop no_image_holder "></div>
  

      </div>
    </div>
    <div class="content">
      <h2></h2>
      <h3></h3>
    </div>
  </div>
<div class="card video style_2 spacer"></div>
          </div>

        </div>

      </div>
    </div>
  </div>
</section>

<section class="inner_content trending no_pad">
  <div class="column_wrapper">
    <div class="content_wrapper wrap no_bottom_pad">

      <div class="column">
        <div class="column_header">
          <h2>Trending</h2>

          <div class="selector_wrap">
            <div class="selector">
              <div class="anchor selected">
                <h3><a href="#" class="no_click" data-panel="trending_scroller" data-group="today">Today <span class="glyphicons_v2 chevron-down"></span></a></h3>
                <div class="background"></div>
              </div>

              <div class="anchor">
                <h3><a href="#" class="no_click" data-panel="trending_scroller" data-group="this-week">This Week <span class="glyphicons_v2 chevron-down"></span></a></h3>
              </div>
            </div>
          </div>
        </div>

        <div id="trending_scroller" class="media discover scroller_wrap should_fade is_fading">
          <div class="column_content flex scroller">
              <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
  <div class="card style_1 loading">
    <div class="image">
      <div class="wrapper">
          
    <div class="glyphicons_v2 picture grey poster no_image_holder w160_and_h90"></div>
  

      </div>
    </div>
    <div class="content">
      <div class="consensus tight">
        <div class="outer_ring">
          <div class="user_score_chart">
            <div class="percent">
              <span class="icon icon-rNR"></span>
            </div>
          </div>
        </div>
      </div>

      <h2></h2>
      <p></p>
    </div>
  </div>
<div class="card style_1 spacer"></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


<section class="inner_content leaderboard">
  <div class="column_wrapper">
    <div class="content_wrapper wrap">

      <div class="column">
        <div class="column_header">
          <h2>Leaderboard</h2>
          <div>
            <p><span class="dot all"></span> All Time Edits</p>
            <p><span class="dot this_week"></span> Edits This Week</p>
          </div>
        </div>

        <div class="column_content">
          <ol class="leaderboard">
            
              <li>
                <span class="avatar">
                  <a href="/u/Ritx">
                    
                      <span class="round initials background_color green">R</span>
                    
                  </a>
                </span>

                <div class="data">
                  <h3><a href="/u/Ritx">Ritx</a></h3>
                  <div class="meter all">
                    <div class="gauge" style="width: 1.2266603539564385%;"></div>
                    <h4>31,816</h4>
                  </div>
                  <div class="meter this_week">
                    <div class="gauge" style="width: 100.0%;"></div>
                    <h4>7,923</h4>
                  </div>
                </div>
              </li>
            
              <li>
                <span class="avatar">
                  <a href="/u/ekdmsl">
                    
                      <span class="round initials background_color pink">e</span>
                    
                  </a>
                </span>

                <div class="data">
                  <h3><a href="/u/ekdmsl">ekdmsl</a></h3>
                  <div class="meter all">
                    <div class="gauge" style="width: 0.318655639472277%;"></div>
                    <h4>8,265</h4>
                  </div>
                  <div class="meter this_week">
                    <div class="gauge" style="width: 82.26681812444781%;"></div>
                    <h4>6,518</h4>
                  </div>
                </div>
              </li>
            
              <li>
                <span class="avatar">
                  <a href="/u/boub69">
                    
                      <span class="round initials background_color silver">b</span>
                    
                  </a>
                </span>

                <div class="data">
                  <h3><a href="/u/boub69">boub69</a></h3>
                  <div class="meter all">
                    <div class="gauge" style="width: 0.2289000038169278%;"></div>
                    <h4>5,937</h4>
                  </div>
                  <div class="meter this_week">
                    <div class="gauge" style="width: 67.94143632462452%;"></div>
                    <h4>5,383</h4>
                  </div>
                </div>
              </li>
            
              <li>
                <span class="avatar">
                  <a href="/u/raze464">
                    
                      <img loading="lazy" class="avatar" src="/t/p/w64_and_h64_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg" srcset="/t/p/w64_and_h64_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg 1x, /t/p/w128_and_h128_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg 2x" alt="raze464">
                    
                  </a>
                </span>

                <div class="data">
                  <h3><a href="/u/raze464">raze464</a></h3>
                  <div class="meter all">
                    <div class="gauge" style="width: 12.511966454216722%;"></div>
                    <h4>324,524</h4>
                  </div>
                  <div class="meter this_week">
                    <div class="gauge" style="width: 67.61327779881357%;"></div>
                    <h4>5,357</h4>
                  </div>
                </div>
              </li>
            
              <li>
                <span class="avatar">
                  <a href="/u/nicos18">
                    
                      <img loading="lazy" class="avatar" src="https://www.gravatar.com/avatar/66807fdf92e80a5f67f4a9d4082186e7.jpg?s=64" srcset="https://www.gravatar.com/avatar/66807fdf92e80a5f67f4a9d4082186e7.jpg?s=64 1x, https://www.gravatar.com/avatar/66807fdf92e80a5f67f4a9d4082186e7.jpg?s=128 2x" alt="nicos18">
                    
                  </a>
                </span>

                <div class="data">
                  <h3><a href="/u/nicos18">nicos18</a></h3>
                  <div class="meter all">
                    <div class="gauge" style="width: 0.21502026634445115%;"></div>
                    <h4>5,577</h4>
                  </div>
                  <div class="meter this_week">
                    <div class="gauge" style="width: 55.15587529976019%;"></div>
                    <h4>4,370</h4>
                  </div>
                </div>
              </li>
            
              <li>
                <span class="avatar">
                  <a href="/u/guanyi1024">
                    
                      <span class="round initials background_color teal">g</span>
                    
                  </a>
                </span>

                <div class="data">
                  <h3><a href="/u/guanyi1024">guanyi1024</a></h3>
                  <div class="meter all">
                    <div class="gauge" style="width: 0.2270108173276185%;"></div>
                    <h4>5,888</h4>
                  </div>
                  <div class="meter this_week">
                    <div class="gauge" style="width: 54.63839454751987%;"></div>
                    <h4>4,329</h4>
                  </div>
                </div>
              </li>
            
              <li>
                <span class="avatar">
                  <a href="/u/Samara">
                    
                      <span class="round initials background_color purple">S</span>
                    
                  </a>
                </span>

                <div class="data">
                  <h3><a href="/u/Samara">Samara</a></h3>
                  <div class="meter all">
                    <div class="gauge" style="width: 100.0%;"></div>
                    <h4>2,593,709</h4>
                  </div>
                  <div class="meter this_week">
                    <div class="gauge" style="width: 50.0315537044049%;"></div>
                    <h4>3,964</h4>
                  </div>
                </div>
              </li>
            
              <li>
                <span class="avatar">
                  <a href="/u/felixxx999">
                    
                      <img loading="lazy" class="avatar" src="https://www.gravatar.com/avatar/27e154acf8fec34412d763a6d31d53c9.jpg?s=64" srcset="https://www.gravatar.com/avatar/27e154acf8fec34412d763a6d31d53c9.jpg?s=64 1x, https://www.gravatar.com/avatar/27e154acf8fec34412d763a6d31d53c9.jpg?s=128 2x" alt="Steve">
                    
                  </a>
                </span>

                <div class="data">
                  <h3><a href="/u/felixxx999">Steve</a></h3>
                  <div class="meter all">
                    <div class="gauge" style="width: 20.96981581202826%;"></div>
                    <h4>543,896</h4>
                  </div>
                  <div class="meter this_week">
                    <div class="gauge" style="width: 49.62766628802221%;"></div>
                    <h4>3,932</h4>
                  </div>
                </div>
              </li>
            
              <li>
                <span class="avatar">
                  <a href="/u/heli5m">
                    
                      <img loading="lazy" class="avatar" src="https://www.gravatar.com/avatar/3af6511cf44a709e6ae5b612903c846c.jpg?s=64" srcset="https://www.gravatar.com/avatar/3af6511cf44a709e6ae5b612903c846c.jpg?s=64 1x, https://www.gravatar.com/avatar/3af6511cf44a709e6ae5b612903c846c.jpg?s=128 2x" alt="heli5m">
                    
                  </a>
                </span>

                <div class="data">
                  <h3><a href="/u/heli5m">heli5m</a></h3>
                  <div class="meter all">
                    <div class="gauge" style="width: 14.060559607881995%;"></div>
                    <h4>364,690</h4>
                  </div>
                  <div class="meter this_week">
                    <div class="gauge" style="width: 46.06840843114981%;"></div>
                    <h4>3,650</h4>
                  </div>
                </div>
              </li>
            
              <li>
                <span class="avatar">
                  <a href="/u/qualitylover">
                    
                      <span class="round initials background_color teal">q</span>
                    
                  </a>
                </span>

                <div class="data">
                  <h3><a href="/u/qualitylover">qualitylover</a></h3>
                  <div class="meter all">
                    <div class="gauge" style="width: 4.907142628567816%;"></div>
                    <h4>127,277</h4>
                  </div>
                  <div class="meter this_week">
                    <div class="gauge" style="width: 44.68004543733434%;"></div>
                    <h4>3,540</h4>
                  </div>
                </div>
              </li>
            
          </ol>
        </div>

      </div>

    </div>
  </div>
</section>
</main>

<script type="text/javascript" charset="utf-8">
  $(function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var loaded_panels = {};

    attachVideoPlayer(w, h);
    var panel_url_template = "/remote/panel?panel={0}&group={1}";

    function queryPanel(panel, group) {
      $.ajax({
        dataType: 'html',
        url: kendo.format(panel_url_template, panel, group),
        method: 'GET',
        beforeSend: function() {
         // activatePageLoader();
        }
      }).done(function(response) {
        deactivatePageLoader();
        loaded_panels[panel] = true;

        var jpanel = $('#' + panel + ' div.scroller');
        jpanel.fadeOut(500).promise().done(function() {
          jpanel.html(response).addClass('loaded').fadeIn(750).scrollLeft(0);
          observer.observe();

          attachOptionsTooltips(true, '#' + panel);
          initializeScroller(false, '#' + panel);

          
            getPageAccountStatus('VIkasM123', '#' + panel);
          

          if (panel == 'trailer_scroller') {
            var videos = $('#' + panel + ' div.scroller').find('.card.true');
            var bg_image = $(videos[0]).data('bg-image');
            if (bg_image) {
              $('section.inner_content.bg_image.video').css({ 'background-image': 'url(' + bg_image + ')' })
            } else {
              $('section.inner_content.bg_image.video').css({ 'background-image': 'none' })
            }
          }
        });
      }).fail(function() {
        deactivatePageLoader();
        showError('There was a problem refreshing the results.')
      }).always(function() {

      });
    }

    function createInview(panel, group) {
      var el = $('#' + panel);
      new Waypoint.Inview({
        element: el,
        enter: function(direction) {
          if (loaded_panels[panel]) {
            this.destroy()
          } else {
            queryPanel(panel, group);
          }
        }
      });
    }

    
      queryPanel('popular_scroller', 'streaming');
      createInview('free_scroller', 'movie');
      createInview('trailer_scroller', 'streaming');
    

    createInview('trending_scroller', 'today');

    
      var add_to_media_list_template = "/u/VIkasM123/remote/lists?media_type={0}&media_id={1}";
      $("body").kendoTooltip({
        filter: 'a.add_media_to_list',
        showOn: 'click',
        autoHide: false,
        content: {
          url: '/',
          cache: true
        },
        width: '300',
        height: 109,
        position: 'right',
        requestStart: function(e) {
          e.options.url = kendo.format(add_to_media_list_template, selectedOptionsTooltip.media_type, selectedOptionsTooltip.media_id);
        },
        show: function(e) {
          $("div.k-tooltip-button").addClass('hide');
          this.popup.element.addClass("tmdb_theme_light");
        }
      });

      $("body").kendoTooltip({
        filter: 'a.rate_media',
        width: 216,
        height: 58,
        position: 'bottom',
        callout: true,
        showOn: 'click',
        autoHide: false,
        content: {
          url: '/'
        },
        requestStart: function(e) {
          e.options.url = kendo.format('/{0}/{1}/remote/rating', selectedOptionsTooltip.media_type, selectedOptionsTooltip.media_id);
        },
        show: function() {
          $("div.k-tooltip-button").addClass('hide');
          this.popup.element.addClass("tmdb_theme flex");
        }
      }).data("kendoTooltip");

      $('body').on('click', 'a.options_tooltip_link', function(e) {
        var clicked_link = $(this);
        selectedOptionsTooltip.action = $(this).data('action');

        $.ajax({
          dataType: 'json',
          url: '/u/VIkasM123/remote/toggle-list-item',
          method: 'PUT',
          data: {
            action: selectedOptionsTooltip.action,
            media_id: selectedOptionsTooltip.object_id,
            media_type: selectedOptionsTooltip.media_type
          },
          beforeSend: function() {
           activatePageLoader();
          }
        }).done(function(response) {
          deactivatePageLoader();

          if ( response.success ) {
            showSuccess(response.message, 'Success');

            if (response.action == 'destroyed') {
              clicked_link.removeClass('selected');
            } else {
              clicked_link.addClass('selected');
            }
          }
        }).fail(function() {
          deactivatePageLoader();
          showError('There was a problem refreshing the results.')
        });
      });
    

    function updateGroupSelector(selected) {
      var parent = selected.closest('.selector')
      var parent_pos = parent.position();
      var anchor = selected.closest('.anchor');
      var original_anchor = anchor.clone();
      var anchor_pos = anchor.position();

      
        anchor.parent().find('div.background').css({ 'left': (anchor_pos.left - parent_pos.left - 1), 'width': anchor.outerWidth() });
      

      parent.find('.anchor').removeClass('selected');
      anchor.addClass('selected');

      return original_anchor;
    }

    $('body').on('mouseover', 'div.card.video.true', function(e) {
      var bg_image = $(this).data('bg-image');
      $('section.inner_content.video').attr('style', 'background-image: url(' + bg_image + ')');
    });

    $('body').on('click', 'div.anchor a, a.refresh_panel', function(e) {
      var original_anchor = updateGroupSelector($(this));
      var panel = $(this).data('panel');
      var group = $(this).data('group');

      if ( !original_anchor.hasClass('selected') ) {
        activatePageLoader();
        queryPanel(panel, group);
      }
    });

  });
</script>

    </div> <!-- page_wrap opened in html_head -->

    <footer class="single_column  ">
      <nav>
        <div class="join">
          <img src="/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="The Movie Database (TMDB)" width="130" height="94">

          
            <a class="rounded logged_in" href="/u/VIkasM123">Hi VIkasM123!</a>
          
        </div>

        <div>
          <h3>The Basics</h3>
          <ul>
            <li><a href="/about">About TMDB</a></li>
            <li><a href="/about/staying-in-touch">Contact Us</a></li>
            <li><a href="/talk">Support Forums</a></li>
            <li><a href="/documentation/api">API</a></li>
            <li><a href="https://status.themoviedb.org/" target="_blank" rel="noopener">System Status</a></li>
          </ul>
        </div>
        <div>
          <h3>Get Involved</h3>
          <ul>
            <li><a href="/bible"><span class="glyphicons glyphicons-asterisk"></span> Contribution Bible</a></li>
            <li><a href="/movie/new">Add New Movie</a></li>
            <li><a href="/tv/new">Add New TV Show</a></li>
          </ul>
        </div>
        <div>
          <h3>Community</h3>
          <ul>
            <li><a href="/documentation/community/guidelines">Guidelines</a></li>
            <li><a href="/discuss">Discussions</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
            <li><a href="https://twitter.com/themoviedb" target="_blank" rel="noopener">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h3>Legal</h3>
          <ul>
            <li><a href="/documentation/website/terms-of-use">Terms of Use</a></li>
            <li><a href="/documentation/api/terms-of-use">API Terms of Use</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
      </nav>

      <section>Build 9ef7947 (3700)</section>
    </footer>

    

    
      <div id="new_media_template" class="hide">
        <div class="settings_content">
          <div class="group no_pad">
            <p><a href="/movie/new">Add New Movie</a></p>
            <p><a href="/tv/new">Add New TV Show</a></p>
          </div>
        </div>
      </div>

      <div id="settings_tooltip" class="hide">
        <div class="settings_content">
          <div class="group">
            <h2><a href="/u/VIkasM123">VIkasM123</a></h2>
            <p><a href="/u/VIkasM123">View profile</a></p>
          </div>
          <div class="group">
            <p><a href="/u/VIkasM123/discussions">Discussions</a></p>
            <p><a href="/u/VIkasM123/lists">Lists</a></p>
            <p><a href="/u/VIkasM123/ratings">Ratings</a></p>
            <p><a href="/u/VIkasM123/watchlist">Watchlist</a></p>
          </div>
          
          <div class="group">
            <p><a href="/settings/profile">Edit Profile</a></p>
            <p><a href="/settings/account">Settings</a></p>
          </div>
          <div class="group">
            <p><a href="/logout">Logout</a></p>
          </div>
        </div>
      </div>
    

    <div id="keyboard_shortcuts_popup" class="hide">
      <div class="content keyboard_shortcuts">
        <div class="column">
          <h3>Global</h3>
          <div><span>s</span> focus the search bar</div>
          <div><span>p</span> open profile menu</div>
          <div><span>esc</span> close an open window</div>
          <div><span>?</span> open keyboard shortcut window</div>

          <h3>On media pages</h3>
          <div><span>b</span> go back (or to parent when applicable)</div>
          <div><span>e</span> go to edit page</div>

          <h3>On TV season pages</h3>
          <div><span>&#8594;</span> (right arrow) go to next season</div>
          <div><span>&#8592;</span> (left arrow) go to previous season</div>

          <h3>On TV episode pages</h3>
          <div><span>&#8594;</span> (right arrow) go to next episode</div>
          <div><span>&#8592;</span> (left arrow) go to previous episode</div>

          <h3>On all image pages</h3>
          <div><span>a</span> open add image window</div>
        </div>

        <div class="column">
          <h3>On all edit pages</h3>
          <div><span>t</span> open translation selector</div>
          <div><span>ctrl</span>+ <span>s</span> submit form</div>

          <h3>On discussion pages</h3>
          <div><span>n</span> create new discussion</div>
          <div><span>w</span> toggle watching status</div>
          <div><span>p</span> toggle public/private</div>
          <div><span>c</span> toggle close/open</div>
          <div><span>a</span> open activity</div>
          <div><span>r</span> reply to discussion</div>
          <div><span>l</span> go to last reply</div>
          <div><span>ctrl</span>+ <span>enter</span> submit your message</div>
          <div><span>&#8594;</span> (right arrow) next page</div>
          <div><span>&#8592;</span> (left arrow) previous page</div>
        </div>
      </div>
    </div>

    <div class="hide">
      <div id="options_tooltip">
        <div class="settings_content">
          
            <div class="group no_pad">
              <p><a class="no_click add_media_to_list" href="/"><span class="glyphicons_v2 thumbnails-list pad_right"></span> Add to list</a></p>
            </div>
            <div class="group">
              <p><a class="no_click options_tooltip_link" data-action="favourite" href="/"><span class="glyphicons_v2 heart pad_right"></span> Favorite</a></p>
            </div>
            <div class="group">
              <p><a class="no_click options_tooltip_link" data-action="watchlist" href="/"><span class="glyphicons_v2 bookmark pad_right"></span> Watchlist</a></p>
            </div>
            <div class="group">
              <p><a class="no_click rate_media" data-action="rate" href="/"><span class="glyphicons_v2 star pad_right"></span> Your rating</a></p>
            </div>
          
        </div>
      </div>
    </div>

    <div class="hide">
      <div id="video_popup"></div>
    </div>

    
      <script src="/assets/2/jquery.waypoints.inview.min-020c5d0ff05f6c391ec83334e99df1904b2971479d4334ac94fe7bca52bf287a.js"></script>
    

    <script src="/assets/2/footer-ec8fd260239bf7b85be386d03eb1bcb6a8ed5062578ef49351e9984ffee6bb86.js"></script>
    
      <script src="/assets/2/timeago/locales/jquery.timeago.en-US-f9d144e55407ca11f35de7a0d44b0d54ec1ffc6c4039dffd5a11c0a12e6a9482.js"></script>
    

    <script type="text/javascript" charset="utf-8">
      var observer = lozad('.lazyload', {
        loaded: function(e) {
          e.classList.add('lazyloaded');
        }
      });
      observer.observe();

      $('#cookie_notice a.accept').on('click', function(e) {
        e.preventDefault();
        document.cookie = "tmdb._cookie_policy=true; samesite=lax; path=/; max-age=15551999;";
        $('#cookie_notice').fadeOut('fast');
      });

      $('#complete_survey').on('click', function(e) {
        e.preventDefault();
        document.cookie = "tmdb.survey_one=true; samesite=lax; path=/; max-age=2591999;";
        $('#survey').fadeOut('fast');
        window.open('https://survey.us.confirmit.com/wix/p165164730214.aspx');
      });

      $('#ignore_survey').on('click', function(e) {
        e.preventDefault();
        document.cookie = "tmdb.survey_one=true; samesite=lax; path=/; max-age=2591999;";
        $('#survey').fadeOut('fast');
      });

      function showSearch(state) {
        if ( state ) {
          $('header').removeClass('nav-up').addClass('nav-down');
          $('li.search_buttons a.close').removeClass('hide');
          $('li.search_buttons a.search').addClass('hide');
          $('div.search_bar').removeClass('hide');
          $("#search_v4").data("kendoAutoComplete").focus();
        } else {
          $('li.search_buttons a.close').addClass('hide');
          $('li.search_buttons a.search').removeClass('hide');
          $('div.search_bar').addClass('hide');
        }
      }

      $(function() {
        jQuery.timeago.settings.allowFuture = true;
        $("time.timeago").timeago();

        var didScroll;
        var lastScrollTop = 0;
        var delta = 10;
        var navbarHeight = $('header').outerHeight();

        $(window).scroll(function(event){
          didScroll = true;
        });

        setInterval(function() {
          if (didScroll) {
            hasScrolled();
            didScroll = false;
          }
        }, 250);

        function hasScrolled() {
          var st = $(this).scrollTop();

          if ( Math.abs(lastScrollTop - st) <= delta )
            return;

          if ( st > lastScrollTop && st > navbarHeight ) {
            $('header').removeClass('nav-down').addClass('nav-up');
          } else {
            if ( st + $(window).height() < $(document).height() ) {
              $('header').removeClass('nav-up').addClass('nav-down');
            }
          }

          lastScrollTop = st;
        }

        var hover_tooltip = $('li.user a.no_click.tooltip_hover').kendoTooltip({
          position: 'bottom',
          show: function(e) {
            $("div.k-tooltip-button").addClass('hide');
            this.popup.element.addClass("tmdb_theme_white");
            this.element.removeClass('keyboard');
          }
        }).data("kendoTooltip");

        $('li.user a.no_click').kendoTooltip({
          autoHide: false,
          showOn: 'click',
          width: 180,
          position: 'bottom',
          content: function() {
            return $("#settings_tooltip").html();
          },
          show: function(e) {
            hover_tooltip.hide();
            $("div.k-tooltip-button").addClass('hide');
            this.popup.element.addClass("tmdb_theme_white no_pad");

            if (this.element.hasClass('keyboard')) {
              this.popup.element.find('p a')[0].focus();
            }
          }
        });

        $('li.translate').kendoTooltip({
          autoHide: false,
          content: {
            url: '/translation_popup?media_type=&media_id=&referral=%2F',
            cache: true
          },
          showOn: 'click',
          width: 300,
          position: 'bottom',
          show: function(e) {
            $("div.k-tooltip-button").addClass('hide');
            this.popup.element.addClass("min_100px_height tmdb_theme_white flex");
          }
        });

        $('li.new_buttons').kendoTooltip({
          autoHide: false,
          showOn: 'click',
          
          position: 'bottom',
          content: function() {
            return $("#new_media_template").html();
          },
          show: function(e) {
            $("div.k-tooltip-button").addClass('hide');
            this.popup.element.addClass("tmdb_theme_white no_pad");
          }
        });

        

        $("body").on('click', 'a.no_click', function(e) {
          e.preventDefault();
        });

        $("ul > li").hover(function() {
          $(this).find("ul.sub_nav.hide").toggle();
        });

        

        showSuccess = function(message, title) {
          if (title === undefined) {
            title = 'Success';
          }

          showNotification({
            title: title,
            message: message
          }, "success");
        };

        showError = function(message, title) {
          if (title === undefined) {
            title = 'Error';
          }

          showNotification({
            title: title,
            message: message
          }, "error");
        };

        var showNotification = (function() {
          var notification = $("span#notification").kendoNotification({
            stacking: "down",
            
              position: {
                top: 20,
                left: null,
                bottom: null,
                right: 20
              },
            
            autoHideAfter: 5000,
            show: function(e) {
              e.element.parent().css({
                zIndex: 99999
              });
            },
            templates: [{
              type: "error",
              template: $("#errorTemplate").html()
            },{
              type: "success",
              template: $("#successTemplate").html()
            }]
          }).data("kendoNotification");

          return function(msg, type) {
            notification.show(msg, type);
          };
        })();

        var keyboard_shortcut_popup = $('#keyboard_shortcuts_popup div.content').kendoWindow({
          title: 'Keyboard Shortcuts',
          width: '90vw',
          maxWidth: '1400px',
          actions: [ "Close" ],
          modal: true,
          draggable: false,
          resizable: false,
          visible: false,
          pinned: true,
          animation: {
            open: {
              effects: "fade:in"
            },
            close: {
              effects: "fade:out"
            }
          },
          open: function() {
            $('body').addClass('blur');
          },
          close: function() {
            $('body').removeClass('blur');
          }
        }).data("kendoWindow").center();

        $('#keyboard_shortcuts').on('click', function() {
          keyboard_shortcut_popup.open();
        });

        var seach_redirect_template = "/search{0}?query={1}";
        var processing_selected_item = false;
        var processing_manually_selected_item = false;

        window.onbeforeunload = function() {
          processing_selected_item = false;
          processing_manually_selected_item = false;
        }

        function executeSearch(url) {
          window.location = url;
        }

        function processManualSelectedItem(text) {
          processing_manually_selected_item = true;

          if (processing_selected_item) {
            return;
          }

          if (text == '') {
            return;
          }

          executeSearch(kendo.format(seach_redirect_template, '', encodeURIComponent(text)));
        }

        function processSelectedItem(e) {
          processing_selected_item = true;

          if (processing_manually_selected_item) {
            return;
          }

          if (e == '') {
            return;
          }

          var selected_item = '';
          var dataItem = e.dataItem;

          if ( typeof(dataItem) == 'string' ) {
            selected_item = kendo.format(seach_redirect_template, '', encodeURIComponent(dataItem));
          } else {
            switch(dataItem.media_type) {
              case 'movie':
                selected_item = kendo.format(seach_redirect_template, '/movie', encodeURIComponent(dataItem.title));
                break;
              case 'tv':
                selected_item = kendo.format(seach_redirect_template, '/tv', encodeURIComponent(dataItem.name));
                break;
              case 'person':
                selected_item = kendo.format(seach_redirect_template, '/person', encodeURIComponent(dataItem.name));
                break;
              default:
                selected_item = kendo.format(seach_redirect_template, '', encodeURIComponent(dataItem));
            }
          }

          executeSearch(selected_item);
        }

        $("#search_v4").kendoAutoComplete({
          highlightFirst: false,
          minLength: 1,
          dataTextField: "title",
          template: kendo.template($("#slim_multi_search_template").html()),
          noDataTemplate: $("#search_no_data_template").html(),
          dataSource: {
            type: "json",
            serverFiltering: true,
            transport: {
              read: '/search/trending',
              parameterMap: function() {
                return { query: $("#search_v4").data("kendoAutoComplete").value() };
              }
            },
            schema: {
              data: "results"
            }
          },
          popup: {
            appendTo: $("header")
          },
          filtering: function(e) {
            var filter = e.filter != undefined ? e.filter.value : "";
            if (filter == '') {
              if ( ($('#search_v4-list #trending_search_header_template').length) == 0 ) {
                // $('#search_v4_listbox').empty();
                $('#search_v4-list').prepend($("#search_v4_headerTemplate").html());
              }
            } else {
              $("#trending_search_header_template").remove();
            }
          },
          select: function(e) {
            processing_selected_item = true;
            processSelectedItem(e);
          },
          close: function(e) {
            // e.preventDefault();
            // handle the event
          }
        }).data("kendoAutoComplete");

        $('#search_v4').keydown(function(event) {
          if (event.keyCode == 13) {
            processing_manually_selected_item = true;
            processManualSelectedItem($("#search_v4").data("kendoAutoComplete").value());
          }
        });

        $('header #search_form').submit(function() {
          return false;
        });

        var autocompleteInput = $('section.search .k-autocomplete input');
        autocompleteInput.on('focus', function (e) {
          var value = autocompleteInput.val();
          if (value == null || value == '') {
            $("#search_v4").data("kendoAutoComplete").search('');
          } else {
            var fieldLength = value.length;
            autocompleteInput[0].setSelectionRange(fieldLength, fieldLength);
          }
        });

        $('li.search_buttons a.search').on('click', function(e) {
          e.preventDefault();
          showSearch(true);
        });

        $('li.search_buttons a.close').on('click', function(e) {
          e.preventDefault();
          showSearch(false);
        });

        $('main.show_search_false').on('click', function(e) {
          showSearch(false);
        });

        $('header span.k-i-close[title="clear"]').on('click', function(e) {
          $('#search_v4').data("kendoAutoComplete").focus();
        });

        
          var opened_notification = false;
          $("header li.notifications, div.left_column li.notifications").kendoTooltip({
            autoHide: false,
            content: {
              url: "/notifications?referrer=%2F",
              cache: true
            },
            showOn: 'click',
            width: 300,
            position: 'bottom',
            show: function(e) {
              if (opened_notification) {
                this.refresh();
              }
              opened_notification = true;

              $("div.k-tooltip-button").addClass('hide');
              this.popup.element.addClass("tmdb_theme_white min_100px_height");
            }
          });

          pusher_account_channel.bind('general', function(data) {
            if (data.unread_count == 0) {
              $('li.notifications a span').removeClass('on');
              $('li.notifications div.badge').addClass('hide');
            } else {
              $('li.notifications div.badge div.count').html(data.unread_count);
              $('li.notifications a span').addClass('on');
              $('li.notifications div.badge').removeClass('hide');
            }
          });

          delete_window = $("<div />").kendoWindow({
            title: "Confirm",
            width: "240px",
            resizable: false,
            modal: true,
            animation: {
              open: {
                effects: "fade:in"
              },
              close: {
                effects: "fade:out"
              }
            },
            open: function() {
              $('body').addClass('blur');
            },
            close: function() {
              $('body').removeClass('blur');
            }
          });
        

        public_media_type_map = { 'movie': 'Movie', 'tv': 'TV Show', 'person': 'Person' };

        
          $(document).on('keydown', null, 'e', function() {
            if ( $('a.keyboard_s.edit_page').length ) {
              $('a.keyboard_s.edit_page')[0].click();
            }
          });

          $(document).on('keydown', null, 'a', function() {
            if ( $('a.keyboard_s.add_image').length ) {
              $('a.keyboard_s.add_image')[0].click();
            }
          });

          $(document).on('keydown', null, 'l', function() {
            if ( $('a.keyboard_s.lock_all').length ) {
              $('a.keyboard_s.lock_all')[0].click();
            }
          });

          $(document).on('keydown', null, 'ctrl+s', function() {
            if ( $('input.keyboard_s.save').length ) {
              $('input.keyboard_s.save').click();
            }
          });

          $(document).on('keydown', null, 'p', function() {
            $('header ul.primary li.user a').addClass('keyboard');
            $('header ul.primary li.user a').click();
          });

          $(document).on('keydown', null, 't', function() {
            if ( $('#edit_translation_selector').length ) {
              $("#edit_translation_selector").data("kendoDropDownList").open();
            }
          });
        

        $(document).on('keydown', null, 'b', function() {
          if ( $('a.keyboard_s.parent').length ) {
            $('a.keyboard_s.parent')[0].click();
          }
        });

        $(document).on('keyup', null, 's', function() {
          if ( $('#search_v4').length ) {
            showSearch(true);
          }
        });

        $(document).on('keyup', null, 'shift+/', function() {
          keyboard_shortcut_popup.open();
        });

        $(document).on('keydown', null, 'left', function() {
          if ( $('span.previous a.keyboard_s').length ) {
            $('span.previous a.keyboard_s')[0].click();
          }
        });

        $(document).on('keydown', null, 'right', function() {
          if ( $('span.next a.keyboard_s').length ) {
            $('span.next a.keyboard_s')[0].click();
          }
        });

        $(document).on('keydown', null, 'm', function() {
          if ( $('#new_shortcut_bar').length ) {
            $("#new_shortcut_bar").focus();
          }
        });

        $(document).on('keydown', null, 'esc', function() {
          if ( $('div.custom_bg.keyboard_s').length && $('#ott_offers_window a.close').length ) {
            $('#ott_offers_window a.close')[0].click();
          }
        });

      });

      var gender_lookup = {
        0: 'two',
        1: 'one',
        2: 'two',
        3: 'two'
      }
    </script>

    <script id="person_template" type="text/x-kendo-tmpl">
      <div class="item profile list_item grid_item">
        <div class="image_content profile">
          <a class="result" href="/person/${data.url}" title="${data.name}" alt="${data.name}">
            # if (data.profile_path) { #
              <img class="" src="/t/p/w66_and_h66_face${data.profile_path}" alt="${data.name}" width="45" height="45" srcset="/t/p/w66_and_h66_face${data.profile_path} 1x, /t/p/w132_and_h132_face${data.profile_path} 2x">
            # } else { #
              <div class="glyphicons_v2 picture profile ${gender_lookup[data.gender]} grey no_image_holder w45_and_h45"></div>
            # } #
          </a>
        </div>

        <div class="content">
          <p class="name"><a class="result" href="/person/${data.url}" title="${data.name}" alt="${data.name}">${data.name}</a></p>

          # if (data.known_for) { #
            <p class="sub">${data.known_for}</p>
          # } #
        </div>
      </div>
    </script>

    <script id="person_template_with_known_for" type="text/x-kendo-tmpl">
      <div class="item profile list_item known_for">
        <div class="image_content profile">
          # if (data.profile_path) { #
            <img class="" src="/t/p/w66_and_h66_face${data.profile_path}" alt="${data.name}" width="45" height="45" srcset="/t/p/w66_and_h66_face${data.profile_path} 1x, /t/p/w132_and_h132_face${data.profile_path} 2x">
          # } else { #
            <div class="glyphicons_v2 picture grey no_image_holder w45_and_h45 profile"></div>
          # } #
        </div>

        <div class="content">
          <p class="name">${data.name}</p>
          # if (data.known_for) { #
            <p class="sub">${data.known_for_department} &bull; ${data.known_for}</p>
          # } else { #
            <p class="sub">No known credits.</p>
          # } #
        </div>
      </div>
    </script>

    <script id="person_result_template" type="text/x-kendo-tmpl">
      <div class="ac_item profile list_item known_for">
        <div class="image_content profile">
          # if (data.profile_path) { #
            <img class="" src="/t/p/w66_and_h66_face${data.profile_path}" alt="${data.name}" width="45" height="45" srcset="/t/p/w66_and_h66_face${data.profile_path} 1x, /t/p/w132_and_h132_bestv2${data.profile_path} 2x">
          # } else { #
            <div class="glyphicons_v2 picture grey no_image_holder w45_and_h45 profile"></div>
          # } #
        </div>

        <div class="content">
          <p class="name">${data.name}</p>
          # if (data.known_for) { #
            <p class="sub">
              # if (data.media_type) { #
                <span class="media_type person">#= public_media_type_map[data.media_type] # &bull; </span>
              # } #
              # for (var i = 0; i < data.known_for.length; i++) { #
              <span class="comma">#= data.known_for[i].title ? data.known_for[i].title : data.known_for[i].name #</span>
              # } #
            </p>
          # } else { #
            <p class="sub">No known credits.</p>
          # } #
        </div>
      </div>
    </script>

    <script id="movie_result_template" type="text/x-kendo-tmpl">
      <div class="ac_results">
        <div class="ac_item poster list_item">
          <div class="image_content poster">
            # if (data.poster_path) { #
              <img class="" src="/t/p/w45_and_h67_bestv2${data.poster_path}" alt="${data.title}" width="45" height="67" srcset="/t/p/w45_and_h67_bestv2${data.poster_path} 1x, /t/p/w90_and_h134_bestv2${data.poster_path} 2x">
            # } else { #
              <div class="glyphicons_v2 picture grey no_image_holder w45_and_h67"></div>
            # } #
          </div>

          <div class="content">
            <p class="name">${data.title}</p>
            <p class="sub">
              # if (data.media_type) { #
                <span class="media_type movie">#= public_media_type_map[data.media_type] # &bull; </span>
              # } #
              # if (data.original_title !== data.title) { #
                <span class="comma"><span class="original_title">#= data.original_title #</span></span>
              # } #
              # if (data.release_date) { #
                <span class="comma"><span class="release_date">#= data.release_date #</span></span>
              # } #
            </p>
          </div>
        </div>
      </div>
    </script>

    <script id="tv_show_result_template" type="text/x-kendo-tmpl">
      <div class="ac_item poster list_item">
        <div class="image_content poster">
          # if (data.poster_path) { #
            <img class="" src="/t/p/w45_and_h67_bestv2${data.poster_path}" alt="${data.title}" width="45" height="67" srcset="/t/p/w45_and_h67_bestv2${data.poster_path} 1x, /t/p/w90_and_h134_bestv2${data.poster_path} 2x">
          # } else { #
            <div class="glyphicons_v2 picture grey no_image_holder w45_and_h67"></div>
          # } #
        </div>

        <div class="content">
          <p class="name">${data.name}</p>
          <p class="sub">
            # if (data.media_type) { #
                <span class="media_type tv">#= public_media_type_map[data.media_type] # &bull; </span>
              # } #
            # if (data.original_name !== data.name) { #
              <span class="comma"><span class="original_title">#= data.original_name #</span></span>
            # } #
            # if (data.first_air_date) { #
              <span class="comma"><span class="release_date">#= data.first_air_date #</span></span>
            # } #
          </p>
        </div>
      </div>
    </script>

    <script id="slim_movie_result_template" type="text/x-kendo-tmpl">
      <div class="ac_item poster list_item">
        <div class="image_content poster">
          # if (data.poster_path) { #
            <img class="" src="/t/p/w45_and_h67_bestv2${data.poster_path}" alt="${data.title}" width="45" height="67" srcset="/t/p/w45_and_h67_bestv2${data.poster_path} 1x, /t/p/w90_and_h134_bestv2${data.poster_path} 2x">
          # } else { #
            <div class="glyphicons_v2 picture grey no_image_holder w45_and_h67"></div>
          # } #
        </div>

        <div class="content">
          <p class="name">${data.title}</p>
          <p class="sub">
            # if (data.original_title !== data.title) { #
              <span class="comma"><span class="original_title">#= data.original_title #</span></span>
            # } #
            # if (data.release_date) { #
              <span class="comma"><span class="release_date">#= data.release_date #</span></span>
            # } #
          </p>
        </div>

        <p><span class="media_type movie">#= public_media_type_map[data.media_type] #</span></p>
      </div>
    </script>

    <script id="multi_search_template" type="text/x-kendo-tmpl">
      <div class="ac_results">
        # if (data.media_type == 'movie') { #
          #= kendo.render(kendo.template($("\\#movie_result_template").html()), [data]) #
        # } else if (data.media_type == 'tv') { #
          #= kendo.render(kendo.template($("\\#tv_show_result_template").html()), [data]) #
        # } else if (data.media_type == 'person') { #
          #= kendo.render(kendo.template($("\\#person_result_template").html()), [data]) #
        # } #
      </div>
    </script>

    <script id="search_v4_headerTemplate" type="text/x-kendo-template">
      <div id="trending_search_header_template" class="slim_search_results_header">
        <div class="wrapper">
          <h2><span class="glyphicons_v2 trending"></span> Trending</h2>
        </div>
      </div>
    </script>

    <script id="search_no_data_template" type="text/x-kendo-template">
      <div class="slim_search_results_header no_data">
        <div class="wrapper">
          <h2>No Results</h2>
        </div>
      </div>
    </script>

    <script id="slim_multi_search_template" type="text/x-kendo-tmpl">
      # if (data.media_type == 'movie') { #
        <div class="slim_search_results slim">
          <div class="wrapper">
            <div class="glyphicons_v2 film"></div>
            <p>#= data.title # <span>in Movies</span></p>
          </div>
        </div>
      # } else if (data.media_type == 'tv') { #
        <div class="slim_search_results slim">
          <div class="wrapper">
            <div class="glyphicons_v2 tv"></div>
            <p>#= data.name # <span>in TV Shows</span></p>
          </div>
        </div>
      # } else if (data.media_type == 'person') { #
        <div class="slim_search_results slim">
          <div class="wrapper">
            <div class="glyphicons_v2 user"></div>
            <p>#= data.name # <span>in People</span></p>
          </div>
        </div>
      # } else { #
        <div class="slim_search_results slim">
          <div class="wrapper">
            <div class="glyphicons_v2 search"></div>
            <p>#= data #</p>
          </div>
        </div>
      # } #
    </script>

    <script id="delete-confirmation" type="text/x-kendo-template">
      <section class="window_content">
        <p class="delete-message">Are you sure?</p>

        <button class="delete-cancel k-button">No</button>
        <button class="delete-confirm k-button">Yes</button>
      </section>
    </script>
    <div id="dialog_window"></div>

    <span id="notification" class="hide"></span>
    <script id="errorTemplate" type="text/x-kendo-template">
      <div class="notification error">
        <span>
          <h2><span class="glyphicons_v2 circle-alert invert svg"></span> #= title #</h2>
          # if (message instanceof Array) { #
            <ul>
              # for (var i = 0; i < message.length; i++) { #
                <li>#= message[i] #</li>
              # } #
            </ul>
          # } else { #
            <p>#= message #</p>
          # } #
        </span>
      </div>
    </script>

    <script id="successTemplate" type="text/x-kendo-template">
      <div class="notification success">
        <span>
          <h2><span class="glyphicons_v2 circle-check invert svg"></span> #= title #</h2>
          <p>#= message #</p>
        </span>
      </div>
    </script>

    <script id="network_combo_template" type="text/x-kendo-tmpl">
      <span class="k-state-default image">
        # if (data.logo_path) { #
          <img src="/t/p/h15${data.logo_path}" alt="${data.name}" srcset="/t/p/h15${data.logo_path} 1x, /t/p/h30${data.logo_path} 2x" height="15">&nbsp;&nbsp;-&nbsp;
        # } #
        ${data.name}# if (data.origin_country) { # (${data.origin_country}) # } #
      </span>
    </script>

    <script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        "name": "The Movie Database",
        "alternateName": "TMDB",
        "url": "https://www.themoviedb.org"
      }
    </script>

    <script type="application/ld+json">
      {
         "@context": "http://schema.org",
         "@type": "WebSite",
         "url": "https://www.themoviedb.org/",
         "potentialAction": {
           "@type": "SearchAction",
           "target": "https://www.themoviedb.org/search?query={search_term_string}",
           "query-input": "required name=search_term_string"
         }
      }
    </script>

  </body>
</html>

export default App;
