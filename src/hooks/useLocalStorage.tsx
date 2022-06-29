import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T | undefined | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof initialValue === 'function') {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  } )
  
  useEffect( () => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value] )

  return [value, setValue] as [typeof value, typeof setValue];
}

//   ) => {
//     try {
//       const item = window.localStorage.getItem( key );
//       return item ? JSON.parse( item ) : initialValue;
//     } catch (error) {
//       console.log(error);
//       return initialValue;
//     }
//   } );

//   const setValue = value => {
//     try {
//       setValue( value );
//       window.localStorage.setItem( key, JSON.stringify( value ) );
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return [ value, setValue ];
// }
