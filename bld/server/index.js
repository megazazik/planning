module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entries/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/page/index.ts":
/*!*******************************!*\
  !*** ./src/app/page/index.ts ***!
  \*******************************/
/*! exports provided: SPRINTS_KEY, reducer, actions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPRINTS_KEY", function() { return SPRINTS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! encaps */ "encaps");
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(encaps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sprint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sprint */ "./src/app/sprint/index.ts");
/* harmony import */ var _sprints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sprints */ "./src/app/sprints/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;



var SPRINTS_KEY = 'sprints';
var reducer = (_a = Object(encaps__WEBPACK_IMPORTED_MODULE_0__["build"])()
    .child('sprint', _sprint__WEBPACK_IMPORTED_MODULE_1__["default"])
    .child(SPRINTS_KEY, _sprints__WEBPACK_IMPORTED_MODULE_2__["default"])
    .action({
    replace: function (state, action) { return (__assign({}, state, { sprint: action.payload || _sprint__WEBPACK_IMPORTED_MODULE_1__["default"].reducer() })); }
}), _a.reducer), actions = _a.actions;


/***/ }),

/***/ "./src/app/people/index.ts":
/*!*********************************!*\
  !*** ./src/app/people/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! encaps */ "encaps");
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(encaps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../person */ "./src/app/person/index.ts");


var peopleModelBase = Object(encaps__WEBPACK_IMPORTED_MODULE_0__["createMap"])(_person__WEBPACK_IMPORTED_MODULE_1__["default"]);
var peopleModel = peopleModelBase
    .action({
    create: function (people) {
        var newKey = Object.keys(people.items).map(Number).sort(function (a, b) { return b - a; })[0] + 1;
        return peopleModelBase.reducer(people, peopleModelBase.actions.add(isNaN(newKey) ? '0' : newKey + ''));
        ;
    },
});
/* harmony default export */ __webpack_exports__["default"] = (peopleModel);


/***/ }),

/***/ "./src/app/person/index.ts":
/*!*********************************!*\
  !*** ./src/app/person/index.ts ***!
  \*********************************/
/*! exports provided: reducer, actions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! encaps */ "encaps");
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(encaps__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var model = Object(encaps__WEBPACK_IMPORTED_MODULE_0__["build"])()
    .setInitState(function () { return ({
    name: '',
}); })
    .action({
    setName: function (person, action) { return (__assign({}, person, { name: action.payload })); },
});
var reducer = model.reducer, actions = model.actions;
/* harmony default export */ __webpack_exports__["default"] = (model);


/***/ }),

/***/ "./src/app/sprint/index.ts":
/*!*********************************!*\
  !*** ./src/app/sprint/index.ts ***!
  \*********************************/
/*! exports provided: model, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "model", function() { return model; });
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! encaps */ "encaps");
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(encaps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskList */ "./src/app/taskList/index.ts");
/* harmony import */ var _subTaskList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subTaskList */ "./src/app/subTaskList/index.ts");
/* harmony import */ var _people__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../people */ "./src/app/people/index.ts");




var model = Object(encaps__WEBPACK_IMPORTED_MODULE_0__["build"])()
    .child('tasks', _taskList__WEBPACK_IMPORTED_MODULE_1__["default"])
    .child('subTasks', _subTaskList__WEBPACK_IMPORTED_MODULE_2__["default"])
    .child('people', _people__WEBPACK_IMPORTED_MODULE_3__["default"])
    .subActions({
    tasks: {
        remove: function (payload, actions) { return actions.subTasks.removeByTask(payload); }
    },
    people: {
        remove: function (payload, actions) { return actions.subTasks.cleanPerson(payload); }
    }
});
/* harmony default export */ __webpack_exports__["default"] = (model);


/***/ }),

/***/ "./src/app/sprints/index.ts":
/*!**********************************!*\
  !*** ./src/app/sprints/index.ts ***!
  \**********************************/
/*! exports provided: SET_CURRENT, LOADED, ADD, REMOVE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT", function() { return SET_CURRENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADED", function() { return LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE", function() { return REMOVE; });
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! encaps */ "encaps");
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(encaps__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;

var SET_CURRENT = 'setCurrent', LOADED = 'loaded', ADD = 'add', REMOVE = 'remove';
var model = Object(encaps__WEBPACK_IMPORTED_MODULE_0__["build"])()
    .setInitState(function () { return ({
    items: [],
    current: null,
    loading: false,
}); })
    .action((_a = {},
    _a[ADD] = function (state, action) { return (__assign({}, state, { items: state.items.concat([action.payload]) })); },
    _a[REMOVE] = function (state, action) { return (__assign({}, state, { items: state.items.filter(function (planning) { return (planning !== action.payload); }) })); },
    _a[SET_CURRENT] = function (state, action) { return (__assign({}, state, { current: action.payload || null })); },
    _a[LOADED] = function (state, action) { return (__assign({}, state, { loading: action.payload })); },
    _a));
/* harmony default export */ __webpack_exports__["default"] = (model);


/***/ }),

