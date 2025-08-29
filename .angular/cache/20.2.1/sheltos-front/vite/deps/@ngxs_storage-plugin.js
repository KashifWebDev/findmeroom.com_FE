import {
  InitState,
  StateToken,
  UpdateState,
  actionMatcher,
  getValue,
  setValue,
  withNgxsPlugin,
  ɵMETA_OPTIONS_KEY,
  ɵhasOwnProperty
} from "./chunk-YE3XKEXW.js";
import "./chunk-CU2TGBXV.js";
import {
  Injectable,
  InjectionToken,
  Injector,
  NgModule,
  inject,
  makeEnvironmentProviders,
  provideEnvironmentInitializer,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
} from "./chunk-LTUS4IEO.js";
import {
  tap
} from "./chunk-Y72XGDAT.js";
import "./chunk-HSWANC32.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-3OV72XIM.js";

// node_modules/@ngxs/storage-plugin/fesm2022/ngxs-storage-plugin-internals.mjs
var ɵDEFAULT_STATE_KEY = "@@STATE";
var StorageOption;
(function(StorageOption2) {
  StorageOption2[StorageOption2["LocalStorage"] = 0] = "LocalStorage";
  StorageOption2[StorageOption2["SessionStorage"] = 1] = "SessionStorage";
})(StorageOption || (StorageOption = {}));
var ɵUSER_OPTIONS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "USER_OPTIONS" : "");
var ɵALL_STATES_PERSISTED = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "ALL_STATES_PERSISTED" : "", {
  providedIn: "root",
  factory: () => inject(ɵUSER_OPTIONS).keys === "*"
});
var ɵNGXS_STORAGE_PLUGIN_OPTIONS = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "NGXS_STORAGE_PLUGIN_OPTIONS" : "");
var STORAGE_ENGINE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "STORAGE_ENGINE" : "");
function ɵisKeyWithExplicitEngine(key) {
  return !!key?.engine;
}
function ɵextractStringKey(storageKey) {
  if (ɵisKeyWithExplicitEngine(storageKey)) {
    storageKey = storageKey.key;
  }
  if (ɵhasOwnProperty(storageKey, ɵMETA_OPTIONS_KEY)) {
    storageKey = storageKey[ɵMETA_OPTIONS_KEY].name;
  }
  return storageKey instanceof StateToken ? storageKey.getName() : storageKey;
}

