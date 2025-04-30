"use client"

import React, { useState } from 'react';
import Accordion from './accordion';

const AccordionGroup = ({ items }) => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div>
      {items.map(item => (
        <Accordion
          key={item.id}
          id={item.id}
          title={item.title}
          isOpen={openId === item.id}
          onToggle={handleToggle}
        >
          {item.content}
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionGroup;