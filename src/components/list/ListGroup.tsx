import { ListItem } from "@/app/interfaces/list.item";
import styles from "./ListGroup.module.css";
import Paragraph from "../text/paragraph/Paragraph";
import Title from "../text/title/Title";

type ListGroupProps = {
    items: ListItem[];
}

const ListGroup = ({ items }: ListGroupProps) => {

    const chunkArray = (arr: ListItem[], size: number = 3) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    return (
        <ul className={styles.list_group}>
            {chunkArray(items).map((item, index) => (
                <li key={index} className={styles.list_group_content}>
                    {item.map((item, index) => (
                        <div key={index} className={styles.list_group_item}>
                            <Title heading="h4" title={item.title} isBold fontSize={24} />
                            <Paragraph fontFamily="Montserrat">{item.text}</Paragraph >
                        </div>
                    ))}
                </li>
            ))}
        </ul>
    )
}

export default ListGroup