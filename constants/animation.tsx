import { useRef, useEffect, useCallback } from "react";

export function useRafFn(callback: any) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const frameRef: any = useRef();

  const rafFn = useCallback(() => {
    const callback = callbackRef.current;
    if (callback) {
      callback();
      frameRef.current = requestAnimationFrame(rafFn);
    }
  }, []);

  useEffect(() => {
    frameRef.current = requestAnimationFrame(rafFn);
    return () => cancelAnimationFrame(frameRef.current);
  }, [rafFn]);

  return rafFn;
}
