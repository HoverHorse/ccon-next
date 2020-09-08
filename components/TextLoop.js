import TextLoop from "react-text-loop";

class WordLoop extends React.Component {
    render() {
        return (
            <h3 id="loopElement">
                Your {" "}
                <TextLoop id="loopComponent" children={[" CCON", " buying", " selling", " managing", " information"]}>
                </TextLoop>{" "}
                <i id="revTag">REVOLUTION</i>

                <style jsx>{`
                    
                    #loopElement {
                        width: 100%;
                        height: 66px;
                        overflow: hidden;
                        border-top: 1px solid red;
                        border-bottom: 1px solid red;
                        top: 0px;
                    }

                    #revTag {
                        color: red;
                        z-index: 2;
                        height: 100%;
                    }

                `}</style>
            </h3>
        );
    }
}

export default WordLoop;