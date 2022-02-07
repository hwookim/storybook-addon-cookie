import React, {useEffect, useState} from 'react';
import cookie from '../utils/cookie';

export default function Demo():JSX.Element {
  const [value, setValue] = useState<string | undefined>('');

  useEffect(() => {
    const testCookie = cookie.get('test') ;
    setValue(testCookie);
  },[]);

  return <>{value || 'There\'s nothing!'}</>;
}