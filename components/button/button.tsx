import styles from "components/button/button.module.scss"

type Props = {
  buttonType: string
  onButtonClick: Function
}

export const Button: React.FC<Props> = ({
  buttonType,
  onButtonClick,
  children,
}) => {
  return (
    <button
      aria-label="button"
      type="button"
      className={`text-sm md:text-xl md:w-auto md:inline-flex py-3 px-2 md:px-12 rounded-full w-full ${
        buttonType === "primary"
          ? styles.primary + " hover:ring-4 ring-zinc-500"
          : buttonType === "secondary"
          ? styles.secondary + " hover:ring-4 ring-gray-900"
          : null
      } items-center justify-center general-ring-state font-medium`}
      onClick={() => onButtonClick()}
    >
      {children}
    </button>
  )
}
