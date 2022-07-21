import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Milestones() {
    const [focus, setFocus] = React.useState(false);
    return (
        <CountUp start={focus ? 0 : null} end={150} duration={4} redraw={true}>
            {({ countUpRef }) => (
                <VisibilitySensor onChange={(isVisible) => {
                    if (isVisible) { setFocus(true); }
                }}>
                    <span ref={countUpRef} />
                </VisibilitySensor>
            )}
        </CountUp>
    )
}

export default Milestones;