/***/ "./src/app/subTask/index.ts":
/*!**********************************!*\
  !*** ./src/app/subTask/index.ts ***!
  \**********************************/
/*! exports provided: reducer, actions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! encaps */ "encaps");
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(encaps__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var model = Object(encaps__WEBPACK_IMPORTED_MODULE_0__["build"])()
    .setInitState(function () { return ({
    id: '',
    title: '',
    taskId: null,
    duration: 1,
    start: 1,
}); })
    .action({
    setId: function (task, action) { return (__assign({}, task, { id: action.payload })); },
    setTitle: function (task, action) { return (__assign({}, task, { title: action.payload })); },
    setStart: function (task, action) { return (__assign({}, task, { start: action.payload })); },
    setDuration: function (task, action) { return (__assign({}, task, { duration: action.payload })); },
    setPerson: function (task, action) { return (__assign({}, task, { personId: action.payload })); },
});
var reducer = model.reducer, actions = model.actions;
/* harmony default export */ __webpack_exports__["default"] = (model);


/***/ }),

/***/ "./src/app/subTaskList/index.ts":
/*!**************************************!*\
  !*** ./src/app/subTaskList/index.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! encaps */ "encaps");
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(encaps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _subTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subTask */ "./src/app/subTask/index.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


var subTasksBase = Object(encaps__WEBPACK_IMPORTED_MODULE_0__["createMap"])(_subTask__WEBPACK_IMPORTED_MODULE_1__["default"]);
var subTasks = subTasksBase
    .action({
    create: function (subTasks, action) {
        var newKeyNumber = Object.keys(subTasks.items).map(Number).sort(function (a, b) { return b - a; })[0] + 1;
        var newKey = isNaN(newKeyNumber) ? '0' : newKeyNumber + '';
        var newSubTasks = subTasksBase.reducer(subTasks, subTasksBase.actions.add(newKey));
        newSubTasks.items[newKey].taskId = action.payload;
        return newSubTasks;
    },
    removeByTask: function (subTasks, action) {
        return __assign({}, subTasks, { items: Object.keys(subTasks.items).reduce(function (newTasks, subTaskId) {
                var _a;
                return subTasks.items[subTaskId].taskId === action.payload
                    ? newTasks
                    : __assign({}, newTasks, (_a = {}, _a[subTaskId] = subTasks.items[subTaskId], _a));
            }, {}) });
    },
    cleanPerson: function (subTasks, action) {
        return __assign({}, subTasks, { items: Object.keys(subTasks.items).reduce(function (newTasks, subTaskId) {
                var _a;
                return (__assign({}, newTasks, (_a = {}, _a[subTaskId] = subTasks.items[subTaskId].personId === action.payload
                    ? __assign({}, subTasks.items[subTaskId], { personId: null }) : subTasks.items[subTaskId], _a)));
            }, {}) });
    },
});
/* harmony default export */ __webpack_exports__["default"] = (subTasks);


/***/ }),

/***/ "./src/app/task/index.ts":
/*!*******************************!*\
  !*** ./src/app/task/index.ts ***!
  \*******************************/
/*! exports provided: reducer, actions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! encaps */ "encaps");
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(encaps__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var model = Object(encaps__WEBPACK_IMPORTED_MODULE_0__["build"])()
    .setInitState(function () { return ({
    id: '',
    title: ''
}); })
    .action({
    setId: function (task, action) { return (__assign({}, task, { id: action.payload })); },
    setTitle: function (task, action) { return (__assign({}, task, { title: action.payload })); },
});
var reducer = model.reducer, actions = model.actions;
/* harmony default export */ __webpack_exports__["default"] = (model);


/***/ }),

/***/ "./src/app/taskList/index.ts":
/*!***********************************!*\
  !*** ./src/app/taskList/index.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! encaps */ "encaps");
/* harmony import */ var encaps__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(encaps__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task */ "./src/app/task/index.ts");


