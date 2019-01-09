import React from "react"
import Toggle from "react-toggle-component"
import "react-toggle-component/styles.css"

class Switcher extends React.Component {

    constructor( props )
    {
      super( props );
    }

    render() {
        return (
            <Toggle label="Night mode" checked={true} />
        );
    }

}

export default Switcher
