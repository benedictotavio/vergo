"use client"

import { ListItem } from '@/app/interfaces/list.item';
import { useState } from 'react';
import styles from './Accordion.module.css';
import Paragraph from '../text/paragraph/Paragraph';
import Title from '../text/title/Title';
import HtmlBox from '../text/html_box/HtmlBox';

interface AccordionProps {
  items: ListItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => (
        <div key={index} className={styles.accordion_item}>
          <div className={styles.accordion_header} onClick={() => toggleAccordion(index)}>
            <Title title={`${index + 1}. ${item.title}`} heading={'h5'} fontSize={18} />
            <i className={styles.accordion_icon}>
              {openIndex === index ?
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" id={styles.arrow_down}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
                : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" id={styles.arrow_up}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              }
            </i>
          </div>
          {openIndex === index && (
            <div className={styles.accordion_content}>
              {
                item.text[0] !== '<' ? (
                  <Paragraph fontSize={18} fontFamily='Montserrat'>
                    {item.text}
                  </Paragraph>
                ) : (
                  <HtmlBox fontSize={18} fontFamily='Montserrat' html={item.text} container />
                )
              }
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
