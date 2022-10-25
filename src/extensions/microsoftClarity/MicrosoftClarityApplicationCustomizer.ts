/* eslint-disable prefer-rest-params */

import { override } from '@microsoft/decorators';

import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';


export interface IMicrosoftClarityApplicationCustomizerProperties {
  clarityID: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class MicrosoftClarityApplicationCustomizer
  extends BaseApplicationCustomizer<IMicrosoftClarityApplicationCustomizerProperties> {

 

  @override
  public onInit(): Promise<void> {

    if (this.properties.clarityID && this.properties.clarityID != "") {
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", this.properties.clarityID);
    }    
    return Promise.resolve();
  }
}
