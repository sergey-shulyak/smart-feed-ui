import React from 'react';
import { PublicationCard } from '../PublicationCard';

function PublicationList(props) {
    const { publications } = props;

    return (
        <div>
            {publications.map((publication) => (
                <PublicationCard key={publication.id} {...publication} />
            ))}
        </div>
    );
}

export default PublicationList;
