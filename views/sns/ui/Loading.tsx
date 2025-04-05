import React from 'react';

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
    return (
        <div className="fixed inset-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-jgreen"></div>
        </div>
    );
};

export default Loading;
