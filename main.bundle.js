webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <app-players-setting *ngIf=\"gameState == 0\"></app-players-setting>\n      <app-whoisright-component *ngIf=\"gameState == 1\"></app-whoisright-component>\n      <app-who-have-been-chosen *ngIf=\"gameState == 2\"></app-who-have-been-chosen>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(game) {
        this.game = game;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameState = this.game.getState();
        this.game.stateChanged.subscribe(function (state) { return _this.gameState = state; });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__players_setting_players_setting_component__ = __webpack_require__("../../../../../src/app/players-setting/players-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__players_setting_player_setting_player_setting_component__ = __webpack_require__("../../../../../src/app/players-setting/player-setting/player-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__whoisright_whoisright_component__ = __webpack_require__("../../../../../src/app/whoisright/whoisright.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__player_player_component__ = __webpack_require__("../../../../../src/app/player/player.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__who_have_been_chosen_who_have_been_chosen_component__ = __webpack_require__("../../../../../src/app/who-have-been-chosen/who-have-been-chosen.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__players_setting_players_setting_component__["a" /* PlayersSettingComponent */],
            __WEBPACK_IMPORTED_MODULE_4__players_setting_player_setting_player_setting_component__["a" /* PlayerSettingComponent */],
            __WEBPACK_IMPORTED_MODULE_5__whoisright_whoisright_component__["a" /* WhoIsRightComponent */],
            __WEBPACK_IMPORTED_MODULE_7__player_player_component__["a" /* PlayerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__who_have_been_chosen_who_have_been_chosen_component__["a" /* WhoHaveBeenChosenComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__game_service__["a" /* GameService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_player_model__ = __webpack_require__("../../../../../src/app/models/player.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_state_dto_model__ = __webpack_require__("../../../../../src/app/models/state-dto.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });



var State;
(function (State) {
    State[State["SetPlayers"] = 0] = "SetPlayers";
    State[State["WhoIsRight"] = 1] = "WhoIsRight";
    State[State["WhoHaveBeenChosen"] = 2] = "WhoHaveBeenChosen";
})(State || (State = {}));
var GameService = (function () {
    function GameService() {
        var _this = this;
        this.WIN_SCORE = 3;
        this.EVERYBODY_GUESSED = -3;
        this.NOBODY_GUESSED = -2;
        this.state = State.SetPlayers;
        this.players = [
            new __WEBPACK_IMPORTED_MODULE_1__models_player_model__["a" /* Player */]("Егор"),
            new __WEBPACK_IMPORTED_MODULE_1__models_player_model__["a" /* Player */]("Динара"),
            new __WEBPACK_IMPORTED_MODULE_1__models_player_model__["a" /* Player */]("Константин"),
            new __WEBPACK_IMPORTED_MODULE_1__models_player_model__["a" /* Player */]("Евгений")
        ];
        this.currentPlayerIndex = 0;
        this.stateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        console.log('GameService CONSTRUCTOR');
        var stateDto = JSON.parse(localStorage.getItem('state'));
        if (stateDto) {
            this.players = stateDto.players.map(function (p) { return __WEBPACK_IMPORTED_MODULE_1__models_player_model__["a" /* Player */].create(p); });
            this.state = stateDto.state;
            this.currentPlayerIndex = stateDto.currentPlayerIndex;
            this.whoIsRightPlayers = stateDto.whoIsRightPlayers.map(function (name) { return _this.players.find(function (p) { return p.name === name; }); });
            this.stateChanged.emit(this.state);
            this.updateAvailableClicks();
        }
        this.stateChanged.subscribe(function () {
            console.log('StateChanged in GameService');
            var whoIsRightToSave = _this.whoIsRightPlayers
                ? _this.whoIsRightPlayers.map(function (player) { return player.name; })
                : [];
            var stateDto = new __WEBPACK_IMPORTED_MODULE_2__models_state_dto_model__["a" /* StateDto */](_this.state, _this.players, _this.currentPlayerIndex, whoIsRightToSave);
            localStorage.setItem('state', JSON.stringify(stateDto));
        });
    }
    GameService.prototype.getState = function () {
        return this.state;
    };
    GameService.prototype.addPlayer = function (player) {
        if (this.state !== State.SetPlayers)
            throw new Error('Нельзя добавлять игроков во время игры!');
        this.players.push(player);
    };
    GameService.prototype.deletePlayer = function (player) {
        if (this.state !== State.SetPlayers)
            throw new Error('Нельзя удалять игроков во время игры!');
        var index = this.players.indexOf(player);
        this.players.splice(index, 1);
    };
    GameService.prototype.start = function () {
        this.state = State.WhoIsRight;
        this.players[this.currentPlayerIndex].isCurrent = true;
        this.stateChanged.emit(this.state);
        this.whoIsRightPlayers = this.players.filter(function (p) { return p.isSelected; });
        this.updateAvailableClicks();
    };
    GameService.prototype.clickPlayer = function (player) {
        if (player.isCurrent)
            return;
        if (this.state === State.WhoIsRight) {
            player.isSelected ? player.deselect() : player.select();
            this.whoIsRightPlayers = this.players.filter(function (p) { return p.isSelected; });
            return;
        }
        if (this.state === State.WhoHaveBeenChosen) {
            var clicksForPlayer = this.availableClicks;
            var initialAvailableClicks = this.players.length - 1 - this.whoIsRightPlayers.length;
            if (this.availableClicks > 0 && !this.whoIsRightPlayers.includes(player) &&
                player.selectionCount == initialAvailableClicks - 1) {
                console.log('clicks for player minus one');
                clicksForPlayer--;
            }
            console.log('clicks for ' + player.name + ': ' + clicksForPlayer);
            if (clicksForPlayer > 0)
                player.select();
            this.updateAvailableClicks();
            return;
        }
    };
    GameService.prototype.deselectPlayer = function (player) {
        player.deselect();
        this.updateAvailableClicks();
    };
    GameService.prototype.canGoNext = function () {
        if (this.state === State.WhoHaveBeenChosen) {
            return this.availableClicks === 0;
        }
        return true;
    };
    GameService.prototype.next = function () {
        if (this.state === State.WhoIsRight) {
            this.state = State.WhoHaveBeenChosen;
            var everybodyGuessed = this.updateScores();
            if (everybodyGuessed) {
                this.incrementCurrentPlayer();
                this.whoIsRightPlayers = [];
                this.state = State.WhoIsRight;
            }
            console.log('Кто угадал: ', this.whoIsRightPlayers.map(function (p) { return p.name; }).join(', '));
        }
        else if (this.state === State.WhoHaveBeenChosen) {
            this.updateScores2();
            this.incrementCurrentPlayer();
            this.whoIsRightPlayers = [];
            this.state = State.WhoIsRight;
        }
        this.players.forEach(function (p) {
            p.selectionCount = 0;
            p.isSelected = false;
        });
        if (this.state == State.WhoHaveBeenChosen)
            this.updateAvailableClicks();
        this.stateChanged.emit(this.state);
    };
    GameService.prototype.updateScores = function () {
        var _this = this;
        var currentPlayer = this.getCurrentPlayer();
        if (this.whoIsRightPlayers.length === 0) {
            currentPlayer.score += this.NOBODY_GUESSED;
            return false;
        }
        if (this.whoIsRightPlayers.length === this.players.length - 1) {
            currentPlayer.score += this.EVERYBODY_GUESSED;
            return true;
        }
        currentPlayer.score += this.WIN_SCORE + this.whoIsRightPlayers.length;
        this.players.forEach(function (p) {
            if (p.isSelected)
                p.score += _this.WIN_SCORE;
        });
        return false;
    };
    GameService.prototype.updateScores2 = function () {
        this.players.forEach(function (p) {
            if (p.isSelected)
                p.score += p.selectionCount;
        });
    };
    GameService.prototype.getCurrentPlayer = function () {
        return this.players[this.currentPlayerIndex];
    };
    GameService.prototype.incrementCurrentPlayer = function () {
        this.getCurrentPlayer().isCurrent = false;
        if (this.currentPlayerIndex === this.players.length - 1) {
            this.currentPlayerIndex = 0;
        }
        else {
            this.currentPlayerIndex++;
        }
        this.getCurrentPlayer().isCurrent = true;
    };
    GameService.prototype.updateAvailableClicks = function () {
        var availablePlayers = this.players.length - 1 - this.whoIsRightPlayers.length;
        var selectionSum = 0;
        this.players.forEach(function (p) { return selectionSum += p.selectionCount; });
        this.availableClicks = availablePlayers - selectionSum;
        console.log('availableClicks: ' + this.availableClicks);
    };
    return GameService;
}());

