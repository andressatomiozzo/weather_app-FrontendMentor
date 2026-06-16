import React from 'react'

const useClickOut = (refElement, closeFunction) => {
    React.useEffect(() => {
      function handleClickOutside(event) {
        if (refElement.current && !refElement.current.contains(event.target)) {
          closeFunction(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
  
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [refElement, closeFunction]);
}

export default useClickOut
