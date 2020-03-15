(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["c"]; });




/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _shared_utils_root_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_5__);






let ConfigService = class ConfigService {
    constructor() {
        const filePath = `${_shared_utils_root_path__WEBPACK_IMPORTED_MODULE_2__[/* rootPath */ "a"]}/apps/api/development.env`;
        this.envConfig = _api_environments_environment__WEBPACK_IMPORTED_MODULE_1__[/* environment */ "a"].production
            ? process.env
            : dotenv__WEBPACK_IMPORTED_MODULE_4__["parse"](fs__WEBPACK_IMPORTED_MODULE_5__["readFileSync"](filePath));
    }
    get(key) {
        return this.envConfig[key];
    }
};
ConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ConfigService);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _water_reminder_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_auth_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _shared_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
var _a;








let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    find() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.find();
        });
    }
    findById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.findById(id);
        });
    }
    findByEmail(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.userModel.findOne({ email });
        });
    }
    findOrCreate(profile, provider) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { id: thirdPartyId, photos, name: { familyName, givenName }, emails: [{ value: email }] } = profile;
            const [photo] = photos || [];
            const user = {
                email,
                provider,
                thirdPartyId,
                imageUrl: (_a = photo) === null || _a === void 0 ? void 0 : _a.value,
                firstName: familyName,
                lastName: givenName
            };
            const [findUserError, existingUser] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_3__[/* catchPromiseError */ "a"])(this.userModel.findOne({ email }));
            if (findUserError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["InternalServerErrorException"]('Error when searching user has occurred.');
            }
            if (existingUser) {
                return existingUser;
            }
            const [createUserError, [createdUser]] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_3__[/* catchPromiseError */ "a"])(this.userModel.create([user]));
            if (createUserError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["InternalServerErrorException"]('Error when creating user has occurred.');
            }
            return createdUser;
        });
    }
    create(userSignUpData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const hashedPassword = yield Object(bcryptjs__WEBPACK_IMPORTED_MODULE_4__["hash"])(userSignUpData.password, _auth_auth_model__WEBPACK_IMPORTED_MODULE_6__[/* PASSWORD_HASH_COMPLEXITY */ "c"]);
            const [error, [user]] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_3__[/* catchPromiseError */ "a"])(this.userModel.create([
                Object.assign(Object.assign({}, userSignUpData), { password: hashedPassword })
            ]));
            if (error) {
                throw error;
            }
            return user;
        });
    }
    update(id, userData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [error, user] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_3__[/* catchPromiseError */ "a"])(this.userModel.findByIdAndUpdate(id, userData));
            if (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('User was not found');
            }
            return user;
        });
    }
    updatePushSubscription(id, pushSubscription) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [findByIdAndUpdateError, user] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_3__[/* catchPromiseError */ "a"])(this.userModel.findByIdAndUpdate(id, {
                pushSubscriptions: [pushSubscription]
            }));
            if (findByIdAndUpdateError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["BadRequestException"]('User was not found');
            }
            return user;
        });
    }
};
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_shared_collections__WEBPACK_IMPORTED_MODULE_7__[/* SchemaCollection */ "a"].User)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _a : Object])
], UserService);



/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchemaCollection; });
var SchemaCollection;
(function (SchemaCollection) {
    SchemaCollection["User"] = "User";
    SchemaCollection["Dose"] = "Dose";
    SchemaCollection["Notification"] = "Notification";
})(SchemaCollection || (SchemaCollection = {}));


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getZonedToUtcTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getUtcToZonedTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return calculateRemainingHours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return calculateRemainingDrinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return calculateNextDrinkTime; });
/* harmony import */ var _water_reminder_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _water_reminder_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_utils_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18);





// TODO: remove constant and store this data for each user
const DAILY_TARGET = 2000;
function getZonedToUtcTime(hours, timeZone) {
    return Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["zonedTimeToUtc"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addMinutes"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_1__[/* getNow */ "b"])()), hours * 60), timeZone);
}
function getUtcToZonedTime(date, timeZone) {
    return Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["zonedTimeToUtc"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["utcToZonedTime"])(date, timeZone), Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_1__[/* getTimeZone */ "c"])());
}
function calculateRemainingHours(user, now = Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_1__[/* getNow */ "b"])()) {
    const utcToZonedNow = Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["zonedTimeToUtc"])(Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_3__["utcToZonedTime"])(now, user.timeZone), Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_1__[/* getTimeZone */ "c"])());
    return (user.sleepTime - Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["getHours"])(utcToZonedNow) - Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["getMinutes"])(utcToZonedNow) / 60);
}
function calculateRemainingDrinks(drunkWaterAmount) {
    const remainingWaterAmount = Math.max(0, DAILY_TARGET - drunkWaterAmount);
    return Math.round(remainingWaterAmount / _water_reminder_api_interfaces__WEBPACK_IMPORTED_MODULE_0__[/* DoseVolume */ "a"].cup);
}
function calculateNextDrinkTime(lastDrinkTime, remainingHours, remainingDrinks) {
    const hoursPerDrink = remainingDrinks > 0 ? Math.max(1, remainingHours / remainingDrinks) : 0;
    const roundedHoursPerDrink = Math.max(1, Math.ceil(hoursPerDrink * 2) / 2);
    const halfOfHourGap = Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["differenceInMilliseconds"])(lastDrinkTime, Object(_shared_utils_date_fns__WEBPACK_IMPORTED_MODULE_4__[/* startOfHalfOfHour */ "c"])(lastDrinkTime)) /
        Object(_shared_utils_date_fns__WEBPACK_IMPORTED_MODULE_4__[/* getMillisecondsInHour */ "b"])();
    const closestDrinkTimeSpan = roundedHoursPerDrink - halfOfHourGap;
    const nextDrinkTimeSpan = closestDrinkTimeSpan >= 1
        ? closestDrinkTimeSpan
        : closestDrinkTimeSpan + 0.5;
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["addMilliseconds"])(lastDrinkTime, nextDrinkTimeSpan * Object(_shared_utils_date_fns__WEBPACK_IMPORTED_MODULE_4__[/* getMillisecondsInHour */ "b"])());
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _shared_utils_verify_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
var _a;




