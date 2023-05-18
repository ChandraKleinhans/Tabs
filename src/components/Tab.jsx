import React from 'react'

const Tab = (props) => {

    //Destructure props into tab, index, and setIndex
    const {tab, index, setIndex} = props;

    //Destructure properties of Tab object into label and content
    const {label, contents} = tab;

    //Handlers
    const tabSelected = (e, index) =>{
        setIndex(index);
    }

    //JSX
  return (
    <>
    <button onClick = {e => tabSelected(e, index)} className = "button btn-secondary">
        {label}
    </button>
    </>
    )
}

export default Tab