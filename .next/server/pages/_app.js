/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"socketDispatchType\": function() { return /* binding */ socketDispatchType; }\n/* harmony export */ });\nconst socketDispatchType = {\n  SEND_MESSAGE: 'sendMessage',\n  CONNECTION: 'connection',\n  MESSAGE: 'message'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWlubnktY2hhdC13ZWIvLi9zcmMvY29uc3RhbnRzLmpzPzVmYjAiXSwibmFtZXMiOlsic29ja2V0RGlzcGF0Y2hUeXBlIiwiU0VORF9NRVNTQUdFIiwiQ09OTkVDVElPTiIsIk1FU1NBR0UiXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxrQkFBa0IsR0FBRztBQUNoQ0MsY0FBWSxFQUFFLGFBRGtCO0FBRWhDQyxZQUFVLEVBQUUsWUFGb0I7QUFHaENDLFNBQU8sRUFBRTtBQUh1QixDQUEzQiIsImZpbGUiOiIuL3NyYy9jb25zdGFudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc29ja2V0RGlzcGF0Y2hUeXBlID0ge1xuICBTRU5EX01FU1NBR0U6ICdzZW5kTWVzc2FnZScsXG4gIENPTk5FQ1RJT046ICdjb25uZWN0aW9uJyxcbiAgTUVTU0FHRTogJ21lc3NhZ2UnXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/constants.js\n");

/***/ }),

/***/ "./src/contexts/socket.js":
/*!********************************!*\
  !*** ./src/contexts/socket.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"socket\": function() { return /* binding */ socket; },\n/* harmony export */   \"SocketContext\": function() { return /* binding */ SocketContext; }\n/* harmony export */ });\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst socket = socket_io_client__WEBPACK_IMPORTED_MODULE_0___default().connect(\"http://localhost:3333\");\nconst SocketContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWlubnktY2hhdC13ZWIvLi9zcmMvY29udGV4dHMvc29ja2V0LmpzP2FiNDYiXSwibmFtZXMiOlsic29ja2V0Iiwic29ja2V0aW8iLCJTb2NrZXRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLE1BQU0sR0FBR0MsK0RBQUEsQ0FBaUIsdUJBQWpCLENBQWY7QUFDQSxNQUFNQyxhQUFhLGdCQUFHQyxvREFBYSxFQUFuQyIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9zb2NrZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc29ja2V0aW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3Qgc29ja2V0ID0gc29ja2V0aW8uY29ubmVjdChcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzM1wiKTtcbmV4cG9ydCBjb25zdCBTb2NrZXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/socket.js\n");

/***/ }),

/***/ "./src/hooks/useRoom.js":
/*!******************************!*\
  !*** ./src/hooks/useRoom.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RoomContext\": function() { return /* binding */ RoomContext; },\n/* harmony export */   \"RoomProvider\": function() { return /* binding */ RoomProvider; },\n/* harmony export */   \"useRoom\": function() { return /* binding */ useRoom; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/constants.js\");\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.js\");\n\nvar _jsxFileName = \"/Users/fsk/r-chat/rainny-chat-web/src/hooks/useRoom.js\";\n\n\n\nconst RoomContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction RoomProvider(props) {\n  const {\n    children\n  } = props;\n  const {\n    0: user,\n    1: setUser\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    name: 'FSK'\n  });\n  const {\n    0: rooms,\n    1: setRooms\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const {\n    0: currentRoom,\n    1: setCurrentRoom\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n  const {\n    0: messages,\n    1: setMessages\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n\n  const handleSaveUser = user => {\n    setUser(user);\n  };\n\n  const handleFetchRooms = async () => {\n    const response = await _services_api__WEBPACK_IMPORTED_MODULE_3__.api.get(\"rooms\");\n    setRooms(response.data);\n  }; // const handleRoomSelect = (id) => {\n  //   console.log(id);\n  //   setCurrentRoom(id);\n  //   socket.emit(socketDispatchType.JOIN_ROOM, { \n  //     room_id: id, \n  //     user_name: user.name \n  //   });\n  // };\n\n\n  const handleAddMessage = message => {\n    setMessages([...messages, message]);\n  };\n\n  console.log(\"Messages 3 =>\", messages);\n  console.log(\"RENDER\");\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(RoomContext.Provider, {\n    value: {\n      user,\n      rooms,\n      messages,\n      handleSaveUser,\n      handleFetchRooms,\n      // handleRoomSelect,\n      handleAddMessage\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, this);\n}\nfunction useRoom() {\n  const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(RoomContext);\n  return context;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWlubnktY2hhdC13ZWIvLi9zcmMvaG9va3MvdXNlUm9vbS5qcz84YzFlIl0sIm5hbWVzIjpbIlJvb21Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlJvb21Qcm92aWRlciIsInByb3BzIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsInVzZVN0YXRlIiwibmFtZSIsInJvb21zIiwic2V0Um9vbXMiLCJjdXJyZW50Um9vbSIsInNldEN1cnJlbnRSb29tIiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsImhhbmRsZVNhdmVVc2VyIiwiaGFuZGxlRmV0Y2hSb29tcyIsInJlc3BvbnNlIiwiYXBpIiwiZGF0YSIsImhhbmRsZUFkZE1lc3NhZ2UiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInVzZVJvb20iLCJjb250ZXh0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVBLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ2xDLFFBQU07QUFBRUM7QUFBRixNQUFlRCxLQUFyQjtBQUNBLFFBQU07QUFBQSxPQUFDRSxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFFO0FBRHlCLEdBQUQsQ0FBaEM7QUFHQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JILCtDQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDSSxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0wsK0NBQVEsQ0FBQyxJQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNNLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCUCwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7O0FBRUEsUUFBTVEsY0FBYyxHQUFJVixJQUFELElBQVU7QUFDL0JDLFdBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxRQUFNVyxnQkFBZ0IsR0FBRyxZQUFZO0FBQ25DLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyxrREFBQSxDQUFRLE9BQVIsQ0FBdkI7QUFDQVIsWUFBUSxDQUFDTyxRQUFRLENBQUNFLElBQVYsQ0FBUjtBQUNELEdBSEQsQ0Fia0MsQ0FtQmxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFFBQU1DLGdCQUFnQixHQUFJQyxPQUFELElBQWE7QUFDcENQLGVBQVcsQ0FBQyxDQUFDLEdBQUdELFFBQUosRUFBY1EsT0FBZCxDQUFELENBQVg7QUFDRCxHQUZEOztBQUlBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCVixRQUE3QjtBQUNBUyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBRUEsc0JBQ0UsOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxTQUFLLEVBQUU7QUFDTGxCLFVBREs7QUFFTEksV0FGSztBQUdMSSxjQUhLO0FBSUxFLG9CQUpLO0FBS0xDLHNCQUxLO0FBTUw7QUFDQUk7QUFQSyxLQURUO0FBQUEsY0FXR2hCO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7QUFDTSxTQUFTb0IsT0FBVCxHQUFtQjtBQUN4QixRQUFNQyxPQUFPLEdBQUdDLGlEQUFVLENBQUMxQixXQUFELENBQTFCO0FBRUEsU0FBT3lCLE9BQVA7QUFDRCIsImZpbGUiOiIuL3NyYy9ob29rcy91c2VSb29tLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBzb2NrZXREaXNwYXRjaFR5cGUgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vc2VydmljZXMvYXBpJztcblxuZXhwb3J0IGNvbnN0IFJvb21Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5leHBvcnQgZnVuY3Rpb24gUm9vbVByb3ZpZGVyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHByb3BzO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogJ0ZTSydcbiAgfSk7XG4gIGNvbnN0IFtyb29tcywgc2V0Um9vbXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY3VycmVudFJvb20sIHNldEN1cnJlbnRSb29tXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVTYXZlVXNlciA9ICh1c2VyKSA9PiB7XG4gICAgc2V0VXNlcih1c2VyKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVGZXRjaFJvb21zID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldChcInJvb21zXCIpO1xuICAgIHNldFJvb21zKHJlc3BvbnNlLmRhdGEpO1xuICB9O1xuXG5cbiAgLy8gY29uc3QgaGFuZGxlUm9vbVNlbGVjdCA9IChpZCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKGlkKTtcbiAgLy8gICBzZXRDdXJyZW50Um9vbShpZCk7XG4gIC8vICAgc29ja2V0LmVtaXQoc29ja2V0RGlzcGF0Y2hUeXBlLkpPSU5fUk9PTSwgeyBcbiAgLy8gICAgIHJvb21faWQ6IGlkLCBcbiAgLy8gICAgIHVzZXJfbmFtZTogdXNlci5uYW1lIFxuICAvLyAgIH0pO1xuICAvLyB9O1xuXG4gIGNvbnN0IGhhbmRsZUFkZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgbWVzc2FnZV0pO1xuICB9O1xuICBcbiAgY29uc29sZS5sb2coXCJNZXNzYWdlcyAzID0+XCIsIG1lc3NhZ2VzKTtcbiAgY29uc29sZS5sb2coXCJSRU5ERVJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8Um9vbUNvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIHVzZXIsXG4gICAgICAgIHJvb21zLFxuICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgaGFuZGxlU2F2ZVVzZXIsXG4gICAgICAgIGhhbmRsZUZldGNoUm9vbXMsXG4gICAgICAgIC8vIGhhbmRsZVJvb21TZWxlY3QsXG4gICAgICAgIGhhbmRsZUFkZE1lc3NhZ2VcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUm9vbUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXNlUm9vbSgpIHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoUm9vbUNvbnRleHQpO1xuXG4gIHJldHVybiBjb250ZXh0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/useRoom.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_socket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/socket */ \"./src/contexts/socket.js\");\n/* harmony import */ var _hooks_useRoom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useRoom */ \"./src/hooks/useRoom.js\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.scss */ \"./src/styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/fsk/r-chat/rainny-chat-web/src/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks_useRoom__WEBPACK_IMPORTED_MODULE_2__.RoomProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_socket__WEBPACK_IMPORTED_MODULE_1__.SocketContext.Provider, {\n      value: _contexts_socket__WEBPACK_IMPORTED_MODULE_1__.socket,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWlubnktY2hhdC13ZWIvLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic29ja2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDQSw4REFBQyx3REFBRDtBQUFBLDJCQUNFLDhEQUFDLG9FQUFEO0FBQXdCLFdBQUssRUFBRUMsb0RBQS9CO0FBQUEsNkJBQ0UsOERBQUMsU0FBRCxvQkFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQU9EOztBQUVELCtEQUFlRixLQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzb2NrZXQsIFNvY2tldENvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9zb2NrZXQnO1xuaW1wb3J0IHsgUm9vbVByb3ZpZGVyIH0gZnJvbSAnLi4vaG9va3MvdXNlUm9vbSc7XG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgPFJvb21Qcm92aWRlcj5cbiAgICA8U29ja2V0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17c29ja2V0fT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1NvY2tldENvbnRleHQuUHJvdmlkZXI+XG4gIDwvUm9vbVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3333'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yYWlubnktY2hhdC13ZWIvLi9zcmMvc2VydmljZXMvYXBpLmpzPzc0MjQiXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9BUElfVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLE1BQU1BLEdBQUcsR0FBR0MsbURBQUEsQ0FBYTtBQUM5QkMsU0FBTyxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBQVosSUFBaUM7QUFEWixDQUFiLENBQVoiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkw6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfVVJMIHx8ICdodHRwOi8vbG9jYWxob3N0OjMzMzMnXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.js\n");

/***/ }),

/***/ "./src/styles/globals.scss":
/*!*********************************!*\
  !*** ./src/styles/globals.scss ***!
  \*********************************/
/***/ (function() {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();