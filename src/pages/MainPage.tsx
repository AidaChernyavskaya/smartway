import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import repositoriesStore from "../components/stores/RepositoriesStore";
import RepoCardMini from "../components/repositories/RepoCardMini/RepoCardMini";

const MainPage = observer(() => {
    useEffect(() => {
        repositoriesStore.fetchRepositories('df');
    }, []);

    if (repositoriesStore.isLoading) {
        return <div>Загрузка...</div>;
    }

    if (repositoriesStore.error) {
        return <div>Ошибка: {repositoriesStore.error}</div>;
    }

    return (
        <div className={'container'}>
            <h2 className={'result'}>Result: {repositoriesStore.totalCount} repositories</h2>
            <div className={'repos'}>
                {repositoriesStore.repositories.map((repo) => (
                    <RepoCardMini repo={repo} key={repo.id}/>
                ))}
            </div>

            <div className={'pagination'}>
                <button className={'button_colored'}>Prev</button>
                <p className={'pages'}>pagination</p>
                <button className={'button_colored'}>Next</button>
            </div>
        </div>
    );
});

export default MainPage;