let AuthGuard = class AuthGuard {
    constructor(config) {
        this.config = config;
    }
    canActivate(context) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const request = context.switchToHttp().getRequest();
            const { jwt } = request.cookies;
            if (!jwt) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["UnauthorizedException"]();
            }
            const jwtVerified = yield Object(_shared_utils_verify_jwt__WEBPACK_IMPORTED_MODULE_2__[/* verifyJWT */ "a"])(jwt, this.config.get('jwtSecretKey'));
            if (!jwtVerified) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["UnauthorizedException"]();
            }
            return true;
        });
    }
};
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _config_config_service__WEBPACK_IMPORTED_MODULE_1__[/* ConfigService */ "a"] !== "undefined" && _config_config_service__WEBPACK_IMPORTED_MODULE_1__[/* ConfigService */ "a"]) === "function" ? _a : Object])
], AuthGuard);



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["d"]; });




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HydrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var date_fns_tz__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_tz__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reminder_reminder_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var _shared_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
var _a, _b;









let HydrationService = class HydrationService {
    constructor(doseModel, userService) {
        this.doseModel = doseModel;
        this.userService = userService;
    }
    find(userId, timeRange) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.doseModel.find(Object.assign({ userId }, (timeRange
                ? {
                    time: Object.assign({ $gte: timeRange.from }, (timeRange.to ? { $lt: timeRange.to } : {}))
                }
                : {})));
        });
    }
    getStatistics(userId, timeRange) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { timeZone } = yield this.userService.findById(userId);
            const monthAccumulator = new Map(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["eachDayOfInterval"])({
                start: Object(_reminder_reminder_model__WEBPACK_IMPORTED_MODULE_6__[/* getUtcToZonedTime */ "d"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["parseISO"])(timeRange.from), timeZone),
                end: Object(_reminder_reminder_model__WEBPACK_IMPORTED_MODULE_6__[/* getUtcToZonedTime */ "d"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["parseISO"])(timeRange.to), timeZone)
            }).map(date => [Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_4__["zonedTimeToUtc"])(date, timeZone).toISOString(), 0]));
            const doses = yield this.find(userId, timeRange);
            for (const dose of doses) {
                const time = Object(date_fns_tz__WEBPACK_IMPORTED_MODULE_4__["zonedTimeToUtc"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["startOfDay"])(dose.time), timeZone);
                monthAccumulator.set(time.toISOString(), monthAccumulator.get(time.toISOString()) + dose.volume);
            }
            return Array.from(monthAccumulator.entries()).map(([date, amount]) => ({
                date: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["parseISO"])(date),
                amount
            }));
        });
    }
    createDose(dose) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const createdDose = yield this.doseModel.create(dose);
            return createdDose.toJSON();
        });
    }
    deleteDose(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.doseModel.findByIdAndDelete(id);
        });
    }
};
HydrationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_shared_collections__WEBPACK_IMPORTED_MODULE_7__[/* SchemaCollection */ "a"].Dose)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _a : Object, typeof (_b = typeof _user_user_service__WEBPACK_IMPORTED_MODULE_8__[/* UserService */ "a"] !== "undefined" && _user_user_service__WEBPACK_IMPORTED_MODULE_8__[/* UserService */ "a"]) === "function" ? _b : Object])
], HydrationService);



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _water_reminder_api_interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14);
/* harmony import */ var _water_reminder_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var web_push__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51);
/* harmony import */ var web_push__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(web_push__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
/* harmony import */ var _shared_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);
var _a, _b;









let NotificationService = class NotificationService {
    constructor(notificationDocumentModel, config) {
        this.notificationDocumentModel = notificationDocumentModel;
        this.config = config;
    }
    findLast(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.notificationDocumentModel.findOne({ userId }, {}, { sort: { updatedAt: -1 } });
        });
    }
    update(id, updateData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.notificationDocumentModel.findByIdAndUpdate(id, updateData);
        });
    }
    create(notification) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const createdNotification = yield this.notificationDocumentModel.create(notification);
            return createdNotification.toJSON();
        });
    }
    notify(user, message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { _id: userId, pushSubscriptions, email } = user;
            const [pushSubscription] = pushSubscriptions;
            if (!pushSubscription) {
                console.log('subscription was not found for user', email);
                return;
            }
            const notification = yield this.create({
                userId,
                message,
                status: _water_reminder_api_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* NotificationStatus */ "c"].untouched
            });
            const payload = {
                message,
                notificationId: notification._id
            };
            const [error, sendNotificationResult] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_4__[/* catchPromiseError */ "a"])(web_push__WEBPACK_IMPORTED_MODULE_6__["sendNotification"](pushSubscription, JSON.stringify(payload), {
                vapidDetails: {
                    privateKey: this.config.get('vapidPrivateKey'),
                    publicKey: _water_reminder_api_interfaces__WEBPACK_IMPORTED_MODULE_3__[/* vapidPublicKey */ "d"],
                    subject: 'mailto:tar.vynnychuk@gmail.com'
                }
            }));
            if (!error) {
                console.log('error when sending push notification occurred', error);
                return;
            }
            console.log('send notification result', sendNotificationResult);
        });
    }
};
NotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])(_shared_collections__WEBPACK_IMPORTED_MODULE_8__[/* SchemaCollection */ "a"].Notification)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_5__["Model"]) === "function" ? _a : Object, typeof (_b = typeof _config_config_service__WEBPACK_IMPORTED_MODULE_7__[/* ConfigService */ "a"] !== "undefined" && _config_config_service__WEBPACK_IMPORTED_MODULE_7__[/* ConfigService */ "a"]) === "function" ? _b : Object])
], NotificationService);



/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("date-fns-tz");

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMillisecondsInHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return startOfHalfOfHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endOfHalfOfHour; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

function getMillisecondsInHour() {
    return 1000 * 60 * 60;
}
function startOfHalfOfHour(time) {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInMinutes"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["endOfHour"])(time), time) > 30
        ? Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfHour"])(time)
        : Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMinutes"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["startOfHour"])(time), 30);
}
function endOfHalfOfHour(time) {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["addMilliseconds"])(startOfHalfOfHour(time), getMillisecondsInHour() / 2);
}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);
/* harmony import */ var _user_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);







