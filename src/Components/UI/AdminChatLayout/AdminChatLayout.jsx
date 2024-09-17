import React from 'react'
import styles from "./index.module.scss"
import { useTranslation } from 'react-i18next'
const AdminChatLayout = () => {
  const {t}=useTranslation("common"); 
    
  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
        {t("selectuser")}
        </div>
    </div>
  )
}

export default AdminChatLayout