import { RefObject, useEffect } from 'react';

const useOnClickOutside: (
  ref: RefObject<any>,
  {
    handler,
    events,
    except,
    disable,
  }: {
    handler?: (event: MouseEvent | KeyboardEvent) => void;
    events?: string[];
    except?: (event: MouseEvent | KeyboardEvent) => boolean;
    disable?: boolean;
  }
) => void = (
  ref,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  { handler = () => {}, events = ['mousedown', 'touchstart'], except = () => false, disable = false }
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | KeyboardEvent) => {
      if (!ref.current || ref.current.contains(event.target) || except(event)) {
        return;
      }

      handler(event);
    };

    if (!disable) {
      events.forEach((event) => {
        document.addEventListener(event, listener);
      });
    }

    return () => {
      if (!disable) {
        events.forEach((event) => {
          document.removeEventListener(event, listener);
        });
      }
    };
  }, [ref, handler, events, except, disable]);
};

export default useOnClickOutside;