let UserModule = class UserModule {
};
UserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_config_config_module__WEBPACK_IMPORTED_MODULE_3__[/* ConfigModule */ "a"], _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([_user_schema__WEBPACK_IMPORTED_MODULE_5__[/* UserSchemaModel */ "a"]])],
        controllers: [_user_controller__WEBPACK_IMPORTED_MODULE_4__[/* UserController */ "a"]],
        providers: [_user_service__WEBPACK_IMPORTED_MODULE_6__[/* UserService */ "a"]],
        exports: [_user_service__WEBPACK_IMPORTED_MODULE_6__[/* UserService */ "a"]]
    })
], UserModule);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SocialProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return JWT_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JWT_COOKIE_MAX_AGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PASSWORD_HASH_COMPLEXITY; });
var SocialProvider;
(function (SocialProvider) {
    SocialProvider["google"] = "google";
})(SocialProvider || (SocialProvider = {}));
const JWT_COOKIE_NAME = 'jwt';
const JWT_COOKIE_MAX_AGE = 7 * 24 * 60 * 60 * 1000;
const PASSWORD_HASH_COMPLEXITY = 12;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
var _a;





let AuthService = class AuthService {
    constructor(config) {
        this.config = config;
    }
    setAuthorizationCookie(response, payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const jwt = yield this.generateJWT(payload);
            response.cookie(_auth_model__WEBPACK_IMPORTED_MODULE_1__[/* JWT_COOKIE_NAME */ "b"], jwt, { httpOnly: true, maxAge: _auth_model__WEBPACK_IMPORTED_MODULE_1__[/* JWT_COOKIE_MAX_AGE */ "a"] });
        });
    }
    clearAuthorizationCookie(response) {
        response.clearCookie(_auth_model__WEBPACK_IMPORTED_MODULE_1__[/* JWT_COOKIE_NAME */ "b"]);
    }
    generateJWT(payload) {
        try {
            return Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__["sign"])(payload, this.config.get('jwtSecretKey'));
        }
        catch (err) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["InternalServerErrorException"]('Error when generating JWT token has occurred: ', err.message);
        }
    }
};
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _config_config_service__WEBPACK_IMPORTED_MODULE_2__[/* ConfigService */ "a"] !== "undefined" && _config_config_service__WEBPACK_IMPORTED_MODULE_2__[/* ConfigService */ "a"]) === "function" ? _a : Object])
], AuthService);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export REMIND_TIME_INTERVAL */
/* unused harmony export REPEAT_REMIND_TIME_DURATION_DUE_TO_INACTIVITY */
/* unused harmony export REMIND_MESSAGE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hydration_hydration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _notification_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);
/* harmony import */ var _shared_utils_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _reminder_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
var _a, _b, _c;









const REMIND_TIME_INTERVAL = Object(_shared_utils_date_fns__WEBPACK_IMPORTED_MODULE_6__[/* getMillisecondsInHour */ "b"])() / 2;
const REPEAT_REMIND_TIME_DURATION_DUE_TO_INACTIVITY = Object(_shared_utils_date_fns__WEBPACK_IMPORTED_MODULE_6__[/* getMillisecondsInHour */ "b"])() * 4;
const REMIND_MESSAGE = 'Time to drink water';
let ReminderService = class ReminderService {
    constructor(userService, notificationService, hydrationService) {
        this.userService = userService;
        this.notificationService = notificationService;
        this.hydrationService = hydrationService;
    }
    runReminder() {
        const now = Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__[/* getNow */ "b"])();
        const startRemindingTimeSpan = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["differenceInMilliseconds"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["endOfHour"])(now), now);
        setTimeout(() => {
            setInterval(() => this.notify(), REMIND_TIME_INTERVAL);
        }, startRemindingTimeSpan);
    }
    notify() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const users = yield this.userService.find();
            for (const user of users) {
                const now = Object(_shared_utils_date_fns__WEBPACK_IMPORTED_MODULE_6__[/* startOfHalfOfHour */ "c"])(Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__[/* getNow */ "b"])());
                const { nextDrinkTime, sleepTime, awakeTime, timeZone } = user;
                const zonedAwakeTime = Object(_reminder_model__WEBPACK_IMPORTED_MODULE_8__[/* getZonedToUtcTime */ "e"])(awakeTime, timeZone);
                const zonedSleepTime = Object(_reminder_model__WEBPACK_IMPORTED_MODULE_8__[/* getZonedToUtcTime */ "e"])(sleepTime, timeZone);
                if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(now, zonedSleepTime)) {
                    yield this.updateNextDrinkTime(user.id, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(zonedAwakeTime, 1));
                    continue;
                }
                if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(now, zonedAwakeTime) || Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(now, nextDrinkTime)) {
                    yield this.notificationService.notify(user, REMIND_MESSAGE);
                }
            }
        });
    }
    calculateNextDrinkTime(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const now = Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__[/* getNow */ "b"])();
            const user = yield this.userService.findById(userId);
            const { awakeTime, timeZone } = user;
            const dayStart = Object(_reminder_model__WEBPACK_IMPORTED_MODULE_8__[/* getZonedToUtcTime */ "e"])(0, timeZone);
            const drunkDailyDoses = yield this.hydrationService.find(userId, {
                from: dayStart.toISOString()
            });
            const drunkDailyWaterAmount = drunkDailyDoses.reduce((sum, { volume }) => sum + volume, 0);
            const zonedAwakeTime = Object(_reminder_model__WEBPACK_IMPORTED_MODULE_8__[/* getZonedToUtcTime */ "e"])(awakeTime, timeZone);
            const lastDrunkDoseTime = drunkDailyDoses.length > 0 &&
                drunkDailyDoses[drunkDailyDoses.length - 1].time;
            const lastDrinkTime = lastDrunkDoseTime && Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isAfter"])(lastDrunkDoseTime, zonedAwakeTime)
                ? lastDrunkDoseTime
                : zonedAwakeTime;
            const remainingHours = Object(_reminder_model__WEBPACK_IMPORTED_MODULE_8__[/* calculateRemainingHours */ "c"])(user, now);
            const remainingDrinks = Object(_reminder_model__WEBPACK_IMPORTED_MODULE_8__[/* calculateRemainingDrinks */ "b"])(drunkDailyWaterAmount);
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isBefore"])(now, zonedAwakeTime)) {
                return zonedAwakeTime;
            }
            if (remainingDrinks === 0) {
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["addDays"])(zonedAwakeTime, 1);
            }
            const nextDrinkTime = Object(_reminder_model__WEBPACK_IMPORTED_MODULE_8__[/* calculateNextDrinkTime */ "a"])(lastDrinkTime, remainingHours, remainingDrinks);
            console.log('user:', user.email);
            console.log('drunkDailyDoses:', drunkDailyDoses);
            console.log('drunkDailyWaterAmount:', drunkDailyWaterAmount);
            console.log('lastDrinkTime:', lastDrinkTime);
            console.log('remainingHours:', remainingHours);
            console.log('remainingDrinks:', remainingDrinks);
            console.log('nextDrinkTime:', nextDrinkTime);
            if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isBefore"])(nextDrinkTime, now)) {
                return Object(_shared_utils_date_fns__WEBPACK_IMPORTED_MODULE_6__[/* endOfHalfOfHour */ "a"])(now);
            }
            return nextDrinkTime;
        });
    }
    updateNextDrinkTime(userId, nextDrinkTime) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.update(userId, { nextDrinkTime });
        });
    }
};
ReminderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _user_user_service__WEBPACK_IMPORTED_MODULE_7__[/* UserService */ "a"] !== "undefined" && _user_user_service__WEBPACK_IMPORTED_MODULE_7__[/* UserService */ "a"]) === "function" ? _a : Object, typeof (_b = typeof _notification_notification_service__WEBPACK_IMPORTED_MODULE_5__[/* NotificationService */ "a"] !== "undefined" && _notification_notification_service__WEBPACK_IMPORTED_MODULE_5__[/* NotificationService */ "a"]) === "function" ? _b : Object, typeof (_c = typeof _hydration_hydration_service__WEBPACK_IMPORTED_MODULE_4__[/* HydrationService */ "a"] !== "undefined" && _hydration_hydration_service__WEBPACK_IMPORTED_MODULE_4__[/* HydrationService */ "a"]) === "function" ? _c : Object])
], ReminderService);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);