//# sourceMappingURL=game.service.js.map

/***/ }),

/***/ "../../../../../src/app/models/player.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player(name) {
        this.name = name;
        this.isCurrent = false;
        this.isSelected = false;
        this.selectionCount = 0;
        this.score = 0;
    }
    Player.create = function (player) {
        var p = new Player(player.name);
        p.isCurrent = player.isCurrent;
        p.isSelected = player.isSelected;
        p.selectionCount = player.selectionCount;
        p.score = player.score;
        return p;
    };
    Player.prototype.select = function () {
        this.selectionCount++;
        this.isSelected = true;
    };
    Player.prototype.deselect = function () {
        if (!this.isSelected)
            return;
        this.selectionCount--;
        this.isSelected = this.selectionCount !== 0;
    };
    return Player;
}());

//# sourceMappingURL=player.model.js.map

/***/ }),

/***/ "../../../../../src/app/models/state-dto.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateDto; });
var StateDto = (function () {
    function StateDto(state, players, currentPlayerIndex, whoIsRightPlayers) {
        this.state = state;
        this.players = players;
        this.currentPlayerIndex = currentPlayerIndex;
        this.whoIsRightPlayers = whoIsRightPlayers;
    }
    return StateDto;
}());

//# sourceMappingURL=state-dto.model.js.map

