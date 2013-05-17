/*
 * Copyright (C) 2013 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

{ 
	/**
	 * Handle scroll event from carousel
	 */
	handleScrollChange: function(cmp, evt, helper) {
        helper.handleScrollChange(cmp, evt);        
    },
        
    /**
     * Handle clicking event from the indicator
     */
    clickHandler: function (cmp, evt, helper) {    	
        var compEvent = cmp.getEvent("pagerClicked");        
        compEvent.setParams(evt.getParams());
        compEvent.fire();
    },

    /**
     * Handle key event from the indicator
     */
    keyHandler: function (cmp, evt, helper) {    	
        var compEvent = cmp.getEvent("pagerKeyed");        
        compEvent.setParams(evt.getParams());
        compEvent.fire();        
    }
    
}