const paths = path__WEBPACK_IMPORTED_MODULE_3__["resolve"](__dirname);
let ConfigModule = class ConfigModule {
};
ConfigModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Global"])(),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        providers: [_config_service__WEBPACK_IMPORTED_MODULE_1__[/* ConfigService */ "a"]],
        exports: [_config_service__WEBPACK_IMPORTED_MODULE_1__[/* ConfigService */ "a"]]
    })
], ConfigModule);



/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/passport");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PushSubscriptionKeysData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushSubscriptionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UpdateUserData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);
var _a;


class PushSubscriptionKeysData {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PushSubscriptionKeysData.prototype, "p256dh", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PushSubscriptionKeysData.prototype, "auth", void 0);
class PushSubscriptionData {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNotEmpty"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], PushSubscriptionData.prototype, "endpoint", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["ValidateNested"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", PushSubscriptionKeysData)
], PushSubscriptionData.prototype, "keys", void 0);
class UpdateUserData {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserData.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserData.prototype, "password", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserData.prototype, "firstName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserData.prototype, "lastName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], UpdateUserData.prototype, "awakeTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsNumber"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], UpdateUserData.prototype, "sleepTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsDateString"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UpdateUserData.prototype, "nextDrinkTime", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsString"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UpdateUserData.prototype, "timeZone", void 0);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignInData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserSignUpData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);


class UserSignInData {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsEmail"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserSignInData.prototype, "email", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MinLength"])(8),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserSignInData.prototype, "password", void 0);
class UserSignUpData extends UserSignInData {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MinLength"])(3),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserSignUpData.prototype, "firstName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["MinLength"])(3),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UserSignUpData.prototype, "lastName", void 0);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeRange; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_1__);


class TimeRange {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsDateString"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TimeRange.prototype, "from", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsOptional"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_1__["IsDateString"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TimeRange.prototype, "to", void 0);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
const environment = {
    production: true
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HydrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _dose_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _hydration_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var _hydration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(15);







let HydrationModule = class HydrationModule {
};
HydrationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([_dose_schema__WEBPACK_IMPORTED_MODULE_4__[/* DoseSchemaModel */ "a"]]), _user_user_module__WEBPACK_IMPORTED_MODULE_3__[/* UserModule */ "a"]],
        controllers: [_hydration_controller__WEBPACK_IMPORTED_MODULE_5__[/* HydrationController */ "a"]],
        providers: [_hydration_service__WEBPACK_IMPORTED_MODULE_6__[/* HydrationService */ "a"]],
        exports: [_hydration_service__WEBPACK_IMPORTED_MODULE_6__[/* HydrationService */ "a"]]
    })
], HydrationModule);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _notification_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50);
/* harmony import */ var _notification_schema__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16);






let NotificationModule = class NotificationModule {
};
NotificationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forFeature([_notification_schema__WEBPACK_IMPORTED_MODULE_4__[/* NotificationSchemaModel */ "a"]])],
        controllers: [_notification_controller__WEBPACK_IMPORTED_MODULE_3__[/* NotificationController */ "a"]],
        providers: [_notification_service__WEBPACK_IMPORTED_MODULE_5__[/* NotificationService */ "a"]],
        exports: [_notification_service__WEBPACK_IMPORTED_MODULE_5__[/* NotificationService */ "a"]]
    })
], NotificationModule);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateDoseData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _water_reminder_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);
var _a;



class CreateDoseData {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsInt"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _water_reminder_api_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* DoseVolume */ "a"] !== "undefined" && _water_reminder_api_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* DoseVolume */ "a"]) === "function" ? _a : Object)
], CreateDoseData.prototype, "volume", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsDateString"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], CreateDoseData.prototype, "time", void 0);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateNotificationData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _water_reminder_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_2__);



