import { useRef, useEffect, useCallback } from "react";

export function useRafFn(callback: () => void): () => void {
	const callbackRef = useRef<() => void>(callback);

	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	const frameRef = useRef<number | undefined>();

	// const rafFn = useCallback(() => {
	// 	const callback = callbackRef.current;
	// 	if (callback) {
	// 		callback();
	// 		frameRef.current = requestAnimationFrame(rafFn);
	// 	}
	// }, []);

	const rafFn = useCallback(() => {
		const callback = callbackRef.current;
		if (callback) {
			callback();
			frameRef.current = requestAnimationFrame(rafFn);
		}
	}, []) as () => void;

	useEffect(() => {
		frameRef.current = requestAnimationFrame(rafFn);
		return () => cancelAnimationFrame(frameRef.current as number);
	}, [rafFn]);

	return rafFn;
}
