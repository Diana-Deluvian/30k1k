import { useState, useEffect } from 'react';

const useBackend = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
        fetch('http://localhost:8080/' + key )
        .then(response => response.json())
        .then(json => {
            console.log(json)
            return json ? json : initialValue;
      });  
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    
  }, [key, value]);

  return [value, setValue];
};

export default useBackend;

