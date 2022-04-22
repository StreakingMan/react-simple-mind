import React from 'react';

export const LinkIcon = (
    <svg
        style={{ verticalAlign: 'bottom' }}
        viewBox="0 0 1024 1024"
        width="18"
        height="18"
    >
        <path d="M314.2144 401.9712a32 32 0 0 1 0 45.2608l-22.8608 22.912a181.504 181.504 0 0 0-4.736 251.776l4.736 4.8896a181.504 181.504 0 0 0 251.776 4.736l4.8896-4.736 22.8864-22.8864a32 32 0 0 1 45.2608 45.2608l-22.8864 22.8864c-94.1056 94.1056-245.5808 95.8464-341.8112 5.2224l-5.376-5.2224c-94.1056-94.1056-95.8464-245.5808-5.2224-341.8112l5.2224-5.376 22.8608-22.8864a32 32 0 0 1 45.2608 0z m120.5504-165.76a245.504 245.504 0 0 1 347.1872 0c94.1056 94.1056 95.8464 245.5808 5.2224 341.8112l-5.2224 5.376-22.8864 22.8864a32 32 0 0 1-45.2608-45.2608l22.8864-22.8864a181.504 181.504 0 0 0 4.736-251.776l-4.736-4.8896a181.504 181.504 0 0 0-251.776-4.736l-4.8896 4.736-22.912 22.8608a32 32 0 0 1-45.2608-45.2352l22.912-22.8864z" />
        <path d="M604.5696 413.5936a32 32 0 0 1 2.2016 42.8032l-2.2016 2.432-135.8592 135.8848a32 32 0 0 1-47.4368-42.8288l2.2016-2.432 135.8592-135.8592a32 32 0 0 1 45.2352 0z" />
    </svg>
);

export const ToggleIcon = (closed: boolean) => {
    return (
        <svg width="16" height="16">
            <path d="M3 8 L13 8" stroke="currentColor" strokeWidth="1" />
            {closed && (
                <path d="M8 3 L8 13" stroke="currentColor" strokeWidth="1" />
            )}
            <circle
                cx="8"
                cy="8"
                r="7"
                stroke="currentColor"
                fill="transparent"
                strokeWidth="1"
            />
        </svg>
    );
};
