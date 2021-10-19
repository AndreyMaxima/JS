(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var str; // Указание типа
var bool;
var num;
var numArr = [1, 2]; // Объявление массива с типом number
var strArr = ['str1', 'str2', 'str3'];
var arr = ['str', 2]; // Объевляем несколько типов значений элементов
function sum(a, b) {
    return a + b;
}
function func(a, b, sum) {
    if (b === void 0) { b = 0; }
    return sum ? a + b : a - b;
}
func(1, 2);
var user = {
    name: 'Andreas',
    surname: 'Valent'
};
function getFullName(person) {
    return person.name.concat(" " + person.surname);
}
var person = {
    name: 'Oleg',
    adminId: 123,
    phoneNumber: '88005553535'
};
function getPersonInfo(person) {
    return person.name + " " + person.email;
}
getPersonInfo(person);
//----------------------------------------------------------------------------
var Animal = /** @class */ (function () {
    function Animal(name, countOfLegs, age) {
        if (age === void 0) { age = 0; }
        this.name = name;
        this.age = age;
        this.countOfLegs = countOfLegs;
    }
    Animal.prototype.setAge = function (age) {
        this.age = age;
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    return Animal;
}());
var cat = new Animal('Tom', 4);
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, countOfLegs) {
        return _super.call(this, name, countOfLegs) || this;
    }
    return Dog;
}(Animal));
var dog = new Dog('Pitt', 4);
//----------------------------------------------------------------------------
function sumOrConcat(a, b) {
    return a + b;
}
sumOrConcat(1, 1);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQUksR0FBVyxDQUFBLENBQUMsZ0JBQWdCO0FBQ2hDLElBQUksSUFBYSxDQUFBO0FBQ2pCLElBQUksR0FBVyxDQUFBO0FBQ2YsSUFBSSxNQUFNLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQyxvQ0FBb0M7QUFDbEUsSUFBSSxNQUFNLEdBQWtCLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQTtBQUNwRCxJQUFJLEdBQUcsR0FBMkIsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUEsQ0FBQywrQ0FBK0M7QUFFNUYsU0FBUyxHQUFHLENBQUMsQ0FBUyxFQUFFLENBQVM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2hCLENBQUM7QUFFRCxTQUFTLElBQUksQ0FBQyxDQUFTLEVBQUUsQ0FBYSxFQUFFLEdBQWE7SUFBNUIsa0JBQUEsRUFBQSxLQUFhO0lBQ2xDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzlCLENBQUM7QUFFRCxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRVYsSUFBTSxJQUFJLEdBQUc7SUFDVCxJQUFJLEVBQUUsU0FBUztJQUNmLE9BQU8sRUFBRSxRQUFRO0NBQ3BCLENBQUE7QUFZRCxTQUFTLFdBQVcsQ0FBQyxNQUFnQjtJQUNqQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQUksTUFBTSxDQUFDLE9BQVMsQ0FBQyxDQUFBO0FBQ25ELENBQUM7QUFtQkQsSUFBTSxNQUFNLEdBQVU7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixPQUFPLEVBQUUsR0FBRztJQUNaLFdBQVcsRUFBRSxhQUFhO0NBQzdCLENBQUE7QUFHRCxTQUFTLGFBQWEsQ0FBQyxNQUF1QjtJQUMxQyxPQUFVLE1BQU0sQ0FBQyxJQUFJLFNBQUksTUFBTSxDQUFDLEtBQU8sQ0FBQTtBQUMzQyxDQUFDO0FBQ0QsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRXJCLDhFQUE4RTtBQUU5RTtJQVdJLGdCQUFZLElBQVksRUFBRSxXQUFtQixFQUFFLEdBQWU7UUFBZixvQkFBQSxFQUFBLE9BQWU7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQTtJQUNsQyxDQUFDO0lBVkQsdUJBQU0sR0FBTixVQUFPLEdBQVc7UUFDZCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQTtJQUNsQixDQUFDO0lBQ0QsdUJBQU0sR0FBTjtRQUNJLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0lBT0wsYUFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFFRCxJQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7QUFFaEM7SUFBa0IsdUJBQU07SUFDcEIsYUFBWSxJQUFZLEVBQUUsV0FBbUI7ZUFDekMsa0JBQU0sSUFBSSxFQUFFLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUwsVUFBQztBQUFELENBTEEsQUFLQyxDQUxpQixNQUFNLEdBS3ZCO0FBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBRTlCLDhFQUE4RTtBQUU5RSxTQUFTLFdBQVcsQ0FBOEIsQ0FBSSxFQUFFLENBQUk7SUFDeEQsT0FBTyxDQUFDLEdBQUMsQ0FBQyxDQUFBO0FBQ2QsQ0FBQztBQUVELFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgc3RyOiBzdHJpbmcgLy8g0KPQutCw0LfQsNC90LjQtSDRgtC40L/QsFxyXG5sZXQgYm9vbDogYm9vbGVhblxyXG5sZXQgbnVtOiBudW1iZXJcclxubGV0IG51bUFycjogbnVtYmVyW10gPSBbMSwgMl0gLy8g0J7QsdGK0Y/QstC70LXQvdC40LUg0LzQsNGB0YHQuNCy0LAg0YEg0YLQuNC/0L7QvCBudW1iZXJcclxubGV0IHN0ckFycjogQXJyYXk8c3RyaW5nPiA9IFsnc3RyMScsICdzdHIyJywgJ3N0cjMnXVxyXG5sZXQgYXJyOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+ID0gWydzdHInLCAyXSAvLyDQntCx0YrQtdCy0LvRj9C10Lwg0L3QtdGB0LrQvtC70YzQutC+INGC0LjQv9C+0LIg0LfQvdCw0YfQtdC90LjQuSDRjdC70LXQvNC10L3RgtC+0LJcclxuXHJcbmZ1bmN0aW9uIHN1bShhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciB7IC8vINCj0LrQsNC30LDQvdC40LUg0YLQuNC/0L7QsiDQsNGA0LPRg9C80LXQvdGC0L7QsiDQuCDQstC+0LfQstGA0LDRidCw0LXQvNC+0LPQviDQt9C90LDRh9C10L3QuNGPXHJcbiAgICByZXR1cm4gYSArIGJcclxufVxyXG5cclxuZnVuY3Rpb24gZnVuYyhhOiBudW1iZXIsIGI6IG51bWJlciA9IDAsIHN1bT86IGJvb2xlYW4pIHsgLy8g0J3QtdC+0LHRj9C30LDRgtC10LvRjNC90YvQtSDQv9Cw0YDQsNC80LXRgtGA0Ysg0Lgg0LfQvdCw0YfQtdC90LjRjyDQv9C+INGD0LzQvtC70YfQsNC90LjRjlxyXG4gICAgcmV0dXJuIHN1bSA/IGEgKyBiIDogYSAtIGJcclxufVxyXG5cclxuZnVuYygxLCAyKVxyXG5cclxuY29uc3QgdXNlciA9IHtcclxuICAgIG5hbWU6ICdBbmRyZWFzJyxcclxuICAgIHN1cm5hbWU6ICdWYWxlbnQnXHJcbn1cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBnZXRGdWxsTmFtZShwZXJzb246IHtuYW1lOiBzdHJpbmcsIHN1cm5hbWU6IHN0cmluZ30pIHsgLy8g0KPQutCw0LfQsNC90LjQtSDQvtCx0YrQtdC60YLQsCDQutCw0Log0L/QsNGA0LDQvNC10YLRgNCwXHJcbi8vICAgICByZXR1cm4gcGVyc29uLm5hbWUuY29uY2F0KGAgJHtwZXJzb24uc3VybmFtZX1gKVxyXG4vLyB9XHJcblxyXG50eXBlIFVzZXJUeXBlID0ge1xyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgc3VybmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZ1bGxOYW1lKHBlcnNvbjogVXNlclR5cGUpIHsgLy8g0KPQutCw0LfQsNC90LjQtSDQvtCx0YrQtdC60YLQsCDQutCw0Log0L/QsNGA0LDQvNC10YLRgNCwXHJcbiAgICByZXR1cm4gcGVyc29uLm5hbWUuY29uY2F0KGAgJHtwZXJzb24uc3VybmFtZX1gKVxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmludGVyZmFjZSBQZXJzb25JbnRlcmZhY2UgeyAvLyDQntCx0YrRj9Cy0LvQtdC90LjQtSDQuNC90YLQtdGA0YTQtdC50YHQsFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgZW1haWw/OiBzdHJpbmcsXHJcbiAgICBnZXRIaT8oKTogc3RyaW5nLFxyXG4gICAgc2V0TmFtZT8obmFtZTogc3RyaW5nKTogdm9pZFxyXG59XHJcblxyXG5pbnRlcmZhY2UgRW1wbG95ZXIge1xyXG4gICAgcGhvbmVOdW1iZXI6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQWRtaW4gZXh0ZW5kcyBQZXJzb25JbnRlcmZhY2UsIEVtcGxveWVyIHsgLy8g0J3QsNGB0LvQtdC00L7QstCw0L3QuNC1INC40L3RgtC10YDRhNC10LnRgdC+0LJcclxuICAgIHJlYWRvbmx5IGFkbWluSWQ6IG51bWJlciAvLyDQodCy0L7QudGB0YLQstC+INGC0L7Qu9GM0LrQviDQtNC70Y8g0YfRgtC10L3QuNGPXHJcbn1cclxuXHJcbmNvbnN0IHBlcnNvbjogQWRtaW4gPSB7IC8vINCg0LXQsNC70LjQt9Cw0YbQuNGPINC40L3RgtC10YDRhNC10LnRgdCwXHJcbiAgICBuYW1lOiAnT2xlZycsXHJcbiAgICBhZG1pbklkOiAxMjMsXHJcbiAgICBwaG9uZU51bWJlcjogJzg4MDA1NTUzNTM1J1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0UGVyc29uSW5mbyhwZXJzb246IFBlcnNvbkludGVyZmFjZSkge1xyXG4gICAgcmV0dXJuIGAke3BlcnNvbi5uYW1lfSAke3BlcnNvbi5lbWFpbH1gXHJcbn1cclxuZ2V0UGVyc29uSW5mbyhwZXJzb24pXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmNsYXNzIEFuaW1hbCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIGFnZTogbnVtYmVyIC8vINCh0LLQvtC50YHRgtCy0L4g0LTQvtGB0YLRg9C/0L3QviDRgtC+0LvRjNC60L4g0LLQvdGD0YLRgNC4INC60LvQsNGB0YHQsCAo0L3QtSDQvdCw0YHQu9C10LTRg9C10YLRgdGPKVxyXG4gICAgcHJvdGVjdGVkIGNvdW50T2ZMZWdzOiBudW1iZXIgLy8g0KHQstC+0LnRgdGC0LLQviDQtNC+0YHRgtGD0L/QvdC+INGC0L7Qu9GM0LrQviDQstC90YPRgtGA0Lgg0LrQu9Cw0YHRgdCwICjQvdCw0YHQu9C10LTRg9C10YLRgdGPKVxyXG4gICAgcmVhZG9ubHkgZWF0OiAoKSA9PiB2b2lkOyAgLy8g0KHQstC+0LnRgdGC0LLQviDRgtC+0LvRjNC60L4g0LTQu9GPINGH0YLQtdC90LjRj1xyXG4gICAgc2V0QWdlKGFnZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2VcclxuICAgIH1cclxuICAgIGdldEFnZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZ2VcclxuICAgIH1cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgY291bnRPZkxlZ3M6IG51bWJlciwgYWdlOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmFnZSA9IGFnZTtcclxuICAgICAgICB0aGlzLmNvdW50T2ZMZWdzID0gY291bnRPZkxlZ3NcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IGNhdCA9IG5ldyBBbmltYWwoJ1RvbScsIDQpXHJcblxyXG5jbGFzcyBEb2cgZXh0ZW5kcyBBbmltYWwge1xyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjb3VudE9mTGVnczogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgY291bnRPZkxlZ3MpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgZG9nID0gbmV3IERvZygnUGl0dCcsIDQpXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIHN1bU9yQ29uY2F0IDxUIGV4dGVuZHMgbnVtYmVyIHwgc3RyaW5nPiAoYTogVCwgYjogVCk6IFQge1xyXG4gICAgcmV0dXJuIGErYlxyXG59XHJcblxyXG5zdW1PckNvbmNhdCgxLCAxKTsiXX0=
