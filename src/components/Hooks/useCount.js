import { useState } from 'react';

export function useCount(old) {
    // как-то тупо, но сама
    old = old ? old : 1;
    const [count, setCount] = useState(old);
    // в уроке:
    // const [count, setCount] = useState(old || 1);

    const onChange = e => setCount(e.target.value);

    return { count, setCount, onChange };
};