// node_modules/@ngxs/storage-plugin/fesm2022/ngxs-storage-plugin.mjs
function storageOptionsFactory(options) {
  return __spreadProps(__spreadValues({
    storage: StorageOption.LocalStorage,
    serialize: JSON.stringify,
    deserialize: JSON.parse,
    beforeSerialize: (obj) => obj,
    afterDeserialize: (obj) => obj
  }, options), {
    keys: options.keys === "*" ? [ɵDEFAULT_STATE_KEY] : options.keys
  });
}
function engineFactory(options) {
  if (false) {
    return null;
  }
  if (options.storage === StorageOption.LocalStorage) {
    return localStorage;
  } else if (options.storage === StorageOption.SessionStorage) {
    return sessionStorage;
  }
  return null;
}
function getStorageKey(key, options) {
  return options?.namespace ? `${options.namespace}:${key}` : key;
}
var ɵNgxsStoragePluginKeysManager = class _ɵNgxsStoragePluginKeysManager {
  /** Store keys separately in a set so we're able to check if the key already exists. */
  _keys = /* @__PURE__ */ new Set();
  _injector = inject(Injector);
  _keysWithEngines = [];
  constructor() {
    const {
      keys
    } = inject(ɵNGXS_STORAGE_PLUGIN_OPTIONS);
    this.addKeys(keys);
  }
  getKeysWithEngines() {
    return [...this._keysWithEngines];
  }
  addKeys(storageKeys) {
    for (const storageKey of storageKeys) {
      const key = ɵextractStringKey(storageKey);
      if (this._keys.has(key)) {
        continue;
      }
      this._keys.add(key);
      const engine = ɵisKeyWithExplicitEngine(storageKey) ? this._injector.get(storageKey.engine) : this._injector.get(STORAGE_ENGINE);
      this._keysWithEngines.push({
        key,
        engine
      });
    }
  }
  /** @nocollapse */
  static ɵfac = function ɵNgxsStoragePluginKeysManager_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ɵNgxsStoragePluginKeysManager)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _ɵNgxsStoragePluginKeysManager,
    factory: _ɵNgxsStoragePluginKeysManager.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ɵNgxsStoragePluginKeysManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var NgxsStoragePlugin = class _NgxsStoragePlugin {
  _keysManager = inject(ɵNgxsStoragePluginKeysManager);
  _options = inject(ɵNGXS_STORAGE_PLUGIN_OPTIONS);
  _allStatesPersisted = inject(ɵALL_STATES_PERSISTED);
  handle(state, event, next) {
    if (false) {
      return next(state, event);
    }
    const matches = actionMatcher(event);
    const isInitAction = matches(InitState);
    const isUpdateAction = matches(UpdateState);
    const isInitOrUpdateAction = isInitAction || isUpdateAction;
    let hasMigration = false;
    if (isInitOrUpdateAction) {
      const addedStates = isUpdateAction && event.addedStates;
      for (const {
        key,
        engine
      } of this._keysManager.getKeysWithEngines()) {
        if (!this._allStatesPersisted && addedStates) {
          const dotNotationIndex = key.indexOf(DOT);
          const stateName = dotNotationIndex > -1 ? key.slice(0, dotNotationIndex) : key;
          if (!ɵhasOwnProperty(addedStates, stateName)) continue;
        }
        const storageKey = getStorageKey(key, this._options);
        let storedValue = engine.getItem(storageKey);
        if (storedValue !== "undefined" && storedValue != null) {
          try {
            const newVal = this._options.deserialize(storedValue);
            storedValue = this._options.afterDeserialize(newVal, key);
          } catch {
            typeof ngDevMode !== "undefined" && ngDevMode && console.error(`Error ocurred while deserializing the ${storageKey} store value, falling back to empty object, the value obtained from the store: `, storedValue);
            storedValue = {};
          }
          this._options.migrations?.forEach((strategy) => {
            const versionMatch = strategy.version === getValue(storedValue, strategy.versionKey || "version");
            const keyMatch = !strategy.key && this._allStatesPersisted || strategy.key === key;
            if (versionMatch && keyMatch) {
              storedValue = strategy.migrate(storedValue);
              hasMigration = true;
            }
          });
          if (this._allStatesPersisted) {
            storedValue = this._hydrateSelectivelyOnUpdate(storedValue, addedStates);
            state = __spreadValues(__spreadValues({}, state), storedValue);
          } else {
            state = setValue(state, key, storedValue);
          }
        }
      }
    }
    return next(state, event).pipe(tap((nextState) => {
      if (isInitOrUpdateAction && !hasMigration) {
        return;
      }
      for (const {
        key,
        engine
      } of this._keysManager.getKeysWithEngines()) {
        let storedValue = nextState;
        const storageKey = getStorageKey(key, this._options);
        if (key !== ɵDEFAULT_STATE_KEY) {
          storedValue = getValue(nextState, key);
        }
        try {
          const newStoredValue = this._options.beforeSerialize(storedValue, key);
          engine.setItem(storageKey, this._options.serialize(newStoredValue));
        } catch (error) {
          if (typeof ngDevMode !== "undefined" && ngDevMode) {
            if (error && (error.name === "QuotaExceededError" || error.name === "NS_ERROR_DOM_QUOTA_REACHED")) {
              console.error(`The ${storageKey} store value exceeds the browser storage quota: `, storedValue);
            } else {
              console.error(`Error ocurred while serializing the ${storageKey} store value, value not updated, the value obtained from the store: `, storedValue);
            }
          }
        }
      }
    }));
  }
  _hydrateSelectivelyOnUpdate(storedValue, addedStates) {
    if (!storedValue || !addedStates || Object.keys(addedStates).length === 0) {
      return storedValue;
    }
    return Object.keys(addedStates).reduce((accumulator, addedState) => {
      if (ɵhasOwnProperty(storedValue, addedState)) {
        accumulator[addedState] = storedValue[addedState];
      }
      return accumulator;
    }, {});
  }
  /** @nocollapse */
  static ɵfac = function NgxsStoragePlugin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxsStoragePlugin)();
  };
  /** @nocollapse */
  static ɵprov = ɵɵdefineInjectable({
    token: _NgxsStoragePlugin,
    factory: _NgxsStoragePlugin.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsStoragePlugin, [{
    type: Injectable
  }], null, null);
})();
var DOT = ".";
var NgxsStoragePluginModule = class _NgxsStoragePluginModule {
  static forRoot(options) {
    return {
      ngModule: _NgxsStoragePluginModule,
      providers: [withNgxsPlugin(NgxsStoragePlugin), {
        provide: ɵUSER_OPTIONS,
        useValue: options
      }, {
        provide: ɵNGXS_STORAGE_PLUGIN_OPTIONS,
        useFactory: storageOptionsFactory,
        deps: [ɵUSER_OPTIONS]
      }, {
        provide: STORAGE_ENGINE,
        useFactory: engineFactory,
        deps: [ɵNGXS_STORAGE_PLUGIN_OPTIONS]
      }]
    };
  }
  /** @nocollapse */
  static ɵfac = function NgxsStoragePluginModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxsStoragePluginModule)();
  };
  /** @nocollapse */
  static ɵmod = ɵɵdefineNgModule({
    type: _NgxsStoragePluginModule
  });
  /** @nocollapse */
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxsStoragePluginModule, [{
    type: NgModule
  }], null, null);
})();
function withNgxsStoragePlugin(options) {
  return makeEnvironmentProviders([withNgxsPlugin(NgxsStoragePlugin), {
    provide: ɵUSER_OPTIONS,
    useValue: options
  }, {
    provide: ɵNGXS_STORAGE_PLUGIN_OPTIONS,
    useFactory: storageOptionsFactory,
    deps: [ɵUSER_OPTIONS]
  }, {
    provide: STORAGE_ENGINE,
    useFactory: engineFactory,
    deps: [ɵNGXS_STORAGE_PLUGIN_OPTIONS]
  }]);
}
function withStorageFeature(storageKeys) {
  return provideEnvironmentInitializer(() => {
    const allStatesPersisted = inject(ɵALL_STATES_PERSISTED);
    if (allStatesPersisted) {
      if (typeof ngDevMode !== "undefined" && ngDevMode) {
        const message = "The NGXS storage plugin is currently persisting all states because the `keys` option was explicitly set to `*` at the root level. To selectively persist states, consider explicitly specifying them, allowing for addition at the feature level.";
        console.error(message);
      }
      return;
    }
    inject(ɵNgxsStoragePluginKeysManager).addKeys(storageKeys);
  });
}
var LOCAL_STORAGE_ENGINE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "LOCAL_STORAGE_ENGINE" : "", {
  providedIn: "root",
  factory: () => false ? null : localStorage
});
var SESSION_STORAGE_ENGINE = new InjectionToken(typeof ngDevMode !== "undefined" && ngDevMode ? "SESSION_STORAGE_ENGINE" : "", {
  providedIn: "root",
  factory: () => false ? null : sessionStorage
});
export {
  LOCAL_STORAGE_ENGINE,
  NgxsStoragePlugin,
  NgxsStoragePluginModule,
  SESSION_STORAGE_ENGINE,
  STORAGE_ENGINE,
  StorageOption,
  withNgxsStoragePlugin,
  withStorageFeature
};
//# sourceMappingURL=@ngxs_storage-plugin.js.map