class UpdateNotificationData {
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["IsNumber"])(),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["Min"])(0),
    Object(class_validator__WEBPACK_IMPORTED_MODULE_2__["Max"])(_water_reminder_api_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* NOTIFICATION_STATUSES_COUNT */ "b"] - 1),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], UpdateNotificationData.prototype, "status", void 0);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return catchPromiseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTimeZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getNow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Utility function to make async/await code more readable.
 * (inspired by await-to-js library)
 */
function catchPromiseError(promise) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        try {
            return [undefined, yield promise];
        }
        catch (e) {
            return [e, undefined];
        }
    });
}
function getTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function getNow() {
    return new Date();
}


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NotificationStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NOTIFICATION_STATUSES_COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoseVolume; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return vapidPublicKey; });
var NotificationStatus;
(function (NotificationStatus) {
    NotificationStatus[NotificationStatus["closed"] = 0] = "closed";
    NotificationStatus[NotificationStatus["opened"] = 1] = "opened";
    NotificationStatus[NotificationStatus["untouched"] = 2] = "untouched";
})(NotificationStatus || (NotificationStatus = {}));
const NOTIFICATION_STATUSES_COUNT = Object.keys(NotificationStatus).length / 2;
var DoseVolume;
(function (DoseVolume) {
    DoseVolume[DoseVolume["cup"] = 200] = "cup";
})(DoseVolume || (DoseVolume = {}));
/**
 * Public VAPID key for push notifications.
 */
const vapidPublicKey = 'BO0o6h3SswzEA4tJ5VOn_GJQPy16gHmq5pRfawdpslYLd967NEpKhfnw65uQvo0rOoKGupkd2C86CEemNORY4WI';


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var _hydration_hydration_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(31);
/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32);
/* harmony import */ var _reminder_reminder_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(53);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);










let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__["Module"])({
        imports: [
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_5__[/* AuthModule */ "a"],
            _hydration_hydration_module__WEBPACK_IMPORTED_MODULE_6__[/* HydrationModule */ "a"],
            _reminder_reminder_module__WEBPACK_IMPORTED_MODULE_8__[/* ReminderModule */ "a"],
            _notification_notification_module__WEBPACK_IMPORTED_MODULE_7__[/* NotificationModule */ "a"],
            _user_user_module__WEBPACK_IMPORTED_MODULE_9__[/* UserModule */ "a"],
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forRootAsync({
                imports: [_config_config_module__WEBPACK_IMPORTED_MODULE_1__[/* ConfigModule */ "a"]],
                useFactory: (configService) => {
                    console.log('mongoConnectionString', configService.get('mongodbConnectionString'));
                    return {
                        uri: configService.get('mongodbConnectionString'),
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                    };
                },
                inject: [_config_config_service__WEBPACK_IMPORTED_MODULE_2__[/* ConfigService */ "a"]]
            })
        ]
    })
], AppModule);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootPath; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

const rootPath = path__WEBPACK_IMPORTED_MODULE_0__["resolve"](process.cwd());


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _auth_google_strategy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45);
/* harmony import */ var _auth_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(47);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);







let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Module"])({
        imports: [_config_config_module__WEBPACK_IMPORTED_MODULE_1__[/* ConfigModule */ "a"], _user_user_module__WEBPACK_IMPORTED_MODULE_3__[/* UserModule */ "a"]],
        controllers: [_auth_controller__WEBPACK_IMPORTED_MODULE_5__[/* AuthController */ "a"]],
        providers: [_auth_google_strategy__WEBPACK_IMPORTED_MODULE_4__[/* AuthGoogleStrategy */ "a"], _auth_service__WEBPACK_IMPORTED_MODULE_6__[/* AuthService */ "a"]]
    })
], AuthModule);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _water_reminder_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(25);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8);
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;









let UserController = class UserController {
    constructor(config, userService) {
        this.config = config;
        this.userService = userService;
    }
    getUser(req) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { jwt } = req.cookies;
            const { id } = Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__["decode"])(jwt);
            const [getUserError, user] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_3__[/* catchPromiseError */ "a"])(this.userService.findById(id));
            if (getUserError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["BadRequestException"]('User was not found');
            }
            return user;
        });
    }
    update(req, userData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { jwt } = req.cookies;
            const { id } = Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__["decode"])(jwt);
            const [updateUserError, user] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_3__[/* catchPromiseError */ "a"])(this.userService.update(id, userData));
            if (updateUserError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["InternalServerErrorException"]('Error when updating user has occurred');
            }
            return user;
        });
    }
    updatePushSubscription(req, pushSubscription) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { jwt } = req.cookies;
            const { id } = Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_5__["decode"])(jwt);
            const [updateUserError, user] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_3__[/* catchPromiseError */ "a"])(this.userService.updatePushSubscription(id, pushSubscription));
            if (updateUserError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["InternalServerErrorException"]('Error when updating user has occurred');
            }
            return user;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Get"])(),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["UseGuards"])(_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__[/* AuthGuard */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_4__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_4__["Request"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], UserController.prototype, "getUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Patch"])(),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["UseGuards"])(_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__[/* AuthGuard */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof express__WEBPACK_IMPORTED_MODULE_4__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_4__["Request"]) === "function" ? _c : Object, typeof (_d = typeof _user_model__WEBPACK_IMPORTED_MODULE_7__[/* UpdateUserData */ "b"] !== "undefined" && _user_model__WEBPACK_IMPORTED_MODULE_7__[/* UpdateUserData */ "b"]) === "function" ? _d : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UserController.prototype, "update", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Patch"])('update-push-subscription'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["UseGuards"])(_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__[/* AuthGuard */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_f = typeof express__WEBPACK_IMPORTED_MODULE_4__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_4__["Request"]) === "function" ? _f : Object, typeof (_g = typeof _user_model__WEBPACK_IMPORTED_MODULE_7__[/* PushSubscriptionData */ "a"] !== "undefined" && _user_model__WEBPACK_IMPORTED_MODULE_7__[/* PushSubscriptionData */ "a"]) === "function" ? _g : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], UserController.prototype, "updatePushSubscription", null);
