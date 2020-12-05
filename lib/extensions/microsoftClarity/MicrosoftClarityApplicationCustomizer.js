var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
var LOG_SOURCE = 'MicrosoftClarityApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var MicrosoftClarityApplicationCustomizer = /** @class */ (function (_super) {
    __extends(MicrosoftClarityApplicationCustomizer, _super);
    function MicrosoftClarityApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MicrosoftClarityApplicationCustomizer.prototype.onInit = function () {
        var clarityID;
        clarityID = this.properties.clarityID;
        if (clarityID && clarityID != "") {
            debugger;
            (function (c, l, a, r, i, t, y) {
                c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
                t = l.createElement(r);
                t.async = 1;
                t.src = "https://www.clarity.ms/tag/" + i;
                y = l.getElementsByTagName(r)[0];
                y.parentNode.insertBefore(t, y);
            })(window, document, "clarity", "script", clarityID);
        }
        return Promise.resolve();
    };
    __decorate([
        override
    ], MicrosoftClarityApplicationCustomizer.prototype, "onInit", null);
    return MicrosoftClarityApplicationCustomizer;
}(BaseApplicationCustomizer));
export default MicrosoftClarityApplicationCustomizer;
//# sourceMappingURL=MicrosoftClarityApplicationCustomizer.js.map