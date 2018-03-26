import * as React from "react";

export interface BadgeCardProps {
    name: string;
    points: number;
}

export class BadgeCard extends React.Component<BadgeCardProps> {
    render() {
        return (
            <div className="badge-panel">
                <p>{this.props.name} {this.props.points} </p>
            </div>
        );
    }
}
