import React from 'react';
import ButtonBack from "../components/library/ButtonBack/ButtonBack";
import RepoCardDetailed from "../components/library/RepoCardDetailed/RepoCardDetailed";

const DetailedInfo = () => {
    return (
        <div className={'container'}>
            <ButtonBack/>
            <RepoCardDetailed/>
        </div>
    );
};

export default DetailedInfo;