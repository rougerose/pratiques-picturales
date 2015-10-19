/**
 * cbpFWTabs.js v1.0.0
 * http://tympanus.net/codrops/2014/03/21/responsive-full-width-tabs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
;( function( window ) {

  'use strict';

  function extend( a, b ) {
    for( var key in b ) {
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function CBPFWTabs( el, options ) {
    if (el) {
      this.el = el;
      this.options = extend( {}, this.options );
        extend( this.options, options );
      this._init();
    }
  }

  CBPFWTabs.prototype.options = {
    start : 0,
    tabClass: 'tabs__item--current',
    itemClass: 'tabs-content__item--current'

  };

  CBPFWTabs.prototype._init = function() {
    // tabs elemes
    this.tabs = [].slice.call( this.el.querySelectorAll( 'nav > ul > li' ) );
    // content items
    this.items = [].slice.call( this.el.querySelectorAll( '.tabs-content > section' ) );
    // current index
    this.current = -1;
    // show current content item
    if (this.tabs.length > 0 && this.items.length > 0) {
      this._show();
      // init events
      this._initEvents();
    }
  };

  CBPFWTabs.prototype._initEvents = function() {
    var self = this;
    this.tabs.forEach( function( tab, idx ) {
      tab.addEventListener( 'click', function( ev ) {
        ev.preventDefault();
        self._show( idx );
      } );
    } );
  };

  CBPFWTabs.prototype._show = function( idx ) {
    if( this.current >= 0 ) {
      this.tabs[ this.current ].classList.remove(this.options.tabClass);
      this.items[ this.current ].classList.remove(this.options.itemClass);
    }
    // change current
    this.current = idx != undefined ? idx : this.options.start >= 0 && this.options.start < this.items.length ? this.options.start : 0;
    this.tabs[ this.current ].classList.add(this.options.tabClass);
    this.items[ this.current ].classList.add(this.options.itemClass);
  };

  // add to global namespace
  window.CBPFWTabs = CBPFWTabs;

})( window );
