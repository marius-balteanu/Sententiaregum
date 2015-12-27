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

import ListenableStore from './ListenableStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Locale from '../constants/Locale';

/**
 * Store for locales.
 *
 * @author Maximilian Bosch <maximilian.bosch.27@gmail.com>
 */
class LocaleStore extends ListenableStore {
  /**
   * Constructor.
   *
   * @returns {void}
   */
  constructor() {
    super();
    this.locales = {};
  }

  /**
   * Registers new locales.
   *
   * @param {Object} locales The locales to store.
   *
   * @returns {void}
   */
  registerLocales(locales) {
    for (const key in locales) {
      if (!locales.hasOwnProperty(key)) {
        continue;
      }

      this.locales[key] = locales[key];
    }

    this.emitChange('Locale');
  }

  /**
   * Gets all locales persisted in the store.
   *
   * @returns {Object} List of all available locales.
   */
  getAllLocales() {
    return this.locales;
  }
}

const store = new LocaleStore();

AppDispatcher.register((payload) => {
  if (payload.event === Locale.GET_LOCALES) {
    store.registerLocales(payload.result);
  }
});

export default store;