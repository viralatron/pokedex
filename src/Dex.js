function Dex(poke) {
    console.log(poke.poke);
    if(!poke.poke) return (
        <>
            pokemon
        </>
    )
    return (
        <>
            <figure className="images">
                <img src={poke.poke.sprites.front_default} alt="visão frontal"/>
                <figcaption>visão frontal</figcaption>
                <img src={poke.poke.sprites.front_shiny} alt="visão brilhante"/>
                <figcaption>visão brilhante</figcaption>
            </figure>
            <article className="detail">
                No {poke.poke.id}
                <dl>
                    <dt>Name:</dt><dd>{poke.poke.name}</dd>
                    <dt>Type:</dt><dd>{poke.poke.types.map((val) => {return (<span key={val.type.name} className={"type "+val.type.name}>{val.type.name}</span>)})}</dd>
                    <dt>Aquirable Skills:</dt><dd>{poke.poke.moves.map((val) => {return (<span key={val.move.name} className={"move"}>{val.move.name}</span>)})}</dd>
                    <dt>Weight:</dt><dd>{poke.poke.weight/10}Kg</dd>
                    <dt>Height:</dt><dd>{poke.poke.height/10}m</dd>
                </dl>
            </article>
        </>
    )
}

export default Dex;