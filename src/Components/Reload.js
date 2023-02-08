import React, { useEffect } from 'react';

function Reload () {
  
    useEffect(() => {
        window.addEventListener("popstate", () => {
        window.location.reload();
    })

  },[])

  return (
    <div>
    </div>
  )
}

export default Reload;
