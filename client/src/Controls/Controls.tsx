import React from 'react';

const Controls = () => {

    return (
        <div className="mb-4">
            <div>
                <div className="pb-1">Enter the number of quotes to retrieve:</div>
                <div>
                    <select id="mnuQuoteCount" 
                        className="bg-sky-600 hover:bg-sky-500 text-white py-2 px-3 rounded mb-3" 
                        defaultValue="3">
                        <option value="1">1 quotes</option>
                        <option value="3">3 quotes</option>
                        <option value="5">5 quotes</option>
                        <option value="10">10 quotes</option>
                    </select>
                </div> 
            </div>
            
            <div>
                <div className="pb-1">Quote links:</div>
                <div>
                    <input id="chkLinks" type="checkbox" defaultChecked className="mr-2 accent-sky-600 hover:accent-sky-500" />
                    <label htmlFor="chkLinks">
                        Showing / Hiding the links...
                    </label>
                </div>
            </div>
        </div>
    );
}
  
export default Controls;