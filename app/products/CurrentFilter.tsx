'use client';

import { useSearchParams } from "next/navigation";


export default function CurrentFilter() {
    const searchParams = useSearchParams();
    const category = searchParams.get('category')
    return (
        <div>
            <p>Showing <b>{category || 'all'}</b> products</p>
                   </div>
    );
}
