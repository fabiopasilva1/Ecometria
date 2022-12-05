import React from 'react'

const Search = () => {
    return (
        <form action="#" method="GET">
            <input type="text" name="s" placeholder="To Search start typing...." autoComplete="off" />
            <button type="button" className="btn-close"><i className="ion ion-android-close"></i></button>
        </form>
    )
}

export default Search