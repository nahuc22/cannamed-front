import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { loginUser } from "../../redux/actions/authActions"

import { Label } from "../../../@/components/ui/label"
import { Input } from "../../../@/components/ui/input"
import { Button } from "../../../@/components/ui/button"
import { SheetFooter } from "../../../@/components/ui/sheet"
import styles from "./LoginForm.module.css"

export default function LoginForm({ onLogin }) {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const {user, error, loading } = useSelector((state) => state.auth)

  const handleLogin = async () => {
    const credentials = { email, password };
    const result = await dispatch(loginUser(credentials)); // <-- usar await
    localStorage.setItem('userId', result.user.id);

    if (result.success) {
      onLogin && onLogin(); // <-- solo se llama si el login es exitoso
    } else {
      console.error("Login fallido:", result.message);
    }
  };
  


  return (
    <>
      <div className={styles.formGrid}>
        <div className={styles.formRow}>
          <Label htmlFor="email" className={styles.label}>
            Email
          </Label>
          <Input
            id="email"
            placeholder="ej: juanperez@gmail.com"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formRow}>
          <Label htmlFor="password" className={styles.label}>
            Password
          </Label>
          <Input
            type="password"
            id="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}
      </div>

      {/* <SheetFooter className={styles.footer}> */}
          <Button type="button" onClick={handleLogin} disabled={loading}>
            {loading ? "Cargando..." : "Iniciar sesión"}
          </Button>
      {/* </SheetFooter> */}
    </>
  )
}
