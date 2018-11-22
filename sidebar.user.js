// ==UserScript==
// @name     _Add a Sidebar to a page with auto fade and keyboard shortcut
// @include  https://stackoverflow.com/questions/14722302/*
// @include  http://YOUR_SERVER.COM/YOUR_PATH/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant    GM_addStyle
// ==/UserScript==

$("body").append ( '                                                \
    <div id="gmRightSideBar">                                       \
        <p>F9 toggles visibility</p>                                \
        <ul>                                                        \
            <li><a href="http://dailypuppy.com/">Link 1</a></li>    \
            <li><a href="http://puppyfind.com/">Link 2</a></li>     \
        </ul>                                                       \
    </div>                                                          \
' );

//-- Fade panel when not in use
var kbShortcutFired = false;
var rightSideBar    = $('#gmRightSideBar');
rightSideBar.hover (
    function () {
        $(this).stop (true, false).fadeTo (50,  1  );
        kbShortcutFired = false;
    },
    function () {
        if ( ! kbShortcutFired ) {
            $(this).stop (true, false).fadeTo (900, 0.1);
        }
        kbShortcutFired = false;
    }
);
rightSideBar.fadeTo (2900, 0.1);

//-- Keyboard shortcut to show/hide our sidebar
$(window).keydown (keyboardShortcutHandler);

function keyboardShortcutHandler (zEvent) {
    //--- On F9, Toggle our panel's visibility
    if (zEvent.which == 120) {  // F9
        kbShortcutFired = true;

        if (rightSideBar.is (":visible") ) {
            rightSideBar.stop (true, false).hide ();
        }
        else {
            //-- Reappear opaque to start
            rightSideBar.stop (true, false).show ();
            rightSideBar.fadeTo (0, 1);
            rightSideBar.fadeTo (2900, 0.1);
        }

        zEvent.preventDefault ();
        zEvent.stopPropagation ();
        return false;
    }
}

GM_addStyle ( "                                                     \
    #gmRightSideBar {                                               \
        position:               fixed;                              \
        top:                    0;                                  \
        right:                  0;                                  \
        margin:                 1ex;                                \
        padding:                1em;                                \
        background:             orange;                             \
        width:                  100px;                              \
        z-index:                6666;                               \
        opacity:                0.9;                                \
    }                                                               \
    #gmRightSideBar p {                                             \
        font-size:              80%;                                \
    }                                                               \
    #gmRightSideBar ul {                                            \
        margin:                 0ex;                                \
    }                                                               \
    #gmRightSideBar a {                                             \
        color:                  blue;                               \
    }                                                               \
" );

