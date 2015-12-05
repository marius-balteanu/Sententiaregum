/*
 * This file is part of the Sententiaregum project.
 *
 * (c) Maximilian Bosch <maximilian.bosch.27@gmail.com>
 * (c) Ben Bieler <benjaminbieler2014@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

'use strict';

import Cookies from 'cookies-js';

/**
 * Factory class for the internal cookie library.
 *
 * @author Maximilian Bosch <maximilian.bosch.27@gmail.com>
 */
export default class CookieFactory {
  /**
   * Constructor.
   *
   * @param {Object} window
   */
  constructor(window) {
    this.window = window;
  }

  /**
   * Returns the cookie instance.
   *
   * @returns {Object}
   */
  getCookies() {
    this.buildCookieInstance();

    return this.cookies;
  }

  /**
   * Builds an instance of the cookie factory.
   *
   * @returns {Object}
   */
  buildCookieInstance() {
    if (!this.cookies) {
      this.cookies = CookieFactory.isBrowserEnvironment() ? Cookies : Cookies(this.window);
    }

    return this.cookies;
  }

  /**
   * Checks if the current environment is a brwoser environment.
   *
   * @returns {boolean}
   */
  static isBrowserEnvironment() {
    return typeof window !== 'undefined';
  }
}