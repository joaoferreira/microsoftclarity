import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
export interface IMicrosoftClarityApplicationCustomizerProperties {
    clarityID: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class MicrosoftClarityApplicationCustomizer extends BaseApplicationCustomizer<IMicrosoftClarityApplicationCustomizerProperties> {
    onInit(): Promise<void>;
}
//# sourceMappingURL=MicrosoftClarityApplicationCustomizer.d.ts.map