var tasksModelBase = Object(encaps__WEBPACK_IMPORTED_MODULE_0__["createMap"])(_task__WEBPACK_IMPORTED_MODULE_1__["default"]);
var tasksModel = tasksModelBase
    .action({
    create: function (tasks) {
        var newKey = Object.keys(tasks.items).map(Number).sort(function (a, b) { return b - a; })[0] + 1;
        return tasksModelBase.reducer(tasks, tasksModelBase.actions.add(isNaN(newKey) ? '0' : newKey + ''));
        ;
    },
});
/* harmony default export */ __webpack_exports__["default"] = (tasksModel);


/***/ }),

/***/ "./src/entries/server/index.ts":
/*!*************************************!*\
  !*** ./src/entries/server/index.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../server */ "./src/server/index.ts");
/* harmony import */ var minimist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! minimist */ "minimist");
/* harmony import */ var minimist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(minimist__WEBPACK_IMPORTED_MODULE_1__);


var params = minimist__WEBPACK_IMPORTED_MODULE_1___default()(process.argv.slice(2));
Object(_server__WEBPACK_IMPORTED_MODULE_0__["default"])({ port: params.port });


/***/ }),

/***/ "./src/server/getMarkUp.ts":
/*!*********************************!*\
  !*** ./src/server/getMarkUp.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (data) {
    return "\n<!doctype html>\n<html>\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>\u041F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435</title>\n\t\t<link rel=\"stylesheet\" href=\"/static/bundle.css\" />\n\t\t<link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n\t\t<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\n\t\t<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script>\n\t\t<script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>\n\t</head>\n\t<body>\n\t\t<div id=\"content\"></div>\n\t\t<script>\n\t\t\twindow.__INITIAL_STATE__ = " + JSON.stringify(data) + ";\n\t\t</script>\n\t\t<script src=\"/static/bundle.js\"></script>\n\t</body>\n</html>";
});


/***/ }),

/***/ "./src/server/index.ts":
/*!*****************************!*\
  !*** ./src/server/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return startServer; });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getMarkUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMarkUp */ "./src/server/getMarkUp.ts");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage */ "./src/server/storage/index.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ "./src/server/routes.ts");
/* harmony import */ var _app_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/page */ "./src/app/page/index.ts");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_7__);








function startServer(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.app, app = _c === void 0 ? express__WEBPACK_IMPORTED_MODULE_0___default()() : _c, _d = _b.port, port = _d === void 0 ? 8080 : _d;
    /** @todo разобраться с относительными путями, если нужно */
    app.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_3__["resolve"](__dirname, '../public/')));
    app.use(morgan__WEBPACK_IMPORTED_MODULE_2___default()('tiny'));
    app.use(Object(body_parser__WEBPACK_IMPORTED_MODULE_7__["urlencoded"])({ extended: false }));
    app.use(Object(body_parser__WEBPACK_IMPORTED_MODULE_7__["json"])());
    app.post(_routes__WEBPACK_IMPORTED_MODULE_5__["PLANNING_API_PATH"], function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        if (!req.body.key || !req.body.data) {
            res.status(422);
            res.send(JSON.stringify({ status: 'no_params' }));
            return;
        }
        _storage__WEBPACK_IMPORTED_MODULE_4__["save"](req.body.key, req.body.data)
            .then(function () { res.send(JSON.stringify({ status: 'ok' })); })
            .catch(function (message) {
            res.status(500);
            res.send(JSON.stringify({ status: 'error', message: message }));
        });
    });
    app.get(_routes__WEBPACK_IMPORTED_MODULE_5__["PLANNING_API_PATH"], function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        if (!req.query.key) {
            _storage__WEBPACK_IMPORTED_MODULE_4__["getAll"]()
                .then(function (data) { res.send(JSON.stringify(data)); })
                .catch(function (message) {
                res.status(500);
                res.send(JSON.stringify({ status: 'error', message: message }));
            });
            return;
        }
        _storage__WEBPACK_IMPORTED_MODULE_4__["get"](req.query.key)
            .then(function (data) { res.send(JSON.stringify(data)); })
            .catch(function (message) {
            res.status(500);
            res.send(JSON.stringify({ status: 'error', message: message }));
        });
    });
    app.delete(_routes__WEBPACK_IMPORTED_MODULE_5__["PLANNING_API_PATH"], function (req, res) {
        res.setHeader("Content-Type", "application/json; charset=utf-8");
        if (!req.query.key) {
            res.status(422);
            res.send(JSON.stringify({ status: 'no_params' }));
            return;
        }
        _storage__WEBPACK_IMPORTED_MODULE_4__["deleteSpring"](req.query.key)
            .then(function () { res.send(JSON.stringify({ status: 'ok' })); })
            .catch(function (message) {
            res.status(500);
            res.send(JSON.stringify({ status: 'error', message: message }));
        });
    });
    app.get('/', function (_, res) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        _storage__WEBPACK_IMPORTED_MODULE_4__["getAll"]()
            .then(function (data) {
            var initState = Object(_app_page__WEBPACK_IMPORTED_MODULE_6__["reducer"])();
            initState.sprints = {
                items: data,
                current: null,
                loading: false,
            };
            res.send(Object(_getMarkUp__WEBPACK_IMPORTED_MODULE_1__["default"])(initState));
        })
            .catch(function () {
            res.send(Object(_getMarkUp__WEBPACK_IMPORTED_MODULE_1__["default"])({}));
        });
    });
    app.use(function (req, res) {
        res.status(404).send('Page not found!');
        console.log('Url not found: ' + req.url);
    });
    app.use(function (err, req, res, next) {
        console.log(err.stack);
        res.status(500).send('Something broke!');
    });
    app.listen(port, function () {
        console.log("The application started on port " + port + ".");
    });
}


