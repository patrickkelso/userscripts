// ==UserScript==
// @name     _Sidebar on page
// @include  https://stackoverflow.com/questions/14722302/*
// @include  http://YOUR_SERVER.COM/YOUR_PATH/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant    GM_addStyle
// ==/UserScript==

var sidebarWidth    = "100px";

$("html").css ( {
    position:   "relative",
    width:      "calc(100% - " + sidebarWidth + ")"
} );

$("body").append ( '                                                \
    <div id="gmRightSideBar">                                       \
        <ul>                                                        \
            <li><a href="http://dailypuppy.com/">Link 1</a></li>    \
            <li><a href="http://puppyfind.com/">Link 2</a></li>     \
        </ul>                                                       \
    </div>                                                          \
' );

GM_addStyle ( "                                                     \
    #gmRightSideBar {                                               \
        position:               fixed;                              \
        top:                    0;                                  \
        right:                  0;                                  \
        margin:                 1ex;                                \
        padding:                1em;                                \
        background:             orange;                             \
        width:                  calc(" + sidebarWidth + " - 2ex)    \
    }                                                               \
    #gmRightSideBar ul {                                            \
        margin:                 0ex;                                \
    }                                                               \
    #gmRightSideBar a {                                             \
        color:                  blue;                               \
    }                                                               \
" );