UserController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Controller"])('user'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_j = typeof _config_config_service__WEBPACK_IMPORTED_MODULE_1__[/* ConfigService */ "a"] !== "undefined" && _config_config_service__WEBPACK_IMPORTED_MODULE_1__[/* ConfigService */ "a"]) === "function" ? _j : Object, typeof (_k = typeof _user_service__WEBPACK_IMPORTED_MODULE_8__[/* UserService */ "a"] !== "undefined" && _user_service__WEBPACK_IMPORTED_MODULE_8__[/* UserService */ "a"]) === "function" ? _k : Object])
], UserController);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return verifyJWT; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const verifyJWT = (token, secretKey) => {
    return new Promise(resolve => {
        Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__["verify"])(token, secretKey, error => {
            if (error) {
                return resolve(false);
            }
            resolve(true);
        });
    });
};


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserSchema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSchemaModel; });
/* harmony import */ var _shared_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


const userSchemaDefinition = {
    email: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].String,
        required: true
    },
    password: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].String,
        required: false
    },
    firstName: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].String,
        required: true
    },
    lastName: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].String,
        required: false
    },
    imageUrl: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].String,
        required: false
    },
    provider: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].String,
        required: false
    },
    thirdPartyId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].String,
        required: false
    },
    pushSubscriptions: [
        {
            endpoint: {
                type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].String
            },
            keys: {
                auth: {
                    type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].String
                },
                p256dh: {
                    type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].String
                }
            }
        }
    ],
    awakeTime: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].Number,
        required: false
    },
    sleepTime: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].Number,
        required: false
    },
    nextDrinkTime: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].Date,
        required: false
    },
    timeZone: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].String,
        required: false
    }
};
const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"](userSchemaDefinition, {
    versionKey: false
});
const UserSchemaModel = {
    name: _shared_collections__WEBPACK_IMPORTED_MODULE_0__[/* SchemaCollection */ "a"].User,
    schema: UserSchema
};


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGoogleStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _water_reminder_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3);
/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46);
/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(passport_google_oauth20__WEBPACK_IMPORTED_MODULE_8__);
var _a, _b, _c;









let AuthGoogleStrategy = class AuthGoogleStrategy extends Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_6__["PassportStrategy"])(passport_google_oauth20__WEBPACK_IMPORTED_MODULE_8__["Strategy"], 'google') {
    constructor(authService, userService, config) {
        super({
            clientID: config.get('googleClientId'),
            clientSecret: config.get('googleClientSecret'),
            callbackURL: `${config.get('clientHost')}/api/auth/login/google/callback`,
            passReqToCallback: true,
            scope: ['profile', 'email']
        });
        this.authService = authService;
        this.userService = userService;
        this.config = config;
    }
    validate(request, accessToken, refreshToken, profile, done) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [error, user] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_7__[/* catchPromiseError */ "a"])(this.userService.findOrCreate(profile, _auth_model__WEBPACK_IMPORTED_MODULE_1__[/* SocialProvider */ "d"].google));
            if (error) {
                return done(error, null);
            }
            done(null, { id: user.id });
        });
    }
};
AuthGoogleStrategy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _auth_service__WEBPACK_IMPORTED_MODULE_2__[/* AuthService */ "a"] !== "undefined" && _auth_service__WEBPACK_IMPORTED_MODULE_2__[/* AuthService */ "a"]) === "function" ? _a : Object, typeof (_b = typeof _user_user_service__WEBPACK_IMPORTED_MODULE_3__[/* UserService */ "a"] !== "undefined" && _user_user_service__WEBPACK_IMPORTED_MODULE_3__[/* UserService */ "a"]) === "function" ? _b : Object, typeof (_c = typeof _config_config_service__WEBPACK_IMPORTED_MODULE_4__[/* ConfigService */ "a"] !== "undefined" && _config_config_service__WEBPACK_IMPORTED_MODULE_4__[/* ConfigService */ "a"]) === "function" ? _c : Object])
], AuthGoogleStrategy);



/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("passport-google-oauth20");

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var _nestjs_passport__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _water_reminder_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(30);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8);
/* harmony import */ var _auth_validate_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(26);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(21);
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;










