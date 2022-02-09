import React from "react";
import './RightButton.scss';

interface RightButtonProps {
    children: React.ReactNode
    onClick: () => any
}

export function RightButton({ children, onClick }: RightButtonProps): React.ReactElement {
    return <button className="RightButton" onClick={onClick}>{children}</button>
}