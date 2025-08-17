import { useState, useEffect } from 'react';
import { TYPING_TITLES } from '../constants';

export const useTypingEffect = () => {
    const [text, setText] = useState('');
    const [titleIndex, setTitleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentTitle = TYPING_TITLES[titleIndex];
        let timeoutId: NodeJS.Timeout;

        if (isDeleting) {
            if (text.length > 0) {
                timeoutId = setTimeout(() => {
                    setText(currentTitle.substring(0, text.length - 1));
                }, 100);
            } else {
                setIsDeleting(false);
                setTitleIndex((prevIndex) => (prevIndex + 1) % TYPING_TITLES.length);
            }
        } else {
            if (text.length < currentTitle.length) {
                timeoutId = setTimeout(() => {
                    setText(currentTitle.substring(0, text.length + 1));
                }, 150);
            } else {
                timeoutId = setTimeout(() => {
                    setIsDeleting(true);
                }, 2000);
            }
        }

        return () => clearTimeout(timeoutId);
    }, [text, isDeleting, titleIndex]);

    return { text };
};