let AuthController = class AuthController {
    constructor(config, userService, authService) {
        this.config = config;
        this.userService = userService;
        this.authService = authService;
    }
    signUp(response, userSignUpData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [getUserError, existingUser] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_4__[/* catchPromiseError */ "a"])(this.userService.findByEmail(userSignUpData.email));
            if (getUserError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["InternalServerErrorException"]('Error when fetching user has occurred');
            }
            if (existingUser) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["BadRequestException"]('User already exists');
            }
            const [createUserError, user] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_4__[/* catchPromiseError */ "a"])(this.userService.create(userSignUpData));
            if (createUserError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["InternalServerErrorException"]('Error when creating user has occurred');
            }
            yield this.authService.setAuthorizationCookie(response, { id: user._id });
            return response.json(user);
        });
    }
    login(response, { email, password }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [getUserError, user] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_4__[/* catchPromiseError */ "a"])(this.userService.findByEmail(email));
            if (getUserError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["InternalServerErrorException"]('Error when finding user has occurred');
            }
            if (!user) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["BadRequestException"]('User was not found');
            }
            const passwordIsValid = yield Object(bcryptjs__WEBPACK_IMPORTED_MODULE_5__["compare"])(password, user.password || '');
            if (!passwordIsValid) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_2__["BadRequestException"]('Password is not valid');
            }
            yield this.authService.setAuthorizationCookie(response, { id: user._id });
            return response.json(user);
        });
    }
    /**
     * Initiate Google OAuth2 login flow
     */
    googleLogin() { }
    /**
     * Handle Google authentication callback
     */
    googleLoginCallback({ user: { id } }, response) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (id) {
                yield this.authService.setAuthorizationCookie(response, { id });
                response.redirect(`${this.config.get('clientHost')}`);
            }
            else {
                response.redirect(`${this.config.get('clientHost')}/login/failed`);
            }
        });
    }
    logout(response) {
        this.authService.clearAuthorizationCookie(response);
        response.json({ message: 'Successfully logged out' });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Post"])('sign-up'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Res"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_6__["Response"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_6__["Response"]) === "function" ? _a : Object, typeof (_b = typeof _auth_validate_model__WEBPACK_IMPORTED_MODULE_8__[/* UserSignUpData */ "b"] !== "undefined" && _auth_validate_model__WEBPACK_IMPORTED_MODULE_8__[/* UserSignUpData */ "b"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthController.prototype, "signUp", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Post"])('login'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Res"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof express__WEBPACK_IMPORTED_MODULE_6__["Response"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_6__["Response"]) === "function" ? _d : Object, typeof (_e = typeof _auth_validate_model__WEBPACK_IMPORTED_MODULE_8__[/* UserSignInData */ "a"] !== "undefined" && _auth_validate_model__WEBPACK_IMPORTED_MODULE_8__[/* UserSignInData */ "a"]) === "function" ? _e : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], AuthController.prototype, "login", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Get"])('login/google'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"])('google')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AuthController.prototype, "googleLogin", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Get"])('login/google/callback'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["UseGuards"])(Object(_nestjs_passport__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"])('google')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Res"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof express__WEBPACK_IMPORTED_MODULE_6__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_6__["Request"]) === "function" ? _g : Object, typeof (_h = typeof express__WEBPACK_IMPORTED_MODULE_6__["Response"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_6__["Response"]) === "function" ? _h : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AuthController.prototype, "googleLoginCallback", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Post"])('logout'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Res"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_k = typeof express__WEBPACK_IMPORTED_MODULE_6__["Response"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_6__["Response"]) === "function" ? _k : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AuthController.prototype, "logout", null);
AuthController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_2__["Controller"])('auth'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_l = typeof _config_config_service__WEBPACK_IMPORTED_MODULE_1__[/* ConfigService */ "a"] !== "undefined" && _config_config_service__WEBPACK_IMPORTED_MODULE_1__[/* ConfigService */ "a"]) === "function" ? _l : Object, typeof (_m = typeof _user_user_service__WEBPACK_IMPORTED_MODULE_7__[/* UserService */ "a"] !== "undefined" && _user_user_service__WEBPACK_IMPORTED_MODULE_7__[/* UserService */ "a"]) === "function" ? _m : Object, typeof (_o = typeof _auth_service__WEBPACK_IMPORTED_MODULE_9__[/* AuthService */ "a"] !== "undefined" && _auth_service__WEBPACK_IMPORTED_MODULE_9__[/* AuthService */ "a"]) === "function" ? _o : Object])
], AuthController);



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DoseSchema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoseSchemaModel; });
/* harmony import */ var _shared_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);


const doseSchemaDefinition = {
    time: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].Date,
        required: true
    },
    volume: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].Number,
        required: true
    },
    userId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_1__["SchemaTypes"].ObjectId,
        ref: _shared_collections__WEBPACK_IMPORTED_MODULE_0__[/* SchemaCollection */ "a"].User
    }
};
const DoseSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__["Schema"](doseSchemaDefinition, {
    versionKey: false
});
const DoseSchemaModel = {
    name: _shared_collections__WEBPACK_IMPORTED_MODULE_0__[/* SchemaCollection */ "a"].Dose,
    schema: DoseSchema
};


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HydrationController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _dose_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33);
/* harmony import */ var _hydration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(15);
/* harmony import */ var _time_range_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27);
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;










let HydrationController = class HydrationController {
    constructor(config, hydrationService) {
        this.config = config;
        this.hydrationService = hydrationService;
    }
    getDoses(req, timeRange) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { jwt } = req.cookies;
            const { id } = Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__["decode"])(jwt);
            const [getDosesError, doses] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__[/* catchPromiseError */ "a"])(this.hydrationService.find(id, timeRange));
            if (getDosesError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["ConflictException"]();
            }
            return doses;
        });
    }
    getStatistics(req, timeRange) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { jwt } = req.cookies;
            const { id } = Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__["decode"])(jwt);
            const [error, statistics] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__[/* catchPromiseError */ "a"])(this.hydrationService.getStatistics(id, timeRange));
            if (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["ConflictException"]();
            }
            return statistics;
        });
    }
    createDose(req, { volume, time }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { jwt } = req.cookies;
            const { id } = Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__["decode"])(jwt);
            const [createDoseError, dose] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__[/* catchPromiseError */ "a"])(this.hydrationService.createDose({ userId: id, volume, time }));
            if (createDoseError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["InternalServerErrorException"]();
            }
            return dose;
        });
    }
    deleteDose(req, doseId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [deleteDoseError] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__[/* catchPromiseError */ "a"])(this.hydrationService.deleteDose(doseId));
            if (deleteDoseError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["ConflictException"]();
            }
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('doses'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_3__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_3__["Request"]) === "function" ? _a : Object, typeof (_b = typeof _time_range_model__WEBPACK_IMPORTED_MODULE_9__[/* TimeRange */ "a"] !== "undefined" && _time_range_model__WEBPACK_IMPORTED_MODULE_9__[/* TimeRange */ "a"]) === "function" ? _b : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], HydrationController.prototype, "getDoses", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('statistics'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Query"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof express__WEBPACK_IMPORTED_MODULE_3__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_3__["Request"]) === "function" ? _d : Object, typeof (_e = typeof _time_range_model__WEBPACK_IMPORTED_MODULE_9__[/* TimeRange */ "a"] !== "undefined" && _time_range_model__WEBPACK_IMPORTED_MODULE_9__[/* TimeRange */ "a"]) === "function" ? _e : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], HydrationController.prototype, "getStatistics", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('doses'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof express__WEBPACK_IMPORTED_MODULE_3__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_3__["Request"]) === "function" ? _g : Object, typeof (_h = typeof _dose_model__WEBPACK_IMPORTED_MODULE_7__[/* CreateDoseData */ "a"] !== "undefined" && _dose_model__WEBPACK_IMPORTED_MODULE_7__[/* CreateDoseData */ "a"]) === "function" ? _h : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], HydrationController.prototype, "createDose", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Delete"])('doses/:id'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_k = typeof express__WEBPACK_IMPORTED_MODULE_3__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_3__["Request"]) === "function" ? _k : Object, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], HydrationController.prototype, "deleteDose", null);
HydrationController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('hydration'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__[/* AuthGuard */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_m = typeof _config_config_service__WEBPACK_IMPORTED_MODULE_6__[/* ConfigService */ "a"] !== "undefined" && _config_config_service__WEBPACK_IMPORTED_MODULE_6__[/* ConfigService */ "a"]) === "function" ? _m : Object, typeof (_o = typeof _hydration_service__WEBPACK_IMPORTED_MODULE_8__[/* HydrationService */ "a"] !== "undefined" && _hydration_service__WEBPACK_IMPORTED_MODULE_8__[/* HydrationService */ "a"]) === "function" ? _o : Object])
], HydrationController);



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _notification_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony import */ var _notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
var _a, _b, _c, _d;







let NotificationController = class NotificationController {
    constructor(config, notificationService) {
        this.config = config;
        this.notificationService = notificationService;
    }
    update(id, notificationData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [updateNotificationError, notification] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__[/* catchPromiseError */ "a"])(this.notificationService.update(id, notificationData));
            if (updateNotificationError) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["InternalServerErrorException"]('Error when updating notification has occurred');
            }
            return notification;
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Patch"])('/:id'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__[/* AuthGuard */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('id')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, typeof (_a = typeof _notification_model__WEBPACK_IMPORTED_MODULE_5__[/* UpdateNotificationData */ "a"] !== "undefined" && _notification_model__WEBPACK_IMPORTED_MODULE_5__[/* UpdateNotificationData */ "a"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], NotificationController.prototype, "update", null);
NotificationController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('notification'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _config_config_service__WEBPACK_IMPORTED_MODULE_4__[/* ConfigService */ "a"] !== "undefined" && _config_config_service__WEBPACK_IMPORTED_MODULE_4__[/* ConfigService */ "a"]) === "function" ? _c : Object, typeof (_d = typeof _notification_service__WEBPACK_IMPORTED_MODULE_6__[/* NotificationService */ "a"] !== "undefined" && _notification_service__WEBPACK_IMPORTED_MODULE_6__[/* NotificationService */ "a"]) === "function" ? _d : Object])
], NotificationController);



/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("web-push");

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificationSchema */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationSchemaModel; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);


const notificationSchemaDefinition = {
    message: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__["SchemaTypes"].String,
        required: true
    },
    status: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__["SchemaTypes"].Number,
        required: true
    },
    userId: {
        type: mongoose__WEBPACK_IMPORTED_MODULE_0__["SchemaTypes"].ObjectId,
        ref: _shared_collections__WEBPACK_IMPORTED_MODULE_1__[/* SchemaCollection */ "a"].User
    }
};
const NotificationSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"](notificationSchemaDefinition, {
    versionKey: false,
    timestamps: true
});
const NotificationSchemaModel = {
    name: _shared_collections__WEBPACK_IMPORTED_MODULE_1__[/* SchemaCollection */ "a"].Notification,
    schema: NotificationSchema
};


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hydration_hydration_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _notification_notification_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _reminder_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54);
/* harmony import */ var _reminder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);







let ReminderModule = class ReminderModule {
};
ReminderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_user_user_module__WEBPACK_IMPORTED_MODULE_4__[/* UserModule */ "a"], _hydration_hydration_module__WEBPACK_IMPORTED_MODULE_2__[/* HydrationModule */ "a"], _notification_notification_module__WEBPACK_IMPORTED_MODULE_3__[/* NotificationModule */ "a"]],
        providers: [_reminder_service__WEBPACK_IMPORTED_MODULE_6__[/* ReminderService */ "a"]],
        controllers: [_reminder_controller__WEBPACK_IMPORTED_MODULE_5__[/* ReminderController */ "a"]]
    })
], ReminderModule);



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReminderController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var _reminder_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
var _a, _b, _c, _d;








let ReminderController = class ReminderController {
    constructor(config, reminderService) {
        this.config = config;
        this.reminderService = reminderService;
    }
    updateNextDrinkTime(req) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { jwt } = req.cookies;
            const { id } = Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__["decode"])(jwt);
            const nextDrinkTime = yield this.reminderService.calculateNextDrinkTime(id);
            const [error] = yield Object(_water_reminder_utils__WEBPACK_IMPORTED_MODULE_2__[/* catchPromiseError */ "a"])(this.reminderService.updateNextDrinkTime(id, nextDrinkTime));
            if (error) {
                throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["InternalServerErrorException"]('Error when updating next drink time has occurred');
            }
            return { nextDrinkTime };
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Patch"])('/next-drink-time'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Req"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof express__WEBPACK_IMPORTED_MODULE_3__["Request"] !== "undefined" && express__WEBPACK_IMPORTED_MODULE_3__["Request"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ReminderController.prototype, "updateNextDrinkTime", null);
ReminderController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('reminder'),
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["UseGuards"])(_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__[/* AuthGuard */ "a"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _config_config_service__WEBPACK_IMPORTED_MODULE_6__[/* ConfigService */ "a"] !== "undefined" && _config_config_service__WEBPACK_IMPORTED_MODULE_6__[/* ConfigService */ "a"]) === "function" ? _c : Object, typeof (_d = typeof _reminder_service__WEBPACK_IMPORTED_MODULE_7__[/* ReminderService */ "a"] !== "undefined" && _reminder_service__WEBPACK_IMPORTED_MODULE_7__[/* ReminderService */ "a"]) === "function" ? _d : Object])
], ReminderController);



/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _api_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(55);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_reminder_reminder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(22);







function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const globalPrefix = 'api';
        const port = process.env.apiPort || _api_environments_environment__WEBPACK_IMPORTED_MODULE_2__[/* environment */ "a"].apiPort;
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_4__["NestFactory"].create(_modules_app_module__WEBPACK_IMPORTED_MODULE_1__[/* AppModule */ "a"], { cors: true });
        const reminderService = app.get(_modules_reminder_reminder_service__WEBPACK_IMPORTED_MODULE_6__[/* ReminderService */ "a"]);
        if (process.env.RUN_REMINDER) {
            reminderService.runReminder();
        }
        app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_5__());
        app.useGlobalPipes(new _nestjs_common__WEBPACK_IMPORTED_MODULE_3__["ValidationPipe"]());
        app.setGlobalPrefix(globalPrefix);
        yield app.listen(port);
    });
}
bootstrap();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map