/***/ }),

/***/ "../../../../../src/app/player/player.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n.player-item {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.player {\r\n  background-color: white;\r\n  width: 100px;\r\n  height: 100px;\r\n  border: 1px solid black;\r\n  border-radius: 50%;\r\n\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 100px;\r\n\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.player-name {\r\n  font-size: 1.1em;\r\n}\r\n\r\n.score {\r\n  font-size: 1.3em;\r\n}\r\n\r\n.current {\r\n  color: white;\r\n  background-color: crimson;\r\n}\r\n\r\n.selected {\r\n  color: white;\r\n  background-color: forestgreen;\r\n}\r\n\r\n.selection-count {\r\n  background-color: crimson;\r\n  border: 1px solid black;\r\n  font-size: 1.3em;\r\n\r\n  width: 30px;\r\n  height: 30px;\r\n  border-radius: 50%;\r\n  line-height: 30px;\r\n  vertical-align: middle;\r\n  color: white;\r\n\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.deselect {\r\n  top: 0;\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 98px;\r\n\r\n  border-top-left-radius: 50px;\r\n  border-bottom-left-radius: 50px;\r\n  background-color: #dc143c;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"player-item\">\n  <div class=\"player\"\n       [ngClass]=\"{'current': player.isCurrent, 'selected': player.isSelected}\"\n       (click)=\"onPlayerClick()\">\n\n    <div *ngIf=\"isNeedShowSelectionCount()\"\n         class=\"selection-count\"\n         (click)=\"onDeselect($event)\">\n      {{player.selectionCount}}\n    </div>\n\n    <span class=\"player-name\">{{player.name}}</span>\n  </div>\n\n  <span class=\"score\">{{player.score}}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_player_model__ = __webpack_require__("../../../../../src/app/models/player.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerComponent = (function () {
    function PlayerComponent(game) {
        this.game = game;
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent.prototype.onPlayerClick = function () {
        this.game.clickPlayer(this.player);
    };
    PlayerComponent.prototype.onDeselect = function (event) {
        event.stopPropagation();
        this.game.deselectPlayer(this.player);
    };
    PlayerComponent.prototype.isNeedShowSelectionCount = function () {
        return this.game.getState() === __WEBPACK_IMPORTED_MODULE_2__game_service__["b" /* State */].WhoHaveBeenChosen && this.player.isSelected;
    };
    return PlayerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_player_model__["a" /* Player */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_player_model__["a" /* Player */]) === "function" && _a || Object)
], PlayerComponent.prototype, "player", void 0);
PlayerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-player',
        template: __webpack_require__("../../../../../src/app/player/player.component.html"),
        styles: [__webpack_require__("../../../../../src/app/player/player.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__game_service__["a" /* GameService */]) === "function" && _b || Object])
], PlayerComponent);

var _a, _b;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ "../../../../../src/app/players-setting/player-setting/player-setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/players-setting/player-setting/player-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n  <input\n    type=\"text\"\n    class=\"form-control\"\n    [value]=\"player.name\"\n    (input)=\"onInput($event)\"\n  >\n  <span class=\"input-group-btn\">\n      <button\n        class=\"btn btn-danger\"\n        type=\"button\"\n        (click)=\"onDeleted()\"\n      >X</button>\n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/players-setting/player-setting/player-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_player_model__ = __webpack_require__("../../../../../src/app/models/player.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerSettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerSettingComponent = (function () {
    function PlayerSettingComponent(game) {
        this.game = game;
    }
    PlayerSettingComponent.prototype.ngOnInit = function () {
    };
    PlayerSettingComponent.prototype.onDeleted = function () {
        this.game.deletePlayer(this.player);
    };
    PlayerSettingComponent.prototype.onInput = function (event) {
        this.player.name = event.target.value;
    };
    return PlayerSettingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_player_model__["a" /* Player */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_player_model__["a" /* Player */]) === "function" && _a || Object)
], PlayerSettingComponent.prototype, "player", void 0);
PlayerSettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-player-setting',
        template: __webpack_require__("../../../../../src/app/players-setting/player-setting/player-setting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/players-setting/player-setting/player-setting.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]) === "function" && _b || Object])
], PlayerSettingComponent);

