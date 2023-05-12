import { AxiosResponse } from 'axios';
import { useEffect } from 'react';

export const useAsync = (
  asyncFn: () => Promise<AxiosResponse<any, any>>,
  successFunction: Function,
  returnFunction: Function,
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((result) => {
      if (isActive) successFunction(result.data);
    }).catch(e => console.log(e));
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, dependencies);
};
