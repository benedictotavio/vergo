import styles from './CardInfo.module.css'


type CardInfoProps = {
    title: string
    description: string
}

const CardInfo = ({ title, description }: CardInfoProps) => {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default CardInfo