var _a, _b;
//# sourceMappingURL=player-setting.component.js.map

/***/ }),

/***/ "../../../../../src/app/players-setting/players-setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flex-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/players-setting/players-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Список игроков</h2>\n<hr>\n<ul class=\"list-group\">\n  <li\n    *ngFor=\"let p of players\"\n    style=\"list-style: none;\"\n    class=\"list-group-item\"\n  >\n    <app-player-setting [player]=\"p\"></app-player-setting>\n  </li>\n  <li style=\"list-style: none;\" class=\"list-group-item flex-container\">\n    <button\n      class=\"btn btn-success\"\n      type=\"button\"\n      (click)=\"onAdded()\"\n    >Добавить</button>\n\n    <button class=\"btn btn-primary\" (click)=\"onStartGame()\">Начать игру!</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/players-setting/players-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_player_model__ = __webpack_require__("../../../../../src/app/models/player.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersSettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayersSettingComponent = (function () {
    function PlayersSettingComponent(game) {
        this.game = game;
    }
    PlayersSettingComponent.prototype.ngOnInit = function () {
        this.players = this.game.players;
    };
    PlayersSettingComponent.prototype.onAdded = function () {
        this.game.addPlayer(new __WEBPACK_IMPORTED_MODULE_2__models_player_model__["a" /* Player */]("Игрок " + (this.players.length + 1)));
    };
    PlayersSettingComponent.prototype.onStartGame = function () {
        this.game.start();
    };
    return PlayersSettingComponent;
}());
PlayersSettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-players-setting',
        template: __webpack_require__("../../../../../src/app/players-setting/players-setting.component.html"),
        styles: [__webpack_require__("../../../../../src/app/players-setting/players-setting.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]) === "function" && _a || Object])
], PlayersSettingComponent);

var _a;
//# sourceMappingURL=players-setting.component.js.map

/***/ }),

/***/ "../../../../../src/app/who-have-been-chosen/who-have-been-chosen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".players-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/who-have-been-chosen/who-have-been-chosen.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Кого еще выбрали?</h2>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\" style=\"text-align: right;\">\n    <button class=\"btn btn-primary\"\n            [disabled]=\"!canGoNext()\"\n            (click)=\"onNext()\">\n      Далее\n    </button>\n  </div>\n</div>\n\n<hr>\n\n<div class=\"players-container\">\n  <app-player *ngFor=\"let p of players\" [player]=\"p\"></app-player>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/who-have-been-chosen/who-have-been-chosen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhoHaveBeenChosenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WhoHaveBeenChosenComponent = (function () {
    function WhoHaveBeenChosenComponent(game) {
        this.game = game;
    }
    WhoHaveBeenChosenComponent.prototype.ngOnInit = function () {
        this.players = this.game.players;
    };
    WhoHaveBeenChosenComponent.prototype.onNext = function () {
        this.game.next();
    };
    WhoHaveBeenChosenComponent.prototype.canGoNext = function () {
        return this.game.canGoNext();
    };
    return WhoHaveBeenChosenComponent;
}());
WhoHaveBeenChosenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-who-have-been-chosen',
        template: __webpack_require__("../../../../../src/app/who-have-been-chosen/who-have-been-chosen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/who-have-been-chosen/who-have-been-chosen.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]) === "function" && _a || Object])
], WhoHaveBeenChosenComponent);

var _a;
//# sourceMappingURL=who-have-been-chosen.component.js.map

/***/ }),

/***/ "../../../../../src/app/whoisright/whoisright.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".players-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/whoisright/whoisright.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Кто угадал?</h2>\n\n<div class=\"row\">\n  <div class=\"col-xs-12\" style=\"text-align: right;\">\n    <button class=\"btn btn-primary\" (click)=\"onNext()\">Далее</button>\n  </div>\n</div>\n\n<hr>\n\n<div class=\"players-container\">\n  <app-player *ngFor=\"let p of players\" [player]=\"p\"></app-player>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/whoisright/whoisright.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhoIsRightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WhoIsRightComponent = (function () {
    function WhoIsRightComponent(game) {
        this.game = game;
    }
    WhoIsRightComponent.prototype.ngOnInit = function () {
        this.players = this.game.players;
    };
    WhoIsRightComponent.prototype.onNext = function () {
        this.game.next();
    };
    return WhoIsRightComponent;
}());
WhoIsRightComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-whoisright-component',
        template: __webpack_require__("../../../../../src/app/whoisright/whoisright.component.html"),
        styles: [__webpack_require__("../../../../../src/app/whoisright/whoisright.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__game_service__["a" /* GameService */]) === "function" && _a || Object])
], WhoIsRightComponent);

var _a;
//# sourceMappingURL=whoisright.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map