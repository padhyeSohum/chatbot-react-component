import React from 'react';

export interface ChatComponentProps {
    title: string
}

const ChatComponent = (props: ChatComponentProps) => {
    return (
        <div>{props.title}</div>
    );
}

export default ChatComponent;