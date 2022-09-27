import type {NextPage} from 'next'

/**
 * Документы
 *
 * @constructor
 */
const Docs: NextPage = () => {
    return (
        <>
            <h1 style={{color: "white"}}><a href="/rating.xlsx" download>Рейтинг игроков</a></h1>
            <div style={{height: '600px'}}></div>
        </>
    )
}

export default Docs