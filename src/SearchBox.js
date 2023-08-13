import { forwardRef, useRef, useImperativeHandle } from "react";

const SearchBox = forwardRef(function SearchBox(props, ref) {
  const inputRef = useRef(null);
  const { label, ...otherProps } = props;

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        reset() {
          inputRef.current.value = "";
        },
        value() {
          return inputRef.current.value;
        }
      };
    },
    []
  );

  return (
    <label>
      <input type="text" onChange={otherProps.onSearchChange} ref={inputRef} />
    </label>
  );
});

export default SearchBox;
