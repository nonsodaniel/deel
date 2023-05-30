interface IInputProps {
  id: string;
  className: string;
  type: string;
  placeholder: string;
  value: string;
  required: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  resetSearchValue: () => void;
  displayResetIcon: boolean;
  onFocus: () => void;
  dataTestId: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

const Input = ({
  id,
  className,
  type,
  placeholder,
  value,
  onChange,
  onFocus,
  resetSearchValue,
  required,
  displayResetIcon = true,
  dataTestId,
  inputRef,
}: IInputProps) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={className}
        id={id}
        placeholder={placeholder}
        value={value}
        maxLength={35}
        onChange={onChange}
        required={required}
        onFocus={onFocus}
        data-testid={dataTestId}
        ref={inputRef}
      />
      {displayResetIcon && (
        <span
          className="cancel-wrap pointer"
          onClick={() => resetSearchValue()}
        >
          X
        </span>
      )}
    </div>
  );
};

export default Input;
