import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../../../@/components/ui/sheet"
import { useEffect, useState } from "react"
import styles from "./Sheet.module.css"
import LoginForm from "../LoginForm/LoginForm"
import CartView from "../CartView/CartView"
import { useSelector } from "react-redux"

export default function SheetComponent({ open, setOpen }) {
  const [shouldRender, setShouldRender] = useState(open)
  const [isClosing, setIsClosing] = useState(false)
  const { isLoggedIn } = useSelector((state) => state.auth)

  useEffect(() => {
    if (open) {
      setShouldRender(true)
      setIsClosing(false)
    } else {
      setIsClosing(true)
      setTimeout(() => setShouldRender(false), 300)
    }
  }, [open])

  if (!shouldRender) return null;

  return (
    <Sheet open={true} modal={false}>
      <SheetContent
        side="right"
        className={`${styles.sheetContent} ${isClosing ? styles.slideOut : ""}`}
      >
        <button onClick={() => setOpen(false)} className={styles.closeButton}>
          ✕
        </button>

        <SheetHeader>
          <SheetTitle className={styles.title}>
            {isLoggedIn ? "Carrito de compras" : "Iniciar sesión"}
          </SheetTitle>
          <SheetDescription className={styles.description}>
            {isLoggedIn
              ? "Aquí están tus productos seleccionados."
              : "Ingresá tus datos para continuar."}
          </SheetDescription>
        </SheetHeader>

        {isLoggedIn ? <CartView /> : <LoginForm />}
      </SheetContent>
    </Sheet>
  )
}