/***/ }),

/***/ "./src/server/routes.ts":
/*!******************************!*\
  !*** ./src/server/routes.ts ***!
  \******************************/
/*! exports provided: PLANNING_API_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLANNING_API_PATH", function() { return PLANNING_API_PATH; });
var PLANNING_API_PATH = '/plannings';


/***/ }),

/***/ "./src/server/storage/index.ts":
/*!*************************************!*\
  !*** ./src/server/storage/index.ts ***!
  \*************************************/
/*! exports provided: save, get, getAll, deleteSpring */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSpring", function() { return deleteSpring; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var PLANNINGS_PATH = '../../.plannings/';
var FILE_EXTENTION = '.json';
function save(key, data) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolse, reject) {
                    /** @todo небезопасно, сделать проверку перед сохранением */
                    if (~key.indexOf('.') || ~key.indexOf('/') || ~key.indexOf('\\')) {
                        reject('Unacceptable symbols in key.');
                        return;
                    }
                    fs__WEBPACK_IMPORTED_MODULE_1__["writeFile"](Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(__dirname, PLANNINGS_PATH, key + FILE_EXTENTION), JSON.stringify(data), function (err) {
                        if (err) {
                            reject(err.message);
                            return;
                        }
                        resolse();
                    });
                })];
        });
    });
}
function get(key) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolse, reject) {
                    /** @todo небезопасно, сделать проверку перед сохранением */
                    if (~key.indexOf('.') || ~key.indexOf('/') || ~key.indexOf('\\')) {
                        reject('Unacceptable symbols in key.');
                        return;
                    }
                    fs__WEBPACK_IMPORTED_MODULE_1__["readFile"](Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(__dirname, PLANNINGS_PATH, key + FILE_EXTENTION), { encoding: 'utf8' }, function (err, data) {
                        if (err) {
                            reject(err.message);
                            return;
                        }
                        resolse(JSON.parse(data));
                    });
                })];
        });
    });
}
function getAll() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolse, reject) {
                    fs__WEBPACK_IMPORTED_MODULE_1__["readdir"](Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(__dirname, PLANNINGS_PATH), function (err, files) {
                        if (err) {
                            reject(err.message);
                            return;
                        }
                        resolse(files.map(function (fileName) { return Object(path__WEBPACK_IMPORTED_MODULE_0__["parse"])(fileName).name; }));
                    });
                })];
        });
    });
}
function deleteSpring(key) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolse, reject) {
                    /** @todo небезопасно, сделать проверку перед сохранением */
                    if (~key.indexOf('.') || ~key.indexOf('/') || ~key.indexOf('\\')) {
                        reject('Unacceptable symbols in key.');
                        return;
                    }
                    fs__WEBPACK_IMPORTED_MODULE_1__["unlink"](Object(path__WEBPACK_IMPORTED_MODULE_0__["resolve"])(__dirname, PLANNINGS_PATH, key + FILE_EXTENTION), function (err) {
                        if (err) {
                            reject(err.message);
                            return;
                        }
                        resolse();
                    });
                })];
        });
    });
}


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "encaps":
/*!*************************!*\
  !*** external "encaps" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("encaps");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "minimist":
/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("minimist");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map