import React from 'react'
import styles from './index.module.css'
import { ButtonProps } from './types'

const Button: React.FC<ButtonProps> = ({
  children,
  redirectUrl,
  color,
  isExternal = false,
  size = 'medium',
  onClick,
  noBackground = false,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: color || '#000',
  }

  if (noBackground) {
    buttonStyle.backgroundColor = 'transparent'
    buttonStyle.border = 0
    buttonStyle.color = '#000'
  }

  switch (size) {
    case 'small':
      buttonStyle.fontSize = '12px'
      buttonStyle.width = '50px'
      buttonStyle.height = '20px'
      break
    case 'large':
      buttonStyle.fontSize = '20px'
      buttonStyle.width = '100px'
      buttonStyle.height = '40px'
      break
    default:
      buttonStyle.fontSize = '16px'
      buttonStyle.width = '200px'
      buttonStyle.height = '40px'
      break
  }

  return (
    <button
      className={styles.button}
      style={buttonStyle}
      tabIndex={0}
      onClick={onClick}
    >
      {redirectUrl ? (
        <a
          href={redirectUrl}
          target={isExternal ? '_blank' : '_self'}
          rel='noopener noreferrer'
          tabIndex={-1}
          style={{ width: '100%' }}
        >
          {children}
        </a>
      ) : (
        <>{children}</>
      )}
    </button>
  )
}

export default Button
