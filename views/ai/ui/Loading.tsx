import React from 'react';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
    return (
        <div className="mt-10 flex w-full items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-jgreen"></div>
        </div>
    );
};

export default Loading;
