import { useEffect, useState } from 'react';

import * as gameService from '../../services/gameService';
import GameListItem from './game-list-item/GameListItem';

export default function GameList() {
    const [games, setGames] = useState([]);
    // games => [{_id, title, img}, {_id, title, img}...]

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result));
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(game => (
                <GameListItem key={game._id} {...game} />
                // can write one by one
                // title={game.title}
                // category= {game.category}.....
            ))}

            {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}
