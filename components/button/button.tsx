import styles from "components/button/button.module.scss"

type Props = {
  buttonType: string
  buttonSize: string
  rounded: boolean
  onButtonClick: Function
}

export const Button: React.FC<Props> = ({
  buttonType,
  buttonSize,
  onButtonClick,
  rounded,
  children,
}) => {
  return (
    <button
      aria-label="button"
      type="button"
      className={`md:w-auto md:inline-flex py-3 px-2 md:px-12 ${
        rounded ? "rounded-full" : ""
      } w-full ${
        buttonType === "primary"
          ? styles.primary + " hover:ring-4 ring-zinc-500"
          : buttonType === "secondary"
          ? styles.secondary + " hover:ring-4 ring-gray-900"
          : null
      } items-center justify-center general-ring-state ${
        buttonSize === "small"
          ? " text-sm md:text-base"
          : buttonSize === "medium"
          ? " text-base md:text-lg"
          : buttonSize === "large"
          ? " text-lg md:text-xl"
          : null
      }`}
      onClick={() => onButtonClick()}
    >
      {children}
    </button>
  )
}
